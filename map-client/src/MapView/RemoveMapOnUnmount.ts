import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

/**
 * Removes the Leaflet map instance, when this element unmounts from the DOM.
 * 
 * By default, each tab is rendered to the DOM only when that tab is active.
 * This should conserve memory, but can also lead to a memory leak unless the
 * resources associated with a tab about to close are released on tab switch.
 * 
 * This is particularly true for the map tab, because Leaflet creates
 * a map container object, a set of detached DOM nodes and event handlers,
 * among others. These resources can be released upon request, by calling
 * the map object's remove method.
 * 
 * Hence, one might assume that React Leaflet would make this call when
 * the MapContainer component unmounts. However, this is not the case and
 * React Leaflet leaves it up to the application to clear these resources.
 * 
 * The purpose of this component is to make that easy. Just place this
 * component at the end of MapContainer:
 * 
 * <MapContainer ...>
 *   // components...
 * 
 *   <RemoveMapOnUnmount />
 * </MapContainer>
 */
const RemoveMapOnUnmount = () => {
  const map = useMap();
  useEffect(() => {
    return () => {
      if (map !== null) {
        map.remove();
      }
    }
  }, [map]);

  return null;
};

export default RemoveMapOnUnmount;
