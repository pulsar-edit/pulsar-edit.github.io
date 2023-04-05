import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { hopeTheme } from "vuepress-theme-hope";

const __dirname = getDirname(import.meta.url);

import { enNavbar } from "./navbar.js";
import { enSidebar } from "./sidebar.js";
import { footer } from "./footer.js";

export default defineUserConfig({
  lang: "en-US",
  title: "Pulsar",
  description: "A Community-led Hyper-Hackable Text Editor",

  head: [["script", { src: "/download-preselect.js" }]],

  markdown: {
    headers: {
      level: [2, 3, 4],
    },
  },

  plugins: [
    searchProPlugin({
      indexContent: true,
    }),
  ],

  theme: hopeTheme({
    hostname: "https://pulsar-edit.dev",
    iconAssets: "fontawesome-with-brands",
    repo: "https://github.com/pulsar-edit",
    docsRepo: "https://github.com/pulsar-edit/pulsar-edit.github.io",
    docsDir: "docs",

    logo: "/logo-name-navbar-light.svg",
    logoDark: "/logo-name-navbar-dark.svg",

    footer: footer,
    displayFooter: true,
    copyright: false,

    navbar: enNavbar,
    sidebar: enSidebar,
    headerDepth: 3,

    plugins: {
      blog: {
        article: "/blog/",
        filter: ({ filePathRelative }) =>
          filePathRelative ? filePathRelative.startsWith("blog/") : false,
      },

      components: {
        components: ["YouTube"],
      },

      mdEnhance: {
        align: true,
        footnote: true,
        include: {
          resolvePath: (file) => {
            if (file.startsWith("@orgdocs")) {
              return file.replace(
                "@orgdocs",
                path.resolve(__dirname, "../../packages/.github/")
              );
            }

            return file;
          },
        },
        tabs: true,
      },
    },
  }),

  alias: {
    "@images": path.resolve(__dirname, "../../packages/.github/images"),
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue"
    ),
  },
});
