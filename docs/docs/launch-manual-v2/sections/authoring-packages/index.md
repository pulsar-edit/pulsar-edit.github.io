---
lang: en-US
title: Authoring Pulsar Packages
description: Creating and Publishing Packages for Pulsar Package Registry
---

A huge part of Pulsar is made up of bundled and community-made packages. If you wish to add some functionality to Pulsar, you have access to the same APIs and tools that were used to build Pulsar itself. From the [tree-view](https://github.com/pulsar-edit/tree-view) to the [command-palette](https://github.com/pulsar-edit/command-palette) functionality — most core features of Pulsar are implemented as packages.

In this section we will cover how to extend the functionality of Pulsar through writing packages. Packages can do a number of things: change the user interface, add a new theme, add a grammar for a language, and more. We'll learn this by writing a series of increasingly complex packages together, introducing you to new APIs, tools, and techniques as we need them.

We'll then take a look at how we can get new packages published to the Pulsar Package Registry using the built-in tool `ppm`.

---

If you are just jumping in, here are some resources you may want to keep handy to get yourself familiar with the other parts of Pulsar we'll be using.

- [Pulsar Package Registry API]()
- [Pulsar Editor API]()
- [Using PPM]()

---

::: details Sections

- [Publishing a Package](#publishing-a-package)

:::

@include(sections/publishing-a-package.md)
