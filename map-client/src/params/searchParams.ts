import { ParamKeyValuePair, URLSearchParamsInit } from "react-router-dom";

import { MapState } from "../MapView/types";
import { FacetState } from "../state";

type SetSearchParams = (nextInit: URLSearchParamsInit) => void;

export class SearchParams {
  q?: string;
  id?: number;
  map?: MapState;
  facets: FacetState;
  private setSearchParams: SetSearchParams;

  constructor(
    searchParams: URLSearchParams,
    setSearchParams: SetSearchParams
  ) {
    this.q = this.parseQueryParam(searchParams.get('q'));
    this.id = this.parseIdParam(searchParams.get('id'));
    this.map = this.parseMapParam(searchParams.get('map'));
    this.facets = this.parseFacetParams(
      searchParams.get('name'),
      searchParams.has('openingHours'),
      searchParams.has('openNow'),
      searchParams.get('cuisine')
    );
    this.setSearchParams = setSearchParams;
  }

  private parseQueryParam = (queryStr: string | null): string | undefined => {
    return queryStr ?? undefined;
  }

  private parseIdParam = (idStr: string | null): number | undefined => {
    return idStr ? Number(idStr) : undefined;
  };

  private parseMapParam = (mapStr: string | null): MapState | undefined => {
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

  private parseFacetParams = (
    name: string | null,
    openingHours: boolean,
    openNow: boolean,
    cuisines: string | null
  ): FacetState => {
    return {
      name: name || undefined,
      openingHours: openingHours || undefined,
      openNow: openNow || undefined,
      cuisines: cuisines ? new Set(cuisines.split(';')) : undefined
    };
  };

  public commit() {
    this.setSearchParams(this.build());
  }

  public build(): ParamKeyValuePair[] {
    const list: [string, string][] = [];
    if (this.q) {
      list.push(['q', this.q.toLowerCase()]);
    }

    if (this.id) {
      list.push(['id', this.id.toString()]);
    }

    if (this.facets.name) {
      list.push(['name', this.facets.name]);
    }

    if (this.facets.openingHours) {
      list.push(['openingHours', '']);
    }

    if (this.facets.openNow) {
      list.push(['openNow', '']);
    }

    if (this.facets.cuisines?.size) {
      const cuisines = Array.from(this.facets.cuisines);
      list.push(['cuisine', cuisines.join(';')])
    }

    if (this.map) {
      const nz = this.map.zoom.toFixed(0);
      const nlat = this.map.center.lat.toFixed(4);
      const nlng = this.map.center.lng.toFixed(4);

      list.push(['map', `${nz}_${nlat}_${nlng}`]);
    }

    return list;
  }
}
