import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarEnd } from 'bloomer'
import { black, flamingo } from '../utils/colors'
import logo from '../../static/logos/logo.png'

const StyledTitleLink = styled(Link)`
  padding-left: 20px;
`

const StyledLink = styled(Link)`
  font-family: 'Yanone Kaffeesatz';
  color: ${black};
  &:hover {
    color: ${flamingo};
  }
`;

const StyledLogo = styled.figure`
  margin-bottom: 0;
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
  &.image img {
    margin-bottom: 0;
    margin-left: 20px;
  }
  &.title span {
    padding-left: 20px;
  }
`

interface HeaderProps {
  title: string
}

interface State {
  readonly isActive: boolean
}

export default class Header extends React.PureComponent<HeaderProps, State> {
  readonly state: State = {
    isActive: false
  }

  onClickNav = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    const { title } = this.props
    return (
      <React.Fragment>
        <Navbar isTransparent>
          <NavbarBrand>
            <NavbarItem>
              <StyledLogo className="image is-square">
                <img src={logo} />
              </StyledLogo>
            </NavbarItem>
            <NavbarItem>
              <StyledTitleLink className="title is-size-6-mobile is-size-4-tablet is-size-4-desktop" to="/">
                {title}
              </StyledTitleLink>
            </NavbarItem>
            <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarEnd>
              <NavbarItem hasTextAlign="centered">
                <StyledLink
                  activeStyle={{
                    color: flamingo
                  }}
                  className="is-size-4 is-size-6-mobile"
                  to="/about-us"
                >
                  About Us
                </StyledLink>
              </NavbarItem>
              <NavbarItem hasTextAlign="centered">
                <StyledLink
                  activeStyle={{
                    color: flamingo
                  }}
                  className="is-size-4 is-size-6-mobile"
                  to="/get-motivated"
                >
                  Get Motivated!
                </StyledLink>
              </NavbarItem>
              <NavbarItem hasTextAlign="centered">
                <StyledLink
                  activeStyle={{
                    color: flamingo
                  }}
                  className="is-size-4 is-size-6-mobile"
                  to="/partners"
                >
                  Partners
                </StyledLink>
              </NavbarItem>
              <NavbarItem hasTextAlign="centered">
                <StyledLink
                  activeStyle={{
                    color: flamingo
                  }}
                  className="is-size-4 is-size-6-mobile"
                  to="/programming"
                >
                  Programming
                </StyledLink>
              </NavbarItem>
              <NavbarItem hasTextAlign="centered">
                <StyledLink
                  activeStyle={{
                    color: flamingo
                  }}
                  className="is-size-4 is-size-6-mobile"
                  to="/apply-now"
                >
                  Apply Now
                </StyledLink>
              </NavbarItem>
              <NavbarItem hasTextAlign="centered">
                <StyledLink
                  activeStyle={{
                    color: flamingo
                  }}
                  className="is-size-4 is-size-6-mobile"
                  to="/contact"
                >
                  Contact
                </StyledLink>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </React.Fragment>
    )
  }
}
