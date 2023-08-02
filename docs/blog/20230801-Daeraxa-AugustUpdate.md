---
title: Community Update
author: Daeraxa
date: 2023-08-01
category:
  - news
  - log
tag:
  - update
---

How many roads must a man walk down? Not a clue, but what I do know is that this is the one and only Pulsar Community Update!

# Welcome to the August Community Update

As always, a big, warm welcome to this month's update! This time around we have some interesting new features, some of which have been in the works for a while, so it is great to be able to report on their state as they will soon be making their way to a Pulsar near you! These updates include news on a new "pulsar-updater" package designed to help you keep up to date with our latest releases, a big new feature for one of our core packages for working with Markdown documents and bringing some of our dependencies up to date so you no longer have to keep around old toolchains.

So lets get on with it!

## Update to markdown-preview language identifiers

<img src="./assets/markdown.png" height=200>

[@confused-techie] has been working on a significant update to the way the `markdown-preview` package handles the highlighting of code inside code fences. The `markdown-preview` package is a package included with Pulsar that allows you to render Markdown documents directly within Pulsar without the need for any external tools. One of its features is the fact that it is able to perform syntax highlighting of code within "code fences" or "code blocks". That is, if you include a small snippet of javascript or shell script into your document, `markdown-preview` can provide the same level of syntax highlighting to your snippet in the preview pane as in the main editor.

This is done by providing a "language identifier" to the codeblock in order to signal to Pulsar what language you want it to highlight. For example, if you wanted to embed some javascript in a document, you would need to start the code fence like this:

````
```javascript
````

or 

````
```js
````

The issue was that this list of identifiers had not been updated for a long time, and people used to other tools and applications with this same functionality (for example, within GitHub and various static site generators) were finding that identifiers they commonly used were not being correctly identified.

This change adds some significant improvements to this system, not content with *only* updating the existing list of languages to match GitHub's [Liguist](https://github.com/github-linguist/linguist/blob/master/lib/linguist/languages.yml) libary but massively extending the system to allow users to tailor the behaviour to suit their own needs. In addition to the "Linguist" (GitHub) mode, it adds in lists for other tools such as "Chroma" (Codeberg, Gitea, Hugo), "Rouge" (GitLab, Jekyll) and "HighlightJS" (Markdown-IT). In many cases, these will be identical and users can leave it on the existing default mode (Liguist). However, for those who rely on Pulsar and the `markdown-preview` package to correctly display code as it will be used on the platform of their choice, this allows them to not have to modify the identifier between their editor and their production files.

As if that wasn't enough, it also features a new feature that allows you to freely add and customise your own options in order to include non-default languages and to override your own options by way of a new setting within the package:  `Custom Syntax Highlighting Language Identifiers`. For example, if I wanted to have [PON](https://web.pulsar-edit.dev/packages/language-pon) support or wanted to add `j` as an identifier for "javascript", I could add the following to that setting: `pon: source.pon, j: source.js`. 

You can try out this feature right now in our [rolling release](https://pulsar-edit.dev/download.html#rolling-release) or you can wait until our next [regular release](https://pulsar-edit.dev/download.html#regular-releases).

## Moving PPM to our own NPM fork

<img src="./assets/fork.png" height=200>

One issue we have had crop up again and again that has frustrated contributors and users alike is that Pulsar was using some older versions of some tools, particularly [node-gyp](https://github.com/nodejs/node-gyp/tree/main) (a tool for compiling native modules for Node.js), which had some very particular requirements for development tooling on the machine. For example, it was very particular about which version of the Visual Studio tools would work and which versions of Python could be used (i.e. not the latest releases).

This is a problem for Pulsar because `node-gyp` is used by NPM which is used as part of our [PPM](https://github.com/pulsar-edit/ppm) (Pulsar Package Manager) tool for installing Pulsar packages. Pulsar does not use a system NPM installation but instead has its own version bundled with the application.

So [@DeeDeeG] has done some work to [migrate to our own fork of NPM](https://github.com/pulsar-edit/ppm/pull/79) which changes our `node-gyp` dependency from the old 5.11 to the much newer 9.4.0 which should mean that Pulsar will soon properly support modern compiler toolchains and drop support for old, unsupported ones.

## pulsar-updater package in the works

<img src="./assets/info.png" height=200>

A comment that we see come up somewhat regularly from both our team and community members alike is how Pulsar should deal with updates. Atom has an auto-update module that (at least on Windows and macOS) would allow you to update Atom from within the application. Unfortunately, these existing auto-update methods are either incompatible or unfeasible to implement within Pulsar (for example, the requirement that we would need to pay large amounts of money to sign our binaries). We also support (and plan to support) a much larger set of distribution methods than Atom - various Linux, Windows and macOS package managers as well as our "standard" binary releases, which means accounting for all of these different methods.

So a first step towards a solution here is a new core package developed by [@confused-techie] called [pulsar-updater](https://github.com/pulsar-edit/pulsar/pull/656) which is designed to inform the user not only when a new version has been released but also how to install it based on what install method is detected on the system. For example, it might prompt you to visit the Pulsar website to download a new binary, or it can provide a command for your terminal to run.

The notifications generated by this package can be dismissed entirely or until the next launch in order to be as minimally intrusive as possible.

This feature is still something in the works so isn't available just yet, but you can be sure we will provide more details and an announcement once it is out in the wild.

## Pulsar Package Repository feature detection is now live!

<img src="./assets/detective.png" height=200><img src="./assets/package.png" height=200>

A couple of months ago we announced that a [new feature was coming to our package backend](https://pulsar-edit.dev/blog/20230601-Daeraxa-JuneUpdate.html#community-package-feature-detection). The linked post goes into far more detail, but in a nutshell this is a feature that adds "feature detection" to our backend, allowing users and developers to have a much more cohesive experience when trying to install or develop new Pulsar packages that rely on features from other community packages.

We don't currently have any implementations of this feature in Pulsar itself just yet, but we do have plans for it. For example, we could provide automatic detection of a community grammar for a language not installed on the system. This could easily be extended to all kinds of other features provided by community packages.

## Community spotlight

<img src="./assets/spotlight.png" height=200>

As we always say (because it is absolutely true), this project would be nothing if it weren't for our wonderful community members, and we want to make sure we provide proper attribution when people directly contribute to Pulsar, not only through our release notes but on our social channels as well. So in light of that, a big thank you to [@arite](https://github.com/arite), [@cat-master21](https://github.com/cat-master21), [@2colors](https://github.com/2colours) and [@GuilleW](https://github.com/GuilleW) who have made contributions to the project which we have recently included.

---

And just like that, we are done with yet another month's updates. As ever, if you want to get more involved in the community, please join in on our various [social channels](https://pulsar-edit.dev/community.html). Hope to see you again this time next month!

[@maurício szabo]: https://github.com/mauricioszabo
[@confused-techie]: https://github.com/confused-Techie
[@spiker985]: https://github.com/spiker985
[@meadowsys]: https://github.com/Meadowsys
[@kaosine]: https://github.com/kaosine
[@savetheclocktower]: https://github.com/savetheclocktower
[@deedeeg]: https://github.com/DeeDeeG
