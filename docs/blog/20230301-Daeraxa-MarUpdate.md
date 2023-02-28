---
title: Community Update
author: Daeraxa
date: 2023-03-01
category:
  - news
  - log
tag:
  - update
---

What has the Pulsar team and community been up to lately? Find out here!

<!-- more -->

# Welcome to the March community update

Hi everyone, welcome to the March edition of our regular update posts about
what is going on with the project, small wins and other details you may have
missed.  
Obviously in the last month we have made some more obviously big updates such
as the [v1.102.0 release](https://pulsar-edit.dev/blog/20230215-Daeraxa-v1.102.0.html)
and the changes to our [release strategy](https://pulsar-edit.dev/blog/20220216-Daeraxa-ReleaseStrategyUpdate.html)
but this post is about the things that you might otherwise not have seen but
still deserve to be known about.

We also launched our first [community survey](https://pulsar-edit.dev/blog/20230227-Daeraxa-Survey1.html)
which, as of time of writing, is still open. If this goes well (and depending
on feedback) then will be creating more in the future such as asking about
new features, platform/use case surveys and general application feedback.

With that said - onto the updates!

## Community Spotlight - HTML Tim on YouTube

First of all I want to let everyone know about [@htmltim] on YouTube. I came
across his channel the other day and found a whole host of videos being made on
Pulsar.  
He has covered a bunch of topics in his videos such as general overview of
Pulsar, migrating from other editors, a look at a bunch of useful community
packages and advice on HTML writing & editing.  
Definitely give his [videos](https://www.youtube.com/@htmltim) or [website](http://htmltim.com/)
a look if you want to know how to get the most out of Pulsar!

## macOS Binary Signing

We finally have signed binaries on macOS thanks to [@meadowsys]. This was
mentioned as being underway last month but this has now been achieved so no
misleading messages on macOS when trying to install Pulsar.
From the v1.102.0 release onwards (and including all rolling releases) you will
no longer have to execute a terminal command to get this to run.

## Tree-sitter modernization

[@maurício szabo] is still pushing ahead to get a modern implementation of
[tree-sitter](https://tree-sitter.github.io/tree-sitter/) working on Pulsar.  
See [Maurício's blog post](https://pulsar-edit.dev/blog/20230209-mauricioszabo-tree-sitter-part-1.html)
for more info on the topic but recent wins include getting code folding working
which is no small achievement.

With the new implementation of tree-sitter, we're gaining a better understanding
of Atom's tokenizer. With this, we can simplify some of the work that
will open the door to more interesting experiments, like packages that
contribute to syntax elements, such as semantic highlighting.

## Autocomplete CSS/HTML automatic updates

It was found that two of our core packages for HTML and CSS autocompletion had
out of date or missing references. The project that was supplying the data
for these completions was no longer being maintained so a new source of data
had to be found.  
However it seems a like-for-like replacement from a reliable source is hard to
find so [@confused-techie] has been working on this to produce a reliable
replacement to get this functionality working properly again so completions
remain up to date with current standards.  
These changes will hopefully be implemented shortly and included in an
forthcoming update.

## Backend version updates

A refactoring on the Pulsar package backed for a new versioning system has been
underway by [@confused-techie] and [@digitalone1].
The update is intended to make the system more permissive for package authors,
provide easier version management and allow for the concept of release channels.  
There is also a change to add a new "VCS service system" which will allow for
publishing of channels from other systems than just GitHub so authors can
instead publish from the platform of their choice.

## Snippets package updates

[@savetheclocktower] has recently been heavily contributing to the project.
As somebody originally involved (and experienced) with the atom/snippets
package he has been adding new functionality and fixing existing issues.  
Particularly exciting updates here include the ability to map a snippet to a
command as well as introducing the concept of snippet variables to Pulsar.  
Look forward to these updates in an upcoming version of Pulsar.

## `action-pulsar-dependency` stabilization updates

[action-pulsar-dependency](https://github.com/pulsar-edit/action-pulsar-dependency)
is a GitHub action used for testing Pulsar packages. [@spiker985] has been
making some updates here to ensure Windows path registration and macOS
symlinking is working correctly.
Any GitHub CI is now able to autonomously install the most recent Pulsar rolling
release for package testing.

[@maurício szabo]: https://github.com/mauricioszabo
[@confused-techie]: https://github.com/confused-Techie
[@digitalone1]: https://github.com/Digitalone1
[@spiker985]: https://github.com/spiker985
[@meadowsys]: https://github.com/Meadowsys
[@kaosine]: https://github.com/kaosine
[@savetheclocktower]: https://github.com/savetheclocktower
[@htmltim]: https://www.youtube.com/@htmltim
