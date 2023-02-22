## Publishing a Package

Pulsar bundles a command line utility called `ppm` which we first used back in [Command Line](../../../using-pulsar/#command-line) to search for and install packages via the command line. This is invoked by using the `pulsar` command with the `-p` or `--package` option. The `pulsar -p` command can also be used to publish packages to the Pulsar Package Registry and to update them.

See more in the [PPM Docs]() section.

### Prepare Your Package

There are a few important things to double check before publishing your package:

- Your `package.json` file has a `name`, `description`, and `repository` fields.
- Your `package.json` `name` field is URL-safe — for instance, it doesn't include any emoji or other special characters.
- Your `package.json` `version` field is [Semver V2](https://semver.org/spec/v2.0.0.html) compliant.
- Your `package.json` `engines` field contains an entry for `atom` such as: `"engines": { "atom": ">=1.0.0 <2.0.0"}`.
- Your package has a `README.md` file at its root.
- Your `repository` URL in the `package.json` file is the same as the URL of your repository on GitHub.
- Your package is in a git repository that has been pushed to [GitHub](https://github.com). Follow [this guide](https://help.github.com/articles/importing-a-git-repository-using-the-command-line/) if your package isn't already on GitHub.

### Publishing Your Package

Before you publish a package, it's a good idea to check ahead of time if a
package with the same name has already been published to
[the Pulsar Package Repository](https://web.pulsar-edit.dev/packages). You can
do that by visiting `https://web.pulsar-edit.dev/packages/[your-package-name]` to
see if the package already exists. If it does, update your package's name to
something that is available before proceeding.

Now let's review what the `pulsar -p publish` command does:

1. Registers the package name on Pulsar Package Repository if it is being
   published for the first time.
2. Updates the `version` field in the `package.json` file and commits it.
3. Creates a new [Git tag](https://git-scm.com/book/en/Git-Basics-Tagging) for
   the version being published.
4. Pushes the tag and current branch up to GitHub.
5. Updates Pulsar Package Repository with the new version being published.

Now run the following commands to publish your package:

```sh
$ cd path-to-your-package
$ pulsar -p publish minor
```

If this is the first package you are publishing, the `pulsar -p publish` command may prompt you for your GitHub username and password. If you have two-factor authentication enabled, use a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) in lieu of a password. This is required for PPM to automatically manage and push tags to your package's GitHub repo and is needed only during the first time publishing. The credentials are stored securely in your [keychain](<https://en.wikipedia.org/wiki/Keychain_(software)>) once you login.

Additionally if this is your first time publishing to the Pulsar Package Registry, you also need to provide PPM an API token to access your Pulsar User Account. If you don't have a Pulsar User Account already, you'll need to make one on the [Pulsar Website](https://web.pulsar-edit.dev/login). You can learn more about creating an account on the [Pulsar Website Docs](). Once you have successfully created an account copy the API token available on your user page and use `pulsar -p --login <YOUR_PULSAR_API_TOKEN>` to give PPM your API Key. Again just like your GitHub credentials this API Key is stored securely in your [keychain](<https://en.wikipedia.org/wiki/Keychain_(software)>).

Now your package is published and available on the Pulsar Package Registry. Head on over to `https://web.pulsar-edit.dev/packages/[your-package-name]` to see your package's page.

With `pulsar -p publish`, you can bump the version and publish by using

```sh
$ pulsar -p publish <version-type>
```

where `version-type` can be `major`, `minor`, and `patch`.

- **MAJOR** version when you make incompatible API changes.
- **MINOR** version when you add functionality in a backwards compatible manner.
- **PATCH** version when you make backwards compatible bug fixes.

For instance, to bump a package from v1.**0**.0 to v1.**1**.0:

```sh
$ pulsar -p publish minor
```

Check out [semantic versioning](https://semver.org/) to learn more about best practices for versioning your package releases.

You can also run `pulsar -p help publish` to see all the available options and `pulsar -p help` to see all the other available commands. Or check our the [PPM Docs]() to learn more about using `ppm`.
