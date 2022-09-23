## Installing Pulsar

To get started with Pulsar, we'll need to get it on your system. This section
will go over installing Pulsar on your system, as well as the basics of how
to build it from source.

Installing Pulsar should be fairly simple. Generally, you can go to
https://atom.io and you should see a download button as shown here:

::: tabs

@tab Linux
![Download buttons on https://atom.io](@images/atom/linux-downloads.png "Download buttons on https://atom.io")

@tab Mac
![Download buttons on https://atom.io](@images/atom/mac-downloads.png "Download buttons on https://atom.io")

@tab Windows
![Download buttons on https://atom.io](@images/atom/windows-downloads.png "Download buttons on https://atom.io")

:::

The button or buttons should be specific to your platform, and the
download package should be easily installable. However, let's go over
them here in a bit of detail.

#### Installing Pulsar on Linux

You can install Pulsar on Linux using your distribution's package manager
by configuring it to use one of our official package repositories. This
will also enable you to update Pulsar when new releases are published.

::: tabs#Linux

@tab Debian and Ubuntu
To install Pulsar on Debian, Ubuntu, or related distributions, add our
official package repository to your system by running the following
commands:

```command-line
$ wget -qO - https://packagecloud.io/PulsarEditor/atom/gpgkey | sudo apt-
key add -
$ sudo sh -c 'echo "deb [arch=amd64] https://packagecloud.io/PulsarEditor/atom/any/ any main" > /etc/apt/sources.list.d/atom.list'
$ sudo apt-get update
```

You can now install Pulsar using `apt-get` (or `apt` on Ubuntu):

```command-line
# Install Pulsar
$ sudo apt-get install atom

# Install Pulsar Beta
$ sudo apt-get install atom-beta
```

Alternatively, you can download the
[Pulsar .deb package](https://atom.io/download/deb)
and install it directly:

```command-line
# Install Pulsar
$ sudo apt install ./atom-amd64.deb
```

@tab Red Hat and CentOS (YUM), or Fedora (DNF)
To install Pulsar on CentOS, Oracle Linux, Red Hat Enterprise Linux,
Scientific Linux, Fedora, or related distributions that use the YUM or
DNF package managers, add our official package repository to your system
by running the following commands:

```command-line
$ sudo rpm --import https://packagecloud.io/PulsarEditor/atom/gpgkey
$ sudo sh -c 'echo -e "[Pulsar]\nname=Pulsar Editor\nbaseurl=
https://packagecloud.io/PulsarEditor/atom/el/7/
\$basearch\nenabled=1\ngpgcheck=0\nrepo_gpgcheck=1\ngpgkey=
https://packagecloud.io/PulsarEditor/atom/gpgkey" > /etc/yum.repos.d/
atom.repo'
```

You can now install Pulsar using `dnf` (or `yum` depending on your distribution):

```command-line
# Install Pulsar
$ sudo dnf install atom

# Install Pulsar Beta
$ sudo dnf install atom-beta
```

Alternatively, you can download the
[Pulsar .rpm package](https://atom.io/download/rpm) and install it directly:

```command-line
# On YUM-based distributions
$ sudo yum install -y atom.x86_64.rpm

# On DNF-based distributions
$ sudo dnf install -y atom.x86_64.rpm
```

@tab SUSE (zypp)

To install Pulsar on openSUSE or other distributions that use the Zypp
package manager, add our official package repository to your system by
running the following commands:

```command-line
$ sudo sh -c 'echo -e "[Pulsar]\nname=Pulsar Editor\nbaseurl=
https://packagecloud.io/PulsarEditor/atom/el/7/\$basearch\nenabled=1\ntype=rpm-
md\ngpgcheck=0\nrepo_gpgcheck=1\
ngpgkey=https://packagecloud.io/PulsarEditor/atom/gpgkey" >
/etc/zypp/repos.d/atom.repo'
$ sudo zypper --gpg-auto-import-keys refresh
```

You can now install Pulsar using `zypper`:

```command-line
# Install Pulsar
$ sudo zypper install atom

# Install Pulsar Beta
$ sudo zypper install atom-beta
```

Alternatively, you can download the
[Pulsar .rpm package](https://atom.io/download/rpm) and install it directly:

```command-line
$ sudo zypper in -y atom.x86_64.rpm
```

@tab Mac

Pulsar follows the standard Mac zip installation process. You can either
press the download button from the https://atom.io site or you can go to
the [Pulsar releases page](https://github.com/atom/atom/releases/latest) to
download the `atom-mac.zip` file explicitly. Once you have that file, you
can click on it to extract the application and then drag the new `Pulsar`
application into your "Applications" folder.

When you first open Pulsar, it will try to install the `atom` and `apm`
commands for use in the terminal. In some cases, Pulsar might not be able
to install these commands because it needs an administrator password. To
check if Pulsar was able to install the `atom` command, for example, open a
terminal window and type `which atom`. If the `atom` command has been
installed, you'll see something like this:

```command-line
$ which atom
> /usr/local/bin/atom
$
```

If the `atom` command wasn't installed, the `which` command won't return
anything:

```command-line
$ which atom
$
```

To install the `atom` and `apm` commands, run "Window: Install Shell
Commands" from the
[Command Palette](/getting-started/sections/atom-basics#command-palette),
which will prompt you for an administrator password.

@tab Windows
Pulsar is available with Windows installers that can be downloaded from https://atom.io or from the
[Pulsar releases page](https://github.com/atom/atom/releases/latest). Use
`PulsarSetup.exe` for 32-bit systems and `PulsarSetup-x64.exe` for 64-bit
systems. This setup program will install Pulsar, add the `atom` and `apm`
commands to your `PATH`, and create shortcuts on the desktop and in the
start menu.

![Pulsar on Windows](@images/atom/windows-system-settings.png)

The context menu `Open with Pulsar` in File Explorer, and the option to
make Pulsar available for file association using `Open with...`, is
controlled by the System Settings panel as seen above.

With Pulsar open, click on `File > Settings`, and then the `System` tab on
the left. Check the boxes next to `Show in file context menus`, as well
as `Show in folder context menus`. And you’re all set.

:::

#### Updating Pulsar

You should consider updating Pulsar periodically for the latest improvements
to the software. Additionally, When Pulsar receives hotfixes for security
vulnerabilities you will want to update your version of Pulsar as soon as possible.

<CodeGroup>
  <CodeGroupItem title="Linux">
  If you are using Pulsar's official package repositories, use your
  distribution's package manager to update Pulsar.  Otherwise, you will need
  to manually download and install the latest `.rpm` or `.deb` package from
  https://atom.io. For more details, see
  [Installing Pulsar on Linux.](https://flight-manual.atom.io/getting-started/sections/installing-atom/#installing-atom-on-linux)
  </CodeGroupItem>
  <CodeGroupItem title="Mac">
  "Automatically Update" is enabled by default in Core Settings of the
  [Settings View](https://flight-manual.atom.io/getting-started/sections/atom-basics/#settings-and-preferences),
  which will allow Pulsar to check for updates automatically. If you disable
  this setting you can update Pulsar manually.

To perform a manual update:

- Click on the `Pulsar > Check for Update` menu item in the menu bar.
- Search for `Application: About` in the
  [Command Palette](https://flight-manual.atom.io/getting-started/sections/atom-basics/#command-palette) and click the `Check now` button.

Pulsar will begin to update if an update is available.
</CodeGroupItem>
<CodeGroupItem title="Windows">
"Automatically Update" is enabled by default in Core Settings of the
[Settings View](https://flight-manual.atom.io/getting-started/sections/atom-basics/#settings-and-preferences),
which will allow Pulsar to check for updates automatically. If you disable
this setting you can update Pulsar manually.

To perform a manual update:

- Click on the `Help > Check for Update` menu item in the menu bar.
- Search for `Application: About` in the
  [Command Palette](https://flight-manual.atom.io/getting-started/sections/atom-basics/#command-palette)
  and click the `Check now` button.

Pulsar will begin to update if an update is available.
</CodeGroupItem>
</CodeGroup>

#### Portable Mode

Pulsar stores configuration and state in a `.atom` directory usually located
in your home directory <span class="platform-windows">(`%userprofile%` on
Windows)</span>. You can however run Pulsar in portable mode where both the
app and the configuration are stored together such as on a removable
storage device.

To setup Pulsar in portable mode download the
[zip/tar.gz package for your system](https://github.com/atom/atom/releases/latest)
and extract it to your removable storage.

<CodeGroup>
  <CodeGroupItem title="Linux">
  Then create a `.atom` directory alongside the directory that contains the
  Pulsar binary, for example:

```
/media/myusb/atom-1.14/atom
/media/myusb/.atom
```

  </CodeGroupItem>
  <CodeGroupItem title="Mac">
  Then create a `.atom` directory alongside the Pulsar.app application, for
  example:

```
/MyUSB/Pulsar.app
/MyUSB/.atom
```

  </CodeGroupItem>
  <CodeGroupItem title="Windows">
  Then create a `.atom` directory alongside the directory that contains
  atom.exe, for example:

```
e:\atom-1.14\atom.exe
e:\.atom
```

  </CodeGroupItem>
</CodeGroup>

##### Portable Notes

- The `.atom` directory must be writeable
- You can move an existing `.atom` directory to your portable device
- Pulsar can also store its Electron user data in your `.atom` directory -
  just create a subdirectory called `electronUserData` inside `.atom`
- Alternatively you can set the `ATOM_HOME` environment variable to point
  wherever you want (you can write a .sh or .cmd script to temporarily set it
  and launch it from that)
- Portable mode installations will not automatically update

#### Building Pulsar from Source

The [Hacking on Pulsar Core](/hacking-atom/sections/hacking-on-atom-core/)
section of the flight manual covers instructions on how to clone and build
the source code if you prefer that option.

#### Proxy and Firewall Settings

##### Behind a Firewall?

If you are behind a firewall and seeing SSL errors when installing packages
you can disable strict SSL by running:

```command-line
$ apm config set strict-ssl false
```

##### Using a Proxy?

If you are using a HTTP(S) proxy you can configure `apm` to use it by
running:

```command-line
$ apm config set https-proxy <em>YOUR_PROXY_ADDRESS</em>
```

You can run `apm config get https-proxy` to verify it has been set
correctly.
