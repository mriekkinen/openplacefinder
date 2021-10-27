import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'pelias-leaflet-plugin';

const Geocoder = () => {
  const map = useMap();
  useEffect(() => {
    const apiKey = 'no-api-key';
    const options = {
      url: 'https://localhost',
      focus: true,
      markers: false
    };

    const geocoder = L.control.geocoder(apiKey, options).addTo(map);

    geocoder.on('select', e => {
      console.log(`selected ${e.feature.properties.label}`);
    });

    geocoder.on('reset', () => {
      console.log('the selection was reseted');
    })
  }, []);

  return null;
};

export default Geocoder;
