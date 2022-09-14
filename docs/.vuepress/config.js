import { defineUserConfig, defaultTheme } from 'vuepress';
import { navbar_en } from "./navbar";

export default defineUserConfig({
  lang: 'en-US',
  title: 'Pulsar Edit',
  description: 'Just playing around',
  theme: defaultTheme({
    locales: {
      "/": {
        selectLanguageName: "English",
        navbar: navbar_en
      }
    }
  })
});
