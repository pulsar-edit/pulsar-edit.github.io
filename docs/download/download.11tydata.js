const globalData = require("../global.json");

module.exports = function () {
  const ver = globalData.latest_version;

  return {
    "methods": {
      "manual": {
        "title": "Manual Download",
        "description": "Pick the right installable binary for you",
        "options": {
          "regular": {
            "title": "Regular Releases",
            "description": "Releases made periodically, usually once a month, provides a stable Pulsar experience.",
            "options": {
              "linux": {
                "title": "Linux",
                "options": {
                  "x86_64": {
                    "title": "x86_64",
                    "description": "For most desktops and laptops with Intel or AMD processors.",
                    "options": {
                      "deb": {
                        "title": "Debian/Ubuntu etc. (deb)",
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/Linux.pulsar_${ver}_amd64.deb`
                      },
                      "rpm": {
                        "title": "Fedora/RHEL etc. (rpm)",
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/Linux.pulsar-${ver}.x86_64.rpm`
                      },
                      "appimage": {
                        "title": "All distributions (Appimage)",
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/Linux.Pulsar-${ver}.AppImage`,
                        "alerts": [
                          "Appimage may require `--no-sandbox` as an argument to run correctly on some systems.",
                          "Some distributions no longer ship with `libfuse2` which Appimage requires to run. You may need to install this manually, e.g. on Ubuntu >=22.04 `apt install libfuse2`."
                        ]
                      },
                      "targz": {
                        "title": "All distributions (tar.gz)",
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/Linux.pulsar-${ver}.tar.gz`
                      }
                    }
                  },
                  "arm": {
                    "title": "ARM_64",
                    "description": "For ARM based devices - Raspberry Pi, Pinebook, etc.",
                    "options": {
                      "deb": {
                        "title": "Debain/Ubuntu etc. (deb)",
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/ARM.Linux.pulsar_${ver}_arm64.deb`
                      },
                      "rpm": {
                        "title": "Fedora/RHEL etc. (rpm)",
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/ARM.Linux.pulsar-${ver}.aarch64.rpm`
                      },
                      "appimage": {
                        "title": "All distributions (Appimage)",
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/ARM.Linux.Pulsar-${ver}-arm64.AppImage`,
                        "alerts": [
                          "Appimage may require `--no-sandbox` as an argument to run correctly on some systems.",
                          "Some distributions no longer ship with `libfuse2` which Appimage requires to run. You may need to install this manually, e.g. on Ubuntu >=22.04 `apt install libfuse2`."
                        ]
                      },
                      "targz": {
                        "title": "All distributions (tar.gz)",
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/ARM.Linux.pulsar-${ver}-arm64.tar.gz`
                      }
                    }
                  }
                }
              },
              "windows": {
                "title": "Windows",
                "alerts": [
                  "Windows binaries are not signed, so will produce an error with Windows Smartscreen, you can bypass this by clicking 'More info' then 'Run anyway'"
                ],
                "options": {
                  "setup": {
                    "title": "Installer",
                    "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/Windows.Pulsar.Setup.${ver}.exe`
                  },
                  "portable": {
                    "title": "Portable (no install)",
                    "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/Windows.Pulsar-${ver}-win.zip`
                  }
                }
              },
              "macos": {
                "title": "macOS",
                "options": {
                  "silicon": {
                    "title": "Silicon",
                    "description": "For Apple Silicon (M1/M2) macs.",
                    "options": {
                      "dmg": {
                        "title": "DMG installer",
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/Silicon.Mac.Pulsar-${ver}-arm64.dmg`
                      },
                      "zip": {
                        "title": "Zip archive",
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/Silicon.Mac.Pulsar-${ver}-arm64-mac.zip`
                      }
                    }
                  },
                  "intel": {
                    "title": "Intel",
                    "description": "For Intel macs.",
                    "options": {
                      "dmg": {
                        "title": "DMG installer",
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/Intel.Mac.Pulsar-${ver}.dmg`
                      },
                      "zip": {
                        "title": "Zip archive",
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${ver}/Intel.Mac.Pulsar-${ver}-mac.zip`
                      }
                    }
                  }
                }
              }
            }
          },
          "rolling": {
            "title": "Rolling Releases",
            "description": "Releases built on every single commit to the Pulsar code repository. Has the latest fixes but may also have un-discovered bugs.",
            "options": {
              "linux": {
                "title": "Linux",
                "options": {
                  "x86_64": {
                    "title": "x86_64",
                    "description": "For most desktops and laptops with Intel or AMD processors.",
                    "options": {
                      "deb": {
                        "title": "Debian/Ubuntu etc. (deb)",
                        "url": "https://download.pulsar-edit.dev/?os=linux&type=linux_deb"
                      },
                      "rpm": {
                        "title": "Fedora/RHEL etc. (rpm)",
                        "url": "https://download.pulsar-edit.dev/?os=linux&type=linux_rpm"
                      },
                      "appimage": {
                        "title": "All distributions (Appimage)",
                        "url": "https://download.pulsar-edit.dev/?os=linux&type=linux_appimage",
                        "alerts": [
                          "Appimage may require `--no-sandbox` as an argument to run correctly on some systems.",
                          "Some distributions no longer ship with `libfuse2` which Appimage requires to run. You may need to install this manually, e.g. on Ubuntu >=22.04 `apt install libfuse2`."
                        ]
                      },
                      "targz": {
                        "title": "All distributions (tar.gz)",
                        "url": "https://download.pulsar-edit.dev/?os=linux&type=linux_tar"
                      }
                    }
                  },
                  "arm": {
                    "title": "ARM_64",
                    "description": "For ARM based devices - Raspberry Pi, Pinebook, etc.",
                    "options": {
                      "deb": {
                        "title": "Debian/Ubuntu etc. (deb)",
                        "url": "https://download.pulsar-edit.dev/?os=arm_linux&type=linux_deb"
                      },
                      "rpm": {
                        "title": "Fedora/RHEL etc. (rpm)",
                        "url": "https://download.pulsar-edit.dev/?os=arm_linux&type=linux_rpm"
                      },
                      "appimage": {
                        "title": "All distributions (Appimage)",
                        "url": "https://download.pulsar-edit.dev/?os=arm_linux&type=linux_appimage",
                        "alerts": [
                          "Appimage may require `--no-sandbox` as an argument to run correctly on some systems.",
                          "Some distributions no longer ship with `libfuse2` which Appimage requires to run. You may need to install this manually, e.g. on Ubuntu >=22.04 `apt install libfuse2`."
                        ]
                      },
                      "targz": {
                        "title": "All distributions (tar.gz)",
                        "url": "https://download.pulsar-edit.dev/?os=arm_linux&type=linux_tar"
                      }
                    }
                  }
                }
              },
              "windows": {
                "title": "Windows",
                "alerts": [
                  "Windows binaries are not signed, so will produce an error with Windows Smartscreen, you can bypass this by clicking 'More info' then 'Run anyway'"
                ],
                "options": {
                  "setup": {
                    "title": "Installer",
                    "url": "https://download.pulsar-edit.dev/?os=windows&type=windows_setup"
                  },
                  "portable": {
                    "title": "Portable (no install)",
                    "url": "https://download.pulsar-edit.dev/?os=windows&type=windows_portable"
                  }
                }
              },
              "macos": {
                "title": "macOS",
                "options": {
                  "silicon": {
                    "title": "Silicon",
                    "description": "For Apple Silicon (M1/M2) macs.",
                    "options": {
                      "dmg": {
                        "title": "DMG installer",
                        "url": "https://download.pulsar-edit.dev/?os=silicon_mac&type=mac_dmg"
                      },
                      "zip": {
                        "title": "Zip archive",
                        "url": "https://download.pulsar-edit.dev/?os=silicon_mac&type=mac_zip"
                      }
                    }
                  },
                  "intel": {
                    "title": "Intel",
                    "description": "For Intel macs.",
                    "options": {
                      "dmg": {
                        "title": "DMG installer",
                        "url": "https://download.pulsar-edit.dev/?os=intel_mac&type=mac_dmg"
                      },
                      "zip": {
                        "title": "Zip archive",
                        "url": "https://download.pulsar-edit.dev/?os=intel_mac&type=mac_zip"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "packaged": {
        "title": "Package Manager Download",
        "description": "Let a package manager handle installation for you",
        "options": {
          "official": {
            "title": "Officially Supported Package Managers",
            "description": "Pulsar installs available on Package Managers that are directly maintained by the Pulsar Team.",
            "options": {
              "linux": {
                "title": "Linux",
                "options": {
                  "debget": {
                    "title": "deb-get",
                    "url": "https://github.com/wimpysworld/deb-get/blob/main/01-main/packages/pulsar"
                  }
                }
              },
              "macos": {
                "title": "macOS",
                "options": {}
              },
              "windows": {
                "title": "Windows",
                "options": {
                  "chocolatey": {
                    "title": "Chocolatey",
                    "url": "https://community.chocolatey.org/packages/pulsar"
                  }
                }
              }
            }
          },
          "community": {
            "title": "Community Supported Package Managers",
            "description": "Pulsar installs available on Package Managers that are maintained by our wonderful community.",
            "options": {
              "linux": {
                "title": "Linux",
                "options": {
                  "aur": {
                    "title": "AUR",
                    "url": "https://aur.archlinux.org/packages/pulsar-bin"
                  },
                  "guru": {
                    "title": "GURU",
                    "url": "https://github.com/gentoo/guru/tree/master/app-editors/pulsar-bin"
                  },
                  "homebrew": {
                    "title": "Homebrew",
                    "url": "https://formulae.brew.sh/cask/pulsar#default"
                  },
                  "flatpak": {
                    "title": "FlatPak",
                    "url": "https://flathub.org/apps/dev.pulsar_edit.Pulsar"
                  },
                  "nixpkgs": {
                    "title": "Nixpkgs",
                    "url": "https://search.nixos.org/packages?channel=unstable&show=pulsar"
                  },
                  "appman": {
                    "title": "AM/AppMan",
                    "url": "https://github.com/ivan-hc/AM-Application-Manager/blob/main/programs/x86_64/pulsar"
                  }
                }
              },
              "macos": {
                "title": "macOS",
                "options": {
                  "homebrew": {
                    "title": "Homebrew",
                    "url": "https://formulae.brew.sh/cask/pulsar#default"
                  }
                }
              },
              "windows": {
                "title": "Windows",
                "options": {
                  "winget": {
                    "title": "winget",
                    "url": "https://winstall.app/apps/Pulsar-Edit.Pulsar"
                  }
                }
              }
            }
          }
        }
      }
    }
  };
}
