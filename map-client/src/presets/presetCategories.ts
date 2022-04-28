import { Preset } from "./types";
import { PresetNames } from "./presetNames";
import { PresetParser } from "./presetService";
import { isDirectChild } from './utils';

export class PresetCategories {
  readonly presets: Preset[];
  readonly names: PresetNames;

  constructor(parser: PresetParser, names: PresetNames) {
    this.presets = parser.list
      .filter(p => p.geometry.includes('point') || p.geometry.includes('area'));
    this.names = names;
  }

  getChildPresets(root: Preset | undefined) {
    if (!root) {
      return this.presets.filter(p => !p.id.includes('/'));
    }

    return this.presets.filter(p => isDirectChild(root.id, p.id));
  }
}
