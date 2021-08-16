import React from 'react';

import { Poi } from '../types';
import { getAddress } from '../MapView/address';
import { MapHandle } from '../MapView/SaveMapRef';
import GoToLocation from './GoToLocation';
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
        <b>{poi.tags['name']} </b>
        <GoToLocation
          mapRef={mapRef}
          e={poi}
        /> <br />
        {getAddress(poi)}
      </div>
      <div className='info-item'>
        <ReturnBtn setSelected={setSelected} />
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
