import React from 'react';

interface Props {
  href: string | undefined;
}

const Website = ({ href }: Props) => {
  if (href === undefined) {
    return <div>(unknown)</div>;
  }

  return (
    <div>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={href}>
        {href}
      </a>
    </div>
  );
};

export default Website;
