const sidebar_en = {
  '/': [

  ],
  '/docs/': [
    {
      [
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
          title: 'Core Packages',
          text: 'Core Packages',
          link: '/docs/packages/core/',
          initialOpenGroupIndex: '2',
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
        }
      ]
    }
  ]
  '/about/': [

  ]
};

export { sidebar_en as sidebar_en };
