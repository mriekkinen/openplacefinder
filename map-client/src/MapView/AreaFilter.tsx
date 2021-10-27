import React from 'react';
import { useMap } from 'react-leaflet';
import styled from 'styled-components';
import { MdReplay } from 'react-icons/md';

import {
  setBBox, queryOverpass,
  useAppDispatch, useAppSelector
} from '../state';
import { buildBBoxQuery } from '../overpass';

const AreaFilter = () => {
  const dispatch = useAppDispatch();
  const feature = useAppSelector(state => state.search.feature);

  const map = useMap();

  const setArea = () => {
    const bounds = map.getBounds();

    dispatch(setBBox(bounds));

    if (feature !== null) {
      const query = buildBBoxQuery(
        [feature.value],
        bounds
      );

      dispatch(queryOverpass(query));
    }
  };

  return (
    <div className='leaflet-top leaflet-right'>
      <div className='leaflet-control leaflet-bar' onClick={setArea}>
        <a
          href='#'
          title='Search in this area'
          role='button'
          aria-label='Search in this area'>
          <Icon />
        </a>
      </div>
    </div>
  );
};

const Icon = styled(MdReplay)`
  font-size: 22px;
  vertical-align: middle;
`;

export default AreaFilter;
