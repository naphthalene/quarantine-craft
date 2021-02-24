#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

# -------------------------------------------------------
# Synchronizes backup directory with remote host
# -------------------------------------------------------

[ -f /etc/default/minecraft ] && . /etc/default/minecraft
: "${SERVER_ROOT?}"
: "${BACKUPS_DIR?}"

NOW_TS="$(date +%s)"

# function _
