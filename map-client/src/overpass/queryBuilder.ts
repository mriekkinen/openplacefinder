import { LatLngBounds } from "leaflet";

const QUERY_TEMPLATE_BBOX =
`[out:json][timeout:25];
nwr{TAGS}({BBOX});
out center;`;

export const buildBBoxQuery = (type: string[], bbox: LatLngBounds): string => {
  const typeFilters = concatenate(type);
  const bboxFilter = toOverpassBBoxString(bbox);
  return QUERY_TEMPLATE_BBOX
    .replace('{TAGS}', typeFilters)
    .replace('{BBOX}', bboxFilter);
};

const concatenate = (list: string[]): string => {
  return list.map(x => '[' + x + ']').join('');
};

const toOverpassBBoxString = (bounds: LatLngBounds) => {
  const values = [
    bounds.getSouth(), bounds.getWest(),
    bounds.getNorth(), bounds.getEast()
  ];

  return values.join(',');
};
