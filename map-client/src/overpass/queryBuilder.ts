import { LatLngBounds } from "leaflet";

const QUERY_TEMPLATE =
`[out:json][timeout:25];
area({AREA});
nwr{TAGS}(area);
out center;`;

const QUERY_TEMPLATE_BBOX =
`[out:json][timeout:25];
nwr{TAGS}({BBOX});
out center;`;

const concatenate = (list: string[]): string => {
  return list.map(x => '[' + x + ']').join('');
};

export const buildAreaQuery = (type: string[], areaId: number): string => {
  const typeFilters = concatenate(type);
  const areaFilter = areaId.toString();
  return QUERY_TEMPLATE
    .replace('{TAGS}', typeFilters)
    .replace('{AREA}', areaFilter);
};

export const buildBBoxQuery = (type: string[], bbox: LatLngBounds): string => {
  const typeFilters = concatenate(type);
  const bboxFilter = toOverpassBBoxString(bbox);
  return QUERY_TEMPLATE_BBOX
    .replace('{TAGS}', typeFilters)
    .replace('{BBOX}', bboxFilter);
};

const toOverpassBBoxString = (bounds: LatLngBounds) => {
  const values = [
    bounds.getSouth(), bounds.getWest(),
    bounds.getNorth(), bounds.getEast()
  ];

  return values.join(',');
};
