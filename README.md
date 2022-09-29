# Pulsar Edit

This is the website repo for Pulsar Edit. It contains our documentation and other information users might be looking for. Visit the [Website](https://pulsar-edit.github.io).


## Guide

### Recommended Tools:
- [Toolbox](https://containertoolbx.org/): We recommend using this tool to aide in development as it helps with containerization.
  - On Linux, Toolbox should be available to install via your native package manager. Alternatively, Toolbox can also be installed by utilizing [Brew](https://brew.sh/).
  - On MacOS, Brew is also available. However, if Brew is not an option we recommend downloading Toolbox directly from the [official website](https://containertoolbx.org/).
  - Yarn (don't set this up just yet, follow the guide below)
  
### Setup
- Clone the repo! You can do this by using the following command:
`git clone https://github.com/pulsar-edit/pulsar-edit.github.io.git pulsar-site`
This will create a folder called `pulsar-site` at the current location of your terminal
- Once you've installed Toolbox, create a toolbox container using the following command `toolbox create pulsar-site` where `pulsar-site` is the container's name.
- After the container has been built, you can begin using it by entering `toolbox enter pulsar-site` into your terminal. If you used a different name when creating the container, substitute `pulsar-site` with that name.
- 
This is the website repo for Pulsar Edit. It contains our documenation and other information users might be looking for. Visit the [Website](https://pulsar-edit.github.io).

## Development

The package manifest provides several scripts to help during development:

### `dev`

Starts a watch task that will rebuild VuePress whenever a change has been made to the included Markdown and JavaScript files. Additionally, it launches the development server to test the results in the browser.

### `build`

Creates an optimized production build.

### `format`

Runs [Prettier](https://prettier.io) over all Markdown files included in the repository to ensure consistent formatting.

**Note:** This task will run automatically on every commit, so it can be ignored in most cases

### `lint`

Lints all Markdown files in the repository.

**Note:** This task will run automatically on every commit, so it can be ignored in most cases
