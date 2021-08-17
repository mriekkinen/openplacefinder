import React from 'react';
import { Tooltip as LeafletTooltip } from 'react-leaflet';

import { Poi } from '../types';
import { getAddress } from '../InfoView/Address';

interface Props {
  e: Poi;
}

const Tooltip = ({ e }: Props) => {
  return (
    <LeafletTooltip direction='auto'>
      <b>{e.tags['name']}</b><br />
      {getAddress(e)}
    </LeafletTooltip>
  );
};

export default Tooltip;
