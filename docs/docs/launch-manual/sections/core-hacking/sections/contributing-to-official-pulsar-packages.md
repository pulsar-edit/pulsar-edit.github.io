## Contributing to Official Pulsar Packages

If you discover a bug or issue with an official Pulsar package then feel free to
open up the issue in that specific repository instead. When in doubt just open
the issue on the [pulsar-edit/pulsar](https://github.com/pulsar-edit/pulsar)
repository but be aware that it may get transferred to the proper
package's repository.

### Hacking on Packages

#### Cloning

The first step is creating your own clone. For some packages, you may also need
to install the [requirements necessary for building Pulsar](#building-pulsar) in
order to run `pulsar -p install`.

For example, if you want to make changes to the `tree-view` package, fork the
repo on your GitHub account, then clone it:

```sh
$ git clone https://github.com/pulsar-edit/tree-view.git
```

Next install all the dependencies:

```sh
$ cd tree-view
$ pulsar -p install
> Installing modules ✓
```

Now you can link it to development mode so when you run an Pulsar window with
`pulsar -p --dev`, you will use your fork instead of the built in package:

```sh
$ pulsar -p link -d
```

#### Running in Development Mode

Editing a package in Pulsar is a bit of a circular experience: you're using
Pulsar to modify itself. What happens if you temporarily break something? You
don't want the version of Pulsar you're using to edit to become useless in the
process. For this reason, you'll only want to load packages in
**development mode** while you are working on them. You'll perform your editing
in **stable mode**, only switching to development mode to test your changes.

To open a development mode window, use the `Application: Open Dev` command. You
can also run dev mode from the command line with `pulsar --dev`.

To load your package in development mode, create a symlink to it in
**_LNX/MAC_**: `~/.pulsar/dev/packages` -
**_WIN_**: `%USERPROFILE%\.pulsar\dev\packages`. This occurs automatically when
you clone the package with `pulsar -p develop`. You can also run
`pulsar -p link --dev` and `pulsar -p unlink --dev` from the package directory
to create and remove dev-mode symlinks.

#### Installing Dependencies

You'll want to keep dependencies up to date by running `pulsar -p update` after
pulling any upstream changes.
