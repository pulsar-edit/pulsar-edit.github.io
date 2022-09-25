const sidebar_en = {
  '/': [

  ],
  '/docs/': [
    {
      title: "Documentation Home",
      text: "Documentation Home",
      link: "/docs/",
      collapsible: true
    },
    {
      title: "Launch Manual",
      text: "Launch Manual",
      link: '/docs/launch-manual',
      collapsible: true,
      children: [
        '/docs/launch-manual/sections/getting-started',
        '/docs/launch-manual/sections/core-hacking',
        '/docs/launch-manual/sections/packages',
        '/docs/launch-manual/sections/faq'
      ]
    },
    {
      title: 'Resources',
      text: 'Resources',
      link: '/docs/resources',
      collapsible: false,
      children: [
        '/docs/resources/glossary',
        '/docs/resources/pulsar-api'
      ]
    },
    {
      title: 'Atom Archive',
      text: 'Atom Archive',
      link: '/docs/atom-archive/',
      collapsible: true,
      children: [
        '/docs/atom-archive/getting-started/',
        '/docs/atom-archive/using-atom/',
        '/docs/atom-archive/hacking-atom/',
        '/docs/atom-archive/atom-server-side-apis/'
      ]
    }
  ],

  '/about/': [

  ]
};

export { sidebar_en as sidebar_en };
