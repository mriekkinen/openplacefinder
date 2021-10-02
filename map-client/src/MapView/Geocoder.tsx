import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'pelias-leaflet-plugin';

const Geocoder = () => {
  const map = useMap();
  useEffect(() => {
    //
    // TODO: THIS IS *NOT* THE RIGHT WAY TO STORE SECRETS !!!
    //
    const apiKey = process.env.REACT_APP_GEO_API_KEY ?? 'api-key-missing';
    const options = {
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
