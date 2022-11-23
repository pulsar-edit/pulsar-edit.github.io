## Pulsar Packages

First we'll start with the Pulsar package system. As we mentioned previously,
Pulsar itself is a very basic core of functionality that ships with a number of
useful packages that add new features like the [Tree View](https://github.com/pulsar-edit/tree-view)
and the [Settings View](https://github.com/pulsar-edit/settings-view).

In fact, there are more than 80 packages that comprise all of the functionality
that is available in Pulsar by default. For example, the [Welcome screen](https://github.com/pulsar-edit/welcome)
that you see when you first start Pulsar, the
[spell checker](https://github.com/pulsar-edit/spell-check),
the [themes](https://github.com/pulsar-edit/one-dark-ui) and the [Fuzzy Finder](https://github.com/pulsar-edit/fuzzy-finder)
are all packages that are separately maintained and all use the same APIs that
you have access to, as we'll see in great detail in [Hacking the Core](../../core-hacking/).

This means that packages can be incredibly powerful and can change everything
from the very look and feel of the entire interface to the basic operation of
even core functionality.

In order to install a new package, you can use the Install tab in the now
familiar Settings View. Open up the Settings View using
**_LNX/WIN_**: <kbd>Ctrl+,</kbd> -
**_MAC_**: <kbd>Cmd+,</kbd>
click on the "Install" tab and type your search query into
the box under Install Packages.

The packages listed here have been published to [https://web.pulsar-edit.dev](https://web.pulsar-edit.dev) <!--TODO:Change address to final URL (if this is not it)-->
which is the official registry for Pulsar packages. Searching on the Settings
View will go to the Pulsar package registry and pull in anything that matches
your search terms.

![Package install screen](@images/atom/packages-install.png "Package install screen") <!--TODO: Replace with Pulsar branded pictures-->

All of the packages will come up with an "Install" button. Clicking that will
download the package and install it. Your editor will now have the functionality
that the package provides.

### Package Settings

Once a package is installed in Pulsar, it will show up in the Settings View
under the "Packages" tab, along with all the pre-installed packages that come
with Pulsar. To filter the list in order to find one, you can type into search
box directly under the "Installed Packages" heading.

![Package settings screen](@images/atom/package-specific-settings.png "Package settings screen")

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

### Pulsar Themes

You can also find and install new themes for Pulsar from the Settings View.
These can be either UI themes or syntax themes and you can search for them from
the "Install" tab, just like searching for new packages. Make sure to press the
"Themes" toggle next to the search box.

![Theme search screen](@images/atom/themes.png "Theme search screen")

Clicking on the theme title will take you to a profile page for the theme on
pulsar-edit.dev, which often has a screenshot of the theme. This way you can see
what it looks like before installing it.

Clicking on "Install" will install the theme and make it available in the Theme
dropdowns as we saw in [Changing the Theme](../../getting-started#changing-the-theme).

![Example of the Unity UI theme with Monokai syntax theme](@images/atom/unity-theme.png "Example of the Unity UI theme with Monokai syntax theme")

### Command Line <!--TODO: Currently the binary is still apm and conversations about moving to something like pulsar ppm, this section may be totally redone in the future and may currently be incorrect-->

You can also install packages or themes from the command line using `ppm`.

::: tip Tip

Check that you have `ppm` installed by running the following command in your
terminal:

```sh
$ ppm help install
```

You should see a message print out with details about the `ppm install` command.

If you do not, see the [Installing Pulsar section](../../getting-started#installing-pulsar)
for instructions on how to install the `pulsar` and `ppm` commands for your
system.

:::

You can also install packages by using the `ppm install` command:

- `ppm install <package_name>` to install the latest version.
- `ppm install <package_name>@<package_version>` to install a specific version.

For example `ppm install minimap@4.40.0 ` installs the `4.40.0` release of the
[minimap](https://pulsar-edit.dev/packages/minimap) package.

You can also use `ppm` to find new packages to install. If you run
`ppm search`, you can search the package registry for a search term.

```sh
$ ppm search linter
> Search Results For 'linter' (30)
> ├── linter A Base Linter with Cow Powers (9863242 downloads, 4757 stars)
> ├── linter-ui-default Default UI for the Linter package (7755748 downloads, 1201 stars)
> ├── linter-eslint Lint JavaScript on the fly, using ESLint (v7 or older) (2418043 downloads, 1660 stars)
> ├── linter-jshint Linter plugin for JavaScript, using jshint (1202044 downloads, 1271 stars)
> ├── linter-gcc Lint C and C++ source files using gcc / g++ (863989 downloads, 194 stars)
> ...
> ├── linter-shellcheck Lint Bash on the fly, using shellcheck (136938 downloads, 280 stars)
> └── linter-rust Lint Rust-files, using rustc and/or cargo (132550 downloads, 91 stars)
```

You can use `ppm view` to see more information about a specific package.

```sh
$ ppm view linter
> linter
> ├── 3.4.0
> ├── https://github.com/steelbrain/linter
> ├── A Base Linter with Cow Powers
> ├── 9863242 downloads
> └── 4757 stars
>
> Run `ppm install linter` to install this package.
```
