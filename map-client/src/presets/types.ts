import { Tags } from '../types';

export interface PresetJson {
  tags: Tags;
  addTags?: Tags;
  fields?: string[];
  moreFields?: string[];
  matchScore?: number;
  icon?: string;
  searchable?: boolean;
  geometry: string[];
}

export interface PresetJsonMap {
  [id: string]: PresetJson;
}

export interface Preset {
  id: string;
  tags: Tags;
  addTags?: Tags;
  fields: Set<string>;
  matchScore: number;
  icon?: string;
  searchable: boolean;
  geometry: string[];
}

export interface PresetIndex {
  [key: string]: Preset[] | undefined;
}

export interface PresetMap {
  [id: string]: Preset | undefined;
}

export interface PNamesJson {
  name: string;
  terms?: string;
}

export interface PNames {
  name: string;
  terms: string[];
}

export interface PresetNamesJson {
  [locale: string]: {
    presets: {
      presets: {
        [id: string]: PNamesJson;
      }
    }
  } | undefined;
}

export interface PresetNamesMap {
  [id: string]: PNames | undefined
}
