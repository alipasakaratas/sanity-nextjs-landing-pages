export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5da4f7f617bd0c3e1ef98829',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9auxrwoz',
                  apiId: '02674d1c-61e9-4c68-bd51-9cf0fdea130a'
                },
                {
                  buildHookId: '5da4f7f6d826737230105e54',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-391vxvt7',
                  apiId: 'a9ca1c77-7da6-49be-b585-021ece601a10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alipasakaratas/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-391vxvt7.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
