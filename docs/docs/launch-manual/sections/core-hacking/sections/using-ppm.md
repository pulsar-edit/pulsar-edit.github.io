## Using ppm (Pulsar Package Manager)

`ppm` is used for installing and managing Pulsar's packages in much the same way
that `apm` did on Atom. However at this point in the project there are a few
hoops you have to jump through to get it to work correctly.

After following the build instructions you will find the `ppm` binary at
`pulsar/ppm/bin/apm` but by default Pulsar will be looking in the wrong place.
There will also be issues relating to the Electron version which will prevent
install from the package backend.
To solve this a couple of environmental variables need to be exported.

::: tabs

@tab Linux

```sh
export ATOM_HOME=/home/<user>/.pulsar
export APM_PATH=/ppm/bin/apm
export ATOM_ELECTRON_VERSION=12.2.3
```

@tab macOS

```sh
TODO
```

@tab Windows

```sh
set ATOM_HOME=C:\Users\<user>\.pulsar
set APM_PATH=\ppm\bin\apm
```

:::

You can now use the binary to link or install packages.

For example to install the `ide-java` package from source:

```sh
# clone the repository and cd into it
git clone https://github.com/pulsar-edit/ide-java
cd ide-java

# from the directory where you are running pulsar source code
<pulsar source>/ppm/bin/apm link
```
