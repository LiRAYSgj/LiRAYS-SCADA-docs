# First Steps

This tutorial walks through a clean first run of LiRAYS-SCADA using only the workflows documented in this repository.

## Goal

By the end of this tutorial, you should have:

- a running LiRAYS-SCADA service,
- a reachable web interface,
- a verified baseline configuration,
- and a clear next step for your deployment.

## Step 1: Install LiRAYS-SCADA

Choose one installation method:

- [Docker](../installation/docker.md)
- [Linux package](../installation/linux.md)
- [macOS package](../installation/macos.md)

Complete the install and confirm the service starts.

## Step 2: Confirm Service Health

Open the local UI endpoint:

- `http://127.0.0.1:8245`

If the page does not load, verify service status and logs with the commands in your selected installation guide.

## Step 3: Confirm Authentication Mode

LiRAYS-SCADA can run with authentication enabled or disabled.

- If authentication is disabled, continue to the next step.
- If authentication is enabled and this is the first startup, complete the setup flow from the browser (`/api/auth/setup` backend flow).

To review related settings, use [Settings File Configuration](../configuration/settings_file.md).

## Step 4: Review Runtime Configuration

Check at least these parameters before moving to production-like use:

- `server.bind_host`
- `server.bind_port`
- `paths.data_dir`
- `auth.enabled`
- `auth.secret` (required when auth is enabled)
- `tls.enabled`

Apply any changes and restart the service as described in [Settings File Configuration](../configuration/settings_file.md).

## Step 5: Validate Operations Baseline

Run a minimal validation pass:

1. Open the web UI and confirm it is responsive.
2. Confirm the service process is healthy using your platform service manager.
3. Confirm logs do not show startup or configuration errors.

Optional API/docs check:

- `http://127.0.0.1:8245/swagger`

## Next Step

After this baseline setup, continue with:

- [Users Guide](../index.md) for operations,
- [Integrators Guide](../../integrators/index.md) for SDK/client integration,
- [Developers Guide](../../developers/index.md) for code-level extension.
