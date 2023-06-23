## Configuration files

Nearly everything regarding the configuration of the website itself is
controlled via the files found in the `/docs/.vuepress` directory.

Currently we have three main configuration files.

### `config.js`

This is the main configuration file for the website. This controls everything
from the available settings, additional VuePress plugins, website description
and various other elements to control various settings and plugins.

For a full reference you can look at the documentation for [VuePress](https://v2.vuepress.vuejs.org/reference/config.html)
and the [Hope Theme](https://theme-hope.vuejs.pressconfig/).

This file is broken down to to keep it tidy, the below files are imported to
`config.js` to extend the configuration file without making it unwieldy.

### `navbar.js`

This controls the layout for the links in the top middle of the page and is
always displayed.

Items that go here are ones that we always want to be shown and should always
be available for quick navigation.

Each object can have a number of different values. The main ones we use are:

- `text`: This sets the text for the label.
- `icon`: Used to prefix an icon to the item. The theme supports the free
  [FontAwesome](https://fontawesome.com/) font natively. To add an icon you need
  to specify its name without the first `fa-` e.g. [fa-house](https://fontawesome.com/icons/house?s=solid&f=classic)
  would be specified as `solid fa-house`.
- `link`: This controls where the link will actually take you. This can be
  a relative reference internal to the website or can be a URL to an external
  site.
- `children`: Allows you to specify an array of child objects which will appear
  as a dropdown on mouseover. Use of this disables the `link` value. Each child
  can be defined as a full object as described here or can simply be a relative
  link from which the text will be set by the YAML title.

For a full reference you can look at the documentation for [VuePress](https://v2.vuepress.vuejs.org/reference/default-theme/config.html#navbar)
and the [Hope Theme](https://theme-hope.vuejs.pressconfig/theme/layout.html#navbar-config).

### `sidebar.js`

This control what is displayed in the sidebar on the left of the website. It is
not displayed globally, only on directories which are set within the sidebar,
currently we only have `docs` configured.

Like `navbar.js` each sidebare item is configured as an object with a number of
different values.

- `text`: This sets the text for the label.
- `link`: Controls the relative link for navigating the documents within the
  section
- `icon`: Used to prefix an icon to the item. The theme supports the free
  [FontAwesome](https://fontawesome.com/) font natively. To add an icon you need
  to specify its name without the first `fa-` e.g. [fa-house](https://fontawesome.com/icons/house?s=solid&f=classic)
  would be specified as `solid fa-house`.
- `prefix`: This adds a file path prefix to the item so its children do not
  need to specify the full path.
- `collapsable`: (sic) Controls whether the item can be collapsed. _Note_: This
  a breaking change on a future version of the Hope Theme so will need to be
  renamed `collapsible` when updated, see: [Issue](https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/2377).
- `children`: Takes an array of objects configured as above. Can also be set as
  a simple relative link in which case the title will be the YAML title of the
  document it links to.

For a full reference you can look at the documentation for [VuePress](https://v2.vuepress.vuejs.org/reference/default-theme/config.html#sidebar)
and the [Hope Theme](https://theme-hope.vuejs.pressconfig/theme/layout.html#sidebar-config).

### Theme

Within the `styles/` directory you will find the .scss file for controlling
various aspects of the website's theme.

**_TODO_**: This will be updated when we actually modify these files extensively.
