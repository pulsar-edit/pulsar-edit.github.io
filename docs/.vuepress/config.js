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
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'Documentation Home',
        text: 'Documentation Home',
        link: '/docs/',
        children: [
          '/docs/user_guide/',
          '/docs/packages/'
        ]
      },
      {
        title: 'Core Packages',
        text: 'Core Packages',
        link: '/docs/packages/core/',
        initialOpenGroupIndex: 2,
        children: [
          '/docs/packages/core/atom-languageclient/',
          '/docs/packages/core/autocomplete-plus/',
          '/docs/packages/core/github/',
          '/docs/packages/core/ide-java/'
        ]
      },
      {
        title: 'Community Packages',
        text: 'Community Packages',
        link: '/docs/packages/community'
      }
    ],
    repo: "https://github.com/pulsar-edit"
  })
});
