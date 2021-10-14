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

/**
 * Returns true, if this type of POI should/could have the specified field
 */
const hasField = (poi: Poi, name: string): boolean => {
  // If this tag is present, show it anyway
  // (even if it doesn't appear in the preset)
  if (name in poi.tags) {
    return true;
  }

  if (!poi.presetId) {
    return false;
  }

  // Fetch the appropriate preset
  const preset = getPreset(poi.presetId);

  // ...and check whether this field is present
  return preset !== undefined && preset.fields.has(name);
  };

export const PoiDecorator = {
  loadData,
  extend,
  getPreset,
  hasField
};
