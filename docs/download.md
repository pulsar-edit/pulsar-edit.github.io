---
title: Pulsar Downloads
path: /download/
sitemap:
  priority: 0.9
  changefreq: "daily"
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

See below for links to the latest binaries for each OS. If you want to download
manually or pick a binary from another fork then follow the [manual instructions](#manual-download).

::: details Linux

**x86_64** - For most desktops and laptops with Intel or AMD processors

|                                    Package                                    |    Distribution    |
| :---------------------------------------------------------------------------: | :----------------: |
|      [deb](https://web.pulsar-edit.dev/download?os=linux&type=linux_deb)      | All distributions  |
|      [rpm](https://web.pulsar-edit.dev/download?os=linux&type=linux_rpm)      | Debian/Ubuntu etc. |
| [Appimage](https://web.pulsar-edit.dev/download?os=linux&type=linux_appimage) |  Fedora/RHEL etc.  |
|    [tar.gz](https://web.pulsar-edit.dev/download?os=linux&type=linux_tar)     | All distributions  |

**ARM** - For ARM based devices - Raspberry Pi, Pinebook etc.

|                                      Package                                      |    Distribution    |
| :-------------------------------------------------------------------------------: | :----------------: |
|      [deb](https://web.pulsar-edit.dev/download?os=arm_linux&type=linux_deb)      | All distributions  |
|      [rpm](https://web.pulsar-edit.dev/download?os=arm_linux&type=linux_rpm)      | Debian/Ubuntu etc. |
| [Appimage](https://web.pulsar-edit.dev/download?os=arm_linux&type=linux_appimage) |  Fedora/RHEL etc.  |
|    [tar.gz](https://web.pulsar-edit.dev/download?os=arm_linux&type=linux_tar)     | All distributions  |

:::

::: details macOS

**Silicon** - For Apple Silicon (M1/M2) macs

|                                 Package                                 |     Type      |
| :---------------------------------------------------------------------: | :-----------: |
| [dmg](https://web.pulsar-edit.dev/download?os=silicon_mac&type=mac_dmg) | DMG installer |
| [zip](https://web.pulsar-edit.dev/download?os=silicon_mac&type=mac_zip) |  Zip archive  |

**Intel** - For Intel macs

|                                Package                                |     Type      |
| :-------------------------------------------------------------------: | :-----------: |
| [dmg](https://web.pulsar-edit.dev/download?os=intel_mac&type=mac_dmg) | DMG installer |
| [zip](https://web.pulsar-edit.dev/download?os=intel_mac&type=mac_zip) |  Zip archive  |

:::

::: details Windows

|                                   Package                                    |         Type          |
| :--------------------------------------------------------------------------: | :-------------------: |
|  [dmg](https://web.pulsar-edit.dev/download?os=windows&type=windows_setup)   |       Installer       |
| [zip](https://web.pulsar-edit.dev/download?os=windows&type=windows_portable) | Portable (no install) |

:::

### Manual download

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

Four binaries are currently available:

- `Appimage` for a universal Linux binary (should work on most systems)
- `rpm` for Red Hat based OSs (Fedora, RHEL etc.)
- `deb` for Debian or Ubuntu based OSs
- `tar.gz` generic binary for most Linux systems

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
