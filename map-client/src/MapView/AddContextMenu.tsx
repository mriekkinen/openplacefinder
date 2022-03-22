import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import { Map as LeafletMap, LeafletMouseEvent } from 'leaflet';
import isEqual from 'lodash/isEqual';

import { SearchParams } from "../params";

interface ContextMenuItem {
  text: string;
  callback: (e: LeafletMouseEvent) => void;
}

interface ContextMenu {
  removeAllItems: () => void;
  addItem: (option: ContextMenuItem) => void;
}

interface MapWithMenu extends LeafletMap {
  contextmenu?: ContextMenu;
}

// A hook which keeps track of its previous value
// As presented in the React docs:
// https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
const usePrevious = <T, >(value: T) => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

interface Props {
  params: SearchParams;
}

const AddContextMenu = ({ params }: Props) => {
  // Use a type assertion to extend the map object
  // This is the easiest, but not the most robust solution
  const map = useMap() as MapWithMenu;

  // Keep track of the previous parameters
  // so that that we'll re-render only when they change
  // https://stackoverflow.com/a/54710710
  const prevParams = usePrevious(params.build());

  const updateLocation = (lat: number, lng: number) => {
    params.loc = { lat, lng };
    params.commit();
  };

  useEffect(() => {
    if (!map.contextmenu) {
      console.log('Missing context menu, cannot update!');
      return;
    }

    // Check if we can skip this update
    if (isEqual(prevParams, params.build())) {
      return;
    }

    // Rewrite the context menu
    map.contextmenu.removeAllItems();
    map.contextmenu.addItem({
      text: 'Set location',
      callback: (e: LeafletMouseEvent) => {
        updateLocation(e.latlng.lat, e.latlng.lng);
      }
    });
  }, [params]);

  return null;
};

export default AddContextMenu;
