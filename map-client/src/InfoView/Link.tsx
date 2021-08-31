import React from 'react';

interface Props {
  label: string | undefined;
  href: string | undefined;
}

const Link = ({ label, href }: Props) => (
  <a
    target='_blank'
    rel='noopener noreferrer'
    href={href}>
    {label}
  </a>
);

export default Link;
