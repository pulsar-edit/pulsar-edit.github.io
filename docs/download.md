---
title: Pulsar Downloads
path: /download/
sitemap:
  priority: 0.9
  changefreq: "daily"
---

::: info "Rolling" and "Regular" Releases

We have ["Rolling"](#rolling-release) and ["Regular"](#regular-releases) releases to choose from. These differ only in the frequency of updates they receive.

Note: There are no automatic updates at this time, regardless of which type of download you choose.

:::

## Rolling Release

These releases are built on each push to our `master` branch and automatically
built by [Cirrus CI](https://cirrus-ci.com/github/pulsar-edit/pulsar). These
releases come with the latest fixes, updates and improvements so this is a great
choice if you want to get the latest features as soon as possible.

While we do our best to review and test each PR thoroughly before merging there
is a chance that something falls through the cracks in which case be prepared to
upgrade or switch to our [Regular Releases](#regular-releases) until it is
fixed.

See below for links to the latest binaries for each OS. If you want to download
manually or pick a binary from another branch or PR, then follow the [manual instructions](#manual-download).

:::: details Linux

::: info Info

We currently have no Rolling Releases for Linux package managers - see
[Regular Releases](#regular-releases) for these instead.

:::

**x86_64** - For most desktops and laptops with Intel or AMD processors

|                                           Package                                           |    Distribution    |
| :-----------------------------------------------------------------------------------------: | :----------------: |
|              [deb](https://download.pulsar-edit.dev/?os=linux&type=linux_deb)               | Debian/Ubuntu etc. |
|              [rpm](https://download.pulsar-edit.dev/?os=linux&type=linux_rpm)               |  Fedora/RHEL etc.  |
| [Appimage](https://download.pulsar-edit.dev/?os=linux&type=linux_appimage)<sup>[1][2]</sup> | All distributions  |
|             [tar.gz](https://download.pulsar-edit.dev/?os=linux&type=linux_tar)             | All distributions  |

**ARM_64** - For ARM based devices - Raspberry Pi, Pinebook etc.

|                                             Package                                             |    Distribution    |
| :---------------------------------------------------------------------------------------------: | :----------------: |
|              [deb](https://download.pulsar-edit.dev/?os=arm_linux&type=linux_deb)               | Debian/Ubuntu etc. |
|              [rpm](https://download.pulsar-edit.dev/?os=arm_linux&type=linux_rpm)               |  Fedora/RHEL etc.  |
| [Appimage](https://download.pulsar-edit.dev/?os=arm_linux&type=linux_appimage)<sup>[1][2]</sup> | All distributions  |
|             [tar.gz](https://download.pulsar-edit.dev/?os=arm_linux&type=linux_tar)             | All distributions  |

[1] Appimage may require `--no-sandbox` as an argument to run correctly on some systems.  
[2] Some distributions no longer ship with `libfuse2` which Appimage requires to run. You may need to install this manually, e.g on Ubuntu >=22.04 `apt install libfuse2`.

::::

:::: details macOS

**Silicon** - For Apple Silicon (M1/M2) macs

|                               Package                                |     Type      |
| :------------------------------------------------------------------: | :-----------: |
| [dmg](https://download.pulsar-edit.dev/?os=silicon_mac&type=mac_dmg) | DMG installer |
| [zip](https://download.pulsar-edit.dev/?os=silicon_mac&type=mac_zip) |  Zip archive  |

**Intel** - For Intel macs

|                              Package                               |     Type      |
| :----------------------------------------------------------------: | :-----------: |
| [dmg](https://download.pulsar-edit.dev/?os=intel_mac&type=mac_dmg) | DMG installer |
| [zip](https://download.pulsar-edit.dev/?os=intel_mac&type=mac_zip) |  Zip archive  |

::::

:::: details Windows

<!--TODO: Remove once app is signed and error no longer shows-->

::: info Info

We currently have no Rolling Releases for Windows package managers - see
[Regular Releases](#regular-releases) for these instead.

Current binaries are not signed so will produce an error with Windows
Smartscreen "Windows protected your PC"...
You can bypass this by clicking "More info" then "Run anyway".

:::

|                                    Package                                     |         Type          |
| :----------------------------------------------------------------------------: | :-------------------: |
|    [Setup](https://download.pulsar-edit.dev/?os=windows&type=windows_setup)    |       Installer       |
| [Portable](https://download.pulsar-edit.dev/?os=windows&type=windows_portable) | Portable (no install) |

::::

## Regular Releases

These releases are put out regularly according to milestones defined by the
Pulsar team (currently roughly monthly).

Compared to our [Rolling Release](#rolling-release) these offer a more
understood state by the team in terms of support. However these will sometimes
feature issues that have already been resolved in our Rolling Release so if a
particular fix or feature is important to you it may be worth swapping to one of
those instead.

Current version is [v1.108.0](https://github.com/pulsar-edit/pulsar/releases/tag/v1.108.0).

::: details Linux

**x86_64** - For most desktops and laptops with Intel or AMD processors

|                                                           Package                                                           |    Distribution    |
| :-------------------------------------------------------------------------------------------------------------------------: | :----------------: |
|           [deb](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/Linux.pulsar_1.108.0_amd64.deb)            | Debian/Ubuntu etc. |
|           [rpm](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/Linux.pulsar-1.108.0.x86_64.rpm)           |  Fedora/RHEL etc.  |
| [AppImage](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/Linux.Pulsar-1.108.0.AppImage)<sup>[1][2]</sup> | All distributions  |
|           [tar.gz](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/Linux.pulsar-1.108.0.tar.gz)            | All distributions  |

**ARM_64** - For ARM based devices - Raspberry Pi, Pinebook etc.

|                                                                Package                                                                |    Distribution    |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :----------------: |
|              [deb](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/ARM.Linux.pulsar_1.108.0_arm64.deb)               | Debian/Ubuntu etc. |
|             [rpm](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/ARM.Linux.pulsar-1.108.0.aarch64.rpm)              |  Fedora/RHEL etc.  |
| [AppImage](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/ARM.Linux.Pulsar-1.108.0-arm64.AppImage)<sup>[1][2]</sup> | All distributions  |
|           [tar.gz](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/ARM.Linux.pulsar-1.108.0-arm64.tar.gz)            | All distributions  |

[1] Appimage may require `--no-sandbox` as an argument to run correctly on some systems.  
[2] Some distributions no longer ship with `libfuse2` which Appimage requires to run. You may need to install this manually, e.g on Ubuntu >=22.04 `apt install libfuse2`.

**Package Managers**

|                  Package Manager                   |    Distribution    |         Command          |
| :------------------------------------------------: | :----------------: | :----------------------: |
| [deb-get](https://github.com/wimpysworld/deb-get/) | Debian/Ubuntu etc. | `deb-get install pulsar` |

:::

:::: details macOS

**Silicon** - For Apple Silicon (M1/M2) macs

|                                                     Package                                                      |     Type      |
| :--------------------------------------------------------------------------------------------------------------: | :-----------: |
|   [dmg](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/Silicon.Mac.Pulsar-1.108.0-arm64.dmg)   | DMG installer |
| [zip](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/Silicon.Mac.Pulsar-1.108.0-arm64-mac.zip) |  Zip archive  |

**Intel** - For Intel macs

|                                                 Package                                                  |     Type      |
| :------------------------------------------------------------------------------------------------------: | :-----------: |
|   [dmg](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/Intel.Mac.Pulsar-1.108.0.dmg)   | DMG installer |
| [zip](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/Intel.Mac.Pulsar-1.108.0-mac.zip) |  Zip archive  |

::::

:::: details Windows

<!--TODO: Remove once app is signed and error no longer shows-->

::: info Info

Current binaries are not signed so will produce an error with Windows
Smartscreen "Windows protected your PC"...
You can bypass this by clicking "More info" then "Run anyway".

:::

|                                                   Package                                                   |         Type          |
| :---------------------------------------------------------------------------------------------------------: | :-------------------: |
| [Setup](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/Windows.Pulsar.Setup.1.108.0.exe)  |       Installer       |
| [Portable](https://github.com/pulsar-edit/pulsar/releases/download/v1.108.0/Windows.Pulsar-1.108.0-win.zip) | Portable (no install) |

|                               Package Manager                  |        Command         |
| :------------------------------------------------------------: | :--------------------: |
| [Chocolatey](https://community.chocolatey.org/packages/pulsar) | `choco install pulsar` |

::::

## Manual download

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

Two binaries are provided:

- `dmg` standard installer image
- `zip` containing the application binary for manual installation.

@tab Windows

Two binaries are currently available:

- `exe` is the installer based executable that will install Pulsar
  on your system
- `zip` is the "portable" version which can run without needing to be
  installed on the system (for example from a flash drive).

:::
