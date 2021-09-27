import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  href: string;
  activePage: boolean;
  children: React.ReactNode;
}

const NavLink = ({ href, activePage, children }: Props) => {
  return (
    <Link
      href={href}
      activePage={activePage}>
      {children}
    </Link>
  );
};

const Link = styled.a<Props>`
  margin-right: 20px;
  color: #BDBDBD;
  text-decoration: none;

  &:hover {
    color: inherit;
  }

  ${props => props.activePage && css`
    color: inherit;
  `}
`;

export default NavLink;
