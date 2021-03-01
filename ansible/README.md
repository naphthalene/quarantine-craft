# Ansible Playbook

This is the playbook to deploy the server to a host over SSH.

## Web server

The webserver hosts the following routes:

* /                     -> Single page app
* /atlas/               -> LiveAtlas app
* /atlas/tiles/         -> Rendered tiles
* /api/                 -> Server data directory

## Required variables

These need to be configured by end user

* fqdn
* title
* backup_dir

* web.letsencrypt_certs_dir
* web.liveatlas_tiles

* srv.user
* srv.overlay_dir
* srv.config_dir
* srv.data_dir
* srv.plugin_jar_dir
* srv.server_jar_dir
