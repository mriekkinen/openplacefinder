import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import { MapState } from './types';

interface Props {
  mapParam: MapState;
}

const HandleBackFwd = ({ mapParam }: Props) => {
  const map = useMap();
  useEffect(() => {
    if (map.getZoom() !== mapParam.zoom
        || map.getCenter().lat.toFixed(4) !== mapParam.center.lat.toFixed(4)
        || map.getCenter().lng.toFixed(4) !== mapParam.center.lng.toFixed(4)) {
      console.log(
        'HandleBackFwd.setView: map:',
        `${map.getZoom()}/${map.getCenter().lat.toFixed(4)}/${map.getCenter().lng.toFixed(4)}`,
        '--> mapParam:',
        `${mapParam.zoom}/${mapParam.center.lat.toFixed(4)}/${mapParam.center.lng.toFixed(4)}`
      );

      // Update map view to match the current URL
      // This happens when the user clicks the browser's back/fwd button
      //
      // We need this because Leaflet maintains its own state,
      // which would otherwise become out of sync with the URL
      // (on the other hand, we don't need to worry about the "id" parameter)
      map.setView(mapParam.center, mapParam.zoom);
    }
  }, [
    map,
    mapParam.center.lat,
    mapParam.center.lng,
    mapParam.zoom
  ]);

  return null;
};

export default HandleBackFwd;
