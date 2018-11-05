import * as React from 'react'
import styled from 'styled-components'
import {Navbar} from 'bloomer/lib/components/Navbar/Navbar'
import {Link} from 'gatsby'
import {NavbarBrand} from 'bloomer/lib/components/Navbar/NavbarBrand'
import {NavbarItem} from 'bloomer/lib/components/Navbar/NavbarItem'
import logo from '../../static/logos/logo.png'

const StyledLogo = styled.img `
  width: 60px;
  height: 60px;
  max-height: 100%;
  max-width: 100%;
  @media screen and (max-width: 1087px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
  margin-bottom: 0;
`

interface HeaderProps {
  title : string
}

const Header : React.SFC < HeaderProps > = ({title}) => (
  <Navbar isTransparent>
    <NavbarBrand>
      <NavbarItem>
        <StyledLogo src={logo}/>
      </NavbarItem>
      <NavbarItem>
        <Link
          className="title is-size-5-mobile is-size-5-tablet is-size-4-desktop"
          to="/">{title}</Link>
      </NavbarItem>
    </NavbarBrand>
  </Navbar>
)

export default Header
