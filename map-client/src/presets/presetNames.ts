import { PresetNamesJson, PresetNamesMap } from './types';

export class PresetNames {
  names: PresetNamesMap;

  constructor(json: PresetNamesJson, locale: string) {
    this.names = {};
    const translations = json[locale]?.presets.presets;
    if (!translations) {
      throw new Error('Unsupported locale: did you pass the correct JSON file?');
    }

    for (const id in translations) {
      this.names[id] = translations[id].name;
    }
  }

  getName(id: string | undefined): string | undefined {
    if (id === undefined) {
      return undefined;
    }

    return this.names[id] ?? id;
  }
}
