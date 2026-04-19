# macOS Installation

This guide covers package-based installation on macOS.

## Before You Start

Download URLs in this page use placeholders. Replace `<version>` with a real release artifact.

Package pattern:

- `LiRAYSScada-<version>.pkg`

Example link:

- [LiRAYSScada-<version>.pkg](https://downloads.example.com/lirays-scada/macos/LiRAYSScada-<version>.pkg)

## Download with `curl` (Optional)

```sh
curl -L -o LiRAYSScada-<version>.pkg "https://downloads.example.com/lirays-scada/macos/LiRAYSScada-<version>.pkg"
```

## Install

Install from Finder by double-clicking the `.pkg` file, or run:

```sh
sudo installer -pkg ./LiRAYSScada-<version>.pkg -target /
```

## Verify Service

```sh
launchctl print system/com.lirays.liraysscada
```

Log file:

- `/Library/Application Support/LiRAYSScada/logs/lirays_scada.out.log`

When the service is running, open:

- `http://127.0.0.1:8245`

Important paths:

- Config: `/Library/Application Support/LiRAYSScada/settings.yaml`
- Data: `/Library/Application Support/LiRAYSScada/data`

## Uninstall

```sh
sudo lirays-uninstall
```
