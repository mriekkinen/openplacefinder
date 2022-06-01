import { useEffect } from "react";
import { useMap } from "react-leaflet";

const AddAttribution = () => {
  const map = useMap();

  useEffect(() => {
    map.attributionControl.addAttribution(
      `&copy; <a href="https://digitransit.fi/en/developers/apis/">Helsinki Region Transport</a> ${new Date().getFullYear()}`
    );
  }, []);

  return null;
};

export default AddAttribution;
