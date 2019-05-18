module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '/docs/assets/img'
      }
    }
  },
  base: "/eba-docs/",
  title: 'EBA',
  description: 'Ask, get answers, and automate in the language of your business.',
  themeConfig: {
    product: { name:"EBA"},
    displayAllHeaders:true,
    sidebarDepth:2,
    sidebar : ['/',
               { title: 'About',
                 children:[
                   ['/about/','This is EBA'],
                   ['/about/AboutWhyEBA','Why EBA?']
                 ]
               },
               { title: 'Guides',
                 children:[
                   ['/guide/LandingPage','Programming EBA'],
                   ['/getting-started/GettingStarted','Getting Started'],
                   ['/components/Components','Modeling your Business']
                 ]
               },
               { title: 'Development Lab',
                 children:[
                   ['/lab/Overview','Lab Overview'],
                   ['/lab/General','General Tab'],
                   ['/lab/ControlBar','Control Bar'],
                   ['/lab/Concepts','Concepts Tab'],
                   ['/lab/Patterns','Patterns Tab'],
                   ['/lab/Actions','Actions Tab'],
                   ['/lab/Rules','Rules Tab'],
                   ['/lab/Assets','Assets Tab'],
                   ['/lab/Explore','Explore Tab'],
                   ['/lab/Debug','Debug Tab'],
                   ['/lab/SourceControl','Github Tab'],
                   ]
               },
               
               { title: 'Connectors',
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
