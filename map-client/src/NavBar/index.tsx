import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import NavLink from './NavLink';

const NavBar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><Logo /></NavItem>
        <NavItem><NavLink href='#' activePage={false}>Docs</NavLink></NavItem>
        <NavItem><NavLink href='#' activePage={false}>About</NavLink></NavItem>
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
  margin-bottom: 5px;
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
