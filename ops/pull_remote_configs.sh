#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/_common.sh"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SNAPSHOT_DIR="$REPO_ROOT/docs/ops/remote_snapshot_$(date -u +%Y%m%d_%H%M%S)"

mkdir -p "$SNAPSHOT_DIR"

echo "Pulling remote configs from $SERVER ..."

run_remote "hostname; date -u; uname -a" > "$SNAPSHOT_DIR/system.txt"
run_remote "cd '$REMOTE_DIR' && pwd && git rev-parse --short=12 HEAD && git branch --show-current && git remote -v" > "$SNAPSHOT_DIR/repo.txt"
run_remote "systemctl --no-pager --full status nginx | sed -n '1,60p'" > "$SNAPSHOT_DIR/nginx_status.txt"
run_remote "sed -n '1,260p' /etc/nginx/sites-available/default" > "$SNAPSHOT_DIR/nginx_default.conf"
run_remote "if [ -f /etc/systemd/system/5ebot.service ]; then sed -n '1,260p' /etc/systemd/system/5ebot.service; fi" > "$SNAPSHOT_DIR/5ebot.service.remote"
run_remote "cd '$REMOTE_DIR' && if [ -x './node_modules/.bin/pm2' ]; then ./node_modules/.bin/pm2 status; ./node_modules/.bin/pm2 describe '$PM2_PROCESS_NAME' || true; fi" > "$SNAPSHOT_DIR/pm2.txt"

echo "Snapshot saved to: $SNAPSHOT_DIR"
