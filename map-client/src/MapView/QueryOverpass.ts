import { useEffect } from 'react';
import { LatLngBounds } from 'leaflet';
import { useMap } from 'react-leaflet';

import { PresetOption, clearPoiList, useAppDispatch } from '../state';
import { Preset } from '../presets';

interface Props {
  q: string | undefined;
  findPreset: (q: string | undefined) => PresetOption | undefined;
  makeQuery: (
    preset: Preset,
    bounds: LatLngBounds,
    zoom: number
  ) => void;
}

const QueryOverpass = ({ q, findPreset, makeQuery }: Props) => {
  const dispatch = useAppDispatch();
  const map = useMap();

  // Request data from Overpass, if the query has changed
  useEffect(() => {
    const preset = findPreset(q)?.value;
    if (!preset) {
      dispatch(clearPoiList());
      return;
    }

    makeQuery(
      preset,
      map.getBounds(),
      map.getZoom()
    );
  }, [q]);

  return null;
};

export default QueryOverpass;
