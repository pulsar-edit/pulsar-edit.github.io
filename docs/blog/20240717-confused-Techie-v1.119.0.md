---
title: "Pulsar v1.119.0 is Live!"
author: confused-Techie
date: 2024-07-17
category:
  - dev
tag:
  - release
---

Pulsar [1.119.0](https://github.com/pulsar-edit/pulsar/releases/tag/v1.119.0) is available now!

<!-- more -->

## Pulsar v1.119.0 is live!

While a smaller release this time around, v1.119.0 still manages to pack a punch.

For macOS, we've gone to great lengths to ensure Pulsar should build just fine on macOS 13+, while our Linux users get greater compatibility for DevTools on various platforms. For our programmers, there's been more of the constant incremental improvements to various languages' built-in syntax highlighting and code folding this time around, with a focus on PHP, Python, Javascript, Typescript, Shell script, and C.

As always thanks a ton to all of those that support the project and keep it moving forward, we appreciate you all, and look forward to seeing you amongst the stars.

\- The Pulsar Team

---

## **NOTICE**

Originally, the binaries from our normal "Pull Request" CI build (which produces unsigned binaries) were accidentally uploaded to this release, instead of the binaries from the special "tag push" CI build (which signs the macOS binaries). In order to provide you with signed macOS binaries, we are re-uploading the Intel macOS binaries and updating `SHA256SUMS.txt` to reflect this. As such the following binaries have been swapped out for the correct versions, with the checksum being updated as well for the following files:

- `Intel.Mac.Pulsar-1.119.0-mac.zip`
- `Intel.Mac.Pulsar-1.119.0.dmg`

---

- Changed `language-php` to continue syntax-highlighting even when encountering unbalanced PHP tags. (Avoid throwing a syntax error)
- Indentation, fold, and highlighting fixes in `language-python`, `language-javascript`, `language-typescript`, `language-shell` and `language-c`.
- Worked around API breakage (FreeBSD `libiconv` vs GNU `libiconv`) in the `iconv` library shipped in macOS 13+
- Fix `--no-sandbox` flag not being applied to the `.desktop` launcher on Linux (Fixes Dev Tools)

### Pulsar

- Tree-sitter rolling fixes, 1.119.0 edition [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1028)
- Rewrite `tree-view.js` [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1052)
- Fix macOS binaries by vendorizing `libiconv` [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1051)
- Link to Homebrew version of `libiconv`... [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1039)
- Revert "Merge pull request #810 from pulsar-edit/fix-on-change-cursor-pos" [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1035)
- electron-builder: Add '--no-sandbox' launch arg for Linux build targets [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/1029)

### superstring

- Candidate for new `master` [@savetheclocktower](https://github.com/pulsar-edit/superstring/pull/15)
