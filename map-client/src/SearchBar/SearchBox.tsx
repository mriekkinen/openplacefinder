import React from 'react';
import styled from 'styled-components';
import { components, ControlProps } from 'react-select';
import AsyncSelect from 'react-select/async';
import { MdSearch } from 'react-icons/md';

import { PresetOption, showPresetModal, useAppDispatch } from '../state';
import { Preset, presetSingleton } from '../presets';

interface Props {
  value: PresetOption | null;
  handleChange: (newValue: PresetOption | null) => void;
  toPresetOption: (p: Preset) => PresetOption;
  isDisabled: boolean;
}

const SearchBox = ({ value, handleChange, toPresetOption, isDisabled }: Props) => {
  const dispatch = useAppDispatch();

  const search = (
    inputValue: string,
    cb: (opt: PresetOption[]) => void
  ): void => {
    if (inputValue === '') {
      cb([]);
      return;
    }

    const presets = presetSingleton.search(inputValue);
    const options = presets.map(toPresetOption);
    cb(options);
  };

  const noOptionsMessage = ({ inputValue }: { inputValue: string}): React.ReactNode => {
    if (inputValue === '') {
      return (
        <div>
          <div>Enter a category...</div>
          <div>Or{' '}
            <button onClick={() => dispatch(showPresetModal(handleChange))}>
              select from a list
            </button>
          </div>
        </div>
      );
    }

    return 'No results';
  };

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions={false}
      loadOptions={search}
      placeholder='What are you looking for?'
      value={value}
      onChange={handleChange}
      isClearable={true}
      isDisabled={isDisabled}
      noOptionsMessage={noOptionsMessage}
      components={{ Control }}
      styles={{
        menu: css => ({ ...css, zIndex: 99999 }),
        valueContainer: css => ({ ...css, paddingLeft: 6, paddingRight: 6 })
      }}
    />
  );
};

const Control = ({ children, ...props }: ControlProps<PresetOption, false>) => (
  <components.Control {...props}>
    <Icon /> {children}
  </components.Control>
);

const Icon = styled(MdSearch)`
  margin-left: 8px;
  width: 1.5em;
  height: 1.5em;
  color: hsl(0, 0%, 50%);
`;

export default SearchBox;
