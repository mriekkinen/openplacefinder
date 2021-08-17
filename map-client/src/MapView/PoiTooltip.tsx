import React from 'react';
import { Tooltip } from 'react-leaflet';

import { Poi } from '../types';
import { getAddress } from '../InfoView/Address';

interface Props {
  e: Poi;
}

const PoiTooltip = ({ e }: Props) => {
  return (
    <Tooltip direction='auto'>
      <b>{e.tags['name']}</b><br />
      {getAddress(e)}
    </Tooltip>
  );
};

export default PoiTooltip;
