import React from 'react';

import { iconSets } from './iconSets';

interface Props {
  name: string;
  width: number;
  height: number;
}

export const Icon = ({ name, width, height }: Props) => {
  const path = getIconPath(name);
  if (!path) {
    return null;
  }

  return <img
    width={width}
    height={height}
    src={path} />;
};

export const getIconPath = (name: string): string | null => {
  for (const s of iconSets) {
    if (name.startsWith(s.prefix)) {
      const filename = name.substring(s.prefix.length);
      return `${process.env.PUBLIC_URL}/${s.dir}/${filename}.svg`;
    }
  }

  return null;
};
