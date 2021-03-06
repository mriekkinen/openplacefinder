/**
 * Matches an entity to a list of presets. Can be used to determine, for
 * instance, the type of an entity.
 * 
 * You can view the presets at https://github.com/openstreetmap/id-tagging-schema
 * 
 * NOTE: THIS FILE HAS BEEN ADAPTED FROM THE SOURCE CODE OF THE iD EDITOR!
 * 
 * The code is mostly the same, with some minor modifications. You can view the
 * original source at https://github.com/openstreetmap/iD
 * 
 * Copyright (c) 2017, iD Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

import { Tags } from '../types';
import {
  Preset, PresetIndex, PresetJson, PresetJsonMap, PresetMap
} from './types';
import PresetFieldsUtil from './presetFieldsUtil';

export class PresetParser {
  readonly list: Preset[];
  readonly index: PresetIndex;
  readonly presetMap: PresetMap;

  constructor(json: PresetJsonMap, includeAll: boolean) {
    const presets = this.parsePresetData(json, includeAll);
    this.list = presets;
    this.index = this.buildIndex(presets);
    this.presetMap = this.buildMap(presets);

    // This should be done last
    if (includeAll) {
      const fieldsUtil = new PresetFieldsUtil(this);
      fieldsUtil.doPostProcessing(presets);
    }
  }

  parsePresetData(data: PresetJsonMap, includeAll: boolean): Preset[] {
    const presets: Preset[] = [];
    for (const id in data) {
      const pd: PresetJson = data[id];
      if (!includeAll && this.canIgnore(pd)) {
        continue;
      }

      const allFields = [
        ...(pd.fields ?? []),
        ...(pd.moreFields ?? [])
      ];

      const p: Preset = {
        id,
        tags: pd.tags,
        fields: new Set(allFields),
        matchScore: pd.matchScore ?? 1,
        searchable: pd.searchable ?? true,
        geometry: pd.geometry
      };

      if (pd.addTags) {
        p.addTags = pd.addTags;
      }

      if (pd.icon) {
        p.icon = pd.icon;
      }

      if (pd.reference) {
        p.reference = pd.reference;
      }

      presets.push(p);
    }

    return presets;
  }

  buildIndex(presets: Preset[]): PresetIndex {
    // TODO: Consider differentiating by the type of geometry (point, area, ...)
    const index: PresetIndex = {};
    presets.forEach(preset => {
      for (const key in preset.tags) {
        (index[key] = index[key] ?? []).push(preset);
      }
    });

    return index;
  }

  buildMap(presets: Preset[]): PresetMap {
    const map: PresetMap = {};
    presets.forEach(preset => {
      map[preset.id] = preset;
    });

    return map;
  }

  canIgnore(preset: PresetJson): boolean {
    for (const k in preset.tags) {
      // Ignore presets where the value field is '*'
      if (preset.tags[k] === '*') {
        return true;
      }

      // Ignore presets which have no fields
      // For instance, "embankment", which is an attribute
      // if (!(('fields' in preset) || ('moreFields' in preset))) {
      //   return true;
      // }

      // Ignore the address presets (there seem to be just 2)
      if (/^addr:/.test(k)) {
        return true;
      }
    }

    return false;
  }
}

export class PresetMatcher {
  readonly parser: PresetParser;

  constructor(parser: PresetParser) {
    this.parser = parser;
  }

  matchTags(tags: Tags): Preset | null {
    let best = -1;
    let match = null;

    for (const k in tags) {
      const keyMatches = this.parser.index[k];
      if (!keyMatches) continue;

      keyMatches.forEach(candidate => {
        const score = this.matchScore(candidate, tags);
        if (score > best) {
          best = score;
          match = candidate;
        }
      });
    }

    return match;
  }

  matchScore(preset: Preset, entityTags: Tags): number {
    const seen = new Set<string>();
    let score = 0;

    // match on tags
    for (const k in preset.tags) {
      seen.add(k);
      if (entityTags[k] === preset.tags[k]) {
        score += preset.matchScore;
      } else if (preset.tags[k] === '*' && k in entityTags) {
        score += preset.matchScore / 2;
      } else {
        return -1;
      }
    }

    // boost score for additional matches in addTags - #6802
    for (const k in preset.addTags) {
      if (!seen.has(k) && entityTags[k] === preset.addTags[k]) {
        score += preset.matchScore;
      }
    }

    return score;
  }
}
