let getPath = path => {
    
    if(path !== undefined) {
        return path.replace(process.env.GITHUB_REPOSITORY_OWNER,'')+'/';
    } 
    return '/'
};

module.exports = {
    base: getPath(process.env.GITHUB_REPOSITORY),
    title: "Symfony 5",
    themeConfig: {
        displayAllHeaders: true,
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
                    {text: '4. Vues : Twig le moteur de templates', link:'/3-les-vues-avec-twig/'}

                ]
            },
            {text: 'Organisation', link:'/_seances/'},
            {text: 'Exercices', link:'/_exercices/'}
        ],
        sidebar: [
          '/',
            {
                title: 'Introduction',
                path: '/0-intro/',
                collapsable: true,
                sidebarDepth: 1,
                children: ['/0-intro/', '/0-intro/symfony']
            },
          '/1-developper-une-application/',
          '/2-controllers-et-routes/',
          '/3-les-vues-avec-twig/'
        ],
        sidebarDepth: 2
    },

    markdown: {
        linkify: true,
    }

};