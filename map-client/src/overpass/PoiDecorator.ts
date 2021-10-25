import { OverpassPoi, Poi } from '../types';
import presetService, {
  Preset, PresetIndex, PresetMap, PresetNames
} from '../presets';

import presetData from '@openstreetmap/id-tagging-schema/dist/presets.min.json';
//import presetNamesEn from '@openstreetmap/id-tagging-schema/dist/translations/en.min.json';
import presetNamesFi from '@openstreetmap/id-tagging-schema/dist/translations/fi.min.json';

let index: PresetIndex;
let presetMap: PresetMap;
let names: PresetNames;

const loadData = () => {
  const presets = presetService.parsePresetData(presetData);
  index = presetService.buildIndex(presets);
  presetMap = presetService.buildMap(presets);

  names = new PresetNames(presetNamesFi, 'fi');
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

const getPreset = (id: string | undefined): Preset | undefined => {
  if (id === undefined) {
    return undefined;
  }

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

  // Fetch the appropriate preset
  const preset = getPreset(poi.presetId);

  // ...and check whether this field is present
  return preset !== undefined && preset.fields.has(name);
};

const enumerateFields = (pois: Poi[]): Set<string> => {
  const fields = new Set<string>();
  pois.forEach(poi => {
    const preset = getPreset(poi.presetId);
    if (!preset) {
      return;
    }

    preset.fields.forEach(field => {
      fields.add(field);
    });
  });

  return fields;
};

const getNames = (): PresetNames => {
  if (!names) {
    throw new Error('Preset names haven\'t been loaded: did you call loadData?');
  }

  return names;
};

export const PoiDecorator = {
  loadData,
  extend,
  getPreset,
  hasField,
  enumerateFields,
  getNames
};
