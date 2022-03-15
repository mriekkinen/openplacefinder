import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GoLocation } from 'react-icons/go';

// TODO: Fix vertical alignment

const Logo = () => (
  <LogoContainer>
    <LogoLink to='/'>
      <GoLocation /> OpenPlaceFinder
    </LogoLink>
  </LogoContainer>
);

const LogoContainer = styled.div`
  margin-right: 20px;
  font-size: 1.1rem;
`;

const LogoLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default Logo;
