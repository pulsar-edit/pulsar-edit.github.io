---
title: "Pulsar 1.123.0: Is It Winter Yet?!"
author: confused-Techie
date: 2024-11-21
category:
  - dev
tag:
  - release
---

Pulsar [1.123.0](https://github.com/pulsar-edit/pulsar/releases/tag/v1.123.0) is available now!

<!-- more -->

## Pulsar Pulsar 1.123.0: Is It Winter Yet?!

This time around there's been a big focus on bug fixes and compatibility:
ensuring Linux users are able to load the new SQL State Storage when starting Pulsar from a self-contained binary, and fixing a regression with Electron 12 compatibility for moving items to the trash.
But don't fret, there's still a healthy mix of new features, such as the symbols-view package allowing project-wide symbol search from multiple providers, as well as our consistent improvements to the new Tree-sitter implementation.

All-in-all we hope there's something for everyone this release.
As always, a huge thank you to our community, contributors, and donations.
Happy coding, and see you amongst the stars.

- The Pulsar Team

---

- Fixed SQL State Storage not loading when starting Pulsar from a self-contained binary like appImage, tar.gz, etc.
- [symbols-view] Allow project-wide symbol search to consider results from more than one provider.
- Tree-sitter fixes and enhancements for hyperlinks, C, and shell scripts.
- Restore use of `shell.moveItemToTrash` API in tree-view, for Electron 12 compatibility.

### Pulsar

- Tree-sitter rolling fixes, 1.123 edition [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1118)
- [symbols-view] Allow project-wide symbol searches to consider multiple providers [@savetheclocktower](github.com/pulsar-edit/pulsar/pull/1133)
- electron-builder: Fix race condition when preparing to copy binaries [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/1137)
- [ci] Update GitHub Token in CirrusCI config [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/1134)
- Fixing requiring of better-sqlite3 [@mauricioszabo](github.com/pulsar-edit/pulsar/pull/1122)
- Revert removal of `shell.moveItemToTrash` [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1125)
- CI: Bump macOS runner images from macos-12 to macos-13 [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/1120)
