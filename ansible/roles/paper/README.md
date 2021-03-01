# Paper Server

This is the main minecraft server configuration. In principle, it is an
overlay of rendered configuration templates on top of a backup.

Many plugin configs are not read-only and get updated at runtime. For
example, permissions data, markers, etc. Those get backed up by the
backup scripts, but settings we'd like to be able to change from ansible
vars will be rendered into the `srv.runtime_dir`
