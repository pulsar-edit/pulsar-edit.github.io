---
title: "For all the code ninjas out there, Pulsar 1.116.0 is available now!"
author: confused-Techie
date: 2024-04-17
category:
  - dev
tag:
  - release
---

Pulsar [1.116.0](https://github.com/pulsar-edit/pulsar/releases/tag/v1.116.0) is available now!

<!-- more -->

## Pulsar 1.116.0: Ready for all the code ninjas out there!

Like the past few releases, this Pulsar release is full of Tree-sitter improvements and fixes! From TypeScript and Python getting improved syntax highlighting all around, to big changes like replacing the underlying Markdown Tree-sitter parser, Pulsar 1.116 is sure to make these grammars more stable and aesthetically pleasing.

But on to some of the really exciting stuff this month: we have a flurry of new features and updates to `snippets`, which is sure to make otherwise repetitive coding exciting and high-tech!

For anyone familiar with the super secret code ninja techniques of `snippets`, there's now support for new snippet variables and transformation flags. Be sure to read the full changelog to get caught up on all of these changes.

As always, this release has some bug fixes and housekeeping. Linux folks will appreciate improved metadata for their installs, whereas Windows folks will be happy to see that adding Pulsar to the PATH is easier than ever whether Pulsar is installed for just one user or system-wide.

That's just about everything this time around. We can't wait to see what people do with these powerful new `snippets` features and look forward to the next one!

Until next time, happy coding, and see you amongst the stars!
\- The Pulsar team

---

- Added `TextEditor::getCommentDelimitersForBufferPosition` for retrieving comment delimiter strings appropriate for a given buffer position. This allows us to support three new snippet variables: `LINE_COMMENT`, `BLOCK_COMMENT_START`, and `BLOCK_COMMENT_END`.
- Added ability to use “simple” transformation flags in snippets (like `/upcase` and `/camelcase`) within `sed`-style snippet transformation replacements.
- Improved TypeScript syntax highlighting of regular expressions, TSX fragments, wildcard export identifiers, namespaced types, and template string punctuation.
- Replaced our underlying Tree-sitter parser for Markdown files with one that’s more stable.
- Fixed issues in Python with unwanted indentation after type annotations and applying scope names to constructor functions.
- Removed Machine PATH handling for Pulsar on Windows, ensuring to only ever attempt PATH manipulation per user. Added additional safety mechanisms when handling a user's PATH variable.
- Update (Linux) metainfo from downstream Pulsar Flatpak

### Pulsar

- Updated: Update Pulsar's Linux desktop & metainfo mostly from Flatpak [@cat-master21](https://github.com/pulsar-edit/pulsar/pull/935)
- Updated: [core] Simplify/Cleanup `StyleManager` [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/959)
- Fixed: Tree-sitter fixes (1.116 edition) [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/968)
- Bumped: Bump `snippets` dependency to 1.8.0 [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/972)
- Added: Add a `TextEditor` method for retrieving comment delimiters... [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/970)
- Fixed: [core] (Windows) Remove all `Machine` PATH handling, add safety mechanisms [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/957)

### snippets

- Added: Add support for variables `LINE_COMMENT`, `BLOCK_COMMENT_START` and `BLOCK_COMMENT_END` [@savetheclocktower](https://github.com/pulsar-edit/snippets/pull/21)
- Added: Extend support for simple transformation flags to sed-style replacements [@savetheclocktower](https://github.com/pulsar-edit/snippets/pull/20)
