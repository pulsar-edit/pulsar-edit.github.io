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
built by [GitHub Actions](https://github.com/pulsar-edit/pulsar/actions/workflows/build.yml)
and [Cirrus CI](https://cirrus-ci.com/github/pulsar-edit/pulsar).
These releases come with the latest fixes, updates and improvements so this is a
great choice if you want to get the latest features as soon as possible.

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

Current version is [v1.123.0](https://github.com/pulsar-edit/pulsar/releases/tag/v1.123.0).

::: details Linux

**x86_64** - For most desktops and laptops with Intel or AMD processors

|                                                           Package                                                           |    Distribution    |
| :-------------------------------------------------------------------------------------------------------------------------: | :----------------: |
|           [deb](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/Linux.pulsar_1.123.0_amd64.deb)            | Debian/Ubuntu etc. |
|           [rpm](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/Linux.pulsar-1.123.0.x86_64.rpm)           |  Fedora/RHEL etc.  |
| [AppImage](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/Linux.Pulsar-1.123.0.AppImage)<sup>[1][2]</sup> | All distributions  |
|           [tar.gz](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/Linux.pulsar-1.123.0.tar.gz)            | All distributions  |

**ARM_64** - For ARM based devices - Raspberry Pi, Pinebook etc.

|                                                                Package                                                                |    Distribution    |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :----------------: |
|              [deb](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/ARM.Linux.pulsar_1.123.0_arm64.deb)               | Debian/Ubuntu etc. |
|             [rpm](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/ARM.Linux.pulsar-1.123.0.aarch64.rpm)              |  Fedora/RHEL etc.  |
| [AppImage](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/ARM.Linux.Pulsar-1.123.0-arm64.AppImage)<sup>[1][2]</sup> | All distributions  |
|           [tar.gz](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/ARM.Linux.pulsar-1.123.0-arm64.tar.gz)            | All distributions  |

[1] Appimage may require `--no-sandbox` as an argument to run correctly on some systems.  
[2] Some distributions no longer ship with `libfuse2` which Appimage requires to run. You may need to install this manually, e.g on Ubuntu >=22.04 `apt install libfuse2`.

**Package Managers**

|                  Package Manager                   |    Distribution    |         Command          |
| :------------------------------------------------: | :----------------: | :----------------------: |
| [deb-get](https://github.com/wimpysworld/deb-get/) | Debian/Ubuntu etc. | `deb-get install pulsar` |

:::

:::: details macOS

**Silicon** - For Apple Silicon (M1/M2) macs

|                                                   Package                                                    |     Type      |
| :----------------------------------------------------------------------------------------------------------: | :-----------: |
| [dmg](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/Silicon.Mac.Pulsar-1.123.0-arm64.dmg) | DMG installer |
|   [zip](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/Intel.Mac.Pulsar-1.123.0-mac.zip)   |  Zip archive  |

**Intel** - For Intel macs

|                                                 Package                                                  |     Type      |
| :------------------------------------------------------------------------------------------------------: | :-----------: |
|   [dmg](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/Intel.Mac.Pulsar-1.123.0.dmg)   | DMG installer |
| [zip](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/Intel.Mac.Pulsar-1.123.0-mac.zip) |  Zip archive  |

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
| [Setup](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/Windows.Pulsar.Setup.1.123.0.exe)  |       Installer       |
| [Portable](https://github.com/pulsar-edit/pulsar/releases/download/v1.123.0/Windows.Pulsar-1.123.0-win.zip) | Portable (no install) |

|                        Package Manager                         |        Command         |
| :------------------------------------------------------------: | :--------------------: |
| [Chocolatey](https://community.chocolatey.org/packages/pulsar) | `choco install pulsar` |

::::

## Manual download

Binaries are built from a number of different branches and PRs but you should
stick to the `master` branch releases for the most stable ones unless you know
exactly what you are looking for.

For the most convenient access to these recommended binaries
from the `master` branch, please visit our Rolling Releases repository on GitHub:

- Navigate to the [pulsar-edit/pulsar-rolling-releases](https://github.com/pulsar-edit/pulsar-rolling-releases/releases)
  releases.
- Select the most recent release (or for a specific release reference the timestamp
  part of the version e.g. 1.109.**2023091606**).
  - x86_64 binaries will be grouped together for most releases,
    but occasionally they will be split across multiple releases.
    Apple silicon and ARM Linux binaries are usually, but not always,
    grouped together in their own separate release. You may need to look through
    the earlier releases to find binaries for your platform.
- Choose the binary you wish to download from the `Assets` section (you may need
  click the `Show all x assets` link to display them all). See below for
  descriptions of all available binaries.

We currently build on both GitHub Actions and Cirrus CI:

- GitHub Actions is used for building the majority of our binaries and builds
  are run on every commit or PR.
  - Direct artifact download is available only for those who are logged in
    with their GitHub accounts.
  - All artifacts from the `master` branch
    are therefore automatically uploaded to the [pulsar-edit/pulsar-rolling-releases](https://github.com/pulsar-edit/pulsar-rolling-releases/releases)
    repository for convenient access by anyone.
- Cirrus CI is _only_ used for building Apple silicon (macOS M1/M2) and ARM
  Linux binaries. These are run less frequently (every Monday, Wednesday, and Friday).
  - These are also uploaded to the [pulsar-edit/pulsar-rolling-releases](https://github.com/pulsar-edit/pulsar-rolling-releases/releases)
    repository.

To directly download a binary produced by GitHub Actions, follow the below steps:

- Visit the Actions tab of the [`pulsar-edit/pulsar` repository at github.com](https://github.com/pulsar-edit/pulsar/actions/workflows/build.yml),
  or visit a specific [Pull Request](https://github.com/pulsar-edit/pulsar/pulls)
  that you wish to obtain binaries from.
- Log in to your GitHub account, or [create one](https://github.com/signup)
  if you don't have one already.
- Visit the "Summary" page for any run of the "Build Pulsar Binaries" workflow,
  and scroll down to the bottom of the page, where you will see the "Artifacts"
  section.
- Download the desired binaries for your platform of choice.
  - The labels are based on the CI runner, but the specific OS version should not
    matter for your use. The "ubuntu" binaries are for any x64 Linux OSes.
    The "macos-12" binaries are for any Intel-based Mac. Windows is x64-only
    at this time.

To download a binary from Cirrus CI (Apple silicon and ARM Linux only) please
follow the below steps:

- Go to the master branch [Pulsar Cirrus CI page](https://cirrus-ci.com/github/pulsar-edit/pulsar/master).
- Select the latest successful build (check for a **_finished_** green check
  mark ✅ on the right side of the page - make sure you do not select a
  **_failed_** one).
- Select your system from the list of options:
  - **arm-linux** - ARM based Linux systems (Raspberry Pi etc.)
  - **silicon_mac** - M1 and M2 chip Apple Macs
- Select **binary** > **binaries** from the **Artifacts** pane
- Download the binary you require for your system:

::: tabs#downloads

@tab Linux

Four binaries are currently available for each architecture (amd64 & arm64):

- `Appimage` for a universal Linux binary (should work on most systems)
- `rpm` for Red Hat based OSs (Fedora, RHEL etc.)
- `deb` for Debian or Ubuntu based OSs
- `tar.gz` generic binary for most Linux systems

@tab macOS

Two binaries are provided for each architecture (silicon_mac & intel_mac):

- `dmg` standard installer image
- `zip` containing the application binary for manual installation.

@tab Windows

Two binaries are currently available:

- `exe` is the installer based executable that will install Pulsar
  on your system
- `zip` is the "portable" version which can run without needing to be
  installed on the system (for example from a flash drive).

:::
