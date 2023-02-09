---
title: "Tales of Tree-Sitter part 1: the start of a tale"
author: Daeraxa
date: 2023-02-09
category:
  - dev
tag:
  - modernization
  - tree-sitter
---

How did I decide to start working on tree-sitter, and all preparations to
modernize it on Pulsar

<!-- more -->

# Tree-Sitter

First, what is tree-sitter? Tree-sitter is basically a library that reads the
source code and parses into an abstract syntax tree. That tree can then be used
to find indentation rules or highlight elements like local variables, symbols,
tags and everything.

So, it's an alternative for TextMate grammars, but more powerful and faster. It
also supports "incremental parsing", meaning that if you have a _huge file_ that
takes some time to highlight, when you make changes to that document you only
need to wait for a fraction of time to parse the contents.

## Current Pulsar implementation

The way that tree-sitter works right now is basically is the same way that it
was implemented in Atom a long time ago: it basically tries to match the
elements of the AST and convert that into TextMate scopes. So, supposing that it
finds, for example, a left right assignment (something like `a = 10`)- it will
basically try to convert the "left token" to a variable.

That's where the problems begin. The new versions of tree-sitter are changing
the AST in a way that Atom (or Pulsar) does not support. The second problem is
this remapping: currently, it uses some patter in CSON files, with some kind of
"CSS selector"-based metalanguage. CSON is basically a YAML version of JSON and
it only works in Atom (and now in Pulsar)...

Basically - it means that all this remapping only works on Pulsar, and have no
other editor that supports this; which, again, means that every version bump for
grammars will have to keep remapping things over and over again (considering
that all tree elements and nodes are considered "internal state" of each
grammar) which is far from ideal (and does not scale, specially considering that
we're a small team). Finally, it means that we need a huge number of tests that
are copies of Tree-Sitter and TextMate just to be sure we're doing the same job
that others are doing (again, far from ideal, specially considering that
programming languages evolve, and we need to keep track of all this evolution,
for **all languages** that Pulsar supports - a work that, basically, these
grammars are already doing, and will probably do better than us).

So, we would like to reuse what other editors use, and have the exact same
experience without having to, from time to time, revisit all these "remappings"
and that is where the queries come into action:

Modern tree-sitter uses queries, that are basically a scheme-inspired file that
basically maps AST to syntax elements (for highlighting), tags elements as local
variables (also to help highlighting) and basically is more powerfull than the
metalanguage we use currently in Pulsar.

## Modernizing the current implementation

So recently, I was surprised with some very rare free time, and decided to work
on modernizing tree-sitter on the editor. The main reason is also because, when
we upgraded Pulsar to use Electron 12, we also have to update both tree-sitter
and grammars, some of these are now not highlighting as they should. That,
combined with the fact that the version of tree-sitter we're using (the native
one, that have bindings to Node.JS) will stop working after electron 14 (that
is, two versions for now) made me try to implement a WASM-based version.

And that where the problems begin.

Basically, nobody knows exactly how a "modern implementation" of tree-sitter
looks like. I tried to talk with different plugin authors on different editor
and they all gave me different responses. Most people rewrite the queries that
come with tree-sitter, for example... questions that I asked, like for example,
if there's a pattern for tokens, were answered with "if there's a pattern nobody
actually learned that or even documented it"; also about queries, most people
answered me that "that the query result is up to interpretation" which is not
fine for my approaches...

And so, without any official guide, I decided to try to match what the
tree-sitter command-line interface does. Tree sister has a CLI that allows to
highlight files. You run with `tree-sitter highlight <name-of-file>`, basically,
and I found that it uses a new library that's basically not yet complete and
does not have bindings for the browser (WASM) or Node. So first, I tried to
analyze if it was going to be possible to expose this library to JS, but I
didn't find a way to make "incremental parsing" (a huge interesting feature of
tree-sitter where you basically inform to the highlighter _what changed_ instead
of the whole tree, and the library will only re-tokenize that specific fragment
instead).

Then, I decided to do what some every sane person would _probably not do_ -
implement everything by hand, improvising where things didn't work. Tokenize
with the CLI, and try to match the same structure in Pulsar, fixing things where
that didn't work... and that's part one.
