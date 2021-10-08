import { OverpassPoi, Poi } from '../types';
import presetService, { PresetIndex } from '../presets';

import presetData from '@openstreetmap/id-tagging-schema/dist/presets.min.json';

let index: PresetIndex;

const loadData = () => {
  const presets = presetService.parsePresetData(presetData);
  index = presetService.buildIndex(presets);
}

const extend = (pois: OverpassPoi[]): Poi[] => {
  if (!index) {
    throw new Error('Preset index hasn\'t been loaded: did you call loadData?');
  }

  return pois.map(e => ({
    ...e,
    presetId: presetService.matchTags(index, e.tags)?.id ?? null
  }));
};

export const PoiDecorator = {
  loadData,
  extend
};
