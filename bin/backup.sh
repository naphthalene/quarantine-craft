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
: "${DATA_DIR?}"
: "${BACKUP_DIR?}"

NOW_TS="$(date +%s)"
BACKUP_TARBALL="${BACKUP_DIR}/${NOW_TS}.tar"

function _tar() {
  tar -C ${DATA_DIR}/ $@
}

function _create_backup_tarball() {
  echo ">> Created [${BACKUP_TARBALL}]"
  _tar -cf "${BACKUP_TARBALL}" -T /dev/null
}

function _backup_data_volume() {
  echo ">> Backing up data volume [${DATA_DIR}]"
  _tar --append -f "${BACKUP_TARBALL}" *
}

_create_backup_tarball
_backup_data_volume
echo ">> Done"
