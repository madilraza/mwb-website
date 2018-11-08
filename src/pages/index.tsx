import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import { Section } from 'bloomer/lib/layout/Section'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Section className="content">
        <h1 className="title has-text-orange">Hi people</h1>
        <p className="has-text-yellow">Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/about-us/">Go to some page</Link>
      </Section>
    </Page>
  </IndexLayout>
)

export default IndexPage
