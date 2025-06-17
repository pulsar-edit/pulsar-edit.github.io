const pulsarEleventyConfig = require("11ty-config");

module.exports = async (eleventyConfig) => {
  pulsarEleventyConfig(eleventyConfig);


  // return config
  return {
    markdownTemplateEngine: false,
    // ^^ We can't parse md in liquidjs or njk, because our docs seem to have
    // naturally occurring instances of both of their delimiters.
    // So for now we will just disable any templating on markdown
    dir: {
      input: "docs",
      output: "_dist",
      includes: "less",
      // Below values are relative to the `./docs` folder
      layouts: "../layouts",
      data: "../data"
    }
  };
};
