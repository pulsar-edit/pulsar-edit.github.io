const sidebar_en = {
  '/': [

  ],
  '/docs/': [
    {
      text: 'Documentation Home',
      title: 'Documentation Home',
      link: '/docs/',
      prefix: '/docs/',
      collapsable: false,
      children: [
        {
          text: 'Launch Manual',
          link:'launch-manual/',
          prefix: 'launch-manual/sections/',
          collapsable: true,
          children: [
            'getting-started/',
            'core-hacking/',
            'faq/'
          ]
        },
        'packages/',
        {
          text: 'Resources',
          title: 'resources',
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
