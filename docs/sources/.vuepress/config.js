let getPath = path => {
    
    if(path !== undefined) {
        return path.replace(process.env.GITHUB_REPOSITORY_OWNER,'')+'/';
    } 
    return '/'
};

module.exports = {
    base: getPath(process.env.GITHUB_REPOSITORY),
    title: "Symfony 5",
    configureWebpack: (config, isServer) => {
      config.devServer = {
        headers : {
          "Access-Control-Allow-Origin": "*",
          "X-Forwarded-For" : "Greg berger"
      }};

      if(! isServer){
      }
    },
    themeConfig: {
        // displayAllHeaders: true,
        lastUpdated: 'Dernière mise à jour',
        nav: [
            {text: 'Home', link:"/"},
            {text: 'Cours', ariaLabel: 'Cours Menu',
                items: [
                    {text: '1. Introduction : ', items: [
                            { text: "└ Généralités", link:'/0-intro/'},
                            { text: "└ Le framework Symfony", link:'/0-intro/symfony'},
                    ]},
                    {text: "2. Développer une application avec le framework Symfony", link:'/1-developper-une-application/'},
                    {text: '3. Controllers et Routes', link:'/2-controllers-et-routes/'},
                    {text: '4. Vues : Twig le moteur de templates', link:'/3-les-vues-avec-twig/'},
                    {text: '5. Modèle : l\'ORM Doctrine', link:'/4-doctrine/'}

                ]
            },
            {text: 'Infos pratiques', ariaLabel: 'Orga Menu',
              items: [
                {text: 'Planning', link: '/_infos/seances'},
                {text: 'Evaluation', link: '/_infos/evaluation'}
              ]

            },
            {text: 'Exercices', link:'/_exercices/'},
            {text: 'Références', link:'/_references/'}
        ],
        sidebar: [
          '/',
            {
                title: 'Introduction',
                path: '/0-intro/',
                sidebarDepth: 1,
                children: ['/0-intro/', '/0-intro/symfony']
            },
          {
            title: 'Dévlopper une application',
            path: '/1-developper-une-application/',
            sidebarDepth: 1,
            children: [
              '/1-developper-une-application/',
              '/1-developper-une-application/repertoires',
              '/1-developper-une-application/outils'
            ]
          },
          {
            title: 'Routes et Contrôleurs',
            path: '/2-controllers-et-routes/',
            sidebarDepth: 1,
            children: [
               '/2-controllers-et-routes/',
               '/2-controllers-et-routes/routes',
               '/2-controllers-et-routes/controllers'
            ]
          },
          '/3-les-vues-avec-twig/',
          {
            title: 'Modèle: l\'ORM Doctrine',
            path: '/4-doctrine/',
            sidebarDepth: 1,
            children: [
              '/4-doctrine/',
              '/4-doctrine/intro',
              '/4-doctrine/relations',
              '/4-doctrine/query-builder'
            ]
          },
          {
            title: 'Références',
            path: '/_references/'
          },
          {
            title: 'Exemples',
            path: '/_tips/',
            sidebarDepth: 0,
            children: [
              '/_tips/faker'
            ]

          }

        ],
        sidebarDepth: 2
    },

    markdown: {
        linkify: true,
    },
    plugins: [
      [
        'vuepress-plugin-container',
        {
          type: 'doc',
          defaultTitle: 'Doc'
        }
      ]
    ]

};