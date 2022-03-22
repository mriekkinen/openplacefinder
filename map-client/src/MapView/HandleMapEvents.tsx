import { useCallback } from 'react';
import { LatLng } from 'leaflet';
import { useMap, useMapEvent } from 'react-leaflet';

interface Props {
  handleMapClick: () => void;
  handleMoveZoom: (zoom: number, center: LatLng) => void;
}

const HandleMapEvents = ({ handleMapClick, handleMoveZoom }: Props) => {
  const map = useMap();

  const handleMZ = useCallback(() => {
    handleMoveZoom(map.getZoom(), map.getCenter());
  }, [map, handleMoveZoom]);

  // Clear possible selection when the user clicks on the background map
  // (i.e., if the user has selected a marker, this will unselect that)
  useMapEvent('click', handleMapClick);

  // Update the "map" URL search parameter on view change
  // (i.e., when the user either zooms or pans the map)
  //
  // NB: We use the "dragend" event instead of "moveend"
  // Zooming (even by using the zoom control) tends to modify the map center
  // as well. Hence, zooming fires two events ("zoomend" and "moveend"),
  // instead of just one, and this creates a problem. Ignoring the "moveend"
  // event and listening to "dragend", instead, seems to work.
  //useMapEvent('moveend', onMove);
  useMapEvent('dragend', handleMZ);
  useMapEvent('zoomend', handleMZ);

  return null;
};

export default HandleMapEvents;
