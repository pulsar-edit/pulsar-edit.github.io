---
lang: en-US
title: Hacking the Core
description: Info on building from source + hacking on Pulsar's core
---

::: warning Under Construction
This document is under construction, please check back soon for updates. Please
see [our socials](/docs/launch-manual/sections/faq/#having-trouble) and feel free to ask for assistance or
inquire as to the status of this document.
:::

Now it's time to come to the "Hackable" part of the Hyper-Hackable Editor. As
we've seen throughout the second section, a huge part of Pulsar is made up of
bundled packages. If you wish to add some functionality to Pulsar, you have
access to the same APIs and tools that the core features of Pulsar has. From the
[tree-view](https://github.com/pulsar-edit/tree-view) to the [command-palette](https://github.com/pulsar-edit/command-palette)
to [find-and-replace](https://github.com/pulsar-edit/find-and-replace)
functionality, even the most core features of Pulsar are implemented as packages.

In this section, we're going to learn how to extend the functionality of Pulsar
through writing packages. This will be everything from new user interfaces to
new language grammars to new themes. We'll learn this by writing a series of
increasingly complex packages together, introducing you to new APIs and tools
and techniques as we need them.

First though we will look at how to build the editor itself from source.

If you're looking for an example or specific section using a specific API or
feature, you can check below for an index to this section and skip right to it.

::: details Sections

- [Building Pulsar](#building-pulsar)
- [Using PPM](#using-ppm)
- [Hacking on the core](#hacking-on-the-core)
- [Tools of the trade](#tools-of-the-trade)
- [The init file](#the-init-file)
- [Package: Word Count](#package-word-count)
- [Package: Modifying Text](#package-modifying-text)
- [Package: Active Editor Info](#package-active-editor-info)
- [Creating a theme](#creating-a-theme)
- [Creating a Grammar](#creating-a-grammar)
- [Creating a legacy Textmate grammar](#reating-a-legacy-textmate-grammar)
- [Converting from Textmate](#converting-from-textmate)
- [Publishing](#publishing)
- [Iconography](#iconography)
- [Debugging](#debugging)
- [Writing specs](#writing-specs)
- [Handling URIs](#handling-uris)
- [Cross-platform compatibility](#cross-platform-compatibility)
- [Contributing to official Pulsar packages](#contributing-to-official-pulsar-packages)
- [Creating a fork of a core package](#creating-a-fork-of-a-core-package)
- [Maintaining a fork of a core package](#maintaining-a-fork-of-a-core-package)
- [Help](#having-trouble)

:::

@include(sections/building-pulsar.md)
@include(sections/using-ppm.md)
@include(sections/hacking-on-the-core.md)
@include(sections/tools-of-the-trade.md)
@include(sections/the-init-file.md)
@include(sections/package-word-count.md)
@include(sections/package-modifying-text.md)
@include(sections/package-active-editor-info.md)
@include(sections/creating-a-theme.md)
@include(sections/creating-a-grammar.md)
@include(sections/creating-a-legacy-textmate-grammar.md)
@include(sections/converting-from-textmate.md)
@include(sections/publishing.md)
@include(sections/iconography.md)
@include(sections/debugging.md)
@include(sections/writing-specs.md)
@include(sections/handling-uris.md)
@include(sections/cross-platform-compatibility.md)
@include(sections/contributing-to-official-pulsar-packages.md)
@include(sections/creating-a-fork-of-a-core-package.md)
@include(sections/maintaining-a-fork-of-a-core-package.md)
@include(sections/summary.md)
@include(../faq/sections/get-help.md)
