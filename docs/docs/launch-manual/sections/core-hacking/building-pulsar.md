## Building Pulsar

If you want to investigate a bug, implement a new feature in Pulsar's core or
just want to tinker then you will need to build and run Pulsar from source.

The Pulsar application code can be found in the
[pulsar-edit/pulsar](https://github.com/pulsar-edit/pulsar) repository.

### Requirements and dependencies

To build Pulsar you will need to meet some basic requirements:

- Node.js 16 (recommended installation is via
  [nvm](https://github.com/nvm-sh/nvm))
- yarn (enable with `corepack enable`)
- Git
- Python
- C++ toolchain
- [Libsecret](https://wiki.gnome.org/Projects/Libsecret) development headers

For OS or distribution specific instructions see below:

::: tabs

@tab Linux

#### Ubuntu/Debian

```sh
TODO: Ubuntu instructions
```

#### Fedora/RHEL

```sh
# Install development packages

dnf --assumeyes install make gcc gcc-c++ glibc-devel git-core libsecret-devel rpmdevtools libX11-devel libxkbfile-devel nss atk gdk-pixbuf2 gtk3 mesa-dri-drivers

# Install Node16 (using `nvm` - see above) and enable corepack (for `yarn`)

nvm install 16
corepack enable
```

#### Arch

```sh
TODO: Arch instructions
```

#### OpenSUSE

```sh
# Install development packages

zypper in -t pattern devel_basis
zypper in libX11-devel libxkbfile-devel libsecret-devel

# Install Node16 (using `nvm` - see above) and enable corepack (for `yarn`)

nvm install 16
corepack enable
```

@tab macOS

```sh
TODO
```

@tab Windows

Firstly install [Visual Studio](https://visualstudio.microsoft.com/downloads/) from Microsoft.

```sh
# Install Node16 (using `nvm` - see above) and enable corepack (for `yarn`)

nvm install 16
corepack enable
```

:::

### Building and running the application

To build the application so you can start hacking on the core you will need to
download the source code to your local machine and `cd` to the pulsar directory:

```sh
git clone https://github.com/pulsar-edit/pulsar.git && cd pulsar
```

Make sure you are using the correct version of Node.js as described in the
[requirements](#requirements-and-dependencies):

```sh
node -v
```

Run the following to initialize and update the submodules:

```sh
git submodule init && git submodule update
```

Now install and build Pulsar & ppm:

```sh
yarn install
yarn build
yarn build:apm
```

Start Pulsar!

```sh
yarn start
```

These instructions will also build `ppm` (Pulsar Package Manager) but it will
require some [additional configuration](#using-ppm-pulsar-package-manager) for
use.
