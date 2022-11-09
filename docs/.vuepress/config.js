import { defineUserConfig, defaultTheme } from 'vuepress';
import { hopeTheme } from "vuepress-theme-hope";
import { searchPlugin } from '@vuepress/plugin-search';
import { getDirname, path } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url)


import { navbar_en } from "./navbar.js";
import { sidebar_en } from "./sidebar.js";

export default defineUserConfig({
  lang: 'en-US',
  title: 'Pulsar',
  description: 'Next generation hackable editor for the future',
  alias: {
    '@images': path.resolve(__dirname, '../../node_modules/.github/images')
  },
  devServer: {
    https: true
  },
  plugins: [
    searchPlugin({
      maxSuggestions: 10
    }),
  ],
  theme: hopeTheme({
    displayAllHeaders: true,
    editLinks: true,
    iconAssets: "fontawesome",
    navbar: navbar_en,
    locales: {
      "/": {
        selectLanguageName: "English"
      }
    },
    plugins: {
      mdEnhance: {
        align: true,
        include: {
          getPath: (file) => {
            if (file.startsWith("@orgdocs")) {
              return file.replace("@orgdocs",
                path.resolve(__dirname, "../../node_modules/.github/"));
            }
            return file;
          },
        },
        tabs: true,
        container: true
      },
    },
    sidebar: sidebar_en,
    sidebarDepth: 3
  }),
});
