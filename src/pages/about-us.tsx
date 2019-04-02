import * as React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { Section } from 'bloomer/lib/layout/Section'
import IndexLayout from '../layouts'
import BackgroundImage from '../../static/images/bg-about-us.png'

const StyledBackground = styled.img`
  max-width: 100%;
  height: auto;
`;

const AboutUsPage = () => (
  <IndexLayout>
    <Page>
      <Section style={{ padding: 0 }}>
        <StyledBackground src={BackgroundImage} />
      </Section>
    </Page>
  </IndexLayout >
)

export default AboutUsPage
