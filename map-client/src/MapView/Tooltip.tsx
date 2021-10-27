import React from 'react';
import { Tooltip as LeafletTooltip } from 'react-leaflet';

import { Poi } from '../types';
import { Preset } from '../presets';
import { presetSingleton } from '../presets';
import { getAddress } from '../info';

interface Props {
  e: Poi;
  preset: Preset | undefined;
}

const Tooltip = ({ e, preset }: Props) => {
  return (
    <LeafletTooltip direction='top'>
      <b>{e.tags['name']}</b><br />
      {presetSingleton.getName(preset?.id)}<br />
      {getAddress(e, 'short')}
    </LeafletTooltip>
  );
};

export default Tooltip;
