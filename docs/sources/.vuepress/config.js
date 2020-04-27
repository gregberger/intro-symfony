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
                    {text: 'Introduction', link:'/1-intro/'},
                    {text: 'Controllers et Routes', link:'/2-controllers-et-routes/'}
                ]
            },
            {text: 'Organisation', link:'/_seances/'},
            {text: 'Exercices', link:'/_exercices/'}
        ],
    },

    markdown: {
        linkify: true,
    }

};