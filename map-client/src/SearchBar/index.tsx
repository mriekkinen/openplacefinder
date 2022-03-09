import React from 'react';

import {
  MapFeature,
  clearPoiList,
  useAppDispatch, useAppSelector
} from '../state';
import { SearchParams } from '../params';
import { Container, Header, Item } from './styles';
import SearchBox from './SearchBox';
import Area, { CURRENT_MAP_VIEW } from './Area';
import FiltersBtn from './FiltersBtn';

interface Props {
  params: SearchParams;
  findFeature: (q: string | undefined) => MapFeature | undefined;
}

const SearchBar = ({ params, findFeature }: Props) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.poiList.status);

  const feature = findFeature(params.q);

  const handleFeatureChange = (newFeature: MapFeature | null) => {
    if (newFeature === null) {
      params.q = undefined;
      params.id = undefined;
      params.facets = {};
      params.commit()
      dispatch(clearPoiList());
      return;
    }

    params.q = newFeature.label;
    params.id = undefined;
    params.facets = {};
    params.commit();
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
