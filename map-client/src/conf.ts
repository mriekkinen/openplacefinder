export const getMinZoomForQueries = (): number => {
  const minZoom = Number(process.env.REACT_APP_MIN_ZOOM_FOR_QUERIES);

  if (isNaN(minZoom)) {
    throw Error("Environment variable REACT_APP_MIN_ZOOM_FOR_QUERIES not set, or not a valid integer");
  }

  return minZoom;
};

export const isZoomSufficient = (zoom: number): boolean => {
  const minZoom = getMinZoomForQueries();

  return zoom >= minZoom;
};

export const getGeocoderHost = (): string => {
  const host = process.env.REACT_APP_GEOCODER_HOST;

  if (!host) {
    throw Error("Environment variable REACT_APP_GEOCODER_HOST not set");
  }

  return host;
};

export const getGeocoderWait = (): number => {
  const wait = Number(process.env.REACT_APP_GEOCODER_WAIT);

  if (isNaN(wait)) {
    throw Error("Environment variable REACT_APP_GEOCODER_WAIT not set, or not a valid integer");
  }

  return wait;
};
