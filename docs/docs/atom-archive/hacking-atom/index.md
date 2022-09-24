---
title: Chapter 3-Hacking Atom
---

## Hacking Atom

Now it's time to come to the "Hackable" part of the Hackable Editor. As we've seen throughout the second section, a huge part of Atom is made up of bundled packages. If you wish to add some functionality to Atom, you have access to the same APIs and tools that the core features of Atom has. From the [tree-view](https://github.com/atom/tree-view) to the [command-palette](https://github.com/atom/command-palette) to [find-and-replace](https://github.com/atom/find-and-replace) functionality, even the most core features of Atom are implemented as packages.

In this chapter, we're going to learn how to extend the functionality of Atom through writing packages. This will be everything from new user interfaces to new language grammars to new themes. We'll learn this by writing a series of increasingly complex packages together, introducing you to new APIs and tools and techniques as we need them.

If you're looking for an example using a specific API or feature, you can skip to the end of the chapter where we've indexed all the examples that way.

@include(./sections/tools-of-the-trade.md)
@include(./sections/the-init-file.md)
@include(./sections/package-word-count.md)
@include(./sections/package-modifying-text.md)
@include(./sections/package-active-editor-info.md)
@include(./sections/creating-a-theme.md)
@include(./sections/creating-a-grammar.md)
@include(./sections/creating-a-legacy-textmate-grammar.md)
@include(./sections/publishing.md)
@include(./sections/iconography.md)
@include(./sections/debugging.md)
@include(./sections/writing-specs.md)
@include(./sections/handling-uris.md)
@include(./sections/cross-platform-compatibility.md)
@include(./sections/converting-from-textmate.md)
@include(./sections/hacking-on-atom-core.md)
@include(./sections/contributing-to-official-atom-packages.md)
@include(./sections/creating-a-fork-of-a-core-package-in-atom-atom.md)
@include(./sections/maintaining-a-fork-of-a-core-package-in-atom-atom.md)
@include(./sections/summary.md)
