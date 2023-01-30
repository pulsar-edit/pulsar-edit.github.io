---
title: February Update
author: Daeraxa
date: 2023-02-01
category:
  - news
  - log
tag:
  - update
---

What has the Pulsar team and community been up to lately?

<!-- more -->

# Community Update

Hi everyone, welcome to our first post in what we hope will be a regular (or at
least semi-regular) set of updates from the Pulsar team to let you know what
is going on in the background. We see updates, work and improvements to the
entire Pulsar ecosystem nearly every single day but many of these either aren't
very obvious or requires a very close following of the various communication
channels.  
This update format is designed to let people know of our major wins and exciting
updates of things we are working on so you can share in the progress we are
making.  
We hope you enjoy reading this and getting to know what is going on with the
project and as ever we will see you among the stars!

## Tree-sitter

Those who have been keeping up with the development of Pulsar know that one of
our major goals is to move upgrade to newer versions of Electron. Unfortunately
this comes with quite a few challenges, one of which is the implementation of
[Tree-sitter](https://tree-sitter.github.io/tree-sitter/), a language parsing
library who's history is entwined with Atom's.

Ultimately Tree-sitter moved on from Atom leaving it with a different
implementation and one which is difficult to use with the changes in newer
Electron versions.

So instead of trying to fix the old one, the current goal is to look at using
the [WASM version](https://github.com/tree-sitter/tree-sitter/blob/master/lib/binding_web/README.md)
and `@Maurício Szabo` has been doing some fantastic work on getting this
implemented into Pulsar. This post isn't for the specifics of this work save to
say we have seen "interesting" issues and challenges with this but the work
is looking very promising and if all works out then our main barrier to a
major Electron upgrade will be out of our way.

## Package repository

There has been an awful lot of work going on in this area and it is mostly
work that, in theory, should be pretty invisible to most users of Pulsar if all
goes well.

`@confused-techie` and `@giusykurmikon` have been doing some amazing work to improve
this area with updates to the way it handles versioning and a refactoring of the
git and github interactions so hopefully we might support other platforms in the
future.

`@Spiker985` has been creating and updating the [Swagger/OpenAPI definition](https://api.pulsar-edit.dev/swagger-ui/)
for the backend API so we have a proper definition and validation of it and
`@confused-techie` started the [Architecture document](https://github.com/pulsar-edit/package-backend/blob/main/ARCHITECTURE.md)
which explains how everything works at a high level to allow people to more
easily contribute to the project. We hope to include more of these in other
repositories as time goes on.

In terms of some package related housekeeping, one of our main goals was to
preserve as many of the Atom packages as possible. So when we found that some
packages had some ambiguous or missing licences we have made the effort to
contact the owner of each package and ask for permission to host them.
The good news is that this has been well received and we have managed to
preserve more than a few of them.

## Donations and binary signing

We have had an awful lot of generous donations sent to us recently. In
particular we have to give a massive shout out to `@SubAtomic` who has donated
more money to the project alone than we thought we get in a whole year.

`@anonCoffee` also gave us a very generous donation and was also the first
sponsor on our new [GitHub Sponsorship](https://github.com/sponsors/pulsar-edit)
which is an alternative should you want to donate by a platform other than our
existing [Open Collective](https://opencollective.com/pulsar-edit).

We also now have a webhook set up for the GitHub sponsors so now when we get
a donation we can properly thank them as it pops up on our Discord feed.

A huge thank you to literally all of our other donators on both platforms, we
appreciate everything you give and make so much of what we want to do, possible.

Our first big expenditure we voted for (outside of ongoing hosting costs) will
be to pay for licences from Apple and Microsoft so that we can finally sign our
binaries to prevent the issue of new users being told that they are broken,
dangerous or may contain harmful code. `@autumnblazey` has already started on the
macOS process of this so with any luck the need to run a special command just
to run our software will be a thing of the past.

## Matrix space

`@kaosine` has been working to set us up a [Matrix](https://matrix.org/) space for
an alternative who would prefer to use an open source alternative to our main
[Discord Server](https://discord.gg/7aEbB9dGRT). However, we do not want to
split the community in this way so before we start publicising it and providing
links we would rather get our Discord bridge set up first so that all messages
can be seen on both platforms seamlessly. Once it is up and live we will update
the community with all the info that could be needed.
