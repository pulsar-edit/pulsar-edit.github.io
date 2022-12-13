## The Init File

::: info
The default init file for Pulsar has been changed from the previous CoffeeScript
`init.coffee` file used by Atom to JavaScript. The CoffeeScript file will still
work but should you wish to reference the specific version of this document
for it then you should look at the [Atom Archive](../../../../atom-archive/hacking-atom/#the-init-file).
:::

When Pulsar finishes loading, it will evaluate `init.js` in your
**_LNX/MAC_**: `~/.pulsar` -
**_WIN_**: `%USERPROFILE%\.pulsar`
directory, giving you a chance to run JavaScript code to make customizations.
Code in this file has full access to [Pulsar's API](https://atom.io/docs/api/latest).<!--TODO: Replace link when we have the API documented-->
If customizations become extensive, consider creating a package, which we will
cover in [Package: Word Count](#package-word-count).

You can open the `init.js` file in an editor from the
**_LNX_**: _Atom > Init Script_ -
**_MAC_**: _File > Init Script_ -
**_WIN_**: _Edit > Init Script_
menu.

For example, if you have the Audio Beep configuration setting enabled, you could
add the following code to your `init.js` file to have Pulsar greet you with an
audio beep every time it loads:

```js
atom.beep();
```

<!--TODO: All API links to be updated when it is documented-->

Because `init.js` provides access to Pulsar's API, you can use it to implement
useful commands without creating a new package or extending an existing one.
Here's a command which uses the [Selection API](https://atom.io/docs/api/latest/Selection)
and [Clipboard API](https://atom.io/docs/api/latest/Clipboard)
to construct a Markdown link from the selected text and the clipboard contents
as the URL:

```js
atom.commands.add("atom-text-editor", "markdown:paste-as-link", () => {
	let clipboardText, editor, selection;
	if (!(editor = atom.workspace.getActiveTextEditor())) {
		return;
	}
	selection = editor.getLastSelection();
	clipboardText = atom.clipboard.read();
	return selection.insertText(
		"[" + selection.getText() + "](" + clipboardText + ")"
	);
});
```

Now, reload Pulsar and use the [Command Palette](../../getting-started#command-palette)
to execute the new command, `Markdown: Paste As Link`, by name. And if you'd
like to trigger the command via a keyboard shortcut, you can define a
[keybinding for the command](../../using-pulsar#customizing-keybindings).
