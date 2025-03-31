## Publishing

Pulsar bundles a command line utility called `ppm` which we first used back in
[Command Line](../../using-pulsar/#command-line) to search for and install
packages via the command line. This is invoked by using the `pulsar` command
with the `-p` or `--package` option. The `pulsar -p` command can also be used to
publish Pulsar packages to the public registry and update them.

See more in [Using PPM](#using-ppm).

### Prepare Your Package

There are a few things you should double check before publishing:

- Your package has a `README.md` file at the root.
- Your `package.json` file:
  - has `name` "URL Safe" field, as in it's not an emoji or special character.
  - has `description` field.
  - has `repository` field containing the URL of your repository.
  - has `version` field with a value of `"0.0.0"` before the first release, in
    any case it needs to be [Semver V2](https://semver.org/spec/v2.0.0.html)
    compliant.
  - has `engine` field that contains an entry for `atom` such as:
    `"engines": {"atom": ">=1.0.0 <2.0.0"}`.
- Your package is in a Git repository that has been pushed to
  [GitHub](https://github.com). Follow [this guide](https://help.github.com/articles/importing-a-git-repository-using-the-command-line/)
  if your package isn't already on GitHub.

### Publish Your Package

Before you publish a package it is a good idea to check ahead of time if a
package with the same name has already been published to
[the Pulsar Package Repository](https://web.pulsar-edit.dev/packages). You can
do that by visiting `https://web.pulsar-edit.dev/packages/your-package-name` to
see if the package already exists. If it does, update your package's name to
something that is available before proceeding.

Now, run the following commands from your package folder to publish it:

```sh
$ pulsar -p login
$ pulsar -p publish minor
```

`pulsar -p login` will let you create and set an API token in your keychain to
permit interacting with GitHub API

`pulsar -p publish minor` command does:

1. Registers the package name on Pulsar Package Repository if it is being
   published for the first time.
2. Updates the `version` field in the `package.json` file applying the `minor`
   version increase (details below) and commits it.
3. Creates a new [Git tag](https://git-scm.com/book/en/Git-Basics-Tagging) for
   the version being published.
4. Pushes the tag and current branch up to GitHub.
5. Updates Pulsar Package Repository with the new version being published.

Your package is now published and available on Pulsar Package Repository. Head
on over to `https://web.pulsar-edit.dev/packages/your-package-name` to see your
package's page.

#### Version increase type

With `pulsar -p publish`, you can bump the version and publish by using

```sh
$ pulsar -p publish <type>
```

where `type` can be `major`, `minor` and `patch`.

- **major** version when you make incompatible API changes
  - e.g. version `1.0.0` will become `2.0.0`
- **minor** version when you add functionality in a backwards compatible manner
  - e.g. version `1.0.0` will become `1.1.0`
- **patch** version when you make backwards compatible bug fixes
  - e.g. version `1.0.0` will become `1.0.1`

Check out [semantic versioning](https://semver.org/) to learn more about best
practices for versioning your package releases.

You can also run `pulsar -p help publish` to see all the available options and
`pulsar -p help` to see all the other available commands.
