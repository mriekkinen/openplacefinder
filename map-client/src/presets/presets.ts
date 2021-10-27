import { OverpassPoi, Poi } from '../types';
import { Preset } from './types';
import { PresetParser } from './presetService';
import { PresetMatcher } from './presetService';
import { PresetNames } from './presetNames';

export class Presets {
  readonly parser: PresetParser;
  readonly matcher: PresetMatcher;
  readonly names: PresetNames;

  constructor(parser: PresetParser, matcher: PresetMatcher, names: PresetNames) {
    this.parser = parser;
    this.matcher = matcher;
    this.names = names;
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
}
