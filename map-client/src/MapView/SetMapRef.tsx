import React, { useImperativeHandle } from 'react';
import { LatLngBounds } from 'leaflet';
import { useMap } from 'react-leaflet';

export interface MapHandle {
  getBounds: () => LatLngBounds;
  getZoom: () => number;
  panTo: (lat: number | undefined, lon: number | undefined) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const SetMapRef = (
  props: Props,
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

      panTo: (lat: number | undefined, lon: number | undefined) => {
        if (lat === undefined || lon === undefined) return;
        map.panTo([lat, lon]);
      }
    };
  });

  return null;
};

export default React.forwardRef(SetMapRef);
