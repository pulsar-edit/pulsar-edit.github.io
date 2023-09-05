---
title: Community Update
author: Daeraxa
date: 2023-09-04
category:
  - news
  - log
tag:
  - update
---

I want you to act as a Pulsar team member writing a blog post. I will provide titles of recent changes. You will elaborate on each topic and make each paragraph coherent from my ramblings. You will welcome all readers to the September Pulsar community update.

<!-- more -->

# Welcome to the September Community Update!

Welcome to this month's Pulsar community update! In store for you this month we have some massive changes to our CI process, some good news for Windows Chocolatey users, a new option for Pulsar's title bar, some improvements to our ppm `unpublish` command and work on a brand new utility to help clean up elements of a Pulsar installation.

I realise that this probably raises more questions than it answers, so read on to find out more!

## Upheaving our CI setup

<img src="./assets/moving.png" height="200" />

Ever since we started providing downloadable binaries shortly after the Pulsar project properly started, we have been using Cirrus CI as our continuous integration platform. This has worked very well for us for quite some time now, but unfortunately for us, they recently decided to change their free tier and our setup puts us well beyond that free tier and into some quite serious money. At this point we had a couple of choices: either we stick with Cirrus CI by using our donors' money, or we move to another platform. We chose the latter option as we simply could not justify nor sustain the costs.

We did a lot of searching for alternative platforms and ultimately settled on using GitHub actions for nearly everything. This isn't perfect; for example, we cannot use it for our Apple silicon (M1, M2) builds, nor for ARM Linux, for which we are still using Cirrus CI. Over the next week there was a huge amount of effort put in by a number of Pulsar team members, but particularly [@confused-techie], [@DeeDeeG] and [@Meadowsys] to get everything moved and migrated in order to keep our builds building and our rolling releases rolling.

So what does this mean for our community? Hopefully, you didn't even notice anything. The biggest effect is that Apple silicon macOS and ARM Linux binaries are produced a little less frequently (i.e.once every other day).

We have a much bigger and more detailed write-up on what went on to be published soon, as it was a particularly interesting problem (for a community project funded entirely by donations) to work around, so watch this space!

## Chocolately packages are up to date again!

<img src="./assets/chocolatey.png" height="150" />

If you use the Chocolately package manager for Windows, you may have noticed the official packages have been a few versions behind. This has now been solved and the latest versions are available once again with a lot of improvements to the process to avoid this kind of thing ever happening again. A huge thanks to [@COLAMAroro], [@spiker985] and [@confused-techie] for implementing this. We have already put up a whole blog post for this, so if you missed it, you can [read it here](https://pulsar-edit.dev/blog/20230825-Daeraxa-ChocolateyUpdate.html).

## New title bar configuration option

[@confused-techie] has recently added a [new feature](https://github.com/pulsar-edit/pulsar/pull/671) to allow some additional configuration of Pulsar's title bar data. This new settings option allows you to decide if you want the current active Pulsar tab to be prepended to the title bar or not. This can potentially aid in readability for some, particularly if you are somebody who likes to work with multiple windows.

To demonstrate, the next image shows what it currently looks like:

<img src="./assets/title-bar-tab.png" height="50" />

And what it looks like if you turn the setting off to remove the tab from the title:

<img src="./assets/title-bar-no-tab.png" height="50" />

This is currently available in our [rolling release](https://pulsar-edit.dev/download.html#rolling-release) and will be in our next regular release in a couple of weeks.

## Unpublishing packages

<img src="./assets/package.png" height=200>

There are some very good reasons to want to unpublish a package or a specific version from the Pulsar Package Repository. You may have made a mistake or simply want to deprecate an old, non-functional version. Either way, we had an issue; it just wasn't working. Thankfully, due to some great collaboration between [@asiloisad/@bacadra] and [@confused-techie], the problem was [found and patched](https://github.com/pulsar-edit/package-backend/pull/195).

However, shortly after this was fixed, we were contacted by a community member asking why they were unable to re-publish their package after a successful unpublish in order to fix a versioning mistake. Ultimately, we realised that the wording shown during the unpublishing process does not make it clear that once a package has been unpublished, we *permanently block the package name from being used ever again*. This is intentional in order to prevent any bad actors from hijacking the name of a previous package in order to hide malicious code. This also provided the opportunity for us to come up with a process to work around this in exceptional circumstances, we will now ensure that:

1. Nobody has downloaded the unpublished package.
2. There are no significant code changes between the unpublished version and the version the author wishes to re-publish.
3. The author can prove ownership of the repository.

So with the above process and an improvement to the wording in the `unpublish` command coming soon, we hope that this situation can be avoided in the future. A full writeup of what was done has been added to our [admin actions log](https://github.com/pulsar-edit/package-backend/pull/198) that details events just like this for full transparency to the community.

## Pulsar cleanup

<img src="./assets/cleaning.png" height=200>

It was brought to our attention by a community member that, upon uninstall, Pulsar was not clearing up all the directories it created during installation. Whilst this is somewhat expected for the configuration directory, there were also examples of other elements being left behind. To this end, [@confused-techie] has been putting together a new package, [pulsar-cleanup](https://github.com/pulsar-edit/pulsar-cleanup), to try and deal with these leftover elements. As `electron-builder` is largely in control of the uninstall process, some elements do get left over at the end of the process. This utility will be a stand-alone executable that can be used to fully clean up all these extra artefacts, leaving your system entirely clean of any Pulsar installation.

## Community spotlight

<img src="./assets/spotlight.png" height=200>

In our community spotlight this month, we want to say a big thank you to new first time contributor [@casswedson] for [this PR](https://github.com/pulsar-edit/pulsar/pull/678) to remove a bunch of deprecation warnings in one of our workflows.

***

And yet again that brings us to the end of another community update. We hope you enjoyed this content and that you are looking forward to seeing some of these changes coming to a Pulsar near you! As ever, it would be amiss of us to not mention our amazing community and especially our financial donors, who without this project would simply not be possible! So thank you again and see you all again this time next month!

[@confused-techie]: https://github.com/confused-Techie
[@spiker985]: https://github.com/spiker985

[@colamaroro]: https://github.com/COLAMAroro
[@asiloisad/@bacadra]: https://github.com/bacadra/
[@casswedson]: https://github.com/casswedson
