import { OverpassJson } from 'overpass-ts';

const mockData =
  {
    "version": 0.6,
    "generator": "Overpass API 0.7.56.9 76e5016d",
    "osm3s": {
      "timestamp_osm_base": "2021-08-25T15:01:52Z",
      "timestamp_areas_base": "2021-08-25T13:59:36Z",
      "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL."
    },
    "elements": [
      {
        "type": "node",
        "id": 60123188,
        "lat": 60.2368392,
        "lon": 25.0820171,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00940",
          "addr:street": "Ostostie",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Kontulan Pizza & Kebab",
          "opening_hours": "Mo-Su 10:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 60123921,
        "lat": 60.2362612,
        "lon": 25.0827650,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza",
          "delivery": "yes",
          "diet:gluten_free": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "info@kalkanpizza.fi",
          "level": "0",
          "name": "Kalkan Pizza",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "outdoor_seating": "yes",
          "phone": "+358 93404300;+358 95653945",
          "takeaway": "yes",
          "website": "https://www.kalkanpizza.fi/"
        }
      },
      {
        "type": "node",
        "id": 60248667,
        "lat": 60.2136891,
        "lon": 24.8801151,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "29",
          "addr:postcode": "00380",
          "addr:street": "Vanha viertotie",
          "amenity": "fast_food",
          "branch": "Pitäjänmäki",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "cuisine": "burger",
          "delivery": "no",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "name": "McDonald's",
          "opening_hours": "Mo-Su 08:00-23:00",
          "opening_hours:covid19": "same",
          "operator": "Novados Oy",
          "phone": "+358 50 464 7095",
          "smoking": "outside",
          "takeaway": "yes",
          "website": "https://www.mcdonalds.fi/"
        }
      },
      {
        "type": "node",
        "id": 61890322,
        "lat": 60.2108190,
        "lon": 25.0795282,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "12",
          "addr:postcode": "00930",
          "addr:street": "Turunlinnantie",
          "amenity": "fast_food",
          "created_by": "Potlatch 0.4a",
          "name": "Itis Kebab",
          "toilets:wheelchair": "no",
          "website": "https://pizza-online.fi/ravintolat/helsinki/itiskebab",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 73106782,
        "lat": 60.2074392,
        "lon": 25.1451623,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "45",
          "addr:postcode": "00980",
          "addr:street": "Vuotie",
          "amenity": "fast_food",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "1",
          "level:ref": "T",
          "name": "Subway Columbus",
          "website": "http://www.subway.fi",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 73115787,
        "lat": 60.2066602,
        "lon": 25.1460550,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "45",
          "addr:postcode": "00980",
          "addr:street": "Vuotie",
          "amenity": "fast_food",
          "delivery": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "level": "1",
          "level:ref": "T",
          "name": "Kotipizza Columbus",
          "takeaway": "yes",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 75772337,
        "lat": 60.1633794,
        "lon": 24.9206903,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00180",
          "addr:street": "Itämerenkatu",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Kotipizza",
          "opening_hours": "Mo-Th 10:30-21:00; Fr 10:30-22:00; Sa 12:00-22:00; Su 12:00-21:00",
          "website": "https://www.kotipizza.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 89124708,
        "lat": 60.2370194,
        "lon": 25.0846183,
        "tags": {
          "amenity": "fast_food",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "name": "Kontulan katukeittiö",
          "opening_hours": "Su-Th 13:00-24:00, Fr,Sa 13:00-04:00",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 96516847,
        "lat": 60.2085967,
        "lon": 25.0841136,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00930",
          "addr:street": "Kauppakartanonkatu",
          "amenity": "fast_food",
          "name": "Pizza Service Itäkeskus",
          "website": "http://itakeskus.pizzaservice.fi",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 96521481,
        "lat": 60.1969977,
        "lon": 25.0546383,
        "tags": {
          "amenity": "fast_food",
          "name": "Zheng Sushi Bar"
        }
      },
      {
        "type": "node",
        "id": 96592213,
        "lat": 60.1950072,
        "lon": 24.9565826,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "31",
          "addr:postcode": "00550",
          "addr:street": "Mäkelänkatu",
          "amenity": "fast_food",
          "cuisine": "kebab",
          "cuisine_1": "pizza",
          "cuisine_2": "falafel",
          "name": "King Kebab",
          "opening_hours": "10:00-24:00",
          "phone": "+358 9 321 8878",
          "smoking": "outside",
          "website": "https://www.kingkebab.fi/",
          "wheelchair": "yes",
          "wheelchair:description": "1 step in the Mäkelänkatu side, no steps in Somerontie side. --------- 1 porras Mäkelänkadun puolella, ei portaita Somerontien puolella."
        }
      },
      {
        "type": "node",
        "id": 96592455,
        "lat": 60.1951144,
        "lon": 24.9567546,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "31",
          "addr:postcode": "00550",
          "addr:street": "Mäkelänkatu",
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "diet:meat": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Subway",
          "phone": "+358 50 373 5661",
          "smoking": "outside",
          "takeaway": "yes",
          "website": "http://www.subway.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 119223364,
        "lat": 60.1951253,
        "lon": 24.9562815,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "33",
          "addr:postcode": "00510",
          "addr:street": "Mäkelänkatu",
          "amenity": "fast_food",
          "name": "Hakaniemenrannan grilli",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 123420972,
        "lat": 60.1886504,
        "lon": 24.9640975,
        "tags": {
          "amenity": "fast_food",
          "name": "Palmer Kebab Pizza",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 123432045,
        "lat": 60.1869667,
        "lon": 24.9655967,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "20",
          "addr:postcode": "00500",
          "addr:street": "Vilhonvuorenkatu",
          "amenity": "fast_food",
          "name": "Vihreä Keidas ry",
          "office": "association",
          "website": "http://vihreakeidas.fi/"
        }
      },
      {
        "type": "node",
        "id": 151000722,
        "lat": 60.2242525,
        "lon": 24.8592157,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "19",
          "addr:postcode": "00370",
          "addr:street": "Pitäjänmäentie",
          "amenity": "fast_food",
          "cuisine": "pizza;kebab;burger;schnitzel;pasta;chicken;salad",
          "delivery": "yes",
          "email": "info@pizzeriaonline.fi",
          "name": "Pizzeria Online",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "phone": "+358 9 556 556",
          "takeaway": "yes",
          "website": "https://www.pizzeriaonline.fi/"
        }
      },
      {
        "type": "node",
        "id": 156807635,
        "lat": 60.2024342,
        "lon": 25.0591379,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "28",
          "addr:postcode": "00820",
          "addr:street": "Roihuvuorentie",
          "amenity": "fast_food",
          "name": "Savalan Pizza & Kebab",
          "website": "https://pizza-online.fi/ravintolat/helsinki/savalanpizza"
        }
      },
      {
        "type": "node",
        "id": 165013865,
        "lat": 60.2382969,
        "lon": 24.8885509,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00420",
          "addr:street": "Kantelettarentie",
          "amenity": "fast_food",
          "cuisine": "pizza;kebab;falafel;salads",
          "delivery": "yes",
          "name": "Pizzeria Luna",
          "opening_hours": "Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "phone": "+358 9 589 1121",
          "takeaway": "yes",
          "website": "https://www.pizza-online.fi/ravintolat/helsinki/pizzerialuna/"
        }
      },
      {
        "type": "node",
        "id": 167252559,
        "lat": 60.2391972,
        "lon": 24.8746960,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00420",
          "addr:street": "Klaneettitie",
          "amenity": "fast_food",
          "branch": "Kannelmäki",
          "cuisine": "pizza;kebab;salad;chicken",
          "delivery": "yes",
          "delivery:covid19": "yes",
          "drive_through": "no",
          "drive_through:covid19": "no",
          "name": "Taksim Pizzeria",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "opening_hours:covid19": "Mo-Th 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "operator": "Taksim Pizzeria",
          "phone": "+358 9 563 3900",
          "takeaway": "yes",
          "takeaway:covid19": "yes",
          "website": "https://www.taksimpizzeria.fi",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 174972705,
        "lat": 60.1911161,
        "lon": 25.0346279,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00810",
          "addr:street": "Laivalahdenportti",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Herttoniemen Pizza Express",
          "phone": "+358 9 448220"
        }
      },
      {
        "type": "node",
        "id": 174975867,
        "lat": 60.1938362,
        "lon": 25.0350080,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Subway",
          "opening_hours": "Mo-Sa 09:00-22:00, Su 10:00-21:00"
        }
      },
      {
        "type": "node",
        "id": 207110763,
        "lat": 60.1816239,
        "lon": 24.9552956,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "7",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "address": "Hämeentie 7",
          "amenity": "fast_food",
          "name": "Pizzataxi Hakaniemi",
          "website": "https://www.pizzataxi.fi/"
        }
      },
      {
        "type": "node",
        "id": 207118881,
        "lat": 60.1874674,
        "lon": 24.9623511,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "29",
          "addr:postcode": "00500",
          "addr:street": "Hämeentie",
          "amenity": "fast_food",
          "brand": "Picnic",
          "floor": "1",
          "name": "Picnic Sörnäinen",
          "opening_hours:covid19": "restricted",
          "takeaway:covid19": "only",
          "website": "https://www.picnic.fi/"
        }
      },
      {
        "type": "node",
        "id": 207122952,
        "lat": 60.1877652,
        "lon": 24.9637684,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00500",
          "addr:street": "Hämeentie",
          "amenity": "fast_food",
          "name": "Kurvin grilli",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 247163658,
        "lat": 60.2206383,
        "lon": 24.9624417,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00600",
          "addr:street": "Oulunkyläntie",
          "amenity": "fast_food",
          "contact:website": "http://www.ristoranteuno.fi/",
          "cuisine": "pizza",
          "name": "Ristorante Uno",
          "phone": "(09) 728 3010"
        }
      },
      {
        "type": "node",
        "id": 248312487,
        "lat": 60.1929499,
        "lon": 24.9301445,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "22",
          "addr:postcode": "00240",
          "addr:street": "Nordenskiöldinkatu",
          "amenity": "fast_food",
          "branch": "Keski-Pasila",
          "brand": "Hesburger",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "helsinki.elaintarha@nestek.com",
          "name": "Hesburger",
          "opening_hours": "Mo-Th 10:00-02:00; Fr 10:00-24:00; Sa 00:00-24:00; Su 00:00-02:00",
          "operator": "Tmi Jyri Linnanen",
          "phone": "+358 9 148 1891",
          "takeaway": "yes",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 249344993,
        "lat": 60.1871911,
        "lon": 24.9537629,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "fast_food",
          "name": "Hesarin grilli"
        }
      },
      {
        "type": "node",
        "id": 256259533,
        "lat": 60.1697636,
        "lon": 24.9417051,
        "tags": {
          "amenity": "fast_food",
          "level": "1",
          "name": "wetzel's pretzels"
        }
      },
      {
        "type": "node",
        "id": 257114760,
        "lat": 60.2295948,
        "lon": 24.8956417,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "14",
          "addr:postcode": "00400",
          "addr:street": "Näyttelijäntie",
          "amenity": "fast_food",
          "cuisine": "pizza;burger;steak;kebab;falafel;chicken;salad",
          "delivery": "yes",
          "email": "info@assa.fi",
          "name": "Ravintola Tupla Ässä",
          "opening_hours": "Mo-Fr 09:00-17:00,10:00-22:00; Sa-Su 11:00-22:00",
          "phone": "+358 9 503 2211",
          "takeaway": "yes",
          "website": "https://www.tuplaassa.fi/"
        }
      },
      {
        "type": "node",
        "id": 265632106,
        "lat": 60.2486246,
        "lon": 24.9584449,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "43",
          "addr:postcode": "00680",
          "addr:street": "Yhdyskunnantie",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "delivery": "yes",
          "name": "Nur Pizza Kebab",
          "opening_hours": "Mo-Fr 10:00-22:00; Sa-Su 11:00-22:00",
          "phone": "+358 9 726 3636",
          "takeaway": "yes",
          "website": "https://pizza-online.fi/ravintolat/helsinki/nurpizzakebab/"
        }
      },
      {
        "type": "node",
        "id": 265744836,
        "lat": 60.2394841,
        "lon": 24.8763266,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00420",
          "addr:street": "Sitratori",
          "amenity": "fast_food",
          "cuisine": "pizza;kebab;stake;salad;chicken;fish;pasta;falafel;burger",
          "delivery": "yes",
          "delivery:covid19": "yes",
          "drive_through:covid19": "no",
          "name": "Kannelmäen Pizzapalvelu",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-05:00; Sa 11:00-05:00; Su 11:00-22:00",
          "opening_hours:covid19": "Mo-Th 10:00-22:00; Fr 10:00-05:00; Sa 11:00-05:00; Su 11:00-22:00",
          "phone": "+358 9 4587433",
          "takeaway": "yes",
          "takeaway:covid19": "yes",
          "website": "https://www.foodora.fi/restaurant/v8ae/kannelmaenpizzapalvelu"
        }
      },
      {
        "type": "node",
        "id": 269957319,
        "lat": 60.2044992,
        "lon": 24.8998082,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "105",
          "addr:postcode": "00280",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "branch": "Ruskeasuo",
          "brand": "Hesburger",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_in": "yes",
          "drive_through": "yes",
          "email": "ruskeasuo@hesburger.fi",
          "name": "Hesburger",
          "opening_hours": "Mo-Th 10:00-22:00; Fr-Sa 10:00-23:00; Su 11:00-22:00",
          "operator": "Ruskeasuon Burger Oy",
          "phone": "+358 44 480 9252",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 279086874,
        "lat": 60.1950172,
        "lon": 24.9584950,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "35",
          "addr:postcode": "00550",
          "addr:street": "Sturenkatu",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Sturen Express Pizzeria",
          "opening_hours": "Mo-Th 10:00-22:00, Fr 10:00-04:00, Sa 11:00-04:00",
          "smoking": "outside",
          "takeaway": "yes",
          "website": "https://pizza-online.fi/ravintolat/helsinki/sturenpizza"
        }
      },
      {
        "type": "node",
        "id": 281384567,
        "lat": 60.2115180,
        "lon": 24.8879283,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "13",
          "addr:postcode": "00320",
          "addr:street": "Vihdintie",
          "amenity": "fast_food",
          "branch": "Etelä-Haaga",
          "brand": "Kotipizza",
          "brand:wikidata": "Q1628625",
          "brand:wikipedia": "en:Kotipizza",
          "cuisine": "pizza",
          "delivery": "Mo-Fr 10:30-20:00;Sa-Su 11:30-20:00",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "lunch": "Mo-Fr 10:30-15:00",
          "name": "Kotipizza",
          "opening_hours": "Mo-Fr 10:30-21:00, Sa-Su 11:30-21:00",
          "phone": "+358 9 4776 2080",
          "takeaway": "yes",
          "website": "https://kotipizza.fi/"
        }
      },
      {
        "type": "node",
        "id": 282571151,
        "lat": 60.2162709,
        "lon": 24.9586512,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00600",
          "addr:street": "Käpyläntie",
          "amenity": "fast_food",
          "cuisine": "pizza;kebab",
          "name": "Käpylän Pizza & Kebab Palvelu",
          "website": "https://pizza-online.fi/ravintolat/helsinki/kapylanpizzakebab"
        }
      },
      {
        "type": "node",
        "id": 282571152,
        "lat": 60.2311858,
        "lon": 24.9682783,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "9",
          "addr:postcode": "00640",
          "addr:street": "Siltavoudintie",
          "amenity": "fast_food",
          "brand": "Kotipizza",
          "brand:wikidata": "Q1628625",
          "brand:wikipedia": "en:Kotipizza",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "name": "Kotipizza",
          "takeaway": "yes",
          "website": "https://kotipizza.fi/"
        }
      },
      {
        "type": "node",
        "id": 283309197,
        "lat": 60.1817111,
        "lon": 24.9555655,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "7",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "address": "Hämeentie 7",
          "amenity": "fast_food",
          "cuisine": "indian;pizza",
          "name": "Saba",
          "phone": "09 77 33 998",
          "website": "http://www.ravintolasaba.fi/"
        }
      },
      {
        "type": "node",
        "id": 287218818,
        "lat": 60.1880090,
        "lon": 25.0403243,
        "tags": {
          "amenity": "fast_food",
          "name": "Kebab"
        }
      },
      {
        "type": "node",
        "id": 293903989,
        "lat": 60.1692860,
        "lon": 24.9304147,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Tennispalatsi",
          "addr:housenumber": "65",
          "addr:postcode": "00100",
          "addr:street": "Fredrikinkatu",
          "amenity": "fast_food",
          "branch": "Fredrikinkatu",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "tennispalatsi@hesburger.fi",
          "level": "2",
          "name": "Hesburger",
          "opening_hours": "Mo-Sa 10:30-21:00; Su 12:00-21:00",
          "operator": "Aleksanterinkadun Burger Oy",
          "phone": "+358 44 480 9253",
          "source": "Hesburger import",
          "takeaway": "yes",
          "toilets:wheelchair": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 293903990,
        "lat": 60.1715512,
        "lon": 24.9467923,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "14",
          "addr:postcode": "00100",
          "addr:street": "Vuorikatu",
          "amenity": "fast_food",
          "branch": "Kaisaniemi",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "floor": "-1",
          "lunch": "yes",
          "name": "Hesburger",
          "opening_hours": "Mo-Th 10:30-21:00; Fr 10:30-21:30; Sa 11:00-21:30; Su 12:00-20:00",
          "operator": "Fenniaburger Oy",
          "source": "Hesburger import",
          "takeaway": "yes",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 293903991,
        "lat": 60.1653073,
        "lon": 24.9482923,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "19",
          "addr:postcode": "00130",
          "addr:street": "Kasarmikatu",
          "amenity": "fast_food",
          "branch": "Kasarmitori",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_in": "yes",
          "drive_through": "yes",
          "email": "kasarmitori@hesburger.fi",
          "name": "Hesburger",
          "opening_hours": "Mo-Th 10:00-21:00; Sa 11:30-05:00; PH off",
          "operator": "Burgermakasiini Oy",
          "phone": "+358 44 480 9241",
          "smoking": "no",
          "source": "Hesburger import",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 293903992,
        "lat": 60.1705155,
        "lon": 24.9404730,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Kompassitaso",
          "addr:postcode": "00100",
          "addr:street": "Kaivokatu",
          "amenity": "fast_food",
          "branch": "Kaivokatu",
          "brand": "Hesburger",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "kompassi@hesburger.fi",
          "layer": "-2",
          "name": "Hesburger",
          "opening_hours": "Mo-Fr 10:30-22:00; Sa 11:00-22:00; Su 12:00-21:00",
          "operator": "Rautatientorin Burger Oy",
          "phone": "+358 44 480 9250",
          "source": "Hesburger import",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 294976827,
        "lat": 60.1863364,
        "lon": 24.9479755,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "28",
          "addr:postcode": "00510",
          "addr:street": "Helsinginkatu",
          "amenity": "fast_food",
          "branch": "Kallio",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "helsinki@hesburger.fi",
          "name": "Hesburger",
          "opening_hours": "Mo-Sa 10:00-23:00; Su 11:30-23:00",
          "operator": "Helsingintien Burger Oy",
          "phone": "+358 44 480 9239",
          "source": "Hesburger import",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 294976829,
        "lat": 60.1841971,
        "lon": 24.9240183,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "19",
          "addr:postcode": "00250",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "branch": "Töölö",
          "brand": "Hesburger",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "toolo@hesburger.fi",
          "name": "Hesburger",
          "opening_hours": "Mo-Th 10:00-21:00; Fr 10:00-22:00; Sa 11:00-22:00",
          "operator": "Burgerstadion Oy",
          "phone": "+358 44 480 9254",
          "source": "Hesburger import",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 294976831,
        "lat": 60.1801406,
        "lon": 24.9500072,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "amenity": "fast_food",
          "branch": "Hakaniemi",
          "brand": "Hesburger",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:kosher": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "hakaniemi@hesburger.fi",
          "name": "Hesburger",
          "opening_hours": "Mo-Fr 10:00-22:00; Sa 11:00-22:00; Su 12:00-21:00",
          "operator": "Hakaniemen Burger Oy",
          "phone": "+358 44 480 9232",
          "source": "Hesburger import",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 294977568,
        "lat": 60.2060465,
        "lon": 24.9288394,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Hartwall Arena",
          "addr:housenumber": "21",
          "addr:postcode": "00240",
          "addr:street": "Veturitie",
          "amenity": "fast_food",
          "branch": "Pohjois-Pasila",
          "brand": "Hesburger",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "hartwall@hesburger.fi",
          "name": "Hesburger",
          "operator": "Burger-In Oy",
          "phone": "+358 44 480 9233",
          "source": "Hesburger import",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 294977571,
        "lat": 60.2074640,
        "lon": 25.1446361,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Columbus",
          "addr:housenumber": "45",
          "addr:postcode": "00980",
          "addr:street": "Vuotie",
          "amenity": "fast_food",
          "branch": "Vuosaari",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "vsaari@hesburger.fi",
          "level": "1",
          "level:ref": "T",
          "name": "Hesburger",
          "opening_hours": "Mo-Fr 09:30-21:00; Sa 10:00-20:30; Su 11:00-22:30",
          "operator": "Vuosaaren Burgertalo Oy",
          "phone": "+358 44 480 9255",
          "source": "Hesburger import",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 294977572,
        "lat": 60.2030468,
        "lon": 24.9350139,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Helsingin Messukeskus",
          "addr:housenumber": "1",
          "addr:postcode": "00520",
          "addr:street": "Messuaukio",
          "amenity": "fast_food",
          "branch": "Itä-Pasila",
          "brand": "Hesburger",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "messukeskus@hesburger.fi",
          "name": "Hesburger",
          "operator": "Burger-In Oy",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "no",
          "payment:smartum_note": "yes",
          "phone": "+358 44 480 9246",
          "source": "Hesburger import",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 294978559,
        "lat": 60.2095019,
        "lon": 25.0619429,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00880",
          "addr:street": "Varikkotie",
          "amenity": "fast_food",
          "branch": "Roihupelto",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "email": "lanterna@hesburger.fi",
          "level": "1",
          "name": "Hesburger",
          "opening_hours": "Mo-Fr 10:00-20:30; Sa 10:00-18:30; Su 11:30-18:30",
          "operator": "Helsingin Keskus-Burger Oy",
          "phone": "+358 44 480 9244",
          "source": "Hesburger import",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 294978560,
        "lat": 60.2106571,
        "lon": 25.0810320,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "7",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "fast_food",
          "branch": "Itäkeskus",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "ikeskus@hesburger.fi",
          "level": "1",
          "name": "Hesburger",
          "opening_hours": "Mo-Fr 08:30-21:00; Sa 09:00-19:30; Su 11:00-18:30",
          "operator": "Itäkeskuksen Burger Oy",
          "phone": "+358 44 480 9236",
          "source": "Hesburger import",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/ravintolat?tid=140/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 294995417,
        "lat": 60.2517458,
        "lon": 25.0103633,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Malmintori",
          "addr:housenumber": "18",
          "addr:postcode": "00700",
          "addr:street": "Malmin kauppatie",
          "amenity": "fast_food",
          "branch": "Malmi",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "name": "Hesburger",
          "opening_hours": "Mo-Fr 09:30-20:30; Sa 10:00-19:00",
          "operator": "Malmin Burger Oy",
          "source": "Hesburger import",
          "takeaway": "yes",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 295534390,
        "lat": 60.1815306,
        "lon": 24.9255325,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00260",
          "addr:street": "Ruusulankatu",
          "amenity": "fast_food",
          "cuisine": "falafel",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Fafa's Ooppera",
          "opening_hours": "Mo-Sa 10:30-22:00; Su 10:30-21:00",
          "website": "http://fafas.fi/"
        }
      },
      {
        "type": "node",
        "id": 296598349,
        "lat": 60.2389635,
        "lon": 24.8741792,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "12",
          "addr:postcode": "00420",
          "addr:street": "Klaneettitie",
          "amenity": "fast_food",
          "cuisine": "pizza;kebab;fish;grill;burger;salad;chicken;falafel;wings;schnitzel",
          "delivery": "yes",
          "delivery:covid19": "yes",
          "email": "nfo@starpizzakannelmaki.fi",
          "name": "Star Pizza",
          "opening_hours": "Mo-Su 10:00-23:00",
          "opening_hours:covid19": "Mo-Su 10:00-23:00",
          "phone": "+358 44 307 1468",
          "takeaway": "yes",
          "takeaway:covid19": "yes",
          "website": "https://www.starpizzakannelmaki.fi/"
        }
      },
      {
        "type": "node",
        "id": 297640402,
        "lat": 60.1637080,
        "lon": 24.9305928,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Subway",
          "opening_hours": "Mo-Fr 09:00-22:00; Sa,Su 10:00-22:00",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 301063083,
        "lat": 60.1735294,
        "lon": 24.9189046,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Töölön Pizzapalvelu",
          "opening_hours": "Mo-Th 11:00-00:00; Fr-Sa 11:00-04:00; Su 11:00-00:00"
        }
      },
      {
        "type": "node",
        "id": 308776218,
        "lat": 60.2061692,
        "lon": 24.8787415,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00350",
          "addr:street": "Raumantie",
          "amenity": "fast_food",
          "branch": "Munkkivuori",
          "brand": "Pizza Hut",
          "cuisine": "pizza",
          "delivery": "no",
          "lunch": "Mo-Fr 10:30-15:00",
          "name": "Pizza Hut",
          "opening_hours": "Mo-Th 10:30-21:00; Fr 10:30-22:00; Sa-Su 11:00-22:00",
          "phone": "+358 10 470 5404",
          "takeaway": "yes",
          "website": "https://www.pizzahut.fi/ravintolat/#munkkivuori/"
        }
      },
      {
        "type": "node",
        "id": 312000736,
        "lat": 60.2130639,
        "lon": 24.9439246,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00610",
          "addr:street": "Pohjolankatu",
          "amenity": "fast_food",
          "branch": "Käpylä",
          "cuisine": "pizza;italian;burger;kebab",
          "delivery": "yes",
          "delivery:covid19": "yes",
          "drive_through": "no",
          "lunch": "Mo-Fr 10:00-15:00",
          "name": "Ravello",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "opening_hours:covid19": "Mo-Th 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "phone": "+358 9 726 2959",
          "takeaway": "yes",
          "takeaway:covid19": "yes",
          "website": "https://www.ravello.fi/"
        }
      },
      {
        "type": "node",
        "id": 324164750,
        "lat": 60.1696868,
        "lon": 24.9374576,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00100",
          "addr:street": "Simonkatu",
          "amenity": "fast_food",
          "cuisine": "hot_dog",
          "name": "Pikku-Jaskan Grilli",
          "opening_hours": "Mo-Su 20:00-05:00",
          "toilets:wheelchair": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 354873588,
        "lat": 60.1880930,
        "lon": 24.9533293,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "21b",
          "addr:postcode": "00500",
          "addr:street": "Fleminginkatu",
          "amenity": "fast_food"
        }
      },
      {
        "type": "node",
        "id": 363866154,
        "lat": 60.1880687,
        "lon": 25.0401992,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Pizzataxi",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 375977407,
        "lat": 60.2136617,
        "lon": 25.0887669,
        "tags": {
          "amenity": "fast_food",
          "name": "Rosso Express",
          "website": "http://www.rossoexpress.fi",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 426926476,
        "lat": 60.1708393,
        "lon": 24.9564459,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Kotipizza",
          "opening_hours": "Mo-Fr 10:30-21:00, Sa 11:00-21:00, Su 12:00-21:00"
        }
      },
      {
        "type": "node",
        "id": 445381416,
        "lat": 60.1829785,
        "lon": 24.9529871,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "11",
          "addr:street": "Porthaninkatu",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Kotipizza Kallio Porthaninkatu",
          "website": "https://kotipizza.fi/ravintolat/kotipizza-helsinki-kallio-porthaninkatu"
        }
      },
      {
        "type": "node",
        "id": 464729826,
        "lat": 60.1681332,
        "lon": 24.9407253,
        "tags": {
          "addr:city": "Helsinki",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie/Kalevankatu",
          "amenity": "fast_food",
          "cuisine": "burger",
          "name": "Grillikioski",
          "note": "Auki joka päivä klo 20-05",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 464729835,
        "lat": 60.1843986,
        "lon": 24.9177869,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "21",
          "addr:postcode": "00250",
          "addr:street": "Topeliuksenkatu",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Kotipizza",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 478773833,
        "lat": 60.2376438,
        "lon": 24.8460304,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00390",
          "addr:street": "Riihipellonkuja",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "delivery": "Mo-Th 10:00-21:30;Fr 10:00-22:30;Sa 11:00-22:30;Su 11:00-21:30",
          "lunch:menu": "Mo-Fr 10:00-15:00",
          "name": "Dilber",
          "opening_hours": "Mo-Fr 10:00-22:00; Sa 11:00-23:00; Su 11:00-22:00",
          "phone": "+358 9 512 7773",
          "source": "http://www.dilber.fi/",
          "takeaway": "yes",
          "website": "https://www.dilber.fi/"
        }
      },
      {
        "type": "node",
        "id": 480412322,
        "lat": 60.1724093,
        "lon": 24.9194990,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Shine"
        }
      },
      {
        "type": "node",
        "id": 506309382,
        "lat": 60.2175343,
        "lon": 24.8897346,
        "tags": {
          "access:covid19": "yes",
          "addr:city": "Helsinki",
          "addr:housenumber": "24",
          "addr:postcode": "00320",
          "addr:street": "Isonnevantie",
          "amenity": "fast_food",
          "cuisine": "pizza;kebab;falafel;salad;chicken;fish;steak;schnitzel",
          "delivery": "Mo-Th 09:45-22:00;Fr 09:45-23:00;Sa 10:00-23:00;Su 10:00-22:00",
          "delivery:covid19": "yes",
          "lunch:menu": "Mo-Fr 10:00-15:00",
          "name": "Mardin Pizzeria",
          "opening_hours": "Mo-Th 09:45-22:00; Fr 09:45-23:00; Sa 10:00-23:00; Su 10:00-22:00",
          "opening_hours:covid19": "Mo-Th 09:45-22:00; Fr 09:45-23:00; Sa 10:00-23:00; Su 10:00-22:00",
          "phone": "+358 9 566 6690",
          "takeaway": "yes",
          "takeaway:covid19": "yes"
        }
      },
      {
        "type": "node",
        "id": 514701146,
        "lat": 60.2169549,
        "lon": 24.9037346,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00320",
          "addr:street": "Laajasuontie",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "delivery": "yes",
          "name": "Rosas Pizzeria",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-03:00; Sa-Su 11:00-03:00",
          "phone": "+358 9 477 3030",
          "takeaway": "yes",
          "website": "https://www.rosaspizzeria.fi/"
        }
      },
      {
        "type": "node",
        "id": 515643553,
        "lat": 60.2389150,
        "lon": 24.8499414,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Ristikko",
          "addr:housenumber": "1",
          "addr:postcode": "00390",
          "addr:street": "Ajomiehentie",
          "amenity": "fast_food",
          "branch": "Konala",
          "brand": "Subway",
          "brand:wikidata": "Q244457",
          "brand:wikipedia": "en:Subway (restaurant)",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "level": "0",
          "name": "Subway",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa 10:00-18:00; Su 12:00-18:00",
          "phone": "+358 45 277 7038",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 563025623,
        "lat": 60.2747892,
        "lon": 25.0347647,
        "tags": {
          "amenity": "fast_food"
        }
      },
      {
        "type": "node",
        "id": 563025629,
        "lat": 60.2749736,
        "lon": 25.0363218,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Mi Amigo"
        }
      },
      {
        "type": "node",
        "id": 565632630,
        "lat": 60.2749286,
        "lon": 24.9893261,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00740",
          "addr:street": "Jousimiehentie",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "drive_through": "no",
          "name": "Pizzeria Abone",
          "takeaway": "yes",
          "website": "http://www.pizzeriaabone.fi/"
        }
      },
      {
        "type": "node",
        "id": 600388158,
        "lat": 60.1628421,
        "lon": 24.9406193,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "26",
          "addr:postcode": "00120",
          "addr:street": "Iso Roobertinkatu",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "drive_through": "no",
          "name": "Daddy Greens Pizzabar",
          "opening_hours": "Mo-Th 16:00-22:00; Fr 11:00-01:00; Sa 12:00-01:00; Su 12:00-20:00",
          "phone": "+358102990830",
          "website": "https://www.daddygreens.fi/"
        }
      },
      {
        "type": "node",
        "id": 600396813,
        "lat": 60.1721472,
        "lon": 24.9562964,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00170",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Pizza Express Kruununhaka",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-24:00; Sa 11:00-24:00; Su 11:00-22:00",
          "url": "http://www.pizzaexpress.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 603773686,
        "lat": 60.1700286,
        "lon": 24.9277977,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "21",
          "addr:postcode": "00100",
          "addr:street": "Pohjoinen Rautatiekatu",
          "amenity": "fast_food",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "discontinued": "yes",
          "name": "Fafa's Kamppi",
          "note": "Oli remontissa / nimi vaihtui huhtikuussa 2013",
          "website": "http://fafas.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 603811830,
        "lat": 60.1808938,
        "lon": 24.9274592,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "56",
          "addr:postcode": "00260",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Subway",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 606981021,
        "lat": 60.1607067,
        "lon": 24.9463484,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "fast_food",
          "cuisine": "bistro",
          "name": "Sis. Deli + Cafe",
          "opening_hours": "Mo-Fr 7:00-19:00; Sa-Su 9:00-16:00; PH off",
          "website": "https://sisdeli.fi/"
        }
      },
      {
        "type": "node",
        "id": 610392081,
        "lat": 60.1887498,
        "lon": 24.9181403,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "47",
          "addr:postcode": "00250",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Stadin Ravintola (SR)",
          "opening_hours": "Mo-Fr 10:00-22:00; Sa,Su 11:00-22:00",
          "website": "http://stadinravintola.fi/"
        }
      },
      {
        "type": "node",
        "id": 610922900,
        "lat": 60.1674558,
        "lon": 24.9541896,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00170",
          "addr:street": "Kauppatori / Market Square",
          "amenity": "fast_food",
          "cuisine": "burger",
          "name": "Kauppatorin Grilli",
          "website": "https://www.tripadvisor.fi/Restaurant_Review-g189934-d8547803-Reviews-Kauppatorin_Grilli-Helsinki_Uusimaa.html",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 614665429,
        "lat": 60.2507161,
        "lon": 25.0123898,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4",
          "addr:postcode": "00700",
          "addr:street": "Ala-Malmin tori",
          "amenity": "fast_food",
          "branch": "Malmi",
          "brand": "Burger King",
          "brand:wikidata": "Q177054",
          "brand:wikipedia": "en:Burger King",
          "cuisine": "burger",
          "email": "malmi.burgerking@restel.fi",
          "name": "Burger King",
          "opening_hours": "Mo-Fr 10:00-21:00; Sa-Su 11:00-21:00",
          "operator": "Restel Fast Food Oy",
          "phone": "+358 40 183 8372",
          "takeaway": "yes",
          "website": "http://www.burgerking.fi/"
        }
      },
      {
        "type": "node",
        "id": 614665430,
        "lat": 60.2520257,
        "lon": 25.0138704,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "fast_food",
          "brand": "Subway",
          "brand:wikidata": "Q244457",
          "brand:wikipedia": "en:Subway (restaurant)",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "layer": "1",
          "name": "Subway",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 614665431,
        "lat": 60.2506415,
        "lon": 25.0125615,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4",
          "addr:street": "Ala-Malmin tori",
          "amenity": "fast_food",
          "brand": "Kotipizza",
          "brand:wikidata": "Q1628625",
          "brand:wikipedia": "en:Kotipizza",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Kotipizza",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 648525095,
        "lat": 60.1633943,
        "lon": 24.9415542,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "13",
          "addr:postcode": "00120",
          "addr:street": "Iso Roobertinkatu",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Kotipizza",
          "phone": "+3589648150",
          "smoking": "no",
          "website": "https://www.kotipizza.fi/index/20?kotipizzaID=FI00020159",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 664687874,
        "lat": 60.2127349,
        "lon": 25.0969172,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00910",
          "addr:street": "Rusthollarintie",
          "amenity": "fast_food",
          "cuisine": "kebab",
          "name": "Puotilan pizza & kebab",
          "phone": "+358 9 3254040",
          "website": "https://www.puotilanpizza.com/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 768746002,
        "lat": 60.2457258,
        "lon": 24.9242855,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "82",
          "addr:postcode": "00660",
          "addr:street": "Pakilantie",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "diet:kosher": "no",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "enisa.tmi@gmail.com",
          "facebook": "https://www.facebook.com/ppkravintola/",
          "name": "Pakilan Pizza Kebab",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:30-23:00; Sa 11:30-23:00; Su 11:30-22:00",
          "phone": "+358 9 757 0003",
          "website": "http://www.pakilanpizza.com/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 778198274,
        "lat": 60.1681057,
        "lon": 24.9753665,
        "tags": {
          "amenity": "fast_food",
          "beer": "yes",
          "cuisine": "burger;pasta;pizza;kebab",
          "name": "Katajanokan Pizzapalvelu",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-02:00; Sa 11:00-02:00; Su 11:00-22:00",
          "phone": "+358 9 175 384"
        }
      },
      {
        "type": "node",
        "id": 908646907,
        "lat": 60.1952603,
        "lon": 24.8732632,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "kebab",
          "name": "Vanha Munkki"
        }
      },
      {
        "type": "node",
        "id": 908876906,
        "lat": 60.1978615,
        "lon": 24.8795854,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Pizzapaja"
        }
      },
      {
        "type": "node",
        "id": 919509063,
        "lat": 60.1691015,
        "lon": 24.9385168,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Forum",
          "addr:housenumber": "20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "branch": "Forum Pohjakerros",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "hki-forum-pohjakerros@fi.mcd.com",
          "level": "0",
          "name": "McDonald's",
          "opening_hours": "Mo-Fr 08:00-21:00; Sa 08:00-19:00; Su 11:00-19:00",
          "operator": "Hurger Oy",
          "phone": "+358 40 717 0297",
          "takeaway": "yes",
          "website": "https://www.mcdonalds.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 948422121,
        "lat": 60.1815672,
        "lon": 24.9510919,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Sivuraide"
        }
      },
      {
        "type": "node",
        "id": 1056651161,
        "lat": 60.1875001,
        "lon": 24.9559310,
        "tags": {
          "amenity": "fast_food",
          "name": "Capris"
        }
      },
      {
        "type": "node",
        "id": 1056656794,
        "lat": 60.1882423,
        "lon": 24.9577686,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza;kebab",
          "diet:vegetarian": "yes",
          "name": "Apollo"
        }
      },
      {
        "type": "node",
        "id": 1056678097,
        "lat": 60.1861915,
        "lon": 24.9535128,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "fast_food",
          "name": "Marmaris"
        }
      },
      {
        "type": "node",
        "id": 1076883523,
        "lat": 60.1635607,
        "lon": 24.9106262,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "21",
          "addr:postcode": "00180",
          "addr:street": "Itämerenkatu",
          "amenity": "fast_food",
          "brand": "Subway",
          "brand:wikidata": "Q244457",
          "brand:wikipedia": "en:Subway (restaurant)",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Subway",
          "takeaway": "yes",
          "website": "http://www.subway.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1080643151,
        "lat": 60.1836132,
        "lon": 24.9189713,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "12",
          "addr:postcode": "00250",
          "addr:street": "Eino Leinon katu",
          "amenity": "fast_food",
          "name": "Zuhat",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1083993249,
        "lat": 60.1802640,
        "lon": 24.9237741,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "50",
          "addr:postcode": "00260",
          "addr:street": "Runeberginkatu",
          "amenity": "fast_food",
          "name": "Runebergin Pizza-Kebab",
          "website": "https://pizza-online.fi/ravintolat/helsinki/runeberginpizzakebab/"
        }
      },
      {
        "type": "node",
        "id": 1084037651,
        "lat": 60.1746921,
        "lon": 24.9214169,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "9",
          "addr:postcode": "00100",
          "addr:street": "Caloniuksenkatu",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Anesi",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa-Su 12:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 1227011875,
        "lat": 60.1680326,
        "lon": 24.9310828,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00100",
          "addr:street": "Kampinkuja",
          "amenity": "fast_food",
          "brand": "Subway",
          "brand:wikidata": "Q244457",
          "brand:wikipedia": "en:Subway (restaurant)",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "layer": "-1",
          "name": "Subway",
          "opening_hours": "Mo-Fr 08:00-22:00; Sa 09:00-22:00; Su 12:00-22:00",
          "operator": "Subway",
          "smoking": "no",
          "takeaway": "yes",
          "website": "http://www.sunway.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1367785702,
        "lat": 60.1954528,
        "lon": 24.8908158,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "29",
          "addr:postcode": "00270",
          "addr:street": "Paciuksenkatu",
          "amenity": "fast_food",
          "branch": "Meilahti",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "name": "McDonald's",
          "opening_hours": "Mo-Fr 07:30-23:00; Sa-Su 10:00-23:00",
          "operator": "Food Folk Suomi Oy",
          "phone": "+358 40 717 0469",
          "takeaway": "yes",
          "website": "https://www.mcdonalds.fi/"
        }
      },
      {
        "type": "node",
        "id": 1369465556,
        "lat": 60.1711978,
        "lon": 24.9420005,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "amenity": "fast_food",
          "cuisine": "grill;burger",
          "name": "Aseman wursti",
          "opening_hours": "Mo-Th 09:00-00:00; Fr-Sa 09:00-02:00; Su 09:00-22:00",
          "opening_hours:covid19": "off",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1369465559,
        "lat": 60.1711801,
        "lon": 24.9413328,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00100",
          "addr:street": "Asemahalli, Kaivokatu",
          "amenity": "fast_food",
          "cuisine": "coffee_shop",
          "name": "Baguette & Co",
          "website": "https://www.avecra.fi/asemaravintolat/baguette-co/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1369465577,
        "lat": 60.1709180,
        "lon": 24.9422072,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00100",
          "addr:street": "Rautatieasema, Kaivokatu",
          "amenity": "fast_food",
          "branch": "Rautatieasema",
          "brand": "Burger King",
          "brand:wikidata": "Q177054",
          "brand:wikipedia": "en:Burger King",
          "cuisine": "burger",
          "name": "Burger King",
          "opening_hours": "Mo-Th 08:00-00:00; Fr-Sa 08:00-01:30; Su 10:00-23:00",
          "phone": "+358 20 770 1801",
          "smoking": "no",
          "takeaway": "yes",
          "website": "http://www.burgerking.fi",
          "wheelchair": "yes",
          "wheelchair:description": "Ravintola auki arkena: ma–to 08.00–24.00\r\nRavintola auki viikonloppuna: pe–la 08.00–01.30, su 10.00–23.00\r\nPuhelin: 020 770 1801\r\nRavintolat #: 20205"
        }
      },
      {
        "type": "node",
        "id": 1369465581,
        "lat": 60.1713163,
        "lon": 24.9405851,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "amenity": "fast_food",
          "name": "Food& Jones",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1369465624,
        "lat": 60.1690162,
        "lon": 24.9392143,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "16",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "branch": "Forum Katutaso",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "level": "1",
          "name": "McDonald's",
          "opening_hours": "24/7",
          "operator": "Hurger Oy",
          "phone": "+358 40 717 0258",
          "takeaway": "yes",
          "website": "https://www.mcdonalds.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1369465635,
        "lat": 60.1718969,
        "lon": 24.9405507,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "fast_food",
          "name": "Namaskaar India express"
        }
      },
      {
        "type": "node",
        "id": 1369465663,
        "lat": 60.1707245,
        "lon": 24.9429295,
        "tags": {
          "addr:city": "Helsinki",
          "addr:postcode": "00100",
          "addr:street": "Rautatientori, Kaivokatu",
          "amenity": "fast_food",
          "name": "Rautatieaseman grilli"
        }
      },
      {
        "type": "node",
        "id": 1369465671,
        "lat": 60.1696078,
        "lon": 24.9451921,
        "tags": {
          "access:covid19": "no",
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "8",
          "addr:postcode": "00100",
          "addr:street": "Mikonkatu",
          "amenity": "fast_food",
          "cuisine": "burger",
          "delivery:covid19": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "floor": "2",
          "name": "Friends & Brgrs Helsinki",
          "name:fi": "Friend & Brgrs",
          "opening_hours": "Mo-Th 11:00-21:00; Fr-Sa 11:00-22:00; Su 12:00-21:00",
          "opening_hours:covid19": "Mo-Th 11:00-21:00; Fr,Sa 11:00-22:00; Su 12:00-21:00",
          "takeaway:covid19": "yes",
          "website": "https://friendsandbrgrs.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1369465682,
        "lat": 60.1690849,
        "lon": 24.9390257,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "fast_food",
          "name": "Southern Fried Chicken",
          "smoking": "no"
        }
      },
      {
        "type": "node",
        "id": 1371746679,
        "lat": 60.1692073,
        "lon": 24.9355208,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "fast_food",
          "name": "D'Wok"
        }
      },
      {
        "type": "node",
        "id": 1377242346,
        "lat": 60.1665111,
        "lon": 24.9329111,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "15-17",
          "addr:street": "Eerikinkatu",
          "amenity": "fast_food",
          "cuisine": "kebab;pizza",
          "level": "1",
          "name": "Eerikin pippuri",
          "opening_hours": "Mo-Su 10:00-05:00",
          "smoking": "no"
        }
      },
      {
        "type": "node",
        "id": 1378007309,
        "lat": 60.1682043,
        "lon": 24.9353103,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "31-33",
          "addr:postcode": "00100",
          "addr:street": "Annankatu",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Sky Express",
          "opening_hours": "Mo-Th 11:00-22:00; Fr 11:00-05:00; Sa 12:00-05:00; Su 12:00-22:00",
          "phone": "+35896943890",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1378064349,
        "lat": 60.1668033,
        "lon": 24.9305380,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "drive_through": "no",
          "name": "Ravintola Sivukaide"
        }
      },
      {
        "type": "node",
        "id": 1378951606,
        "lat": 60.1689960,
        "lon": 24.9300413,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "48",
          "addr:postcode": "00100",
          "addr:street": "Fredrikinkatu",
          "amenity": "fast_food",
          "branch": "Kamppi",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "name": "McDonald's",
          "opening_hours": "24/7",
          "operator": "Food Folk Suomi Oy",
          "phone": "+358 40 833 0043",
          "takeaway": "yes",
          "website": "https://www.mcdonalds.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1380991232,
        "lat": 60.1784751,
        "lon": 24.9496263,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "12",
          "addr:postcode": "00530",
          "addr:street": "Siltasaarenkatu",
          "amenity": "fast_food",
          "branch": "Hakaniemi",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "cuisine": "burger",
          "diet:kosher": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "internet_access": "wlan",
          "name": "McDonald's",
          "name:ru": "МакДональдс",
          "opening_hours": "24/7",
          "operator": "SJK Ravintolat Oy",
          "phone": "+358 50 305 6691",
          "takeaway": "yes",
          "toilets:wheelchair": "yes",
          "website": "https://www.mcdonalds.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1416722128,
        "lat": 60.2051292,
        "lon": 25.1199687,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00980",
          "addr:street": "Vuotie",
          "amenity": "fast_food",
          "brand": "Hesburger",
          "cuisine": "burger",
          "drive_through": "no",
          "name": "HESBURGER HELSINKI VUOSAARI RASTILA",
          "toilets:wheelchair": "yes",
          "website": "https://www.hesburger.fi/ravintolat?tid=1374",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1428947956,
        "lat": 60.1566475,
        "lon": 24.9216003,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00220",
          "addr:street": "Tyynenmerenkatu",
          "amenity": "fast_food",
          "branch": "Jätkäsaari",
          "brand": "Hesburger",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "jatkasaari@hesburger.fi",
          "name": "Hesburger",
          "opening_hours": "Mo-Fr 09:30-21:00; Sa 10:00-20:00; Su 11:00-19:00",
          "operator": "Jätkäravintolat Oy",
          "phone": "+358 44 480 8857",
          "smoking": "no",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1490960697,
        "lat": 60.2232664,
        "lon": 25.1151460,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "30",
          "addr:postcode": "00950",
          "addr:street": "Linnavuorentie",
          "amenity": "fast_food",
          "name": "Rolls Express Itäväylä",
          "website": "https://www.rolls.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1519800269,
        "lat": 60.1619071,
        "lon": 24.9465546,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00130",
          "addr:street": "Korkeavuorenkatu",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Mimosa",
          "opening_hours": "Mo-Th 11:00-22:30; Fr-Sa 10:00-05:00; Su 12:00-22:30",
          "phone": "636476"
        }
      },
      {
        "type": "node",
        "id": 1529213464,
        "lat": 60.1841310,
        "lon": 24.9527111,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "fast_food",
          "name": "Karhupuiston grilli"
        }
      },
      {
        "type": "node",
        "id": 1589624927,
        "lat": 60.1695567,
        "lon": 24.9451941,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "fast_food",
          "cuisine": "kebab",
          "name": "Chilli",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1606508280,
        "lat": 60.2475793,
        "lon": 24.8622760,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00410",
          "addr:street": "Malminkartanonaukio",
          "amenity": "fast_food",
          "cuisine": "burger;pizza;kebab",
          "lunch:menu": "Mo 10:10-15:00;Tu-We 10:30-15:00;Th-Fr 10:30-15:00",
          "name": "Kartanon Grilli",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-02:00; Sa 11:00-02:00; Su 11:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 1608849785,
        "lat": 60.2372766,
        "lon": 24.8938326,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Kaari",
          "addr:housenumber": "1",
          "addr:postcode": "00420",
          "addr:street": "Kantelettarentie",
          "amenity": "fast_food",
          "branch": "Kannelmäki",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "delivery": "no",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "kannelmaki@hesburger.fi",
          "level": "0",
          "name": "Hesburger",
          "opening_hours": "Mo-Sa 10:00-21:30; Su 11:30-20:00",
          "opening_hours:covid19": "Mo-Sa 10:00-21:00; Su 13:00-19:00",
          "outdoor_seating": "no",
          "phone": "+358 44 480 9485",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1618069505,
        "lat": 60.1563553,
        "lon": 24.9212251,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11",
          "addr:postcode": "00220",
          "addr:street": "Tyynenmerenkatu",
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Subway",
          "opening_hours": "Mo-Fr 08:00-23:00; Sa-Su 09:00-23:00",
          "smoking": "no",
          "website": "http://www.subway.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1686189016,
        "lat": 60.1931810,
        "lon": 24.9066744,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Manskun pizza kebab",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa,Su 11:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 1734438639,
        "lat": 60.1874560,
        "lon": 24.9606828,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00500",
          "addr:street": "Helsinginkatu",
          "amenity": "fast_food",
          "name": "Grillikioski Hesari 4",
          "opening_hours": "7/24",
          "shop": "kiosk",
          "website": "http://sylvi.fi/2013/09/grillikioski-hesari-4/",
          "wheelchair": "limited",
          "wheelchair:description": "1 korkea porras sisään / One high stair up to get in."
        }
      },
      {
        "type": "node",
        "id": 1772724542,
        "lat": 60.1872120,
        "lon": 24.9397222,
        "tags": {
          "amenity": "fast_food",
          "name": "Grilli"
        }
      },
      {
        "type": "node",
        "id": 1850118288,
        "lat": 60.2420737,
        "lon": 24.8448394,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "25",
          "addr:postcode": "00390",
          "addr:street": "Ristipellontie",
          "amenity": "fast_food",
          "branch": "Konala",
          "brand": "Kotipizza",
          "brand:wikidata": "Q1628625",
          "brand:wikipedia": "en:Kotipizza",
          "cuisine": "pizza",
          "delivery": "Mo-Th 10:30-19:15;Fr-Sa 10:30-20:00;Su 11:30-19:00",
          "drive_through": "no",
          "lunch:menu": "Mo-Fr 10:30-15:00",
          "name": "Kotipizza",
          "opening_hours": "Mo-Th 10:30-20:00; Fr-Sa 10:30-21:00; Su 11:30-20:00",
          "phone": "+358 207 716 394",
          "takeaway": "yes",
          "website": "https://www.kotipizza.fi/"
        }
      },
      {
        "type": "node",
        "id": 1867572970,
        "lat": 60.1883515,
        "lon": 24.9468144,
        "tags": {
          "amenity": "fast_food",
          "facebook": "https://www.facebook.com/onnipizzeria/",
          "name": "Onni Pizzeria"
        }
      },
      {
        "type": "node",
        "id": 1886663850,
        "lat": 60.2242265,
        "lon": 25.0752402,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00920",
          "addr:street": "Kivensilmänkuja",
          "amenity": "fast_food",
          "branch": "Myllypuro",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "myllypuro@hesburger.fi",
          "name": "Hesburger",
          "opening_hours": "Mo-Fr 09:30-22:00; Sa 10:00-22:00; Su 11:30-21:00",
          "operator": "Itäkeskuksen Burgerexpress Oy",
          "phone": "+358 44 480 9207",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1886663858,
        "lat": 60.2244555,
        "lon": 25.0750739,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00920",
          "addr:street": "Kiviparintie",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Mega Pizza & Kebab",
          "website": "http://megapizza.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1989400694,
        "lat": 60.2310635,
        "lon": 24.9994399,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza",
          "delivery": "yes",
          "name": "Pihlajiston Pizzeria",
          "opening_hours": "Mo-Th 10:00-22:00; Fr-Sa 10:00-23:00; Su 11:00-22:00",
          "phone": "+358 9 224 5159",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 2018446351,
        "lat": 60.1601530,
        "lon": 24.9428135,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "15a",
          "addr:postcode": "00150",
          "addr:street": "Jääkärinkatu",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Eira Plaza",
          "opening_hours": "Sa-Su 11:00-22:00; Fr 10:30-12:00,13:30-22:00; Mo-Th 10:30-22:00"
        }
      },
      {
        "type": "node",
        "id": 2070223647,
        "lat": 60.2338802,
        "lon": 25.0116156,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "kebab",
          "name": "Pihlis Pizza Kebab"
        }
      },
      {
        "type": "node",
        "id": 2109340377,
        "lat": 60.2025020,
        "lon": 25.0586773,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "26",
          "addr:postcode": "00820",
          "addr:street": "Roihuvuorentie",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Kotipizza",
          "website": "https://www.kotipizza.fi/"
        }
      },
      {
        "type": "node",
        "id": 2133469675,
        "lat": 60.1984807,
        "lon": 24.8844468,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00330",
          "addr:street": "Huopalahdentie",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "delivery": "yes",
          "lunch": "Mo-Fr 10:00-15:00",
          "name": "Munkkiniemen Pizzeria Kebab",
          "opening_hours": "Mo-Th 10:30-21:30; Fr 10:30-22:00; Sa-Su 11:00-21:30",
          "phone": "+358 9 498 210",
          "takeaway": "yes",
          "website": "https://pizza-online.fi/ravintolat/helsinki/munkkiniemen/"
        }
      },
      {
        "type": "node",
        "id": 2142693446,
        "lat": 60.2343906,
        "lon": 24.9664356,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "19",
          "addr:postcode": "00640",
          "addr:street": "Siltavoudintie",
          "amenity": "fast_food",
          "branch": "Oulunkylä",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "oulunkyla@hesburger.fi",
          "name": "Hesburger",
          "opening_hours": "Mo-Su 10:00-23:30",
          "operator": "Scandinavian Trading Group 2001 Oy Ab",
          "phone": "+358 9 728 4455",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2212007020,
        "lat": 60.1948178,
        "lon": 25.0281889,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00810",
          "addr:street": "Hiihtäjäntie",
          "amenity": "fast_food",
          "name": "Wang Him",
          "website": "https://eat.fi/fi/helsinki/wang-him",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 2213149019,
        "lat": 60.1947871,
        "lon": 24.9665342,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "kebab",
          "name": "Hermannin pizza kebab"
        }
      },
      {
        "type": "node",
        "id": 2225393047,
        "lat": 60.1693686,
        "lon": 24.9452310,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00100",
          "addr:street": "Mikonkatu",
          "amenity": "fast_food",
          "brand": "Fafa's",
          "cuisine": "kebab",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "name": "Fafa's",
          "opening_hours": "Mo-Sa 10:00-05:00; Su 11:00-05:00",
          "toilets:wheelchair": "yes",
          "website": "http://fafas.fi/",
          "wheelchair": "no",
          "wheelchair:description": "One step (8 cm) up. Fafa's serve pitas, falafels and salads, also gluten-free ones."
        }
      },
      {
        "type": "node",
        "id": 2225393064,
        "lat": 60.1691001,
        "lon": 24.9486507,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Subway",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2263065422,
        "lat": 60.1877545,
        "lon": 24.9480613,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Pizzeria Romano",
          "opening_hours": "Mo-Th 10:00-22:00; Fr-Sa 10:00-24:00; Su 10:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 2270234282,
        "lat": 60.1680866,
        "lon": 24.9419083,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Stockmann",
          "addr:housenumber": "52",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "fast_food",
          "branch": "Aleksanterinkatu",
          "brand": "Hesburger",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "stockmann@hesburger.fi",
          "level": "5",
          "name": "Hesburger",
          "opening_hours": "Mo-Fr 09:00-21:00, Sa 09:00-19:00, Su 11:00-18:00",
          "operator": "HiphopBurger Oy",
          "phone": "+358 44 480 9205",
          "smoking": "no",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2288185046,
        "lat": 60.1609887,
        "lon": 24.8866571,
        "tags": {
          "amenity": "fast_food",
          "name": "Pizza Express Lauttasaari",
          "phone": "+358 9 675 627",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2291055781,
        "lat": 60.1871077,
        "lon": 24.9662795,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "10",
          "addr:postcode": "00500",
          "addr:street": "Vilhonvuorenkatu",
          "amenity": "fast_food",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Fafa's Kallio",
          "website": "http://fafas.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2291064674,
        "lat": 60.1639978,
        "lon": 24.9439565,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00120",
          "addr:street": "Iso Roobertinkatu",
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "name": "Fafa's Iso Roba",
          "opening_hours": "Mo-Th 11:00-21:00; Fr 11:00-04:00; Sa 12:00-04:00; Su off",
          "phone": "+358 40 2415719",
          "website": "http://fafas.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2328076657,
        "lat": 60.2103985,
        "lon": 25.0794892,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "3",
          "addr:postcode": "00930",
          "addr:street": "Tallinnanaukio",
          "amenity": "fast_food",
          "brand": "Subway",
          "brand:wikidata": "Q244457",
          "brand:wikipedia": "en:Subway (restaurant)",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "1",
          "name": "Subway",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa 09:00-19:00; Su 12:00-18:00",
          "phone": "+358 9 323 2345",
          "takeaway": "yes",
          "website": "http://www.subway.fi/fi/ravintolat/helsinki/helsinki-itis/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2330251221,
        "lat": 60.1884789,
        "lon": 24.9563132,
        "tags": {
          "amenity": "fast_food",
          "name": "City Kebab Pizza",
          "website": "https://www.facebook.com/City-KEBAB-Pizza-1374356519556343/"
        }
      },
      {
        "type": "node",
        "id": 2356311577,
        "lat": 60.1703576,
        "lon": 24.9341323,
        "tags": {
          "amenity": "fast_food",
          "name": "Elvis Burger",
          "opening_hours": "Mo-Tu 10:00-01:00; We-Th 10:00-03:00; Fr 10:00-05:00; Sa 12:00-05:00; Su 13:00-22:00",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2531348706,
        "lat": 60.2218483,
        "lon": 24.9036862,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00400",
          "addr:street": "Huovitie",
          "amenity": "fast_food",
          "cuisine": "pizza;kebab;salad;chicken;indian;schnitzel;steak;falafel;fish;pasta",
          "delivery": "yes",
          "name": "Ravintola Pippuri",
          "opening_hours": "Mo-Fr 10:00-22:00; Sa-Su 11:00-22:00",
          "phone": "+358 9 496 980",
          "website": "http://www.ravintolapippuri.fi"
        }
      },
      {
        "type": "node",
        "id": 2531348710,
        "lat": 60.2217857,
        "lon": 24.9045391,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00400",
          "addr:street": "Huovitie",
          "amenity": "fast_food",
          "branch": "Haaga",
          "cuisine": "pizza;kebab",
          "delivery": "Mo-Fr 10:00-21:30;Sa-Su 11:00-21:30",
          "name": "Pizza Service",
          "opening_hours": "Mo-Fr 10:00-22:00; Sa-Su 11:00-22:00",
          "phone": "+358 9 588 4656",
          "takeaway": "yes",
          "website": "http://www.haaganpizzakebab.fi/"
        }
      },
      {
        "type": "node",
        "id": 2609533092,
        "lat": 60.1680048,
        "lon": 24.9406854,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "12",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "branch": "Mannerheimintie",
          "brand": "Burger King",
          "cuisine": "burger",
          "drive_through": "no",
          "email": "mannerheimintie12.burgerking@restel.fi",
          "name": "Burger King",
          "opening_hours": "Mo-Th 10:00-23:00; Fr-Sa 10:00-00:00; Su 10:00-23:00",
          "operator": "Restel Fast Food Oy",
          "phone": "+358 20 770 1800",
          "takeaway": "yes",
          "website": "http://www.burgerking.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2610841838,
        "lat": 60.2297172,
        "lon": 24.8962469,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "14",
          "addr:postcode": "00400",
          "addr:street": "Näyttelijäntie",
          "amenity": "fast_food",
          "cuisine": "pizza;kebab;pasta;chicken;fish;steak_house;schnitzel",
          "delivery": "yes",
          "name": "Pizzeria Sole",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "phone": "+358 9 586 5608",
          "takeaway": "yes",
          "toilets:wheelchair": "no",
          "website": "https://solepizzeria.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 2611645474,
        "lat": 60.2038685,
        "lon": 24.8953478,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00300",
          "addr:street": "Tilkankatu",
          "amenity": "fast_food",
          "branch": "Pikku-Huopalahti",
          "cuisine": "pizza",
          "delivery": "yes",
          "lunch": "Mo-Fr 10:30-15:00",
          "name": "Pizzeria Shine",
          "opening_hours": "Mo-Fr 10:30-22:00; Sa-Su 11:00-22:00",
          "phone": "+358 9 458 2446",
          "takeaway": "yes",
          "website": "https://pizza-online.fi/ravintolat/helsinki/pizzeria-shine/"
        }
      },
      {
        "type": "node",
        "id": 2611648728,
        "lat": 60.1957985,
        "lon": 24.8942642,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Ravintola Pacius"
        }
      },
      {
        "type": "node",
        "id": 2613934567,
        "lat": 60.2306029,
        "lon": 24.8832688,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00440",
          "addr:street": "Pennikuja",
          "amenity": "fast_food",
          "cuisine": "burger;kebab",
          "name": "Aseman Grilli",
          "opening_hours": "Mo-Th 21:00-03:00; Fr-Sa 21:00-05:00; Su 21:00-03:00"
        }
      },
      {
        "type": "node",
        "id": 2625472554,
        "lat": 60.2117202,
        "lon": 24.8877798,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "15",
          "addr:postcode": "00320",
          "addr:street": "Vihdintie",
          "amenity": "fast_food",
          "cuisine": "pizza;kebab",
          "diet:vegetarian": "yes",
          "name": "Delal Pizza & Kebab",
          "opening_hours": "Mo-Su 10:00-22:00",
          "phone": "+358 9 458 3470",
          "takeaway": "yes",
          "website": "https://delalpizza.fi/"
        }
      },
      {
        "type": "node",
        "id": 2626760633,
        "lat": 60.1715536,
        "lon": 24.9467080,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "amenity": "fast_food",
          "cuisine": "chinese",
          "floor": "-1",
          "lunch": "yes",
          "name": "City China",
          "opening_hours:covid19": "off",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2626760656,
        "lat": 60.1714875,
        "lon": 24.9466742,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "amenity": "fast_food",
          "floor": "-1",
          "lunch": "yes",
          "name": "Siipiweikot",
          "opening_hours:covid19": "Mo-Th 16:00-21:00: Fr-Su 13:00-22:00",
          "takeaway:covid19": "only"
        }
      },
      {
        "type": "node",
        "id": 2626760666,
        "lat": 60.1715524,
        "lon": 24.9466331,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "amenity": "fast_food",
          "cuisine": "indian",
          "floor": "-1",
          "lunch": "yes",
          "name": "Namaskaar Express",
          "opening_hours:covid19": "off",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2645526442,
        "lat": 60.2362980,
        "lon": 25.0848224,
        "tags": {
          "amenity": "fast_food",
          "branch": "Mikkeli",
          "brand": "Burger King",
          "brand:wikidata": "Q177054",
          "brand:wikipedia": "en:Burger King",
          "cuisine": "burger",
          "drive_through": "no",
          "name": "Burger King",
          "opening_hours": "Mo-Th 10:00-22:00, Fr 10:00-23:00, Sa 10:00-23:00, Su 10:00-21:00",
          "takeaway": "yes",
          "website": "http://www.burgerking.fi/"
        }
      },
      {
        "type": "node",
        "id": 2657083230,
        "lat": 60.2635086,
        "lon": 25.0267864,
        "tags": {
          "addr:housenumber": "21",
          "addr:street": "Päivöläntie",
          "amenity": "fast_food",
          "cuisine": "chinese",
          "name": "China-Man Oy",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa-Su 12:00-21:00",
          "phone": "09-41107110",
          "website": "http://www.chinaman.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2828886543,
        "lat": 60.1711737,
        "lon": 24.9411342,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Helsingin päärautatieasema",
          "addr:postcode": "00100",
          "addr:street": "Asema-aukio",
          "amenity": "fast_food",
          "branch": "Asema-aukio",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "email": "rautatieasema.hki@hesburger.fi",
          "name": "Hesburger Rautatieasema",
          "opening_hours": "Mo-Tu 09:00-24:00; We-Th 09:00-01:30; Fr-Sa 09:00-02:00; Su 09:00-24:00",
          "operator": "Avecra Oy",
          "phone": "+358 40 862 2943",
          "smoking": "no",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2999849655,
        "lat": 60.2800372,
        "lon": 25.0118911,
        "tags": {
          "addr:housenumber": "39",
          "addr:postcode": "00750",
          "addr:street": "Tapulikaupungintie",
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "name": "Subway",
          "opening_hours": "Mo-Sa 09:00-23:00; Su 11:00-23:00",
          "phone": "+358108200415",
          "source": "survey",
          "start_date": "2014-08-07",
          "website": "http://www.subway.fi"
        }
      },
      {
        "type": "node",
        "id": 3220529217,
        "lat": 60.1862814,
        "lon": 24.9617028,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "21",
          "addr:postcode": "00500",
          "addr:street": "Hämeentie",
          "amenity": "fast_food",
          "cuisine": "noodle",
          "name": "Codle (Vietnamese kitchen)",
          "website": "https://www.facebook.com/CodleHelsinki"
        }
      },
      {
        "type": "node",
        "id": 3304026698,
        "lat": 60.1690372,
        "lon": 24.9470227,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "11",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "fast_food",
          "branch": "Aleksanterinkatu",
          "brand": "Burger King",
          "brand:wikidata": "Q177054",
          "brand:wikipedia": "en:Burger King",
          "cuisine": "burger",
          "email": "aleksanterinkatu-helsinki.burgerking@restel.fi",
          "name": "Burger King",
          "opening_hours": "Mo-Sa 10:00-21:00; Su 11:00-20:00",
          "operator": "Restel Fast Food Oy",
          "phone": "+358 20 770 1809",
          "smoking": "no",
          "takeaway": "yes",
          "website": "http://www.burgerking.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 3367919335,
        "lat": 60.2298977,
        "lon": 25.0095080,
        "tags": {
          "amenity": "fast_food",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "name": "Hesburger",
          "takeaway": "yes",
          "was:amenity": "fast_food"
        }
      },
      {
        "type": "node",
        "id": 3410374701,
        "lat": 60.1689421,
        "lon": 24.9322084,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00100",
          "addr:street": "Urho Kekkosen katu",
          "amenity": "fast_food",
          "branch": "Kamppi",
          "brand": "Burger King",
          "brand:wikidata": "Q177054",
          "brand:wikipedia": "en:Burger King",
          "cuisine": "burger",
          "delivery": "no",
          "drive_through": "no",
          "email": "kamppi.burgerking@restel.fi",
          "level": "-1",
          "name": "Burger King",
          "opening_hours": "Mo-Th 09:00-24:00; Fr-Sa 09:00-04:00; Su 10:00-24:00",
          "operator": "Restel Fast Food Oy",
          "phone": "+358 20 770 1810",
          "smoking": "no",
          "takeaway": "yes",
          "website": "http://www.burgerking.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 3410380728,
        "lat": 60.1686424,
        "lon": 24.9313499,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00100",
          "addr:street": "Urho Kekkosen katu",
          "amenity": "fast_food",
          "branch": "Kamppi",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "kamppi@hesburger.fi",
          "level": "E",
          "name": "Hesburger",
          "opening_hours": "Mo-Th 09:30-23:00; Fr-Sa 09:30-02:00; Su 10:30-23:00",
          "operator": "BurgerKamppi Oy",
          "phone": "+358 44 480 9200",
          "smoking": "no",
          "takeaway": "yes",
          "toilets:wheelchair": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 3474504009,
        "lat": 60.1841079,
        "lon": 24.9591487,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "34",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "amenity": "fast_food",
          "name": "SB Deli;As Oy Hämeentie 34",
          "phone": "+358 40 837 6232",
          "smoking": "outside",
          "takeaway": "yes",
          "website": "https://www.facebook.com/pages/SB-Deli/1549103612039397;http://www.kauppalehti.fi/yritykset/yritys/asunto+oy+hameentie+/02346283"
        }
      },
      {
        "type": "node",
        "id": 3495109602,
        "lat": 60.1636262,
        "lon": 24.9121783,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "21",
          "addr:postcode": "00180",
          "addr:street": "Itämerenkatu",
          "amenity": "fast_food",
          "branch": "Ruoholahti",
          "brand": "Burger King",
          "cuisine": "burger",
          "email": "ruoholahti.burgerking@restel.fi",
          "name": "Burger King",
          "opening_hours": "Mo-We 10:00-21:00; Su 11:00-21:00; Th-Sa 10:00-22:00",
          "operator": "Restel Fast Food Oy",
          "phone": "+358 20 770 1812",
          "takeaway": "yes",
          "website": "http://www.burgerking.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 3874242157,
        "lat": 60.1690486,
        "lon": 24.9469260,
        "tags": {
          "amenity": "fast_food",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "aleksanterinkatu.rax@restel.fi",
          "fixme": "specify position",
          "name": "Rax Buffet",
          "opening_hours": "Mo-Th 10:30-21:00; Fr 10:30-22:00; Sa 11:00-22:00; Su 11:00-20:00",
          "phone": "020 766 4916",
          "website": "https://www.rax.fi/ravintolat/helsinki-aleksi/fi_FI/helsinki-aleksi/",
          "website:fi": "https://www.rax.fi/ravintolat/helsinki-aleksi/fi_FI/helsinki-aleksi/",
          "website:sv": "https://www.rax.fi/ravintolat/helsinki-aleksi/sv_FI/helsingfors-aleksi/"
        }
      },
      {
        "type": "node",
        "id": 3995376835,
        "lat": 60.2517067,
        "lon": 25.0178895,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00700",
          "addr:street": "Soidintie",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "King Pizzeria"
        }
      },
      {
        "type": "node",
        "id": 4179147989,
        "lat": 60.2744848,
        "lon": 25.0452444,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00760",
          "addr:street": "Puistolantori",
          "amenity": "fast_food",
          "cuisine": "pizza;kebab",
          "drive_through": "no",
          "name": "Puistolan pizzapalvelu",
          "opening_hours:covid19": "open",
          "operator": "Puistolan Pizzapalvelu Oy",
          "phone": "09 389 3636",
          "website": "https://www.pizzapalvelu.net/"
        }
      },
      {
        "type": "node",
        "id": 4226460218,
        "lat": 60.1638261,
        "lon": 24.9428040,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "7",
          "addr:postcode": "00120",
          "addr:street": "Iso Roobertinkatu",
          "amenity": "fast_food",
          "cuisine": "mexican",
          "name": "Tortilla House",
          "opening_hours": "Mo-Sa 10:30-22:00"
        }
      },
      {
        "type": "node",
        "id": 4226632189,
        "lat": 60.1816352,
        "lon": 24.9508272,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00530",
          "addr:street": "Porthaninkatu",
          "amenity": "fast_food",
          "cuisine": "mexican",
          "drive_through": "no",
          "name": "Chalupa",
          "opening_hours": "Mo-Sa 11:00-21:00; Su 12:00-20:00",
          "phone": "+358 50 321 1063",
          "website": "https://chalupa.fi/"
        }
      },
      {
        "type": "node",
        "id": 4226632190,
        "lat": 60.1817136,
        "lon": 24.9544737,
        "tags": {
          "access:covid19": "no",
          "addr:city": "Helsinki",
          "addr:housenumber": "16",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "amenity": "fast_food",
          "cuisine": "baguette",
          "delivery:covid19": "no",
          "drive_through:covid19": "no",
          "name": "Daniel's Cafe",
          "opening_hours:covid19": "Mo-Fr 10:30-19:00; Sa 11:00-19:00",
          "takeaway:covid19": "yes",
          "website": "http://www.danielscafe.fi/"
        }
      },
      {
        "type": "node",
        "id": 4253223605,
        "lat": 60.1908043,
        "lon": 24.9112316,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00250",
          "addr:street": "Tukholmankatu",
          "amenity": "fast_food",
          "brand": "Burger King",
          "cuisine": "burger",
          "name": "Burger King",
          "opening_hours": "Mo-Th 09:00-23:00; Fr 09:00-04:00; Sa 10:00-04:00; Su 10:00-23:00",
          "website": "http://www.burgerking.fi/",
          "wheelchair": "yes",
          "wheelchair:description": "Esteetön sisäänkäynti on Tukholmankadulta, ohittaen hotellin respan. / Wheelchair accessible entrance is on Topeliuksenkatu, passing hotel Cumulus reception."
        }
      },
      {
        "type": "node",
        "id": 4320553089,
        "lat": 60.2114014,
        "lon": 25.0820748,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "30",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "fast_food",
          "cuisine": "juice",
          "level": "1",
          "name": "Jungle Juice",
          "phone": "+358 45 168 5118",
          "toilets:wheelchair": "no",
          "website": "https://www.junglejuicebar.com/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4323447189,
        "lat": 60.2119053,
        "lon": 25.0826245,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-7",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "fast_food",
          "branch": "Itäkeskus",
          "brand": "Burger King",
          "brand:wikidata": "Q177054",
          "brand:wikipedia": "en:Burger King",
          "cuisine": "burger",
          "email": "itis.burgerking@restel.fi",
          "level": "1",
          "name": "Burger King",
          "opening_hours": "Mo-Fr 10:00-21:00; Sa 10:00-20:00; Su 12:00-19:00",
          "operator": "Restel Fast Food Oy",
          "phone": "+358 20 770 1811",
          "takeaway": "yes",
          "website": "http://www.burgerking.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4324553593,
        "lat": 60.2097006,
        "lon": 25.0816345,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00930",
          "addr:street": "Hansasilta, Hansakuja",
          "amenity": "fast_food",
          "name": "Stadin Chili Kebab",
          "toilets:wheelchair": "no",
          "website": "https://eat.fi/fi/helsinki/stadin-chili-kebab-hansasilta",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4376947670,
        "lat": 60.1605682,
        "lon": 24.8813483,
        "tags": {
          "addr:city": "Helsinki",
          "addr:postcode": "00200",
          "amenity": "fast_food",
          "brand": "Kotipizza",
          "brand:wikidata": "Q1628625",
          "brand:wikipedia": "fi:Kotipizza",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "name": "Kotipizza",
          "smoking": "no",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 4377682992,
        "lat": 60.1691197,
        "lon": 24.9337454,
        "tags": {
          "amenity": "fast_food",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "-1",
          "name": "Fafa's Kampin keskus",
          "website": "http://www.fafas.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4397126778,
        "lat": 60.2145732,
        "lon": 25.0949633,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00910",
          "addr:street": "Puotilan metrokatu",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Pizza Kebab Puotilan Säde",
          "website": "https://pizza-online.fi/ravintolat/helsinki/puotilansade",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4451719892,
        "lat": 60.2105817,
        "lon": 25.0799198,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-7",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "fast_food",
          "cuisine": "middle_eastern",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "1",
          "name": "Fafa’s",
          "opening_hours": "Mo-Sa 10:30-21:00; Su 12:00-18:00",
          "website": "http://www.fafas.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4506604789,
        "lat": 60.2240085,
        "lon": 25.0732896,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00920",
          "addr:street": "Kivensilmänkuja",
          "amenity": "fast_food",
          "name": "Kotipizza Myllypuro",
          "website": "https://kotipizza.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4551950422,
        "lat": 60.2369148,
        "lon": 25.0841631,
        "tags": {
          "amenity": "fast_food",
          "contact:facebook": "https://www.facebook.com/pages/Tikke-Kebab/827022784065535",
          "cuisine": "kebab",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Tikke Kebab",
          "opening_hours": "Mo-Sa 10:30-20:00; Su 12:00-20:00"
        }
      },
      {
        "type": "node",
        "id": 4551956436,
        "lat": 60.2363704,
        "lon": 25.0846909,
        "tags": {
          "amenity": "fast_food",
          "brand": "Subway",
          "brand:wikidata": "Q244457",
          "brand:wikipedia": "en:Subway (restaurant)",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "name": "Subway",
          "operator": "Subway",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 4574417291,
        "lat": 60.2312309,
        "lon": 24.9339412,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00630",
          "addr:street": "Pakilantie",
          "addr:unit": "A",
          "amenity": "fast_food",
          "branch": "Maunula",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Subway",
          "opening_hours": "Mo-Fr 09:00-22:00; Sa 10:00-21:00; Su 12:00-21:00",
          "phone": "+358 50 597 0174",
          "takeaway": "yes",
          "website": "http://www.subway.fi/"
        }
      },
      {
        "type": "node",
        "id": 4574430689,
        "lat": 60.2295924,
        "lon": 24.9279355,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "16",
          "addr:postcode": "00630",
          "addr:street": "Metsäpurontie",
          "addr:unit": "A",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "delivery": "Mo-Th 10:00-21:30;Fr 10:00-22:30;Sa-Su 11:00-21:30",
          "diet:vegan": "no",
          "diet:vegetarian": "yes",
          "lunch": "Mo-Fr 10:00-14:00",
          "name": "Maunulan Pizza Kebab Palvelu",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-24:00; Sa 11:00-24:00; Su 11:00-22:00",
          "phone": "+358 9 754 6060",
          "takeaway": "yes",
          "website": "https://pizza-online.fi/ravintolat/helsinki/pizzakebabmaunula/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 4677731694,
        "lat": 60.2026723,
        "lon": 24.9680549,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Arabia",
          "addr:housenumber": "109-111",
          "addr:postcode": "00560",
          "addr:street": "Hämeentie",
          "amenity": "fast_food",
          "brand": "Kotipizza",
          "brand:wikidata": "Q1628625",
          "brand:wikipedia": "en:Kotipizza",
          "cuisine": "pizza",
          "delivery": "Mo-Su 10:30-20:30",
          "level": "1",
          "lunch": "Mo-Fr 11:00-14:00",
          "name": "Kotipizza",
          "opening_hours": "Mo-Su 10:30-21:00",
          "phone": "+358 50 435 0404",
          "takeaway": "yes",
          "website": "https://www.kotipizza.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4680078589,
        "lat": 60.2069025,
        "lon": 24.8790175,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "22",
          "addr:postcode": "00350",
          "addr:street": "Huopalahdentie",
          "amenity": "fast_food",
          "branch": "Munkkivuori",
          "cuisine": "pizza",
          "delivery": "no",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "lunch": "Mo-Fr 11:00-14:00",
          "name": "Kotipizza",
          "opening_hours": "Mo-Sa 11:00-21:00; Su 12:00-21:00",
          "phone": "+358 9 565 5800",
          "takeaway": "yes",
          "website": "https://www.kotipizza.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4689094130,
        "lat": 60.1629098,
        "lon": 24.9392112,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "27",
          "addr:postcode": "00120",
          "addr:street": "Fredrikinkatu",
          "amenity": "fast_food",
          "cuisine": "sushi",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Soma",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 12:00-21:00",
          "takeaway": "yes",
          "website": "http://www.ravintolasoma.fi/"
        }
      },
      {
        "type": "node",
        "id": 4690895189,
        "lat": 60.1684421,
        "lon": 24.9328838,
        "tags": {
          "addr:housenumber": "4-6",
          "addr:street": "Urho Kekkosen katu",
          "amenity": "fast_food",
          "name:en": "Cafe Rouge"
        }
      },
      {
        "type": "node",
        "id": 4692013480,
        "lat": 60.1646108,
        "lon": 24.9326472,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "36",
          "addr:postcode": "00120",
          "addr:street": "Albertinkatu",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "internet_access": "wlan",
          "name": "Pizza Service",
          "opening_hours": "Mo-Th 10:00-22:00; Fr-Sa 11:00-23:00; Su 11:00-22:00",
          "phone": "+3589644477"
        }
      },
      {
        "type": "node",
        "id": 4692325020,
        "lat": 60.1627915,
        "lon": 24.9398244,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "23",
          "addr:postcode": "00120",
          "addr:street": "Iso Roobertinkatu",
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Subway",
          "opening_hours": "Mo-Tu 9:00-23:00; We-Fr 9:00-05:00; Sa 10:00-05:00; Su 9:00-23:00",
          "takeaway": "yes",
          "website": "http://www.subway.fi/"
        }
      },
      {
        "type": "node",
        "id": 4693464162,
        "lat": 60.1693663,
        "lon": 24.9416958,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00100",
          "addr:street": "Keskuskatu",
          "amenity": "fast_food",
          "brand": "Fafa's",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Fafa's",
          "website": "http://www.strkitchen.fi/streetkitchen/street-cafe/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4714489589,
        "lat": 60.1701523,
        "lon": 24.9401954,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "10",
          "addr:postcode": "00100",
          "addr:street": "Kaivokatu",
          "amenity": "fast_food",
          "cuisine": "sushi",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "name": "Soma",
          "website": "http://ravintolasoma.fi/"
        }
      },
      {
        "type": "node",
        "id": 4718446523,
        "lat": 60.1714968,
        "lon": 24.9470639,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Subway",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4742825860,
        "lat": 60.1786523,
        "lon": 24.9493334,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "12",
          "addr:postcode": "00530",
          "addr:street": "Siltasaarenkatu",
          "amenity": "fast_food",
          "brand": "Fafa's",
          "diet:kosher": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Fafa's",
          "website": "http://fafas.fi/"
        }
      },
      {
        "type": "node",
        "id": 4747221578,
        "lat": 60.1685580,
        "lon": 24.9380145,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "29",
          "addr:postcode": "00100",
          "addr:street": "Yrjönkatu",
          "amenity": "fast_food",
          "cuisine": "mexican",
          "email": "suburritos@suburritos.fi",
          "level": "3",
          "lunch:buffet": "Mo-Fr 10:30-14:00",
          "name": "Suburritos",
          "opening_hours": "Mo-Th 11:00-21:00; Fr-Sa 11:00-22:00; Su 12:00-19:00",
          "phone": "+358 44 953 3241",
          "website": "http://www.suburritos.fi/"
        }
      },
      {
        "type": "node",
        "id": 4805516628,
        "lat": 60.1915147,
        "lon": 24.9109076,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "45",
          "addr:postcode": "00270",
          "addr:street": "Topeliuksenkatu",
          "amenity": "fast_food",
          "cuisine": "fast_food",
          "name": "Sibylla Shell Helsinki Tullinpuomi",
          "opening_hours": "24/7",
          "website": "https://www.st1.fi/huoltoasemat?sub=helsinki_tullinpuomi",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4805630427,
        "lat": 60.1934105,
        "lon": 25.0371739,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1 A",
          "addr:postcode": "00810",
          "addr:street": "Laivalahdenkatu",
          "amenity": "fast_food",
          "cuisine": "fast_food",
          "name": "Shell Sibylla Helsinki Herttoniemi",
          "opening_hours": "24/7",
          "website": "https://www.st1.fi/huoltoasemat?sub=shell_helsinki_herttoniemi"
        }
      },
      {
        "type": "node",
        "id": 4805668445,
        "lat": 60.2134413,
        "lon": 24.9424441,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1-3",
          "addr:postcode": "00610",
          "addr:street": "Vaakalinnuntie",
          "amenity": "fast_food",
          "cuisine": "fast_food",
          "name": "Sibylla Shell Helsinki Käpylä",
          "opening_hours": "24/7",
          "website": "https://st1.fi/huoltoasemat?sub=helsinki_kapyla",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4805702523,
        "lat": 60.2282327,
        "lon": 25.0647544,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00920",
          "addr:street": "Myllyrengintie",
          "amenity": "fast_food",
          "cuisine": "fast_food",
          "name": "Shell Sibylla Helsinki Myllypuro",
          "opening_hours": "24/7",
          "website": "https://www.st1.fi/huoltoasemat?sub=helsinki_myllypuro"
        }
      },
      {
        "type": "node",
        "id": 4805716928,
        "lat": 60.2102241,
        "lon": 25.0887921,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00930",
          "addr:street": "Visbynkatu",
          "amenity": "fast_food",
          "cuisine": "fast_food",
          "name": "Shell Sibylla Itäkeskus",
          "opening_hours": "24/7",
          "toilets:wheelchair": "yes",
          "website": "https://st1.fi/huoltoasemat?sub=helsinki_itakeskus",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4958329723,
        "lat": 60.1806631,
        "lon": 24.9536231,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "thai",
          "name:en": "BinCos Pop Up!"
        }
      },
      {
        "type": "node",
        "id": 5121341565,
        "lat": 60.1376628,
        "lon": 25.0095776,
        "tags": {
          "amenity": "fast_food",
          "name": "Bar and Seadogs"
        }
      },
      {
        "type": "node",
        "id": 5148062639,
        "lat": 60.1921974,
        "lon": 24.9095915,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "name": "Subway",
          "name:en": "SubWay",
          "name:ru": "СабВей",
          "opening_hours": "24/7"
        }
      },
      {
        "type": "node",
        "id": 5167569608,
        "lat": 60.2672956,
        "lon": 25.0139335,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "68",
          "addr:street": "Kotinummentie",
          "amenity": "fast_food",
          "name": "Omeri pizza kebab",
          "source": "survey",
          "url": "http://www.omeripizzakebab.fi/"
        }
      },
      {
        "type": "node",
        "id": 5214728456,
        "lat": 60.2093547,
        "lon": 25.0869351,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00930",
          "addr:street": "Kauppakartanonkatu",
          "amenity": "fast_food",
          "brand": "Fafa's",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "0",
          "name": "Fafa's",
          "website": "http://fafas.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 5214728457,
        "lat": 60.2093127,
        "lon": 25.0867684,
        "tags": {
          "amenity": "fast_food",
          "brand": "Pizza Hut",
          "cuisine": "pizza",
          "level": "0",
          "name": "Pizza Hut",
          "website": "https://www.pizzahut.fi/"
        }
      },
      {
        "type": "node",
        "id": 5214728458,
        "lat": 60.2092707,
        "lon": 25.0866016,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "vietnamese",
          "level": "0",
          "name": "Phở Nokis",
          "website": "https://nokis.fi"
        }
      },
      {
        "type": "node",
        "id": 5376562298,
        "lat": 60.1597002,
        "lon": 24.9185823,
        "tags": {
          "amenity": "fast_food",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Fafa's Jätkäsaari",
          "opening_hours": "Mo-Th 10:30-22:00; Fr-Sa 10:30-23:00; Su 11:00-22:00",
          "smoking": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 5528054925,
        "lat": 60.1942680,
        "lon": 24.9477717,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Subway"
        }
      },
      {
        "type": "node",
        "id": 5944074726,
        "lat": 60.2258345,
        "lon": 24.8944117,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00400",
          "addr:street": "Aino Acktén tie",
          "amenity": "fast_food",
          "cuisine": "pizza;kebab;chicken;burger;falafel;wings",
          "delivery": "yes",
          "name": "Pizza House Pohjois-Haaga",
          "opening_hours": "Mo-Fr 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "phone": "+358 9 4289 3757",
          "takeaway": "yes",
          "website": "https://pizzahousepohjoishaaga.fi/"
        }
      },
      {
        "type": "node",
        "id": 6014032808,
        "lat": 60.2418934,
        "lon": 24.9760088,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00720",
          "addr:street": "Isonpellontie",
          "amenity": "fast_food",
          "brand": "Burger King",
          "brand:wikidata": "Q177054",
          "brand:wikipedia": "en:Burger King",
          "cuisine": "burger",
          "diet:vegan": "no",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "name": "Burger King",
          "opening_hours": "Mo-Su 10:00-22:00",
          "operator": "Burger King",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 6060937277,
        "lat": 60.1871779,
        "lon": 24.9785186,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "fast_food",
          "cuisine": "juice",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "2",
          "name": "Jungle Juice Bar",
          "opening_hours": "Mo-Fr 07:30-21:00; Sa 09:00-18:00; Su 12:00-18:00",
          "phone": "+358 50 463 8583",
          "website": "https://www.junglejuicebar.com/"
        }
      },
      {
        "type": "node",
        "id": 6060938311,
        "lat": 60.1871445,
        "lon": 24.9792593,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "fast_food",
          "email": "helsinki@fitfitbar.com",
          "level": "-1",
          "name": "FitFit Bar",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa 09:00-18:00; Su 12:00-18:00",
          "phone": "+358 41 474 2630",
          "website": "https://www.fitfitbar.com/"
        }
      },
      {
        "type": "node",
        "id": 6060938313,
        "lat": 60.1871554,
        "lon": 24.9791556,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "fast_food",
          "cuisine": "smoothie",
          "email": "info@skyr.fi",
          "level": "-1",
          "name": "Skyr",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa 09:00-18:00; Su 12:00-18:00",
          "phone": "+358 50 470 0981",
          "website": "http://www.skyr.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938318,
        "lat": 60.1870360,
        "lon": 24.9791229,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "fast_food",
          "cuisine": "salad",
          "level": "-1",
          "name": "Mr. Fruit",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa 09:00-18:00; Su 12:00-18:00",
          "phone": "+358 10 505 5691",
          "website": "https://www.mrfruit.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938324,
        "lat": 60.1867401,
        "lon": 24.9794160,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "fast_food",
          "brand": "Fafa's",
          "cuisine": "middle_eastern",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "info@fafas.fi",
          "level": "-1",
          "name": "Fafa's",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-18:00; Su 12:00-18:00",
          "phone": "+358 44 231 3288",
          "website": "http://www.fafas.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938325,
        "lat": 60.1868052,
        "lon": 24.9794686,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "fast_food",
          "brand": "Subway",
          "brand:wikidata": "Q244457",
          "brand:wikipedia": "en:Subway (restaurant)",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "hki.redi@subway.fi",
          "level": "-1",
          "name": "Subway",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa 09:00-18:00; Su 12:00-18:00",
          "phone": "+358 50 586 9957",
          "takeaway": "yes",
          "website": "http://www.subway.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938328,
        "lat": 60.1868595,
        "lon": 24.9797654,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "fast_food",
          "brand": "Kotipizza",
          "brand:wikidata": "Q1628625",
          "brand:wikipedia": "en:Kotipizza",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "kotipizzaredi@gmail.com",
          "level": "-1",
          "name": "Kotipizza",
          "opening_hours": "Mo-Fr 10:00-21:00; Sa 11:00-19:00; Su 12:00-18:00",
          "phone": "+358 50 470 2555",
          "takeaway": "yes",
          "website": "https://www.kotipizza.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938329,
        "lat": 60.1869266,
        "lon": 24.9798611,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "fast_food",
          "cuisine": "mexican",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "chalupa.redi@chalupa.fi",
          "name": "Chalupa",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 11:00-18:00; Su 12:00-18:00",
          "phone": "+358 50 542 4829",
          "website": "http://www.chalupa.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938332,
        "lat": 60.1870782,
        "lon": 24.9800520,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "fast_food",
          "cuisine": "kebab",
          "email": "h.yilmaz07@yahoo.com",
          "level": "-1",
          "name": "Stadin Kebab",
          "opening_hours": "Mo-Su 10:00-21:00",
          "phone": "+358 45 264 9507",
          "website": "http://www.stadinkebab.fi/"
        }
      },
      {
        "type": "node",
        "id": 6080795886,
        "lat": 60.2371025,
        "lon": 24.8913955,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Kaari",
          "addr:housenumber": "1",
          "addr:postcode": "00420",
          "addr:street": "Kantelettarentie",
          "amenity": "fast_food",
          "branch": "Kannelmäki",
          "brand": "Subway",
          "brand:wikidata": "Q244457",
          "brand:wikipedia": "en:Subway (restaurant)",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "level": "1",
          "name": "Subway",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa 09:00-20:00; Su 11:00-19:00",
          "phone": "+358 50 321 5173",
          "takeaway": "yes",
          "website": "http://www.subway.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6103686307,
        "lat": 60.2120606,
        "lon": 25.0835434,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-5",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "fast_food",
          "brand": "Taco Bell",
          "brand:wikidata": "Q752941",
          "brand:wikipedia": "en:Taco Bell",
          "cuisine": "tex-mex",
          "level": "2",
          "name": "Taco Bell",
          "opening_hours": "Mo-Fr 10:00-21:00; Sa 10:00-22:00; Su 11:00-20:00",
          "phone": "+358 40 653 0536",
          "takeaway": "yes",
          "website": "https://www.tacobell.fi/"
        }
      },
      {
        "type": "node",
        "id": 6103686310,
        "lat": 60.2128670,
        "lon": 25.0841877,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-5",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "fast_food",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "1",
          "name": "McDonald's",
          "opening_hours": "Mo-Th 08:00-21:00; Fr-Sa 08:00-23:00; Su 11:00-21:00",
          "phone": "+358 40 717 0338",
          "takeaway": "yes",
          "website": "http://www.mcdonalds.fi/"
        }
      },
      {
        "type": "node",
        "id": 6139262259,
        "lat": 60.1690676,
        "lon": 24.9384185,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "14-20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "0",
          "name": "Subway",
          "opening_hours": "Mo-Fr 10:00-20:00; Sa 10:00-19:00; Su 12:00-18:00",
          "phone": "+358 50 400 6300",
          "website": "http://www.subway.fi/fi/ravintolat/helsinki/helsinki-forum/"
        }
      },
      {
        "type": "node",
        "id": 6139262260,
        "lat": 60.1694103,
        "lon": 24.9378096,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "email": "stadinpiste@gmail.com",
          "level": "1",
          "name": "Stadin Piste",
          "opening_hours": "Mo-Tu 10:00-24:00; We 10:00-05:00; Th 10:00-24:00; Fr-Sa 10:00-05:00; Su 10:00-24:00",
          "phone": "+358 45 619 6272"
        }
      },
      {
        "type": "node",
        "id": 6139262589,
        "lat": 60.1690418,
        "lon": 24.9378493,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "14-20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "cuisine": "sandwich",
          "email": "info@kippohelsinki.com",
          "level": "3",
          "name": "Kippo",
          "opening_hours": "Mo-Fr 08:00-20:00; Sa 11:00-18:00; Su 12:00-18:00",
          "phone": "+358 44 329 2324",
          "website": "http://www.kippohelsinki.com/"
        }
      },
      {
        "type": "node",
        "id": 6139262596,
        "lat": 60.1689250,
        "lon": 24.9378092,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "14-20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "cuisine": "juice",
          "level": "2",
          "name": "Jungle Juice Bar",
          "opening_hours": "Mo-Fr 08:00-21:00; Sa 09:00-18:00; Su 11:00-18:00",
          "phone": "+358 50 433 6130",
          "website": "https://www.junglejuicebar.com/"
        }
      },
      {
        "type": "node",
        "id": 6139262597,
        "lat": 60.1693760,
        "lon": 24.9383381,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "14-20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "cuisine": "juice",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "0",
          "name": "Jungle Juice Bar",
          "opening_hours": "Mo-Fr 08:00-21:00; Sa 08:00-19:00; Su 11:30-18:00",
          "phone": "+358 50 525 4451",
          "website": "https://www.junglejuicebar.com/"
        }
      },
      {
        "type": "node",
        "id": 6139262616,
        "lat": 60.1691080,
        "lon": 24.9378532,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "cuisine": "mediterranean",
          "email": "mudinoy@luukku.com",
          "level": "3",
          "name": "Foody",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 10:30-18:00; Su 12:00-18:00",
          "phone": "+358 9 685 7721"
        }
      },
      {
        "type": "node",
        "id": 6139262623,
        "lat": 60.1688217,
        "lon": 24.9384475,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "18-20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "cuisine": "kebab",
          "level": "0",
          "name": "Eerikin Pippuri",
          "opening_hours": "Mo-Su 10:00-21:00",
          "phone": "+358 50 462 9798",
          "website": "http://www.eerikinpippuri.fi/forum/"
        }
      },
      {
        "type": "node",
        "id": 6170941885,
        "lat": 60.1680836,
        "lon": 24.9452414,
        "tags": {
          "amenity": "fast_food",
          "brand": "Picnic",
          "drive_through": "no",
          "name": "Picnic"
        }
      },
      {
        "type": "node",
        "id": 6177993369,
        "lat": 60.1690874,
        "lon": 24.9332580,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00100",
          "addr:street": "Urho Kekkosen katu",
          "alt_name": "Bun 2 Bun Kamppi",
          "amenity": "fast_food",
          "cuisine": "burger",
          "delivery": "yes",
          "diet:vegan": "only",
          "diet:vegetarian": "only",
          "name": "Bun2Bun Kamppi",
          "opening_hours": "Mo-Fr 10:00-21:00; Sa 10:00-22:00; Su 12:00-19:00",
          "outdoor_seating": "no",
          "short_name": "Bun2Bun",
          "smoking": "no",
          "takeaway": "yes",
          "website": "https://www.bun2bun.fi/bun2bun-kamppi"
        }
      },
      {
        "type": "node",
        "id": 6214330355,
        "lat": 60.2075202,
        "lon": 24.9465443,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00610",
          "addr:street": "Vähänkyröntie",
          "amenity": "fast_food",
          "brand": "Burger King",
          "brand:wikidata": "Q177054",
          "brand:wikipedia": "en:Burger King",
          "cuisine": "burger",
          "delivery": "no",
          "drive_through": "yes",
          "name": "Burger King",
          "opening_hours": "Mo-Fr 10:00-24:00; Sa 24h; Su 05:00-22:00",
          "operator": "Burger King Suomi",
          "takeaway": "yes",
          "website": "http://www.burgerking.fi/"
        }
      },
      {
        "type": "node",
        "id": 6301483255,
        "lat": 60.2240225,
        "lon": 24.8608434,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Pizza Benitto",
          "opening_hours": "Mo-Su 10:00-24:00; Mo-Fr 00:00-02:00; Sa-Su 00:00-05:00",
          "website": "https://pizzabenitto.fi/"
        }
      },
      {
        "type": "node",
        "id": 6326867734,
        "lat": 60.1701417,
        "lon": 24.9414780,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "level": "2",
          "name": "Social Burgerjoint",
          "opening_hours": "Mo-Th 11:00-21:00; Fr-Sa 11:00-22:00; Su 12:00-18:00",
          "outdoor_seating": "no"
        }
      },
      {
        "type": "node",
        "id": 6326876182,
        "lat": 60.1700153,
        "lon": 24.9418543,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "salad",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "level": "2",
          "name": "pupu",
          "opening_hours": "Mo-Fr 10:00-19:00; Sa 12:00-17:00",
          "website": "https://pupu.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6328867287,
        "lat": 60.1698997,
        "lon": 24.9417144,
        "tags": {
          "amenity": "fast_food",
          "level": "1",
          "name": "jungle juice bar"
        }
      },
      {
        "type": "node",
        "id": 6336017638,
        "lat": 60.2344161,
        "lon": 24.9664973,
        "tags": {
          "amenity": "fast_food",
          "brand": "Subway",
          "brand:wikidata": "Q244457",
          "brand:wikipedia": "en:Subway (restaurant)",
          "cuisine": "sandwich",
          "drive_through": "no",
          "name": "Subway",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 6466638987,
        "lat": 60.1693913,
        "lon": 24.9336412,
        "tags": {
          "amenity": "fast_food",
          "name:en": "Street Gastro"
        }
      },
      {
        "type": "node",
        "id": 6476225334,
        "lat": 60.2164735,
        "lon": 24.9549601,
        "tags": {
          "amenity": "fast_food",
          "brand": "Kotipizza",
          "brand:wikidata": "Q1628625",
          "brand:wikipedia": "en:Kotipizza",
          "cuisine": "pizza",
          "name": "Kotipizza"
        }
      },
      {
        "type": "node",
        "id": 6478116588,
        "lat": 60.1793256,
        "lon": 25.0520290,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00840",
          "addr:street": "Yliskylän puistokatu",
          "amenity": "fast_food",
          "cuisine": "pizza;fast_food;italian",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "0",
          "name": "Kotipizza Helsinki Laajasalo",
          "opening_hours": "Mo-Th 10:30-21:00; Fr 10:30-22:00; Sa 11:00-22:00; Su 11:00-21:00",
          "outdoor_seating": "no",
          "phone": "+358504642977",
          "smoking": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6548825294,
        "lat": 60.1680536,
        "lon": 24.9355076,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "31-33",
          "addr:postcode": "00100",
          "addr:street": "Annankatu",
          "amenity": "fast_food",
          "drive_through": "no",
          "facebook": "https://www.facebook.com/AnnanPippuri-376566036291626/",
          "name": "Annan Pippuri",
          "opening_date": "2019-06-13",
          "opening_hours": "Mo-Th 10-02; Fr-Sa 10-05; Su 11-02",
          "phone": "+358504659566"
        }
      },
      {
        "type": "node",
        "id": 6552390693,
        "lat": 60.1691774,
        "lon": 24.9305632,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "65",
          "addr:postcode": "00100",
          "addr:street": "Fredrikinkatu",
          "amenity": "fast_food",
          "brand": "Taco Bell",
          "brand:wikidata": "Q752941",
          "brand:wikipedia": "en:Taco Bell",
          "cuisine": "tex-mex",
          "drive_through": "no",
          "name": "Taco Bell",
          "opening_hours": "Su-Tu 10-24; We-Sa 10-05",
          "operator": "Restel",
          "phone": "+358 40 483 7674",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 6594034569,
        "lat": 60.1833345,
        "lon": 24.9623008,
        "tags": {
          "amenity": "fast_food",
          "name": "Subway"
        }
      },
      {
        "type": "node",
        "id": 6784804539,
        "lat": 60.1875001,
        "lon": 24.9559310,
        "tags": {
          "amenity": "fast_food",
          "name": "Capris",
          "opening_hours": "Mo-Th 11:00-24:00, Fr,Sa 11:00-05:00, Su 11:00-24:00"
        }
      },
      {
        "type": "node",
        "id": 6791974363,
        "lat": 60.2488963,
        "lon": 25.0088559,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Pizzakuningas",
          "website": "https://pizzakuningas.fi/malmi/"
        }
      },
      {
        "type": "node",
        "id": 6849307588,
        "lat": 60.1792433,
        "lon": 25.0520754,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00840",
          "addr:street": "Yliskylän puistokatu",
          "amenity": "fast_food",
          "check_date:opening_hours": "2021-07-16",
          "cuisine": "fast_food;bread;sandwich;salad",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "no",
          "level": "0",
          "name": "Subway Helsinki Laajasalo",
          "opening_hours": "Mo-Sa 09:00-21:00; Su 10:00-20:00",
          "phone": "+358105049492",
          "website": "https://www.subway.fi/fi/ravintolat/helsinki/helsinki-laajasalo",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6936787994,
        "lat": 60.1990391,
        "lon": 24.9336811,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11",
          "addr:postcode": "00520",
          "addr:street": "Veturitie",
          "amenity": "fast_food",
          "brand": "Pizzarium",
          "cuisine": "pizza",
          "email": "tripla@pizzarium.fi",
          "layer": "2",
          "name": "Pizzarium",
          "opening_hours:covid19": "off",
          "phone": "+358 503288423",
          "website": "https://www.pizzarium.fi/tripla/"
        }
      },
      {
        "type": "node",
        "id": 6938652927,
        "lat": 60.1985493,
        "lon": 24.9330558,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11",
          "addr:postcode": "00520",
          "addr:street": "Veturitie",
          "addr:unit": "A",
          "amenity": "fast_food",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "level": "3",
          "name": "Hesburger Pasila",
          "operator": "Pasilan Burger Oy",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 6987611434,
        "lat": 60.1983228,
        "lon": 24.9319903,
        "tags": {
          "amenity": "fast_food",
          "level": "2",
          "name": "Kuplavohveli baari"
        }
      },
      {
        "type": "node",
        "id": 7054844293,
        "lat": 60.1989445,
        "lon": 24.9337377,
        "tags": {
          "amenity": "fast_food",
          "brand": "Subway",
          "brand:wikidata": "Q244457",
          "brand:wikipedia": "en:Subway (restaurant)",
          "cuisine": "sandwich",
          "name": "Subway",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 7222041371,
        "lat": 60.1690944,
        "lon": 24.9332163,
        "tags": {
          "amenity": "fast_food",
          "name": "Fisu&Ranet"
        }
      },
      {
        "type": "node",
        "id": 7222041373,
        "lat": 60.1690662,
        "lon": 24.9332771,
        "tags": {
          "amenity": "fast_food",
          "name": "Bali Brunch"
        }
      },
      {
        "type": "node",
        "id": 7222041374,
        "lat": 60.1690418,
        "lon": 24.9333025,
        "tags": {
          "amenity": "fast_food",
          "name": "Boneless"
        }
      },
      {
        "type": "node",
        "id": 7222041375,
        "lat": 60.1690200,
        "lon": 24.9332290,
        "tags": {
          "amenity": "fast_food",
          "name": "Saint Tortillas"
        }
      },
      {
        "type": "node",
        "id": 7222041376,
        "lat": 60.1690380,
        "lon": 24.9331665,
        "tags": {
          "amenity": "fast_food",
          "name": "Mad Wok"
        }
      },
      {
        "type": "node",
        "id": 7353761436,
        "lat": 60.1884933,
        "lon": 24.9579717,
        "tags": {
          "alt_name": "Bun 2 Bun",
          "amenity": "fast_food",
          "cuisine": "burger",
          "diet:vegan": "only",
          "diet:vegetarian": "only",
          "lunch": "yes",
          "name": "Bun2Bun Kallio",
          "opening_hours": "Mo-Fr 11-22; Sa 11-23; Su 12-20",
          "phone": "+358 50 539 9466",
          "short_name": "Bun2Bun",
          "takeaway": "yes",
          "website": "https://bun2bunburgers.com/"
        }
      },
      {
        "type": "node",
        "id": 7440688294,
        "lat": 60.1715454,
        "lon": 24.9465369,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "amenity": "fast_food",
          "cuisine": "turkish",
          "floor": "-1",
          "lunch": "yes",
          "name": "Kampin Pippuri",
          "note": "Tämä siis Kampin Pippurin sivutoimipiste Kaisaniemessä/Kluuvissa, katsotaan miten pärjää koronatilanteesta!",
          "opening_hours:covid19": "off",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 7463095717,
        "lat": 60.1941787,
        "lon": 25.0333826,
        "tags": {
          "amenity": "fast_food",
          "brand": "Kotipizza",
          "brand:wikidata": "Q1628625",
          "brand:wikipedia": "en:Kotipizza",
          "cuisine": "pizza",
          "name": "Kotipizza Herttoniemi",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 7463777118,
        "lat": 60.1901824,
        "lon": 24.9719998,
        "tags": {
          "amenity": "fast_food",
          "cuisine": "mexican",
          "delivery": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "lunch": "yes",
          "name": "Taqueria Lopez y Lopez",
          "opening_hours:covid19": "Tu-Fr 11:00-21:00; Sa 12:00-21:00",
          "outdoor_seating": "patio",
          "short_name": "Lopez",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 7599788429,
        "lat": 60.1631544,
        "lon": 24.9150645,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "14",
          "addr:postcode": "00180",
          "addr:street": "Itämerenkatu",
          "amenity": "fast_food",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "cuisine": "burger",
          "name": "Hesburger",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 7658237514,
        "lat": 60.2612360,
        "lon": 25.0761892,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00770",
          "addr:street": "Jakomäenkuja",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "email": "pizzeria@jakos.fi",
          "facebook": "https://www.facebook.com/JakosPizzeria/",
          "name": "Jakos Ravintola & Pizzeria",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "phone": "+358 400 176 726",
          "website": "https://www.jakos.fi/"
        }
      },
      {
        "type": "node",
        "id": 7658237515,
        "lat": 60.2643790,
        "lon": 25.0848049,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00770",
          "addr:street": "Kalteentie",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "facebook": "https://www.facebook.com/Pizza-veljet-109379470411158/",
          "name": "Pizza Veljet",
          "opening_hours": "11:00-22:00; Fr,Sa 11:00-05:00",
          "phone": "+358 44 022 0061",
          "website": "https://pizzaveljet.fi/"
        }
      },
      {
        "type": "node",
        "id": 8808860757,
        "lat": 60.2412701,
        "lon": 24.8844841,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "15",
          "addr:postcode": "00420",
          "addr:street": "Kantelettarentie",
          "amenity": "fast_food",
          "cuisine": "pizza;kebab;falafel;chicken;salad;steak;schnitzel;pasta;burger",
          "delivery": "yes",
          "drive_through": "no",
          "name": "Golden Pizza Kebab",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "phone": "+358 9 440 450",
          "takeaway": "yes",
          "website": "https://www.foodora.fi/restaurant/s9us/golden-pizza-kebab-kannelmaki"
        }
      },
      {
        "type": "node",
        "id": 8813067606,
        "lat": 60.2149346,
        "lon": 24.8757186,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "14",
          "addr:postcode": "00380",
          "addr:street": "Pitäjänmäentie",
          "amenity": "fast_food",
          "brand": "Subway",
          "brand:wikidata": "Q244457",
          "brand:wikipedia": "en:Subway (restaurant)",
          "cuisine": "sandwich",
          "delivery": "yes",
          "drive_through": "no",
          "name": "Subway",
          "opening_hours": "Mo-Fr 08:00-23:00; Sa 10:00-23:00; Su 11:00-23:00",
          "phone": "+358 45 1861680",
          "takeaway": "yes",
          "website": "https://www.subway.fi/fi/ravintolat/helsinki/helsinki-pitajanmaki"
        }
      },
      {
        "type": "node",
        "id": 8912174112,
        "lat": 60.2205608,
        "lon": 24.9405875,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00620",
          "addr:street": "Asesepänkuja",
          "amenity": "fast_food",
          "brand": "Kotipizza",
          "brand:wikidata": "Q1628625",
          "brand:wikipedia": "en:Kotipizza",
          "cuisine": "pizza",
          "name": "Kotipizza",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 8997720128,
        "lat": 60.2397045,
        "lon": 25.1053929,
        "tags": {
          "addr:housenumber": "3",
          "addr:street": "Varhelantie",
          "amenity": "fast_food",
          "cuisine": "pizza",
          "name": "Town's Pizza"
        }
      },
      {
        "type": "way",
        "id": 14463247,
        "center": {
          "lat": 60.1942351,
          "lon": 25.0377459
        },
        "nodes": [
          141922595,
          141922596,
          141922597,
          141922598,
          1901391970,
          1901391969,
          141922595
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00880",
          "addr:street": "Laivalahdenkatu",
          "amenity": "fast_food",
          "branch": "Herttoniemi",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "building": "yes",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "name": "McDonald's",
          "opening_hours": "24/7",
          "operator": "Profira Oy",
          "phone": "+358 40 717 0324",
          "takeaway": "yes",
          "website": "https://www.mcdonalds.fi/"
        }
      },
      {
        "type": "way",
        "id": 18502317,
        "center": {
          "lat": 60.2339772,
          "lon": 25.0805757
        },
        "nodes": [
          190881677,
          190881679,
          1411965847,
          1411966005,
          1411966000,
          190881681,
          190881682,
          190881677
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00940",
          "addr:street": "Lirokuja",
          "amenity": "fast_food",
          "branch": "Kontula",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "building": "yes",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "email": "kontula@hesburger.fi",
          "name": "Hesburger",
          "opening_hours": "Mo-Sa 10:00-23:00; Su 11:00-23:00",
          "operator": "Kontulan Burger Oy",
          "outdoor_seating": "yes",
          "phone": "+358 44 480 9243",
          "source": "Hesburger import",
          "takeaway": "yes"
        }
      },
      {
        "type": "way",
        "id": 23229457,
        "center": {
          "lat": 60.1900433,
          "lon": 24.9173879
        },
        "nodes": [
          251315387,
          251315388,
          251315389,
          913297292,
          251315393,
          251315394,
          251315386,
          251315387
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "53",
          "addr:postcode": "00250",
          "addr:street": "Mannerheimintie",
          "amenity": "fast_food",
          "branch": "Töölö",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "building": "yes",
          "building:levels": "2",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "name": "McDonald's",
          "opening_hours": "24/7",
          "operator": "SJK Ravintolat Oy",
          "phone": "+358 40 717 0571",
          "roof:shape": "flat",
          "takeaway": "yes",
          "website": "https://www.mcdonalds.fi/"
        }
      },
      {
        "type": "way",
        "id": 24440909,
        "center": {
          "lat": 60.2428903,
          "lon": 24.9780613
        },
        "nodes": [
          265634281,
          7638044712,
          7638044711,
          7638044710,
          7638044709,
          564198888,
          265634282,
          7638044707,
          7638044708,
          311947834,
          311947836,
          7638044702,
          311947838,
          7638044703,
          7638044701,
          311947837,
          7638044700,
          265634283,
          311947835,
          265634284,
          7638044704,
          7638044705,
          7638044706,
          564198865,
          7638044699,
          7638044698,
          7638044697,
          265634285,
          265634281
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "55",
          "addr:postcode": "00780",
          "addr:street": "Pukinmäenkaari",
          "amenity": "fast_food",
          "branch": "Pukinmäki",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "building": "retail",
          "building:levels": "2",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "name": "McDonald's",
          "opening_hours": "24/7",
          "operator": "Carnis Oy",
          "outdoor_seating": "yes",
          "phone": "+358 40 848 2902",
          "roof:shape": "flat",
          "takeaway": "yes",
          "website": "https://www.mcdonalds.fi/"
        }
      },
      {
        "type": "way",
        "id": 24550726,
        "center": {
          "lat": 60.2834893,
          "lon": 25.0282374
        },
        "nodes": [
          266935607,
          543376535,
          543376537,
          543376538,
          266935607
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00750",
          "addr:street": "Aamuruskontie",
          "amenity": "fast_food",
          "branch": "Ala-Tikkurila",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "building": "kiosk",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "name": "McDonald's",
          "opening_hours": "24/7",
          "operator": "KSJ Ravintolat Oy",
          "phone": "+358 40 717 0812",
          "takeaway": "yes",
          "website": "https://www.mcdonalds.fi"
        }
      },
      {
        "type": "way",
        "id": 27151678,
        "center": {
          "lat": 60.2020359,
          "lon": 24.8813887
        },
        "nodes": [
          297903766,
          1464570575,
          1464570574,
          297903767,
          1464570622,
          1464570621,
          1464570619,
          1464570618,
          1464570617,
          1464570616,
          1464570615,
          1464570610,
          297903768,
          1464570572,
          1464570571,
          297903769,
          1464570566,
          1464570562,
          1464570564,
          1464570563,
          1464570568,
          1464570567,
          1464570569,
          1464570573,
          297903766
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00330",
          "addr:street": "Tietokuja",
          "amenity": "fast_food",
          "branch": "Munkkiniemi",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "building": "yes",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "email": "munkkiniemi@hesburger.fi",
          "name": "Hesburger",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-24:00; Sa 10:30-24:00; Su 11:00-23:00",
          "opening_hours:covid19": "same",
          "operator": "Tietokujan Burger Oy",
          "phone": "+358 44 480 9247",
          "takeaway": "yes",
          "takeaway:covid19": "only",
          "website": "https://www.hesburger.fi/"
        }
      },
      {
        "type": "way",
        "id": 28867876,
        "center": {
          "lat": 60.2286299,
          "lon": 24.9621698
        },
        "nodes": [
          317353296,
          317353264,
          317353297,
          317353298,
          1836358730,
          1836358728,
          1836358729,
          1836358735,
          1836358732,
          1836358733,
          1836358734,
          1836358739,
          1836358737,
          1836358738,
          1836358740,
          317353301,
          317353296
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "29",
          "addr:postcode": "00640",
          "addr:street": "Kylänvanhimmantie",
          "amenity": "fast_food",
          "building": "yes",
          "cuisine": "burger",
          "diet:vegetarian": "no",
          "name": "99 Burgers",
          "opening_hours": "Mo-Th 10:00-02:00; Fr 10:00-04:00; Sa 14:00-04:00; Su 14:00-24:00",
          "wheelchair": "yes"
        }
      },
      {
        "type": "way",
        "id": 32544048,
        "center": {
          "lat": 60.2070112,
          "lon": 24.9461645
        },
        "nodes": [
          365979371,
          365979384,
          365979389,
          365979373,
          365979380,
          365979375,
          365979371
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00610",
          "addr:street": "Vähänkyröntie",
          "amenity": "fast_food",
          "branch": "Käpylä",
          "brand": "Hesburger",
          "building": "yes",
          "building:levels": "1",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "email": "kapyla@hesburger.fi",
          "name": "Hesburger",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "operator": "Käpylän Burger Oy",
          "phone": "+358 44 480 9240",
          "roof:shape": "flat",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/"
        }
      },
      {
        "type": "way",
        "id": 44508014,
        "center": {
          "lat": 60.2056200,
          "lon": 25.1351708
        },
        "nodes": [
          565490556,
          565490557,
          565490559,
          565490558,
          565490556
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1 A",
          "addr:postcode": "00980",
          "addr:street": "Kaivonkatsojantie",
          "amenity": "fast_food",
          "branch": "Vuosaari",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "building": "yes",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "name": "McDonald's",
          "opening_hours": "24/7",
          "operator": "Venido Oy",
          "takeaway": "yes",
          "toilets:wheelchair": "yes",
          "website": "https://www.mcdonalds.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "way",
        "id": 72570020,
        "center": {
          "lat": 60.2410598,
          "lon": 24.9982530
        },
        "nodes": [
          861354644,
          7919844919,
          7919764768,
          7919764765,
          7919764766,
          7919764767,
          7919844916,
          861354672,
          7919764771,
          7919764770,
          7919764769,
          7919764772,
          861354671,
          861354632,
          7919764775,
          7919764774,
          7919764761,
          7919764773,
          7919764776,
          861354644
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00720",
          "addr:street": "Rapakivenkaari",
          "amenity": "fast_food",
          "branch": "Pukinmäki",
          "brand": "Hesburger",
          "building": "yes",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "email": "pukinmaki@hesburger.fi",
          "name": "Hesburger",
          "opening_hours": "Mo-Th 09:00-23:00; Fr 09:00-24:00; Sa 10:00-24:00; Su 10:00-23:00",
          "operator": "Keravan Burger Oy",
          "phone": "+358 44 480 9249",
          "takeaway": "yes"
        }
      },
      {
        "type": "way",
        "id": 91640468,
        "center": {
          "lat": 60.1643316,
          "lon": 24.9066479
        },
        "nodes": [
          1064667727,
          1064667731,
          268731121,
          1064667729,
          268731122,
          1064667725,
          1064667727
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00180",
          "addr:street": "Porkkalankatu",
          "amenity": "fast_food",
          "branch": "Ruoholahti",
          "brand": "Hesburger",
          "building": "yes",
          "cuisine": "burger",
          "date": "2008-08-29",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "email": "porkkalankatu@hesburger.fi",
          "name": "Hesburger",
          "opening_hours": "Mo-Fr 10:00-22:00; Sa-Su 11:00-21:00",
          "operator": "Ruoholahden Burger Oy",
          "phone": "+358 44 480 9251",
          "source": "Hesburger import",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/"
        }
      },
      {
        "type": "way",
        "id": 128106562,
        "center": {
          "lat": 60.2187409,
          "lon": 25.1445071
        },
        "nodes": [
          275266995,
          275266990,
          1416354757,
          1416354747,
          275266995
        ],
        "tags": {
          "amenity": "fast_food",
          "cuisine": "pizza;kebab;indian",
          "name": "Vuosaaren Kellari",
          "phone": "09-42891420",
          "website": "http://vuosaarenkellari.fi/"
        }
      },
      {
        "type": "way",
        "id": 130188144,
        "center": {
          "lat": 60.1903959,
          "lon": 24.9562574
        },
        "nodes": [
          1434868537,
          1434868528,
          1434868526,
          1434868533,
          1434868535,
          1434868537
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00500",
          "addr:street": "Teollisuuskatu",
          "amenity": "fast_food",
          "branch": "Vallila",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "building": "yes",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "name": "McDonald's",
          "opening_hours": "24/7",
          "operator": "Profira Oy",
          "phone": "+358 40 778 5101",
          "takeaway": "yes",
          "website": "https://www.mcdonalds.fi/"
        }
      },
      {
        "type": "way",
        "id": 140973023,
        "center": {
          "lat": 60.2514695,
          "lon": 25.1726406
        },
        "nodes": [
          1543214839,
          1543214844,
          1543214836,
          1543214841,
          1543214827,
          1543214799,
          1543214832,
          1543214819,
          1543214823,
          1543214816,
          1543214839
        ],
        "tags": {
          "amenity": "fast_food",
          "building": "yes",
          "name": "Pizzeria The Pit stop"
        }
      },
      {
        "type": "way",
        "id": 240836955,
        "center": {
          "lat": 60.1663323,
          "lon": 24.9308015
        },
        "nodes": [
          2485284103,
          2485284100,
          2485284098,
          2485284102,
          2485284103
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00180",
          "addr:street": "Lapin­lah­den­ka­tu",
          "amenity": "fast_food",
          "building": "yes",
          "cuisine": "finnish",
          "drive_through": "no",
          "email": "info@kekrifinnishstreetfood.fi",
          "ice_cream": "yes",
          "lippakioski": "yes",
          "name": "Kekri",
          "opening_hours": "Tu-Su 08-22",
          "phone": "+358 40 072 2181",
          "takeaway": "yes",
          "website": "https://kekrifinnishstreetfood.fi/"
        }
      },
      {
        "type": "way",
        "id": 244672504,
        "center": {
          "lat": 60.1934447,
          "lon": 24.9784026
        },
        "nodes": [
          2519653918,
          2519653916,
          2519653915,
          2519653917,
          2519653918
        ],
        "tags": {
          "amenity": "fast_food",
          "building": "yes",
          "cuisine": "burger",
          "drive_through": "yes",
          "name": "Hampuris"
        }
      },
      {
        "type": "way",
        "id": 289842055,
        "center": {
          "lat": 60.2204608,
          "lon": 24.9353676
        },
        "nodes": [
          285900473,
          5600376446,
          2933858205,
          2933858212,
          2933858215,
          5600376449,
          5600376448,
          5600376447,
          5600376450,
          285900473
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "20",
          "addr:postcode": "00620",
          "addr:street": "Niittylänpolku",
          "amenity": "fast_food",
          "building": "yes",
          "cuisine": "pizza",
          "delivery": "Mo-Th 10:00-21:30;Fr 10:00-23:30;Sa-Su 10:00-21:30",
          "name": "Milano Grilli",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-23:30; Sa-Su 10:00-22:00",
          "phone": "+358 50 300 5020",
          "takeaway": "yes",
          "website": "https://pizza-online.fi/ravintolat/helsinki/grillimilano/"
        }
      },
      {
        "type": "way",
        "id": 300626401,
        "center": {
          "lat": 60.1710208,
          "lon": 24.9447246
        },
        "nodes": [
          3047098826,
          3047098827,
          3047098824,
          3047098823,
          3047098826
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:postcode": "00100",
          "addr:street": "Rautatientori",
          "amenity": "fast_food",
          "building": "kiosk",
          "description": "Rakennettu vuonna 1940. / This protected grill was built in 1940.",
          "name": "Helsingin Pystygrilli",
          "start_date": "1940",
          "wheelchair": "yes"
        }
      },
      {
        "type": "way",
        "id": 313613077,
        "center": {
          "lat": 60.1741102,
          "lon": 24.9307755
        },
        "nodes": [
          3196176693,
          3196176690,
          3196176689,
          3196176692,
          3196176693
        ],
        "tags": {
          "amenity": "fast_food",
          "building": "yes",
          "cuisine": "burger",
          "name": "Jaskan grilli",
          "opening_hours": "Mo-Su 19:30-04:30",
          "wheelchair": "yes"
        }
      },
      {
        "type": "way",
        "id": 394590983,
        "center": {
          "lat": 60.2400355,
          "lon": 24.8507639
        },
        "nodes": [
          3384533309,
          5075684982,
          3975752000,
          5075684979,
          5075684980,
          3975752006,
          3975752002,
          3975752008,
          7781918238,
          7781918237,
          3384533308,
          3384533309
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "11",
          "addr:postcode": "00390",
          "addr:street": "Ristipellontie",
          "amenity": "fast_food",
          "branch": "Konala",
          "brand": "Hesburger",
          "brand:wikidata": "Q1276832",
          "brand:wikipedia": "en:Hesburger",
          "building": "yes",
          "building:levels": "2",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "established": "2015",
          "name": "Hesburger",
          "opening_hours": "Mo-Sa 09:00-24:00; Su 11:00-22:00",
          "operator": "Ristikko Burger Oy",
          "takeaway": "yes",
          "website": "https://www.hesburger.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "way",
        "id": 447962470,
        "center": {
          "lat": 60.1742826,
          "lon": 24.9307171
        },
        "nodes": [
          4450201187,
          4450201188,
          4450201189,
          4450201190,
          4450201187
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "12",
          "addr:postcode": "00100",
          "addr:street": "Museokatu",
          "amenity": "fast_food",
          "building": "yes",
          "cuisine": "fast_food;fried_food;burger;ice_cream",
          "diet:vegan": "only",
          "ice_cream": "yes",
          "name": "Vöner Lippakioski",
          "opening_hours": "Mo-Th 10:30-21:00, Fr 10:30-05:00, Sa 11:00-05:00, Su 11:00-21:00; Oct-Mar: off",
          "operator": "Jänö - Vegan Co-op",
          "operator:type": "cooperative",
          "short_name": "Jänö",
          "takeaway": "yes",
          "website": "https://www.facebook.com/vonerlippakioski/"
        }
      },
      {
        "type": "way",
        "id": 574521947,
        "center": {
          "lat": 60.2310583,
          "lon": 25.0547956
        },
        "nodes": [
          5514422300,
          7235751111,
          5237074597,
          7235751110,
          5514422299,
          5514422298,
          5514422295,
          5514422294,
          5514422297,
          5514422296,
          5514422300
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00940",
          "addr:street": "Kivikonlaita",
          "amenity": "fast_food",
          "branch": "Kivikko",
          "brand": "McDonald's",
          "brand:wikidata": "Q38076",
          "brand:wikipedia": "en:McDonald's",
          "building": "yes",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through": "yes",
          "name": "McDonald's",
          "opening_hours": "24/7",
          "operator": "Carnis Oy",
          "phone": "+358 40 351 8080",
          "start_date": "2017-10..2017-11",
          "takeaway": "yes",
          "toilets:wheelchair": "yes",
          "website": "https://www.mcdonalds.fi/",
          "wheelchair": "yes"
        }
      }
    ]
  } as OverpassJson;

export default mockData;
