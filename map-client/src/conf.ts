const getMinZoomForQueries = (): number => {
  const minZoom = Number(process.env.REACT_APP_MIN_ZOOM_FOR_QUERIES);

  if (isNaN(minZoom)) {
    throw Error("Environment variable REACT_APP_MIN_ZOOM_FOR_QUERIES not set, or not a valid integer");
  }

  return minZoom;
};

const getWarnOfResultSetSize = (): number => {
  const threshold = Number(process.env.REACT_APP_WARN_OF_RESULT_SET_SIZE);

  if (isNaN(threshold)) {
    throw Error("Environment variable REACT_APP_WARN_OF_RESULT_SET_SIZE not set, or not a valid integer");
  }

  return threshold;
};

const getGeocoderUrl = (): string => {
  const url = process.env.REACT_APP_GEOCODER_URL;

  if (!url) {
    throw Error("Environment variable REACT_APP_GEOCODER_URL not set");
  }

  return url;
};

const getGeocoderWait = (): number => {
  const wait = Number(process.env.REACT_APP_GEOCODER_WAIT);

  if (isNaN(wait)) {
    throw Error("Environment variable REACT_APP_GEOCODER_WAIT not set, or not a valid integer");
  }

  return wait;
};

const getPresetsMaxResults = (): number => {
  const maxRes = Number(process.env.REACT_APP_PRESETS_MAX_RESULTS);

  if (isNaN(maxRes)) {
    throw Error("Environment variable REACT_APP_PRESETS_MAX_RESULTS not set, or not a valid integer");
  }

  return maxRes;
};

export const MIN_ZOOM = getMinZoomForQueries();
export const RESULT_SET_WARNING_THRESHOLD = getWarnOfResultSetSize();
export const GEOCODER_URL = getGeocoderUrl();
export const GEOCODER_WAIT = getGeocoderWait();
export const PRESETS_MAX_RESULTS = getPresetsMaxResults();

export const isZoomSufficient = (zoom: number): boolean => {
  return zoom >= MIN_ZOOM;
};
