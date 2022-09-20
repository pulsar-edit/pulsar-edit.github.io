import { defineUserConfig, defaultTheme } from 'vuepress';
import { getDirname, path } from '@vuepress/utils';
import { navbar_en } from "./navbar.js";
import { sidebar_en } from "./sidebar.js";


const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  lang: 'en-US',
  title: 'Pulsar Edit',
  description: 'Next generation hackable editor for the future',
  editLinks: true,
  alias: {
    '@images': path.resolve(__dirname, 'https://github.com/pulsar-edit/.github'),
  },
  theme: defaultTheme({
    locales: {
      "/": {
        selectLanguageName: "English"
      }
    },
    navbar: navbar_en,
    displayAllHeaders: true,
    sidebar: sidebar_en,
    repo: "https://github.com/pulsar-edit"
  })
});
