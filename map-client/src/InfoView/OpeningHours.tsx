import React from 'react';

import { splitValue } from '../utils';

interface Props {
  openingHours: string | undefined;
}

const OpeningHours = ({ openingHours }: Props) => {
  if (openingHours === undefined) {
    return <div>Opening hours: (unknown)</div>
  }

  return (
    <div>
      Opening hours:
      <ul>
        {splitValue(openingHours).map((row, index) =>
          <li key={`${index}-${row}`}>{row}</li>
        )}
      </ul>
    </div>
  );
};

export default OpeningHours;
