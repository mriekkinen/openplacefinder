import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import { NavLinkWeb } from './NavLink';

const docsUrl = 'https://github.com/mriekkinen/openplacefinder/blob/main/docs/guide.md#openplacefinder-user-guide';
const aboutUrl = 'https://github.com/mriekkinen/openplacefinder/blob/main/docs/about.md#about';

const NavBar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><Logo /></NavItem>
        <NavItem><NavLinkWeb href={docsUrl}>Docs</NavLinkWeb></NavItem>
        <NavItem><NavLinkWeb href={aboutUrl}>About</NavLinkWeb></NavItem>
      </NavList>
    </Nav>
  );
};

const Nav = styled.nav`
  flex: 0 0 auto;
  padding: 15px;
  padding-right: 20px;
  color: #FAFAFA;
  background-color: #263238;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  font-weight: 600;
`;

export default NavBar;
