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
    },
    {
      text: 'GitHub',
      link: '/packages_wiki/github/index.md',
      children: [
        '/packages_wiki/github/june-2017.md'
      ]
    },
    {
      text: 'IDE-Java',
      link: '/packages_wiki/ide-java/index.md',
      children: [
        '/packages_wiki/ide-java/incomplete-classpath-warning.md'
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
