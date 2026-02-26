#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 <staging-dir>"
  exit 1
fi

STAGING_DIR="$1"
mkdir -p "$STAGING_DIR"
mkdir -p "$STAGING_DIR/commands"
mkdir -p "$STAGING_DIR/systemd"
mkdir -p "$STAGING_DIR/ops"

if [[ ! -f "dist/server.js" ]]; then
  echo "dist/server.js not found. Run: npm run build"
  exit 1
fi

cp package.json "$STAGING_DIR/package.json"
cp package-lock.json "$STAGING_DIR/package-lock.json"
cp tsconfig.json "$STAGING_DIR/tsconfig.json"

if [[ -f ".nvmrc" ]]; then
  cp .nvmrc "$STAGING_DIR/.nvmrc"
fi

rsync -a dist/ "$STAGING_DIR/dist/"
rsync -a public/ "$STAGING_DIR/public/"
rsync -a commands/ "$STAGING_DIR/commands/"
rsync -a systemd/ "$STAGING_DIR/systemd/"
rsync -a ops/ "$STAGING_DIR/ops/"
