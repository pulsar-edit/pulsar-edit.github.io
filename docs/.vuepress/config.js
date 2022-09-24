import { defineUserConfig, defaultTheme } from 'vuepress';
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)


import { navbar_en } from "./navbar.js";
import { sidebar_en } from "./sidebar.js";

export default defineUserConfig({
  lang: 'en-US',
  title: 'Pulsar Edit',
  description: 'Next generation hackable editor for the future',
  alias: {
    '@images': path.resolve(__dirname, '../../node_modules/@pulsar-media/images')
  },
  devServer: {
    https: true
  },
  plugins: [
    mdEnhancePlugin({
      align: true,
      include:true,
      tabs: true
    }),
  ],
  theme: defaultTheme({
    displayAllHeaders: true,
    editLinks: true,
    navbar: navbar_en,
    locales: {
      "/": {
        selectLanguageName: "English"
      }
    },
    sidebar: sidebar_en,
    sidebarDepth: 1
  })
});
