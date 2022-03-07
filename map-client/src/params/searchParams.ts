import { useCallback } from "react";
import { useSearchParams, ParamKeyValuePair } from "react-router-dom";

import { MapState } from "../MapView/types";

export interface SearchParams {
  q?: string;
  id?: number;
  map?: MapState;
}

export interface SetSearchParams {
  setQuery: (newQuery: string | undefined) => void;
  setId: (newId: number | undefined) => void;
  setMap: (newMap: MapState | undefined) => void;
}

export const useAppSearchParams = (
  defaultView: MapState
): [SearchParams, SetSearchParams] => {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const parseQueryParam = (queryStr: string | null): string | undefined => {
    return queryStr?.replace('+', ' ');
  }

  const parseIdParam = (idStr: string | null): number | undefined => {
    return idStr ? Number(idStr) : undefined;
  };

  const parseMapParam = (mapStr: string | null, defaults: MapState): MapState => {
    let { zoom } = defaults;
    let { lat, lng } = defaults.center;

    if (mapStr) {
      // Parse the "map" URL search parameter
      // Should be in the format: map=zoom_lat_lng
      const pattern = /^(?<zoom>\d+)_(?<lat>-?\d+\.\d+)_(?<lng>-?\d+\.\d+)$/;
      const match = mapStr.match(pattern);
      if (match && match.groups) {
        zoom = Number(match.groups.zoom) ?? zoom;
        lat = Number(match.groups.lat) ?? lat;
        lng = Number(match.groups.lng) ?? lng;
      }
    }

    return {
      center: { lat, lng },
      zoom
    };
  };

  const params: SearchParams = {
    q: parseQueryParam(searchParams.get('q')),
    id: parseIdParam(searchParams.get('id')),
    map: parseMapParam(searchParams.get('map'), defaultView)
  };

  const buildSearchParams = (newParams: SearchParams): ParamKeyValuePair[] => {
    const list: [string, string][] = [];
    if (newParams.q) {
      list.push(['q', newParams.q]);
    }

    if (newParams.id) {
      list.push(['id', newParams.id.toString()]);
    }

    if (newParams.map) {
      const nz = newParams.map.zoom.toFixed(0);
      const nlat = newParams.map.center.lat.toFixed(4);
      const nlng = newParams.map.center.lng.toFixed(4);

      list.push(['map', `${nz}_${nlat}_${nlng}`]);
    }

    return list;
  };

  const setQuery = useCallback((newQuery: string | undefined): void => {
    setSearchParams(buildSearchParams({
      ...params,
      q: newQuery?.toLowerCase().replace(' ', '+')
    }));
  }, [setSearchParams, params]);

  const setId = useCallback((newId: number | undefined): void => {
    setSearchParams(buildSearchParams({ ...params, id: newId }));
  }, [setSearchParams, params]);

  const setMap = useCallback((newMap: MapState | undefined): void => {
    setSearchParams(buildSearchParams({ ...params, map: newMap }));
  }, [setSearchParams, params]);

  const setters = {
    setQuery,
    setId,
    setMap
  };

  return [params, setters];
};
