# Pulsar Edit

This is the website repo for Pulsar Edit. It contains our documenation and other information users might be looking for. Visit the [Website](https://pulsar-edit.github.io).

## Development

The package manifest provides several scripts to help during development:

### `dev`

Starts a watch task that will rebuild VuePress whenever a change has been made to the included Markdown and JavaScript fikes. Additionally, it launches the development server to test the results in the browser.

### `docs:build`

Creates an optimized production build.

### `format`

Runs [Prettier](https://prettier.io) over all Markdown files included in the repository to ensure consistent formatting.

**Note:** This task will run automatically on every commit, so it can be ignored in most cases

### `lint`

Lints all Markdown files in the repository.

**Note:** This task will run automatically on every commit, so it can be ignored in most cases
