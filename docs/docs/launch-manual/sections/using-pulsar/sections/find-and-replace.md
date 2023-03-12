## Find and Replace

Finding and replacing text in your file or project is quick and easy in Pulsar.

::: tabs#using-pulsar

@tab Linux

- <kbd>Ctrl+F</kbd> - Search within a buffer
- <kbd>Ctrl+Shift+F</kbd> - Search the entire project

@tab macOS

- <kbd>Cmd+F</kbd> - Search within a buffer
- <kbd>Cmd+Shift+F</kbd> - Search the entire project

@tab Windows

- <kbd>Ctrl+F</kbd> - Search within a buffer
- <kbd>Ctrl+Shift+F</kbd> - Search the entire project

:::

If you launch either of those commands, you'll be greeted with the Find and
Replace panel at the bottom of your screen.

![Find and replace text in the current file](@images/atom/find-replace-file.png "Find and replace text in the current file")

To search within your current file you can press
**_LNX/WIN_**: <kbd>Cmd+F</kbd> -
**_MAC_**: <kbd>Ctrl+F</kbd>, type in a search string and press
**_LNX/WIN/MAC_**: <kbd>Enter</kbd> or
**_LNX/WIN_**<kbd>F3</kbd> -
**_MAC_**: <kbd>Cmd+G</kbd> or the "Find Next" button) multiple
times to cycle through all the matches in that file. <kbd>Alt+Enter</kbd> will
find all occurrences of the search string. The Find and Replace panel also
contains buttons for toggling case sensitivity, performing regular expression
matching, scoping the search to selections, and performing whole word search.

If you type a string in the replacement text box, you can replace matches with a
different string. For example, if you wanted to replace every instance of the
string "Atom" with the string "Pulsar", you would enter those values in the two
text boxes and press the "Replace All" button to perform the replacements.

::: note Note

**Note:** Pulsar uses JavaScript regular expressions to perform regular
expression searches.

When doing a regular expression search, the replacement syntax to refer back to
search groups is $1, $2, … $&. Refer to JavaScript's [guide to regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
to learn more about regular expression syntax you can use in Pulsar.

:::

You can also find and replace throughout your entire project if you invoke the
panel with **_LNX/WIN_**: <kbd>Ctrl+Shift+F</kbd> -
**_MAC_**: <kbd>Cmd+Shift+F</kbd>.

![Find and replace text in your project](@images/atom/find-replace-project.png "Find and replace text in your project")

This is a great way to find out where in your project a function is called, an
anchor is linked to or a specific misspelling is located. Click on the matching
line to jump to that location in that file.

You can limit a search to a subset of the files in your project by entering a
[glob pattern](https://en.wikipedia.org/wiki/Glob_%28programming%29) into the
"File/Directory pattern" text box. For example, the pattern `src/*.js` would
restrict the search to JavaScript files in the `src` directory. The "globstar"
pattern (`**`) can be used to match arbitrarily many subdirectories. For
example, `docs/**/*.md` will match `docs/a/foo.md`, `docs/a/b/foo.md`, etc.
You can enter multiple glob patterns separated by commas, which is useful for
searching in multiple file types or subdirectories.

When you have multiple project folders open, this feature can also be used to
search in only one of those folders. For example, if you had the folders
`/path1/folder1` and `/path2/folder2` open, you could enter a pattern starting
with `folder1` to search only in the first folder.

Press <kbd>Esc</kbd> while focused on the Find and Replace panel to clear the
pane from your workspace.

The Find and Replace functionality is implemented in the [find-and-replace](https://github.com/pulsar-edit/find-and-replace)
package and uses the [scandal](https://github.com/pulsar-edit/scandal) Node module to
do the actual searching.
