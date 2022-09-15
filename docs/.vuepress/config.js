import { defineUserConfig, defaultTheme } from 'vuepress';
import { navbar_en } from "./navbar.js";
import { sidebar_en } from "./sidebar.js";

export default defineUserConfig({
  lang: 'en-US',
  title: 'Pulsar Edit',
  description: 'Just playing around',
  theme: defaultTheme({
    locales: {
      "/": {
        selectLanguageName: "English"
      }
    },
    navbar: navbar_en,
    sidebar: sidebar_en,
    repo: "https://github.com/pulsar-edit"
  })
});
