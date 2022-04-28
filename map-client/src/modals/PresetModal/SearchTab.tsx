import React, { useState } from 'react';

import { getPresetsMaxResults } from '../../conf';
import { PresetOption, toPresetOption } from '../../state';
import { presetSingleton } from '../../presets';
import { Footer, CancelBtn } from '../Modal';

import { SearchBox } from './SearchBox';
import { ResultCount } from './ResultCount';
import { Presets } from './Presets';

interface SearchTabProps {
  handleClose: () => void;
  handleChange: ((newValue: PresetOption | null) => void);
}

export const SearchTab = ({ handleClose, handleChange }: SearchTabProps) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<PresetOption[]>([]);

  const maxResults = getPresetsMaxResults();

  const search = (inputValue: string) => {
    const presets = presetSingleton.search(inputValue);
    const options = presets.map(toPresetOption);

    setResults(options);
  };

  const handleQueryChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value;
    if (inputValue === '') {
      setQuery(inputValue);
      setResults([]);
      return;
    }

    setQuery(inputValue);
    search(inputValue);
  };

  return (
    <div>
      <SearchBox
        query={query}
        handleQueryChange={handleQueryChange} />
      <ResultCount
        n={results.length}
        maxResults={maxResults}
        query={query} />
      <Presets
        presets={results.slice(0, maxResults)}
        handleClick={handleChange} />
      <Footer>
        <CancelBtn onClick={() => handleClose()}>
          Cancel
        </CancelBtn>
      </Footer>
    </div>
  );
};
