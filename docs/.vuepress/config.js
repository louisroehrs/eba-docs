module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '/docs/assets/img'
      }
    }
  },
  title: 'EBA',
  description: 'Ask, get answers, and automate in the language of your business.',
  themeConfig: {
    displayAllHeaders:true,
    sidebarDepth:2,
    sidebar : ['/',
               { title: 'About',
                 children:[
                   ['/about/','This is EBA'],
                   ['/about/AboutWhyEBA','Why EBA?']
                 ]
               },
               { title: 'Guide',
                 children:[
                   ['/guide/','Guides']
                   ]
               },
               { title: 'Reference',
                 children:[
                   ['/reference/','Reference']
                   ]
               },
               
               { title: 'Reference',
                 children:[
                   ['/connectors/','Connectors']
                 ]
               }
              ],
    
    nav: [
      { text: 'About', link: '/about/' },
      { text: 'Guides', link: '/guide/' },
      { text: 'Reference', link: '/reference/index.md' },
      { text: 'Connectors', link: '/connectors/' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ]
  }
}
