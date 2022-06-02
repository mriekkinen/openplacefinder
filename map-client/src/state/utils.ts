import { PresetOption, SortOption } from './state';
import { Preset, presetSingleton } from '../presets';

export const toPresetOption = (p: Preset): PresetOption => {
  return {
    value: p,
    label: presetSingleton.getName(p.id) ?? p.id
  };
};

export const parseSortOption = (opt: unknown): SortOption => {
  if (!opt || !isSortOption(opt)) {
    throw new Error('Incorrect or missing sort option: ' + opt);
  }

  return opt;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isSortOption = (opt: any): opt is SortOption => {
  return Object.values(SortOption).includes(opt);
};
