import { useEffect } from 'react';
import { LatLngBounds } from 'leaflet';
import { useMap } from 'react-leaflet';

import { MapFeature, clearPoiList, useAppDispatch } from '../state';

interface Props {
  q: string | undefined;
  findFeature: (q: string | undefined) => MapFeature | undefined;
  makeQuery: (
    feature: MapFeature,
    bounds: LatLngBounds,
    zoom: number
  ) => void;
}

const QueryOverpass = ({ q, findFeature, makeQuery }: Props) => {
  const dispatch = useAppDispatch();
  const map = useMap();

  // Request data from Overpass, if the query has changed
  useEffect(() => {
    const feature = findFeature(q);
    if (!feature) {
      dispatch(clearPoiList());
      return;
    }

    makeQuery(
      feature,
      map.getBounds(),
      map.getZoom()
    );
  }, [q]);

  return null;
};

export default QueryOverpass;
