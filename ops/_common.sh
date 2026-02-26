#!/usr/bin/env bash
set -euo pipefail

SERVER="${BOT_SERVER:-root@68.183.140.238}"
REMOTE_DIR="${BOT_REMOTE_DIR:-/root/5ebot}"
SSH_KEY="${BOT_SSH_KEY:-}"
REMOTE_NPM_BIN="${BOT_REMOTE_NPM_BIN:-/usr/bin/npm}"
PM2_BIN="${BOT_REMOTE_PM2_BIN:-./node_modules/.bin/pm2}"
PM2_PROCESS_NAME="${BOT_PM2_PROCESS_NAME:-start_prod}"
SYSTEMD_SERVICE_NAME="${BOT_SYSTEMD_SERVICE_NAME:-5ebot.service}"

if [[ -n "$SSH_KEY" ]]; then
  SSH_CMD=(ssh -i "$SSH_KEY" "$SERVER")
  RSYNC_SSH="ssh -i $SSH_KEY"
else
  SSH_CMD=(ssh "$SERVER")
  RSYNC_SSH="ssh"
fi

run_remote() {
  "${SSH_CMD[@]}" "$1"
}

service_action() {
  local action="$1"
  local manager="${BOT_SERVICE_MANAGER:-systemd}"

  case "$manager" in
    pm2)
      case "$action" in
        restart)
          run_remote "cd '$REMOTE_DIR' && if $PM2_BIN describe '$PM2_PROCESS_NAME' >/dev/null 2>&1; then $PM2_BIN restart '$PM2_PROCESS_NAME'; else $PM2_BIN start ./commands/start_prod.sh --name '$PM2_PROCESS_NAME'; fi && $PM2_BIN status '$PM2_PROCESS_NAME'"
          ;;
        start)
          run_remote "cd '$REMOTE_DIR' && $PM2_BIN start ./commands/start_prod.sh --name '$PM2_PROCESS_NAME' && $PM2_BIN status '$PM2_PROCESS_NAME'"
          ;;
        stop)
          run_remote "cd '$REMOTE_DIR' && $PM2_BIN stop '$PM2_PROCESS_NAME' && $PM2_BIN status '$PM2_PROCESS_NAME'"
          ;;
        status)
          run_remote "cd '$REMOTE_DIR' && $PM2_BIN status '$PM2_PROCESS_NAME'"
          ;;
        logs)
          run_remote "cd '$REMOTE_DIR' && $PM2_BIN logs '$PM2_PROCESS_NAME' --lines 120 --nostream"
          ;;
        *)
          echo "Invalid action for pm2: $action"
          exit 1
          ;;
      esac
      ;;
    systemd)
      case "$action" in
        restart|start|stop|status)
          run_remote "systemctl $action '$SYSTEMD_SERVICE_NAME' && systemctl --no-pager --full status '$SYSTEMD_SERVICE_NAME' | sed -n '1,24p'"
          ;;
        logs)
          run_remote "journalctl -u '$SYSTEMD_SERVICE_NAME' --no-pager -n 120"
          ;;
        *)
          echo "Invalid action for systemd: $action"
          exit 1
          ;;
      esac
      ;;
    *)
      echo "Unsupported BOT_SERVICE_MANAGER=$manager (use pm2 or systemd)."
      exit 1
      ;;
  esac
}
