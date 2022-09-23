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
        '/docs/launch-manual/sections/packages'
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
    }
  ],
  '/about/': [

  ]
};

export { sidebar_en as sidebar_en };
