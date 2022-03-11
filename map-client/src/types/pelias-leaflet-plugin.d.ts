/**
 * Partial type definitions for pelias-leaflet-plugin.
 * 
 * These definitions are intentionally incomplete, as they cover only the
 * minimal set of definitions required for this app.
 * 
 * This module extends @types/leaflet-geocoder-mapzen, which needs to be installed.
 */

declare module 'leaflet' {
  namespace Control {
      interface GeocoderFeatureProperties {
        label: string;
      }

      interface GeocoderFeature {
        properties: GeocoderFeatureProperties;
      }

      interface GeocoderEvent {
        feature: GeocoderFeature;
      }

      type GeocoderEventHandlerFn = (e: GeocoderEvent) => void;

      type GeocoderEventTypes = 
        | 'results'
        | 'error'
        | 'select'
        | 'highlight'
        | 'expand'
        | 'collapse'
        | 'reset'
        | 'focus'
        | 'blur';

      interface Geocoder extends Control {
        on: (types: GeocoderEventTypes, fn: GeocoderEventHandlerFn) => void;
      }
  }
}
