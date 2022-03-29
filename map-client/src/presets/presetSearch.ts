import { Preset } from "./types";
import { PresetNames } from "./presetNames";
import { PresetParser } from "./presetService";

export class PresetSearch {
  readonly presets: Preset[];
  readonly names: PresetNames;

  constructor(parser: PresetParser, names: PresetNames) {
    this.presets = parser.list
      .filter(p => p.searchable)
      .filter(p => p.geometry.includes('point') || p.geometry.includes('area'));
    this.names = names;
  }

  search(value: string) {
    value = value.trim().toLowerCase();
    return this.presets.filter(
      p => this.names.getName(p.id)?.toLowerCase().includes(value)
    );
  }
}
