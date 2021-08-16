import React from 'react';
import { Poi } from '../types';

export const getAddress = (e: Poi) => {
  if (!e.tags['addr:street']) {
    return null;
  }

  return <span>{e.tags['addr:street']} {e.tags['addr:housenumber']}</span>
};
