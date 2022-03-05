import React from 'react';

import {
  MapFeature,
  clearPoiList,
  useAppDispatch, useAppSelector
} from '../state';
import { Container, Header, Item } from './styles';
import SearchBox from './SearchBox';
import Area, { CURRENT_MAP_VIEW } from './Area';
import FiltersBtn from './FiltersBtn';

interface Props {
  query: string | undefined;
  setQuery: (newQuery: string | undefined) => void;
  setId: (newId: number | undefined) => void;
  findFeature: (q: string | undefined) => MapFeature | undefined;
}

const SearchBar = ({ query, setQuery, setId, findFeature }: Props) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.poiList.status);

  const feature = findFeature(query);

  const handleFeatureChange = (newFeature: MapFeature | null) => {
    if (newFeature === null) {
      setQuery(undefined);
      setId(undefined);
      dispatch(clearPoiList());
      return;
    }

    setQuery(newFeature.label);
  };

  return (
    <Container>
      <Header>Search</Header>
      <Item>
        <SearchBox
          value={feature ?? null}
          handleChange={handleFeatureChange}
          isLoading={status === 'loading'}
        />
      </Item>
      <Item>
        <Area
          value={CURRENT_MAP_VIEW}
          handleChange={() => undefined}
          isLoading={status === 'loading'}
        />
      </Item>
      <Item>
        <FiltersBtn />
      </Item>
    </Container>
  );
};

export default SearchBar;
