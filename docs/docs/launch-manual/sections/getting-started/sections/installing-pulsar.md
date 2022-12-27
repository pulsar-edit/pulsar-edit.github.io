## Installing Pulsar

<!--TODO: We need a section here somewhere about how to get pulsar onto the PATH for all systems as it seems to be broken on mac and windows. Also needed for tar.gz and appimage-->

To get started with Pulsar, we'll need to get it on your system. This section
will go over installing Pulsar on your system, as well as the basics of how
to build it from source.

Installing Pulsar should be fairly simple. Generally, you can go to
[pulsar-edit.dev](https://pulsar-edit.dev/) and you should see a download button.

Simply select your operating system (if not opened automatically) and
architecture (where necessary) and choose the type of download you require.

The button or buttons should be specific to your platform, and the
download package should be easily installable. However, let's go over
them here in a bit of detail.

::: tabs#getting-started

@tab Linux

<!--TODO: When/if we introduce other repository based downloads then we can re-instate much of this from the archived atom section-->

### Universal releases

Releases are provided in `.AppImage` and `.tar.gz` "universal" formats that
should work on most distributions.

#### AppImage

Simply run the Pulsar AppImage from your file manager or the terminal:

```sh
$ ./pulsar_1.100.0_amd64.AppImage
```

For deeper integration into the system consider using [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher).

#### tar.gz

Simply extract and run the `pulsar` binary or integrate it into your system
manually.

### Debian/Ubuntu based distributions

To install Pulsar on Debian, Ubuntu, or related distributions download the `.deb`
from either the latest release or beta/dev version from [Pulsar Downloads](/download.html).

You can install this by opening it in your file manager or via the terminal:

```sh
$ sudo apt install ./pulsar_1.100.0_amd64.deb
```

### Fedora/RHEL based distributions

To install Pulsar on Fedora, RHEL, or related distributions download the `.rpm`
from either the latest release or beta/dev version from [Pulsar Downloads](/download.html).

You can install this by opening it in your file manager or via the terminal:

```sh
# On DNF-based distributions
$ sudo dnf install -y ./pulsar_1.100.0_amd64.rpm

# On YUM-based distributions
$ sudo yum install -y ./pulsar_1.100.0_amd64.rpm
```

@tab macOS

Pulsar follows the standard macOS installation process. Grab the correct
download `.dmg` for your system from [Pulsar Downloads](/download/). Once you
have the file, you can open it to run the installer and drag the new `Pulsar`
application into your "Applications" folder.

If you prefer to install from `.zip`, this is also provided and requires you
to extract the file and drag the `Pulsar` application into your "Applications"
folder.

@tab Windows

Pulsar is available as a 64-bit Windows installer and [portable app](https://en.wikipedia.org/wiki/Portable_application)
that can be downloaded from [Pulsar Downloads](/download/).

![Pulsar on Windows](@images/atom/windows-system-settings.png)

The context menu `Open with Pulsar` in File Explorer, and the option to
make Pulsar available for file association using `Open with...`, is
controlled by the System Settings panel as seen above.

With Pulsar open, click on `File > Settings`, and then the `System` tab on
the left. Check the boxes next to `Show in file context menus`, as well
as `Show in folder context menus`. And you’re all set.

:::

### Updating Pulsar

You should consider updating Pulsar periodically for the latest improvements
to the software. Additionally, When Pulsar receives hotfixes for security
vulnerabilities you will want to update your version of Pulsar as soon as possible.

Currently Pulsar does not support automatic updates. What this means is that new
versions will have to be obtained via the [Pulsar Downloads](/download/) here on
our website. This is something on our roadmap to change as soon as possible.

<!--TODO: Auto upgrade instructions - selectively pull info from atom archive as this becomes possible-->

### Portable Mode

Pulsar stores configuration and state in a `.pulsar` directory usually located
in your home directory (`%userprofile%` on Windows). You can however run Pulsar
in portable mode where both the app and the configuration are stored together
such as on a removable storage device.

To setup Pulsar in portable mode download the relevant package and extract it to
your removable storage.

::: tabs#getting-started

@tab Linux

Download the `.appimage` or `.tar.gz` release then create a `.pulsar` directory
alongside the directory that contains the
Pulsar binary, for example:

```
/media/myusb/pulsar-1.100.0/.pulsar
/media/myusb/.pulsar
```

@tab macOS

Download the `.zip` release then create a `.pulsar` directory alongside the
Pulsar.app application, for
example:

```
/MyUSB/Pulsar.app
/MyUSB/.pulsar
```

@tab Windows

Download the `Portable` release then create a `.pulsar` directory alongside the
directory that contains pulsar.exe, for example:

```
e:\pulsar-1.100.0\pulsar.exe
e:\.pulsar
```

:::

#### Portable Notes

- The `.pulsar` directory must be writeable
- You can move an existing `.pulsar` directory to your portable device
- Pulsar can also store its Electron user data in your `.pulsar` directory -
  just create a subdirectory called `electronUserData` inside `.pulsar`
- Alternatively you can set the `ATOM_HOME` environment variable to point
  wherever you want (you can write a .sh or .cmd script to temporarily set it
  and launch it from that)
- Portable mode installations will not automatically update

### Building Pulsar from Source

The [Hacking the Core](../../core-hacking/#building-pulsar)
section of the launch manual covers instructions on how to clone and build
the source code if you prefer that option.

### Proxy and Firewall Settings

#### Behind a Firewall?

If you are behind a firewall and seeing SSL errors when installing packages
you can disable strict SSL by running:

```sh
$ pulsar -p config set strict-ssl false
```

#### Using a Proxy?

If you are using a HTTP(S) proxy you can configure `ppm` to use it by
running:

```sh
$ pulsar -p config set https-proxy <YOUR_PROXY_ADDRESS>
```

You can run `pulsar -p config get https-proxy` to verify it has been set
correctly.
