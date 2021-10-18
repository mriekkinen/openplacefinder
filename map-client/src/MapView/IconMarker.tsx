import React from 'react';
import { Marker as LeafletMarker } from 'react-leaflet';

import { Poi } from '../types';
import { Preset } from '../presets';
import { getIconPath } from '../icons';
import Tooltip from './Tooltip';

interface Props {
  e: Poi;
  isSelected: boolean;
  handleClick: () => void;
  preset: Preset | undefined;
}

const IconMarker = ({ e, isSelected, handleClick, preset }: Props) => {
  if (e.lat === undefined || e.lon === undefined) {
    return null;
  }

  const icon = getDivIcon(preset) ?? getDefaultDivIcon();

  const eventHandlers = {
    click: handleClick
  };

  return (
    <LeafletMarker
      position={[e.lat, e.lon]}
      icon={icon}
      eventHandlers={eventHandlers}
      bubblingMouseEvents={false}
    >
      <Tooltip e={e} preset={preset} />
    </LeafletMarker>
  );
};

const getDivIcon = (preset: Preset | undefined): L.DivIcon | null => {
  if (!preset || !preset.icon) {
    return null;
  }

  const path = getIconPath(preset.icon);
  if (!path) {
    return null;
  }

  const html = `<img src="${path}" width=15 height=15 />`;

  return L.divIcon({
    html,
    className: 'div-icon',
    iconSize: [26, 26]
  });
};

const getDefaultDivIcon = (): L.DivIcon => {
  return L.divIcon({
    html: '',
    className: 'div-icon',
    iconSize: [26, 26]
  });
};

export default IconMarker;
