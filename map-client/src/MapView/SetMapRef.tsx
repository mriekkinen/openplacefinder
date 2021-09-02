import React, { useImperativeHandle } from 'react';
import { useMap } from 'react-leaflet';

export interface MapHandle {
  panTo: (lat: number | undefined, lon: number | undefined) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const SetMapRef = (
  props: Props,
  ref: React.Ref<MapHandle>
) => {
  const map = useMap();
  useImperativeHandle(ref, () => {
    return {
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
