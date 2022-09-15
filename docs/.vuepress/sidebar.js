const sidebar_en = {
  '/': [
    
  ],
  '/user_guide/': [
    
  ],
  '/packages_wiki/': [
    {
      text: 'Atom-LanguageClient',
      link: '/packages_wiki/atom-languageclient/index.md',
      children: [ 
        '/packages_wiki/atom-languageclient/list.md', 
        '/packages_wiki/atom-languageclient/release-process.md' 
      ]
    },
    {
      text: 'Autocomplete-Plus',
      link: '/packages_wiki/autocomplete-plus/index.md',
      children: [
        '/packages_wiki/autocomplete-plus/autocomplete-providers.md',
        '/packages_wiki/autocomplete-plus/provider-api.md',
        '/packages_wiki/autocomplete-plus/symbolprovider-config-api.md'
      ]
    }
  ],
  '/community_packages/': [
    
  ],
  '/about/': [
    
  ]
};

module.exports = {
  sidebar_en,
};
