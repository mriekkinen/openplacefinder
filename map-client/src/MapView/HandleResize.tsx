import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import { TabIndex, useAppSelector } from '../state';

/**
 * Instructs Leaflet to refresh map dimensions after activating the map tab.
 * 
 * If the window size changes while the map tab is not active, Leaflet won't
 * be informed of the change, and this will break rendering upon return
 * to the map tab. To correct this problem, we need to call map.invalidateSize
 * manually.
 * 
 * For reference, see https://stackoverflow.com/a/36257493
 */
const HandleResize = () => {
  const tab = useAppSelector(state => state.ui.tab);
  const map = useMap();

  useEffect(() => {
    if (tab === TabIndex.Map) {
      map.invalidateSize();
    }
  }, [tab]);

  return null;
};

export default HandleResize;
