import React from 'react';

import { Elem } from './styles';

interface Props {
  lat: number;
  lon: number;
}

const Location = ({ lat, lon }: Props) => {
  const locationString = `(${lon.toFixed(4)}, ${lat.toFixed(4)})`;
  return (
    <Elem>
      Location: {' '}
      <input
        disabled={true}
        value={locationString} />
      </Elem>
  );
};

export default Location;
