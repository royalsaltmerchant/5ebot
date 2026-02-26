#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/_common.sh"

ACTION="${1:-status}"

case "$ACTION" in
  restart|start|stop|status|logs)
    service_action "$ACTION"
    ;;
  *)
    echo "Usage: $0 {restart|start|stop|status|logs}"
    exit 1
    ;;
esac
