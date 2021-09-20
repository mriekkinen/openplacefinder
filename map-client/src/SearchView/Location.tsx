import React from 'react';

interface Props {
  lat: number;
  lon: number;
}

const Location = ({ lat, lon }: Props) => {
  const locationString = `(${lon.toFixed(4)}, ${lat.toFixed(4)})`;
  return (
    <>
      Near: {' '}
      <input
        disabled={true}
        value={locationString} />
    </>
  );
};

export default Location;
