import { PresetOption } from './state';
import { Preset, presetSingleton } from '../presets';

export const toPresetOption = (p: Preset): PresetOption => {
  return {
    value: p,
    label: presetSingleton.getName(p.id) ?? p.id
  };
};
