import { LatLngLiteral } from "leaflet";
import { ParamKeyValuePair, URLSearchParamsInit } from "react-router-dom";

import { MapState } from "../MapView/types";
import { FacetState, parseSortOption, SortOption } from "../state";
import { Preset, presetSingleton } from "../presets";

export interface SearchParamDefaults {
  loc: LatLngLiteral;
  map: MapState;
}

type SetSearchParams = (nextInit: URLSearchParamsInit) => void;

export class SearchParams {
  q?: Preset;
  id?: number;
  loc: LatLngLiteral;
  map: MapState;
  sortBy?: SortOption;
  facets: FacetState;
  private setSearchParams: SetSearchParams;

  constructor(
    searchParams: URLSearchParams,
    setSearchParams: SetSearchParams,
    defaults: SearchParamDefaults
  ) {
    this.q = this.parseQueryParam(searchParams.get('q'));
    this.id = this.parseIdParam(searchParams.get('id'));
    this.loc = this.parseLocationParam(searchParams.get('loc')) ?? defaults.loc;
    this.map = this.parseMapParam(searchParams.get('map')) ?? defaults.map;
    this.sortBy = this.parseSortByParam(searchParams.get('sortBy'));
    this.facets = this.parseFacetParams(
      searchParams.get('name'),
      searchParams.has('openingHours'),
      searchParams.has('openNow'),
      searchParams.get('cuisine'),
      searchParams.get('categories')
    );
    this.setSearchParams = setSearchParams;
  }

  private parseQueryParam = (queryStr: string | null): Preset | undefined => {
    return presetSingleton.getPreset(queryStr?.replaceAll(' ', '/'));
  }

  private parseIdParam = (idStr: string | null): number | undefined => {
    return idStr ? Number(idStr) : undefined;
  };

  private parseLocationParam = (locationStr: string | null): LatLngLiteral | undefined => {
    // Parse the "location" URL search parameter
    // Should be in the format: loc=lat_lng
    const pattern = /^(?<lat>-?\d+\.\d+)_(?<lng>-?\d+\.\d+)$/;
    const match = locationStr?.match(pattern);
    if (!match || !match.groups) {
      return undefined;
    }

    const lat = Number(match.groups.lat);
    const lng = Number(match.groups.lng);
    if (isNaN(lat) || isNaN(lng)) {
      return undefined;
    }

    return { lat, lng };
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

  private parseSortByParam = (sortByStr: string | null): SortOption | undefined => {
    try {
      return parseSortOption(sortByStr);
    } catch (e) {
      return undefined;
    }
  };

  private parseFacetParams = (
    name: string | null,
    openingHours: boolean,
    openNow: boolean,
    cuisines: string | null,
    categories: string | null
  ): FacetState => {
    return {
      name: name || undefined,
      openingHours: openingHours || undefined,
      openNow: openNow || undefined,
      cuisines: cuisines ? new Set(cuisines.split(';')) : undefined,
      categories: categories ? new Set(categories.split(';')) : undefined
    };
  };

  public commit() {
    this.setSearchParams(this.build());
  }

  public build(): ParamKeyValuePair[] {
    const list: [string, string][] = [];
    if (this.q) {
      list.push(['q', this.q.id.replaceAll('/', ' ')]);
    }

    if (this.id) {
      list.push(['id', this.id.toString()]);
    }

    if (this.sortBy) {
      list.push(['sortBy', this.sortBy]);
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

    if (this.facets.categories?.size) {
      const categories = Array.from(this.facets.categories);
      list.push(['categories', categories.join(';')])
    }

    if (this.loc) {
      const nlat = this.loc.lat.toFixed(4);
      const nlng = this.loc.lng.toFixed(4);

      list.push(['loc', `${nlat}_${nlng}`]);
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
