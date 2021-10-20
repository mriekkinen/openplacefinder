import React from 'react';
import { Marker as LeafletMarker } from 'react-leaflet';
import clsx from 'clsx';

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

  const icon = getDivIcon(preset, isSelected) ?? getDefaultDivIcon(isSelected);

  const zIndexOffset = isSelected ? 10000: 0;

  const eventHandlers = {
    click: handleClick
  };

  return (
    <LeafletMarker
      position={[e.lat, e.lon]}
      icon={icon}
      zIndexOffset={zIndexOffset}
      eventHandlers={eventHandlers}
      bubblingMouseEvents={false}
    >
      <Tooltip e={e} preset={preset} />
    </LeafletMarker>
  );
};

const getDivIcon = (
  preset: Preset | undefined,
  isSelected: boolean
): L.DivIcon | null => {
  if (!preset || !preset.icon) {
    return null;
  }

  const fill = isSelected ? 'blue' : 'white';
  const path = getIconPath(preset.icon, fill);
  if (!path) {
    return null;
  }

  const html = `<img src="${path}" width=15 height=15 />`;
  const className = clsx('map-icon', isSelected && 'selected');

  return L.divIcon({
    html,
    className,
    iconSize: [24, 24]
  });
};

const getDefaultDivIcon = (isSelected: boolean): L.DivIcon => {
  const className = clsx('map-icon', isSelected && 'selected');

  return L.divIcon({
    html: '',
    className,
    iconSize: [24, 24]
  });
};

export default IconMarker;
