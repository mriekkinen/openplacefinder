import { useCallback } from "react";
import { useSearchParams, ParamKeyValuePair } from "react-router-dom";

import { MapState } from "../MapView/types";
import { FacetState } from "../state";

export interface SearchParams {
  q?: string;
  id?: number;
  map?: MapState;
  facets: FacetState;
}

export interface SetSearchParams {
  setQuery: (newQuery: string | undefined) => void;
  setId: (newId: number | undefined) => void;
  setMap: (newMap: MapState | undefined) => void;
  setFacets: (newFacets: FacetState) => void;
}

export const useAppSearchParams = (): [SearchParams, SetSearchParams] => {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const parseQueryParam = (queryStr: string | null): string | undefined => {
    return queryStr ?? undefined;
  }

  const parseIdParam = (idStr: string | null): number | undefined => {
    return idStr ? Number(idStr) : undefined;
  };

  const parseMapParam = (mapStr: string | null): MapState | undefined => {
    // Parse the "map" URL search parameter
    // Should be in the format: map=zoom_lat_lng
    const pattern = /^(?<zoom>\d+)_(?<lat>-?\d+\.\d+)_(?<lng>-?\d+\.\d+)$/;
    const match = mapStr?.match(pattern);
    if (!match || !match.groups) {
      return undefined;
    }

    const zoom = Number(match.groups.zoom);
    const lat = Number(match.groups.lat);
    const lng = Number(match.groups.lng);
    if (isNaN(zoom) || isNaN(lat) || isNaN(lng)) {
      return undefined;
    }

    return {
      center: { lat, lng },
      zoom
    };
  };

  const parseFacetParams = (
    name: string | null,
    openingHours: boolean,
    openNow: boolean
  ): FacetState => {
    return {
      name: name || undefined,
      openingHours: openingHours || undefined,
      openNow: openNow || undefined,
    };
  };

  const params: SearchParams = {
    q: parseQueryParam(searchParams.get('q')),
    id: parseIdParam(searchParams.get('id')),
    map: parseMapParam(searchParams.get('map')),
    facets: parseFacetParams(
      searchParams.get('name'),
      searchParams.has('openingHours'),
      searchParams.has('openNow')
    )
  };

  const buildSearchParams = (newParams: SearchParams): ParamKeyValuePair[] => {
    const list: [string, string][] = [];
    if (newParams.q) {
      list.push(['q', newParams.q]);
    }

    if (newParams.id) {
      list.push(['id', newParams.id.toString()]);
    }

    if (newParams.facets.name) {
      list.push(['name', newParams.facets.name]);
    }

    if (newParams.facets.openingHours) {
      list.push(['openingHours', '']);
    }

    if (newParams.facets.openNow) {
      list.push(['openNow', '']);
    }

    if (newParams.map) {
      const nz = newParams.map.zoom.toFixed(0);
      const nlat = newParams.map.center.lat.toFixed(4);
      const nlng = newParams.map.center.lng.toFixed(4);

      list.push(['map', `${nz}_${nlat}_${nlng}`]);
    }

    console.log('buildSearchParams: newParams:', newParams, ' list:', list);

    return list;
  };

  const setQuery = useCallback((newQuery: string | undefined): void => {
    setSearchParams(buildSearchParams({
      ...params,
      q: newQuery?.toLowerCase()
    }));
  }, [setSearchParams, params]);

  const setId = useCallback((newId: number | undefined): void => {
    setSearchParams(buildSearchParams({ ...params, id: newId }));
  }, [setSearchParams, params]);

  const setMap = useCallback((newMap: MapState | undefined): void => {
    setSearchParams(buildSearchParams({ ...params, map: newMap }));
  }, [setSearchParams, params]);

  const setFacets = useCallback((newFacets: FacetState): void => {
    setSearchParams(buildSearchParams({ ...params, facets: newFacets}));
  }, [setSearchParams, params]);

  const setters = {
    setQuery,
    setId,
    setMap,
    setFacets
  };

  return [params, setters];
};
