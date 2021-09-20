import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const NavBar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><Logo /></NavItem>
      </NavList>
    </Nav>
  );
};

const Nav = styled.nav`
  flex: 0 0 auto;
  margin-bottom: 5px;
  padding: 15px;
  color: white;
  background-color: #039BE5;
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
