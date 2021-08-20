import React, { useImperativeHandle } from 'react';
import { useMap } from 'react-leaflet';

import { Poi } from '../types';

export interface MapHandle {
  panTo: (e: Poi) => void;
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
      panTo: (e: Poi) => {
        if (e.lat === undefined || e.lon === undefined) return;
        map.panTo([e.lat, e.lon], {
          animate: true,
          duration: 0.5
        });
      }
    };
  });

  return null;
};

export default React.forwardRef(SetMapRef);
