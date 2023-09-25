---
title: "Modern Tree-sitter, part 1: the new old feature"
author: savetheclocktower
date: 2023-09-25
category:
  - dev
tag:
  - modernization
  - tree-sitter
---

The last few releases of Pulsar have been bragging about a feature that arguably isn’t even new: our **experimental “modern” Tree-sitter implementation**. You might’ve read that phrase a few times now without fully understanding what it means, and an explanation is long overdue.

<!-- more -->

This is the first of a series of articles about Pulsar’s ongoing project to migrate its Tree-sitter implementation to a more modern version — the culmination of hundreds of hours of development work that started back in February of this year. It first shipped in Pulsar version 1.106 back in June as an opt-in feature, and is being improved on an ongoing basis with each new monthly release.

This is a big feature, perhaps the biggest since Pulsar was forked from Atom — and yet it’s a feature that, if we’ve done our jobs right, won’t even seem like much of a change to most users. Before we dive into the deep end, I’ll try to explain why this is a topic worthy of multiple blog posts.

## What is Tree-sitter?

[Tree-sitter](https://tree-sitter.github.io/tree-sitter/) is a code parsing system. It’s the brainchild of [Max Brunsfeld](https://github.com/maxbrunsfeld), current [Zed](https://zed.dev/) contributor and former contributor to Atom.

It’s a code parsing system that represents your code as a tree of nodes. It’s very fast on first parse — and even faster at re-parsing code after you’ve made changes, because it can reuse the output from the last parse and reprocess only the parts that have changed.

You can use its output to underpin lots of features that you’d need in a code editor:

- syntax highlighting
- code folding
- contextual awareness (for example: _is the cursor currently within a string?_)
- indentation hinting (for example: _if I press <kbd>Return</kbd> here, should the next line be indented by one level?_)
- buffer navigation (for example: _select the entire string that my cursor is in_, or _move the cursor to the nearest opening HTML tag_)
- symbol navigation (viewing an outline of your current file, or jumping to a symbol with a specific name)

A Tree-sitter parser is designed to parse code _quickly_, but not necessarily with 100% accuracy; the goal is to be accurate _enough_ for the purposes listed above.

## What is the new Tree-sitter integration replacing?

The new Tree-sitter integration — which I’ll be calling **modern Tree-sitter** throughout this series — won’t replace anything except for the _previous_ Tree-sitter integration, which I’ll be calling **legacy Tree-sitter**.

Once we decide modern Tree-sitter is stable, we’ll drop support for legacy Tree-sitter so that Pulsar can update to a newer version of Electron.

Tree-sitter will continue to exist alongside Atom’s original system for syntax highlighting: [**TextMate grammars**](https://macromates.com/manual/en/language_grammars). This grammar system is based on the one invented by [TextMate](https://macromates.com/) many years ago, and it’s still being used by editors like [Visual Studio Code](https://code.visualstudio.com/) and [Sublime Text](https://www.sublimetext.com/).

## If Tree-sitter is already in Pulsar, why write a new implementation?

Good question! Atom was, after all, the first code editor to ship with support for Tree-sitter. It was introduced in late 2017, and was made the preferred system for syntax highlighting starting with Atom 1.32 nearly a year later.

There are two major reasons why the legacy implementation needs to be replaced:

1. **Tree-sitter now has powerful features that the legacy implementation doesn’t leverage.** As is often the case, being the first to implement it meant that Atom found all of Tree-sitter’s early pain points. It was a stated goal to use TextMate-style scope names in the new Tree-sitter grammars — so as to make migration easier — but Atom had to invent its own system for mapping Tree-sitter output to scope names, and that system didn’t have the flexibility it needed to match TextMate grammars’ syntax highlighting in all cases. This revealed a need for a more robust system of describing tree nodes, and for highlighting ranges that didn’t correspond to the exact ranges of tree nodes.

   Tree-sitter eventually introduced a powerful [query language](https://tree-sitter.github.io/tree-sitter/using-parsers#pattern-matching-with-queries) that could make the job of syntax highlighting easier. But by that point, Microsoft had bought GitHub, and Atom seemed not to be a major priority anymore, so the legacy implementation was never updated to adopt this query language.

   That’s a task worth doing, but it will change how Tree-sitter grammars are written, so there’s no way to avoid the fact that backward compatibility will be broken. But this is a perfect time to make the leap, because…

2. **We need to switch to the `web-tree-sitter` bindings.** One of the goals of Pulsar is to be able to run the editor on the latest version of Electron. Unfortunately, newer Electron versions make it difficult for Pulsar to use Node modules that are not [context-aware](https://nodejs.github.io/node-addon-examples/special-topics/context-awareness/). The legacy Tree-sitter implementation uses the `node-tree-sitter` bindings, and it appears to be a tall task to adapt these bindings so that they can be used in newer Electron versions. Right now, Pulsar’s reliance on `node-tree-sitter` is preventing us from upgrading Electron to anything past our current version, 12.2.3 — which is nearly two years old.

   So we decided to migrate to the [`web-tree-sitter` bindings](https://github.com/tree-sitter/tree-sitter/tree/master/lib/binding_web). They use [WebAssembly](https://webassembly.org/) and can run safely inside a browser or an Electron application. Using WebAssembly instead of a native C++ module like `node-tree-sitter` involves a performance penalty, but we’ve found that penalty to be very small in practice. The `web-tree-sitter` bindings are robust and can do nearly everything that `node-tree-sitter` can do.

   If, someday, the `node-tree-sitter` bindings were updated to be easier to use in an Electron context, we’d be able to migrate back without any further loss of backward compatibility. But for now, `web-tree-sitter` is the way forward, and we’re pleasantly surprised at how well it does the job.

Nobody likes to break backward compatibility, but needing to switch to `web-tree-sitter` presents us with an opportunity. Tree-sitter is more stable and more robust than it was in 2017, so we’re able to replace legacy Tree-sitter with something _better_ rather than something that’s merely _equivalent_.

## Why is Tree-sitter better in general?

Here are a few reasons why Pulsar is using Tree-sitter at all, and why Pulsar is configured to prefer a Tree-sitter grammar over a TextMate grammar when both are present:

- Tree-sitter can offer far more accurate and specific syntax highlighting.
- It can give you better understanding of context. For example: it makes it much easier to write snippets that can behave differently based on the context of the cursor.
- It makes it much easier for grammar authors to describe features like code folding and indentation hinting — making Pulsar smarter and easier to work with.
- It allows for smarter code navigation — meaning a more modern and flexible way to view the important symbols in your current file.
- It offers package authors a richer system for working with source code files. The syntax tree generated by Tree-sitter can be consumed by packages and leveraged in a number of ways.

The _specific_ ways in which Tree-sitter will make your life easier will vary based on which languages you use most often, but this post series will explore a handful of examples.

## Why is this new implementation better than the old one?

An under-the-hood change like this isn’t necessarily something you’d notice. But Pulsar users may notice some of the downstream effects:

- Most notably, modern Tree-sitter is better at understanding and syntax highlighting your code than legacy Tree-sitter.
- You may notice that Pulsar is better at indenting and dedenting your code as you type, or suggesting ways to fold code blocks that weren’t possible before.
- You may notice new features being added to existing language support — for example, snippets that do different things based on context — that weren’t possible under the legacy system.

The benefits are much more direct to grammar authors:

- It gives authors a more intuitive system for describing syntax highlighting, and one which can finally match a TextMate grammar’s flexibility in how it applies scopes.
- It gives authors brand new systems for describing code folding and indentation hinting.
- Modern Tree-sitter grammars are easier to iterate on — they allow someone to make changes to a grammar in progress and see them applied instantly.

## I disabled Tree-sitter grammars at some point, and I don’t feel like I’ve missed anything. Why should I turn them back on?

TextMate grammars are still the main style of grammar in Visual Studio Code, Sublime Text, and other editors. They can’t do all the things that Tree-sitter parsers can do, and most new editors on the market have chosen to use Tree-sitter instead; but even just VSCode’s example tells us that TextMate grammars are no impediment to having a popular and feature-filled editor.

So I’ll be clear: **we have no plans to deprecate TextMate-style grammars.** They still have their place in Pulsar, and the only thing we’d achieve by deprecating them is to disrupt the editor experience of many of our users.

In the future, it will still be possible (as it is today) to turn off Tree-sitter grammars, either altogether or selectively for certain kinds of files, and fall back to a TextMate grammar for a given language (if it exists).

But **our hope is that you’ll give this new Tree-sitter system a chance**, even if you’d disabled Tree-sitter grammars in the past for any reason. We think it’s got all the upsides of the legacy Tree-sitter integration without any of the downsides.

## Can I use this new implementation now?

Yes, you can, as long as you’re on Pulsar 1.106 or greater. Open your Pulsar settings and focus the “Core” pane. Find the setting named **Use Modern Tree-Sitter Implementation** and make sure it’s checked, then make sure that the nearby setting named **Use Tree-Sitter Parsers** is also checked. Then restart Pulsar or reload your window.

If you routinely use the grammar selector and want to be able to switch between Tree-sitter grammars and TextMate grammars at will, locate the `grammar-selector` package in the “Packages” pane, then click on its <kbd>Settings</kbd> button. Uncheck the setting named **Hide Duplicate TextMate Grammars**. This will give you the ability to choose between modern Tree-sitter, legacy Tree-sitter, and TextMate grammars.

## Which Tree-sitter grammars come with Pulsar?

Currently, these grammars are built in:

- C and C++
- Clojure
- CSS
- EJS and ERB (HTML with embedded JavaScript/Ruby)
- Go
- HTML
- Java
- JavaScript
- JSON
- Markdown
- Python
- Ruby
- Rust
- Shell
- TOML
- TypeScript (and TSX)
- YAML

In addition, Pulsar ships with several specialty Tree-sitter parsers that can be injected into other grammars:

- A parser to detect URLs in text (for identifying and highlighting URLs in strings and comments)
- A parser to detect TODO-style remarks in comments so that they can be highlighted
- A parser to highlight regular expressions in various languages
- A parser for separating YAML front matter from Markdown

If you use a language that isn’t on the list above and you’re curious about what it would take to give that language a Tree-sitter grammar, you’ll get extra value out of this post series.

## The old grammar highlighted my code in a way that I liked. Now things are colored differently and it’s driving me nuts. Should I turn off Tree-sitter?

Please don’t! It’d be like amputating your finger to get rid of a hangnail.

Instead, you can use your user stylesheet to apply a few lines of overrides to your syntax theme and restore the look you’re used to. [Open a topic in our discussion forums](https://github.com/orgs/pulsar-edit/discussions) and someone can tell you exactly how to do it.

## Why should I write a Tree-sitter grammar for Pulsar?

Because it’s a much friendlier experience than writing your own TextMate grammar, provided that a Tree-sitter parser exists for the language in question.

Pulsar already has built-in Tree-sitter grammars for most common programming languages. But if you’re a consumer of something more obscure, you might find that someone’s already written a parser for it. The `nvim-treesitter` project — arguably the largest extant consumer of Tree-sitter — is responsible for the creation of [dozens of Tree-sitter parsers](https://github.com/nvim-treesitter/nvim-treesitter#supported-languages) for niche languages.

In my experience, turning a Tree-sitter parser into a full-fledged Pulsar grammar takes less than two hours.

## Why is this interesting enough to write about?

This Tree-sitter overhaul is the biggest feature to be introduced to Pulsar since it was forked from Atom, and it’s a feature that covers a lot of the surface area of the core editing experience.

Other Tree-sitter–integrated editors like [Zed](https://zed.dev/), [Nova](https://nova.app/), and [Lapce](https://lapce.dev/) are, to the best of my knowledge, [greenfield projects](https://en.wikipedia.org/wiki/Greenfield_project). They are free to invent entirely new conventions.

But we’ve got a harder job. Atom embraced most of the concepts inherent to TextMate grammars and built major editor features around them. It wouldn’t be very user-friendly if we introduced a parallel system with a different set of concepts — it would force users to be aware of _which kind_ of language grammar they’re using, and to juggle their mental model accordingly.

But also: most Pulsar users rely on at least a few community packages that were written for Atom and aren’t actively maintained. We have to be very careful to break backward compatibility as little as possible, and only when it’s absolutely necessary.

For these reasons, we shouldn’t just introduce brand new systems for code highlighting, contextual awareness, and the rest. Instead, we’ll do whatever we can to make the new Tree-sitter system work within — or identically to — systems that Atom originally shipped with. The Tree-sitter integration can offer enhancements beyond what TextMate grammars do — and it will! — but it’s still got to live in the world that TextMate grammars created.

So in order to pull this off — to make modern Tree-sitter grammars work within existing systems — we had to create a brand new set of _conventions_ for writing Tree-sitter grammars. In some places, there was prior art from implementations like [neovim](https://github.com/nvim-treesitter/nvim-treesitter)’s; in others we were flying blind and had to invent things from scratch.

If you’re at all interested in how we did it, stay tuned for the rest of this series.
