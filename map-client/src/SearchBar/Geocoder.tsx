import React, { useCallback, useMemo } from 'react';
import AsyncSelect from 'react-select/async';
import { components, ControlProps } from 'react-select';
import { GoLocation } from 'react-icons/go';
import styled from 'styled-components';

import { createAutocomplete } from '@geocodeearth/core-js';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

import { AreaOption } from '../state';

interface Props {
  value: AreaOption | null;
  handleChange: (newArea: AreaOption | null) => void;
  isDisabled: boolean;
}

const Geocoder = ({ value, handleChange, isDisabled }: Props) => {
  const autocomplete = useMemo(() =>
    createAutocomplete({}, {
      host: 'api.digitransit.fi'
    }), []);

  const search = (
    inputValue: string,
    cb: (opt: AreaOption[]) => void
  ): void => {
    if (inputValue === '') {
      cb([]);
      return;
    }

    autocomplete(inputValue)
      .then(res => {
        if (!res.features) {
          console.log('search succeeded BUT returned NO features');
          cb([]);
          return;
        }

        const options = res.features.map(f => ({
          value: f,
          label: f.properties.label
        }));

        console.log('search succeeded, returning', options);
        cb(options);
      }).catch(err => {
        console.log('search failed, err:', err);
        cb([]);
      })
  };

  const noOptionsMessage = ({ inputValue }: { inputValue: string}): string => {
    if (inputValue === '') {
      return 'Type a place name...'
    }

    return 'No results';
  };

  const throttledSearch = useCallback(throttle(
    search, 1000, { leading: true, trailing: true }
  ), []);

  const debouncedSearch = useCallback(debounce(search, 1000), []);

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions={false}
      loadOptions={debouncedSearch}
      placeholder='Current map view'
      value={value}
      onChange={handleChange}
      isClearable={true}
      isDisabled={isDisabled}
      noOptionsMessage={noOptionsMessage}
      components={{ Control }}
      styles={{
        menu: css => ({ ...css, zIndex: 99999 }),
        valueContainer: css => ({ ...css, paddingLeft: 6, paddingRight: 6 })
      }} />
  );
};

const Control = ({ children, ...props }: ControlProps<AreaOption, false>) => (
  <components.Control {...props}>
    <Icon /> {children}
  </components.Control>
);

const Icon = styled(GoLocation)`
  margin-left: 8px;
  width: 1.25em;
  height: 1.25em;
  color: hsl(0, 0%, 50%);
`;

export default Geocoder;
