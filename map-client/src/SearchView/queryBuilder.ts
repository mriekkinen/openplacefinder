const QUERY_TEMPLATE =
`[out:json][timeout:25];
area{AREA};
nwr{TAGS}(area);
out center;`;

const concatenate = (list: string[]): string => {
  return list.map(x => '[' + x + ']').join('');
}

export const buildQuery = (type: string[], area: string[]): string => {
  const typeFilters = concatenate(type);
  const areaFilters = concatenate(area);
  return QUERY_TEMPLATE
    .replace('{TAGS}', typeFilters)
    .replace('{AREA}', areaFilters);
};
