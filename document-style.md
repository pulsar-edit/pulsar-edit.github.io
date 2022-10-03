# Documentation style & reusable components

The documentation for the project should maintain a consistent style where
possible. This covers a number of aspects such as writing style, naming
conventions, folder structure, links etc.

All docs are currently in American English (en-US) but localization is planned.

## Structure

The main structure for documentation can be seen in `docs/docs`.
There are a number of "root" sections:
- `atom-archive` - For "as is" archived Atom documentation
- `launch-manual` - For the current main Pulsar documentation
- `packages` - Currently holds wiki info from the atom package repos
- `resources` - For other referenced docs

Within each section is an `index.md` which will usually contain info about each
sub-section as well as links to them. These correspond to the second level 
items on the sidebar.

Inside `sections` are the sub-sections which group more specific topics. These
also have an `index.md` which corresponds to the third level item on the
sidebar. 
This file is displayed on the website as a single long documenent but is
actually created from a number of `@include()` lines which reference individual
sections within the next `sections` directory.
This file also contains the frontmatter for defining the title, language and
description of the file and should also be the first level heading for the page.
Here is also where you can place a container such as `Under Construction` to
apply to the entire page.

Inside the next `sections` directory should be the actual content of the
document. Each section should start with a second level header and should
not contain any frontmatter. 

## Links

Internal links can just be to the header (e.g.[Structure](#structure)), this
to all sections included on the parent `index.md` so care should be made to not
create any duplicate headers.

All other links should be relative but do not need to reference the index file
itself (e.g.[Installing](../getting-started#installing)) will find the heading
`#installing` within the index file in the `getting-started` directory above.

Images should be added to [pulsar-assets](https://github.com/pulsar-edit/pulsar-assets)
and referenced from the package imported from it. This is done via an alias on
the `.vuepress/config.js` file which adds most of the path for you:
`'@images': path.resolve(__dirname, '../../node_modules/pulsar-assets/images')`  
so the link to your image would just be ![myImage](@images/pulsar/myImage.png "My Image").

## Naming

The name of the application is `Pulsar` and should be capitalized as such.
Whilst the website and GitHub org name is `Pulsar-Edit`, this should not be used
within documentation outside of links to the GitHub org or website.

Operating systems should be named as such:

- `Linux` - All GNU/Linux distributions
- `macOS` - Apple's current operating system family
- `Windows` - Microsoft Windows family of operating systems

This is also the order they should appear in within the tab switcher.

When using the `#tabs` switcher they should be in this order.
When referencing them inline then they should be prefixed by their FA6 icon and
separated by a `-` <!--TODO: add FA6 icon examples-->
To keep order consistent it should be Linux -> macOS -> Windows. If instructions
common to two then it should either be Linux/macOS, Linux/Windows ->
macOS/Windows

For Linux we may sometimes need to reference particular distros or families of
distributions. We currently use:
- `Ubuntu/Debian` for all distributions based on Debian or Ubuntu
- `Fedora/RHEL` for all distrububtions based on Fedora Linux & Red Hat
                Red Hat Enterprise Linux. This includes AlmaLinux, CentOS, Rocky
                Linux etc.
- `Arch` - for all Arch based distributions such as Manjaro, Garuda, ArcoLinux
           etc.
- `OpenSUSE` - for all OpenSUSE based distributions such as GeckoLinux

We may need to add more in the future but generally users of less popular or 
more technical distributions such as Gentoo or NixOS understand how to
adapt to their OS from the instructions above.

## Containers

Where you want to display an `info`, `warning` or tab/code switcher in the
document you should use a container with the `:::` syntax.

e.g. 
```
::: tabs#filename

@tab Linux

Lorem ipsum dolor sit amet...

@tab macOS

Lorem ipsum dolor sit amet...

@tab Windows

Lorem ipsum dolor sit amet...

:::
```

or
```
::: tip My Helpful Tip

You might want to do X to get Y

:::
```

You can also find a list of currently maintained preformatted containers for
various purposes at [pulsar-edit.github.io/common-text-blocks.md](https://github.com/pulsar-edit/pulsar-edit.github.io/blob/main/common-text-blocks.md).

See [VuePress Hope documentation](https://vuepress-theme-hope.github.io/v2/guide/get-started/markdown.html#theme-enhancement)

## Writing style

TODO: Needs consensus
