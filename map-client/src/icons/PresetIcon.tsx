import React from 'react';

import { PoiDecorator } from '../overpass';
import { Icon } from './Icon';

interface Props {
  presetId: string | undefined;
}

export const PresetIcon = ({ presetId }: Props) => {
  const preset = PoiDecorator.getPreset(presetId);
  if (!preset || !preset.icon) {
    return null;
  }

  return <Icon name={preset.icon} width={15} height={15} />
};
