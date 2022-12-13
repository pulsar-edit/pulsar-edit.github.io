## Converting from TextMate

It's possible that you have themes or grammars from [TextMate](https://macromates.com)
that you like and use and would like to convert to Pulsar. If so, you're in luck
because there are tools to help with the conversion.

### Converting a TextMate Grammar Bundle

Converting a TextMate bundle will allow you to use its editor preferences,
snippets, and colorization inside Pulsar.

Let's convert the TextMate bundle for the [R](<https://en.wikipedia.org/wiki/R_(programming_language)>)
programming language. You can find other existing TextMate bundles [on GitHub](https://github.com/textmate).

You can convert the R bundle with the following command:

```command-line
$ pulsar -p init --package language-r --convert https://github.com/textmate/r.tmbundle
```

You can now change directory into `language-r` to see the converted bundle. Once
you link your package with the `pulsar -p link` command, your new package is
ready to use. Launch Pulsar and open a `.r` file in the editor to see it in
action!

### Converting a TextMate Syntax Theme

This section will go over how to convert a [TextMate](https://macromates.com)
theme to an Pulsar theme.

#### Differences

TextMate themes use [plist](https://en.wikipedia.org/wiki/Property_list) files
while Pulsar themes use [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
or [Less](http://lesscss.org) to style the UI and syntax in the editor.

The utility that converts the theme first parses the theme's plist file and then
creates comparable CSS rules and properties that will style Pulsar similarly.

#### Convert the Theme

Download the theme you wish to convert.

Now, let's say you've downloaded the theme to `~/Downloads/MyTheme.tmTheme`,
you can convert the theme with the following command:

```sh
$ pulsar -p init --theme my-theme --convert ~/Downloads/MyTheme.tmTheme
```

You can then change directory to `my-theme` to see the converted theme.

#### Activate the Theme

Once your theme is installed you can enable it by launching Pulsar and opening
the Settings View with the
**_LNX_**: _Edit > Preferences_ -
**_MAC_**: _Pulsar > Preferences_ -
**_WIN_**: _File > Preferences_
menu item. Then select the "Themes" tab on the left side navigation. Finally,
choose "My Theme" from the "Syntax Theme" dropdown menu to enable your new
theme.

Your theme is now enabled, open an editor to see it in action!
