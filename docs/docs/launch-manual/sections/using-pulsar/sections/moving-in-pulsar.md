### Moving in Pulsar

While it's pretty easy to move around Pulsar by clicking with the mouse or using
the arrow keys, there are some keybindings that may help you keep your hands on
the keyboard and navigate around a little faster.

:::tabs#using-pulsar

@tab Linux

Pulsar has support for all the standard Linux cursor movement key combinations.
To go up, down, left or right a single character you can use the arrow keys.

In addition to single character movement, there are a number of other movement
keybindings:

- <kbd>Ctrl+Left</kbd> - Move to the beginning of word
- <kbd>Ctrl+Right</kbd> - Move to the end of word
- <kbd>Home</kbd> - Move to the first character of the current line
- <kbd>End</kbd> - Move to the end of the line
- <kbd>Ctrl+Home</kbd> - Move to the top of the file
- <kbd>Ctrl+End</kbd> - Move to the bottom of the file

@tab macOS

Pulsar ships with many of the basic Emacs keybindings for navigating a document.
To go up and down a single character, you can use <kbd>Ctrl+P</kbd> and
<kbd>Ctrl+N</kbd>. To go left and right a single character, you can use
<kbd>Ctrl+B</kbd> and <kbd>Ctrl+F</kbd>. These are the equivalent of using the
arrow keys, though some people prefer not having to move their hands to where
the arrow keys are located on their keyboard.

In addition to single character movement, there are a number of other movement
keybindings:

- <kbd>Alt+Left</kbd> or <kbd>Alt+B</kbd> - Move to the beginning of word
- <kbd>Alt+Right</kbd> or <kbd>Alt+F</kbd> - Move to the end of word
- <kbd>Cmd+Left</kbd> or <kbd>Ctrl+A</kbd> - Move to the first character of the current line
- <kbd>Cmd+Right</kbd> or <kbd>Ctrl+E</kbd> - Move to the end of the line
- <kbd>Cmd+Up</kbd> - Move to the top of the file
- <kbd>Cmd+Down</kbd> - Move to the bottom of the file

@tab Windows

Pulsar has support for all the standard Windows cursor movement key combinations.
To go up, down, left or right a single character you can use the arrow keys.

In addition to single character movement, there are a number of other movement
keybindings:

- <kbd>Ctrl+Left</kbd> - Move to the beginning of word
- <kbd>Ctrl+Right</kbd> - Move to the end of word
- <kbd>Home</kbd> - Move to the first character of the current line
- <kbd>End</kbd> - Move to the end of the line
- <kbd>Ctrl+Home</kbd> - Move to the top of the file
- <kbd>Ctrl+End</kbd> - Move to the bottom of the file

:::

You can also move directly to a specific line (and column) number with
<kbd>Ctrl+G</kbd>. This will bring up a dialog that asks which line you would
like to jump to. You can also use the `row:column` syntax to jump to a character
in that line as well.

![Go directly to a line](@images/atom/goto.png "Go directly to a line")

#### Additional Movement and Selection Commands

Pulsar also has a few movement and selection commands that don't have
keybindings by default. You can access these commands from the [Command Palette](../../getting-started#command-palette),<!--TODO: Add final link when it exists-->
but if you find yourself using commands that don't have a keybinding often, have
no fear! You can easily add an entry to your `keymap.cson` to create a key
combination. You can open `keymap.cson` file in an editor from the
🐧**_Edit > Keymap_** - 🍎**_Pulsar > Keymap_** - 🪟**_File > Keymap_** menu.<!--TODO: Replace emojis with FA6 icons-->
For example, the command `editor:move-to-beginning-of-screen-line` is available
in the command palette, but it's not bound to any key combination. To create a
key combination you need to add an entry in your `keymap.cson` file. For
`editor:select-to-previous-word-boundary`, you can add the following to your
`keymap.cson`:

::: tabs#using-pulsar <!--TODO: Check if these are rebranded in core-->

@tab Linux

```coffee
'atom-text-editor':
  'ctrl-shift-e': 'editor:select-to-previous-word-boundary'
```

@tab macOS

```coffee
'atom-text-editor':
  'cmd-shift-e': 'editor:select-to-previous-word-boundary'
```

@tab Windows

```coffee
'atom-text-editor':
  'ctrl-shift-e': 'editor:select-to-previous-word-boundary'
```

:::

This will bind the command `editor:select-to-previous-word-boundary` to
🐧/🪟<kbd>Ctrl+Shift+E</kbd> - 🍎<kbd>Cmd+Shift+E</kbd>. For more information on
customizing your keybindings, see [Customizing Keybindings](/using-pulsar/sections/basic-customization/#customizing-keybindings). <!--TODO: Add proper link when it exists-->

Here's a list of Movement and Selection Commands that do not have a keyboard
shortcut by default:

::: tabs#using-pulsar

@tab Linux

```
editor:move-to-beginning-of-next-paragraph
editor:move-to-beginning-of-previous-paragraph
editor:move-to-beginning-of-screen-line
editor:move-to-beginning-of-line
editor:move-to-end-of-line
editor:move-to-first-character-of-line
editor:move-to-beginning-of-next-word
editor:move-to-previous-word-boundary
editor:move-to-next-word-boundary
editor:select-to-beginning-of-next-paragraph
editor:select-to-beginning-of-previous-paragraph
editor:select-to-end-of-line
editor:select-to-beginning-of-line
editor:select-to-beginning-of-next-word
editor:select-to-next-word-boundary
editor:select-to-previous-word-boundary
```

@tab macOS

```
editor:move-to-beginning-of-next-paragraph
editor:move-to-beginning-of-previous-paragraph
editor:move-to-beginning-of-screen-line
editor:move-to-beginning-of-line
editor:move-to-beginning-of-next-word
editor:move-to-previous-word-boundary
editor:move-to-next-word-boundary
editor:select-to-beginning-of-next-paragraph
editor:select-to-beginning-of-previous-paragraph
editor:select-to-beginning-of-line
editor:select-to-beginning-of-next-word
editor:select-to-next-word-boundary
editor:select-to-previous-word-boundary
```

@tab Windows

```
editor:move-to-beginning-of-next-paragraph
editor:move-to-beginning-of-previous-paragraph
editor:move-to-beginning-of-screen-line
editor:move-to-beginning-of-line
editor:move-to-end-of-line
editor:move-to-first-character-of-line
editor:move-to-beginning-of-next-word
editor:move-to-previous-word-boundary
editor:move-to-next-word-boundary
editor:select-to-beginning-of-next-paragraph
editor:select-to-beginning-of-previous-paragraph
editor:select-to-end-of-line
editor:select-to-beginning-of-line
editor:select-to-beginning-of-next-word
editor:select-to-next-word-boundary
editor:select-to-previous-word-boundary
```

:::

#### Navigating by Symbols

You can also jump around a little more informatively with the Symbols View. To
jump to a symbol such as a method definition, press 🐧/🪟<kbd>Ctrl+R</kbd> -
🍎<kbd>Cmd+R</kbd>. This opens a list of all symbols in the current file, which
you can fuzzy filter similarly to 🐧/🪟<kbd>Ctrl+T</kbd> - 🍎<kbd>Cmd+T</kbd>.
You can also search for symbols across your project but it requires a `tags`
file.

![Search by symbol across your project](@images/atom/symbol.png)

You can generate a `tags` file by using the [ctags utility](https://ctags.io/).
Once it is installed, you can use it to generate a `tags` file by running a
command to generate it. See the [ctags documentation](https://docs.ctags.io/en/latest/)
for details.

::: tabs#using-pulsar

@tab Linux

Once you have your `tags` file generated, you can use it to search for symbols
across your project by pressing <kbd>Ctrl+Shift+R</kbd>. This also enables you
to use <kbd>Alt+Ctrl+Down</kbd> to go to and <kbd>Alt+Ctrl+Up</kbd> to return
from the declaration of the symbol under the cursor.

@tab macOS

Once you have your `tags` file generated, you can use it to search for symbols
across your project by pressing <kbd>Cmd+Shift+R</kbd>. This also enables you
to use <kbd>Alt+Cmd+Down</kbd> to go to and <kbd>Alt+Cmd+Up</kbd> to return from
the declaration of the symbol under the cursor.

@tab Windows

Once you have your `tags` file generated, you can use it to search for symbols
across your project by pressing <kbd class>Ctrl+Shift+R</kbd>.

:::

You can customize how tags are generated by creating your own `.ctags` file in
your home directory, 🐧/🍎`~/.ctags` - 🪟`%USERPROFILE%\.ctags`. An example can be
found [here](https://github.com/pulsar-edit/symbols-view/blob/master/lib/ctags-config).

The symbols navigation functionality is implemented in the [symbols-view](https://github.com/pulsar-edit/symbols-view)
package.

#### Bookmarks

Pulsar also has a great way to bookmark specific lines in your project so you can
jump back to them quickly.

If you press 🐧/🪟<kbd>Alt+Ctrl+F2</kbd> - 🍎<kbd>Cmd+F2</kbd>, Pulsar will toggle
a "bookmark" on the current line. You can set these throughout your project and
use them to quickly find and jump to important lines of your project. A small
bookmark symbol is added to the line gutter, like on line 22 of the image below.

If you hit <kbd>F2</kbd>, Pulsar will jump to the next bookmark in the file you
currently have focused. If you use <kbd>Shift+F2</kbd> it will cycle backwards
through them instead.

You can also see a list of all your project's current bookmarks and quickly
filter them and jump to any of them by hitting <kbd>Ctrl+F2</kbd>.

![View and filter bookmarks](@images/atom/bookmarks.png "View and filter bookmarks")

The bookmarks functionality is implemented in the [bookmarks](https://github.com/pulsar-edit/bookmarks)
package.
