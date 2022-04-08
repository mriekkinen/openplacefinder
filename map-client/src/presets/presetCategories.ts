import { Preset } from "./types";
import { PresetNames } from "./presetNames";
import { PresetParser } from "./presetService";

export class PresetCategories {
  readonly presets: Preset[];
  readonly names: PresetNames;

  constructor(parser: PresetParser, names: PresetNames) {
    this.presets = parser.list
      .filter(p => p.geometry.includes('point') || p.geometry.includes('area'));
    this.names = names;
  }

  getPresets(root: Preset | undefined) {
    if (!root) {
      return this.presets.filter(p => !p.id.includes('/'));
    }

    return this.presets.filter(p => this.isDirectChild(root.id, p.id));
  }

  isDirectChild(rootId: string, candidateId: string): boolean {
    const expectedStart = `${rootId}/`;
    const end = candidateId.slice(expectedStart.length);
    return candidateId.startsWith(expectedStart) && !end.includes('/');
  }
}
