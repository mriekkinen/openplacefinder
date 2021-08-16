import React from 'react';

import { Poi } from '../types';
import { MapHandle } from '../MapView/SaveMapRef';
import Address from './Address';
import ReturnBtn from './ReturnBtn';
import Link from './Link';

interface Props {
  mapRef: React.RefObject<MapHandle>;
  poi: Poi;
  setSelected: React.Dispatch<React.SetStateAction<Poi | null>>;
}

const InfoView = ({ mapRef, poi, setSelected }: Props) => {
  return (
    <div className='info-container'>
      <div className='info-item'>
        <ReturnBtn setSelected={setSelected} />
      </div>
      <div className='info-item'>
        <h2>{poi.tags['name']}</h2>
        <span>Tea shop</span>
      </div>
      <div className='info-item'>
        <Address mapRef={mapRef} e={poi} />
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
