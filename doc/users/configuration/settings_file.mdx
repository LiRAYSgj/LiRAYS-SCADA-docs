# Configuration

This guide explains how to configure LiRAYS-SCADA using `settings.yaml`, environment variables, and service restart workflows.

## Configuration File Location

Packaged installations use a platform-specific `settings.yaml` file:

- Linux (DEB/RPM): `/etc/lirays-scada/settings.yaml`
- macOS package: `/Library/Application Support/LiRAYSScada/settings.yaml`

On first install, the package seeds `settings.yaml` from `settings.default.yaml` only if `settings.yaml` does not exist. Package upgrades do not overwrite `settings.yaml`.

Default template files shipped by packages:

- Linux (DEB/RPM): `/etc/lirays-scada/settings.default.yaml`
- macOS package: `/Library/Application Support/LiRAYSScada/settings.default.yaml`

For Docker deployments, you can either:

- Pass environment variables directly to the container.
- Mount a settings file and run the server with `--config /path/to/settings.yaml`.

## How Configuration Values Are Resolved

LiRAYS-SCADA resolves each setting in this order:

1. Environment variable override.
2. Value from `settings.yaml`.
3. Built-in fallback default.

### Environment Variable Notes

- Boolean environment variables accept: `true/false`, `1/0`, `yes/no`, `on/off`.
- If an environment variable value cannot be parsed, startup fails with a configuration error.
- If a value exists in `settings.yaml` but cannot be parsed to the expected type, startup fails with a configuration error.

## Modify Configuration

You can modify configuration in two ways.

### Option 1: Edit `settings.yaml` directly

Linux:

```sh
sudo nano /etc/lirays-scada/settings.yaml
```

macOS:

```sh
sudo nano "/Library/Application Support/LiRAYSScada/settings.yaml"
```

### Option 2: Use the `lirays` helper

The CLI can update one parameter at a time:

```sh
sudo lirays settings-update server.bind_host 0.0.0.0
sudo lirays settings-update auth.enabled true
sudo lirays settings-update auth.secret "replace_with_long_random_secret"
```

Inspect effective values (and whether each value came from env/file/default):

```sh
sudo lirays settings
```

## Restart Service After Changes

Configuration changes become effective after service restart.

Linux (systemd):

```sh
sudo systemctl restart lirays-scada
sudo systemctl status lirays-scada
```

macOS (launchd):

```sh
sudo launchctl kickstart -k system/com.lirays.liraysscada
launchctl print system/com.lirays.liraysscada
```

Cross-platform helper (Linux and macOS):

```sh
sudo lirays restart-service
```

Docker:

```sh
# If using docker run
docker restart lirays-scada

# If using compose
docker compose up -d
```

## Full Parameter Reference

### `server`

- `bind_host`
  - Type: string
  - Default in packaged templates: `127.0.0.1`
  - Env var: `BIND_HOST`
  - Description: Host/interface used by HTTP and WebSocket.
  - Common values:
    - `127.0.0.1`: local-only access.
    - `0.0.0.0`: bind all interfaces.

- `bind_port`
  - Type: integer (`u16`)
  - Default: `8245`
  - Env var: `BIND_PORT`
  - Description: Port used by HTTP and WebSocket.

### `paths`

- `data_dir`
  - Type: path or `null`
  - Env var: `DATA_DIR`
  - Default in packaged templates:
    - Linux: `/var/lib/lirays-scada/data`
    - macOS: `/Library/Application Support/LiRAYSScada/data`
  - If unset/missing in non-packaged runs, fallback is `{current_working_directory}/data`.
  - Description: Root directory for runtime data, including DB files, sessions, metrics, and TLS auto-generated certificates.

### `tls`

- `enabled`
  - Type: boolean
  - Default: `false`
  - Env var: `TLS_ENABLE`
  - Description: Enables TLS for both HTTP and WebSocket endpoints.

- `auto`
  - Type: boolean
  - Default: `true`
  - Env var: `TLS_AUTO`
  - Description: If `tls.enabled=true` and cert/key are not provided, auto-generates a self-signed certificate pair under `${data_dir}/certificates`.

- `cert_path`
  - Type: path or `null`
  - Default: `null`
  - Env var: `TLS_CERT_PATH`
  - Description: PEM certificate path when using manual TLS certificate configuration.

- `key_path`
  - Type: path or `null`
  - Default: `null`
  - Env var: `TLS_KEY_PATH`
  - Description: PEM private key path when using manual TLS certificate configuration.

TLS validation rules:

- If `tls.enabled=false`, TLS cert settings are ignored.
- If `tls.enabled=true` and `cert_path` + `key_path` are both set, those files are used.
- If `tls.enabled=true`, both cert/key are missing, and `tls.auto=true`, a self-signed pair is generated.
- If `tls.enabled=true` and only one of cert/key is set, startup fails.
- If `tls.enabled=true`, both cert/key are missing, and `tls.auto=false`, startup fails.

### `metrics`

- `real_time`
  - Type: boolean
  - Default: `false`
  - Env var: `METRICS_REAL_TIME`
  - Description: Writes rolling snapshot metrics to `${data_dir}/metrics/metrics_rt.txt`.

- `historic`
  - Type: boolean
  - Default: `false`
  - Env var: `METRICS_HISTORIC`
  - Description: Appends historical metrics to `${data_dir}/metrics/metrics_hist.csv`.

### `persistence`

- `flush_ms`
  - Type: integer (`u64`, milliseconds)
  - Default: `15000`
  - Env var: `PERSIST_FLUSH_MS`
  - Description: Flush interval for dirty values.
  - Runtime rule: minimum effective value is `5000`; lower values are automatically clamped to `5000`.

### `logger`

- `level`
  - Type: string enum
  - Default: `info`
  - Env var: `LOGGER_LEVEL`
  - Accepted values: `off`, `error`, `warn` (or `warning`), `info`, `debug`, `trace`.
  - Description: Global application log verbosity.

### `auth`

- `enabled`
  - Type: boolean
  - Default: `false`
  - Env var: `AUTH_ENABLED`
  - Description: Enables session-protected UI/API.

- `secret`
  - Type: string or `null`
  - Default: `null`
  - Env var: `AUTH_SECRET`
  - Description: HMAC secret for session signing.
  - Required when: `auth.enabled=true`.

- `access_ttl`
  - Type: integer (`u64`, seconds)
  - Default: `3600`
  - Env var: `ACCESS_TTL`
  - Description: Access token/session TTL.

- `refresh_ttl`
  - Type: integer (`u64`, seconds)
  - Default: `86400`
  - Env var: `REFRESH_TTL`
  - Description: Refresh token/session TTL.

Authentication validation rules:

- If `auth.enabled=true` and `auth.secret` is missing (and `AUTH_SECRET` is not set), startup fails.

## Example Baseline Configuration

Use the path that matches your platform for `paths.data_dir`:

- Linux: `/var/lib/lirays-scada/data`
- macOS: `/Library/Application Support/LiRAYSScada/data`

```yaml
server:
  bind_host: 127.0.0.1
  bind_port: 8245

paths:
  data_dir: /var/lib/lirays-scada/data

tls:
  enabled: false
  auto: true
  cert_path: null
  key_path: null

metrics:
  real_time: false
  historic: false

persistence:
  flush_ms: 15000

logger:
  level: info

auth:
  enabled: false
  secret: null
  access_ttl: 3600
  refresh_ttl: 86400
```

## Production-Recommended Configuration

For production, use explicit authentication, explicit TLS certificates, and conservative logging.

```yaml
server:
  bind_host: 0.0.0.0
  bind_port: 8245

paths:
  data_dir: /var/lib/lirays-scada/data

tls:
  enabled: true
  auto: false
  cert_path: /etc/lirays-scada/tls/server.crt
  key_path: /etc/lirays-scada/tls/server.key

metrics:
  real_time: true
  historic: true

persistence:
  flush_ms: 10000

logger:
  level: info

auth:
  enabled: true
  secret: "replace_with_long_random_secret"
  access_ttl: 3600
  refresh_ttl: 86400
```

Production hardening guidance:

- Use a long, random `auth.secret` (at least 32 bytes of entropy).
- Restrict permissions on `settings.yaml`, TLS key files, and the data directory.
- Prefer fixed certificate files from your PKI or ACME workflow (`tls.auto=false`).
- Keep `logger.level=info` for normal operations; switch to `debug` only for incident diagnostics.
- Backup `${data_dir}` regularly.

Optional secret generation example:

```sh
openssl rand -base64 48
```

## Validate Configuration Health

After any configuration update:

1. Restart the service.
2. Check service status and logs.
3. Open the UI endpoint (`http://127.0.0.1:8245` or `https://...` if TLS enabled).
4. If auth is enabled and no admin exists yet, complete initial setup at `/auth/setup`.
