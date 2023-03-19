---
title: "How 'license: none' Deleted Packages"
author: confused-Techie
date: 2022-03-19
category:
  - dev
tag:
  - backend
---

How setting `license: 'none'` removed almost 100 Packages from the Pulsar Package Registry.

<!-- more -->

## Licenses

Something you're sure to have heard about if you've been around open source software for any length of time is licenses.

Licensing your software is a fantastic way to tell the world simply and easily how they can use your code. A license can specify that your code is free and available to everyone, that people can charge for your code, or even that nobody is allowed to touch it except you.

A quick refresher for anybody less familiar, some of the most popular open source licenses (as taken from [ChooseALicense.com](https://choosealicense.com/licenses/)):

- [MIT](https://choosealicense.com/licenses/mit/)

  - Allows Commercial use, Distribution, Modification, or even Private use.

- [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)

  - Allows Commercial use, Distribution, Modification, Patent use, and Private use.

- [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)
  - Allows Commercial use, Distribution, Modification, Patent use, and Private use.

A license is an agreed upon binding contract between the code author and anyone that finds themselves using it. That is if it's used properly.

## Packages on Pulsar

Now often times when a developer first begins working in the open source world licenses might be confusing, or seen as a hassle they don't want to deal with.

Maybe they don't feel like researching which one is the right one to choose, or don't want to be locked into the wrong choice.

Now for us at Pulsar we often times prefer to go with the `MIT` license, as it's one of the more permissive choices, and was what all the core developers could agree on. You can even see that listed in the [`package.json`](https://github.com/pulsar-edit/pulsar-edit.github.io/blob/main/package.json) of the code that holds this blog.

But while developers may not want to take the time to understand a license, the tools they use do their best to help them.

With NPM when you run `npm init` (to automatically make a `package.json` on your system) will automatically choose the [`ISC`](https://opensource.org/license/isc-license-txt/) as the default license.

Or even Pulsar's own `package-generator` package defaulting to the `MIT` license when setting up a package for developers.

But even then, of course, developers are able to and should modify their package's licenses to however they see fit.

## Why this matters

Now, for anyone that's read my [previous blog post](https://pulsar-edit.dev/blog/20221127-confused-Techie-SunsetMisadventureBackend.html) about initially creating the Pulsar package registry, you'll know that we had taken every single package from the original Atom package registry, and hosted it for Pulsar. Because like I say there, the package ecosystem is one of my major driving factors of using and loving Pulsar/Atom.

When this was originally done though, we had no concerns over the license of a package, at least at first.

But it wasn't long after talking to someone much more familiar with digital law, and Intellectual Property laws than anyone else on the team, we realized that re-hosting this content (even though it was just the metadata of the packages themselves, as the Pulsar Package Registry doesn't actually host the code of a package) counts as distribution, and redistribution. Which, the permission to do so is entirely governed by the package license, and the will of the author.

Now when a developer had published something to the Atom package registry it doesn't matter the license they choose. As by act of them publishing the package there, they are giving permission to Atom for distributing that content. And the same is true when a package is purposefully published to Pulsar. But because the developers of the packages we had at first had never implicitly given us their permission, all we had was the license of their package to go off of.

## How did we handle this

The night after learning of this potential break of authors licenses, me and many others on the Pulsar team began the painstaking process of verifying the license of every single package on the Pulsar package registry. Where we had to manually check the `license` field of 12,470 individual package's `package.json`.

Since luckily at this point everything was in a database I was able to filter packages by the licenses they had. But even then on the initial evaluation there was `149` unique values across every single package. Where many of these simply listed `License in LICENSE.md` which meant we couldn't only rely on the database, we would have to check the repository where this code lived to properly review the license itself.

From there we started filtering all of the licenses as we read through them, by properly written [SPDX License IDs](https://spdx.org/licenses/). Being able to outright exclude results that contained `MIT` or `mit` and variations for all the other licenses listed in the above link for anything that allowed redistribution.

Doing this was able to reduce or unique license variations to `116` licenses. But then came the time for the more obscure ones listed. For example we had a lot that simply said `GNU AGPL`, `EPL`, `GNU LGPGL`, or `Apache`. But those licenses all had multiple versions, and with no version specified we had to read through the terms of every single version to determine if any of them prohibited re-distribution, since if any single version did, then we had to remove the package.

And let me tell you, as someone unfamiliar with legalese, reading through the terms of these obscure licenses that had no easy breakdown on [tl;drLegal](https://tldrlegal.com/) it wasn't easy reading material. For example, it meant decoding lines like this from the ['Apple Public Source License 2.0'](https://opensource.apple.com/apsl/):

> Externally Deploy
> verbatim, unmodified copies of the Original Code, for commercial or
> non-commercial purposes

Although I think the most fun discovery made through trawling so many different possible licenses is discovering gems like ['WTFPL (Do What The F\*ck You Want To Public License)'](<https://tldrlegal.com/license/do-what-the-f*ck-you-want-to-public-license-(wtfpl)>).

Then finally, after 3 non-stop hours of reading the terms of more licenses than I ever knew existed, I had reached the first finish line, leaving my with 30 unique variations of licenses across many packages that were either a completely non-existent license, an invalid license, or simply a variation of "License in LICENSE.md"

Below you can see the abomination of a filter I wrote as I slowly went through all of the possible licenses.

![SQL Filter Abomination](./assets/sql-filter-abomination.png)

> And yes I'm aware that I could define an array and filter by that, but in my defense it was 1:39 AM after a few days of having my family over.

At this point there was very few unique license left. With our only entries being:

- `LicenseRef-LICENSE`
- `None`
- `[object Object]`
- `TBD`
- `none`
- `SEE LICENSE IN LICENSE`
- `NONE`
- `Commercial Shared Source`

Starting at `11:06 PM` that night, when it hit `3:17 AM` I was dead tired and left with the following results:

- 215 Package with "NONE" as a license that need to be manually checked.
- 19 Package Maintainers that need to be contacted due to invalid licenses
- 1 Package that must be removed as redistribution is against their license

Funnily enough after this most other Core developers concerns were on our `[object Object]` license. As @mauricioszabo jokingly called the 'Materialistic License'. But was the time I discovered the now depreciated [Object License](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#license) and learned we needed a way to properly decode those as well on the backend.

## The Actual Hard Part

From here, we had our list of packages to manually verify by checking the license in their GitHub repo. Which luckily I had a huge amount of help from @Daeraxa and @Sertonix in doing this.

While this was a long and arduous process, we got through it quickly, and in the end were left with 101 packages were we would have to contact the package owner to find the next best steps, since they had no valid package for us to check.

It was at this point we littered GitHub far and wide with the following issues to every repo we had to:

```
Hello, this is confused-Techie from the Pulsar Team.

Pulsar is an actively developed fork of Atom and one of our major efforts is to preserve the ecosystem of Community Packages that were previously published on Atom.io

While we want to list every single package that existed on Atom's Package Repository, we wanted to respect the license of each package within and ensure to only list packages that either the author has agreed for us to or packages that have a license that specify that redistribution is okay.

That is exactly why we are contacting you today, it seems your package <package-name> has a license that makes it hard for us to determine if we should be listing it for redistribution.

All that needs to happen for you as a package maintainer is for you to give authorization for us to list your package. Just reply to this issue either way and we will respect your wishes.

Otherwise within 3 weeks, if there is no response, we will assume the answer is no and remove your package from the Pulsar Package Registry.

And if you've missed the deadline we have and still want your package to be published, feel free to republish to Pulsar.

Thanks a ton for your time, hope you have a great day!
```

At first it was exciting to see how many package maintainers responded quickly, receiving excited and encouraging responses like:

`Hello! Thanks for visiting my package, I am fine with Pulsar listing my package for redistribution.`

`You can publish native-ui with Pulsar. Happy if somebody is still using it!`

`You can publish it if you want, but to my knowledge no one uses it any more.`

`Hi, I'm already aware of the Pulsar project and I follow your progress... if want to redistribute to Pulsar Package REgistry now - do not hesitate. Best regards, SB`

This was amazing to see, and gave us hope that we wouldn't have to remove many packages, since as you know, my biggest goal has been to ensure nothing is lost.

But, alas, when our three week self-determined timeline came to an end many issues were left unanswered. Which makes sense, when you consider some packages had not seen any updates in 8 years or more. But was still sad to see, to say the least.

But now came the time to abide by the deadline and properly respect everyone's licenses.

## Respecting A License

After quickly drafting up a script to preform a mass deletion of packages, I simply ran `npm run tool:delete array` and watched as many of the packages we worked to archive were lost.

In the end we had to remove 82 individual packages from the Pulsar package registry. All of which have of course have been documented in the [Backend Admin Actions Log](https://github.com/pulsar-edit/package-backend/blob/main/docs/reference/Admin_Actions.md).

While some of the licenses that belonged to removed packages were unique, such as the authors name, the school they attended, their email, or referring to a license file that didn't exist. The majority simply said `none` or literally didn't exist, or said `"license": ""`.

To answer one package's license of "I need one?" all I can say is that if 73 packages saying "none" had decided they did, they would still be able to provide the utility they had originally set out to.

With all of this said though, I hope to see a populous future of packages on Pulsar, and can only hope some of these removed packages get republished or reimplemented. And to all of the package maintainers that had responded to our issues, and to the wonderful team of developers with Pulsar that helped me with this project, I can't appreciate you all enough.

But as always, thanks for reading, and thanks for contributing.

confused-Techie
