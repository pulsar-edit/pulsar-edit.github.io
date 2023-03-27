---
title: Changes to our release strategy
author: Daeraxa
date: 2023-02-16
category:
  - news
tag:
  - releases
  - rolling
  - regular
---

We recently decided to change our release strategy to reflect what we are actually doing and address some potential inaccuracies in our existing terminology.

<!-- more -->

# Why are we changing our release strategy?

As many of you might already have noticed we have decided to make an adjustment in our release terminology and focus.
Realistically nothing has actually changed, we have just made what has become our de-facto standard our official standard.

This change was recently voted on in a poll on our [Discord server](https://discord.com/channels/992103415163396136/1073778283407224852/1073778283407224852) to change our focus from a "point release" model to a "rolling release" one.
There were a number of factors involved in this decision which had been discussed numerous times since our first release but this is the first time we had an official consensus on it.

Essentially we felt that the terminology we were using was at best, unintentionally mildly misleading and at worst, incorrect so with this change we hope to address these issues.

The previous model was as follows:

- We would provide manually tagged releases at strategic milestones from our `master` branch. These milestones were never formally decided upon so we instead went with a semi-arbitrary release date of the 15th of each month simply to get these releases updated with all of our recent fixes.
- These releases would be tagged `beta` or `latest` on our website to make it clear if it was a "stable" milestone release or a beta release candidate.
- We had a second section on our page dedicated to "Cirrus CI Binaries". These binaries are produced from our CI platform automatically on pushes to our `master` branch. The idea of these were that they could be treated as `dev`, `alpha` or `nightly` type releases which were potentially unstable but had the latest updates.

However it became clear that this wasn't what we were actually doing. What ended up happening was that our "stable" releases never got a proper milestone criteria agreed upon and quickly became out of date compared to our "Cirrus CI" releases.  
We also found that because all the fixes going into our `master` branch were so thoroughly reviewed and tested by both the Pulsar team and wider community, these ended up being _more_ stable than the "stable" releases which quickly meant that, whilst our intention was correct, the reality was either incorrect or misleading.

More than a few people commented on the use of the `beta` tag meaning it was unfinished or unstable software (even more so with the `alpha` and `dev` terms used on the Cirrus builds) so were avoiding Pulsar entirely whilst they waited for a proper, stable, release which often required us to manually explain the concepts - and those are just the vocal people we heard from so we don't even know how many people got turned off from the project entirely based on this which was never our intention.  
We also found that the very concept of the Cirrus CI binaries confused some people, particularly due to the name, so this also needed to be addressed.

So after some lengthy discussions and the aforementioned poll, we decided to address these issues by reflecting what is actually going on in practice.

So what does this mean for you? In terms of the application and releases themselves? Nothing. The biggest change is that the links and headers on our [downloads page](https://pulsar-edit.dev/download.html) have been reorganised and renamed to reflect how we want to go forward with our releases.
The sections below will go into detail on each type.

## Rolling Release

The "Rolling Release" is the new name for what we previously called "Cirrus CI Binaries" and we have promoted this to the top of our downloads page to make it more obvious as we have a (soft) preference for its use - after all this is the "hyper-hackable text editor" and this seems to fit our mission statement nicely.

This type of release has a number of benefits for everyone:

- New functionality is available shortly after the relevant PR is merged. This means no waiting for a formal release milestone to include some desired features or fixes.
- No formal release process is needed, we have a standard download link for each release binary that automatically pulls the very latest build from Cirrus CI.
- Issues can be easily tracked to a particular PR or change because each version stamp is different for each PR so we can narrow down the problem rather easily.
- Issues can be addressed quickly without the need for a formal tagged hotfix release process.

Of course there are some potential drawbacks:

- Despite our best efforts with reviews and testing it is entirely possible that things will fall through the cracks leading to a regression or issue meaning that you would need to downgrade or swap to the Regular Release until the issue gets resolved.
- Whilst we don't have automatic updates implemented yet, when we do it means that an updated version will be almost constantly shown which might be seen as a curse or blessing from your standpoint.

## Regular Releases

This is the new name for the section previously just labelled as "Releases". These have been moved down on the page but remain a valid option for those that want to use a more regular release model.  
Currently we are sticking to a release date of the 15th of every month (which initially was just a happy coincidence but we found we liked it and makes for easy organisation) but this not guaranteed and may change as needed.

This also has some benefits for some over the rolling release:

- Changes from one release to the next are more obvious as we provide an easy to read changelog that shows all the new functionality and fixes.
- It is a somewhat more known quantity to the Pulsar team and community when it comes to support. It is easier to remember generally what kind of changes got added in `v1.101.0` vs `1.101.2023021600`.
- Fewer updates made available - if you don't need to be up to date at all times then this slower release schedule may be of benefit as you won't have to download a new binary just to get a single bugfix for something that may not affect you personally - particularly relevant when we have hopefully automatic updates available in the future.
- Allows us to make consolidated announcements with the changes to keep the wider community up to date via our various social channels.

Of course there are also some potential drawbacks:

- Fixes and features available in the Rolling Releases won't be available (unless urgent) until the next release slot. This also means that some people go to the effort of logging an issue on GitHub or in Discord only to be told that it has already been fixed.
- Requires a more formal release process from the team where we have to be organized to tag and update the links which currently takes a fair amount of organization and effort from many people.
- Unintentional implications that this is a "stable" or "LTS" type release over the Rolling Release. This is not the case as we consider all of our releases to be stable unless otherwise indicated and we do not support anything other than the latest released version (both Rolling and Regular).

## What can I expect going forwards?

We don't see this strategy changing in the near future but, as prompted this change in the first place, circumstances change and if we need to change our release model again in the future then we have the flexibility to do so. Nothing is ever set in stone and you are more than welcome to comment on and discuss this change this via any of our [community areas](https://pulsar-edit.dev/community.html).

One thing that we haven't addressed yet is the concept of automated updates. These come in a few different flavours - in-app updates and package repository updates. At the moment to update you have to manually download every application binary from the website and re-install (if using a type that requires installing of course) but we hope to somewhat automate this.  
We hope to publish Pulsar to a number of software repositories which will allow the package managers to actually deal with the updates themselves. We will likely need to create two "channels" for the Rolling and Regular releases to reflect our normal process and make the whole thing unified.

For the "in-app" updates, we first need to get this functional which is currently on our radar. We have had discussions and ideas from the community as to how we could do this including "on the fly" switching between the Rolling and Regular release channels in the application itself.

Overall we think this is a positive step forward for the community, it may be a little unorthodox compared to what you may be used to from software releases but it has been working very well for us so far so we think it makes sense to finally make it official.

We hope that you enjoyed this update, we want to keep the wider community kept as updated as much as possible outside of our closer communication channels and to be as transparent as possible for our reasoning behind making such changes, especially for changes like this.

As ever, happy coding, see you among the stars!
