import { defineUserConfig, defaultTheme } from 'vuepress';
import { hopeTheme } from "vuepress-theme-hope";
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { getDirname, path } from '@vuepress/utils';
import secrets from '../../.secrets.json';

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
     docsearchPlugin({
      apiKey: secrets.docsearchapikey,
      indexName: "dev_pulsaredit",
      appId: "NR3CRBCBZ1",
      disableUserPersonalization: true,
      searchParameters: {
        attributesToRetrieve: [ "*" ],
        attributes: {
          attributesToRetrieve: [ "*" ]
        },
        hitsPerPage: 10
      },
      locales: {
        '/': {
          placeholder: "Search Pulsar Edit",
          translations: {
            button: {
              buttonText: "Search Docs"
            },
          },
        },
      }
    }),
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
    sidebarDepth: 3
  }),
});
