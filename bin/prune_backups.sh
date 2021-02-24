#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

# -------------------------------------------------------
# Thin out old backups to save disk space.
#
# (8)  < than 1 day    -> 3 hour resolution
# (7)  < than 7 days   -> 24 hour resolution
# (10) < than 30 days  -> 72 hour resolution
# (..) Everything else -> monthly resolution
# -------------------------------------------------------

[ -f /etc/default/minecraft ] && . /etc/default/minecraft
: "${BACKUPS_DIR?}"

NOW_TS="$(date +%s)"
BACKUPS_DIR="/var/backup/mc"

function _montly_prune() {
  echo ">> Monthly prune..."
  
}

function _weekly_prune() {
  echo ">> Weekly prune..."

  find 
}
