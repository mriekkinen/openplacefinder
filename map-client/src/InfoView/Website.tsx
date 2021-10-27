import React from 'react';
import styled from 'styled-components';

interface Props {
  href: string | undefined;
}

const Website = ({ href }: Props) => {
  if (href === undefined) {
    return <div>(unknown)</div>;
  }

  return (
    <Div>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={href}>
        {href}
      </a>
    </Div>
  );
};

const Div = styled.div`
  overflow-wrap: anywhere;
`;

export default Website;
