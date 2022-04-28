import React from 'react';
import styled from 'styled-components';

import { Poi, PoiWithDistance } from '../types';
import { Country } from '../state';
import { presetSingleton, getAncestors } from '../presets';
import { getAddress, getCuisines, getDistance } from '../info';
import { OpenStateWrapper } from '../InfoView/OpenState';
import { PresetIcon } from '../icons';

interface Props {
  e: PoiWithDistance;
  country: Country | undefined;
  handleClick: () => void;
}

const ListElement = (
  { e, country, handleClick }: Props
) => {
  const now = new Date();

  return (
    <Container onClick={handleClick}>
      <IconDiv>
        <PresetIcon presetId={e.presetId} />
      </IconDiv>
      <ContentDiv>
        <b>{e.tags['name']}</b><br/>
        <Category id={e.presetId} /><br/>
        {getAddress(e, 'long')}<br/>
        Distance: {getDistance(e)}<br/>
        {presetSingleton.hasField(e, 'cuisine') &&
          <>
            Cuisine: {getPrimaryCuisines(e)}<br/>
          </>
        }
        {/*
        <OpenStateWrapper
          poi={e}
          country={country}
          now={now} />
        */}
      </ContentDiv>
    </Container>
  );
};

const Category = ({ id }: { id: string | undefined }) => {
  if (!id) return null;
  const ancestors = getAncestors(id);
  const names = ancestors.map(sid => presetSingleton.getName(sid));

  // Format the category like this:
  //   category >> subcategory >>
  //   subsubcategory
  return (
    <span>
      <span style={{ color: 'gray' }}>
        {names.slice(0, -1).join('»')}&raquo;<br />
      </span>
      <span>{names[names.length-1]}</span>
    </span>
  );
};

export const getLocalCategoryPath = (id: string, sep: string): string => {
  const ancestors = getAncestors(id);
  const names = ancestors.map(sid => presetSingleton.getName(sid));
  return names.join(sep);
};

const Container = styled.div`
  display: flex;
  cursor: pointer;
  margin: 0;
  padding: 10px 15px;
  line-height: 1.25;
  border-bottom: 1px solid hsl(0, 0%, 80%);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: hsl(0, 0%, 93%);
  }
`;

const IconDiv = styled.div`
  flex: none;
  padding-right: 5px;
`;

const ContentDiv = styled.div`
  flex: auto;
`;

const getPrimaryCuisines = (e: Poi) => {
  const cuisines = getCuisines(e);
  if (cuisines.length <= 3) {
    return cuisines.join(', ');
  }

  return `${cuisines.slice(0, 3).join(', ')}...`;
};

export default ListElement;
