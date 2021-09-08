import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { setSelected, useAppDispatch, useAppSelector } from '../state';
import { filter } from '../search';
import SetMapRef, { MapHandle } from './SetMapRef';
import HandleMapClick from './HandleMapClick';
import CircleMarker from './CircleMarker';
import RemoveMapOnUnmount from './RemoveMapOnUnmount';

// Option: whether to use raster instead of vector graphics?
// If true, renders markers using an HTML canvas element.
// If false, renders markers using a SVG layer.
const PREFER_CANVAS = false;

interface Props {
  center: L.LatLngExpression;
  zoom: number;
}

const MapView = (
  { center, zoom }: Props,
  ref: React.Ref<MapHandle>
) => {
  // For debugging memory consumption
  React.useEffect(() => {
    console.log('Mounted MapView');
    return () => {
      console.log('Unmounting MapView');
    }
  }, []);

  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);
  const facets = useAppSelector(state => state.facets);
  const selected = useAppSelector(state => state.ui.selected);

  console.log('Rendering MapView');

  const filteredData = filter(data, country, facets);

  console.log('filteredData.length:', filteredData.length);

  const tileProps = {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  };

  return (
    <MapContainer
      id='map-container'
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      preferCanvas={PREFER_CANVAS}
    >
      <SetMapRef ref={ref} />
      <HandleMapClick
        handleMapClick={() => dispatch(setSelected(null))} />
      <TileLayer {...tileProps} />

      {filteredData.map(e =>
        <CircleMarker
          key={`${e.type}-${e.id}`}
          e={e}
          isSelected={e.id === selected}
          handleClick={() => dispatch(setSelected(e.id))}
        />
      )}

      <RemoveMapOnUnmount />
    </MapContainer>
  );
};

export default React.forwardRef(MapView);
