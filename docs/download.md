---
title: Pulsar Downloads
path: /download/
sitemap:
  priority: 0.9
  changefreq: "daily"
---

## Releases

These are our current tagged releases. `Latest` is our current stable release,
`Beta` is our current release candidate version that may still require some
additional work.

::: details Linux

**x86_64** - For most desktops and laptops with Intel or AMD processors

|                                                                       Package                                                                        |    Distribution    |
| :--------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------: |
|          deb - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/Linux.pulsar_1.101.0-beta_amd64.deb)           | Debian/Ubuntu etc. |
|          rpm - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/Linux.pulsar-1.101.0-beta.x86_64.rpm)          |  Fedora/RHEL etc.  |
| AppImage <sup>[1]</sup> - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/Linux.Pulsar-1.101.0-beta.AppImage) | All distributions  |
|          tar.gz - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/Linux.pulsar-1.101.0-beta.tar.gz)           | All distributions  |

**ARM_64** - For ARM based devices - Raspberry Pi, Pinebook etc.

|                                                                            Package                                                                            |    Distribution    |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------: |
|             deb - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/ARM.Linux.pulsar_1.101.0-beta_arm64.deb)             | Debian/Ubuntu etc. |
|            rpm - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/ARM.Linux.pulsar-1.101.0-beta.aarch64.rpm)            |  Fedora/RHEL etc.  |
| AppImage<sup>[1]</sup> - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/ARM.Linux.Pulsar-1.101.0-beta-arm64.AppImage) | All distributions  |
|          tar.gz - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/ARM.Linux.pulsar-1.101.0-beta-arm64.tar.gz)          | All distributions  |

[1] Some distributions no longer ship with `libfuse2` which Appimage requires to run. You may need to install this manually, e.g on Ubuntu >=22.04 `apt install libfuse2`.

:::

:::: details macOS

<!--TODO: Remove once app is signed and error no longer shows-->

::: info Info

Current binaries are not signed so will produce an error _"App is damaged and
can’t be opened"_.
The following command should be run after installation.

```sh
$ xattr -cr /Applications/Pulsar.app/
```

:::

**Silicon** - For Apple Silicon (M1/M2) macs

|                                                                   Package                                                                   |     Type      |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------: |
|   dmg - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/Silicon.Mac.Pulsar-1.101.0-beta-arm64.dmg)   | DMG installer |
| zip - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/Silicon.Mac.Pulsar-1.101.0-beta-arm64-mac.zip) |  Zip archive  |

**Intel** - For Intel macs

|                                                               Package                                                               |     Type      |
| :---------------------------------------------------------------------------------------------------------------------------------: | :-----------: |
|   dmg - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/Intel.Mac.Pulsar-1.101.0-beta.dmg)   | DMG installer |
| zip - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/Intel.Mac.Pulsar-1.101.0-beta-mac.zip) |  Zip archive  |

::::

:::: details Windows

<!--TODO: Remove once app is signed and error no longer shows-->

::: info Info

Current binaries are not signed so will produce an error with Windows
Smartscreen "Windows protected your PC"...
You can bypass this by clicking "More info" then "Run anyway".

:::

|                                                                Package                                                                |         Type          |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :-------------------: |
| Setup - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/Windows.Pulsar.Setup.1.101.0-beta.exe) |       Installer       |
|  Portable - Latest \| [Beta](https://github.com/pulsar-edit/pulsar/releases/download/v1.101.0-beta/Windows.Pulsar.1.101.0-beta.exe)   | Portable (no install) |

::::

## Cirrus CI binaries

Binaries are produced by [Cirrus CI](https://cirrus-ci.com/github/pulsar-edit/pulsar)
for each commit to the Pulsar repository.  
These binaries are to be considered dev releases and allow you to test
out the very latest work being done on Pulsar before it is added to a full
release.

See below for links to the latest binaries for each OS. If you want to download
manually or pick a binary from another fork then follow the [manual instructions](#manual-download).

::: details Linux

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

:::

:::: details macOS

<!--TODO: Remove once app is signed and error no longer shows-->

::: info Info

Current binaries are not signed so will produce an error _"App is damaged and
can’t be opened"_.
The following command should be run after installation.

```sh
$ xattr -cr /Applications/Pulsar.app/
```

:::

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

::: details Windows

|                                    Package                                     |         Type          |
| :----------------------------------------------------------------------------: | :-------------------: |
|    [Setup](https://download.pulsar-edit.dev/?os=windows&type=windows_setup)    |       Installer       |
| [Portable](https://download.pulsar-edit.dev/?os=windows&type=windows_portable) | Portable (no install) |

:::

### Manual download

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
