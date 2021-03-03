# Ansible Playbook

This is the playbook to deploy the server to a host over SSH.

## Required variables

These need to be configured by end user

* title

* web_fqdn
* web_certs_dir
* web_root_dir
* web_port

* srv.user
* srv.tmux_session_name
* srv.backup_dir
* srv.overlay_dir
* srv.config_dir
* srv.data_dir
* srv.work_dir
* srv.plugin_jar_dir
* srv.server_jar_dir
