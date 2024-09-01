---
title: "Modern Tree-sitter, part 7: the pain points and the promise"
author: savetheclocktower
date: 2024-09-02
category:
  - dev
tag:
  - modernization
  - tree-sitter
---

I’ve spent a number of posts talking about [Tree-sitter](https://tree-sitter.github.io/tree-sitter/) as though it makes sliced bread look _mundane_. But it also drives me nuts on a regular basis. Let’s wrap up the series by talking about what makes Tree-sitter hard to work with — with an optimistic look toward the near future.

<!-- more -->

Tree-sitter is a typical open-source project: the sky’s the limit, but there’s never quite enough time and attention to go around.

I think it’s absolutely amazing what we on the Pulsar team have been able to do in such a short amount of time — especially when using the `web-tree-sitter` bindings, which appear to be nobody’s first choice. Still, there have been bumps in the road. Maybe I can point out a few of them and help out the next Tree-sitter user.

Since I _do not_ want to save any of these gripes for an _eighth_ blog post (and since you probably don’t want to _read_ an eighth blog post) this article may be a bit longer than the rest.

Don’t get me wrong: nearly all of these challenges have gotten easier in the year that I’ve been immersed in Tree-sitter. There is cause for optimism, and I’ll be sure to point out the upsides as I go.

## Tree-sitter challenges

I’ve tried to group these gripes based on how generally applicable they are. Some of them would be things _you’d_ trip over if you started using Tree-sitter tomorrow, and some might just be Pulsar-specific dilemmas. In order to keep you engaged, let’s start with the broader gripes.

### It’s nobody’s day job

[Max Brunsfeld](https://github.com/maxbrunsfeld) worked on Tree-sitter for years before it wound up in Atom. It’s no longer just his pet project — there are a small handful of folks with commit rights to the repository — but, of course, they’re volunteers, and development happens on a “when-it’s-done” schedule. There’s a rough roadmap of desired improvements, but not much of a timetable.

_Lots_ of major improvements happen _in between_ major releases. For this reason, most of Pulsar’s own Tree-sitter grammars are built from the `master` branch of their parsers, rather than from tagged releases on NPM.

Yet, despite this uncertainty, lots of projects have embraced Tree-sitter. One of them is [a commercial text editor](https://nova.app/). As we’ve mentioned, GitHub uses Tree-sitter for code navigation and highlighting on the web. Other companies are building code analysis tools around it.

So it’s not going anywhere, and enough people know how it works that it’d have a future even if Max suddenly decided to eschew modern technology and go live simply in the woods.

Still, there’s a mismatch here. It’s becoming crucial infrastructure for major projects, yet it’s nobody’s full-time job. It _could_ be somebody’s full-time job, but the creator already has [that other full-time job](https://zed.dev/), and that doesn’t seem like it’ll change any time soon.

#### And yet…

There are six official members of [the `tree-sitter` GitHub organization](https://github.com/tree-sitter), but I’d like to mention [@amaanq](https://github.com/amaanq) specifically as being an increasingly helpful and prolific contributor in the eighteen months that I’ve spent in the Tree-sitter ecosystem. Others, like [@clason](https://github.com/clason) and [@sogaiu](https://github.com/sogaiu), idle on Tree-sitter’s [ Discord](https://discord.gg/w7nTvsVJhm) and [Matrix](https://matrix.to/#/#tree-sitter-chat:matrix.org) channels and have written enormously helpful documentation.

The presence of other diligent contributors is how Tree-sitter has gotten much better over that span of time despite only sporadic participation from Max.

There’s even a roadmap these days — which would’ve been a shocking display of transparency even six months ago! Things are looking up.

### It’s ~~hard~~ ~~easy~~ hard to write parsers

I could argue both sides of this one depending on how I chose to look at it.

It’s easy to _start_ writing a Tree-sitter parser. At the beginning, you’re staring at a largely empty JavaScript file. Each individual rule seems easy to add. You keep adding new rules, then testing them, and everything works. You think this is going to be a cake-walk.

Ten minutes later, you’ve hit a wall. You’re staring at some debugging output, trying to figure out how the last rule you added somehow broke everything.

This is quite common! The learning curve of Tree-sitter is… shaped much more strangely than a curve.

Why is this true? And what can be done about it?

- First, the design: Tree-sitter is a _style_ of parser that many people will be unfamiliar with. It doesn’t backtrack and it doesn’t try to group simple nodes into higher-level constructs until _after_ it’s decided what kinds of nodes they are. This violates a lot of folks’ intuitions about how something should parse. To a certain extent, this is unavoidable, though there are a few loopholes that we’ll discuss in a moment.

- There are two important tools to help you understand the parsing process. `tree-sitter --debug` will give you exhaustive logging of each step of the parse process; and `tree-sitter -D` will go further and actually _build graphs_ to visualize chains of tokens, opening the results in a web page when the parse is done.

  These are great tools, but they output the kind of debug information that you’d want if you already knew _exactly how Tree-sitter worked_ and didn’t need any of its decisions explained. There are improvements to be made here.

- When Tree-sitter can’t solve a problem on its own, you can employ the _mother of all loopholes_: you can [write an external scanner in C](https://tree-sitter.github.io/tree-sitter/creating-parsers#external-scanners). An external scanner can do lots of things [that otherwise couldn’t be done](https://tree-sitter.github.io/tree-sitter/creating-parsers#other-external-scanner-details), because it can both keep its own state and look ahead as much as it wants.

  The power that this gives a parser author is certainly appreciated, but it tempts parser authors to define more rules externally instead of inside `grammar.js`. When I resort to external scanner logic to get me out of a jam, I always suspect that there’s a simpler way to solve the problem that I just don’t understand.

  And if you’re like me and you have no real experience in systems programming, you might be intimidated by a system that expects you to dip into C to solve some of your problems.

#### And yet…

I’ve had a draft of this blog post half-written for six months, but when I first wrote it, I would never have dreamed that I’d be such an active contributor to the Tree-sitter ecosystem by now.

Despite not feeling like I’ve got my brain totally wrapped around this whole parser thing, I’ve now written three small parsers from scratch, and am maintaining a fork of `tree-sitter-scss`. I’ve contributed bug fixes and enhancements to `tree-sitter-jsdoc`, `tree-sitter-html`, and `tree-sitter-css`.

Tree-sitter got easier once I understood that most of the crucial decisions are made during _lexing_, rather than during _parsing_. Lexing happens first; it’s the process Tree-sitter uses [to decide what the next token will be](https://tree-sitter.github.io/tree-sitter/creating-parsers#conflicting-tokens). And since there’s no backtracking, it’s often the root cause of a parsing problem. Headaches around precedence and ambiguity can usually be smoothed out in the parsing phase, but if the _lexing_ is going wrong, none of the parsing-related tools that Tree-sitter gives you will help much.

It’s true that the prospect of having to write C steepens the learning curve a bit. But the C that you’d write for an external scanner really isn’t that challenging! The vast majority of it involves `while` loops and `switch` statements and comparing characters to other characters. The most challenging problem I’ve tackled in an external scanner is keeping track of state — and there are plenty of examples of scanners that keep state that you can crib from.

Reading the source code of other Tree-sitter parsers is probably the best way to understand Tree-sitter better, and the second-best way is to idle in [the Tree-sitter Discord](https://discord.gg/w7nTvsVJhm). The Discord isn’t _incredibly_ active, but nearly all queries get answered eventually.

With help, and over time, even the most intimidating tools slowly reveal their inner workings. If I can do it, so can you.

### The `web-tree-sitter` experience is second-class

I consider `web-tree-sitter` to be one of the main success stories of [WebAssembly](https://webassembly.org/). Before WebAssembly, compiling a C-based library like Tree-sitter to run entirely in a browser would’ve involved something closer to a _ten-fold_ performance penalty. With WebAssembly, that penalty is small enough that most users won’t notice the difference between it and the `node-tree-sitter` bindings.

In fact, most of the challenges we’ve faced with `web-tree-sitter` don’t involve performance at all: they involve constraints on the web platform that don’t affect other bindings.

#### stdlib exports

We’ve talked about how a Tree-sitter grammar can use an external C scanner to do its job. This isn’t a problem for `web-tree-sitter`; [Emscripten](https://emscripten.org/) can compile those scanners to WebAssembly. But the scanner can draw on any functions it wants from the C standard library to help it with this task. This makes sense; why write a custom C function to detect if the next character is whitespace when you can just `#import <wctype.h>` and use `iswspace`?

But `web-tree-sitter` — not an individual parser — is in charge of bundling and exporting these builtins at compile time. That’s a dilemma: parsers can choose any functions they want from the C standard library, but `web-tree-sitter` has to _guess_ which functions they’ll pick. Out of the box, [it makes good guesses](https://github.com/tree-sitter/tree-sitter/blob/53cc93c267f473d82c22dbd6d4250653652d3eba/lib/src/wasm/stdlib-symbols.txt); but if a parser uses a function that’s _not_ on that list, that parser will fail at runtime when it tries to use that function and finds that it’s just not available.

If you do a thorough audit of a parser, you can make note of which builtins it’ll need. But some parsers have _quite complex_ external C scanners. And if you overlook one, you won’t find out until runtime.

Architecturally, Tree-sitter is fixing this by setting firmer rules about which functions you can and can’t use in an external scanner; that list I linked above is now a mandate. But I expect that it’ll be a while before parsers in the wild are updated to reflect this.

Hence, for now, Pulsar has got to keep track of all the external functions that are used by popular Tree-sitter parsers, and [build a custom `web-tree-sitter`](https://github.com/pulsar-edit/pulsar/blob/master/vendor/web-tree-sitter/README.md) that includes them _all_. This doesn’t make it bloated or slow, from what I can tell, but it is a chore.

And it means that, if a community package wants to contribute a Tree-sitter grammar, its author might run up against this problem and have to open a ticket with Pulsar to get us to add new functions to the exports list. We’d be happy to do so, but then the author would have to wait around for the next stable Pulsar release, and all Pulsar users would have to update to that release before they could install that package.

#### Emscripten versioning

I’m also not wild about how particular the toolchain is. Turning a parser into a WASM file involves using [a precise version of Emscripten](https://github.com/sogaiu/ts-questions/blob/master/questions/which-version-of-emscripten-should-be-used-for-the-playground/README.md) that varies based on the version of Tree-sitter that the parser uses. It’s not a huge problem, but it certainly steepens the learning curve for contributors.

It also means that we have to keep our build of `web-tree-sitter` pretty diligently up to date. My experience is that newer versions of `web-tree-sitter` can consume parsers built against earlier versions, but not _vice versa_. I’m glad to have backward compatibility, but it does make it rather urgent for us to ensure our `web-tree-sitter` is as new as possible so that community packages don’t have to build their `.wasm` files with older versions of the `tree-sitter` CLI.

#### Lack of custom predicates

Other Tree-sitter bindings have the ability to define their own query predicates. This would be quite helpful for Pulsar; it’d allow us to define predicates with more than a single argument and predicates that assert things about a specific capture instead of the whole query. Yet `web-tree-sitter` doesn’t support this yet. I’ve [opened an issue for this](https://github.com/tree-sitter/tree-sitter/issues/2904) and it’s possible I might be the one to contribute this when I get the time.

Until then, our only way of defining custom query logic is by attaching properties to the `#is?` and `#is-not?` predicates and doing our own “post-processing” step on the matches that Tree-sitter gives us.

#### And yet…

Whatever problems we’ve had with `web-tree-sitter` haven’t prevented us from shipping a bunch of solid parsers that have held up to stress-testing. (Our biggest problem so far has been with our Markdown parser, and we fixed that by migrating to another Tree-sitter Markdown parser that’s more actively maintained.)

Also, [this recent change](https://github.com/tree-sitter/tree-sitter/pull/1864) is exciting: compared to native parsers, `.wasm` files are self-contained and easy to use, so now even the native Tree-sitter bindings can consume them! The prospect of being able to use `.wasm` files in this manner means that `web-tree-sitter` concerns will also be relevant to Tree-sitter’s Rust and C bindings.

Tree-sitter has also been cracking the whip on external scanners recently; C++ external scanners have been deprecated, and (as mentioned earlier) scanner authors no longer have freedom to use anything they want from the C stdlib. Practically speaking, this isn’t a hardship; if anything, a lack of prescription from Tree-sitter was leading to sloppy choices. (For instance, some parsers wrongly use `isalpha` instead of `iswalpha` — the latter being more proper for Unicode text.)

And the feedback loop is getting shorter: you will now be warned _at compile time_ when you try to make a `.wasm` file from a parser that consumes functions that are not in the default list of exports.

### Error recovery is a black box

Tree-sitter is _not_ a fail-on-first-error sort of parser. That strategy would make it completely unsuitable for the task of syntax highlighting in an editor. Imagine adding a new style rule in the middle of a CSS file… and having everything after the cursor flicker as you type, because it’s reacting to the fact that the CSS file is invalid until you’re mostly done typing.

Invalidity in Tree-sitter is indicated with `ERROR` and/or `MISSING` nodes in the tree. Tree-sitter will parse some tokens, notice that they don’t add up to any valid rule, and [decide on the _least costly way_](https://github.com/tree-sitter/tree-sitter/issues/224#issuecomment-436731626) to get itself back to a valid state. That could mean skipping over the token that put it into an error state (producing an `ERROR` node). Or it could mean assuming the presence of a node that isn’t there (producing a `MISSING` node).

The fact that this process exists is what makes Tree-sitter good for a code editor scenario in which a document frequently flips between “valid” and “invalid.” When it works well, your syntax highlighting is only minimally affected by the invalidity.

But the fact that it’s _largely a black box_ is frustrating, especially in rare scenarios in which Tree-sitter makes a catastrophically bad choice in how to recover. The “costs” of various error recovery strategies are determined by Tree-sitter in ways that may not make much sense to an outside observer.

Here’s a very simple example from the `tree-sitter-css` parser:

```css
div {
  justif
}
```

If your cursor is at the end of `justif`, you’re probably about to type something like `y-content: space-between;`. Because of recent enhancements to CSS, the `justif` token could turn out to be one of several things… but it’s probably just a property name! And the parser should assume it’s a property name until it’s certain that it isn’t.

Yet `tree-sitter-css` doesn’t parse it this way:

```
(stylesheet [0, 0] - [3, 0]
  (rule_set [0, 0] - [2, 1]
    (selectors [0, 0] - [0, 3]
      (tag_name [0, 0] - [0, 3]))
    (block [0, 4] - [2, 1]
      (ERROR [1, 2] - [1, 6]
        (attribute_name [1, 2] - [1, 8])))))
```

Instead, it’s chosen to interpret `justif` as an attribute name. Faced with the theoretical ambiguity of whether `justif` will end up as a property name or a tag name (remember that [you can nest CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting) now!)… Tree-sitter has chosen a third option that _isn’t valid_ there.

There are various annoyances like this in the `tree-sitter-css` parser. Maybe they can be fixed without new Tree-sitter features, but to me it doesn’t seem like `tree-sitter-css` is poorly written; it’s just that CSS itself may be designed in a way that makes it especially susceptible to the downsides of Tree-sitter’s design decisions.

This is especially painful because the `autocomplete-css` package tries to inspect scope information to determine which completions to suggest at the position of the cursor. The legacy TextMate-style grammar is much better at interpreting incomplete lines than the modern Tree-sitter CSS grammar, so this isn’t just a cosmetic issue; it means that Pulsar is now worse at suggesting CSS completions. (We have tentative plans to address this by no longer using scope information as the primary driver of suggestion information, but it hasn’t gotten the necessary attention yet.)

This is something that _must_ get better if Tree-sitter wants to realize its potential. Hence there are two different requests I’d like to make as an occasional parser author:

1. Give authors [the ability to influence the error recovery process](https://github.com/tree-sitter/tree-sitter/issues/2404) by hinting at the “cost” of a missing or skipped token.
2. Allow authors to anticipate certain common invalidities and handle them by returning explicit `ERROR` and `MISSING` tokens.

Of these two requests, the first feels much more reasonable. I haven’t fleshed out how the second idea would work, or even whether it’s a good idea; it could just be a footgun.

But I know _exactly_ how I want Tree-sitter to parse the incomplete CSS above, and it’s frustrating that I can’t just _say_ so.

#### And yet…

This is a known issue and [it’s on Max’s long-term roadmap](https://github.com/tree-sitter/tree-sitter/issues/1870#issuecomment-1248659929). The optimism is more remote here because the problems with solutions that exist _only in Max’s mind_ have, well, more _bottlenecks_ than other problems.

For selfish reasons, I’m highly interested in this getting done, but if I wanted it done on my timetable I probably should have majored in computer science instead of journalism.

### You’re at the mercy of the parser author

Suppose TypeScript introduces a new syntactic construct in a minor version, and suppose you’re a diligent TypeScript user who starts using the new version on day one. Will your syntax highlighting be ready for the new feature?

In this example, you’re in luck: since the TypeScript release process is so gradual, chances are good that the `tree-sitter-typescript` parser will have been updated to support the new syntax on day one. Pulsar releases monthly, which should mean plenty of lead time for us to see the changes to `tree-sitter-typescript` and generate a new parser for the next release.

Now imagine you’re using a more obscure parser, one written by a third party rather than maintained by the `tree-sitter` GitHub organization. [SCSS](https://sass-lang.com/) is a good example: you can see that it’s got [a decent parser](https://github.com/serenadeai/tree-sitter-scss), but there are lots of valid SCSS constructs that that parser doesn’t support, and the last commit to the repo is thirty months old.

Do you know enough about Tree-sitter to fix it yourself? And if so, what do you do if the repo is dead? Do you fork it and increase the bounds of your reluctant code ownership? (This is how I “solved” the SCSS example; [my fork](https://github.com/savetheclocktower/tree-sitter-scss/) fixes most of what the original repo didn’t support, but I am not an _enthusiastic_ maintainer.)

Now suppose it isn’t obscure — just especially technically challenging. Would you be up for maintaining it? (Writing a [`tree-sitter-bash` parser](https://github.com/tree-sitter/tree-sitter-bash) strikes me as a startling act of hubris. I think even the precious few among us who consider themselves good _writers_ of shell scripts would balk at writing a tool that _tried to understand_ shell scripts.)

All of these headaches could just as easily apply to a TextMate grammar, of course. But because TextMate grammars are less ambitious, they tend to recover better from constructs they don’t understand, and they tend to be easier to fix than Tree-sitter grammars because they don’t require such deep understanding of their internals.

#### And yet…

Everything’s obscure and inscrutable until it isn’t. History teaches us that the way out of this dilemma is to get more people using and depending on Tree-sitter — something that’s already happening on its own.

Another good sign is the emergence of the [`tree-sitter-grammars` organization](https://github.com/tree-sitter-grammars/). Until recently, there were two kinds of grammars: first-party grammars that lived in the `tree-sitter` organization, and grammars that were maintained by third parties. The presence of the latter kind of grammar is promising (other people are using Tree-sitter!) but also a bit anxiety-inducing (the author could get bored or distracted at any point!), and I’ve made pull requests for several third-party grammars that languished for months. (It’s also why I maintain a `tree-sitter-scss` fork.)

Many of the most high-profile third-party Tree-sitter grammars have migrated to the `tree-sitter-grammars` organization in the last few months. It’s a small gesture, but it helps reassure me that those grammars won’t just languish if their original authors stop contributing.

## Pulsar-specific challenges

Now we’re getting into challenges that might only be _laid bare_ by Tree-sitter. A less flattering heading might have read _Corners we’ve painted ourselves into_.

### Memory needs managing

When you work with WebAssembly for the first time, it may surprise you to learn that you’ll probably need to manage your own memory.

JavaScript developers have it pretty easy when trying to prevent memory leaks: they can rely on garbage collection once an object has no more strong references to it. But WebAssembly operates outside of the engine’s standard GC process and requires _explicit_ freeing of resources. A WASM module will be allocated a certain amount of memory when loaded; the author can choose the size of that allocation and whether it can grow over time. But once the module hits its maximum allowable memory usage, _that’s it_. Any further attempts to allocate will trigger exceptions.

In `web-tree-sitter`, if I call `parse` on a buffer and get back a tree object, I am now _in charge_ of the lifecycle of that object. The memory that has been allocated to build that object cannot be reused _until_ I destroy that object. I can’t just null out a variable reference and rely on the engine to take care of it.

Tree-sitter gives us the tools we need here; every tree holds a `delete` method that will dispose of it and free the associated memory. Since trees are created and thrown away with each keystroke, this is _incredibly_ important for Pulsar to keep track of. When a tree is stale, we must explicitly dispose of it. Indentation hinting sometimes forces us to do an extra middle-of-transaction tree parse; if that happens, we have to save a reference to it until the next parsing cycle and clean it up along with the other stale trees.

And if a community package wants to hook into the Tree-sitter lifecycle to do something cool, it can’t just keep a reference to a parsed tree and assume it’ll hang around forever. If it tries, it will discover later that the tree is a useless stub of its former self because we called `delete` on it. Instead, it must first `await` until a fresh parsed tree is available — often one will be available immediately, but not always. Then it must choose between (a) processing the tree synchronously _before_ it has a chance to go stale, or (b) explicitly copying the tree via a `copy` method — in which case _it’s_ in charge of managing the life-cycle of that copy.

Tree-sitter is a major opportunity for community packages; they can query the tree just as easily as Pulsar core. But it’s also a dilemma for the Pulsar team, because it’s not clear how to expose this to package authors. They deserve to have access to parsing information, but we also don’t want a community package to break because of a breaking API change in `web-tree-sitter`.

Ultimately — whether we offer community packages direct access to the tree or mediate it via some sort of wrapper — it’s not possible to conceal these quirks from package authors. The Pulsar API has taught them to be dutiful about resource management with `Disposable` objects and `onDidDestroy` callbacks… but this is another level entirely. If you want to do anything clever with Tree-sitter in a package, please bear it in mind.

#### And yet…

Everything I just complained about is, as of very recently, [not necessarily how WebAssembly works anymore](https://developer.chrome.com/blog/wasmgc/). More implicit strategies for garbage collection are suddenly possible.

As far as I understand, we wouldn’t get this for free; we’d need `web-tree-sitter` to support it, and we’d only reap the benefits once we can move to a modern Electron version. But it’s still refreshing to envision a future in which dealing with a WASM library feels _less_ like trying to solve a Rubik’s cube while wearing rubber dishwashing gloves.

(One reason we might not want to offer direct access to `web-tree-sitter` APIs is to preserve the option of migrating back to `node-tree-sitter` in the future. But there were recent efforts to harmonize the API differences between the two bindings, so that might make life easier for our future selves.)

### Parsing performance needs managing

For the vast majority of files that a user will edit, I believe that our modern Tree-sitter system will highlight code with at least comparable performance to the equivalent TextMate grammar system. It can handle files that are thousands of lines long; I know because the file that implements most of the systems I’ve been describing is 4200 lines long, and it worked swimmingly even _before_ I applied optimizations. In my experience, it applies syntax highlighting much more quickly than a TextMate grammar does when loading a large file.

But a text editor has a way of finding all of your edge cases. Under a worst-case scenario — a gigantic file with very long lines — both systems will fall down. But Tree-sitter will fall down _sooner_. That’s because it’s still a system that, by design, must parse the _entire file_ at least once. That approach won’t scale to certain kinds of files, like log files, that a user could plausibly try to open within Pulsar.

To ensure that we don’t lock up the editor when faced with a monumental parsing task, Tree-sitter parses can go asynchronous. Right now, a parse is only allowed to run for _three milliseconds_ at a time before we pause it so that other tasks can run.

If a parse takes more than three milliseconds, it’s almost certainly the _initial_ parse that happens when a file is opened. Parsing will continue for as many three-millisecond blocks as are necessary, with long enough pauses in between to ensure the UI is still responsive. And edits (even edits to _gigantic_ files) are lightning-fast because most of the earlier work can be reused.

I think there’s still some work to be done at determining the best compromise between _job time_ (how long we let a parse run before pausing it) and _idle time_ (how long we wait in between jobs to allow other code to run). Right now, idle time is very low, and I could entertain an argument for it to be increased; but if we did that, we’d probably want to increase job time to compensate for it. Ultimately, the goal is that we allow the editor’s display layer enough time to do the work it needs to hit its usual 60 frames per second — which means we’re talking about how best to spend the _16.67 milliseconds_ we get to paint each frame.

Indentation hinting might be the biggest threat to that time budget. TextMate-style indentation hinting is cheap because it can just execute a regular expression against one line of content, but Tree-sitter indentation hinting requires a fresh syntax tree. Sometimes we have to reparse earlier than we otherwise would’ve just to deliver accurate hinting. In the most common cases, this isn’t a big deal; but some scenarios would require us to do lots of reparses in quick succession, and we’ve had to develop strategies to handle those cases. (I won’t bore you further with this; you can [read the source code](https://github.com/pulsar-edit/pulsar/blob/38c0b8837f9c2b43df2846d809ef5bbab0f46a9d/src/wasm-tree-sitter-language-mode.js#L1230-L1249) if this topic fascinates you.)

### And yet…

I believe that raw parsing speed in `web-tree-sitter` is pretty well optimized. But I also think that, over time, the performance penalty of WebAssembly in Chromium can only decrease as more and more attention is paid to it. This is one reason why I’m eager to upgrade our version of Electron and enjoy any optimizations to WASM and V8 that have landed in Chromium in the last couple of years.

And we’ve got something in our back pocket: the `node-tree-sitter` bindings have (theoretically) been updated so that they can be used in Electron apps. Migrating back to `node-tree-sitter` would surely improve parsing and querying speed. But for all its headaches, `web-tree-sitter`’s `.wasm` files really do make distribution easier. They don’t have to be built for the user’s architecture, nor rebuilt when the version of Electron changes. If we made this change, it’d have to have _large_ upside to justify the whiplash for grammar authors.

### Highlighting performance needs managing

Pulsar uses an internal library called `text-buffer`. That’s the library that handles buffer rendering. It uses pure DOM manipulation without a library and it’s _fast_. It’s one of the few things we haven’t touched at all since the fork.

But one of the biggest bottlenecks in Pulsar has to do with the fact that `text-buffer` can only apply highlighting in increments of _buffer lines_. In the worst-case scenario — a large file without any newlines — that means that every single change made to the buffer forces the _entire file_ to be re-highlighted.

In one sense, this is a small problem; 99% of files you’ll encounter in an editor have a reasonable number of characters per line. But in another sense, it’s a big problem, since Pulsar is typically thoughtful enough not to waste time trying to highlight regions of the screen you won’t even see. If a large file has no newlines, we’ve got no choice but to try to highlight the entire thing.

This bottleneck affects all grammars alike, so it’s not new information. And it’s something that we could try to fix! Speaking personally, though: I think it’d be a high-risk change. I’d want to understand `text-buffer` much better than I currently do before taking a stab at it.

In the meantime, there are already checks in place that limit syntax highlighting on very large files. But right now, the systems we have to detect those kinds of files aren’t robust enough. We disable syntax highlighting if a file exceeds a certain size, but this does nothing to address files that have extremely long lines even if the files themselves aren’t enormous.

When we know a long buffer line will give us trouble, we should default the user to a plain-text grammar and offer them the choice of opting into syntax highlighting if they’re willing to risk it — just like we do for large files today.

#### And yet…

This one is wholly within Pulsar’s control to fix; it’s just a matter of finding time — or finding more contributors.

### Query predicates and footguns

It’s a strange gap in Tree-sitter query syntax that there’s no way to test the position of an anonymous node. Because we’d need that fairly often, I had to come up with a way of applying that constraint on our own. I invented conventions for applying additional tests on captures using the `#is?` and `#is-not?` predicates.

Those first few custom predicates were simple utilities that tested straightforward things about a node and how it related to the rest of the tree.

But because custom predicates are implemented in JavaScript, they’re a powerful bridge into the rest of the Pulsar environment. And once I saw that they were quite fast in practice, I got bolder and wrote other sorts of predicates that integrated with other systems.

For instance, `test.config` — passing or failing a predicate based on the state of a Pulsar configuration value — feels weird because it talks to a different Pulsar system that has nothing to do with code parsing; yet the case for its existence is too strong to be denied. We’ve already used it in `language-javascript` and `language-typescript` to deliver indentation hinting that’s much more helpful than what we had before, but also more opinionated. So it’s crucial that they be configurable — we wouldn’t dare to make some of these decisions for users if they had no way to disable them.

Right now, Tree-sitter grammars can only use the predicates that we make available to them. Should we allow packages to write their own? Or would that be like giving them a loaded gun and pointing it at the _user’s_ foot?

Here’s an example: the CSS and PHP grammars both have `highlights.scm` files where some scope names need to execute [a _big_ regular expression](https://github.com/pulsar-edit/pulsar/blob/38c0b8837f9c2b43df2846d809ef5bbab0f46a9d/packages/language-css/grammars/tree-sitter/queries/highlights.scm#L189-L190) against the contents of a node. There are _lots_ of CSS properties and values, and there are _even more_ functions in PHP’s large and chaotic standard library. And CSS especially is a moving target, with new properties and values added every year.

Ideally, this sort of information wouldn’t live in a `highlights.scm` file. To me, if individual grammars had the ability to define their own query predicates, this would be the killer application:

1. Define a JSON file with nothing but names of functions (or properties or whatever else), optionally grouped by some criterion.
2. Have a language grammar parse that file on activation and put those functions into one or more `Set`s.
3. Allow the language grammar to define a `language-foo.isKnownFunction` predicate that does nothing but test for presence of a function name in any of these sets.

That’d probably be even quicker than a regex test. It’d keep the `highlights.scm` much sleeker. And it’d put the source of truth into a much more maintainable structure — a JSON file — which could be used for other purposes, like autocompletion suggestions.

_So what’s the problem_, you might think. Well, to give a language package the ability to do a very smart thing like this, I’d also have to give it the ability to do lots of _potentially stupid_ things. A poorly designed custom predicate could instantly become a major drag on editor performance without it even being obvious what the culprit is. When editor performance suffers, people get annoyed! They might complain to us instead of the package author — fair, because how are they supposed to know the real source of the problem?

#### And yet…

Ultimately, I think this is too powerful of a tool to justify not using it for our own language packages. And if our own language packages can use it, so can community packages — to do otherwise would be a violation of Pulsar’s ethos.

So I think the best way forward would be to define ground rules for what custom predicates can do and how long they can take to do it — even to the extent of setting time budgets and warning when they’re too slow.

## Why are you telling me this?

Other than the fact that the internet is largely for complaining, what’s the point of this airing of grievances?

I don’t want you to misunderstand. I’m now a regular Tree-sitter contributor and have just written six blog posts about how cool it is, so I’m not trying to be a buzzkill here.

**Highlighting source code is hard!** Here’s how I know:

- The most popular code editors of the past decade have highlighted your source code with [a system created 20 years ago](https://macromates.com/manual/en/language_grammars#naming_conventions) by a macOS-only editor that most people had stopped using by 2010.
- That system can only work alongside [a specific regular expression engine with ornery syntax](https://github.com/kkos/oniguruma).
- Microsoft — a huge tech company that can afford to have a team of people work on [a code editor that they distribute for free](https://code.visualstudio.com/) — decided the best way to deliver a consistent highlighting experience across that editor’s [desktop](https://code.visualstudio.com/) and [web](https://vscode.dev/) versions was to [port that obscure regular expression engine to WebAssembly](https://github.com/microsoft/vscode-oniguruma).

That’s how much editor authors _don’t_ want to write their own syntax highlighting system. If it were easy, someone would’ve done it by now!

If you’re wondering why Tree-sitter is gathering so much momentum despite being around for years and _still_ not having a 1.0 release… it’s because it’s clearly better than what we had before, warts and all.

### You still haven’t sold me

As this series illustrates, I’m excited about the handful of ways that Tree-sitter makes Pulsar a better editor. But if you feel like you’re being swept up in these grammars that you don’t care much about, I want to make sure you know that there are solutions! Tree-sitter makes grammars customizable enough to accommodate even the tiniest and most arbitrary of gripes.

Even if your nitpick is as small as “I want `this` in JavaScript to be a different color than it is”… [hop into Discord](https://discord.gg/7aEbB9dGRT) and ask for help. We’ll be able to give you the right snippet to put into your user stylesheet.

But if it’s more fundamental than that, and you just want the highlighting you were used to, then I’ll state it again for safety: **the original TextMate-style grammars aren’t going anywhere**. We’re not even _tempted_ to drop support for that system. It would break backward compatibility and make lots of our users unhappy… without delivering any meaningful progress in performance, complexity, or bundle size.

Nearly all built-in languages have a TextMate-style grammar you can fall back on. If a particular Tree-sitter grammar causes you pain for whatever reason, you can selectively revert to the TextMate grammar with a scope-specific setting in your `config.cson`:

```coffeescript
".source.css": # (or any other grammar)
  core:
    useTreeSitterParsers: false
```

You may be relying on a _legacy_ Tree-sitter grammar; and if so, I regret to tell you that that grammar _will_ be going away soon. But since legacy Tree-sitter offered a very similar set of trade-offs as modern Tree-sitter does, I’m much more confident that the modern version of that grammar will be able to meet your needs.

## You’ve reached the end of the series

If you’ve read them all, give yourself a round of applause. And if you find this subject fascinating enough to have read the whole thing, and you’re not already a Pulsar contributor, then I bet we could use your efforts somewhere. [Visit our Discord](https://discord.gg/7aEbB9dGRT) or any of the other communities listed in the menu above if you’d like to have technical discussions about stuff like this.
