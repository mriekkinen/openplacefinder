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

export const getWarnOfResultSetSize = (): number => {
  const threshold = Number(process.env.REACT_APP_WARN_OF_RESULT_SET_SIZE);

  if (isNaN(threshold)) {
    throw Error("Environment variable REACT_APP_WARN_OF_RESULT_SET_SIZE not set, or not a valid integer");
  }

  return threshold;
};

export const getGeocoderUrl = (): string => {
  const url = process.env.REACT_APP_GEOCODER_URL;

  if (!url) {
    throw Error("Environment variable REACT_APP_GEOCODER_URL not set");
  }

  return url;
};

export const getGeocoderWait = (): number => {
  const wait = Number(process.env.REACT_APP_GEOCODER_WAIT);

  if (isNaN(wait)) {
    throw Error("Environment variable REACT_APP_GEOCODER_WAIT not set, or not a valid integer");
  }

  return wait;
};
