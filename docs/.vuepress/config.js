import { defineUserConfig, defaultTheme } from 'vuepress';
import { hopeTheme } from "vuepress-theme-hope";
import pulsarTheme from './theme/index';
import { searchPlugin } from '@vuepress/plugin-search';
import { getDirname, path } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url)


import { navbar_en } from "./navbar.js";
import { sidebar_en } from "./sidebar.js";
//import { blog_config } from "./blog.js";
import { footer } from "./footer.js";

export default defineUserConfig({
  lang: 'en-US',
  //title: 'Pulsar',
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
  theme: pulsarTheme({
    logo: "/logo-name-navbar-light.svg",
    logoDark: "/logo-name-navbar-dark.svg",
    displayAllHeaders: true,
    editLinks: true,
    // iconAssets: 'fontawesome',
    iconPrefix: 'fas ',
    repo: "pulsar-edit",
    repoLabel: "GitHub",
    displayFooter: true,
    footer: footer,
    copyright: false,
    docsRepo: "https://github.com/pulsar-edit/pulsar-edit.github.io",
    docsDir: "/docs",
    navbar: navbar_en,
    locales: {
      "/": {
        selectLanguageName: "English"
      }
    },
    plugins: {
      sitemap: {
        hostname: "https://pulsar-edit.dev",
        sitemapFilename: "sitemap.xml"
      },
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
      blog: {
        filter: ({ filePathRelative }) =>
          filePathRelative ? filePathRelative.startsWith("blog/") : false,
        //autoExcerpt: true,
        getInfo: ({ excerpt, frontmatter, git = {} }) => ({
          author: frontmatter.author || "",
          date: frontmatter.date || git.createdTime || null,
          category: frontmatter.category || [],
          tag: frontmatter.tag || [],
          excerpt: page.excerpt
        }),
      }
    },
    sidebar: sidebar_en,
    sidebarDepth: 3
  }),
  head: [
    ['script', {src: '/download-preselect.js'}],
    ['script', {src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js'}]
 ],
});
