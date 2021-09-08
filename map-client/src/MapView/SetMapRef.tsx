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
  // NOTE: Disabled for the time being
  //
  // In the current multi-tab layout this doesn't really make much sense
  // unless forceRenderTabPanel is true. Otherwise, it cannot function and,
  // what's more, causes a memory leak. I'll leave this commented out
  // for now since the layout is in flux and might change in the future.
  //
  // const map = useMap();
  // useImperativeHandle(ref, () => {
  //   return {
  //     panTo: (lat: number | undefined, lon: number | undefined) => {
  //       if (lat === undefined || lon === undefined) return;
  //       map.panTo([lat, lon], {
  //         animate: true,
  //         duration: 0.5
  //       });
  //     }
  //   };
  // });

  return null;
};

export default React.forwardRef(SetMapRef);
