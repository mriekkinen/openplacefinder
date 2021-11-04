import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'pelias-leaflet-plugin';

const Geocoder = () => {
  const map = useMap();
  useEffect(() => {
    const apiKey = '';
    const options = {
      url: 'https://api.digitransit.fi/geocoding/v1',
      focus: false,
      markers: false,
      attribution: `&copy; Helsinki Region Transport ${new Date().getFullYear()}`
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
