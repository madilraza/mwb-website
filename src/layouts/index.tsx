import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'typeface-yanone-kaffeesatz'
import 'typeface-heebo'
import '../styles/_bulma.scss'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const IndexLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description
            },
            {
              name: 'keywords',
              content: 'gatsby, typographyjs, typescript, bulma'
            }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain className="content">{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
