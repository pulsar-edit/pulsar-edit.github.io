---
title: Community Update
author: Daeraxa
date: 2023-04-01
category:
  - news
  - log
tag:
  - update
---

Another dose of our regular monthly community update!

<!-- more -->

# Welcome to the April Community Update (don't worry, no fooling going on here)!

Hi everyone and welcome to the April installment of our monthly update that keeps you informed about what is going on in the background of Pulsar, work in progress, community contributions and more!

One thing to quickly note in this opening ramble, a big thank you for everyone who responded to our recent community survey, if you want to see the results and analysis then have a look at the previous [blog post](https://pulsar-edit.dev/blog/20230326-Daeraxa-Survey1-Results.html) we wrote. If you missed it then don't worry, there will be plenty more examples to have your say as we plan to create more surveys in the future.

You will notice I've tried to jazz the post up a little with some images this time around, please [let us know](https://pulsar-edit.dev/community.html) if you have any comments on this addition.

Now that has been dealt with, onto the updates!

## i18n (internationalization) Efforts

<img src="./assets/i18n.png" height="150" />[^1]

[@meadowsys] and [@confused-techie] have been making great progress on the efforts to provide native i18n functionality within Pulsar. This means you will be able to select your own locale/language and Pulsar will be able to translate the various menus and items for you. Of course the big caveat here is that currently none of it is translated so if you have the ability to then we will be asking the community to provide translations wherever possible. To do this we are currently planning to use [Crowdin](https://crowdin.pulsar-edit.dev/).

We will make a bigger announcement on this feature once it is ready.

## Tree-sitter Modernization

<img src="./assets/tree-sitter.png" height="150" />[^2]

Another month and more progress has been made on this front, particularly by [@maurício szabo] and [@savetheclocktower], to get our tree-sitter implementation modernized. Some users noticed that opening some languages on Pulsar, like C++, Java, and Ruby, makes some syntax highlighting tokens different from what they were in Atom, and most of the time, highlighting is either wrong or some tokens are simply missing.

With this rewrite, we're updating Atom’s tree-sitter support to use a newer approach for mapping tree nodes to scope names: using [queries](https://tree-sitter.github.io/tree-sitter/using-parsers#pattern-matching-with-queries). This means more accurate mapping of scopes. We can also use queries to define indentation rules, code folding boundaries, and other features. It further means we won’t be stuck with a "different" implementation of tree-sitter from all other editors, and we can keep up-to-date with the recent developments and advancements on tree-sitter.

Finally, we also moved away from the "binary" version of tree-sitter (instead using the WASM version). This means that we can migrate the editor to newer Electron versions without trouble, and it's also more future-proof - WASM is a technology that runs on browsers and it's not a Node.JS-only thing. It also makes our compilation process easier, more reliable, and faster (we don't need to compile all grammars and tree-sitter itself on Linux, Windows, and Mac, and for Intel and ARM processors).

For more background info see some of the previous updates or [Maurício's blog post](https://pulsar-edit.dev/blog/20230209-mauricioszabo-tree-sitter-part-1.html) on the topic.

## TextMate Grammar Library & Superstring Migration to WASM

<img src="./assets/webassembly.png" height="150" />[^3]

Atom and current versions of Pulsar use a library called [first-mate](https://github.com/pulsar-edit/first-mate) that uses [node-oniguruma](https://github.com/pulsar-edit/node-oniguruma/) to parse the legacy TextMate grammars (the original ones before Atom moved to tree-sitter as its primary grammar choice). Like tree-sitter and superstring, this is something that is preventing our migration to modern versions of Electron so [@maurício szabo] and [@savetheclocktower] have been working on this to instead migrate to a new library we are calling `second-mate` which uses [vscode-oniguruma](https://github.com/microsoft/vscode-oniguruma) instead which is WASM based. Funny how things eventually come back around to borrowing from VSC instead...

Work has also been going on to migrate the existing [superstring](https://github.com/pulsar-edit/superstring) library to WASM. This, along with `tree-sitter` and `first-mate` mentioned above, is blocking our progress to modern Electron versions.
Superstring is the library at the heart of the editor itself so this is quite a big change that will require a good amount of work and testing before it is ready but we are making progress!

## Package Badges

[@confused-techie] has made some changes to the package backend and website to support badges which can be applied to packages. Currently these can only be added by the Pulsar team but we will hopefully be looking to roll out something to package authors later. Essentially this allows us to add some additional metadata to a package to give information to Pulsar users. This is particularly important for Pulsar as a fork of Atom because we brought with us the vast majority of the Atom packages that were created over the years (see [@confused-techie]'s previous [blog posts](https://pulsar-edit.dev/tag/backend/) on this subject for more info').

![backend-badge.png](./assets/backend-badge.png)

Currently we have rolled out an `Outdated` badge - this is designed so that we can help Pulsar users with additional info about particular packages which we know are being actively developed but have not been updated by the authors to the Pulsar backend. For example the [hydrogen package](https://web.pulsar-edit.dev/packages/hydrogen) (shown above) has some problems working with Pulsar, changes have been added to it to make it work but as these changes have not been pushed to the backend by the package authors the only way of getting it is to install them using `ppm/pulsar -p` using the [GitHub/Git Remotes](https://pulsar-edit.dev/docs/launch-manual/sections/using-pulsar/#github-or-git-remotes) functionality. To see more info on the specific reason a badge was added, you can click the badge and it will bring you to a document of our backend admin actions which include the reason for the addition as well as info to help.

Not all badges are intended to be negative. We plan to offer badges to help the community such as `Looking for Maintainers` if a package author wishes for some help or to hand over the package maintenance entirely. We have already added a `Made for Pulsar!` badge to indicate packages which have been published or updated to the Pulsar backend to help people work out which packages are current and being updated as well as help prevent problems with installing very old and unmaintained Atom packages.

![backend-badge-made.png](./assets/backend-badge-made.png)

You can read the [badge specification](https://github.com/pulsar-edit/package-backend/blob/main/docs/reference/badge-spec.md) for more info.

Badges are not currently available in Pulsar itself but we are working on it!

## Package Service Filtering

<img src="./assets/network.png" height="150" />[^4]

An interesting update to our backend that allows for new queries to be made for finding out what packages provide or consume a given service. This can be used in a number of ways, users can easily filter by package functionality rather than just keywords and developers/packages authors can search to see what packages may provide or consume a given service to help create a more interconnected set of packages.

For example this query [https://web.pulsar-edit.dev/packages?service=terminal&serviceType=provided](https://web.pulsar-edit.dev/packages?service=terminal&serviceType=provided) will search for all packages that provide the `terminal` service so if somebody wishes to find packages that provide or consume `terminal` then it is now easy to do so.

This functionality is currently only available via the API and website query but we plan to offer some interesting and (hopefully) useful features on the website (and potentially Pulsar itself) to display these services.

## Bundling `ppm` Within Pulsar

<img src="./assets/node-package.png" height="150" />[^5]

As you may know, `ppm` is the `Pulsar Package Manager` —  the thing you interact with when you want to install or update packages. Most people will probably only use this by interacting with the packages menu inside Pulsar but `ppm` is also supplied as a command line applications accessible via either `ppm` or `pulsar -p`. One issue with this approach is that we have to account for all of the different OSs and packaging methods which means adding it to `$PATH` correctly on each OS etc. (This was even an issue with Atom which had a special macOS only command to install the `apm` command line again).

With this change we hopefully avoid all of this as it is simply part of the main `pulsar` executable so we only have to account for the details of one application and not two. This also means we can do some stuff we weren't able to easily do before, like expose the `ppm` commands within Pulsar itself without having to use a terminal at all. This update has the potential to improve a lot of things so watch this space!

## Chocolatey

<img src="./assets/chocolatey.png" height="150" />

For those unfamiliar, [Chocolately](https://chocolatey.org/) is a package manager for Windows and something we have been wanting to officially support for a while now. Whilst we have not got anything available yet (don't worry we will make an announcement once it is) we have a bunch of community members who have been working on this and helping out so a big thank you to community members @HighHarmonics, @il_mix and @COLAMAroro for their contributions here.

[@maurício szabo]: https://github.com/mauricioszabo
[@confused-techie]: https://github.com/confused-Techie
[@digitalone1]: https://github.com/Digitalone1
[@spiker985]: https://github.com/spiker985
[@meadowsys]: https://github.com/Meadowsys
[@kaosine]: https://github.com/kaosine
[@savetheclocktower]: https://github.com/savetheclocktower
[@htmltim]: https://www.youtube.com/@htmltim

[^1]: Image from [https://openclipart.org/](https://openclipart.org/detail/303534/translation-icon)
[^2]: Image from [https://tree-sitter.github.io/tree-sitter/](https://tree-sitter.github.io/tree-sitter/) - Copyright (c) 2018-2021 Max Brunsfeld
[^3]: Image from [https://github.com/carlosbaraza/web-assembly-logo](https://github.com/carlosbaraza/web-assembly-logo) - CC0 1.0 Universal
[^4]: Image from [https://openclipart.org/](https://openclipart.org/detail/169025/redes)
[^5]: Image from [https://vectorified.com](https://vectorified.com/node-js-icon) - CC BY-NC 4.0 Licence
