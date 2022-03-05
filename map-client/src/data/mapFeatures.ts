import { MapFeature, MapFeatureGroup } from '../state';

export const MAP_FEATURES: readonly MapFeatureGroup[] = [
  {
    label: 'Sustenance',
    options: [
      { value: 'amenity=cafe', label: 'Café' },
      { value: 'amenity=fast_food', label: 'Fast food' },
      { value: 'amenity=pub', label: 'Pub' },
      { value: 'amenity=restaurant', label: 'Restaurant' },
    ]
  },
  {
    label: 'Entertainment, arts & culture',
    options: [
      { value: 'amenity=arts_centre', label: 'Arts centre' },
      { value: 'amenity=theatre', label: 'Theatre' },
    ]
  },
  {
    label: 'Facilities',
    options: [
      { value: 'amenity=toilets', label: 'Toilets' },
    ]
  },
  {
    label: 'Public service',
    options: [
      { value: 'amenity=post_box', label: 'Post box' },
      { value: 'amenity=post_office', label: 'Post office' },
      { value: 'amenity=ranger_station', label: 'Ranger station' },
    ]
  },
  {
    label: 'Tourism',
    options: [
      { value: 'tourism=aquarium', label: 'Aquarium' },
      { value: 'tourism=artwork', label: 'Artwork' },
      { value: 'tourism=attraction', label: 'Attraction' },
      { value: 'tourism=gallery', label: 'Gallery' },
      { value: 'tourism=information', label: 'Information' },
      { value: 'tourism=museum', label: 'Museum' },
      { value: 'tourism=picnic_site', label: 'Picnic site' },
      { value: 'tourism=viewpoint', label: 'Viewpoint' },
      { value: 'tourism=zoo', label: 'Zoo' },
    ]
  },
  {
    label: 'Transportation',
    options: [
      { value: 'amenity=fuel', label: 'Fuel station' },
      { value: 'amenity=parking', label: 'Parking' }
    ]
  }
];

export const FEATURES = MAP_FEATURES.reduce(
  (acc, group) => [
    ...acc,
    ...group.options
  ], [] as MapFeature[]);
