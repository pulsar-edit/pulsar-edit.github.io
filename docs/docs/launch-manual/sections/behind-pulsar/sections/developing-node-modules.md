## Developing Node Modules

Pulsar contains a number of packages that are Node modules instead of Pulsar
packages. If you want to make changes to the Node modules, for instance
`atom-keymap`, you have to link them into the development environment
differently than you would a normal Pulsar package.

### Linking a Node Module Into Your Pulsar Dev Environment

Here are the steps to run a local version of a Node module within Pulsar. We're
using `atom-keymap` as an example:

::: tabs#behind-pulsar

@tab Linux

```sh
$ git clone https://github.com/pulsar-edit/atom-keymap.git
$ cd atom-keymap
$ npm install
$ npm link
$ cd <WHERE YOU CLONED PULSAR>
$ npm link atom-keymap

# This is the special step, it makes the Node module work with Pulsar's version of Node
$ pulsar -p rebuild

# If you have cloned Pulsar in a different location than ~/github/pulsar
# you need to set the following environment variable
$ export ATOM_DEV_RESOURCE_PATH=<WHERE YOU CLONED PULSAR>

# Should work!
$ pulsar --dev .
```

@tab Mac

```sh
$ git clone https://github.com/pulsar-edit/atom-keymap.git
$ cd atom-keymap
$ npm install
$ npm link
$ cd <WHERE YOU CLONED PULSAR>
$ npm link atom-keymap

# This is the special step, it makes the Node module work with Pulsar's version of Node
$ pulsar -p rebuild

# If you have cloned Pulsar in a different location than ~/github/pulsar
# you need to set the following environment variable
$ export ATOM_DEV_RESOURCE_PATH=<WHERE YOU CLONED PULSAR>

# Should work!
$ pulsar --dev .
```

@tab Windows

```sh
$ git clone https://github.com/pulsar-edit/atom-keymap.git
$ cd atom-keymap
$ npm install
$ npm link
$ cd <WHERE YOU CLONED PULSAR>
$ npm link atom-keymap

# This is the special step, it makes the Node module work with Pulsar's version of Node
$ pulsar -p rebuild

# If you have cloned Pulsar in a different location than %USERPROFILE%\github\pulsar
# you need to set the following environment variable
$ setx ATOM_DEV_RESOURCE_PATH=<WHERE YOU CLONED PULSAR>

# Should work!
$ pulsar --dev .
```

:::

After you get the Node module linked and working, every time you make a change
to the Node module's code, you will have to exit Pulsar and do the following:

```sh
$ cd <WHERE YOU CLONED THE NODE MODULE>
$ npm install
$ cd <WHERE YOU CLONED PULSAR>
$ pulsar -p rebuild
$ pulsar --dev .
```
