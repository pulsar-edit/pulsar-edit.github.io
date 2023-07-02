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

This month's update is a maybe a little different in tone to some of the others in that we have had to deal with some problems recently outside of our control which means our first few items are a little more "serious" and a bit less optimistic that our usual updates. That being said these have been front loaded into this update with all the good news coming in the second half, so don't despair!

This month we have to cover some of the issues such as our CI not building binaries, discussions about the future of our subreddit and some false antivirus positives on our packages but we then come back strong with a new method of downloading Pulsar and a bunch of improvements to the application!

So with all that covered lets get on with it!

## ARM builds problem

<img src="./assets/Linux-ARM.jpg" height=200>

Some of you may have noticed that we had a bit of a problem recently in producing binaries for ARM on Linux which, whilst for the most part shouldn't have affected anyone except ARM Linux users, did have a knock on effect with some of the community maintained packages on certain package managers. Mostly this would have just been a delay in updating the package to 1.106.0.

This wasn't anything to do with our code or builds but was instead a failure of the CI machine used to produce those builds failing to properly connect to various services.

This has now been resolved so if you were waiting for an ARM binary then these are fully available on our [downloads](https://pulsar-edit.dev/download.html) page as normal and for those relying on a community package or distribution then any blocker will now have been cleared.

## Subreddit closure/reopening and possible Lemmy community

<img src="./assets/reddit-private.png" height=200><img src="./assets/lemmy-icon.png" height=200>[^1]

You may or may not be aware that we decided to [close our subreddit](https://www.reddit.com/r/pulsaredit/comments/146ja5a/rpulsaredit_is_taking_part_in_the_reddit_blackout/) as part of the protest against the Reddit API changes and this remained closed for a period of time after the original 48 hours for various reasons.

We recently decided to [re-open the subreddit](https://www.reddit.com/r/pulsaredit/comments/14ktr3q/rpulsaredit_is_reopening_read_on_for_our/) for a number of reasons, some because we don't want to abandon a portion of our community entirely and partly because of threats from Reddit themselves.

The reason I bring this up here is because it is already possible that some people who were using Reddit for Pulsar news have now left it and won't have seen the above post. This post also contains a poll to get feedback from the affected community to see what our next steps would be. Should we close the subreddit and abandon it? Should we open a Lemmy community instead? Should we do both?

So if you are interested in either using Reddit or Lemmy then please have a look at the above post and vote in the poll.

## Antivirus `es5-ext` issue

<img src="./assets/malware.png" height=200>

Some users have been reporting that various antivirus applications and virus scanning tools have been identifying Pulsar as a virus due to the `es5-ext` package.

This is is nothing to worry about, Pulsar is not a virus nor do we use dependencies that are.

After some investigation we discovered that somewhere in our dependency tree (i.e. a package dependency of a package we use) exists this `es5-ext` package. At some point this package was updated to display a "message of peace" to Russians (in reference to the ongoing conflict). This message displays to anyone within the Russian timezones and, whilst the "payload" of a simple message is harmless, the act of targeting based on time-zone has caused this package to be flagged by various scanners and the package author does not seem to want to remove it.

So we have been working on a way to get around this and [@confused-techie] with the help of [@savetheclocktower] has managed to [pin this to an earlier version](https://github.com/pulsar-edit/pulsar/pull/608) using our own fork of this package.

Hopefully this should provide some peace of mind to anyone who has encountered this and with our update this should no longer cause people to worry.

## Pulsar available on deb-get

<img src="./assets/deb-get-logo.png" height=200>[^2]

So I think it is of no surprise that we want to get Pulsar on various package managers but with things developing so quickly and with us wanting to make sure we can support some of the more basic features with our current builds we have been taking this somewhat slowly.

This is really just a small announcement to say that Pulsar is officially supported on [deb-get](https://github.com/wimpysworld/deb-get) which is a package manager for Debian that is perfect for us at this point as all it really does is grab a pre-built `.deb` binary from our GitHub releases and install it as any other `.deb`. Our main reason to support this is because it doesn't need to do any setting of your environment or need any maintenance at all - it is just a small and simple script that just goes and grabs the latest version - you can see it on the [deb-get repo](https://github.com/wimpysworld/deb-get/blob/main/01-main/packages/pulsar)

However this does mean you can now easily manage it. For example, once you have installed `deb-get` all you have to do to install Pulsar is:

- `deb-get install pulsar`

To update Pulsar (and other `deb-get` packages, all you need to do is:

- `deb-get update`
- `deb-get upgrade`

So if you are on a Debian based distro and want a quick and easy way to install and update Pulsar, give it a try!

## Tree-sitter migration of TOML grammar

<img src="./assets/toml.png" height=200>[^3]

In our [last regular release](https://pulsar-edit.dev/blog/20230616-Daeraxa-v1.106.0.html) we made a big deal about our modern Tree-sitter migration and new grammars that come with it.

This work is still very much ongoing and we have new grammars being migrated all the time - our latest is the [TOML Tree-sitter grammar](https://github.com/pulsar-edit/pulsar/pull/617) that [@savetheclocktower] has added which come with all the benefits of a Tree-sitter grammar such as more consistent highlighting and scope for new features in the future.

You can try this out in our [rolling release](https://pulsar-edit.dev/download.html#rolling-release) or wait until the next regular one. Either way you will need to tick the `Use Modern Tree-Sitter Implementation` option in your `Core` settings in order to enable it.

As ever we are after feedback, so if you use this new TOML Tree-sitter grammar (or any other for that matter) and have any issues or see any inconsistencies compared to the existing grammar then please let us know on [Discord](https://discord.gg/7aEbB9dGRT) or [file an issue](https://github.com/pulsar-edit/pulsar/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).

## `less-cache` package update

<img src="./assets/less.png" height=200>[^4]

This is still in the works but [@confused-techie] has been making some updates to be added in the near future that bumps the version of `less-cache` that we are using.

`less-cache` is a module that handles turning all Pulsar's (and our community's) packages written in [less](https://lesscss.org/) into valid CSS, as well as ensuring each one is able to import the values from Pulsar that it cares about. For the past three years `less-cache` has been using `less@3.12.2` which, while fine, has been missing out on some of the big new changes in less after version 4 was released.
So [this PR](https://github.com/pulsar-edit/pulsar/pull/611) bumps it to `less-cache@2.0.0` in order to bump the version of `less` to 4.1.3 which brings along these exciting new features but also introduces breaking changes to existing `less` stylesheets. The biggest of which being:

- Parantheses required for mixin calls
- Parens-division now the default math setting

The most noticeable thing, at least within Pulsar, is that all division is required, and all calculations are recommended, to be enclosed within parentheses. Essentially meaning `less` does math less eagerly, as opposed to 3.x which is described as doing math eagerly.

So existing stylesheets in syntax themes, UI themes and community packages need to be updated to ensure that `less` properly does the math rather than handing off invalid CSS, with the math still included. At times an error may be shown informing the user the stylesheet failed to be compiled, whereas in some cases, it won't be reported and instead can result in a broken UI. Pulsar itself has already been updated, as well as all core packages, but now we have to keep a lookout for non-archived community packages that may need help with this change.

Despite these issues it does mean that we can now take advantage of the new `less` features, and be able to keep our implementation up to date, as well as being able to use any modern `less` examples and docs to create styles

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
