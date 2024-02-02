// .vuepress/theme/index.js
import { getDirname, path } from "@vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";

const __dirname = getDirname(import.meta.url);

export default (options) => ({
  name: "vuepress-theme-local",

  extends: hopeTheme(options),

  alias: {
    // https://vuepress-theme-hope.github.io/v2/cookbook/advanced/replace.html#replace-components
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "../components/HomePage.vue"
    ),
  },
});
