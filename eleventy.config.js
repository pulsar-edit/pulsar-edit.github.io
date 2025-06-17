const pulsarEleventyConfig = require("11ty-config");
const { getMdLibrary } = pulsarEleventyConfig;
const slugify = require('slugify');
const get = require('just-safe-get');

module.exports = async (eleventyConfig) => {
  pulsarEleventyConfig(eleventyConfig);

  const MD_LIBRARY = getMdLibrary();

  MD_LIBRARY.use(
    require("markdown-it-anchor")
  );

  // const fontAwesomePlugin = await import("@11ty/font-awesome").then(fa => fa.default); // ESM export only
  // eleventyConfig.addPlugin(fontAwesomePlugin);

  globalThis.helpers = {
    // Auto-generates slugs for headings. (This is done automatically for
    // Markdown content, so use this when you're writing headings manually in
    // EJS.)
    //
    // Accepts an optional second parameter: a `Set` that will hold all the
    // slugs that have already been used. Instantiate a `Set` at the page level
    // and pass it into `helpers.slugify` so that it keeps track of duplicates
    // automatically.
    slugify (title, used = null) {
      let value = slugify(title, { lower: true })
      if (used) {
        // Make sure we haven't used this slug already on this page. If we
        // have, increment a number until we find an unused slug.
        let i = 2;
        let originalValue = value;
        while (used.has(value)) {
          value = `${originalValue}-${i}`;
          i++;
        }
        used.add(value);
      }
      return value;
    },

    // Determines whether a section of download info is a dead-end (i.e., has
    // no leaves with download links).
    isLeaf (item) {
      if (item.url) return false
      if (!item.options || Object.keys(item.options).length === 0) return true
      if (Object.values(item.options).every(opt => helpers.isLeaf(opt))) return true
      return false
    },

    renderMarkdown (str) {
      return MD_LIBRARY.render(str);
    },

    // Given a message and a list of "includes," detects if the message is
    // plain text (in which case it is returned unmodified) or is the special
    // "include" syntax — and, if the latter, returns the correct message for
    // the key.
    //
    // Include syntax looks like %foo.bar% — and will attempt to look up a key
    // at the `foo.bar` position in the `includes` object.
    //
    // If the key is not found, the message key itself (minus the percent signs
    // on either side) will be returned.
    dereference(message, includes) {
      if (!message.startsWith('%') || !message.endsWith('%')) {
        return message;
      }
      let messageKey = message.replace(/^%|%$/g, '');
      return get(includes, messageKey, messageKey);
    }
  };

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
