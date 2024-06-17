---
title: "Hot dog, it's another Pulsar release!"
author: confused-Techie
date: 2024-06-16
category:
  - dev
tag:
  - release
---

Pulsar [1.118.0](https://github.com/pulsar-edit/pulsar/releases/tag/v1.118.0) is available now!

<!-- more -->

## Hot dog, it's another Pulsar release!

Get your grills ready, Pulsar v1.118.0 is cooking with gas! This release brings lots of love to syntax highlighting, along with a zesty sprinkling of features and fixes.

We've got Tree-sitter fixes and improvements, including improved documentation around Tree-sitter's usage, an updated PHP parser, fixed syntax quoting on Clojure, as well as enhanced Clojure highlighting support for metadata and "def" elements, as well as improved injection points for Clojure. EDN files are back to being detected as Clojure, but will highlight correctly as EDN. Tasty!

Within the Pulsar application the new setting `core.allowWindowTransparency` lets users set the background of the editor to support transparency, although transparent CSS styles must be set by a theme or user stylesheet for Pulsar to actually be transparent. The `textChanged` property is now accurate when characters are deleted.

The Tree-sitter syntax highlighting system now has a new test for queries `ancestorTypeNearerThan` which helps matching the _first_ type as an ancestor, as well as supporting a second `buffer` argument in the `content` field of `addInjectionPoint` for easier customization.

Finally, for our community package developers, they will be glad to hear that first time publication issues have been resolved with a rewrite of the `ppm publish` command, improving the workflow, and ensuring things work properly with the updated backend. Please feel free to share what you've been cooking by publishing your packages!

As always, thanks a ton to all of our users and supporters for sticking with the Pulsar project, and until next time, happy coding, and see you amongst the stars!

\- The Pulsar Team

---

- Various tree-sitter grammar improvements
  - Docs fixes
  - A parser update for PHP
  - Miscellaneous grammar fixes and improvements
- Added a preference `core.allowWindowTransparency` so that themes and user stylesheets
  can make editor windows' backgrounds transparent.
- Added a new modern tree sitter "test" for highlight query - `ancestorTypeNearerThan`
  that matches if it finds the _first_ type as an ancestor, but _doesn't match_ if
  any "other" ancestors are found before
- Syntax quoting and unquoting in Clojure now highlights correctly, and also
  highlights full qualified keywords differently than generated ones
- `content` field of addInjectionPoint for modern-tree-sitter now supports a second
  `buffer` argument, for better customization if one wants to
- EDN is back to being detected as Clojure (for compatibility) but highlights as EDN
- Fixed syntax quoting on Clojure grammar (newer tree-sitter), fixed some
  injection points on Clojure. Added support for highligting metadata, and added
  better support for "def" elements (for example - doesn't scope `default` or
  `definition` as a `def`, but highlights `p/defresolver`)
- Fixed `textChanged` property to be accurate when deleting characters
- Fixed `ppm publish` for publishing brand new packages

### Pulsar

- Fixed: Tree-sitter rolling fixes, 1.118 edition [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1010)
- Added: src: Allow windows to be transparent, behind a pref (off by default) [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/982)
- Added: Another batch of Clojure enhancements [@mauricioszabo](https://github.com/pulsar-edit/pulsar/pull/729)
- Fixed: Fix `onDidChangeCursorPosition` callback event property on deleting characters [@mauricioszabo](https://github.com/pulsar-edit/pulsar/pull/810)
- Bumped: Update ppm to commit 3542dee00f4622f7458f2f65f05e5 [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/1014)
- Updated: Cirrus: Update Rolling upload token [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/1011)
