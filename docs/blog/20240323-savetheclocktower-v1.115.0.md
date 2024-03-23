---
title: "A week later than you’re accustomed to — but worth the wait! Pulsar 1.115.0 is available now!"
author: savetheclocktower
date: 2024-03-23
category:
  - dev
tag:
  - release
---

Pulsar [1.115.0](https://github.com/pulsar-edit/pulsar/releases/tag/v1.115.0) is available now!

<!-- more -->

## A week later than you’re accustomed to — but worth the wait! Pulsar 1.115.0 is available now!

Last month’s 1.114.0 release was full of fixes related to the recent migration to modern Tree-sitter. This month’s release is much smaller, but still dominated by Tree-sitter fixes affecting syntax highlighting, code folding, and indentation.

The most visible fixes are related to your ability to customize the grammar that Pulsar uses on a per-language basis. This is an approach we’ve encouraged for users that want or need to revert to an older grammar for a specific language — better to do so on a targeted basis than globally. If you can edit your config file, you can do per-language customization.

For instance, now it’s even easier than before to say “use legacy Tree-sitter, but only for Python”:

```coffeescript
".python.source":
  core:
    useLegacyTreeSitter: true
```

Or “use modern Tree-sitter for JavaScript, but TextMate-style grammars everywhere else”:

```coffeescript
"*":
  core:
    useTreeSitterParsers: false
".source.javascript":
  core:
    useTreeSitterParsers: true
```

Better yet, now the `grammar-selector` package will be attuned to these choices. When you manually reassign a buffer to use a different grammar, it will offer you only the “correct” grammar for each language based on what you’ve opted into.

We’ve also delivered our customary incremental improvements in language support, and one change that affects nearly all languages: indentation hinting will be more accurate in transactions with multiple buffer changes. The most common example of a multi-edit transaction is when the user places more than one cursor and starts typing.

We’ve made improvements to our `language-ruby` bundle, primarily with code folding and indentation hinting. TypeScript and C/C++ also got some small enhancements, and the `language-shellscript` bundle got a parser update.

And lastly, on another note, we have a few maintenance and upkeep PR's to keep our Cirrus CI active and working, to ensure you can keep using and enjoying the latest builds Pulsar has to offer.

Until next time, happy coding, and see you amongst the stars!

- The Pulsar team

---

- Fixed some folds in Ruby like `unless`, some blocks, multiline comments, function calls, and different array syntaxes for strings and keywords.
- Improved the accuracy of indentation hinting in modern Tree-sitter grammars, especially in multi-cursor scenarios.
- Improved the ability of the user to opt into a specific kind of grammar for a specific language.
- Changed the behavior of the `grammar-selector` package so that it will show the user's preferred grammar for a specific language.
- Updated to version `0.20.9` of `web-tree-sitter`.
- Improved syntax highlighting, indentation, and code folding in various languages, including TypeScript, shell scripts, Ruby, and C/C++.

### Pulsar

- Fixed: Fixed folds for Ruby [@mauricioszabo](https://github.com/pulsar-edit/pulsar/pull/956)
- Fixed: Tree-sitter fixes: 1.115 edition [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/941)
- Updated: cirrus: Update Rolling upload token again [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/960)
- Fixed: cirrus: Various fixes for macOS Cirrus CI [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/961)
- Fixed: Fix(fuzzy-finder) fs.lstatSync throws Exception if not a file or dir [@schadomi7](https://github.com/pulsar-edit/pulsar/pull/944)
- Updated: CI: Update Rolling upload token for Cirrus CI [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/936)
- Updated: Cirrus: Install older dotenv gem version ~> 2.8 (< 3) [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/937)
