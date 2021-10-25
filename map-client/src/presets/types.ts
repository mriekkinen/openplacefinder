import { Tags } from '../types';

export interface PresetJson {
  tags: Tags;
  addTags?: Tags;
  fields?: string[];
  moreFields?: string[];
  originalScore?: number;
  icon?: string;
}

export interface PresetJsonMap {
  [id: string]: PresetJson;
}

export interface Preset {
  id: string;
  tags: Tags;
  addTags?: Tags;
  fields: Set<string>;
  originalScore: number;
  icon?: string;
}

export interface PresetIndex {
  [key: string]: Preset[] | undefined;
}

export interface PresetMap {
  [id: string]: Preset | undefined;
}

export interface PresetNamesJson {
  [locale: string]: {
    presets: {
      presets: {
        [id: string]: {
          name: string
        };
      }
    }
  } | undefined;
}

export interface PresetNamesMap {
  [id: string]: string | undefined
}
