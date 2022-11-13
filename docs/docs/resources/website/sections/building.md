## Building the website

### Prerequisites

- Node.js - at least version 16 (recommended installation via [nvm](https://github.com/nvm-sh/nvm)).
- git
- [pnpm](https://pnpm.io/) - simply run `corepack enable`

### Clone the repository and install

The website repository is [https://github.com/pulsar-edit/pulsar-edit.github.io](https://github.com/pulsar-edit/pulsar-edit.github.io).
Other assets are stored on other repositories but these will be downloaded
automatically.

```sh
git clone https://github.com/pulsar-edit/pulsar-edit.github.io

cd pulsar-edit.github.io

pnpm install
```

### Running the website

Once installed there are a number of scripts available to help you develop
and build the site. Just prefix each command with `pnpm`. e,g, `pnpm dev`.

#### `dev`

Starts a watch task that will rebuild VuePress whenever a change has been made
to the included Markdown and JavaScript files. Additionally, it launches the
development server to test the results in the browser.

#### `build`

Creates an optimized production build.

#### `format`

Runs [Prettier](https://prettier.io) over all Markdown files included in the
repository to ensure consistent formatting.

**Note:** This task will run automatically on every commit, so it can be ignored
in most cases

#### `lint`

Lints all Markdown files in the repository.

**Note:** This task will run automatically on every commit, so it can be ignored
in most cases

### Notes

Whilst `dev` does run a watch task, not everything will be updated and some
changes will require you to shut down the server and start it again. For example
adding `@include` files to another file will not rebuild automatically.

If you wish to add new files from another repository via alias or `@include`
then you will need to run `pnpm update` to get the latest version of the
repository - the `pnpm-lock.yml` file will also be updated and must be part of
any commit.
