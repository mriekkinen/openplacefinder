import { useCallback } from 'react';
import { LatLng } from 'leaflet';
import { useMap, useMapEvent } from 'react-leaflet';

interface Props {
  handleMapClick: () => void;
  handleMoveZoom: (zoom: number, center: LatLng) => void;
}

const HandleMapEvents = ({ handleMapClick, handleMoveZoom }: Props) => {
  const map = useMap();

  const onMove = useCallback(() => {
    handleMoveZoom(map.getZoom(), map.getCenter());
  }, [map, handleMoveZoom]);

  useMapEvent('click', handleMapClick);
  useMapEvent('moveend', onMove);
  useMapEvent('zoomend', onMove);

  return null;
};

export default HandleMapEvents;
