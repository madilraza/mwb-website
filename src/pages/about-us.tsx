import * as React from 'react'
import {Link} from 'gatsby'

import Page from '../components/Page'
import {Section} from 'bloomer/lib/layout/Section'
import IndexLayout from '../layouts'

const AboutUsPage = () => (
  <IndexLayout>
    <Page>
      <Section className="content">
        <ul>
          <li>
            <Link to="/a-markdown-page/">Show me some Markdown!</Link>
          </li>
          <li>
            <Link to="/">Take me back home.</Link>
          </li>
        </ul>
      </Section>
    </Page>
  </IndexLayout>
)

export default AboutUsPage
