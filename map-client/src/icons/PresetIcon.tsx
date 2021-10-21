import React from 'react';

import { PoiDecorator } from '../overpass';
import { Icon } from './Icon';

interface Props {
  presetId: string | undefined;
  width?: number,
  height?: number;
}

export const PresetIcon = ({ presetId, width, height }: Props) => {
  const preset = PoiDecorator.getPreset(presetId);
  if (!preset || !preset.icon) {
    return null;
  }

  width = width ?? 15;
  height = height ?? 15;

  return <Icon name={preset.icon} width={width} height={height} />
};
