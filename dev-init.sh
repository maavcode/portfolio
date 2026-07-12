#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSE_FILE="$ROOT_DIR/.docker/docker-compose.yaml"
ENV_FILE="$ROOT_DIR/.env"

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

check_docker() {
  if ! command -v docker &>/dev/null; then
    echo -e "${RED}[ERROR]${NC} Docker is not installed."
    echo "  Install it from: https://docs.docker.com/engine/install/"
    exit 1
  fi

  if ! docker info &>/dev/null; then
    echo -e "${RED}[ERROR]${NC} Docker is not running or you don't have permissions."
    echo "  Make sure Docker Desktop is open."
    exit 1
  fi
}

check_compose() {
  if ! docker compose version &>/dev/null; then
    echo -e "${RED}[ERROR]${NC} Docker Compose is not available."
    echo "  Update Docker Desktop to a recent version."
    exit 1
  fi
}

check_env() {
  local astro_port="${ASTRO_PORT:-4321}"

  if [ -f "$ENV_FILE" ]; then
    local env_port
    env_port=$(grep -E '^ASTRO_PORT=' "$ENV_FILE" | cut -d= -f2 | tr -d '[:space:]')
    [ -n "$env_port" ] && astro_port="$env_port"
  fi

  echo "$astro_port"
}

check_docker
check_compose

ASTRO_PORT=$(check_env)

echo -e "${GREEN}[✓]${NC} Docker OK"
echo -e "${GREEN}[✓]${NC} Docker Compose OK"

echo -e "${YELLOW}[→]${NC} Starting astro container..."
docker compose -f "$COMPOSE_FILE" up -d astro

echo -e "${GREEN}[✓]${NC} Server available at http://localhost:${ASTRO_PORT}"
echo -e "${YELLOW}[→]${NC} Starting dev server (Ctrl+C to stop)...${NC}"
echo

docker compose -f "$COMPOSE_FILE" exec -e PORT="$ASTRO_PORT" astro npm run dev
