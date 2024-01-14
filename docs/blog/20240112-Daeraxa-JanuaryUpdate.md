---
title: Community Update
author: Daeraxa
date: 2024-01-12
category:
  - news
  - log
tag:
  - update
---

Happy new year! Welcome to the first Pulsar community update of 2024!

<!-- more -->

# Welcome to the January Community Update!

First of all, we hope everyone had a fantastic new year and here is to a new one! While the Pulsar team has been largely enjoying the holidays we still have plenty of things to update you with!

## New tree-sitter becoming default

<img src="./assets/tree-sitter.png" height="150" />[^1]

This was mentioned in the December blog post, but we have now [landed this change](https://github.com/pulsar-edit/pulsar/pull/855) in the newest rolling releases and will be coming to our regular releases in the next version. This has been available as an option for a while now but was disabled by default. You can read more info in the [previous blog post](https://pulsar-edit.dev/blog/20231212-Daeraxa-DecemberUpdate.html#tree-sitter) and about the implementation in detail in [@savetheclocktower]'s [blog post series](https://pulsar-edit.dev/tag/tree-sitter/).

## Annoying website bug found and zapped!

<img src="./assets/bugsplat.png" height="150" />

We mentioned in the [last blog post](https://pulsar-edit.dev/blog/20231212-Daeraxa-DecemberUpdate.html#ppr-website-issues) that the Pulsar Package Registry website has sporadically encountered some kind of problem causing the website to not display any data. After [@confused-techie] implemented some changes to improve our error logging, we have actually managed to find something! To top it off, [@savetheclocktower] was able to find the exact problem and solve it. If you wish to read more about the exact issue, you can read more on the [pull request](https://github.com/pulsar-edit/package-frontend/pull/127).

## New PPR `owners/:ownerName` API endpoint

<img src="./assets/package.png" height="150" />

Staying with the PPR, [@confused-techie] has implemented a [new endpoint for the API](https://github.com/pulsar-edit/package-backend/pull/216). Building off the work by [@savetheclocktower] (to make the [backend aware of package owners](https://github.com/pulsar-edit/package-backend/pull/215)) that allows you to filter packages by author, this can also be used via URL in the PPR frontend website (with UI controls still to come). For example, if you want to list all packages published by [@bacadra] (one of the Pulsar community's most prolific package authors), you can add `?owner=bacadra` to the end of the URL. e.g.https://web.pulsar-edit.dev/packages?owner=bacadra.

## Long-term projects

<img src="./assets/checklist.png" height="150" />

This community blog post was designed to highlight ongoing work and successes that are going on both within the Pulsar team and the community at large for "Pulsar-adjacent" items. That is, along with new features being developed for Pulsar, we also highlight things going on that might otherwise go unnoticed but are deserving of attention. Sometimes we may announce things, but due to other priorities, it may take a while until we get around to implementing or announcing any news. This doesn't mean we have forgotten about them, not by a long shot. So just to recap some of the things we are looking to progress in 2024 that have been previously mentioned on this blog and in our social channels:

- Migrating Pulsar to modern Electron (more in last month's [blog post](https://pulsar-edit.dev/blog/20231212-Daeraxa-DecemberUpdate.html))
- New custom website framework and website to replace our current Vuepress one
- [Pulsar-Cooperative](https://pulsar-edit.dev/blog/20231004-Daeraxa-OctoberUpdate.html#introducing-pulsar-cooperative)
- Iconography updates

## Community Spotlight

<img src="./assets/spotlight.png" height=200>

As it is the start of the new year, this spotlight should be particularly special. We have received an absolute ton of new and repeat donations, for which we couldn't be more thankful. You really do keep this project alive. We also want to thank each and every one of our community members, no matter what you do: those who make themselves known in our social channels, publish packages, contribute code, donate to the project, and those who are just content using Pulsar or reading our blog posts. This spotlight goes out to our entire community, and here is to an even better 2024!

---

So with that, we start another year. Thanks again to the entire community, no matter how you choose to get involved, and here is to another year of Pulsar!

[@maurício szabo]: https://github.com/mauricioszabo
[@confused-techie]: https://github.com/confused-Techie
[@spiker985]: https://github.com/spiker985
[@meadowsys]: https://github.com/Meadowsys
[@kaosine]: https://github.com/kaosine
[@savetheclocktower]: https://github.com/savetheclocktower
[@deedeeg]: https://github.com/DeeDeeG
[@daeraxa]: https://github.com/Daeraxa
[@bacadra]: https://github.com/bacadra/

[^1]: Image from [https://tree-sitter.github.io/tree-sitter/](https://tree-sitter.github.io/tree-sitter/) - Copyright (c) 2018-2021 Max Brunsfeld
