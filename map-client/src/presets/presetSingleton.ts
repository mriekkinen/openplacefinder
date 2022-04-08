import { Presets } from './presets';
import { PresetParser } from './presetService';
import { PresetMatcher } from './presetService';
import { PresetNames } from './presetNames';
import { PresetSearch } from './presetSearch';

import presetData from '@openstreetmap/id-tagging-schema/dist/presets.min.json';
//import presetNamesEn from '@openstreetmap/id-tagging-schema/dist/translations/en.min.json';
import presetNamesFi from '@openstreetmap/id-tagging-schema/dist/translations/fi.min.json';
import { PresetCategories } from './presetCategories';

export let presetSingleton: Presets;

export const loadPresets = () => {
  const parserSub = new PresetParser(presetData, false);
  const parserAll = new PresetParser(presetData, true);
  const matcher = new PresetMatcher(parserSub);
  const names = new PresetNames(presetNamesFi, 'fi');
  const search = new PresetSearch(parserAll, names);
  const categories = new PresetCategories(parserAll, names);

  presetSingleton = new Presets(parserAll, matcher, names, search, categories);
}
