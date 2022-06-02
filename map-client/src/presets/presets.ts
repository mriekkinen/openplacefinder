import { OverpassPoi, Poi } from '../types';
import { Preset } from './types';
import { PresetParser } from './presetService';
import { PresetMatcher } from './presetService';
import { PresetNames } from './presetNames';
import { PresetSearch } from './presetSearch';
import { PresetCategories } from './presetCategories';

export class Presets {
  readonly parser: PresetParser;
  readonly matcher: PresetMatcher;
  readonly names: PresetNames;
  readonly searcher: PresetSearch;
  readonly categories: PresetCategories;

  constructor(
    parser: PresetParser,
    matcher: PresetMatcher,
    names: PresetNames,
    search: PresetSearch,
    categories: PresetCategories
  ) {
    this.parser = parser;
    this.matcher = matcher;
    this.names = names;
    this.searcher = search;
    this.categories = categories;
  }

  extend(pois: OverpassPoi[]): Poi[] {
    return pois.map(e => ({
      ...e,
      presetId: this.matcher.matchTags(e.tags)?.id
    }));
  }

  getPreset(id: string | undefined): Preset | undefined {
    if (id === undefined) {
      return undefined;
    }

    return this.parser.presetMap[id];
  }

  /**
   * Returns true, if this type of POI should/could have the specified field
   */
  hasField(poi: Poi, name: string): boolean {
    // If this tag is present, show it anyway
    // (even if it doesn't appear in the preset)
    if (name in poi.tags) {
      return true;
    }

    // Fetch the appropriate preset
    const preset = this.getPreset(poi.presetId);

    // ...and check whether this field is present
    return preset !== undefined && preset.fields.has(name);
  }

  enumerateFields(pois: Poi[]): Set<string> {
    const fields = new Set<string>();
    pois.forEach(poi => {
      const preset = this.getPreset(poi.presetId);
      if (!preset) {
        return;
      }

      preset.fields.forEach(field => {
        fields.add(field);
      });
    });

    return fields;
  }

  getName(id: string | undefined): string | undefined {
    return this.names.getName(id);
  }

  search(value: string): Preset[] {
    return this.searcher.search(value);
  }

  getChildPresets(root: Preset | undefined): Preset[] {
    return this.categories.getChildPresets(root);
  }
}
