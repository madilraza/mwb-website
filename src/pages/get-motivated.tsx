import * as React from 'react'
import {Link} from 'gatsby'

import Page from '../components/Page'
import {Section} from 'bloomer/lib/layout/Section'
import IndexLayout from '../layouts'

const GetMotivatedPage = () => (
  <IndexLayout>
    <Page>
      <Section className="content">
        <Link to="/">Go to home page</Link>
      </Section>
    </Page>
  </IndexLayout>
)

export default GetMotivatedPage
