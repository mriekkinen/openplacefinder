import React, { useImperativeHandle } from 'react';
import { LatLngBounds } from 'leaflet';
import { useMap } from 'react-leaflet';

export interface MapHandle {
  getBounds: () => LatLngBounds;
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

      panTo: (lat: number | undefined, lon: number | undefined) => {
        if (lat === undefined || lon === undefined) return;
        map.panTo([lat, lon], {
          animate: true,
          duration: 0.5
        });
      }
    };
  });

  return null;
};

export default React.forwardRef(SetMapRef);
