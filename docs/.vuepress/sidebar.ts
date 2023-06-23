import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": false,

  "/docs/": [
    {
      text: "Launch Manual",
      icon: "rocket",
      link: "launch-manual/",
      prefix: "launch-manual/sections/",
      collapsible: true,
      children: [
        {
          text: "Getting Started",
          icon: "play",
          link: "getting-started/",
        },
        {
          text: "Using Pulsar",
          icon: "circle-info",
          link: "using-pulsar/",
        },
        {
          text: "Hacking the Core",
          icon: "screwdriver-wrench",
          link: "core-hacking/",
        },
        {
          text: "Behind Pulsar",
          icon: "microscope",
          link: "behind-pulsar",
        },
        {
          text: "FAQ",
          icon: "circle-question",
          link: "faq/",
        },
      ],
    },
    {
      text: "Packages",
      icon: "box-open",
      link: "packages/",
    },
    {
      text: "Resources",
      icon: "wrench",
      link: "resources/",
      prefix: "resources/",
      collapsible: true,
      children: [
        {
          text: "Glossary",
          icon: "book-bookmark",
          link: "glossary/",
        },
        {
          text: "Pulsar API",
          icon: "gear",
          link: "pulsar-api/",
        },
        {
          text: "Tooling",
          icon: "toolbox",
          link: "tooling/",
        },
        {
          text: "Website",
          icon: "table-columns",
          link: "website/",
        },
        {
          text: "Privacy Policy",
          icon: "file-shield",
          link: "privacy/",
        },
        {
          text: "Code of Conduct",
          icon: "gavel",
          link: "conduct/",
        },
      ],
    },
    {
      text: "Atom Archive",
      icon: "box-archive",
      link: "atom-archive/",
      prefix: "atom-archive/",
      collapsible: true,
      children: [
        "getting-started/",
        "using-atom/",
        "hacking-atom/",
        "behind-atom/",
        "api/",
        "resources/",
        "faq/",
        "shadow-dom/",
        "upgrading-to-1-0-apis/",
        "atom-server-side-apis/",
      ],
    },
  ],
});
