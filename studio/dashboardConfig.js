export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62dce9fbe68cdc252388a298',
                  title: 'Sanity Studio',
                  name: 'sanity-portfolio-studio-hhsg4h2w',
                  apiId: 'c17077fb-7969-4364-824f-eb61a348d1f7'
                },
                {
                  buildHookId: '62dce9fc0123022801afd864',
                  title: 'Portfolio Website',
                  name: 'sanity-portfolio-web-ragrod9h',
                  apiId: 'c876e822-832b-4d00-bf67-50a82af571a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ehshankhan/sanity-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-portfolio-web-ragrod9h.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
