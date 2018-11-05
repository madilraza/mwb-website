'use strict'

module.exports = {
  siteMetadata: {
    title: 'Mentors Without Borders',
    description: 'Connecting mentors with young dreamers around the world.',
    siteUrl: 'https://www.mentorswithoutborders.net/',
    author: {
      name: 'mentors Without Borders',
      url: 'https://github.com/MentorsWithoutBorders',
      email: 'edmondpr@gmail.com'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components', {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    }, {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants', {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json', {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.mentorswithoutborders.net/'
      }
    }, {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ]
}
