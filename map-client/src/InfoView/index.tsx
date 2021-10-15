import React from 'react';

import { setSelected, useAppDispatch, useAppSelector } from '../state';
import { PoiDecorator } from '../overpass';
import { MapHandle } from '../MapView/SetMapRef';
import Address from './Address';
import ReturnBtn from './ReturnBtn';
import Link from './Link';
import OpeningHours from './OpeningHours';
import { OpenStateWrapper } from './OpenState';
import Cuisines from './Cuisines';
import { PresetIcon } from '../icons';

interface Props {
  mapRef: React.RefObject<MapHandle>;
}

const InfoView = ({ mapRef }: Props) => {
  const dispatch = useAppDispatch();
  const id = useAppSelector(state => state.ui.selected);
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);

  const poi = data.find(e => e.id === id);

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
        <div>
          <PresetIcon presetId={poi.presetId} /> {' '}
          {poi.presetId}
        </div>
      </div>
      <div className='info-item'>
        <Address mapRef={mapRef} e={poi} />
      </div>
      {PoiDecorator.hasField(poi, 'opening_hours') &&
        <>
          <div className='info-item'>
            <OpenStateWrapper
              poi={poi}
              country={country}
              now={now} />
          </div>
          <div className='info-item'>
            <OpeningHours openingHours={poi.tags['opening_hours']} />
          </div>
        </>
      }
      {PoiDecorator.hasField(poi, 'cuisine') &&
        <div className='info-item'>
          <Cuisines poi={poi} />
        </div>
      }
      <div className='info-item'>
        <Link
          href={poi.tags['website']}
          label={poi.tags['website']} />
      </div>
    </div>
  );
};

export default InfoView;
