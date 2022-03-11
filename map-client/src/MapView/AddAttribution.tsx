import { useEffect } from "react";
import { useMap } from "react-leaflet";

const AddAttribution = () => {
  const map = useMap();

  useEffect(() => {
    map.attributionControl.addAttribution(
      `&copy; Helsinki Region Transport ${new Date().getFullYear()}`
    );
  }, []);

  return null;
};

export default AddAttribution;
