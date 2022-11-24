---
title: Pulsar Downloads
path: /download/
---

::: warning Under Construction
This document is under construction, please check back soon for updates.
Please see [our socials](/docs/launch-manual/sections/faq/#having-trouble) and feel free to ask for assistance or inquire as to the status of this document.
:::

## Releases

::: info
Full releases of Pulsar are not yet available, see Cirrus CI releases below for
dev/beta releases of Pulsar or [build from source](https://pulsar-edit.dev/docs/launch-manual/sections/core-hacking/#building-pulsar).
:::

## Cirrus CI binaries

Binaries are produced by [Cirrus CI](https://cirrus-ci.com/github/pulsar-edit/pulsar)
for each commit to the Pulsar repository.  
These binaries are to be considered dev/beta releases and allow you to test
out the very latest work being done on Pulsar before it is added to a full
release.

Binaries are built from a number of different branches and PRs but you should
stick to the **master** branch releases for the most stable ones unless you know
exactly what you are looking for.

To download a binary from Cirrus CI please follow the below steps:

- Go to the master branch [Pulsar Cirrus CI page](https://cirrus-ci.com/github/pulsar-edit/pulsar/master).
- Select the latest successful build (check for a **_finished_** green check
  mark ✅ on the right side of the page - make sure you do not select a
  **_failed_** one).
- Select your system from the list of options:
  - **linux** - x86 Linux systems
  - **arm-linux** - ARM based Linux systems (Raspberry Pi etc.)
  - **silicon_mac** - M1 and M2 chip Apple Macs
  - **intel_mac** - Intel chip Apple Macs
  - **windows** - Microsoft Windows systems
- Select **binary** > **binaries** from the **Artifacts** pane
- Download the binary you require for your system:

::: tabs#downloads

@tab Linux

Three binaries are currently available:

- `Appimage` for a universal Linux binary (should work on most systems)
- `rpm` for Red Hat based OSs (Fedora, RHEL etc.)
- `deb` for Debian or Ubuntu based OSs

@tab macOS

Two binaries will be listed but the only one you will likely want is the
`dmg` release.

@tab Windows

Two binaries are currently available:

- `Pulsar Setup...exe` is the installer based executable that will install Pulsar
  on your system
- `Pulsar...exe` is the "portable" version which can run without needing to be
  installed on the system (for example from a flash drive).

:::
