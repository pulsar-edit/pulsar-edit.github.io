---
title: "Pulsar 1.121.0: CLI improvements? Now you're speaking my language!"
author: confused-Techie
date: 2024-09-18
category:
  - dev
tag:
  - release
---

Pulsar [1.121.0](https://github.com/pulsar-edit/pulsar/releases/tag/v1.121.0) is available now!

<!-- more -->

## Pulsar v1.121.0: CLI improvements? Now you're speaking my language.

For this edition of Pulsar, along with the usual bug fixes, we've particularly focused on CLI usage and up-to-date language support.

On Linux and macOS, the `pulsar -p` command (via the `pulsar.sh` launcher script) will now invoke `ppm` directly without having to launch Pulsar first. (We shipped the equivalent enhancement for Windows in the last release.)

The Linux CLI has some further enhancements. It’s now much better at detecting where your Pulsar installation is on disk; this should help those who have extracted Pulsar from the `.tar.gz` tarball distribution. (Building on this, we hope we can make CLI usage easier for our AppImage users in the next release.)

Speaking of the CLI: we’ve fixed an issue with `ppm` that was affecting only users with Apple Silicon Macs. An old, hard-coded value in `ppm`, from before Apple Silicon existed, broke several community packages with native C/C++ module dependencies -- `x-terminal-reloaded` and `autocomplete-paths`, to name just two examples. Before now, these packages wouldn’t install correctly on Apple Silicon macs, and would need manual fixing from the terminal. But now, those packages will build and rebuild successfully on your ARM64 machine.

Meanwhile on Windows, the ability to add Pulsar to the PATH has been moved from the settings menu to the installer. This approach should work much more reliably, and is able to clean up the user's PATH during an uninstall.

Inside the editor we’ve got a number of improvements to language grammars. Our underlying `web-tree-sitter` library has been bumped to the latest stable version, as have our grammars for CSS, Markdown, JavaScript, TypeScript, and HTML.

Under the hood, there’s been a major refactor of how Tree-sitter indentation logic is organized in our codebase. This doesn’t have direct effects on the user, but should make it easier to iterate on indentation logic and deliver more features to the indentation hinting system.

In fact, there’s one new feature for indentation: a new `@match.next` capture. It’s not something that a grammar author would commonly need, but it allows them to do things that weren’t possible before — for instance, to move the indentation level to its proper place after a “hanging indent.”

In the coming releases, some built-in grammars may take advantage of this feature to deliver indentation hinting options that come closer to _"reading your mind"_.

That's everything this time around, and as always a gracious thank you to our wonderful community, all those that contribute to issues, discussions and pull requests, and help make Pulsar possible through donations, bug reports, and helping to support other users.

Until next time, happy coding, and see you amongst the stars!
\- The Pulsar team

---

- Updated `web-tree-sitter` to version 0.23.0.
- [language-css] Updated `tree-sitter-css` to the latest version.
- [language-gfm] Updated `tree-sitter-markdown` to the latest version.
- [language-html] Updated `tree-sitter-html` and `tree-sitter-embedded-template` to their latest versions.
- [language-javascript] Updated `tree-sitter-javascript` to the latest version.
- [language-typescript] Updated `tree-sitter-typescript` to the latest version.
- Added a new `@match.next` capture for advanced control of how indentation should change from one line to the next.
- Added new indentation-specific query predicates `indent.matchesComparisonRow` and `indent.matchesCurrentRow` for comparing arbitrary positions in a Tree-sitter node tree to the operative rows in an indentation suggestion query. Makes it possible to say things like “decrease the indent on line 10 if a statement ends on line 9.”
- Renamed indentation directives `indent.matchIndentOf` and `indent.offsetIndent` to `indent.match` and `indent.offset`, respectively. The old names still work as aliases.
- Improved the command-line `pulsar` script’s ability to find the user’s Pulsar installation location on Linux.
- On macOS and Linux, `pulsar -p` now invokes `ppm` without having to launch Pulsar itself.
- Added options to the Windows installer to add Pulsar and PPM to the PATH
- Fixed `ppm rebuild` command on ARM (Apple Silicon) Macs

### Pulsar

- Fixed: Tree-sitter rolling fixes: 1.121 edition [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1085)
- Updated: Update ppm to commit 97f4d201be013157756a76008bf0cb55e6a1fe35 [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1094)
- Fixed: Experiment: Redirect `-p`/`--package` to `ppm` via `pulsar.sh`… [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1066)
- Added: [windows] Add PATH manipulation to Pulsar installer [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/1071)
- Updated: CI: Update Cirrus Rolling upload token [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/1086)

### PPM

- Fixed: Remove hard-coded architecture on Mac [@savetheclocktower](https://github.com/pulsar-edit/ppm/pull/141)
- Updated: Begin less reliance on `async` package: Await as we go [@confused-Techie](https://github.com/pulsar-edit/ppm/pull/134)
