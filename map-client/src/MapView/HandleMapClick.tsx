import { useMapEvent } from 'react-leaflet';

interface Props {
  handleMapClick: () => void;
}

const HandleMapClick = ({ handleMapClick }: Props) => {
  useMapEvent('click', handleMapClick);

  return null;
};

export default HandleMapClick;
