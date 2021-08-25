import React from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../state';
import { setName, setBrand, clear } from '../state/facetReducer';
import filter from './filter';

const Facets = () => {
  return (
    <Container>
      <Header>Refine the search</Header>
      <Name />
      <Brand />
      <MatchCount />
      <Clear />
    </Container>
  );
};

const Name = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(state => state.facets.name);

  return (
    <Facet>
      Name: {' '}
      <input
        type='text'
        value={name}
        onChange={e => dispatch(setName(e.target.value))} />
    </Facet>
  )
};

const Brand = () => {
  const dispatch = useAppDispatch();
  const brand = useAppSelector(state => state.facets.brand);

  return (
    <Facet>
      Brand: {' '}
      <input
        type='text'
        value={brand}
        onChange={e => dispatch(setBrand(e.target.value))} />
    </Facet>
  )
};

// TODO: This should be removed at some point (meant only for testing)
const MatchCount = () => {
  const data = useAppSelector(state => state.poiList.data);
  const facets = useAppSelector(state => state.facets);

  const filteredData = filter(data, facets);

  return (
    <Facet>
      <b>{filteredData.length}</b> matches
    </Facet>
  )
};

const Clear = () => {
  const dispatch = useAppDispatch();

  return (
    <Facet>
      <Button
        type='button'
        onClick={() => dispatch(clear())}>
        Clear
      </Button>
    </Facet>
  );
};

const Container = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin: 0 5px 5px 5px;
  width: 300px;
  border: 1px solid lightgray;
  border-radius: 4px;
`;

const Header = styled.div`
  margin: 10px 10px 0 10px;
  font-weight: 600;
`;

const Facet = styled.div`
  margin: 10px;
  line-height: 1.25;
`;

const Button = styled.button`
  width: 7rem;
  padding: 0.5rem;
  background-color: #4CAF50;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 3px;
  
`;

export default Facets;
