import React from 'react';

import { setSelected, useAppDispatch, useAppSelector } from '../state';
import { MapHandle } from '../MapView/SetMapRef';
import Address from './Address';
import ReturnBtn from './ReturnBtn';
import Link from './Link';
import { OpeningHours, OpenStateWrapper } from './OpeningHours';
import Cuisines from './Cuisines';

interface Props {
  mapRef: React.RefObject<MapHandle>;
}

const InfoView = ({ mapRef }: Props) => {
  const dispatch = useAppDispatch();
  const poi = useAppSelector(state => state.ui.selected);
  const country = useAppSelector(state => state.poiList.country);

  if (!poi) {
    return (
      <div className='info-container'>
        <div className='info-item'>
          <i>Nothing selected</i>
        </div>
      </div>
    );
  }

  const now = new Date();

  return (
    <div className='info-container'>
      <div className='info-item'>
        <ReturnBtn
          handleClick={() => dispatch(setSelected(null))} />
      </div>
      <div className='info-item'>
        <h2>{poi.tags['name']}</h2>
        <span>Tea shop</span>
      </div>
      <div className='info-item'>
        <Address mapRef={mapRef} e={poi} />
      </div>
      <div className='info-item'>
        <OpenStateWrapper
          poi={poi}
          country={country}
          now={now} />
      </div>
      <div className='info-item'>
        <OpeningHours openingHours={poi.tags['opening_hours']} />
      </div>
      <div className='info-item'>
        <Cuisines poi={poi} />
      </div>
      <div className='info-item'>
        <Link
          href={poi.tags['website']}
          label={poi.tags['website']} />
      </div>
    </div>
  );
};

export default InfoView;
