## Version Control in Pulsar

Version control is an important aspect of any project and Pulsar comes with
basic [Git](https://git-scm.com) and [GitHub](https://github.com) integration
built in.

In order to use version control in Pulsar, the project root needs to contain the
Git repository.

### Checkout HEAD revision

The **_LNX/WIN_**: <kbd>Alt+Ctrl+Z</kbd> -
**_MAC_**: <kbd>Alt+Cmd+Z</kbd> keybinding checks out the
`HEAD` revision of the file in the editor.

This is a quick way to discard any saved and staged changes you've made and
restore the file to the version in the `HEAD` commit. This is essentially the
same as running `git checkout HEAD -- <path>` and `git reset HEAD -- <path>`
from the command line for that path.

![Git checkout `HEAD`](@images/atom/git-checkout-head.gif "Git checkout `HEAD`")

This command goes onto the undo stack so you can use
**_LNX/WIN_**: <kbd>Ctrl+Z</kbd> -
**_MAC_**: <kbd>Cmd+Z</kbd> afterwards to restore the previous contents.

### Git status list

Pulsar ships with the [fuzzy-finder package](https://github.com/pulsar-edit/fuzzy-finder)
which provides
**_LNX/WIN_**: <kbd>Ctrl+T</kbd> -
**_MAC_**: <kbd>Cmd+T</kbd> to quickly open files
in the project and
**_LNX/WIN_**: <kbd>Ctrl+B</kbd> -
**_MAC_**: <kbd>Cmd+B</kbd> to jump to any
open editor. The package also provides
**_LNX/WIN_**: <kbd>Ctrl+Shift+B</kbd> -
**_MAC_**: <kbd>Cmd+Shift+B</kbd> which displays a list of all the untracked and modified
files in the project. These will be the same files that you would see on the
command line if you ran `git status`.

![Git status list](@images/atom/git-status.gif "`git status` list")

An icon will appear to the right of each file letting you know whether it is
untracked or modified.

### Commit editor

Pulsar can be used as your Git commit editor and ships with the [language-git package](https://github.com/pulsar-edit/language-git)
which adds syntax highlighting to edited commit, merge, and rebase messages.

![Git commit message highlighting](@images/atom/git-message.gif "Git commit message highlighting")

You can configure Pulsar to be your Git commit editor with the following command:

<!--TODO: Check this still works in Pulsar-->

```sh
$ git config --global core.editor "pulsar --wait"
```

The [language-git](https://github.com/pulsar-edit/language-git) package will help
remind you to be brief by colorizing the first lines of commit messages when
they're longer than 50 or 65 characters.

### Status bar icons

The [status-bar](https://github.com/pulsar-edit/status-bar) package that ships with
Pulsar includes several Git decorations that display on the right side of the
status bar:

![Git Status Bar decorations](@images/atom/git-status-bar.png "Git Status Bar decorations")

The currently checked out branch name is shown with the number of commits the
branch is ahead of or behind its upstream branch. An icon is added if the file
is untracked, modified, or ignored. The number of lines added and removed since
the file was last committed will be displayed as well.

### Line diffs

The included [git-diff](https://github.com/pulsar-edit/git-diff) package colorizes
the gutter next to lines that have been added, edited, or removed.

![Git line diff indications](@images/atom/git-lines.png "Git line diff indications")

This package also adds <kbd>Alt+G</kbd> <kbd>Down</kbd> and <kbd>Alt+G</kbd>
<kbd>Up</kbd> keybindings that allow you to move the cursor to the next or
previous diff in the current editor.

### Open on GitHub

If the project you're working on is on GitHub, there are also some very useful
integrations you can use. Most of the commands will take the current file you're
viewing and open a view of that file on GitHub - for instance, the blame or
commit history of that file.

- <kbd>Alt+G</kbd> <kbd>O</kbd> - Open file on GitHub
- <kbd>Alt+G</kbd> <kbd>B</kbd> - Open Blame view of file on GitHub
- <kbd>Alt+G</kbd> <kbd>H</kbd> - Open History view of file on GitHub
- <kbd>Alt+G</kbd> <kbd>C</kbd> - Copy the URL of the current file on GitHub to
  the clipboard
- <kbd>Alt+G</kbd> <kbd>R</kbd> - Branch compare on GitHub

The branch comparison shows you the commits that are on the branch you're
currently working on locally that are not on the mainline branch.

![Open Blame of file on GitHub](@images/atom/open-on-github.png "Open Blame of file on GitHub")
