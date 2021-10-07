import React from 'react';
import { Tooltip as LeafletTooltip } from 'react-leaflet';

import { Poi } from '../types';
import { Preset } from '../presets';
import { getAddress } from '../InfoView/Address';

interface Props {
  e: Poi;
  preset: Preset | null;
}

const Tooltip = ({ e, preset }: Props) => {
  return (
    <LeafletTooltip direction='top'>
      <b>{e.tags['name']}</b><br />
      {preset?.id}<br />
      {getAddress(e)}
    </LeafletTooltip>
  );
};

export default Tooltip;
