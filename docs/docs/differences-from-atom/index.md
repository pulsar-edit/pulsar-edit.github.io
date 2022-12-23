---
title: "Pulsar : Differences from Atom"
sitemap:
  priority: 0.1
---

Pulsar reuses most code that used to belong to Atom. Everything that used to run
on Atom 1.60.0 should run on Pulsar 1.100.0-beta, so if a package stops working
it may be a bug on Pulsar.

Things that changed:

## Made it easier to install from source

Atom used to have a 5,000 script to prepare a development environment. That also
dependends on older `npm` tool - newer `npm` versions would crash (and, honestly,
still are crashing) so we moved away from `npm` and are now using `yarn`.

This is _not a final decision_ - we just decided for `yarn` because newer `npm`
still doesn't work with Pulsar dependencies. Together with this decision, we
added `electron` as a development dependency, and made some scripts like `yarn build` and `yarn start` to [make it easier to run the editor from
source](/docs/launch-manual/sections/core-hacking). This also makes it easier
for newcomers help if they want.

## Removed all Telemetry

Atom used to have a toggle for telemetry. Now, it's gone - no telemetry will be
sent to our servers, ever. If you're seeing some suspicious requests to servers,
first try to reproduce on safe mode and if it's still present, please open an
issue - it may be leftover code that we missed.

We don't have telemetry endpoints on our backend, and don't intend to have any.

## Library bumps

At the time we forked Atom, it was using Electron 10. We changed to Electron 12
(the latest version we could bump until things started to become problematic,
like native dependencies crashing and other random errors). We _do intent_ to
upgrade Pulsar to the latest Electron, and then try to keep up-to-date. This can
cause issues with packages that used deprecated Electron features.

We also upgraded Tree-Sitter to the latest community version, and all grammars
with it; bumped some other libraries in the process, trying to make things more
up-to-date, but _no functionality_ was changed.

## Changes on the way Pulsar watches for file changes

At the time we forked Atom, it basically had three different ways of checking
file changes: polling for changes, using tree-view as a mechanism, using an
internal library called `@atom/watcher`, and using [Node sentinel file
watcher](https://github.com/Axosoft/nsfw). We removed all options except for
this latest one, because _all other options_ were internal code made by the Atom
team.

In fact, the `@atom/watcher` was under the options "experimental watching
library", and we actually have no idea what was the intended result for that.
Considering it would probably become stale, buggy, and be a security issue, we
decided to stop supporting it.

## Changes in the building process

This is somewhat controversial. Atom used to have a very big, very hard to
follow, build process that needed constant tweaking to work. We removed all the
build process to use the external tool
[electron-builder](https://www.electron.build/)

While this made things easier for us and allowed us to have beta (and alpha)
binaries for everything we want to develop and test (and that's, close to "day
1" of our fork, we already had DEB, RPM, AppImage, both Intel and Silicon DMGs,
and a Windows version on our CI server, ready to install and use), this had some
unfortunate side-effects - Atom used to speed up the loading of the editor with
both an in-house transpilation process, and a technique called [V8
Snapshots](https://web.archive.org/web/20221215131147/https://flight-manual.atom.io/behind-atom/sections/how-atom-uses-chromium-snapshots/).
It also depended on an in-house code called [Electron
Link](https://github.com/atom/electron-link) and it was [**completely tied**
with the way the source code was
organized](https://github.com/atom/atom/blob/master/script/lib/generate-startup-snapshot.js).

None of these exist on the newer code. This means that _currently_ Pulsar takes
more space on the disk _and_ it's slower to load on some systems. Another weird
side-effect of the V8 Snapshots is that it allowed Atom to "preload" some code -
sometimes, even **before** that could even run! Which means we saw some
weird bugs appearing that didn't happen on Atom (because some of the stuff that
should be _loaded_ in the future was already _pre-loaded_ because of the
snapshots), but this, again, made the development process unstable - the source
ran differently than the final binaries.

We are working on a way to mitigate both problems.

## Dev resource path and benchmarks

Atom used to have a "dev resource path" toggle to allow one installed Atom
instance to load using a different source code. We are slowly removing this
ability because, as of now, it's both easier to run Pulsar from source and this
technique depended on some dynamic requires (which does not play nice with code
analysis tools and bundlers that we want to use in the future) and also because
this technique did not allow us to update Electron.

We also removed the "benchmark window" because nobody could run that code, even
on current stable Atom versions...
