#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSE_FILE="$ROOT_DIR/.docker/docker-compose.yaml"

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

if ! command -v docker &>/dev/null; then
  echo -e "${RED}[ERROR]${NC} Docker is not installed."
  exit 1
fi

echo -e "${GREEN}[✓]${NC} Stopping containers..."
docker compose -f "$COMPOSE_FILE" down
echo -e "${GREEN}[✓]${NC} Containers stopped."
