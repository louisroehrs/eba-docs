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
    displayAllHeaders:false,
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
                   ['/getting-started/GettingStarted','Start with our tutorial'],
                   ['/reference/Reference','Semantic programming reference'],
                   ['/samples/Samples','Samples']
                 ]
               },
               { title: 'Development Lab',
                 children:[
                   ['/lab/Overview','Lab overview'],
                   ['/lab/ControlBar','Control bar'],
                   ['/lab/General','General tab'],
                   ['/lab/Concepts','Concepts tab'],
                   ['/lab/Patterns','Patterns tab'],
                   ['/lab/Actions','Actions tab'],
                   ['/lab/Rules','Rules tab'],
                   ['/lab/Assets','Assets tab'],
                   ['/lab/Explore','Explore tab'],
                   ['/lab/Debug','Debug tab'],
                   ['/lab/Training','Training tab'],
                   ['/lab/SourceControl','Github tab'],
                   ['/lab/NodeHelpers','Action helpers'],
                   ['/lab/UIComponents','Action UI components'], 
                   ['/lab/NodeModules','NodeJS support'],
                   ['/lab/ExternalRuntime','External runtime'],
                   ['/lab/BlackboxRuntime','Blackbox runtime'],
                   ['/lab/AgentAPI','Agent API'],
                   ['/lab/l10N','Localization API']
                   ]
               },
               { title: 'Integrations',
                 children:[
                   ['/integrations/Integrations','Overview'],
                   ['/integrations/Web','Web'],
                   ['/integrations/Headless','Headless'],
                   ['/integrations/Mobile','Mobile'],
                   ['/integrations/Voices','Voices']
                 ]
               },
               { title: 'Articles',
                 children:[
                   ['/guide/articles/NLUBestPractices','Best Practices for NLU'],
                   ['/guide/articles/NaturalLanguageUnderstanding','Natural Language Understanding'],
                   ['/guide/articles/DebuggingEBA','Debugging EBA'],
                   ['/guide/articles/DevTips','Tips for Chrome Users'],
                   ['/guide/articles/Todo','Todo Notes'],
                   ]
               },

              ],
    
    nav: [
      { text: 'About', link: '/about/' },
      { text: 'Programming', link: '/guide/LandingPage' },
      { text: 'Development Lab', link: '/lab/Overview' },
      { text: 'Integrations', link: '/integrations/Integrations' },
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
