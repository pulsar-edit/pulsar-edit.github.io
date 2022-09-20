const sidebar_en = {
  '/': [

  ],
  '/docs/': [
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
      title: "User Guide",
      text: "User Guide",
      link: "/docs/user_guide/"
    },
    {
      title: "Hacking the Core (name not finalized)",
      text: "Hacking the Core"
    },
    {
      title: 'Core Packages',
      text: 'Core Packages',
      link: '/docs/packages/core/',
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
    },
    {
      title: 'API',
      text: 'Pulsar API'
    },
    {
      title: 'Atom Archive',
      text: 'Atom Archive',
      link: '/docs/atom-archive/'
    }
  ],
  '/about/': [

  ]
};

export { sidebar_en as sidebar_en };
