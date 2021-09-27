import React, { useState } from 'react';

import {
  queryOverpass, setCountry, clearPoiList,
  Status, Country,
  useAppDispatch, useAppSelector
} from '../state';
import { buildQuery } from './queryBuilder';
import { Option } from './types';
import { Container, Header, Item } from './styles';
import SearchBox from './SearchBox';
import Location from './Location';

interface Props {
  areaFilter: string[];
  country: Country;
}

const SearchView = ({ areaFilter, country }: Props) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.poiList.status);
  const location = useAppSelector(state => state.location);

  const [option, setOption] = useState<Option | null>(null);

  const handleChange = (newOption: Option | null) => {
    setOption(newOption);
    submit(newOption);
  };

  const submit = (newOption: Option | null) => {
    if (newOption === null) {
      dispatch(clearPoiList());
      return;
    }

    const query = buildQuery(
      [newOption.value],
      areaFilter
    );

    dispatch(queryOverpass(query));
    dispatch(setCountry(country));
  };

  return (
    <Container>
      <Header>Search for</Header>
      <Item>
        <SearchBox
          value={option}
          handleChange={handleChange}
          isLoading={status === 'loading'} />
      </Item>
      <Item>
        <Location lat={location.lat} lon={location.lon} />
      </Item>
      {status === 'failed' &&
        <Item>{getErrorMsg(status)}</Item>
      }
    </Container>
  );
};

const getErrorMsg = (status: Status) => {
  if (status !== 'failed') {
    return null;
  }

  // TODO: Provide more info about the error
  return <span>Query failed</span>;
};

export default SearchView;
