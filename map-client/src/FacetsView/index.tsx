import React from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../state';
import { setName, setBrand, checkCuisine, clear } from '../state/facetReducer';
import filter, { getCuisines } from './filter';
import { Poi } from '../types';

const Facets = () => {
  const data = useAppSelector(state => state.poiList.data);
  const facets = useAppSelector(state => state.facets);

  console.log('filtering data...');
  const filteredData = filter(data, facets);

  /*
  const filteredData = useAppSelector(state => {
    console.log('selecting filtered data...');
    return filter(state.poiList.data, state.facets);
  }, shallowEqual);
  */

  return (
    <Container>
      <Header>Refine the search</Header>
      <Name />
      <Brand />
      <Cuisine data={data} />
      <MatchCount filteredData={filteredData} />
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

const countCuisines = (pois: Poi[]) => {
  const counts = new Map<string, number>();
  pois.forEach(poi => {
    const cuisines = getCuisines(poi);
    cuisines.forEach(cuisine => {
      const count = counts.get(cuisine) ?? 0;
      counts.set(cuisine, count + 1);
    })
  });

  return counts;
};

const getCuisinesList = (counts: Map<string, number>) => {
  // Sort twice so that cuisines with the same count appear in alphabetical order
  // (assuming the sorting algorithm is stable)
  return Array.from(counts.entries())
    .sort()
    .sort((a, b) => b[1] - a[1])
    .map(e => e[0]);
};

interface CuisineProps {
  data: Poi[];
}

const Cuisine = ({ data }: CuisineProps) => {
  const dispatch = useAppDispatch();
  const checkedCuisines = useAppSelector(state => state.facets.cuisines);

  console.log('rendering cuisines...');

  const counts = countCuisines(data);
  const cuisinesWithNonzeroCount = getCuisinesList(counts);

  const handleChange = (cuisine: string)
  : React.ChangeEventHandler<HTMLInputElement> => (e) => {
    dispatch(checkCuisine(cuisine, e.target.checked));
  };

  const isChecked = (cuisine: string) => {
    return checkedCuisines.has(cuisine);
  }

  return (
    <Facet>
      <fieldset>
        <legend>Cuisines</legend>
        {cuisinesWithNonzeroCount.map((cuisine, index) =>
          <div key={`cuisine-${index}-${cuisine}`}>
            <label>
              <input
                type='checkbox'
                name={cuisine}
                checked={isChecked(cuisine)}
                onChange={handleChange(cuisine)} />
                {cuisine} <Count count={counts.get(cuisine)} />
            </label>
          </div>
        )}
      </fieldset>
    </Facet>
  );
};

interface CountProps {
  count: number | undefined;
}

const Count = ({ count }: CountProps) => {
  if (count === undefined) return null;
  return (
    <GraySpan>{count}</GraySpan>
  );
};

interface MatchCountProps {
  filteredData: Poi[];
}

const MatchCount = ({ filteredData }: MatchCountProps) => {
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

const GraySpan = styled.span`
  color: #757575;
`;

export default Facets;
