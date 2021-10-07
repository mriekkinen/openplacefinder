import { Tags } from '../types';

export interface PresetJson {
  tags: Tags;
  addTags?: Tags;
  originalScore?: number;
}

export interface PresetJsonMap {
  [id: string]: PresetJson;
}

export interface Preset {
  id: string;
  tags: Tags;
  addTags?: Tags;
  originalScore: number;
}

export interface PresetIndex {
  [key: string]: Preset[];
}
