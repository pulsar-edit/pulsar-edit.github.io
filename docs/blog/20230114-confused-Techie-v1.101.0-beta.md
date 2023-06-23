---
title: Our Second Beta!
author: confused-Techie
date: 2023-01-15
category:
  - dev
---

Check out our Second GitHub Release for Pulsar! [Available Now!](https://github.com/pulsar-edit/pulsar/releases/tag/v1.101.0-beta)

<!-- more -->

# Second (Beta) Tagged Release of Pulsar -- Many improvements available!

With the release of Pulsar Beta 1.101.0 we have quite a number of improvements and fixes to various issues that have been identified and logged by our wonderful community.

Have a read of the changelog for the full details but some highlights include fixes to the Pulsar logo on Windows and Linux, a bunch of macOS changes to bring back some of the original functionality with opening files, and the resolution of an annoying issue on Linux that could stop the app from launching at all!

Thank you so much to everyone who has been involved in this release, every comment to our discussions board or Discord server, every issue logged on GitHub and every pull request created have all contributed to getting us where we are today.

And a special thank you for all of the donations we have received, we have some plans to use these wisely for the good of the project so look forward to the next big release!

So please, if you have any comments then please join us on our Discord or discussions page, if you find any bugs or regressions then let us know via a GitHub issue (and if you can fix it (or anything else) then feel free to open a pull request).

And as always, happy coding, see you among the stars!

- The Pulsar Team

---

- Fixed a bug where macOS menus like "Open" don't do anything
- Fixed a bug where macOS wouldn't open files by dragging them onto the dock.
- Fixed a bug where devtools won't open (<https://github.com/pulsar-edit/pulsar/issues/260>)
- Fixed a bug where the editor refused to open with the message "GPU process isn't usable. Goodbye" (<https://github.com/pulsar-edit/pulsar/issues/233>)
- Fixed logo artifacts on Linux
- Fixed Windows Taskbar Icon being 'Cut in Half'
- Fixed commands like `--version`, `--package` or `--help` did not show outputs
- Fixed additional flags not being sent to `--package`
- Small improvement on the binary size
- Fixed "install command line tools" on Mac and Windows
- Cached queries for featured packages (featured packages will load faster, and
  fewer errors on the settings-view regarding package info)
- Added warning when `settings-view` is disabled, describing how to re-enable it

### Pulsar

- Added: script: Clean up `pulsar` and `ppm` on uninstall [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/297)
- Added: increase search query delay [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/289)
- Fixed: update `packages/README.md` [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/317)
- Fixed: Fix Windows Icon being cut in half [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/318)
- Removed: remove unused json [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/309)
- Added: add ignored `package-lock.json` to packages [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/308)
- Rebrand: Rebrand AppUserModelID - Ensure Pulsar is separated as its own App Icon on Windows [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/315)
- Removed: remove fs-plus from image-view package [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/305)
- Added: Additional Bundling of Core Packages [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/314)
- Fixed: Resolve some `about` package tests (6 Resolved Tests) [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/310)
- Fixed: Fix Package Test Cache Issue [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/302)
- Fixed: Resolve all Tests within `language-html` (Resolves 2 Failing Tests) [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/300)
- Fixed: Resolve all Tests within `language-javascript` (Resolves 24 Failing Tests) [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/299)
- Fixed: Resolve 40 Failing `image-view` Tests [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/293)
- Added: Added changelog entries that we missed [@mauricioszabo](https://github.com/pulsar-edit/pulsar/pull/292)
- Removed: meta: Delete preinstall script from package.json [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/296)
- Added: Improve MacOS Builds [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/280)
- Fixed: Fix `archive-view` [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/294)
- Added: Improved Windows Builds [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/279)
- Added: More Bundles [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/290)
- Fixed: Fix macos open without window [@mauricioszabo](https://github.com/pulsar-edit/pulsar/pull/291)
- Removed: delete workflow from language-java [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/285)
- Removed: Remove handlers for opening things on Mac [@mauricioszabo](https://github.com/pulsar-edit/pulsar/pull/288)
- Rebrand: Rebranding and relinking to new site [@Daeraxa](https://github.com/pulsar-edit/pulsar/pull/282)
- Added: script: symlink ppm in post-install.sh (for .deb and .rpm packages) [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/273)
- Added: Add --no-sandbox to start script [@Daeraxa](https://github.com/pulsar-edit/pulsar/pull/276)
- Added: exclude directories from build [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/265)
- Added: add warning when settings-view is disabled [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/243)
- Fixed: Fix typo [@snowcatridge10](https://github.com/pulsar-edit/pulsar/pull/267)
- Fixed: Fix install on packaged code [@mauricioszabo](https://github.com/pulsar-edit/pulsar/pull/269)
- Fixed: Fix Logo weirdness [@mauricioszabo](https://github.com/pulsar-edit/pulsar/pull/271)
- Fixed: Fix installing shell commands to path (macOS) [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/263)
- Fixed: 🍎 Fix wrong app name resolution in pulsar.sh on Mac [@soupertonic](https://github.com/pulsar-edit/pulsar/pull/252)
- Fixed: Postinstall error with rm usr/bin/pulsar [@Spiker985](https://github.com/pulsar-edit/pulsar/pull/228)
- Added: Made changes to the main.js file. [@CatPerson136](https://github.com/pulsar-edit/pulsar/pull/232)
- Added: Add `--no-sandbox` to Linux Launch [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/262)
- Removed: removed unused files [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/219)
- Rebrand: rebrand package publish domain [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/245)
- Removed: remove metrics code from welcome package [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/244)
- Fixed: Deep cache for settings view [@mauricioszabo](https://github.com/pulsar-edit/pulsar/pull/250)
- Fixed: fix syntax error in `packages/README.md` [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/248)
- Removed: remove package.json dependencies [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/169)
- Added: `underscore-plus` to dependencies [@Sertonix](https://github.com/pulsar-edit/pulsar/pull/218)

### ppm

- Added: Convert body params to query params [@Spiker985](https://github.com/pulsar-edit/ppm/pull/47)
- Fixed: src: Update Electron header download URL [@DeeDeeG](https://github.com/pulsar-edit/ppm/pull/43)
