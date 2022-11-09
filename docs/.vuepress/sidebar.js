c
onst sidebar_en = {
  '/': [

  ],
  '/docs/': [
    {
      text: 'Documentation Home',
      title: 'Documentation Home',
      icon: 'solid fa-book',
      link: '/docs/',
      prefix: '/docs/',
      collapsable: false,
      children: [
        {
          text: 'Launch Manual',
          icon: 'solid fa-rocket',
          link:'launch-manual/',
          prefix: 'launch-manual/sections/',
          collapsable: true,
          children: [
            'getting-started/',
            'core-hacking/',
            'faq/'
          ]
        },
        {
          text: 'Packages',
          title: 'packages',
          icon: 'solid fa-box-open',
          link: 'packages/'
        },
        {
          text: 'Resources',
          title: 'resources',
          icon: 'solid fa-wrench',
          link: 'resources/',
          prefix: 'resources/',
          collapsable: true,
          children: [
            'glossary/',
            'pulsar-api/'
          ]
        },
        {
          text: 'Atom Archive',
          title: 'atom archive',
          icon: 'solid fa-box-archive',
          link: 'atom-archive/',
          prefix: 'atom-archive/',
          collapsable: true,
          children: [
            'getting-started/',
            'using-atom/',
            'hacking-atom/',
            'behind-atom/',
            'api/',
            'resources/',
            'faq/',
            'shadow-dom/',
            'upgrading-to-1-0-apis/',
            'atom-server-side-apis/'
          ]
        }
      ]
    }
  ],
  '/about/': [

  ]
};

export { sidebar_en as sidebar_en };
