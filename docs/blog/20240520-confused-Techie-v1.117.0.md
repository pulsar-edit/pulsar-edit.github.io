---
title: "With special love for Markdown and Tree-sitter, Pulsar 1.117.0 is available now!"
author: confused-Techie
date: 2024-05-20
category:
  - dev
tag:
  - release
---

Pulsar [1.117.0](https://github.com/pulsar-edit/pulsar/releases/tag/v1.117.0) is available now!

<!-- more -->

## Pulsar 1.117.0: With special love for Markdown and Tree-sitter

As you may have come to expect, this release is full of new improvements for Tree-sitter grammars! From SCSS now having Tree-sitter support, to Ruby getting an updated parser, to performance and highlighting enhancements in Markdown and TypeScript, there's hopefully something in there for everybody.

Speaking of Markdown, the `markdown-preview` package has gotten significant performance increases in the preview pane (especially for documents with lots of fenced code blocks), and boasts brand new dark mode support for the "GitHub.com style" option!

But dark mode support doesn't stop there! Pulsar can now (optionally) use the OS-level dark mode window theme, switching automatically based on the lightness or darkness of the colors in the active Pulsar theme if enabled.

Beyond the fixes and features within the editor itself, you'll be glad to know this release also saw many improvements for our Continuous Integration to ensure we can deliver timely and bug-free updates in the future.
\- The Pulsar team

---

- [markdown-preview] Improve rendering performance in preview panes, especially in documents with lots of fenced code blocks.
- [markdown-preview] GitHub-style Markdown preview now uses up-to-date styles and supports dark mode.
- Pulsar's OS level theme will now change according to the selected editor theme if `core.syncWindowThemeWithPulsarTheme` is enabled.
- [language-sass] Add SCSS Tree-sitter grammar.
- [language-ruby] Update to latest Tree-sitter Ruby parser.
- [language-gfm] Make each block-level HTML tag its own injection.
- [language-typescript] More highlighting fixes, especially for operators.

### Pulsar

- Fixed: Cirrus: Fix gem install fpm on ARM Linux [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/1008)
- Updated: [ci] Update Cirrus CI Token [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/1006)
- Fixed: CI: Fix workaround for Homebrew node in Cirrus on macOS [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/1002)
- Added: [markdown-preview] Optimize re-rendering of content in a preview pane especially syntax highlighting [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/984)
- Fixed: Tree-sitter rolling fixes, 1.117 edition [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/974)
- Updated: Update Renovate preset name [@HonkingGoose](https://github.com/pulsar-edit/pulsar/pull/1000)
- Added: Debugging when a package service is incorrect [@mauricioszabo](https://github.com/pulsar-edit/pulsar/pull/995)
- Added: Bundle snippets [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/993)
- Fixed: CI: Pin to macOS 12 runner images instead of macos-latest (GitHub Actions) [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/997)
- Added: [markdown-preview] Add dark mode for GitHub-style preview [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/973)
- Added: Change Window Theme with Pulsar Theme [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/545)
- Updated: CI: Upgrade or replace all deprecated GH Actions [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/983)
- Fixed: [language-clojure] Stop detecting `.org` files as `.language-clojure` [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/980)
