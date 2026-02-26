#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/_common.sh"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

STAGING_DIR="$(mktemp -d)"
trap 'rm -rf "$STAGING_DIR"' EXIT

cp "$REPO_ROOT/systemd/5ebot.service" "$STAGING_DIR/5ebot.service"

echo "Uploading systemd unit to $SERVER ..."
rsync -az -e "$RSYNC_SSH" "$STAGING_DIR/5ebot.service" "$SERVER:/tmp/5ebot.service"

echo "Installing unit and migrating process manager..."
run_remote "set -euo pipefail; \
  test -f '$REMOTE_DIR/dist/server.js'; \
  cp /tmp/5ebot.service /etc/systemd/system/5ebot.service; \
  systemctl daemon-reload; \
  cd '$REMOTE_DIR'; \
  if [ -x './node_modules/.bin/pm2' ]; then ./node_modules/.bin/pm2 stop '$PM2_PROCESS_NAME' || true; ./node_modules/.bin/pm2 delete '$PM2_PROCESS_NAME' || true; ./node_modules/.bin/pm2 save || true; fi; \
  systemctl enable 5ebot.service; \
  systemctl restart 5ebot.service; \
  systemctl --no-pager --full status 5ebot.service | sed -n '1,28p'"

echo "Migration complete."
