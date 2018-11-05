import * as React from 'react'
import {Container} from 'bloomer/lib/layout/Container'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot : React.SFC < LayoutRootProps > = ({children, className}) => (
  <Container isFluid className={className}>{children}</Container>
)

export default LayoutRoot
