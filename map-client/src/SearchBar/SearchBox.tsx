import React from 'react';
import styled from 'styled-components';
import { components, ControlProps, OptionProps } from 'react-select';
import AsyncSelect from 'react-select/async';
import { MdInfoOutline, MdSearch } from 'react-icons/md';

import { PresetOption, showPresetModal, useAppDispatch } from '../state';
import { Preset, presetSingleton } from '../presets';
import { PRESETS_MAX_RESULTS } from '../conf';

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
    const sliced = presets.slice(0, PRESETS_MAX_RESULTS);
    const options = sliced.map(toPresetOption);
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

  const Option = (props: OptionProps<PresetOption, false>) => {
    const handleInfoClick: React.MouseEventHandler<SVGElement> = (e) => {
      e.stopPropagation();
      dispatch(showPresetModal(
        handleChange,
        toPresetOption(props.data.value)
      ));
    };

    return (
      <components.Option {...props}>
        <OptionContainer>
          <OptionLabel>{props.data.label}</OptionLabel>
          <InfoIcon onClick={handleInfoClick} />
        </OptionContainer>
      </components.Option>
    );
  };

  return (
    <AsyncSelect
      defaultOptions={false}
      loadOptions={search}
      placeholder='What are you looking for?'
      value={value}
      onChange={handleChange}
      isClearable={true}
      isDisabled={isDisabled}
      noOptionsMessage={noOptionsMessage}
      components={{ Control, Option }}
      styles={{
        menu: css => ({ ...css, zIndex: 99999 }),
        valueContainer: css => ({ ...css, paddingLeft: 6, paddingRight: 6 })
      }}
    />
  );
};

const Control = ({ children, ...props }: ControlProps<PresetOption, false>) => (
  <components.Control {...props}>
    <SearchIcon /> {children}
  </components.Control>
);

const SearchIcon = styled(MdSearch)`
  margin-left: 8px;
  width: 1.5em;
  height: 1.5em;
  color: hsl(0, 0%, 50%);
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const OptionLabel = styled.div`
  flex: 1;
`;

const InfoIcon = styled(MdInfoOutline)`
  flex: none;
  margin: 0 0;
  width: 1.25em;
  height: 1.25em;
  color: hsl(0, 0%, 50%);

  &:hover {
    color: hsl(0, 0%, 25%);
  }
`;

export default SearchBox;
