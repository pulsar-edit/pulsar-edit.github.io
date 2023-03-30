const sidebar_en = {
  '/': [

  ],
  '/docs/': [
      {
        text: 'Launch Manual',
        icon: 'solid fa-rocket',
        link:'launch-manual/',
        prefix: 'launch-manual/sections/',
        collapsible: true,
        children: [
          {
            text: 'Getting Started',
            icon: 'solid fa-play',
            link: 'getting-started/'
          },
          {
            text: 'Using Pulsar',
            icon: 'solid fa-circle-info',
            link: 'using-pulsar/'
          },
          {
            text: 'Hacking the Core',
            icon: 'solid fa-screwdriver-wrench',
            link: 'core-hacking/'
          },
          {
            text: 'Behind Pulsar',
            icon: 'solid fa-microscope',
            link: 'behind-pulsar'
          },
          {
            text: 'FAQ',
            icon: 'solid fa-circle-question',
            link: 'faq/'
          }
        ]
      },
      {
        text: 'Packages',
        icon: 'solid fa-box-open',
        link: 'packages/'
      },
      {
        text: 'Resources',
        icon: 'solid fa-wrench',
        link: 'resources/',
        prefix: 'resources/',
        collapsible: true,
        children: [
          {
            text: 'Glossary',
            icon: 'solid fa-book-bookmark',
            link: 'glossary/'
          },
          {
            text: 'Pulsar API',
            icon: 'solid fa-gear',
            link: 'pulsar-api/'
          },
          {
            text: 'Tooling',
            icon: 'solid fa-toolbox',
            link: 'tooling/'
          },
          {
            text: 'Website',
            icon: 'solid fa-table-columns',
            link: 'website/'
          },
          {
            text: 'Privacy Policy',
            icon: 'solid fa-file-shield',
            link: 'privacy/'
          },
          {
            text: 'Code of Conduct',
            icon: 'solid fa-gavel',
            link: 'conduct/'
          }
        ]
      },
      {
        text: 'Atom Archive',
        icon: 'solid fa-box-archive',
        link: 'atom-archive/',
        prefix: 'atom-archive/',
        collapsible: true,
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
  ],
  '/about/': [

  ]
};

export { sidebar_en as sidebar_en };
