/**
 * Enables searching for presets by name.
 * 
 * NOTE: THIS FILE HAS BEEN ADAPTED FROM THE SOURCE CODE OF THE iD EDITOR!
 * 
 * The code is similar, but has been simplified from to the original.
 * You can view the original source at https://github.com/openstreetmap/iD
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

import { TOP_LEVEL_PRESETS } from '../conf';
import { Preset } from './types';
import { PresetNames } from './presetNames';
import { PresetParser } from './presetService';
import { getFirstAncestor, getParentId } from './utils';

export class PresetSearch {
  readonly presets: Preset[];
  readonly names: PresetNames;

  constructor(parser: PresetParser, names: PresetNames) {
    this.presets = parser.list
      .filter(p => TOP_LEVEL_PRESETS.includes(getFirstAncestor(p.id)))
      .filter(p => p.searchable || getParentId(p.id) === undefined)
      .filter(p => p.geometry.includes('point') || p.geometry.includes('area'));
    this.names = names;
  }

  search(value: string) {
    value = value.toLowerCase().trim();

    const names = this.presets.filter(
      p => this.names.getName(p.id)?.toLowerCase().includes(value)
    );

    const terms = this.presets.filter(
      p => this.names.getTerms(p.id)?.some(term => term.toLowerCase().includes(value))
    );

    const compare = (a: Preset, b: Preset): number => {
      const aName = this.names.getName(a.id)?.toLowerCase() ?? '';
      const bName = this.names.getName(b.id)?.toLowerCase() ?? '';

      // Priority if search string matches name exactly
      if (aName === value) return -1;
      if (bName === value) return 1;

      // Priority for higher matchScore
      let i = b.matchScore - a.matchScore;
      if (i !== 0) return i;

      // Priority if search string appears earlier in the name
      i = aName.indexOf(value) - bName.indexOf(value);
      if (i !== 0) return i;

      // Priority for shorter names
      return aName.length - bName.length;
    };

    names.sort(compare);

    return this.removeDuplicates([...names, ...terms]);
  }

  removeDuplicates(results: Preset[]) {
    const ids = new Set<string>();
    const unique: Preset[] = [];
    results.forEach(p => {
      if (!ids.has(p.id)) {
        unique.push(p);
      }

      ids.add(p.id);
    });

    return unique;
  }
}
