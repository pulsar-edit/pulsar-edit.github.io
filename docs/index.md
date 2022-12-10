---
sitemap:
  priority: 1.0
  changefreq: "daily"
lang: en-us
title: Home
home: true
actions:
  - text: "Download 📥"
    link: "/download/"
    type: primary
  - text: "Documentation 📖"
    link: "/docs/"
  - text: "Donate 🎁"
    link: "/donate/"
heroText: Pulsar
features:
  - title: "Cross-platform Editing"
    details: "Pulsar works across operating systems. Use it on OS X, Windows, or Linux."
  - title: "Built-in package manager"
    details: "Search and install new packages or create your own right from Pulsar."
  - title: "Smart Autocompletion"
    details: "Pulsar helps you write code faster with a smart and flexible autocomplete."
  - title: "File system browser"
    details: "Easily browse and open a single file, a whole project, or multiple projects in one window."
  - title: "Multiple panes"
    details: "Split your Pulsar interface into multiple panes to compare and edit code across files."
  - title: "Find and replace"
    details: "Find, preview, and replace text as you type in a file or across all your projects."
---

## Notices

::: info Welcome

Welcome to all new visitors!

This project is still very new and the team is still working hard on a number
of areas of the whole project. That includes the website, package repository and
GitHub organisation as well as the editor itself.

The below is just some items that we are currently working on that might answer
any questions you have at this early stage of the project.

### Downloads and Releases

We are still working on the editor to get to our first stable release.
You can still download a binary of Pulsar by following [this link](https://pulsar-edit.dev/download.html#cirrus-ci-binaries)
and following the instructions.

We are looking to support distro repositories such as Debian/Ubuntu repos,
Fedora, Snap, Flatpak, Arch/AUR etc. but we need to get to a good point with
a stable release before we instigate that so for now the downloadable binaries
are the main supported downloads.

### Automatic Updates

Currently Pulsar does not support automatic updates. What this means is that new
versions will have to be obtained via the Cirrus CI or Download links here on
our website. This is something on our roadmap to change as soon as possible.

### Packages

One of our first and biggest tasks was to replace the closed source Atom.io
package repository with our own so that users would still be able to download
from the huge package ecosystem

Currently searching and downloading from the [package repository](https://web.pulsar-edit.dev/)
is fully functional but other functions for maintaining packages such as
publishing/updating/deleting are not yet functional.

### Pulsar

The releases do seem to be working for most people and use cases but if you
have any problems then please do let us know in one of our [community areas](https://pulsar-edit.dev/community.html)
or as a [GitHub issue](https://github.com/pulsar-edit/pulsar/issues/new?assignees=&labels=bug%2Ctriage&template=bug-report.yml)

#### Known Issues

- macOS Performance: Currently performance on MacOS isn't what we hope to
  achieve. Often times this can be resolved by disabling the `github` package.
- macOS dmg install: Current binaries are not signed so will produce an error
  "App is damaged and can’t be opened". This can be fixed by running
  `xattr -cr /Applications/Pulsar.app/`.

### Logos, branding and website design

You may notice a lot of inconsistencies with colors, logos and general website
design. We are very aware of this but our main focus is getting everything
functional first and sort out the design later as the Atom sunset is fast
approaching.
We are still waiting on a finalized design for the branding (color schemes,
final logo colors etc.) so most of what you see are just placeholders and will
likely be updated shortly - the website design will then follow.

:::
