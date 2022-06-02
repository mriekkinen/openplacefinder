import React from 'react';
import styled from 'styled-components';

interface Props {
  href: string;
  children: React.ReactNode;
}

export const NavLinkWeb = ({ href, children }: Props) => {
  return (
    <WebLink
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </WebLink>
  );
};

const WebLink = styled.a`
  margin-right: 20px;
  color: #BDBDBD;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
`;
