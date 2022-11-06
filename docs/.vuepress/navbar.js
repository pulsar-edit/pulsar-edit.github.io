const navbar_en = [
  {
    text: "Start Here",
    children: [
      '/docs/launch-manual',
      '/docs/packages/core',
      '/docs/packages/community'
    ]
  },
  {
    text: 'Docs',
    link: '/docs/'
  },
  {
    text: "About Us",
    link: "/about/"
  },
  {
    text: "Community",
    children: [
      {
        text: "Community areas",
        icon: 'solid fa-house',
        link: "/community/"
      },
      {
        text: "Discord",
        icon: 'brands fa-discord',
        link: "https://discord.gg/7aEbB9dGRT"
      },
      {
        text: "Discussions",
        icon: 'solid fa-comments',
        link: "https://github.com/orgs/pulsar-edit/discussions"
      },
      {
        text: "Reddit",
        icon: 'brands fa-reddit',
        link: "https://www.reddit.com/r/pulsaredit/"
      },
      {
        text: "OpenCollective",
        icon: 'solid fa-hand-holding-dollar',
        link: "https://opencollective.com/pulsar-edit"
      }
    ]
  }
];

export { navbar_en as navbar_en };
