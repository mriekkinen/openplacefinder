import React from 'react';
import { divIcon, DivIcon } from 'leaflet';
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
  const icon = getDivIcon(preset, isSelected) ?? getDefaultDivIcon(isSelected);

  const zIndexOffset = isSelected ? 10000: 0;

  const eventHandlers = {
    click: handleClick
  };

  return (
    <LeafletMarker
      position={[e.lat, e.lng]}
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
): DivIcon | null => {
  if (!preset || !preset.icon) {
    return null;
  }

  const fill = isSelected ? 'blue' : 'white';
  const path = getIconPath(preset.icon, fill);
  if (!path) {
    return null;
  }

  const html = `<img src="${path}" width=15 height=15 />`;

  return createIcon(html, isSelected);
};

const getDefaultDivIcon = (isSelected: boolean): DivIcon => {
  return createIcon('', isSelected);
};

const createIcon = (html: string, isSelected: boolean): DivIcon => {
  const className = clsx('map-icon', isSelected && 'selected');

  return divIcon({
    html,
    className,
    iconSize: [24, 24],
    tooltipAnchor: [0, -12]
  });
};

export default IconMarker;
