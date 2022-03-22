import { useEffect } from 'react';
import { LatLngBounds } from 'leaflet';
import { useMap } from 'react-leaflet';

import { clearPoiList, useAppDispatch } from '../state';
import { Preset } from '../presets';

interface Props {
  q: Preset | undefined;
  makeQuery: (
    preset: Preset,
    bounds: LatLngBounds,
    zoom: number
  ) => void;
}

const QueryOverpass = ({ q, makeQuery }: Props) => {
  const dispatch = useAppDispatch();
  const map = useMap();

  // Request data from Overpass, if the query has changed
  useEffect(() => {
    if (!q) {
      dispatch(clearPoiList());
      return;
    }

    makeQuery(
      q,
      map.getBounds(),
      map.getZoom()
    );
  }, [q]);

  return null;
};

export default QueryOverpass;
