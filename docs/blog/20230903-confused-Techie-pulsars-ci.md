---
title: "Pulsar's CI"
author: confused-Techie
date: 2023-09-02
category:
  - dev
tag:
  - ci
---

How Pulsar's CI has recently changed.

<!-- more -->

CI, or Continuous Integration, is a rather broad term used to describe the DevOps process of continuously (oftentimes on every change) building and testing a piece of software. In Pulsar's case this means two big things:

- Testing Pulsar and all of its core packages
- Building Pulsar binaries and then running tests using those built binaries.

To better understand how drastically things have changed, let's quickly take a look how Pulsar's CI has looked up until this month since nearly the beginning of the project.

## How it was

Whenever someone made a Pull Request to Pulsar, their code changes would be run through a gauntlet of processes:

- The entirety of the Pulsar codebase would be have it's tests run on GitHub Actions.
- Every single core package (those that come with Pulsar) would also be tested via GitHub Actions.
- A Pulsar binary was built for every single platform we support, this means Windows, Linux, macOS, Apple Silicon, and ARM Linux.

The big point of interest today is the process of building the Pulsar binaries.

On August 17, 2022 [@mauricioszabo] [introduced](https://github.com/pulsar-edit/pulsar/commit/64427f41782ae4a2ab72a81762dc8f2bcb3f2f7e) and created Pulsar's integration with [CirrusCI](https://cirrus-ci.com/). Which is an overall, fantastic CI platform, that at the time had a very generous free tier. So generous in fact that every single binary built for Pulsar, since we started the project, has been built within this free tier.

As those familiar with the project know, all of our funding comes from our fantastic community, via [OpenCollective](https://opencollective.com/pulsar-edit) and [GitHub Sponsors](https://github.com/sponsors/pulsar-edit), and we aim to be very careful about how we spend the money that is donated to us. At all times ensuring that the money is used in ways that can benefit the majority of our users, and that there is no better alternative for it's purpose. That's why when Cirrus [announced](https://cirrus-ci.org/blog/2023/07/17/limiting-free-usage-of-cirrus-ci/) that they were changing their free tier to something a bit more restrictive we had to scramble and find how we can continue our pace.

## How it is, and how it got there

Now, I don't want to come across as ungrateful to the fantastic service that Cirrus offers, so when this price change was first announced, we had originally intended to figure out if we could afford these price changes reasonably.

To determine what we could afford, we first had to estimate what we would've been paying the past months of usage. [@DeeDeeG] was able to break down exactly what our costs looked like, using our previous months data.

Keeping in mind that we trigger the same amount of runs per platform, the difference here is how slow or fast any given platform is during the build process:

| Month | Windows Credits/Hours  | Linux Credits/Hours    | macOS Credits/Hours     |
| ----- | ---------------------- | ---------------------- | ----------------------- |
| May   | 66 credits / 273 hours | 72credits / 396 hours  | 490 credits / 544 hours |
| July  | 55 credits / 229 hours | 39 credits / 213 hours | 305 credits / 339 hours |

Using this data, where we consider 1 credits = $1 USD, minus the novel 50 free credits, July would've costed $349 USD. We could then realistically estimate that building Pulsar binaries would cost ~$350 USD a month.

Which when we consider that's a higher price than anything the Pulsar team spends any money on for Pulsar, it's a bit of a tough pill to swallow. But especially because Cirrus isn't the only service out there, no one on the team could justify spending our sponsors money on such a large expense. At this point, we had to determine a way to lower our usage or move off the platform.

But to move off Cirrus, we had to consider everything it currently does for us:

- Builds binaries on every Pull Request
- Builds our Regular Release Binaires
- Builds our Rolling Release Binaries (on every commit to `master`)
- Acts as a CDN for our Rolling Release Binaries (The `download` microservice redirects downloads directly to Cirrus)

At this point, with the above knowledge, we had several different solutions to jugle and consider:

- We could move to another CI platform, but Cirrus is one of the cheaper ones
- We could move most of our process to GitHub Actions
- We could move everything to non-CI services, such as cloud hosted VMs
- We could store binaires in other cloud storage services, such as GCP or Digital Ocean
- We could slim down our Cirrus usage as much as possible

But with all of these ideas, as a Do-ocracy, [attempts](https://github.com/pulsar-edit/pulsar/pull/682) began being made to switch as much as possible to GitHub Actions.

While this did solve a few of our needs from above, it didn't solve all of them, and introduced it's own issues.

The biggest one, GitHub Actions doesn't support Apple Silicon or ARM Linux. Even though Apple Silicon support is on GitHub's [Roadmap](https://github.com/orgs/github/projects/4247), it has been pushed forward over and over since June 15th, 2022. So this support wasn't something we could rely on.

In finding a solution to our platform support issue, we looked at quite a few possibilities, at a point we were even considering purchasing an Apple Silicon Mac, second hand, and using GitHub Self Hosted Runners to build there. But of course the simplest answer, would be to only build Apple Silicon on Cirrus, but we had to consider what that would actually come out to. Looking at using all 50 free credits for building only Apple Silicon binaries, would mean getting up to 833.333 minutes within Cirrus, but we had to compare those minutes into what we could acheive:

**Typical Apple Silicon task run lengths**

| Run Type          | Length in Minutes | Task runs/month |
| ----------------- | ----------------- | --------------- |
| Shortest Recorded | 14.35             | 58              |
| Average           | 17.947            | 46              |
| Median            | 17.292            | 48              |
| Longest Recorded  | 26.6              | 31              |

So we could estimate to say we could have anywhere from 31-58 macOS runs per month (including re-runs for failures), but that shooting for ~30 macOS runs per month is a safer conservative estimate.

But, all of this above doesn't account for our ARM Linux runs, that also must stay at Cirrus CI. So we had to consider, within our 50 free credits per month that would get us 8333.333 minutes of Linux builds per month (Which that is not a typo, we are able to get 10x the amount of real-world macOS minutes compared to ARM Linux):

**Typical ARM Linux task run lengths**

| Run Type          | Length in Minutes | Task runs/month |
| ----------------- | ----------------- | --------------- |
| Shortest Recorded | 28.367            | 293             |
| Median            | 30.208            | 275             |
| Average           | 32.114            | 259             |
| Longest Recorded  | 45.883            | 181             |

So while it seems we could build these platforms on Cirrus, there was temporarily a concern about if we could choose only one, to keep at our current pace, at this point we had to try and find if we should give any specific platform any priority, to which we turned to our install numbers (gathered from the logs of the `download` microservice):

**Rolling Release Download count by Platform over the past 30 days**:

| Platform      | Download Count | Download Percentage |
| ------------- | -------------- | ------------------- |
| Apple Silicon | 860            | 15.59%              |
| ARM Linux     | 109            | 1.97%               |
| Windows       | 2,370          | 42.98%              |
| Intel Mac     | 550            | 9.97%               |
| Linux         | 1,624          | 29.45%              |

With this, we could easily see that if one platform must be prioritized, the numbers say that priority should be given to Apple Silicon, even though, we knew we didn't want to play favourites with platforms.

It was at this point, we had to break down how many runs we could do for both platforms. If we assume each **build** is one Apple Silicon macOS run and one ARM Linux run:

| Credit-Cost Build Type | Credits | Builds/month |
| ---------------------- | ------- | ------------ |
| Lowest Recorded        | 1.032   | 48           |
| Median                 | 1.256   | 39           |
| Average                | 1.269   | 39           |
| Highest Recorded       | 1.766   | 28           |

With these exact numbers of our current trends, we could then assume we have an allotment of 28 builds per month for these platforms. But consdering the possible need of retries, or a build erroring out, we had settled on building Apple Silicon, and ARM Linux once every other day. Which should give us about 15 builds per month minimum. This would give us a healthy buffer zone, or any retries needed, and the ability to do another run for the regular release every month.

But even though we now knew what we needed to do, there was still a long list of things we had to change to get there, especially now considering our deadline to do so was only a few days away.

After a flurry of PR's and lots of testing, the team at Pulsar was able to accomplish all of the following in just under our 5 day limit:

- Migrated all other platforms over to GitHub Actions
- Ensure binaries are easily downloadable via GitHub Actions for testing purposes
- Configure CRON jobs within Cirrus to build these platforms every two days
- Minimize the amount of times Cirrus would run, ensuring to only run if changes were present, and disallow any other type of run that may occur
- Setup a brand new repository `pulsar-rolling-releases` to act as the CDN for every single rolling release
- Nearly completely rewrite the `download` microservice to now use this new repository to retreive the newest rolling release

All of that work has culminated in a new CI plan for Pulsar, the one that is currently in effect starting September. On every single PR to the Pulsar repo, a binary will be built for Windows, Linux, and macOS. Once that PR is merged, a new rolling release will automatically be built, again just for these three platforms, which will then be publishing as a new release to the repository [`pulsar-rolling-releases`](https://github.com/pulsar-edit/pulsar-rolling-releases). Once on this repository the `download` microservice will be able to find and return these versions to any users attempting to download a rolling release of Pulsar. Then once every two days, Cirrus will be triggered to build binaries of Apple Silicon and ARM Linux. These new binaries will also be published to `pulsar-rolling-releases`. Then whenever we plan to do a new regular release of Pulsar, once a new tag is created for this release, Cirrus will automatically be triggered to build binaires for it's two platforms. Luckily for us, all of these changes mean we have not incurred any additional cost for the Pulsar project, even though there is some talk of officially supporting Cirrus on Open Collective at a price we can properly afford.

## Summary

While this blog post may have been a little data heavy, it's been a very busy time over in Pulsar, and I hope this blog can help explain why some things have changed, and help layout what things look like for the time being. Especially here, a huge thanks goes out to everyone that helped this migration on the Pulsar team, especially a huge thanks to [@DeeDeeG] for their amazing work in not only planning this migration, but enacting it. Additionally, I'd like to give thanks to all the developers at Cirrus, who not only provide an amazing service, especially one that has made Pulsar possible, but provides the platforms needed to support our users, and has been amazing at offering support whenever needed.

[@mauricioszabo]: https://github.com/mauricioszabo
[@deedeeg]: https://github.com/DeeDeeG
