import { Presets } from './presets';
import { PresetParser } from './presetService';
import { PresetMatcher } from './presetService';
import { PresetNames } from './presetNames';

import presetData from '@openstreetmap/id-tagging-schema/dist/presets.min.json';
//import presetNamesEn from '@openstreetmap/id-tagging-schema/dist/translations/en.min.json';
import presetNamesFi from '@openstreetmap/id-tagging-schema/dist/translations/fi.min.json';

export let presetSingleton: Presets;

export const loadPresets = () => {
  const parser = new PresetParser(presetData);
  const matcher = new PresetMatcher(parser);
  const names = new PresetNames(presetNamesFi, 'fi');

  presetSingleton = new Presets(parser, matcher, names);
}
