### Pulsar Packages

First we'll start with the Pulsar package system. As we mentioned previously,
Pulsar itself is a very basic core of functionality that ships with a number of
useful packages that add new features like the [Tree View](https://github.com/pulsar-edit/tree-view)
and the [Settings View](https://github.com/pulsar-edit/settings-view).

In fact, there are more than 80 packages that comprise all of the functionality
that is available in Pulsar by default. For example, the [Welcome screen](https://github.com/pulsar-edit/welcome)
that you see when you first start Pulsar, the [spell checker](https://github.com/atom/spell-check)
, the [themes](https://github.com/pulsar-edit/one-dark-ui) and the [Fuzzy Finder](https://github.com/pulsar-edit/fuzzy-finder)
are all packages that are separately maintained and all use the same APIs that
you have access to, as we'll see in great detail in [Hacking Pulsar](/hacking-atom/). <!--TODO: link-->

This means that packages can be incredibly powerful and can change everything
from the very look and feel of the entire interface to the basic operation of
even core functionality.

In order to install a new package, you can use the Install tab in the now
familiar Settings View. Open up the Settings View using <kbd>Ctrl/Cmd+,</kbd>
click on the "Install" tab and type your search query into the box under
Install Packages.

The packages listed here have been published to https://pulsar-edit.dev/packages <!--TODO:Change address to final URL (if this is not it)-->
which is the official registry for Atom packages. Searching on the Settings View
will go to the Atom package registry and pull in anything that matches your
search terms.

![Package install screen](@images/packages-install.png "Package install screen")

All of the packages will come up with an "Install" button. Clicking that will
download the package and install it. Your editor will now have the functionality
that the package provides.

#### Package Settings

Once a package is installed in Pulsar, it will show up in the Settings View
under the "Packages" tab, along with all the pre-installed packages that come
with Atom. To filter the list in order to find one, you can type into search box
directly under the "Installed Packages" heading.

![Package settings screen](@images/package-specific-settings.png "Package settings screen")

Clicking on the "Settings" button for a package will give you the settings
screen for that package specifically. Here you have the option of changing some
of the default variables for the package, seeing what all the command
keybindings are, disabling the package temporarily, looking at the source code,
seeing the current version of the package, reporting issues and uninstalling the
package.

If a new version of any of your packages is released, Pulsar will automatically
detect it and you can upgrade the package from either this screen or from the
"Updates" tab. This helps you easily keep all your installed packages up to
date.

#### Pulsar Themes

You can also find and install new themes for Pulsar from the Settings View.
These can be either UI themes or syntax themes and you can search for them from
the "Install" tab, just like searching for new packages. Make sure to press the
"Themes" toggle next to the search box.

![Theme search screen](@images/themes.png "Theme search screen")

Clicking on the theme title will take you to a profile page for the theme on
pulsar-edit.dev, which often has a screenshot of the theme. This way you can see
what it looks like before installing it.

Clicking on "Install" will install the theme and make it available in the Theme
dropdowns as we saw in [Changing the Theme](./getting-started/index/#changing-the-theme).<!--TODO: Check link-->

![Example of the Unity UI theme with Monokai syntax theme](@images/unity-theme.png "Example of the Unity UI theme with Monokai syntax theme")

#### Command Line <!--TODO: Currently the binary is still apm and conversations about moving to something like pulsar ppm, this section may be totally redone in the future and may currently be incorrect-->

You can also install packages or themes from the command line using `ppm`. <!--TODO: Currently the binary is still apm and conversations about moving to something like pulsar ppm-->

::: tip Tip

Check that you have `ppm` installed by running the following command in your
terminal:

```command-line
$ ppm help install
```

You should see a message print out with details about the `[pm install` command.

If you do not, see the [Installing Pulsar section](./getting-started/index/installing-atom) <!--TODO: Check link-->
for instructions on how to install the `pulsar` and `ppm` commands for your
system.

:::

You can also install packages by using the `ppm install` command:

- `ppm install <package_name>` to install the latest version.
- `ppm install <package_name>@<package_version>` to install a specific version.

For example `ppm install emmet@0.1.5` installs the `0.1.5` release of the
[Emmet](https://github.com/atom/emmet) package.

You can also use `ppm` to find new packages to install. If you run
`ppm search`, you can search the package registry for a search term.

<!--TODO: Replace examples below for something non-atom and non-coffeescript as we need to ideally remove these references for something more "pulsar" -->

```command-line
$ ppm search coffee
> Search Results For 'coffee' (29)
> ├── build-coffee Atom Build provider for coffee, compiles CoffeeScript (1160 downloads, 2 stars)
> ├── scallahan-coffee-syntax A coffee inspired theme from the guys over at S.CALLAHAN (183 downloads, 0 stars)
> ├── coffee-paste Copy/Paste As : Js ➤ Coffee / Coffee ➤ Js (902 downloads, 4 stars)
> ├── atom-coffee-repl Coffee REPL for Atom Editor (894 downloads, 2 stars)
> ├── coffee-navigator Code navigation panel for Coffee Script (3493 downloads, 22 stars)
> ...
> ├── language-iced-coffeescript Iced coffeescript for atom (202 downloads, 1 star)
> └── slontech-syntax Dark theme for web developers ( HTML, CSS/LESS, PHP, MYSQL, javascript, AJAX, coffee, JSON ) (2018 downloads, 3 stars)
```

You can use `ppm view` to see more information about a specific package.

```command-line
$ ppm view build-coffee
> build-coffee
> ├── 0.6.4
> ├── https://github.com/idleberg/atom-build-coffee
> ├── Atom Build provider for coffee, compiles CoffeeScript
> ├── 1152 downloads
> └── 2 stars
>
> Run `ppm install build-coffee` to install this package.
```
