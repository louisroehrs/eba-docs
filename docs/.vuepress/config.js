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
               { title: 'Programming',
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
               
               { title: 'Integrations',
                 children:[
                   ['/integrations/','Integrations']
                 ]
               }
              ],
    
    nav: [
      { text: 'About', link: '/about/' },
      { text: 'Programming', link: '/guide/' },
      { text: 'Development Lab', link: '/lab/' },
      { text: 'Integrations', link: '/integrations/' },
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
