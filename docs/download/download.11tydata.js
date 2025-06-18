const globalData = require("../global.json");

const strings = {
  "appImage": {
    "noSandbox": "AppImage may require `--no-sandbox` as an argument to run correctly on some systems.",
    "libfuse2": "Some distributions no longer ship with `libfuse2` which AppImage requires to run. You may need to install this manually — e.g., `apt install libfuse2` on Ubuntu >=22.04."
  },
  "packageManagers": {
    "official": {
      "title": "Officially supported package managers",
      "description": "Pulsar installs available on package managers that are directly maintained by the Pulsar Team."
    },
    "community": {
      "title": "Community-supported package managers",
      "description": "Pulsar installs available on package managers that are maintained by our wonderful community."
    }
  },
  "macOS": {
    "appleSilicon": "For Apple Silicon (M1/M2/M3/M4) Macs.",
    "intel": "For Intel Macs.",
    "dmg": "DMG installer",
    "zip": "ZIP archive"
  },
  "linux": {
    "x86": "For most desktops and laptops with Intel or AMD processors.",
    "arm": "For ARM based devices — Raspberry Pi, Pinebook, etc.",
    "deb": "Debian/Ubuntu, etc. (deb)",
    "rpm": "Fedora/RHEL, etc. (rpm)",
    "appImage": "All distributions (AppImage)",
    "tar": "All distributions (tar.gz)"
  },
  "windows": {
    "unsigned": "Windows binaries are not signed, so they will produce an error with Windows Smartscreen. You can bypass this by clicking 'More info' then 'Run anyway'.",
    "installer": "Installer",
    "portable": "Portable (no install)"
  }
};

function data () {
  let version = globalData.latest_version;

  return {
    "methods": {
      "manual": {
        "title": "Manual download",
        "description": "Pick the right installable binary for you.",
        "options": {
          "regular": {
            "title": "Regular releases",
            "description": "Releases made periodically, usually once a month, provides a stable Pulsar experience.",
            "options": {
              "linux": {
                "slug": "linux",
                "title": "Linux",
                "options": {
                  "x86_64": {
                    "title": "x86_64",
                    "description": strings.linux.x86,
                    "options": {
                      "deb": {
                        "title": strings.linux.deb,
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/Linux.pulsar_${version}_amd64.deb`
                      },
                      "rpm": {
                        "title": strings.linux.rpm,
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/Linux.pulsar-${version}.x86_64.rpm`
                      },
                      "appimage": {
                        "title": strings.linux.appImage,
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/Linux.Pulsar-${version}.AppImage`,
                        "alerts": [
                          strings.appImage.noSandbox,
                          strings.appImage.libfuse2
                        ]
                      },
                      "targz": {
                        "title": strings.linux.tar,
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/Linux.pulsar-${version}.tar.gz`
                      }
                    }
                  },
                  "arm": {
                    "title": "ARM_64",
                    "description": strings.linux.arm,
                    "options": {
                      "deb": {
                        "title": strings.linux.deb,
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/ARM.Linux.pulsar_${version}_arm64.deb`
                      },
                      "rpm": {
                        "title": strings.linux.rpm,
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/ARM.Linux.pulsar-${version}.aarch64.rpm`
                      },
                      "appimage": {
                        "title": strings.linux.appImage,
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/ARM.Linux.Pulsar-${version}-arm64.AppImage`,
                        "alerts": [
                          strings.appImage.noSandbox,
                          strings.appImage.libfuse2
                        ]
                      },
                      "targz": {
                        "title": strings.linux.tar,
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/ARM.Linux.pulsar-${version}-arm64.tar.gz`
                      }
                    }
                  }
                }
              },
              "windows": {
                "slug": "win",
                "title": "Windows",
                "alerts": [
                  strings.windows.unsigned
                ],
                "options": {
                  "setup": {
                    "title": strings.windows.installer,
                    "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/Windows.Pulsar.Setup.${version}.exe`
                  },
                  "portable": {
                    "title": strings.windows.portable,
                    "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/Windows.Pulsar-${version}-win.zip`
                  }
                }
              },
              "macos": {
                "slug": "mac",
                "title": "macOS",
                "options": {
                  "silicon": {
                    "title": "Silicon",
                    "description": strings.macOS.appleSilicon,
                    "options": {
                      "dmg": {
                        "title": strings.macOS.dmg,
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/Silicon.Mac.Pulsar-${version}-arm64.dmg`
                      },
                      "zip": {
                        "title": strings.macOS.zip,
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/Silicon.Mac.Pulsar-${version}-arm64-mac.zip`
                      }
                    }
                  },
                  "intel": {
                    "title": "Intel",
                    "description": strings.macOS.intel,
                    "options": {
                      "dmg": {
                        "title": strings.macOS.dmg,
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/Intel.Mac.Pulsar-${version}.dmg`
                      },
                      "zip": {
                        "title": strings.macOS.zip,
                        "url": `https://github.com/pulsar-edit/pulsar/releases/download/v${version}/Intel.Mac.Pulsar-${version}-mac.zip`
                      }
                    }
                  }
                }
              }
            }
          },
          "rolling": {
            "title": "Rolling releases",
            "description": "Releases built on every single commit to the Pulsar code repository. Has the latest fixes but may also have undiscovered bugs.",
            "options": {
              "linux": {
                "slug": "linux",
                "title": "Linux",
                "options": {
                  "x86_64": {
                    "title": "x86_64",
                    "description": strings.linux.x86,
                    "options": {
                      "deb": {
                        "title": strings.linux.deb,
                        "url": "https://download.pulsar-edit.dev/?os=linux&type=linux_deb"
                      },
                      "rpm": {
                        "title": strings.linux.rpm,
                        "url": "https://download.pulsar-edit.dev/?os=linux&type=linux_rpm"
                      },
                      "appimage": {
                        "title": strings.linux.appImage,
                        "url": "https://download.pulsar-edit.dev/?os=linux&type=linux_appimage",
                        "alerts": [
                          strings.appImage.noSandbox,
                          strings.appImage.libfuse2
                        ]
                      },
                      "targz": {
                        "title": strings.linux.tar,
                        "url": "https://download.pulsar-edit.dev/?os=linux&type=linux_tar"
                      }
                    }
                  },
                  "arm": {
                    "title": "ARM_64",
                    "description": strings.linux.arm,
                    "options": {
                      "deb": {
                        "title": strings.linux.deb,
                        "url": "https://download.pulsar-edit.dev/?os=arm_linux&type=linux_deb"
                      },
                      "rpm": {
                        "title": strings.linux.rpm,
                        "url": "https://download.pulsar-edit.dev/?os=arm_linux&type=linux_rpm"
                      },
                      "appimage": {
                        "title": strings.linux.appImage,
                        "url": "https://download.pulsar-edit.dev/?os=arm_linux&type=linux_appimage",
                        "alerts": [
                          strings.appImage.noSandbox,
                          strings.appImage.libfuse2
                        ]
                      },
                      "targz": {
                        "title": strings.linux.tar,
                        "url": "https://download.pulsar-edit.dev/?os=arm_linux&type=linux_tar"
                      }
                    }
                  }
                }
              },
              "windows": {
                "slug": "win",
                "title": "Windows",
                "alerts": [
                  strings.windows.unsigned
                ],
                "options": {
                  "setup": {
                    "title": strings.windows.installer,
                    "url": "https://download.pulsar-edit.dev/?os=windows&type=windows_setup"
                  },
                  "portable": {
                    "title": strings.windows.portable,
                    "url": "https://download.pulsar-edit.dev/?os=windows&type=windows_portable"
                  }
                }
              },
              "macos": {
                "slug": "mac",
                "title": "macOS",
                "options": {
                  "silicon": {
                    "title": "Silicon",
                    "description": strings.macOS.appleSilicon,
                    "options": {
                      "dmg": {
                        "title": strings.macOS.dmg,
                        "url": "https://download.pulsar-edit.dev/?os=silicon_mac&type=mac_dmg"
                      },
                      "zip": {
                        "title": strings.macOS.zip,
                        "url": "https://download.pulsar-edit.dev/?os=silicon_mac&type=mac_zip"
                      }
                    }
                  },
                  "intel": {
                    "title": "Intel",
                    "description": "For Intel macs.",
                    "options": {
                      "dmg": {
                        "title": strings.macOS.dmg,
                        "url": "https://download.pulsar-edit.dev/?os=intel_mac&type=mac_dmg"
                      },
                      "zip": {
                        "title": strings.macOS.zip,
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
        "title": "Package managers",
        "description": "Let a package manager handle installation for you.",
        "options": {
          "linux": {
            "slug": "linux",
            "title": "Linux",
            "options": {
              "official": {
                "title": strings.packageManagers.official.title,
                "description": strings.packageManagers.official.description,
                "options": {
                  "debget": {
                    "title": "deb-get",
                    "url": "https://github.com/wimpysworld/deb-get/blob/main/01-main/packages/pulsar"
                  }
                }
              },
              "community": {
                "title": strings.packageManagers.community.title,
                "description": strings.packageManagers.community.description,
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
                  },
                  "pacstall": {
                    "title": "Pacstall",
                    "url": "https://pacstall.dev/packages/pulsar-deb"
                  }
                }
              }
            }
          },
          "windows": {
            "slug": "win",
            "title": "Windows",
            "options": {
              "official": {
                "title": strings.packageManagers.official.title,
                "description": strings.packageManagers.official.description,
                "options": {
                  "chocolatey": {
                    "title": "Chocolatey",
                    "url": "https://community.chocolatey.org/packages/pulsar"
                  }
                }
              },
              "community": {
                "title": strings.packageManagers.community.title,
                "description": strings.packageManagers.community.description,
                "options": {
                  "winget": {
                    "title": "winget",
                    "url": "https://winstall.app/apps/Pulsar-Edit.Pulsar"
                  }
                }
              }
            }
          },
          "macos": {
            "slug": "mac",
            "title": "macOS",
            "options": {
              "community": {
                "title": strings.packageManagers.community.title,
                "description": strings.packageManagers.community.description,
                "options": {
                  "homebrew": {
                    "title": "Homebrew",
                    "url": "https://formulae.brew.sh/cask/pulsar#default"
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

module.exports = data;
