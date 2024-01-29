---
title: "The quest for Electron LTS"
author: mauricioszabo
date: 2024-01-24
category:
  - dev
tag:
  - modernization
  - electron
---

In the beginning, Atom appeared. It created an API to make packages, but together with this API, it also allowed authors to use web APIs together with node.js packages, modules (including "native modules" - more on that later) and, finally, a special API that was used to communicate between the "main module" and the "browser part".

That last part, eventually, split from Atom and became Electron. And for a while, the Atom development was tied to the Electron one, meaning that an update on Atom usually meant an update on Electron, and vice-versa.

Unfortunately, that wasn't the case for a long time...

## A little bit of history

The latest version of Atom was pulled because of some certificate issues; that means the _real latest_ stable version of Atom was 1.60.0.

This version of Atom used Electron 9.3.5. For comparison, at the time, Electron was at version 22, but the "master" branch of Atom (and atom-community) was at version 11.5.0.

The first thing we did was to find the greatest version that would give us some kind of benefit, but also that we could make work. Luckily for us, the only breaking change on Electron 12 was that some crash analytics changed, and considering we would not use that anymore (because we decided to remove all telemetry) we decided to bump 12.2.3 - the version we're at today.

This might not seem that much of a change, but Electron 12 gave us native macOS ARM binaries, and allowed us to use Playwright to test the editor - enabling what we called "visual tests" on our CI (the actual unit and integration tests from Atom, at the time, were not running reliably in our CI, so these visual tests allowed us to have some feedback if we broke anything).

## The quest for Electron 13

The next step was to bump to Electron 13. This...

...crashed the editor...

...really bad.

Trying to open Pulsar in Electron 13 gave us the error "The renderer process crashed". There was no stacktrace, and the [documentation linked on how to debug this error](https://www.electronjs.org/docs/latest/tutorial/application-debugging) didn't help at all. There were some hidden tutorials to enable CrashReport, then dumping the report somewhere, use a version with debug symbols or download them from GitHub. But honestly, none of this actually pointed to the actual problem, so we did the worst thing that we could think of: we patched `require` to log what was being required, and hoped for the best.

What was crashing was a library called `superstring`.

## Superstring, and Memory Manipulation

Superstring is a library that handles text manipulation. That basically translates to editing text - so, basically, _the most important_ library that we have.

This library is also a "native library" - meaning that it's written on a lower-level language (C++, in this case) and that it integrates with the Node.JS code via some bindings to the runtime. These bindings basically change all the time on Node.JS, but that's not the worst part.

The worst part is that they change even more agressively on Electron. Because in C, and C++, you manipulate memory manually, and because we're now in a "browser environment" (Electron) some changes are being pushed to avoid corrupting memory, accessing places that we're not supposed to access, and to make these libraries "play nice" in multiple contexts - meaning, one instance of the "browser" not corrupting the memory of another instance (in our case, this translates to one editor window not corrupting another). Superstring was not ready to be used in the state it was, because it _manually copied memory_ from places.

Fortunately, we found a fix - there was an experimental, and incomplete, version of Superstring that compiled to Web Assembly - that means a new format that _every browser_ should run without any problem, and that's how we ported Superstring to run newer Electron.... for a while.

## More things break

Our syntax highlighter tree-sitter also didn't work on newer Electron version - on Electron 14, it stopped working completely. So, for the time being, we disabled it, and kept trying to port things, fix stuff, etc. Fortunately, all other libraries were ready to be used in newer Electron contexts, and we just had to fix some "synchronous" calls to be "asynchronous" and that worked.

I wasn't that worried about disabling tree-sitter because, at the time, we were already trying to make a modern tree-sitter implementation, so I knew that sometime in the future, we could re-enable tree-sitter and that it would work (spoiler alert: **it DID!**).

Then I got greedy, and decided to make Pulsar work in the newest Electron at the time - Electron 23.

## Things work fine! (juuuust kidding!)

Well, if you have been following the tone of this post... of course you know what happens next, right?

Electron 21 enabled something called _V8 memory cage_. I honestly don't fully understand that that means, but what ended up happening is that _another native library_ was crashing the editor - and the name of the library is Oniguruma.

If you're not aware of what this is, it's a regular expression library. If you _also don't know_ what that is, basically is the library used in TextMate grammars to do syntax highlighting.

So, summarizing: Atom (and by definition, Pulsar) had two ways of highlighting code (coloring the keywords, functions, classes, methods, etc): one is called tree-sitter, that breaks in Electron 14, and another callled TextMate, that breaks in Electron 21...

...great.

A code editor without syntax highlighting is probably not a good idea at all; we could not disable it and basically offer no syntax highlighting library. So, I started a quest to migrate TextMate grammars to something different - and what better place to start than VSCode?

It turns out that VSCode uses a WASM version of Oniguruma - that they called [vscode-oniguruma](https://github.com/microsoft/vscode-oniguruma) - and it's MIT-licensed too, which is compatible with Pulsar's license. And luckily for us, Pulsar's highlighter (again, inherited from Atom) is on its own separate library, well-tested, called [first-mate](https://github.com/atom/first-mate). So, I did a wordplay and called the new library `second-mate` (and up to this day, I still reget not calling it `check-mate` to be honest) that uses this new WASM version. After fixing some infinite loops and other edge-cases that were not fully tested on the original project, I plugged `second-mate` in the editor, and as unreal that this might sound, it worked!

Well, kinda - [@savetheclocktower](https://github.com/savetheclocktower) found that our tests were constantly failing, and found that the reason is that the WASM version doesn't garbage collect the regexes, so it was basically re-creating them over and over again. It is an edge-case that was never going to happen in normal usage, but still it was worth a fix, and then our tests were back to normal... after, of course, we fixed some other issue with macOS on ARM processors.

## The quest is (almost) over

I know it seems hard to believe, but after all this work, we were able to bump to Electron 24, then 25, then 26, then 27, and finally, 28 (which _did break_ more stuff but luckily that was easy to fix). I'm even writing this post using an experimental build on Electron 28!

Also, thanks to the amazing work of [@bongnv](https://github.com/bongnv), we are back to a native version of Superstring (that means we won't take a performance hit from the WASM version - it was, unfortunately, really slow for big files, like the ones I had to work with more than 10,000 lines). This new version still lacks some APIs, but fortunately we don't need them - by patching the specific core packages that used these undocumented, weird APIs we were able to avoid having to implement them.

The last piece of code that we needed to fix was the `github` package, but as soon as that was fixed, it was only a matter of completely removing the old implementation of tree-sitter, activating the new one by default, and test, experiment, and do more work.

There are still things that need to be done - native packages change _a lot_ in the newer Electron, which translates to some packages simply refusing to load (and the risk of crashing or locking the editor) - for example, no terminal package works, because they all depend on `node-pty` and that is not supported (luckily, again, for us, [we have a version of x-terminal-reloaded](https://github.com/Spiker985/x-terminal-reloaded/pull/41) that works); it also breaks [Hydrogen](https://github.com/nteract/hydrogen), a _very popular package_ that uses ZeroMQ to communicate with Jupyter notebooks (that currently simply doesn't work on the newer Electron branches).

But for now, we're studying a way to offer the newer Electron branch as an additional download option in our page, so that authors can check if their packages work on this new version. And hopefully, we can get an up-to-date editor, at last!
