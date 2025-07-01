---
title: "Pulsar on modern Electron: clearing the runway for arrival"
author: savetheclocktower
date: 2025-06-30
category:
  - dev
tag:
  - modernization
---

You might’ve noticed that the releases around here have been getting sparser and sparser. We haven’t even had a release since May. Is this the dreaded death spiral?

No, it isn’t; we’ve just entered the cocoon and are preparing to emerge as a more modern and performant butterfly. And you can help us _test_ that butterfly!

<!-- more -->

We’re getting very close to releasing the biggest update to Pulsar that there’s ever been: making it run on a recent version of [Electron](https://www.electronjs.org/), the framework that allows us to write HTML and CSS and JavaScript and turn it into a desktop application. Our current version of Electron is almost four years old, so this is a major upgrade.

When it happens, we think you’ll all notice the difference; for one thing, startup speed should be _much_ faster for everyone. But for some users it might be disruptive, so we’re pre-announcing its arrival so we can set expectations and help folks understand how they might be affected. One way you can guard against this is to [download the new version and help us test it](#help-us-test-pulsarnext)!

But I’m getting ahead of myself. Let’s do this FAQ-style.

## Why haven’t there been regular monthy releases lately?

We’re all volunteers who often have to juggle other things in our lives. Pulsar always shot for a once-a-month release schedule — ideally around the 15th, but often a few days late!

In recent months, however, there simply haven’t been as many things to ship. The most recent version, 1.128.0, was [larger than usual](/blog/20250502-DeeDeeG-v1.128.0.html) — RTL text editing, new highlighting options for comments in JSON, and a couple of big performance improvements. Since then, though, there haven’t even been enough changes to the main Pulsar branch to make a new release a priority.

But why? We certainly haven’t run out of things to address.

I can’t speak for others, but I know the answer for myself: about 80% of my Pulsar-related efforts in this calendar year have been spent on the boring but important goal of Electron modernization.

## Why does Electron need to be updated?

Electron is based on [Chromium](https://www.chromium.org/Home/), the open-source flavor of Google Chrome. Chromium updates on a regular basis for all the reasons that a browser needs to update: new features, architectural improvements, performance improvements to V8 (Chromium’s JavaScript engine, and also the engine that powers Node), and security fixes.

For those reasons, it’s important for Electron to update at a similar cadence to Chromium so that it can also enjoy those features and security fixes.

Electron also bundles [Node](https://nodejs.org/), so each release includes whatever version of Node is stable at time of release. This is important because Electron isn’t very useful if it’s using a version of Node that’s too old to support the requirements of commonly used NPM packages.

## Why is Pulsar’s Electron version so far behind?

Atom literally _invented_ Electron; and, as we learned with Tree-sitter, it’s sometimes expensive to be the first implementer of a major new thing.

[We’ve written before](/blog/20240124-mauricioszabo-the-quest-for-electron-lts.html) about our goal to get Pulsar onto a modern version of Electron. We’re on version **12.2.3** right now — positively _ancient_ considering that the stable version at publish time is **36.4.0**. Version 12.2.3 dates back to November of 2021.

Atom was on an _even older_ version of Electron, and one of the early goals of the Pulsar team was to modernize the editor in all respects, including its Electron version. When it was upgraded to 12.2.3, though, that wasn’t even the newest version of Electron at the time — it was just as far as it could be upgraded without major changes to the codebase.

## What changes had to be made, and why?

One of the biggest tasks on that list — maybe as big as all the others _combined_ — was retiring the original implementation of [Tree-sitter](https://tree-sitter.github.io/tree-sitter/) and replacing it with a modern implementation using WebAssembly. (And if that’s news to you, I have a [seven-part blog post series](/blog/20230925-savetheclocktower-modern-tree-sitter-part-1.html) for your perusal!)

As for the other changes and the _why_: I’d be happy to go into detail in future blog posts, but that’s too big of a topic for this one.

## Why has it taken so long?

The changes we needed to make to Pulsar to upgrade Electron any further have loomed over us since the very beginning of Pulsar, like a list of chores that’s so long that you try to avoid even _looking_ at it.

But you don’t have to look at the whole list at once; you just have to focus on the next task. And if you keep focusing on the next task in the list and _only_ the next task, one day you’ll find yourself with a pretty short list. There used to be dozens of tasks on that list, and now there’s more like _five_. And it feels good.

Now, “slow and steady” is the moral of [_The Tortoise and the Hare_](https://en.wikipedia.org/wiki/The_Tortoise_and_the_Hare), but I’ll bet the bystanders watching that race still got pretty bored! From starting the Tree-sitter modernization project to shipping it as the default, it took almost a year of my free time.

Some of the other tasks have been individually frustrating, but nowhere near as much of a time sink. But the sheer number of them means that we’re 2.5 years into Pulsar’s public existence and only now are we on the verge of delivering this upgrade we’ve known needed to happen since the get-go.

We wish it had happened faster! But it’s happening, and once it’s done we can move onto the next thing.

## What will be different about this new version?

I’ll try to set expectations properly: it’s still going to feel like Pulsar. If you like Pulsar now, you’ll still like it after the Electron update. If there are major aspects of Pulsar you don’t like right now, I can’t imagine any of them will be _substantially_ different after the update.

Except one: the new version of Pulsar **really is quite fast to launch**, and fast to open a new project window. Testers on all platforms have offered this feedback, often without our even telling them that they could expect an improvement in load times. For an editor that has a reputation (whether earned or unearned) of being sluggish, this is a big deal for us; and if that were the only improvement, it’d be plenty on its own.

Apple Silicon users in particular will be _very_ happy to use Pulsar once the upgrade happens, as they are affected by an obscure performance bug that has been plaguing Pulsar since almost the beginning.

But also:

- Newer Electron means newer Node. Electron 12.2.3 runs Node 14; Electron 30.0.9 runs Node 20. [Node 14 has been in “end-of-life” mode for more than two years](https://nodejs.org/en/about/previous-releases#looking-for-the-latest-release-of-a-version-branch), and it’s an ongoing drag on Pulsar development _and_ community package development. If you’re a package author, you might’ve already had situations where you had to use an older version of a dependency just to get it to run correctly in Pulsar.

  I’ve felt this pain, too: [`pulsar-ide-css`](https://web.pulsar-edit.dev/packages/pulsar-ide-css) and [`pulsar-ide-json`](https://web.pulsar-edit.dev/packages/pulsar-ide-json) each run a language server in the background, but neither such server can be run in Node 14. Right now, a user has to configure each package with the path to a `node` binary on their computer so it can run the language servers in a recent version of Node.

  It’s much simpler to have Electron spawn the language server itself using its own built-in version of Node. Once we upgrade Electron, this will once again be possible, and both these packages will become much simpler to use.

- Newer Electron means newer Chromium. The web platform moves fast, and four years’ worth of improvements means things like:

  - The [`:has()` CSS pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) that lets you identify elements by whether they contain other elements.
  - [Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) will be especially nice to have in Pulsar. (For instance: certain pane items can exist either in a narrow side dock or the wide-but-short bottom dock. If they can be styled differently just based on the width of their containing element rather than the viewport, that’s a big deal.)
  - The [popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) is something we really should be investigating, too, since we use plenty of modal palettes in Pulsar. It might remove the need to do things like focus management in JavaScript and let them be handled by the browser itself.

These benefits are more immediately compelling to package authors, but users themselves will derive downstream benefits from anything that makes package development easier.

So, in short: you’ll be able to take advantage of performance improvements in Chromium and Electron, and will be able to write and use packages that rely on brand new web platform features.

And, of course, this upgrade wouldn’t be as meaningful if we planned to stay on 30.0.9 indefinitely. We’ve set that release as a fixed target for now, but future Electron upgrades will be much smoother.

## What are the downsides?

There’s only one downside that comes to mind.

Just as Pulsar itself has had to update some of its packages to have them continue to work within Pulsar, **some community packages might need to be updated** in order to be compatible with Pulsar running on newer Electron.

Hardly any packages are affected by this, because it only matters for packages that have native bindings. But those packages tend to do big, important things.

One such example is [`x-terminal-reloaded`](https://web.pulsar-edit.dev/packages/x-terminal-reloaded), the most widely-used terminal package in Pulsar. Luckily, `x-terminal-reloaded` is maintained and has a straightforward upgrade path. We’ve been working hard to make a version of `x-terminal-reloaded` that works identically in both current Pulsar and future Pulsar so that you can upgrade without hassle.

Another example is [`hydrogen`](https://web.pulsar-edit.dev/packages/hydrogen). In that case, the solution is more complicated, since `hydrogen` isn’t maintained anymore. But [@asiloisad](https://github.com/asiloisad)’s got a fork of `hydrogen` called [`hydrogen-next`](https://web.pulsar-edit.dev/packages/hydrogen-next) that uses newer libraries and ought to be a drop-in replacement.

Those are the major packages that are on our radar as needing updates. I’m sure there are others out there, and even if they’re obscure, I’d love to hear about them if they stop working. I’m quite confident we can guide you toward either a fix for the issue or a new package that does the same thing.

But, like I said, **the vast majority of packages will keep working just as they are.** I use about 60 community packages (not including the dozen or more that are under active development at any given time on my computer) and they all run equally well in new Pulsar as current Pulsar.

## When will it be ready?

I speak both truthfully and unhelpfully when I say: it’ll be ready when it’s ready. I do think it’s a matter of months, but it depends on how quickly we can get through the last few chores on the list.

## How can I speed it along?

Several ways. Let me arrange them in order of increasing likelihood:

### Be the exact thing we need right now

If you’re a unicorn that loves Pulsar, has free time to contribute, and knows a lot about C++ and Node bindings… please [reach out to us on Discord](https://discord.gg/7aEbB9dGRT)!

### Contribute according to your expertise

More seriously, even if you don’t have that specific skillset, we can always use more contributors. If you know stuff about the web platform, you’d be useful, even if you don’t have specific experience with Electron. An eagerness to learn and participate is worth far more to us.

We could also use more redundancy on the **devops** side of the project. Pulsar requires a complicated CI workflow for automated testing and automated releases — three platforms, two processor architectures, and at least two “flavors” of release on each OS. If we had at least two people who were familiar enough with the CI flows to troubleshoot any issues that may arise during release, it’d be a lot easier for us to rotate into and out of the project as time permits.

If this sounds like your cup of tea, feel free to jump into the [issue tracker](https://github.com/pulsar-edit/pulsar/issues) or the [list of open pull requests](https://github.com/pulsar-edit/pulsar/pulls)… or else [ask on Discord](https://discord.gg/7aEbB9dGRT) if you’re eager to help but not sure exactly where to start.

### Help us test PulsarNext

But we know even that’s a lot to ask. Lots of you already stare at screens all day for your jobs. But there is another option: if you’re willing to use beta software, you can help us test this new version of Pulsar.

Atom used to have a “nightly” release channel that could be installed alongside the regular version of Atom. In that spirit, we’ve got a “Pulsar on Electron 30” channel that you can install today; it’s called **PulsarNext**.

PulsarNext has been my “daily driver” for months and has been getting easier and easier to use over that time. But we need more beta testers on various platforms so that we can find and fix any remaining issues. The best way you can help us ship this new version of Pulsar is to be a diligent beta tester and file bug reports whenever you encounter bugs.

If this sounds interesting to you, keep reading!

## How do I set up PulsarNext?

1. **Download.** We’ve got rolling releases set up for PulsarNext. [Pick the appropriate release](https://github.com/pulsar-edit/pulsar-electron-next-binaries/releases) for your OS, architecture, and distribution method. But keep in mind that not every “release” has every possible version, since they’re built by different CI jobs. If you don’t see the one you need in a given release, keep looking through older releases until you find one.

2. **Run.** You can launch it from your GUI, as always. But if you launch it from the command line, keep in mind that **its executable name is not `pulsar`; it’s `pulsar-next`**. Likewise, for package tasks, instead of `ppm` you’ll want to use `ppm-next` (or `pulsar-next -p`).

3. **Configure.** For various reasons, PulsarNext does not share a configuration directory with Pulsar. But that means the two can coexist on the same system and can even be running at the same time, should you have a need to do so.

   PulsarNext’s configuration lives in a directory called `~/.pulsar-next` (on macOS and Linux) or `%USERPROFILE%\.pulsar-next` (on Windows).

   To keep packages in sync between the two installations, you’ve got a few options:

   - You can start from scratch and install packages manually.
   - You can do a one-time copy of your packages from the `packages` sub-folder of your Pulsar home folder to the same path in your PulsarNext home folder.
   - You can use a package like [sync-settings](https://web.pulsar-edit.dev/packages/sync-settings); it works just as well for this use case as it would for two copies of Pulsar running on two separate machines. Just make sure to configure them with the same Gist ID and access token.

4. **Use and/or test.** Based on feedback, your initial experience with PulsarNext will probably be wholly positive.

   If you do run into any difficulties, please tell us about them. Some examples:

   - We had to rewrite one of our modules that monitors files and directories for changes. If you observe any symptoms that imply that file-watching isn’t working, please let us know. Examples might include the tree view failing to show files after they were created by something outside of PulsarNext, or the editor itself failing to update the contents of a file (when the buffer is unmodified) after an external tool changes the file’s contents.
   - It should be rare, but if PulsarNext crashes outright, please let us know. (You’ll see a dialog titled “The editor has crashed” and options to close or reload.) On Windows and Linux, crash dumps will be generated within a special `crashdump` folder within your PulsarNext home folder. On macOS, you can find crash reports in Console.app under the “Crash Reports” sidebar heading. Please file an issue against Pulsar, attach your crash report or crash dump, and tell us what you were doing when it happened.
   - If you’re a Linux user who use a [Wayland](<https://en.wikipedia.org/wiki/Wayland_(protocol)>) display server, please let us know if your keystroke detection isn’t working as expected — especially if you use a keyboard layout other than QWERTY. We had to implement this logic from scratch for Wayland users so that it worked just as well as it does for [X](https://en.wikipedia.org/wiki/X_Window_System) users. Feedback so far has been positive, but we’d love to get more data points.

   If you encounter bugs, you can [file them as issues](https://github.com/pulsar-edit/pulsar/issues), or [drop into Discord](https://discord.gg/7aEbB9dGRT) if you want to make sure what you’re seeing isn’t intended.

## More to come

There’s a piece of advice I’ve sometimes heard: if you want to make sure you follow through with something, tell your friends you’re going to do it. It’s based on psychology; people don’t like to break commitments that they’ve made publicly.

Hence the purpose of this post isn’t just to ask for help; it’s to demonstrate a commitment to following through. We want to deliver this great upgrade as soon as we can, so we’re telling our friends about it — all of you, our loyal community of users.

As always, we’re grateful to you for your support — but especially for your patience through this long journey. Happy coding!
