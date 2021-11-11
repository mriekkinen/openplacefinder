import React from 'react';
import { useMap } from 'react-leaflet';
import styled from 'styled-components';
import { MdReplay } from 'react-icons/md';

import {
  ModalType, setBBox, showModal, queryOverpass,
  useAppDispatch, useAppSelector
} from '../state';
import { buildBBoxQuery } from '../overpass';
import { isZoomSufficient } from '../conf';

const AreaFilter = () => {
  const dispatch = useAppDispatch();
  const feature = useAppSelector(state => state.search.feature);

  const map = useMap();

  const setArea = () => {
    if (feature === null) {
      // TODO: Consider showing a modal
      // Something like: "no feature selected"
      return;
    }

    const bounds = map.getBounds();
    const zoom = map.getZoom();

    if (!isZoomSufficient(zoom)) {
      console.log('Please zoom in to view data!')
      dispatch(showModal(ModalType.ZoomInModal));
      return;
    }

    const query = buildBBoxQuery(
      [feature.value],
      bounds
    );

    dispatch(setBBox(bounds));
    dispatch(queryOverpass(query));
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
