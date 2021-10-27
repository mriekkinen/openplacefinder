import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import { useAppSelector } from '../state';

/**
 * Instructs Leaflet to refresh map dimensions when the map container resizes.
 * 
 * If the size size of the map container changes after initialization,
 * Leaflet won't be informed of the change, and this may break rendering.
 * The map container resizes when the POI list is cleared -- or populated again.
 * To correct this problem, we need to call map.invalidateSize manually.
 * 
 * To clarify, this problem doesn't arise when the user resizes the browser
 * window, since Leaflet will handle that event automatically.
 * 
 * For reference, see https://stackoverflow.com/a/36257493
 */
const HandleResize = () => {
  const isEmpty = useAppSelector(state => state.poiList.data.length !== 0);
  const map = useMap();

  useEffect(() => {
    map.invalidateSize();
  }, [isEmpty]);

  return null;
};

export default HandleResize;
