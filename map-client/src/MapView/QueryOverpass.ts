import { useEffect } from 'react';
import { LatLngBounds } from 'leaflet';
import { useMap } from 'react-leaflet';

import { MapFeature } from '../state';

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
  const map = useMap();

  // Request data from Overpass, if the query has changed
  useEffect(() => {
    const feature = findFeature(q);
    if (!feature) {
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
