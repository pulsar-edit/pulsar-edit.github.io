## File Organization

One of the most important things to take note of when adding new documentation
is where it should go within the website layout.

The generalized overall layout of the website looks like this:

```
docs
├── root level .md files
└── section folder
    ├── sections
    └── index.md
```

The general idea is that for files that can stand by themselves (for example
the `About Us` page, `Repositories` etc.) they exist at the `docs/` "root"
level.

For anything that is more complex it needs to have a section directory named
appropriately, an `index.md` file within it and a `sections` directory.

### `index.md`

This index file needs to have a YAML frontmatter to define, at a minimum, the
title of the document. This is displayed as an `H1` header for the page (note:
subsequent `H1` headers will be ignored so always start at `H2`).

The rest of this index file will be used to display the actual content you want
to show. This is done in a number of ways.

First of all you can just include standard markdown. This is often used for
introducing the section or adding one of our reusable components (e.g. a
`danger` container).

The rest of the file should consist of `@includes` which take data from
other folders on the website and integrates it automatically. Usually this will
be the `sections` files which will be covered next.

e.g.

```
@include(sections/file-organization.md)
```

However you can also use `@include` to feature files from a different section of
the website or even files from outside the main site. We use this to include
files which are maintained on the organization [.github repo](https://github.com/pulsar-edit/.github)
for org-level documents.

This is done by having a value defined on the `config.js` file which will
provide an alias for us to use:

```js
if (file.startsWith("@orgdocs")) {
	return file.replace(
		"@orgdocs",
		path.resolve(__dirname, "../../node_modules/.github/")
	);
}
```

This allows us to include org-level docs by using this special alias.

e.g.

```
@include(@orgdocs/TOOLING.md)
```

### Sections

The `sections` directory is where we include the rest of the documents broken
down by section. These should be self contained files which can be used alone
but are designed to be included on the section page. This approach allows us
flexibility with ordering as well as including these files in other places
without needing to duplicate the material.

Files here can be navigated to directly on the website but should not be linked
to directly.

These files shoud _not_ have any YAML frontmatter as they will be included
and shown as text.

### Assets

Assets should be uploaded to the [.github repo](https://github.com/pulsar-edit/.github/tree/main/images/)
repository so they can be used org-wide.

An alias for this exists in `config.js` to access files from this repository.

```js
alias: {
  '@images': path.resolve(__dirname, '../../node_modules/.github/images')
},
```

So to include an image you simply need to use the standard markdown image link
along with the alias:

e.g.

```md
![MyImage](@images/path/to/image.png)
```
