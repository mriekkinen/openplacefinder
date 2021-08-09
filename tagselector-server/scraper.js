const jsdom = require('jsdom')
const fs = require('fs/promises')

const { JSDOM } = jsdom

const MAP_FEATURES_PATH = './data/wiki/Map_features.html'

const INCLUDE_KEYS = [
  'Aerialway',
  'Aeroway',
  'Amenity',
  'Barrier',
  'Boundary',
  'Building',
  'Craft',
  'Emergency',
  'Geological',
  'Healthcare',
  'Highway',
  'Historic',
  'Landuse',
  'Leisure',
  'Man_made',
  'Military',
  'Natural',
  'Office',
  'Place',
  'Power',
  'Public Transport',
  'Railway',
  'Route',
  'Shop',
  'Sport',
  'Telecom',
  'Tourism',
  'Water',
  'Waterway',
  /*
  'Addresses',
  'Annotation',
  'Name',
  'Properties',
  'References',
  'Restrictions',
  */
]

console.log(INCLUDE_KEYS)

const process = async (filename) => {
  const html = await fs.readFile(filename)
  const { document } = (new JSDOM(html)).window

  const keyHeaders = document.querySelectorAll('h3 > span.mw-headline')

  const tags = []
  for (let ikey = 0; ikey < keyHeaders.length; ikey++) {
    const key = keyHeaders[ikey]

    console.log('\'' + key.textContent + '\',')
  }
}

process(MAP_FEATURES_PATH)
