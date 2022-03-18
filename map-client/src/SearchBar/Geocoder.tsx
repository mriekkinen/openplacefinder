import React, { useCallback, useMemo } from 'react';
import AsyncSelect from 'react-select/async';
import { components, ControlProps } from 'react-select';
import { GoLocation } from 'react-icons/go';
import styled from 'styled-components';

import { createAutocomplete } from '@geocodeearth/core-js';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

import { AreaOption } from '../state';
import { getGeocoderHost, getGeocoderWait } from '../conf';

interface Props {
  value: AreaOption | null;
  handleChange: (newArea: AreaOption | null) => void;
  isDisabled: boolean;
}

/**
 * An autocomplete component for translating place names into geographic features.
 * Queries a Pelias server repeatedly to provide suggestions while the user types.
 * 
 * Uses React Select for the UI, and an open source library for interacting
 * with a Pelias server.
 * 
 * Credit:
 * - Based on https://github.com/geocodeearth/autocomplete-element
 * - Uses a modified version of https://github.com/geocodeearth/core-js
 */
const Geocoder = ({ value, handleChange, isDisabled }: Props) => {
  const autocomplete = useMemo(() =>
    createAutocomplete({}, {
      host: getGeocoderHost()
    }), []);

  const wait = getGeocoderWait();

  const search = (
    inputValue: string,
    cb: (opt: AreaOption[]) => void
  ): void => {
    if (inputValue === '') {
      cb([]);
      return;
    }

    autocomplete(inputValue)
      .then(({ features, discard }) => {
        // Discard out-of-order responses
        if (discard) {
          return;
        }

        if (!features) {
          cb([]);
          return;
        }

        const options = features.map(f => ({
          value: f,
          label: f.properties.label
        }));

        cb(options);
      }).catch(err => {
        console.log('Search failed, err:', err);
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
    search, wait, { leading: true, trailing: true }
  ), []);

  const debouncedSearch = useCallback(debounce(search, wait), []);

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions={false}
      loadOptions={throttledSearch}
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
      }}
    />
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
