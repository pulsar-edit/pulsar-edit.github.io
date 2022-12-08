## Creating a Fork of a Core Package

Several of Pulsar's core packages are maintained in the
[`packages` directory of the pulsar-edit/pulsar repository](https://github.com/pulsar-edit/pulsar/tree/master/packages).
If you would like to use one of these packages as a starting point for your own
package, please follow the steps below.

::: tip Tip

In most cases, we recommend [generating a brand new package](#package-generator)
or a [brand new theme](#creating-a-syntax-theme) as the starting point for your
creation. The guide below applies only to situations where you want to create a
package that closely resembles a core Pulsar package.

:::

### Creating Your New Package

<!--Could this be made better with GH CLI?-->

For the sake of this guide, let's assume that you want to start with the current
code in the [one-light-ui](https://github.com/pulsar-edit/pulsar/tree/master/packages/one-light-ui)
package, make some customizations to it, and publish your new package under the
name "one-light-ui-plus".

1. Download the [current contents of the pulsar-edit/pulsar repository as a zip file](https://github.com/pulsar-edit/pulsar/archive/master.zip)

2. Unzip the file to a temporary location (for example
   **_LNX/MAC_**: `/tmp/pulsar` -
   **_WIN_**: `C:\TEMP\pulsar`)

3. Copy the contents of the desired package into a working directory for your
   fork

::: tabs#core-hacking

@tab Linux

```sh
$ cp -R /tmp/pulsar/packages/one-light-ui ~/src/one-light-ui-plus
$ cd ~/src/one-light-ui-plus
```

@tab macOS

```sh
$ cp -R /tmp/pulsar/packages/one-light-ui ~/src/one-light-ui-plus
$ cd ~/src/one-light-ui-plus

```

@tab Windows

```sh
$ xcopy C:\TEMP\pulsar\packages\one-light-ui C:\src\one-light-ui-plus /E /H /K
$ cd C:\src\one-light-ui-plus
```

:::

4. Create a local repository and commit the initial contents

```sh
$ git init
$ git commit -am "Import core Pulsar package"
```

5. Update the `name` property in `package.json` to give your package a unique
   name

6. Make the other customizations that you have in mind

7. Commit your changes

```sh
$ git commit -am "Apply initial customizations"
```

8. [Create a public repository on github.com](https://help.github.com/articles/create-a-repo/)
   for your new package

9. Follow the instructions in the github.com UI to push your code to your new
   online repository

10. Follow the steps in the [Publishing guide](#publishing) to publish your new
    package

### Merging Upstream Changes into Your Package

The code in the original package will continue to evolve over time, either to
fix bugs or to add new enhancements. You may want to incorporate some or all of
those updates into your package. To do so, you can follow [these steps](#maintaining-a-fork-of-a-core-package)
for merging upstream changes into your package.
