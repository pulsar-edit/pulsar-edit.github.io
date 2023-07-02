---
title: Community Update
author: Daeraxa
date: 2023-07-01
category:
  - news
  - log
tag:
  - update
---

What has it got in its pocketses? It's the July community update!

<!-- more -->

# Welcome to the July Community Update

This month's update is a little different in tone to some of the others. Recently, we’ve had to deal with some problems outside of our control which is why our first few items are a little more "serious" and a bit less optimistic than our usual updates. But don’t despair — all the good news comes in the second half!

The "bad news" section covers our CI not building certain binaries, uncertainty about our subreddit's future, and some false antivirus positives on a Pulsar dependency, but the "good news" section cleanses the palate with a new method of downloading Pulsar as well as a bunch of improvements to the application!

So with all that covered let's get on with it!

## ARM builds problem

<img src="./assets/Linux-ARM.jpg" height=200>

Some of you may have noticed that we had a bit of a problem recently in producing binaries for ARM on Linux which, whilst for the most part shouldn't have affected anyone except ARM Linux users, did have a knock on effect with some of the community maintained packages on certain package managers. Mostly this would have just been a delay in updating the package to 1.106.0.

Some of you may have noticed that we had a bit of a problem recently in producing binaries for ARM on Linux which, for the most part shouldn't have affected anyone except ARM Linux users, had a knock-on effect with some of the community-maintained packages. Some of these packages (and associated package managers) may have seen a delay receiving an update to 1.106.0.

This wasn't anything to do with our code or builds but was instead a failure of the CI machine used to produce those builds failing to properly connect to various services.

This has now been resolved, so if you were waiting for an ARM binary you can now download it on our [downloads](https://pulsar-edit.dev/download.html) page as normal. Community maintained packages should now all be up-to-date as well.

## Subreddit closure/reopening and possible Lemmy community

<img src="./assets/reddit-private.png" height=200><img src="./assets/lemmy-icon.png" height=200>[^1]

You may or may not be aware that we decided to [close our subreddit](https://www.reddit.com/r/pulsaredit/comments/146ja5a/rpulsaredit_is_taking_part_in_the_reddit_blackout/) as part of the protest against the Reddit API changes. The subreddit remained closed after the original 48 hours for various reasons.

We recently decided to [re-open the subreddit](https://www.reddit.com/r/pulsaredit/comments/14ktr3q/rpulsaredit_is_reopening_read_on_for_our/) for a number of reasons, some because we don't want to abandon a portion of our community entirely and partly because of threats from Reddit themselves.

The reason I bring this up here is because it is already possible that some people who were using Reddit for Pulsar news have now left it and won't have seen the above post. This post also contains a poll to get feedback from the affected community to see what our next steps would be. Should we close the subreddit and abandon it? Should we open a Lemmy community instead? Should we do both?

So if you are interested in using either Reddit or Lemmy, please have a look at the above post and vote in the poll.

## Antivirus `es5-ext` issue

<img src="./assets/malware.png" height=200>

Some users have been reporting that various antivirus applications and virus scanning tools have been identifying Pulsar as a virus due to the `es5-ext` package.

This is is nothing to worry about — Pulsar is not a virus, nor do we use dependencies that are.

After some investigation, we discovered that somewhere in our dependency tree (i.e., a package dependency of a package we use) exists this `es5-ext` package. Early last year, this package was updated to display a "message of peace" to Russians (in reference to the ongoing conflict). This message displays to anyone within a Russian time zone, and, whilst the "payload" of a simple message is harmless, the act of targeting based on time zone has caused this package to be flagged by various scanners. Unfortunately the package author does not seem to want to remove it.

So we have been working on a way to get around this. [@confused-techie] has managed to [pin this to an earlier version](https://github.com/pulsar-edit/pulsar/pull/608) using our own fork of this package.

In our experiments, binaries built in this manner are no longer being flagged by any notable antivirus program. Hopefully this gives our users peace of mind.

## Pulsar available on deb-get

<img src="./assets/deb-get-logo.png" height=200>[^2]

We want to put Pulsar on all major package managers, but it can be trickier than it looks. Various package managers have special requirements and restrictions, so it behoves us to move slowly and make sure we understand those constraints.

That said: Pulsar is now officially supported on [deb-get](https://github.com/wimpysworld/deb-get), a package manager for Debian (and Debian based distributions such as Ubuntu). Amongst package managers, `deb-get` is straightforward for us to support; all it does is grab a pre-built `.deb` binary from our GitHub releases and install it as any other `.deb`. You can see exactly _how_ straightforward by looking at [the script that grabs the latest version of Pulsar](https://github.com/wimpysworld/deb-get/blob/main/01-main/packages/pulsar).

It's simple from the user's perspective, too. Once you have installed `deb-get`, all you have to do to install Pulsar is:

- `deb-get install pulsar`

To update Pulsar (and other `deb-get` packages, all you need to do is:

- `deb-get update`
- `deb-get upgrade`

So if you are on a Debian based distro and want a quick and easy way to install and update Pulsar, give it a try!

## Tree-sitter migration of TOML grammar

<img src="./assets/toml.png" height=200>[^3]

In our [last regular release](https://pulsar-edit.dev/blog/20230616-Daeraxa-v1.106.0.html), we made a big deal about our modern Tree-sitter migration and the new grammars that come with it.

This work is still very much ongoing and we have new grammars being migrated all the time. Our latest is the [TOML Tree-sitter grammar](https://github.com/pulsar-edit/pulsar/pull/617) that [@savetheclocktower] has added. It's got all the benefits of a Tree-sitter grammar: more consistent highlighting, better performance, and support for features that can't be delivered with a TextMate-style grammar.

You can try this out in our [rolling release](https://pulsar-edit.dev/download.html#rolling-release) or wait until the next regular one. Either way you will need to tick the `Use Modern Tree-Sitter Implementation` option in your `Core` settings in order to enable it.

As ever we are after feedback, so if you use this new TOML Tree-sitter grammar (or any other for that matter) and have any issues or see any inconsistencies compared to the existing grammar then please let us know on [Discord](https://discord.gg/7aEbB9dGRT) or [file an issue](https://github.com/pulsar-edit/pulsar/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).

## `less-cache` package update

<img src="./assets/less.png" height=200>[^4]

This is still in the works but [@confused-techie] has been making some updates to be added in the near future that bumps the version of `less-cache` that we are using.

`less-cache` is a module that handles turning all Pulsar's (and our community's) packages written in [less](https://lesscss.org/) into valid CSS, as well as ensuring each one is able to import the values from Pulsar that it cares about. For the past three years `less-cache` has been using `less@3.12.2` which, while fine, has been missing out on some of the big new changes in less after version 4 was released.
So [this PR](https://github.com/pulsar-edit/pulsar/pull/611) bumps it to `less-cache@2.0.0` in order to bump the version of `less` to 4.1.3 which brings along these exciting new features but also introduces breaking changes to existing `less` stylesheets. The biggest of which being:

- Parentheses required for mixin calls (`.some-mixin()` instead of `.some-mixin`)
- Parens-division now required around math expressions that use division

See [less.js v4.0.0 change log](https://github.com/less/less.js/releases/tag/v4.0.0) for more info.

The latter item has more impact: because `/` is used in newer CSS features like grids, parentheses are needed when doing division to remove ambiguity about the function of `/` on a particular line. Lots of usages in Pulsar core needed to be updated as a result of this, so it's quite possible that third-party packages are affected as well.

We're brainstorming ways that we can detect these usages and minimise the impact on these packages, but if you've got a community package that you're maintaining that uses `less` stylesheets, please take a moment to see if it's affected. At times, an error may be shown informing the user that the stylesheet failed to be compiled; in other cases, it won't be reported and instead can result in a broken UI.

The upside of this upgrade is that we can take advantage of new `less` features and keep our implementation up to date.

---

And just like that, we are done with yet another month's updates. As ever, if you want to get more involved in the community, please join in on our various [social channels](https://pulsar-edit.dev/community.html). Hope to see you again this time next month!

[@maurício szabo]: https://github.com/mauricioszabo
[@confused-techie]: https://github.com/confused-Techie
[@digitalone1]: https://github.com/Digitalone1
[@spiker985]: https://github.com/spiker985
[@meadowsys]: https://github.com/Meadowsys
[@kaosine]: https://github.com/kaosine
[@savetheclocktower]: https://github.com/savetheclocktower
[@deedeeg]: https://github.com/DeeDeeG
[@htmltim]: https://www.youtube.com/@htmltim
[@bacadra]: https://github.com/bacadra

[^1]: Image from [https://github.com/LemmyNet/lemmy-ui](https://github.com/LemmyNet/lemmy-ui) - Copyright LemmyNet
[^2]: Image from [https://github.com/wimpysworld/deb-get](https://github.com/wimpysworld/deb-get) - Copyright (c) 2022 Wimpy's World
[^3]: Image from [https://github.com/toml-lang/toml](https://github.com/toml-lang/toml) - Copyright (c) Tom Preston-Werner
[^4]: Image from [https://github.com/less/less.github.io](https://github.com/less/less.github.io) - Copyright (c) 2013 Alexis Sellier, Less.js, contributors.
