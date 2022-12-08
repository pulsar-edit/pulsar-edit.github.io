## Hacking on the Core

You will first want to build and run Pulsar [from source](#building-pulsar).

### Running in Development Mode

Once you have a local copy of Pulsar cloned and built, you can then run Pulsar
in Development Mode. But first, if you cloned Pulsar to somewhere other than
**_LNX/MAC_**: `~/github/pulsar` -
**_WIN_**: `%USERPROFILE%\github\pulsar`
you will need to set the `ATOM_DEV_RESOURCE_PATH` environment variable to point
to the folder in which you cloned Pulsar. To run Pulsar in Dev Mode, use the
`--dev` parameter from the terminal:

```sh
$ pulsar --dev <path-to-open>
```

There are a couple benefits of running Pulsar in Dev Mode:

1. When the `ATOM_DEV_RESOURCE_PATH` environment variable is set correctly,
   Pulsar is run using the source code from your local `pulsar-edit/pulsar`
   repository. This means you don't have to rebuild after every change, just
   restart Pulsar 👍
2. Packages that exist in
   **_LNX/MAC_**: `~/.pulsar/dev/packages` -
   **_WIN_**: `%USERPROFILE%\.pulsar\dev\packages`
   are loaded instead of packages of the same name normally loaded from other
   locations. This means that you can have development versions of packages you
   use loaded but easily go back to the stable versions by launching without Dev
   Mode.
3. Packages that contain stylesheets, such as syntax themes, will have those
   stylesheets automatically reloaded by the [dev-live-reload](https://github.com/pulsar-edit/pulsar/tree/master/packages/dev-live-reload)
   package. This does not live reload JavaScript or CoffeeScript files — you'll
   need to reload the window (`window:reload`) to see changes to those.

### Running Pulsar Core Tests Locally

In order to run Pulsar Core tests from the terminal, first be certain to set the
`ATOM_DEV_RESOURCE_PATH` environment variable as mentioned above and then:

```sh
$ cd <path-to-your-local-pulsar-repo>
$ pulsar --test spec
```
