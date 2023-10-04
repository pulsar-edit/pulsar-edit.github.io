---
title: Community Update
author: Daeraxa
date: 2023-10-02
category:
  - news
  - log
tag:
  - update
---

As the leaves turn brown and the days grow shorter, make sure you draw up a chair and settle in for a nice, warm, pumpkin spice edition of the Pulsar community update!

<!-- more -->

# Welcome to the October Community Update!

A warm welcome to this edition of our monthly blog post where we tell stories about what the Pulsar team and community have been up to in the world of Pulsar. This month we have a real mixed bag of things from an initial announcement of our "Pulsar Cooperative" initiative, a large code refactor of PPM, an explanation of some recent macOS signing issues and the appearance of Pulsar on Shields.io and GitHub Desktop! Enough with the prelude and let's get on with the update!

## Introducing Pulsar Cooperative!

<img src="./assets/community.png" height="200" />

One of our main reasons for trying to continue the Atom editor project (rather than moving to another editor or making one from scratch) was to preserve the huge number of community packages that had been created for Atom over the years. Unfortunately, as development slowed on Atom (and especially when the [sunset](https://github.blog/2022-06-08-sunsetting-atom/) was announced), some maintainers seem to have either archived their packages or are no longer looking to maintain them.

The problem is that some of the more popular packages are in this exact situation and we often see members of the community asking about an issue with a package, discovering the fix and implementing the fix locally, but for whatever reason the package maintainer no longer wishes to maintain that package with Pulsar in mind.

Of course, it is always possible to fork the package and take over maintenance yourself, but not everyone wants to, or may be in a position to, maintain a package. Nor does the core Pulsar team have the ability to maintain all of these community packages as well as the main Pulsar project.

So we have come up with what we hope will be a viable solution. **Pulsar Cooperative**. This is a new organization that we have set up to allow _joint ownership_ of packages. The idea is thus:

- A package repository is archived, not accepting PRs or is not publishing any updates to the PPR (Pulsar Package Repository).
- Somebody would like to use this package and is able to submit code to fix or improve the package but does not wish to take on sole responsibility for the overall maintenance of the package.
- So instead, a request is made and the package is forked to the Pulsar Cooperative organization where bug fixes and new features can be added by _any_ community member and so long as those fixes and features do not fundamentally change the package, introduce malicious code, or otherwise break functionality, they will be accepted and a new release published automatically.

We hope to introduce a place where people can cooperatively work to make the Pulsar ecosystem better without having to worry about violating the strict vision for a package and not having their fix even accepted. It is also a place where people can submit fixes and make their favourite packages functional again without necessarily having to take on full responsibility for the ongoing maintenance.

This is not a "Pulsar team" project in the sense that members of the main organization are going to be providing bug fixes or updates in response to logged issues (of course they are free too, just like any other community member). This is an entirely community-led endeavour and we hope everyone will be encouraged to get involved!

This isn't ready _just_ yet, but look out for an update right here on the blog (or any of our other community areas) once we are fully live and ready!

## Modern Tree-sitter blog posts

<img src="./assets/tree-sitter.png" height="150" />[^1]

If you hadn't already seen or read them, [@savetheclocktower] has been writing a series of blog posts that go into detail about all the work that has been going on in Pulsar to support a modern implementation of [Tree-sitter](https://tree-sitter.github.io/tree-sitter/). Parts [one](https://pulsar-edit.dev/blog/20230925-savetheclocktower-modern-tree-sitter-part-1.html) and [two](https://pulsar-edit.dev/blog/20230927-savetheclocktower-modern-tree-sitter-part-2.html) are available right now and keep an eye on the Pulsar blog for more updates!

## Converting PPM's code from callbacks to async

<img src="./assets/development.png" height="150" />

Community member [@Nemokosch/@twocolours]  has been spearheading the conversion of our [PPM codebase](https://github.com/pulsar-edit/ppm) to upgrade from the older style of callbacks to the more modern approach of promises and `async / await`. These changes will hopefully make the complex logic in the PPM codebase much more approachable and easy to maintain for those more familiar with the modern approach.

We can see the difference quite clearly here in this section that contains a _six_ level deep callback nest.

**From this:**

```js
if (((version != null ? version.length : undefined) > 0) || ((rename != null ? rename.length : undefined) > 0)) {
        let originalName;
        if (!((version != null ? version.length : undefined) > 0)) { version = 'patch'; }
        if ((rename != null ? rename.length : undefined) > 0) { originalName = pack.name; }

        this.registerPackage(pack, (error, firstTimePublishing) => {
          if (error != null) { return callback(error); }

          this.renamePackage(pack, rename, error => {
            if (error != null) { return callback(error); }

            this.versionPackage(version, (error, tag) => {
              if (error != null) { return callback(error); }

              this.pushVersion(tag, pack, error => {
                if (error != null) { return callback(error); }

                this.waitForTagToBeAvailable(pack, tag, () => {

                  if (originalName != null) {
                    rename = pack.name;
                    pack.name = originalName;
                  }
                  this.publishPackage(pack, tag, {rename},  error => {
                    if (firstTimePublishing && (error == null)) {
                      this.logFirstTimePublishMessage(pack);
                    }
                    return callback(error);
                  });
                });
              });
            });
          });
        });
```

**To this:**

```js
if ((version?.length > 0) || (rename?.length > 0)) {
        let originalName;
        if (version?.length <= 0) { version = 'patch'; }
        if (rename?.length > 0) { originalName = pack.name; }

        let firstTimePublishing;
        try {
          firstTimePublishing = await this.registerPackage(pack);
          await this.renamePackage(pack, rename);
          const tag = await this.versionPackage(version);
          await this.pushVersion(tag, pack);
        } catch (error) {
          return error;
        }

        await this.waitForTagToBeAvailable(pack, tag);
        if (originalName != null) {
          rename = pack.name;
          pack.name = originalName;
        }

        try {
          await this.publishPackage(pack, tag, {rename});
        } catch (error) {
          if (firstTimePublishing) {
            this.logFirstTimePublishMessage(pack);
          }
          return error;
        }
      } else if (tag?.length > 0) {
        let firstTimePublishing;
        try {
          firstTimePublishing = await this.registerPackage(pack);
        } catch (error) {
          return error;
        }

        try {
          await this.publishPackage(pack, tag);
        } catch (error) {
          if (firstTimePublishing) {
            this.logFirstTimePublishMessage(pack);
          }
          return error;
        }
      } else {
        return 'A version, tag, or new package name is required';
      }
    }
  }
```

**NOTE**
Higher level description needed here I think, I just don't think I understand enough to write this bit and properly do justice to it - see https://discord.com/channels/992103415163396136/1158178462926897172/1158183931099754496

From a Pulsar user's perspective you shouldn't notice anything different at all. This is all about maintenance and modernization of the codebase. We want to make Pulsar as hackable and as easy to contribute as possible and these kinds of efforts go a long way to achieving that goal.

So a big thank you again to [@Nemokosch] for working on this. You can see the progress in [this pull request](https://github.com/pulsar-edit/ppm/pull/95/)

## macOS binary signing issues

<img src="./assets/signing.png" height="200" />

We discovered an issue recently where it turned out that our macOS binaries weren't being signed by our CI process. After some investigation and [changes to the CI environment](https://github.com/pulsar-edit/pulsar/pull/743) by [@DeeDeeG], [@confused-techie] and [@Meadowsys], the binaries are now correctly signed again.

This issue would only have affected the `1.109.0` releases; the current and upcoming releases will all be signed as normal.

## Shields.io badges

<img src="./assets/shields-io.png" height="100" />

Thanks to [@confused-techie] and the team at [Shields.io](https://shields.io/), badges for Pulsar packages are now available! This means that if you make a package for Pulsar and publish it to the Pulsar Package Repository, you can now display download and stargazer stats on your README page.

Stats can be shown both for [downloads](https://shields.io/badges/pulsar-downloads) and [stargazers](https://shields.io/badges/pulsar-stargazers). Here is an example of a downloads badge for [x-terminal-reloaded](https://web.pulsar-edit.dev/packages/x-terminal-reloaded):

<img alt="Pulsar Downloads" src="https://img.shields.io/pulsar/dt/x-terminal-reloaded">

So go grab your badges now to show off your package's stats!

## Pulsar on GitHub Desktop

For those of you who use [GitHub Desktop](https://desktop.github.com/) you will now find (or will soon find) that Pulsar should be available as an option for you to select as your editor of choice!

<img src="./assets/github-desktop.png" height="500" />

Thanks to [@mdibella-dev] for adding this for the macOS version, [@confused-techie] for Windows and [@Daeraxa] for the Linux version!

## Community spotlight

<img src="./assets/spotlight.png" height="200" />

This month we want to give special attention to
[@Nemokosch/@twocolours] with their [changes to the PPM codebase](#converting-ppm-s-code-from-callbacks-to-async) already discussed on this update. We love to see these kinds of contributions to Pulsar!

---

And that wraps things up for this month. We hope you have enjoyed reading about all these changes and updates to Pulsar-related areas. As always, a huge thank you to all of our wonderful community members and a special thanks to all those who donate to the project, which makes this all possible. We hope to see you here again next month!

[@maurício szabo]: https://github.com/mauricioszabo
[@confused-techie]: https://github.com/confused-Techie
[@spiker985]: https://github.com/spiker985
[@meadowsys]: https://github.com/Meadowsys
[@kaosine]: https://github.com/kaosine
[@savetheclocktower]: https://github.com/savetheclocktower
[@deedeeg]: https://github.com/DeeDeeG
[@daeraxa]: https://github.com/Daeraxa
[@nemokosch/@twocolours]: https://github.com/twocolours
[@mdibella-dev]: https://github.com/mdibella-dev

[^1]: Image from [https://tree-sitter.github.io/tree-sitter/](https://tree-sitter.github.io/tree-sitter/) - Copyright (c) 2018-2021 Max Brunsfeld
