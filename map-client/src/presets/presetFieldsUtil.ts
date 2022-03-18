import { Preset } from './types';
import { PresetParser } from './presetService';

export class PresetFieldsUtil {
  readonly parser: PresetParser;

  constructor(parser: PresetParser) {
    this.parser = parser;
  }

  /**
   * Applies additional processing after the presets have been loaded.
   * 
   * See: https://github.com/ideditor/schema-builder#fieldsmorefields
   */
  doPostProcessing(presets: Preset[]): void {
    presets.forEach(p => {
      this.fillInReferences(p);
    });

    presets.forEach(p => {
      if (p.fields.size === 0) {
        this.fillInParentFields(p);
      }
    });
  }

  /**
   * Fills in references, i.e. field declarions of the form {otherPreset}.
   * 
   * Presets can refer to the field declarions of other presets. This helps
   * to avoid duplication. This method replaces references with the full
   * set of fields from the other preset which was referred to.
   * 
   * For instance: amenity/university which refers to amenity/college.
   */
  private fillInReferences(preset: Preset): void {
    const toBeAdded: string[] = [];
    const toBeRemoved: string[] = [];
    preset.fields.forEach(field => {
      if (field.length < 3
          || field[0] !== '{'
          || field[field.length-1] !== '}') {
        return;
      }

      const refName = field.slice(1, field.length-1);
      const refPreset = this.parser.presetMap[refName];
      if (!refPreset) {
        return;
      }

      toBeRemoved.push(field);
      refPreset.fields.forEach(f => {
        toBeAdded.push(f)
      });
    });

    toBeRemoved.forEach(f => {
      preset.fields.delete(f);
    });

    toBeAdded.forEach(f => {
      preset.fields.add(f);
    });
  }

  /**
   * Populates an empty field set with the parent's field set.
   * 
   * For instance: amenity/restaurant/pizza defines no fields, and
   * hence we should use the field set of the parent amenity/restaurant.
   */
  private fillInParentFields(preset: Preset): void {
    if (preset.fields.size !== 0) {
      return;
    }

    // Look up the parent
    const parentId = this.getParentId(preset.id);
    const parent = parentId ? this.parser.presetMap[parentId] : undefined;
    if (!parent) {
      return;
    }

    // See if the parent has any fields, and add those in
    parent.fields.forEach(field => {
      preset.fields.add(field);
    });
  }

  private getParentId(id: string): string | undefined {
    const last = id.lastIndexOf('/');
    if (last === -1) return undefined;
    return id.slice(0, last);
  }
}

export default PresetFieldsUtil;
