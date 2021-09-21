import React from 'react';
import styled from 'styled-components';
import { GoLocation } from 'react-icons/go';

// TODO: Fix vertical alignment

const Logo = () => (
  <LogoContainer>
    <Link href='#'>
      <GoLocation /> OpenPOIGuide
    </Link>
  </LogoContainer>
);

const LogoContainer = styled.div`
  margin-right: 20px;
  font-size: 1.1rem;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

export default Logo;
