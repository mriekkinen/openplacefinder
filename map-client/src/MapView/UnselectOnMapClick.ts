import React from 'react';
import { useMapEvent } from 'react-leaflet';

import { Poi } from '../types';

interface Props {
  setSelected: React.Dispatch<React.SetStateAction<Poi | null>>;
}

const UnselectOnMapClick = ({ setSelected }: Props) => {
  useMapEvent('click', () => {
    setSelected(null);
  });

  return null;
};

export default UnselectOnMapClick;
