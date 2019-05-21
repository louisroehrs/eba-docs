const glob = require('glob');

let releasenotes = glob.sync('docs/release/blogs/*.md').map(f => f.substring(4));
let releasenoteslist = [['/release/ReleaseNotes.md','Overview'],...releasenotes]

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '/docs/assets/img'
      }
    }
  },
  base: "/eba-docs/",
  title: 'IBM Embedded Business AI Framework',
  description: 'Ask, get answers, and automate in the language of your business.',
  themeConfig: {
    repo: 'louisroehrs/eba-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'edit',
    product: { name:"EBA"},
    displayAllHeaders:false,
    sidebarDepth:2,
    sidebar : [
      { title: 'About',
        children:[
          ['/about/','This is EBA'],
          ['/about/AboutWhyEBA','Why EBA?'],
          ['/about/Features','Features'],
        ]
      },
      { title: 'Programming',
        children:[
          ['/guide/LandingPage','Programming EBA'],
          ['/getting-started/GettingStarted','Start with our tutorial'],
          ['/reference/Reference','Programming reference']
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
            { title: 'Example agents',
        children:[
          ['/samples/Samples','Overview'],
          ['/samples/Walmart','Walmart trends'],
          ['/samples/Riddles','Riddles'],
          ['/samples/Wikipedia','Wikipedia'],
          ['/samples/WatsonDiscovery','Watson Discovery'],
          ['/samples/EDI','EDI'],
          ['/samples/SupplyChain','Supply Chain'],
          ['/samples/Quest','Quest']
        ]
      },

      { title: 'Integrations',
        children:[
          ['/integration/Integrations','Overview'],
          ['/integration/Web','Web'],
          ['/integration/Headless','Headless'],
          ['/integration/Mobile','Mobile'],
          ['/integration/Voices','Voices']
        ]
      },
      { title: 'Articles',
        children:[
          ['/articles/NLUBestPractices','Best Practices for NLU'],
          ['/articles/NaturalLanguageUnderstanding','Natural Language Understanding'],
          ['/articles/DebuggingEBA','Debugging EBA'],
          ['/articles/DevTips','Tips for Chrome Users'],
        ]
      },
      { title: 'Release notes',
        children: releasenoteslist
      }
    ],
      
    nav: [
      { text: 'About', link: '/about/' },
      { text: 'Documentation', link: '/guide/LandingPage' },
      {
        text: 'Use it now',
        items: [
          { text: 'Launch in Web', link: 'https://eba.ibm.com/' },
          { text: 'Download as App', link: 'https://ibm.box.com/shared/static/m7wm02x2qdevpacf2u1ugj6koapr37ta.dmg' },
          { text: 'Add to Slack', link: 'https://slack.com/oauth/authorize?client_id=14390917878.401235455793&scope=bot,users.profile:read&redirect_uri=https%3a%2f%2feba.ibm.com%2fslack%2foauth' }
        ]
      },
      { text: 'Release Notes', link: '/release/ReleaseNotes' },
    ]
  }
}


