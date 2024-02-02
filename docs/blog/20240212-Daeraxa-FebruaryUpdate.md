---
title: Community Update
author: Daeraxa
date: 2024-02-01
category:
  - news
  - log
tag:
  - update
---

Here it comes sashaying into your feeds, it's the _Fab_-ruary community update!

<!-- more -->

# Welcome to the February Community Update!

Last month was our biggest update to Pulsar we have had in quite a while, so in this blog we will be addressing some of the issues people have seen and what you can expect in terms of fixes and updates. Outside of that, we have some big changes to the Pulsar Package Registry backend that give (and document) a bunch of new filters and endpoints to the API, as well as a reminder for [@maurício szabo]'s blog post detailing our biggest hurdle: the road to modern versions of Electron.

## Update on the new Tree-sitter implementation

<img src="./assets/tree-sitter.png" height="150" />[^1]

With the release of Pulsar 1.113 we finally went live with our new Tree-sitter implementation, which had been in the works for a long time. We had tested this as much as we were able to with the resources we had, and we made sure that any issues raised by people enabling the new feature were dealt with. However, with it being enabled by default, we suddenly had significantly more people using this feature, and thus issues we hadn't yet seen were being found.

[@savetheclocktower] was quick in starting a number of ["Mega-issues"](https://github.com/pulsar-edit/pulsar/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+MEGA-ISSUE+label%3Abug) on GitHub for those languages where issues had been found in order to keep things in one place and make sure we didn't get swamped with duplicate issues.

The vast majority of these issues have now already been addressed (or are in process), so if you are seeing any oddities or problems, then you can download one of our [rolling releases](https://pulsar-edit.dev/download.html#rolling-release) which will already have those merged changes included. Otherwise, they will be present in the release version of Pulsar 1.114.

If any of these changes are truly breaking for you and you are not in a position to upgrade to a rolling release, you can find instructions on how to do this for that particular language in the relevant [Mega-issue](https://github.com/pulsar-edit/pulsar/issues/875). Make sure to subscribe to that issue so that you are notified when it has been fixed and the configuration can be removed. The benefits of the new system are substantial, and we would hate for you to miss out on them.

Thank you to all those who have submitted issues or let us know about problems via our [community areas](https://pulsar-edit.dev/community.html), your help has been much appreciated. If you encounter any new problems, please check the Mega-issues and check if your issue has already been addressed. If not, then feel free to add a new post to that issue.

## New blog post about our quest for Electron stable

<img src="./assets/electron.png" height="150" />[^2]

If you haven't seen it already, [@maurício szabo] has written a great new blog post on our next biggest goal for Pulsar: getting it onto a current and stable version of Electron. There are a number of challenges (the recent Tree-sitter update included) that need to be met in order to reach this, and the post explains it all.

Read it now on the [Pulsar blog](https://pulsar-edit.dev/blog/20240124-mauricioszabo-the-quest-for-electron-lts.html)!

## New PPR filter options

<img src="./assets/package.png" height="150" />

Thanks to [@confused-techie] following on from some work via [@savetheclocktower], we now have a whole bunch of new ways to use the PPR API to filter packages. For example, you can now search for packages that provide functionality for a particular file extension, consumes/provides a service, or just search by the package owner.

Examples of this would be as follows:

- To search for all packages that provide a grammar for `.json` files - [https://web.pulsar-edit.dev/packages?**fileExtension=_json_**](https://web.pulsar-edit.dev/packages?fileExtension=json)
- To find all packages owned by [@bacadra] - [https://web.pulsar-edit.dev/packages/search?**owner=_bacadra_**](https://web.pulsar-edit.dev/packages/search?owner=bacadra)
- To find all packages that provide the `symbol.provider` service - [https://web.pulsar-edit.dev/packages?**serviceType=_provided_**&**service=_symbol.provider_**](https://web.pulsar-edit.dev/packages?serviceType=provided&service=symbol.provider)

Currently, these filters are only available via the API directly, so they do not feature within Pulsar itself or in the PPR website UI, but we are looking to add this functionality in the future to make finding the exact package you want much easier.

Now if only there was a way to find what all these different endpoints might be and how you could construct even fancier queries... well, if only there was a...

## Major update to our OpenAPI documentation for the PPR

<img src="./assets/openapi-logo.png" height="150" />[^3]

Our API documentation (found at [https://api.pulsar-edit.dev/swagger-ui/](https://api.pulsar-edit.dev/swagger-ui/)) is having a major update courtesy of work by [@confused-techie]. This update adds the significant number of endpoints and schemas that have been added since it was last updated.

Even better, to make sure we don't get into this same situation again with outdated API information, it will now automatically update when changes are made to the backend schema.

## Community Spotlight

<img src="./assets/spotlight.png" height=200>

Thank you to [@claytonrcarter] for the PR to Pulsar to [fix a breaking change](https://github.com/pulsar-edit/pulsar/pull/860) with our new Tree-sitter implementation as well as a second PR for [adding a new `-f/--force` flag](https://github.com/pulsar-edit/ppm/pull/122) to the `ppm link` command in order to aid in replacing linked packages without needing to manually remove original.

And a big collective thank you to all those users who have helped us by submitting issues and feedback about the new Tree-sitter implementation in general. We know this might have been unintentionally disruptive to some people, so thank you so much for sticking with us while we fix these issues!

---

And that brings us to the end of this community update. We have a lot of exciting plans for Pulsar this year, so make sure to keep tuning into the blog for new posts from the Pulsar team!

[@maurício szabo]: https://github.com/mauricioszabo
[@confused-techie]: https://github.com/confused-Techie
[@spiker985]: https://github.com/spiker985
[@meadowsys]: https://github.com/Meadowsys
[@kaosine]: https://github.com/kaosine
[@savetheclocktower]: https://github.com/savetheclocktower
[@deedeeg]: https://github.com/DeeDeeG
[@daeraxa]: https://github.com/Daeraxa
[@bacadra]: https://github.com/bacadra
[@claytonrcarter]: https://github.com/claytonrcarter

[^1]: Image from [https://tree-sitter.github.io/tree-sitter/](https://tree-sitter.github.io/tree-sitter/) - Copyright (c) 2018-2021 Max Brunsfeld
[^2]: Image from [https://www.electronjs.org/](https://www.electronjs.org/)
[^3]: Image from [https://www.openapis.org/](https://www.openapis.org/)
