---
title: "Modern Tree-sitter, part 4: indentation and code folding"
author: savetheclocktower
date: 2023-10-31
category:
  - dev
tag:
  - modernization
  - tree-sitter
---

Last time we looked at Tree-sitter’s query system and showed how it can be used [to make a syntax highlighting engine in Pulsar](/blog/20231013-savetheclocktower-modern-tree-sitter-part-3.html). But syntax highlighting is simply the most visible of the various tasks that a language package performs.

Today we’ll look at two other systems — indentation hinting and code folding — and I’ll explain how queries can be used to support each one.

<!-- more -->

## Indentation

Our programmer predecessors might scoff at how much our editors coddle us, but I’ll say it anyway: I hate it when my editor doesn’t know when to indent. In particular, C-style languages like JavaScript have predictable and simple rules about indentation, so when an editor guesses wrong, it’s like a burst of static in the middle of a song.

If I type

```js
if {
```

and press <kbd>Return</kbd>, all major code editors will indent the next line for me by one level. There’s no reason for an editor to force me to press <kbd>Tab</kbd> myself — it’s obvious from context.

And once I’m done with the conditional and type `}` on its own line, my editor should recognize that this line isn’t part of the indented block, and should decrease the indentation by one level automatically.

<video style="max-width: 100%" autoplay controls muted loop>
	<source src="@source/blog/assets/tree-sitter-simple-indentation.webm" type="video/webm">
	<source src="@source/blog/assets/tree-sitter-simple-indentation.mp4" type="video/mp4">
	<p>Your browser doesn’t support HTML video. <a href="@source/blog/assets/tree-sitter-simple-indentation.mp4">Download this video</a> instead.</p>
</video>

How does Pulsar do this now? And how can we swap in our own system for doing it with Tree-sitter?

### How TextMate grammars do it

Pulsar, like Atom before it, uses an indentation hinting system based on the system from TextMate grammars. It works a bit like this:

- **Use the previous line’s content to decide whether a new line is indented.** When a user presses <kbd>Return</kbd>, a TextMate grammar will test the line the cursor was just on against a regular expression called `increaseIndentPattern`. If there’s a match, it concludes that the next line should start with an extra level of indentation.
- **Use a line’s own content to decide when it should be dedented.** Since only certain kinds of content — like `}` or `end` — signify the end of a block, a TextMate grammar will test the current line against a regular expression called `decreaseIndentPattern` over and over as the user types. If that pattern ever matches, the current line will be dedented one level.

For JavaScript, imagine that `increaseIndentPattern` can be described as “an opening brace without a matching closing brace,” and `decreaseIndentPattern` can be described as “a closing brace that is not preceded by an opening brace.” Each pattern would probably need to match more than _just_ those situations, but that’s the most important pattern to recognize by far.

Let’s look at that screencast again to see these rules in action:

<video style="max-width: 100%" autoplay controls muted loop>
	<source src="@source/blog/assets/tree-sitter-simple-indentation.webm" type="video/webm">
	<source src="@source/blog/assets/tree-sitter-simple-indentation.mp4" type="video/mp4">
	<p>Your browser doesn’t support HTML video. <a href="@source/blog/assets/tree-sitter-simple-indentation.mp4">Download this video</a> instead.</p>
</video>

The first rule comes into play when we press <kbd>Return</kbd> at the end of line 2. A newline is inserted, and the cursor is correctly indented by one additional level.

The second rule reacts after we type a `}` on line 4: now the line’s content matches `decreaseIndentPattern`, and the line is dedented automatically.

### How legacy Tree-sitter grammars do it

The same way. No, seriously.

It was obviously meant to be temporary, but legacy Tree-sitter grammars rely on the same `increaseIndentPattern` and `decreaseIndentPattern` that TextMate grammars use. We should come up with a Tree-sitter–based system instead.

TextMate’s deep embrace of regular expressions is a double-edged sword: it makes simple things easy, but it makes complex things nearly impossible. Instead of testing lines against a single regular expression — which can quickly get unwieldy as it expands to handle all possible indentation hinting scenarios — we can use Tree-sitter’s query system to identify code features that would affect indentation.

[@mauricioszabo][] had noticed [Neovim’s prior art here](https://github.com/nvim-treesitter/nvim-treesitter/blob/v0.9.1/doc/nvim-treesitter.txt#L210), and had started to implement a similar system, so it was easy to pick up where he left off.

### Working within the system

We could’ve just adopted Neovim’s system wholesale. But I wanted a system that kept the same _decision points_ as the TextMate system for conceptual simplicity. So we’ve built a system that will abide by the contract described above…

1. To figure out whether to _indent_ a line, look at the content of the line above it.
2. To figure out whether to _dedent_ a line, look at the content of that line itself.

…except using its own logic:

1. When a user presses <kbd>Return</kbd>, instead of checking the previous line against `increaseIndentPattern`, we’ll instead run a query capture against the previous line and look at the results to figure out whether to indent the new line.
2. When a user types on the current line, instead of checking it against `decreaseIndentPattern`, we’ll run a query capture against that line with each keystroke and look for results that imply we should dedent that line relative to the line above.

Remember that Tree-sitter produces _concrete_ syntax trees; every node represents an actual buffer range. The things that are typically stripped from _abstract_ syntax trees, like punctuation, are still present in a Tree-sitter tree, and can be queried. That’s good news for us: looking at punctuation is a great way to predict how lines should be indented.

So let’s start here. Imagine this content exists in a file called `indents.scm`:

```scm
"{" @indent
"}" @dedent
```

This is maybe the simplest possible system for describing indentation in a C-style language. For some languages, like CSS, this gets us 99% of the way to a perfect indentation system. But how does it work?

If you’re following along with [`tree-sitter-tools`](https://web.pulsar-edit.dev/packages/tree-sitter-tools), you can visualize it:

1. First, [make sure you’ve enabled modern Tree-sitter](https://pulsar-edit.dev/blog/20230925-savetheclocktower-modern-tree-sitter-part-1.html#can-i-use-this-new-implementation-now).
2. Open a new document, change the grammar to CSS, and type some sample CSS.
3. Run the **Tree Sitter Tools: Open Inspector For Editor** command.
4. Toggle the “Anonymous nodes” option to **Show**.
5. Paste that code block into the appropriate text box and click on <kbd>Run Query</kbd>.

![tree-sitter-tools indentation example](./assets/tree-sitter-tools-indentation-example.png)

You can see the query matches illustrated in the text editor in real time, and you can match up the colors to the `@indent` and `@dedent` captures. You can even type new content (as in the examples below) and see the captures update in real time!

Let’s say the user is writing a CSS file, and the cursor is represented by the `|` character:

```css
body {|
```

If the user were to press <kbd>Return</kbd>, we’d run a query capture on a specific range of the buffer: from the start of row 1 to wherever the cursor was. The opening brace on row 1 would produce a single capture called `@indent`. Based on that information, we’d know that row 2 should be indented by one level.

But what if the file looked like this instead?

```css
body { font-family: 'Helvetica', sans-serif; }|
```

If the user were to press <kbd>Return</kbd>, we’d run the same query capture, and it would match twice: one `@indent` capture and one `@dedent` capture. Those captures would _cancel each other out_. We’d know that the opening brace we saw had already been balanced by a later closing brace, and we’d know that row 2 _should not_ increase its indentation level.

Now let’s look at one more example:

```css
body {
  font-family: 'Helvetica', sans-serif;
  |
```

After typing one property-value pair and pressing <kbd>Return</kbd>, we’re on row 3. Should this line be dedented? It depends on what we’re about to type! If we’re about to type `}`, then the answer is _yes_ — but if we’re typing anything else, like another property-value pair, then the answer is _no_. That’s why Pulsar won’t decide whether to dedent _until we start typing_. If we were to type `}`, our Tree-sitter grammar would run a query capture on the current line, spot the `@dedent` match, and respond by dedenting the current line one level from the line above.

For more complex C-style languages like JavaScript, here’s a better starting point for `indents.scm`:

```scm
; Any of these characters should trigger indent…
[ "{" "(" "[" ] @indent

; …and any of these should trigger dedent.
[ "}" ")" "]" ] @dedent
```

There are major simplicity benefits to targeting these anonymous nodes instead of more abstract nodes. Most folks’ indentation styles tend to align with delimiter usage, so the more tightly we can bind to the delimiters themselves, the more accurate the hinting will be. And anonymous nodes are safer to rely upon as the user types and the syntax tree is in flux. Sometimes we have to “filter out” false positives — for instance, curly braces in JavaScript that signify template string interpolations instead of statement blocks — but that’s a small price to pay.

I’m hiding some of the complexity from you, but less than you’d think. This is a much friendlier way to describe indentation hinting than making a grammar author maintain an ever-more-complex set of regular expressions. It allows the author to describe each kind of indentation hint as its own rule.

### Getting creative

And it allows us to do some more complex things that weren’t possible before.

TextMate’s system will let us indent or dedent _one level at a time_. But consider a `switch` statement:

```js
switch (foo) {
	case "bar":
		// one thing
		break;
	case "baz":
		// another thing
		break;
	default:
	// a third thing
}
```

Between the second-to-last line and the last line, there’s a _two-level_ change in indentation. How can we express that?

Here’s where our syntax tree comes in handy. Instead of describing our desired indentation level relative to the previous line, we can describe it relative to a line of our choosing:

```scm
; The closing brace of a switch statement's body should match the indentation
; of the line where the switch statement starts.
(switch_statement
  body: (switch_body "}" @match)
  (#set! indent.matchIndentOf parent.startPosition))

; 'case' and 'default' need to be indented one level more than their containing
; `switch`.
(["case" "default"] @match
  (#set! indent.matchIndentOf parent.parent.startPosition)
  (#set! indent.offsetIndent 1))

["case" "default"] @indent
```

Here we’re using a new capture called `@match`. It can do exactly what we just described by using a _node position descriptor_ (an idea we introduced [in the last installment](https://pulsar-edit.dev/blog/20231013-savetheclocktower-modern-tree-sitter-part-3.html#adjusting-by-node-position-descriptor)) to refer to an earlier line.

In the first rule, we’re matching the closing `}` of a `switch` statement. We’re using a `#set!` predicate to describe the starting position of its `switch_body` parent. The `switch_body` starts on row 1, so `@match` understands this to mean “adjust the current line to match the indentation of row 1.” This will happen automatically when the user types the closing brace.

In the second rule, we’re using similar logic. If we were typing the above `switch` statement, we’d find ourselves over-indented as we started typing on line 5. We’d want our editor to dedent that line once it saw that we were typing a new branch of the `switch` statement. So we can write another `@match` rule — still targeting the indentation level of the starting row of `switch_body` — but with an extra rule to _offset_ the indent by one level. In other words, we want to be indented _one level more_ than the indent level of row 1.

The third rule is simpler: it’s how we ensure that the editor indents by one level after `case` and `default` statements.

You might’ve had your hackles raised by this example. After all, there’s another school of thought on how to indent `switch` statements:

```js
switch (foo) {
	case "bar":
		// one thing
		break;
	case "baz":
		// another thing
		break;
	default:
	// a third thing
}
```

This faction thinks that `case` and `default` statements should be indented to the same level as the original `switch` statement. How can we please both camps?

One way might be to write two different versions of our second rule, and decide which one to use based on configuration:

```scm

; Some say 'case' and 'default' need to be indented one level more than their
; containing `switch`.
(["case" "default"] @match
  (#is? test.config "language-javascript.doubleIndentSwitchStatements")
  (#set! indent.matchIndentOf parent.parent.startPosition)
  (#set! indent.offsetIndent 1))

; Others say 'case' and 'default' should match their containing `switch`.
(["case" "default"] @match
  (#is-not? test.config "language-javascript.doubleIndentSwitchStatements")
  (#set! indent.matchIndentOf parent.parent.startPosition))
```

Here we’re using a `test.config` scope test. I told you about scope tests last time, but I haven’t yet mentioned that they don’t just apply to syntax highlighting queries; they apply to indentation queries, too!

The `test.config` scope test gives us a way to approve or reject a capture based on the user’s chosen configuration. If they’ve enabled the `doubleIndentSwitchStatements` config option, we can indent their code one way; if they’ve disabled it, we can indent their code another way.

This particular example **isn’t yet implemented**, but it could be. This would be another advantage that the new Tree-sitter system has over TextMate-style indentation hinting: more room for configurability.

Here’s another edge case of indentation: a braceless `if` statement.

<video style="max-width: 100%" autoplay controls muted loop>
	<source src="@source/blog/assets/tree-sitter-advanced-indentation-part-1.webm" type="video/webm">
	<source src="@source/blog/assets/tree-sitter-advanced-indentation-part-1.mp4" type="video/mp4">
	<p>Your browser doesn’t support HTML video. <a href="@source/blog/assets/tree-sitter-advanced-indentation-part-1.mp4">Download this video</a> instead.</p>
</video>

How did we pull this off? Haven’t we been targeting nodes like `{` and `}`?

Yes, but we can also write rules to handle one-line conditionals like these:

```scm
(if_statement
  condition: (parenthesized_expression ")" @indent
  (#is? test.lastTextOnRow true)))
```

Here we’ve written a query that captures the closing `)` of a braceless `if` statement and uses _that_ as the indentation hint. We’re also using a scope test to ensure the capture is ignored when it isn’t the last text on the row; that’s how we can avoid a false positive in this scenario:

```js
if (notificationsAreDisabled) return;
```

A braceless `if` or `else` applies only to the next statement. The real feat is knowing to dedent _immediately_ after that statement:

```scm
(if_statement
  condition: (_) @indent
  consequence: [
    (expression_statement)
    (return_statement)
    (continue_statement)
    (break_statement)
    (throw_statement)
    (debugger_statement)
  ] @dedent.next)
```

An `if` clause _with_ braces will have a node named `statement_block` in its `consequence` slot. An `if` clause _without_ braces will have its `consequence` slot filled with one of these six kinds of nodes instead.

The `@dedent.next` capture is only rarely needed, but this is a textbook case: it signals when we should dedent the next line _without_ waiting to see the content of the line. Because we know that the next line should _always_ be dedented in this scenario.

How well does this work? Amazingly well:

<video style="max-width: 100%" autoplay controls muted loop>
	<source src="@source/blog/assets/tree-sitter-advanced-indentation-part-2.webm" type="video/webm">
	<source src="@source/blog/assets/tree-sitter-advanced-indentation-part-2.mp4" type="video/mp4">
	<p>Your browser doesn’t support HTML video. <a href="@source/blog/assets/tree-sitter-advanced-indentation-part-2.mp4">Download this video</a> instead.</p>
</video>

Tree-sitter isn’t confused by the line comment! It won’t dedent until after the user types an actual statement.

Does this matter a great deal? Is it worth creating detailed rules to cover a breadth of unusual indentation scenarios? Probably not. But this is just one of a handful of low-hanging fruit that the new system has made possible. Even the slightly verbose query above is much easier to write (and for other people to reason about) than an inscrutable regular expression.

## Code folding

I’m not someone who uses code folding very much, but I want it to be there when I need it. Collapsing entire code branches helps me see the big picture more easily.

### How TextMate grammars do it

Much like indentation, code folding markers in TextMate grammars are determined with regular expressions. Any line that matches `foldingStartMarker` is treated as the start of a fold, and any line that matches `foldingEndMarker` is treated as the end of a fold. This offers similar tradeoffs to the indentation patterns described above: simple for simple cases, but nearly impossible for complex cases.

### How legacy Tree-sitter grammars do it

The same way. Notice a pattern? This is another placeholder that was never replaced with something more permanent, so it’s up to us to invent it.

### Using queries instead of regular expressions

Again, credit goes to the `nvim-treesitter` developers and to [@mauricioszabo][] for envisioning how Tree-sitter queries can describe folds more simply. Here’s how simple it can be in a language like CSS:

```scm
(block) @fold
```

That’s the _entirety_ of the contents of the `folds.scm` file inside the `language-css` package. This works because a starting position and an ending position are all you need to describe a fold, and that’s what Tree-sitter gives us. Every node in a tree reports its buffer positions, so every node can be the target of a fold.

![tree sitter simple fold example](./assets/tree-sitter-simple-fold-example.png)

Let’s go a bit deeper and figure out what this does.

When it opens a file, Pulsar needs to figure out where possible fold ranges are so that it can show a small chevron in the gutter on each line where a fold can start. So it’ll run a query capture against each line, testing it to see if any `@fold` captures result.

Any results will have their buffer ranges inspected. If the range starts and ends on the same line, the candidate fold is ignored. (This saves grammar authors from having to manually exclude things like one-line conditionals.) But if the range starts on one line and ends on another, the fold is valid, and Pulsar knows to place a chevron in the gutter where the fold would start.

The **beginning** of a code fold is the very last column on its starting line. In most cases, the range in question will have delimiters on each end — the backticks of a template string, the curly braces of an `if` or `else` condition, et cetera. That’s why, by default, the **end** of a code fold is the _starting_ position of its very last node child. This works as intended in the vast majority of cases, as in our CSS example above:

![tree-sitter-tools node hierarchy illustration](./assets/tree-sitter-tools-css-block.png)

But because this isn’t always true — especially for languages like Python that don’t use delimiters for blocks — we provide ways to tweak a fold’s ending position.

For instance, let’s look at a JavaScript block comment:

![JavaScript block comment](./assets/tree-sitter-javascript-block-comment.png)

Since comment nodes don’t have children, we should set a custom ending position for the fold with `fold.endAt` so that it doesn’t try to look up a child node that doesn’t exist. Then we can use `fold.offsetEnd` to move the ending point of the fold two columns to the left so that the fold ends before the comment’s ending delimiter:

```scm
((comment) @fold
  (#set! fold.endAt endPosition)
  (#set! fold.offsetEnd -2))
```

Now we can fold up the block comment the way we want:

<video style="max-width: 100%" autoplay controls muted loop>
	<source src="@source/blog/assets/tree-sitter-block-comment-code-fold.webm" type="video/webm">
	<source src="@source/blog/assets/tree-sitter-block-comment-code-fold.mp4" type="video/mp4">
	<p>Your browser doesn’t support HTML video. <a href="@source/blog/assets/tree-sitter-block-comment-code-fold.mp4">Download this video</a> instead.</p>
</video>

Folding in JavaScript is still pretty simple, but not as simple as CSS. We’ve got to account for some edge cases. For example, when an `if` statement is followed by an `else`, we should adjust the fold so that it ends on the line _before_ the `else`, so that each fold can be toggled independently without interfering with one another:

```scm
; Target `if` consequence blocks that are followed by `else`s.
((if_statement
  consequence: (statement_block) @fold
  alternative: (else_clause)
  (#set! fold.adjustToEndOfPreviousRow true)
))

; Other `if` consequence blocks will get caught here.
(statement_block) @fold
```

You can see how this works in the screencast below — the `else` block’s closing delimiter folds up to be on the same line as the starting delimiter, but the `if` block’s fold stops before the newline.

<video style="max-width: 100%" autoplay controls muted loop>
	<source src="@source/blog/assets/tree-sitter-simple-folding.webm" type="video/webm">
	<source src="@source/blog/assets/tree-sitter-simple-folding.mp4" type="video/mp4">
	<p>Your browser doesn’t support HTML video. <a href="@source/blog/assets/tree-sitter-simple-folding.mp4">Download this video</a> instead.</p>
</video>

“End the fold at the end of the previous line” is a common enough case to have its own shorthand predicate. We’ve put this special-case query above the simpler one because Pulsar will use the first capture that matches for a given line.

## Why is this so complicated?

I’ll say it again: this tour through the machinery of Pulsar is aimed at Tree-sitter aficionados and at those who might want to write their own language packages for Pulsar. If that doesn’t describe you, don’t let yourself get overwhelmed by this information dump — just make note of the new features that this system makes possible.

There are pieces of the indentation and folding systems that I didn’t even try to explain in this post. But all this complexity has a purpose, and users reap the benefits in small increments — for instance, every time they _don’t_ have to go back and reformat code they paste into an editor.

These systems only work with the assistance of language grammars, so we owe it to the authors of those grammars to hide as much of that complexity as we can. If we can make these systems seem simple on the surface, they’ll work better, and users will be happier.

## Next time

Cue up your DVD of <cite>Inception</cite>! Next time we’re delving into language injections — the feature that lets you write CSS inside of HTML inside of JavaScript inside of HTML inside of PHP.

[@mauricioszabo]: https://github.com/mauricioszabo
