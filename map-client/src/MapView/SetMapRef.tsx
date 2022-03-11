import React, { useImperativeHandle } from 'react';
import { LatLng, LatLngBounds } from 'leaflet';
import { useMap } from 'react-leaflet';

export interface MapHandle {
  getBounds: () => LatLngBounds;
  getZoom: () => number;
  panTo: (lat: number | undefined, lon: number | undefined) => void;
}

interface Props {
  handleMoveZoom: (zoom: number, center: LatLng) => void;
}

const SetMapRef = (
  { handleMoveZoom }: Props,
  ref: React.Ref<MapHandle>
) => {
  //
  // TODO: Find out if the ref requires cleanup (do we need to set it to null?)
  //

  const map = useMap();
  useImperativeHandle(ref, () => {
    return {
      getBounds: () => {
        return map.getBounds();
      },

      getZoom: () => {
        return map.getZoom();
      },

      panTo: (lat: number | undefined, lng: number | undefined) => {
        if (lat === undefined || lng === undefined) return;
        map.panTo([lat, lng]);

        // TODO: Keep an eye on the next line! This is a hack!
        //
        // This is a consequence of listening to the "dragend" event,
        // instead of the more general "moveend" event. Leaflet won't
        // emit "dragend" if the move wasn't initiated by the user.
        // Hence, in this case we have to call the event handler manually.
        // (This won't work properly if we do a zoom as well, because zooming
        // is a separate event whose handler would be triggered twice.)
        handleMoveZoom(map.getZoom(), new LatLng(lat, lng));
      }
    };
  });

  return null;
};

export default React.forwardRef(SetMapRef);
