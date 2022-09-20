<template><div><div class="custom-container danger"><p class="custom-container-title">STOP</p>
<p>This is being kept for archival purposes only from the original Atom
documentation. As this may no longer be relevant to Pulsar you use this at your
own risk.
Current Pulsar documentation is found at:
<a href="link/to/main/docs/section">Generic Link</a>.</p>
</div>
<h4 id="atom-basics" tabindex="-1"><a class="header-anchor" href="#atom-basics" aria-hidden="true">#</a> Atom Basics</h4>
<p>Now that Atom is installed on your system, let's fire it up, configure it and
get acquainted with the editor.</p>
<p>When you launch Atom for the first time, you should get a screen that looks like
this:</p>
<p><img src="@images/atom/first-launch.png" alt="Atom's welcome screen"></p>
<p>This is the Atom welcome screen and gives you a pretty good starting point for
how to get started with the editor.</p>
<h4 id="terminology" tabindex="-1"><a class="header-anchor" href="#terminology" aria-hidden="true">#</a> Terminology</h4>
<p>You can find definitions for all of the various terms that we use throughout the
manual in our <RouterLink to="/resources/sections/glossary/">Glossary</RouterLink>.</p>
<h4 id="command-palette" tabindex="-1"><a class="header-anchor" href="#command-palette" aria-hidden="true">#</a> Command Palette</h4>
<p>In that welcome screen, we are introduced to probably the most important command
in Atom, the Command Palette. If you press <kbd class="platform-mac">
Cmd+Shift+P</kbd><kbd class="platform-windows platform-linux">Ctrl+Shift+P
</kbd> while focused in an editor pane, the command palette will pop up.</p>
<div class="custom-container tip"><p class="custom-container-title">Note:</p>
<p>Throughout the book, we will use shortcut keybindings like
<kbd class="platform-mac">Cmd+Shift+P</kbd><kbd class="platform-windows
platform-linux">Ctrl+Shift+P</kbd> to demonstrate how to run a command.
These are the default keybindings for the platform that we detected you running.</p>
<p>If you want to see a different platform than the one we detected, you may choose
a different one by using the platform selector near the top of the page:</p>
<p><img src="@images/atom/platform-selector.png" alt="Platform Selector" title="Platform Selector"></p>
<p>If the Platform Selector is not present, then the current page doesn't have any
platform-specific content.</p>
<p>If you have customized your Atom keymap, you can always see the keybinding you
have mapped in the Command Palette or the Keybindings tab in the
<a href="#settings-and-preferences">Settings View</a>.</p>
</div>
<p>This search-driven menu can do just about any major task that is possible in
Atom. Instead of clicking around all the application menus to look for
something, you can press <kbd class="platform-mac">Cmd+Shift+P</kbd>
<kbd class="platform-windows platform-linux">Ctrl+Shift+P</kbd> and search for
the command.</p>
<p><img src="@images/atom/command-palette.png" alt="Command Palette" title="Command Palette"></p>
<p>Not only can you see and quickly search through thousands of possible commands,
but you can also see if there is a keybinding associated with it. This is great
because it means you can guess your way to doing interesting things while also
learning the shortcut key strokes for doing it.</p>
<p>For the rest of the book, we will try to be clear as to the text you can search
for in the Command Palette in addition to the keybinding for different commands.</p>
<h4 id="settings-and-preferences" tabindex="-1"><a class="header-anchor" href="#settings-and-preferences" aria-hidden="true">#</a> Settings and Preferences</h4>
<p>Atom has a number of settings and preferences you can modify in the Settings
View.</p>
<p><img src="@images/atom/settings.png" alt="Settings View" title="Settings View"></p>
<p>This includes things like changing the theme, specifying how to handle wrapping,
font settings, tab size, scroll speed and much more. You can also use this
screen to install new packages and themes, which we'll cover in
<a href="/sections/atom-packages">Atom Packages</a>.</p>
<p>To open the Settings View, you can:</p>
<ul>
<li>Use the <span class="platform-mac"><em>Atom &gt; Preferences</em></span>
<span class="platform-windows"><em>File &gt; Settings</em></span>
<span class="platform-linux"><em>Edit &gt; Preferences</em></span> menu item in the menu
bar</li>
<li>Search for <code v-pre>settings-view:open</code> in the <a href="#command-palette">Command Palette</a></li>
<li>Use the <kbd class="platform-mac">Cmd+,</kbd>
<kbd class="platform-windows platform-linux">Ctrl+,</kbd> keybinding</li>
</ul>
<h5 id="changing-the-theme" tabindex="-1"><a class="header-anchor" href="#changing-the-theme" aria-hidden="true">#</a> Changing the Theme</h5>
<p>The Settings View also lets you change the themes for Atom. Atom ships with 4
different UI themes, dark and light variants of the Atom and One theme, as well
as 8 different syntax themes. You can modify the active theme by clicking on the
Themes tab in the sidebar of the Settings View, or you can install new themes
by clicking the Install tab.</p>
<p><img src=".@images/atom/theme.png" alt="Changing the theme from the Settings View" title="Changing the theme from the Settings View"></p>
<p>The UI themes control the style of UI elements like the tabs and the tree view,
while the syntax themes control the syntax highlighting of text you load into
the editor. To change the syntax or UI theme, simply pick something different in
the appropriate dropdown list.</p>
<p>There are also dozens of themes on https://atom.io that you can choose from if
you want something different. We will cover customizing a theme in
<a href="/sections/basic-customization">Style Tweaks</a> and creating your own theme in
<a href="../hacking-atom/sections/creating-a-theme">Creating a Theme</a>.</p>
<h5 id="soft-wrap" tabindex="-1"><a class="header-anchor" href="#soft-wrap" aria-hidden="true">#</a> Soft Wrap</h5>
<p>You can use the Settings View to specify your whitespace and wrapping
preferences.</p>
<p><img src="@images/atom/settings-wrap.png" alt="Whitespace and wrapping preferences settings"></p>
<p>Enabling &quot;Soft Tabs&quot; will insert spaces instead of actual tab characters when
you press the <kbd class="platform-all">Tab</kbd> key and the &quot;Tab Length&quot;
setting specifies how many spaces to insert when you do so, or how many spaces
are used to represent a tab if &quot;Soft Tabs&quot; is disabled.</p>
<p>The &quot;Soft Wrap&quot; option will wrap lines that are too long to fit in your current
window. If soft wrapping is disabled, the lines will simply run off the side of
the screen and you will have to scroll the window to see the rest of the
content. If &quot;Soft Wrap At Preferred Line Length&quot; is toggled, the lines will wrap
at 80 characters instead of the end of the screen. You can also change the
default line length to a value other than 80 on this screen.</p>
<p>In <RouterLink to="/sections/basic-customization/">Basic Customization</RouterLink> we will see how to set
different wrap preferences for different types of files (for example, if you
want to wrap Markdown files but not other files).</p>
<h4 id="opening-modifying-and-saving-files" tabindex="-1"><a class="header-anchor" href="#opening-modifying-and-saving-files" aria-hidden="true">#</a> Opening, Modifying, and Saving Files</h4>
<p>Now that your editor is looking and acting how you want, let's start opening up
and editing files. This is a text editor after all, right?</p>
<h5 id="opening-a-file" tabindex="-1"><a class="header-anchor" href="#opening-a-file" aria-hidden="true">#</a> Opening a File</h5>
<p>There are several ways to open a file in Atom. You can do it by choosing
<em>File &gt; Open</em> from the menu bar or by pressing <kbd class="platform-mac">Cmd+O
</kbd><kbd class="platform-windows platform-linux">Ctrl+O</kbd> to choose a file
from the standard dialog.</p>
<p><img src="@images/atom/open-file.png" alt="Open file by dialog" title="Open file by dialog"></p>
<p>This is useful for opening a file that is not contained in the project you're
currently in (more on that next), or if you're starting from a new window for
some reason.</p>
<p>Another way to open a file in Atom is from the command line using the <code v-pre>atom</code>
command. <span class="platform-mac">The Atom menu bar has a command named
&quot;Install Shell Commands&quot; which installs the <code v-pre>atom</code> and <code v-pre>apm</code> commands
<RouterLink to="/installing-atom/#installing-atom-on-mac">if Atom wasn't able to install them itself</RouterLink>
.</span><span class="platform-windows platform-linux">The <code v-pre>atom</code> and <code v-pre>apm</code>
commands are installed automatically as a part of Atom's
<RouterLink to="/sections/installing-atom/">installation process</RouterLink>.</span></p>
<p>You can run the <code v-pre>atom</code> command with one or more file paths to open up those
files in Atom.</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code>$ atom --help
&gt; Atom Editor v1.8.0

&gt; Usage: atom [options] [path ...]

&gt; One or more paths to files or folders may be specified. If there is an
&gt; existing Atom window that contains all of the given folders, the paths
&gt; will be opened in that window. Otherwise, they will be opened in a new
&gt; window.

&gt; ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is a great tool if you're used to the terminal or you work from the
terminal a lot. Just fire off <code v-pre>atom [files]</code> and you're ready to start editing.
You can even open a file at a certain line (and optionally column) so the cursor
will be positioned exactly where you want. For example, you may search some
keyword in a repository to find the line you want to edit:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code>$ git grep -n 'Opening a File$'
content/getting-started/sections/atom-basics.md:84:##### Opening a File
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>and then jump to the beginning of that line by appending a colon and the line
number to the file path:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code>$ atom content/getting-started/sections/atom-basics.md:84
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sometimes you may want the cursor to jump to the exact column position of the
searched keyword. Just append another colon plus the column number:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code>$ git grep -n --column 'Windows Explorer'
content/getting-started/sections/atom-basics.md:150:722
$ atom content/getting-started/sections/atom-basics.md:150:722
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="editing-and-saving-a-file" tabindex="-1"><a class="header-anchor" href="#editing-and-saving-a-file" aria-hidden="true">#</a> Editing and Saving a File</h5>
<p>Editing a file is pretty straightforward. You can click around and scroll with
your mouse and type to change the content. There is no special editing mode or
key commands. If you prefer editors with modes or more complex key commands, you
should take a look at the <a href="https://atom.io/packages" target="_blank" rel="noopener noreferrer">Atom package list<ExternalLinkIcon/></a>. There
are a lot of packages that emulate popular styles.</p>
<p>To save a file you can choose <em>File &gt; Save</em> from the menu bar or
<kbd class="platform-mac">Cmd+S</kbd>
<kbd class="platform-windows platform-linux">Ctrl+S</kbd> to save the file. If
you choose <em>File &gt; Save As</em> or press <kbd class="platform-mac">Cmd+Shift+S</kbd>
<kbd class="platform-windows platform-linux">Ctrl+Shift+S</kbd> then you can
save the current content in your editor under a different file name. Finally,
you can choose <em>File &gt; Save All</em> <span class="platform-mac">or press
<kbd class="platform-mac">Alt+Cmd+S</kbd></span> to save all the open files in
Atom.</p>
<h4 id="opening-directories" tabindex="-1"><a class="header-anchor" href="#opening-directories" aria-hidden="true">#</a> Opening Directories</h4>
<p>Atom doesn't just work with single files though; you will most likely spend most
of your time working on projects with multiple files. To open a directory,
choose the menu item <span class="platform-mac"><em>File &gt; Open</em></span>
<span class="platform-windows platform-linux"><em>File &gt; Open Folder</em></span> and
select a directory from the dialog. You can also add more than one directory to
your current Atom window, by choosing <em>File &gt; Add Project Folder</em> from the
menu bar or pressing <kbd class="platform-mac">Cmd+Shift+O</kbd>
<kbd class="platform-windows platform-linux">Ctrl+Shift+A</kbd>.</p>
<p>You can open any number of directories from the command line by passing their
paths to the <code v-pre>atom</code> command line tool. For example, you could run the command
<code v-pre>atom ./hopes ./dreams</code> to open both the <code v-pre>hopes</code> and the <code v-pre>dreams</code> directories at
the same time.</p>
<p>When you open Atom with one or more directories, you will automatically get a
Tree View on the side of your window.</p>
<p><img src="@source/docs/atom-archive/images/project-view.png" alt="Tree View in an open project" title="Tree View in an open project"></p>
<p>The Tree View allows you to explore and modify the file and directory structure
of your project. You can open, rename, delete and create new files from this
view.</p>
<p>You can also hide and show it with <kbd class="platform-mac">Cmd+\</kbd>
<kbd class="platform-windows platform-linux">Ctrl+\</kbd> or the <code v-pre>tree-view: toggle</code> command from the Command Palette, and <kbd class="platform-mac">Ctrl+0
</kbd><kbd class="platform-windows platform-linux">Alt+\</kbd> will focus it.
When the Tree view has focus you can press <kbd class="platform-all">A</kbd>,
<kbd class="platform-all">M</kbd>, or <kbd class="platform-all">Delete</kbd> to
add, move or delete files and folders. You can also right-click on a file or
folder in the Tree view to see many of the various options, including all of
these plus showing the file in <span class="platform-mac">Finder</span>
<span class="platform-windows">Windows Explorer</span>
<span class="platform-linux">your native filesystem</span> or copying the file
path to the clipboard.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p><strong>Atom Packages</strong></p>
<p>Like many parts of Atom, the Tree View is not built directly into the editor,
but is its own standalone package that is shipped with Atom by default. Packages
that are bundled with Atom are referred to as Core packages. Ones that aren't
bundled with Atom are referred to as Community packages.</p>
<p>You can find the source code to the Tree View on GitHub at
https://github.com/atom/tree-view.</p>
<p>This is one of the interesting things about Atom. Many of its core features are
actually just packages implemented the same way you would implement any other
functionality. This means that if you don't like the Tree View for example, you
could write your own implementation of that functionality and replace it
entirely.</p>
</div>
<h5 id="opening-a-file-in-a-project" tabindex="-1"><a class="header-anchor" href="#opening-a-file-in-a-project" aria-hidden="true">#</a> Opening a File in a Project</h5>
<p>Once you have a project open in Atom, you can easily find and open any file
within that project.</p>
<p>If you press <kbd class="platform-mac">Cmd+T</kbd>
<kbd class="platform-windows platform-linux">Ctrl+T</kbd> or
<kbd class="platform-mac">Cmd+P</kbd>
<kbd class="platform-windows platform-linux">Ctrl+P</kbd>, the Fuzzy Finder will
pop up. This will let you quickly search for any file in your project by typing
parts of the path.</p>
<p><img src="@source/docs/atom-archive/images/finder.png" alt="Opening files with the Fuzzy Finder" title="Opening files with the Fuzzy Finder"></p>
<p>You can also search through only the files currently opened (rather than every
file in your project) with <kbd class="platform-mac">Cmd+B</kbd>
<kbd class="platform-windows platform-linux">Ctrl+B</kbd>. This searches
through your &quot;buffers&quot; or open files. You can also limit this fuzzy search
with <kbd class="platform-mac">Cmd+Shift+B</kbd>
<kbd class="platform-windows platform-linux">Ctrl+Shift+B</kbd>, which
searches only through the files which are new or have been modified since your
last Git commit.</p>
<p>The fuzzy finder uses the <code v-pre>core.ignoredNames</code>, <code v-pre>fuzzy-finder.ignoredNames</code> and
<code v-pre>core.excludeVCSIgnoredPaths</code> configuration settings to filter out files and
folders that will not be shown. If you have a project with tons of files you
don't want it to search through, you can add patterns or paths to either of
these config settings or your
<a href="https://git-scm.com/docs/gitignore" target="_blank" rel="noopener noreferrer">standard <code v-pre>.gitignore</code> files<ExternalLinkIcon/></a>. We'll learn
more about config settings in
<RouterLink to="/using-atom/sections/basic-customization/#global-configuration-settings">Global Configuration Settings</RouterLink>,
but for now you can easily set these in the Settings View under Core Settings.</p>
<p>Both <code v-pre>core.ignoredNames</code> and <code v-pre>fuzzy-finder.ignoredNames</code> are interpreted as glob
patterns as implemented by the
<a href="https://github.com/isaacs/minimatch" target="_blank" rel="noopener noreferrer">minimatch Node module<ExternalLinkIcon/></a>.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><strong>Configuration Setting Notation</strong></p>
<p>Sometimes you'll see us refer to configuration settings all spelled out like
&quot;Ignored Names in Core Settings&quot;. Other times you'll see us use the shorthand
name like <code v-pre>core.ignoredNames</code>. Both of these refer to the same thing. The
shorthand is the package name, then a dot <code v-pre>.</code>, followed by the &quot;camel-cased&quot;
name of the setting.</p>
<p>If you have a phrase you want to camel-case, follow these steps:</p>
<ol>
<li>Lowercase the first word</li>
<li>Capitalize the first letter in all other words</li>
<li>Remove the spaces</li>
</ol>
<p>So &quot;Ignored Names&quot; becomes &quot;ignoredNames&quot;.</p>
</div>
</div></template>


