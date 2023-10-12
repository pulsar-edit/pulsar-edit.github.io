const navbar_en = [
  {
    text: 'Download',
    icon: 'solid fa-download',
    link: '/download/'
  },
  {
    text: 'Docs',
    icon: 'solid fa-file-lines',
    link: '/docs/'
  },
  {
    text: 'Repositories',
    icon: 'brands fa-github',
    link: '/repos/'
  },
  {
    text: "About Us",
    icon: 'solid fa-sun',
    link: "/about/"
  },
  {
    text: 'Blog',
    icon: 'solid fa-blog',
    link: '/blog/'
  },
  {
    text: "Community",
    icon: 'solid fa-user-group',
    children: [
      {
        text: "Community areas",
        icon: 'solid fa-house',
        link: "/community/"
      },
      {
        text: "Discussions",
        icon: 'solid fa-comments',
        link: "https://github.com/orgs/pulsar-edit/discussions"
      },
      {
        text: "Discord",
        icon: 'brands fa-discord',
        link: "https://discord.gg/7aEbB9dGRT"
      },
      {
        text: "Reddit",
        icon: 'brands fa-reddit',
        link: "https://www.reddit.com/r/pulsaredit/"
      },
      {
        text: "Mastodon",
        icon: 'brands fa-mastodon',
        link: "https://fosstodon.org/@pulsaredit"
      },
      {
        text: "Lemmy",
        icon: 'solid fa-users',
        link: "https://lemmy.ml/c/pulsaredit"
      }
    ]
  },
  {
    text: "Donate",
    icon: 'solid fa-hand-holding-dollar',
    link: '/donate/'
  },
  {
    text: "Packages",
    icon: 'solid fa-box-open',
    link: "https://web.pulsar-edit.dev/"
  }
];

export { navbar_en as navbar_en };
