# Deployment And Remote Control

This repo now supports artifact-based deploys and remote service control (modeled after `dm-dash`).

## Current remote target

- Server: `root@68.183.140.238`
- Remote directory: `/root/5ebot`
- Service manager target: `systemd` (`5ebot.service`)

Override via env vars when needed.

## Commands

- `npm run ops:preflight` local checks + remote prerequisites
- `npm run ops:deploy` artifact deploy to server
- `npm run ops:migrate-systemd` one-time migration from PM2 to systemd
- `npm run ops:pull-configs` pull remote config snapshot into `docs/ops/`

Service control examples:

- `bash ./ops/service.sh status`
- `bash ./ops/service.sh restart`
- `bash ./ops/service.sh logs`

## Environment overrides

- `BOT_SERVER` (default: `root@68.183.140.238`)
- `BOT_REMOTE_DIR` (default: `/root/5ebot`)
- `BOT_SSH_KEY`
- `BOT_REMOTE_NPM_BIN` (default: `/usr/bin/npm`)
- `BOT_SERVICE_MANAGER` (default: `systemd`, options: `systemd|pm2`)
- `BOT_SYSTEMD_SERVICE_NAME` (default: `5ebot.service`)
- `BOT_PM2_PROCESS_NAME` (default: `start_prod`)
- `BOT_ALLOW_DIRTY` (default: `0`)
- `BOT_BUILD_LOCAL` (default: `1`)
- `BOT_INSTALL_UNITS` (default: `1`)
- `BOT_RESTART_SERVICE` (default: `1`)
- `BOT_CREATE_RELEASE_ARCHIVE` (default: `1`)
- `BOT_FORCE_DELETE` (default: `0`)
- `BOT_RELEASE_ID` (optional explicit release id)

## One-time migration path

1. `npm run build`
2. `npm run ops:migrate-systemd`
3. `bash ./ops/service.sh status`
4. `bash ./ops/service.sh logs`

## Notes

- Deploy excludes remote `.env` from overwrite.
- Release archives are kept on remote in `/root/5ebot/releases/`.
- If you need to temporarily use PM2 controls, set `BOT_SERVICE_MANAGER=pm2`.
