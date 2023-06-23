import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: "Download",
    icon: "download",
    link: "/download/",
  },
  {
    text: "Docs",
    icon: "file-lines",
    link: "/docs/",
  },
  {
    text: "Repositories",
    icon: "fab fa-github",
    link: "/repos/",
  },
  {
    text: "About Us",
    icon: "sun",
    link: "/about/",
  },
  {
    text: "Blog",
    icon: "blog",
    link: "/blog/",
  },
  {
    text: "Community",
    icon: "user-group",
    children: [
      {
        text: "Community areas",
        icon: "house",
        link: "/community/",
      },
      {
        text: "Discussions",
        icon: "comments",
        link: "https://github.com/orgs/pulsar-edit/discussions",
      },
      {
        text: "Discord",
        icon: "fab fa-discord",
        link: "https://discord.gg/7aEbB9dGRT",
      },
      {
        text: "Reddit",
        icon: "fab fa-reddit",
        link: "https://www.reddit.com/r/pulsaredit/",
      },
      {
        text: "Mastodon",
        icon: "fab fa-mastodon",
        link: "https://fosstodon.org/@pulsaredit",
      },
    ],
  },
  {
    text: "Donate",
    icon: "hand-holding-dollar",
    link: "/donate/",
  },
  {
    text: "Packages",
    icon: "box-open",
    link: "https://web.pulsar-edit.dev/",
  },
]);
