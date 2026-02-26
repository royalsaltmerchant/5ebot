#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/_common.sh"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
STAGING_DIR="$(mktemp -d)"
trap 'rm -rf "$STAGING_DIR"' EXIT
RELEASES_DIR="$REPO_ROOT/.releases"

ALLOW_DIRTY="${BOT_ALLOW_DIRTY:-0}"
FORCE_DELETE="${BOT_FORCE_DELETE:-0}"
BUILD_LOCAL="${BOT_BUILD_LOCAL:-1}"
INSTALL_UNITS="${BOT_INSTALL_UNITS:-1}"
RESTART_SERVICE="${BOT_RESTART_SERVICE:-1}"
CREATE_RELEASE_ARCHIVE="${BOT_CREATE_RELEASE_ARCHIVE:-1}"
SAVE_LOCAL_ARCHIVE="${BOT_SAVE_LOCAL_ARCHIVE:-0}"

if git -C "$REPO_ROOT" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  GIT_SHA="$(git -C "$REPO_ROOT" rev-parse --short=12 HEAD)"
  if [[ "$ALLOW_DIRTY" != "1" ]] && [[ -n "$(git -C "$REPO_ROOT" status --porcelain)" ]]; then
    echo "Refusing deploy with uncommitted changes."
    echo "Set BOT_ALLOW_DIRTY=1 to override."
    exit 1
  fi
else
  GIT_SHA="nogit"
fi

RELEASE_ID="${BOT_RELEASE_ID:-$(date -u +%Y%m%d%H%M%S)-$GIT_SHA}"
ARCHIVE_NAME="5ebot-${RELEASE_ID}.tar.gz"
ARCHIVE_PATH="$RELEASES_DIR/$ARCHIVE_NAME"

echo "Release: $RELEASE_ID"

cd "$REPO_ROOT"
if [[ "$BUILD_LOCAL" == "1" ]]; then
  echo "Building artifacts locally..."
  npm run typecheck
  npm run build
else
  echo "Skipping local build (BOT_BUILD_LOCAL=$BUILD_LOCAL)."
fi

echo "Staging release payload..."
bash "$REPO_ROOT/scripts/deploy/build_release.sh" "$STAGING_DIR"
echo "$RELEASE_ID" > "$STAGING_DIR/RELEASE_ID"

if [[ "$SAVE_LOCAL_ARCHIVE" == "1" ]]; then
  mkdir -p "$RELEASES_DIR"
  tar -czf "$ARCHIVE_PATH" -C "$STAGING_DIR" .
  echo "Saved local release archive: $ARCHIVE_PATH"
fi

echo "Validating remote prerequisites on $SERVER ..."
run_remote "set -euo pipefail; command -v rsync >/dev/null; test -x '$REMOTE_NPM_BIN'; mkdir -p '$REMOTE_DIR' '$REMOTE_DIR/releases'; df -h '$REMOTE_DIR' | sed -n '1,2p'"

RSYNC_DELETE_ENABLED=1
if ! run_remote "[ -f '$REMOTE_DIR/.artifact_deploy_initialized' ]"; then
  if [[ "$FORCE_DELETE" == "1" ]]; then
    echo "First artifact deploy detected. --delete enabled by BOT_FORCE_DELETE=1."
  else
    echo "First artifact deploy detected. Skipping --delete for safety."
    echo "Set BOT_FORCE_DELETE=1 to enable --delete on first artifact deploy."
    RSYNC_DELETE_ENABLED=0
  fi
fi

echo "Syncing artifacts to $SERVER:$REMOTE_DIR ..."
if [[ "$RSYNC_DELETE_ENABLED" == "1" ]]; then
  rsync -az --delete -e "$RSYNC_SSH" \
    --exclude ".env" \
    --rsync-path="mkdir -p '$REMOTE_DIR' && rsync" \
    "$STAGING_DIR"/ "$SERVER:$REMOTE_DIR/"
else
  rsync -az -e "$RSYNC_SSH" \
    --exclude ".env" \
    --rsync-path="mkdir -p '$REMOTE_DIR' && rsync" \
    "$STAGING_DIR"/ "$SERVER:$REMOTE_DIR/"
fi

"${SSH_CMD[@]}" \
  "REMOTE_DIR='$REMOTE_DIR' REMOTE_NPM_BIN='$REMOTE_NPM_BIN' RELEASE_ID='$RELEASE_ID' ARCHIVE_NAME='$ARCHIVE_NAME' INSTALL_UNITS='$INSTALL_UNITS' RESTART_SERVICE='$RESTART_SERVICE' CREATE_RELEASE_ARCHIVE='$CREATE_RELEASE_ARCHIVE' PM2_BIN='$PM2_BIN' PM2_PROCESS_NAME='$PM2_PROCESS_NAME' SYSTEMD_SERVICE_NAME='$SYSTEMD_SERVICE_NAME' BOT_SERVICE_MANAGER='${BOT_SERVICE_MANAGER:-systemd}' bash -se" <<'REMOTE'
set -euo pipefail

cd "$REMOTE_DIR"
echo "$RELEASE_ID" > RELEASE_ID
echo "$ARCHIVE_NAME" > CURRENT_RELEASE_ARCHIVE
touch .artifact_deploy_initialized

if [[ "$CREATE_RELEASE_ARCHIVE" == "1" ]]; then
  echo "Creating remote release archive..."
  mkdir -p "$REMOTE_DIR/releases"
  ARCHIVE_PATH="$REMOTE_DIR/releases/$ARCHIVE_NAME"
  tar --exclude="./releases" --exclude="./.env" -czf "$ARCHIVE_PATH" .
else
  echo "Skipping remote release archive (BOT_CREATE_RELEASE_ARCHIVE=$CREATE_RELEASE_ARCHIVE)."
fi

echo "Installing production dependencies..."
NPM_MAJOR="$("$REMOTE_NPM_BIN" --version | cut -d. -f1)"
if [[ "$NPM_MAJOR" -ge 7 ]]; then
  "$REMOTE_NPM_BIN" ci --omit=dev
else
  "$REMOTE_NPM_BIN" ci --only=production
fi
chmod +x ./commands/start_prod.sh || true

if [[ "$INSTALL_UNITS" == "1" ]]; then
  if [[ -f "$REMOTE_DIR/systemd/5ebot.service" ]]; then
    echo "Installing systemd unit..."
    cp "$REMOTE_DIR/systemd/5ebot.service" /etc/systemd/system/5ebot.service
    systemctl daemon-reload
  else
    echo "systemd/5ebot.service not found in payload; skipping unit install."
  fi
fi

if [[ "$RESTART_SERVICE" == "1" ]]; then
  if [[ "${BOT_SERVICE_MANAGER:-systemd}" == "systemd" ]]; then
    echo "Restarting systemd service..."
    systemctl enable "$SYSTEMD_SERVICE_NAME"
    systemctl restart "$SYSTEMD_SERVICE_NAME"
    systemctl --no-pager --full status "$SYSTEMD_SERVICE_NAME" | sed -n '1,24p'
  else
    echo "Restarting PM2 process..."
    if $PM2_BIN describe "$PM2_PROCESS_NAME" >/dev/null 2>&1; then
      $PM2_BIN restart "$PM2_PROCESS_NAME"
    else
      $PM2_BIN start ./commands/start_prod.sh --name "$PM2_PROCESS_NAME"
    fi
    $PM2_BIN save || true
    $PM2_BIN status "$PM2_PROCESS_NAME"
  fi
else
  echo "Skipping service restart (BOT_RESTART_SERVICE=$RESTART_SERVICE)."
fi
REMOTE

echo "Deploy complete: $RELEASE_ID"
if [[ "$CREATE_RELEASE_ARCHIVE" == "1" ]]; then
  echo "Remote archive: $REMOTE_DIR/releases/$ARCHIVE_NAME"
fi
