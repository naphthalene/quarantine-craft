#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

# -------------------------------------------------------
# This script does the following to back up the server:
# - Create a tarball to a local backup directory with:
#   - world* data
#   - plugin data files (that gets updated by the server)
# -------------------------------------------------------

[ -f /etc/default/minecraft ] && . /etc/default/minecraft
: "${SERVER_ROOT?}"
: "${BACKUPS_DIR?}"

NOW_TS="$(date +%s)"
BACKUP_TARBALL="${BACKUPS_DIR}/${NOW_TS}.tar"
PLUGIN_DATA_PATHS=(
  "AutomatedCrafting/droppers.json"
  "ChestSort/playerdata/"
  "dynmap/ids-by-ip.txt"
  "dynmap/markers.yml"
  "Essentials/warps/"
  "Essentials/userdata/"
  "GriefPreventionData/Logs"
  "GriefPreventionData/ClaimData"
  "GriefPreventionData/PlayerData"
  "LuckPerms/luckperms-h2.mv.db"
  "LuckPerms/luckperms-h2.trace.db"
  "mcMMO/flatfile/"
  "TreeAssist/world/"
  "TreeAssist/world_nether/"
  "TreeAssist/world_the_end/"
)

function _tar() {
  tar -C ${SERVER_ROOT}/ $@
}

function _create_backup_tarball() {
  echo ">> Created ${BACKUP_TARBALL}"
  _tar -cf "${BACKUP_TARBALL}" -T /dev/null
}

function _backup_plugins() {
  echo ">> Backing up plugin data..."
  for dataPath in "${PLUGIN_DATA_PATHS[@]}"
  do
    if [[ -e "${SERVER_ROOT}/plugins/${dataPath}" ]]; then
      echo ">> + [${dataPath}]"
      _tar --append -f "${BACKUP_TARBALL}" "plugins/${dataPath}"
    else
      echo ">> ! Not found: [${dataPath}]"
    fi
  done
}

function _backup_worlds() {
  echo ">> Backing up worlds..."
  _tar --append -f "${BACKUP_TARBALL}" world/ world_nether/ world_the_end/
}

_create_backup_tarball
_backup_plugins
_backup_worlds
echo ">> Done"
