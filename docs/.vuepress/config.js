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
  description: 'A Community-led Hyper-Hackable Text Editor',
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
    repo: "pulsar-edit",
    repoLabel: "GitHub",
    navbar: navbar_en,
    locales: {
      "/": {
        selectLanguageName: "English"
      }
    },
    plugins: {
      mdEnhance: {
        align: true,
        include:true,
        tabs: true,
        container: true
      },
    },
    sidebar: sidebar_en,
    sidebarDepth: 3
  }),
});
