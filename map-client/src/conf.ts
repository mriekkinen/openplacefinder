export const isZoomSufficient = (zoom: number): boolean => {
  const minZoom = Number(process.env.REACT_APP_MIN_ZOOM_FOR_QUERIES);

  if (isNaN(minZoom)) {
    throw Error("Environment variable REACT_APP_MIN_ZOOM_FOR_QUERIES not set, or not a valid integer");
  }

  return zoom >= minZoom;
};
