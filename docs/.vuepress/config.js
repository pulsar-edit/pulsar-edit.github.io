import { defineUserConfig, defaultTheme } from 'vuepress';
import { hopeTheme } from "vuepress-theme-hope";
import { getDirname, path } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url)


import { navbar_en } from "./navbar.js";
import { sidebar_en } from "./sidebar.js";

export default defineUserConfig({
  lang: 'en-US',
  title: 'Pulsar Edit',
  description: 'Next generation hackable editor for the future',
  alias: {
    '@images': path.resolve(__dirname, '../../node_modules/pulsar-assets/images')
  },
  devServer: {
    https: true
  },
  plugins: [
  ],
  theme: hopeTheme({
    displayAllHeaders: true,
    editLinks: true,
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
    headerDepth: 2
  }),
});
