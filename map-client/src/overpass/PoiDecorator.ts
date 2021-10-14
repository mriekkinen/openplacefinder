import { OverpassPoi, Poi } from '../types';
import presetService, { Preset, PresetIndex, PresetMap } from '../presets';

import presetData from '@openstreetmap/id-tagging-schema/dist/presets.min.json';

let index: PresetIndex;
let presetMap: PresetMap;

const loadData = () => {
  const presets = presetService.parsePresetData(presetData);
  index = presetService.buildIndex(presets);
  presetMap = presetService.buildMap(presets);
}

const extend = (pois: OverpassPoi[]): Poi[] => {
  if (!index) {
    throw new Error('Preset index hasn\'t been loaded: did you call loadData?');
  }

  return pois.map(e => ({
    ...e,
    presetId: presetService.matchTags(index, e.tags)?.id
  }));
};

const getPreset = (id: string): Preset | undefined => {
  return presetMap[id];
};

export const PoiDecorator = {
  loadData,
  extend,
  getPreset
};
