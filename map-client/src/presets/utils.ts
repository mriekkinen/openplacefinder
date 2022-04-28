/**
 * Returns the id of the given id's parent.
 * 
 * For example, the parent of `tourism/information/office` is `tourism/information`.
 */
export const getParentId = (id: string): string | undefined => {
  const last = id.lastIndexOf('/');
  if (last === -1) return undefined;
  return id.slice(0, last);
};

/**
 * Returns true if the given `candidateId` is a direct child of `rootId`.
 * 
 * For example, `tourism/information` has `tourism/information/office` as
 * a direct child.
 */
export const isDirectChild = (rootId: string, candidateId: string): boolean => {
  const expectedStart = `${rootId}/`;
  const end = candidateId.slice(expectedStart.length);
  return candidateId.startsWith(expectedStart) && !end.includes('/');
};

/**
 * Returns a list of subcategories for the given preset id.
 * 
 * For example, for `tourism/information office` we return
 * 
 * ```
 * ['tourism', 'tourism/information', 'tourism/information/office'].
 * ```
 */
export const getAncestors = (id: string): string[] => {
  const ids = [];
  let next = -1;
  while ((next = id.indexOf('/', next + 1)) !== -1) {
    ids.push(id.slice(0, next));
  }

  ids.push(id);
  return ids;
};

/**
 * Returns the id of the given id's first ancestor.
 * 
 * For example, for `tourism/information/office` we return `tourism`.
 */
 export const getFirstAncestor = (id: string): string => {
  const first = id.indexOf('/');
  if (first === -1) return id;
  return id.slice(0, first);
};
