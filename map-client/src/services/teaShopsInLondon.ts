import { OverpassJson } from 'overpass-ts';

const mockData =
  {
    "version": 0.6,
    "generator": "Overpass API 0.7.56.9 76e5016d",
    "osm3s": {
      "timestamp_osm_base": "2021-08-11T09:30:38Z",
      "timestamp_areas_base": "2021-08-11T08:30:27Z",
      "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL."
    },
    "elements": [
      {
        "type": "node",
        "id": 821344553,
        "lat": 51.5110205,
        "lon": -0.1265492,
        "tags": {
          "name": "fine teas & coffees",
          "shop": "tea",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1334044883,
        "lat": 51.496869,
        "lon": -0.140983,
        "tags": {
          "addr:street": "Victoria Street",
          "brand": "T2",
          "brand:wikidata": "Q48802134",
          "brand:wikipedia": "en:T2 (Australian company)",
          "name": "T2",
          "shop": "tea",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2536625834,
        "lat": 51.5092751,
        "lon": -0.1245022,
        "tags": {
          "addr:city": "London",
          "addr:housenumber": "435",
          "addr:postcode": "WC2R 0QN",
          "addr:street": "Strand",
          "name": "Whittard",
          "shop": "tea",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 3260042835,
        "lat": 51.5125056,
        "lon": -0.3032488,
        "tags": {
          "name": "Bubble Magik",
          "shop": "tea"
        }
      },
      {
        "type": "node",
        "id": 3357929207,
        "lat": 51.5128255,
        "lon": -0.1413787,
        "tags": {
          "addr:housenumber": "7-8",
          "addr:street": "Conduit Street",
          "level": "0",
          "name": "The East India Company",
          "shop": "tea",
          "website": "https://www.theeastindiacompany.com",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 3357929244,
        "lat": 51.5161982,
        "lon": -0.1320159,
        "tags": {
          "addr:housenumber": "43",
          "addr:street": "Oxford Street",
          "name": "Whittard of Chelsea",
          "shop": "tea",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 3835357227,
        "lat": 51.5050058,
        "lon": -0.0195904,
        "tags": {
          "level": "0",
          "level:ref": "-1",
          "name": "Whittard of Chelsea",
          "shop": "tea"
        }
      },
      {
        "type": "node",
        "id": 4345141317,
        "lat": 51.5262836,
        "lon": -0.0889096,
        "tags": {
          "addr:city": "London",
          "addr:housename": "The Bower",
          "addr:housenumber": "211",
          "addr:postcode": "EC1V 9NR",
          "addr:street": "Old Street",
          "addr:unit": "E",
          "level": "0",
          "name": "Good & Proper",
          "opening_hours": "Mo-Fr 08:00-18:00",
          "shop": "tea",
          "website": "https://www.goodandpropertea.com/"
        }
      },
      {
        "type": "node",
        "id": 4440565047,
        "lat": 51.5413913,
        "lon": -0.1459057,
        "tags": {
          "addr:city": "London",
          "addr:housenumber": "Unit L7",
          "addr:postcode": "NW1 8AL",
          "addr:street": "Camden Lock Place",
          "level": "0",
          "name": "In-fusion Tea",
          "shop": "tea",
          "website": "http://in-fusiontea.co.uk/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4440565072,
        "lat": 51.5414443,
        "lon": -0.1455637,
        "tags": {
          "addr:city": "London",
          "addr:housenumber": "8",
          "addr:postcode": "NW1 8AL",
          "addr:street": "Camden Lock Place",
          "level": "1",
          "name": "Chaboba",
          "shop": "tea",
          "website": "https://www.chaboba.co.uk/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4440565088,
        "lat": 51.5412906,
        "lon": -0.1466415,
        "tags": {
          "addr:city": "London",
          "addr:housenumber": "90–92",
          "addr:postcode": "NW1 8AF",
          "addr:street": "West Yard, Camden Lock Place",
          "name": "Yumchaa Teashop",
          "shop": "tea"
        }
      },
      {
        "type": "node",
        "id": 4893190363,
        "lat": 51.5086452,
        "lon": -0.1340245,
        "tags": {
          "name": "Whittard",
          "shop": "tea"
        }
      },
      {
        "type": "node",
        "id": 5012222969,
        "lat": 51.5119476,
        "lon": -0.1229003,
        "tags": {
          "level": "0",
          "name": "Whittard",
          "shop": "tea",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 5499048126,
        "lat": 51.5108152,
        "lon": -0.1349496,
        "tags": {
          "addr:housenumber": "5",
          "addr:street": "Denman Place",
          "name": "My Cup of Tea",
          "shop": "tea",
          "website": "https://www.mycupoftea.co.uk"
        }
      },
      {
        "type": "node",
        "id": 5683731022,
        "lat": 51.509738,
        "lon": -0.1361822,
        "tags": {
          "addr:housenumber": "13",
          "addr:street": "Regent Street",
          "name": "Whittard",
          "shop": "tea",
          "website": "https://www.whittard.co.uk/"
        }
      },
      {
        "type": "node",
        "id": 5828192848,
        "lat": 51.5433852,
        "lon": -0.0062423,
        "tags": {
          "addr:city": "London",
          "addr:housename": "Westfield Stratford City",
          "addr:street": "Montfichet Road",
          "level": "-1",
          "name": "T4",
          "shop": "tea"
        }
      },
      {
        "type": "node",
        "id": 6124936081,
        "lat": 51.5161588,
        "lon": -0.1420291,
        "tags": {
          "addr:housenumber": "292",
          "addr:street": "Regent Street",
          "brand": "T2",
          "brand:wikidata": "Q48802134",
          "brand:wikipedia": "en:T2 (Australian company)",
          "name": "T2",
          "phone": "+44 (0) 20 7580 6360",
          "shop": "tea",
          "website": "https://www.t2tea.com/"
        }
      },
      {
        "type": "node",
        "id": 6292504981,
        "lat": 51.5191935,
        "lon": -0.1515404,
        "tags": {
          "addr:housenumber": "15",
          "addr:street": "Marylebone High Street",
          "brand": "Kusmi Tea",
          "brand:wikidata": "Q944186",
          "brand:wikipedia": "en:Kusmi Tea",
          "name": "Kusmi Tea",
          "shop": "tea",
          "website": "https://int.kusmitea.com/"
        }
      },
      {
        "type": "node",
        "id": 7192415372,
        "lat": 51.5158113,
        "lon": -0.2047539,
        "tags": {
          "addr:housenumber": "182",
          "addr:street": "Portobello Road",
          "name": "Whittard of Chelsea",
          "phone": "+44 20 7243 2536",
          "shop": "tea",
          "website": "https://www.whittard.co.uk/",
          "wikidata": "Q7996831",
          "wikipedia": "en:Whittard of Chelsea"
        }
      },
      {
        "type": "node",
        "id": 7518738957,
        "lat": 51.5223618,
        "lon": -0.0717791,
        "tags": {
          "addr:city": "London",
          "addr:housenumber": "103",
          "addr:postcode": "E1 6SE",
          "addr:street": "Brick Lane",
          "name": "London Tea Exchange",
          "shop": "tea"
        }
      },
      {
        "type": "node",
        "id": 7953132074,
        "lat": 51.4986288,
        "lon": -0.1659604,
        "tags": {
          "addr:housenumber": "138",
          "addr:street": "Brompton Road",
          "name": "TWG Tea",
          "phone": "+44 20 3972 0201",
          "shop": "tea",
          "website": "https://twgtea.com/",
          "wikidata": "Q16966589",
          "wikipedia": "en:TWG Tea"
        }
      },
      {
        "type": "node",
        "id": 8185233197,
        "lat": 51.5846645,
        "lon": -0.279794,
        "tags": {
          "addr:city": "London",
          "addr:country": "GB",
          "addr:housename": "Chaiiwala",
          "addr:housenumber": "549",
          "addr:postcode": "NW9 9EL",
          "addr:street": "Kingsbury Road",
          "air_conditioning": "yes",
          "brand": "Chaiiwala",
          "capacity": "26",
          "contact:email": "kingsbury@chaiiwala.co.uk",
          "contact:facebook": "https://www.facebook.com/chaiiwalakingsbury",
          "contact:phone": "+44 20 8075 0221",
          "contact:website": "https://www.chaiiwala.co.uk/",
          "cuisine": "indian;coffee_shop",
          "delivery": "yes",
          "description": "Chai’ an authentic and traditional brewed tea, originating from the far east. Chaiiwala brings a modern mix of delicious and affordable Indian street food, with a contemporary twist and flavoursome varieties of chai...\"the best karak chai in town.\"",
          "diet:halal": "yes",
          "internet_access": "no",
          "name": "Chaiiwala",
          "name:ur": "چائیوالا",
          "opening_hours": "Mo-Su 09:00-22:00",
          "opening_hours:covid19": "open",
          "outdoor_seating": "no",
          "reservation": "no",
          "shop": "tea",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 8337264515,
        "lat": 51.4907191,
        "lon": -0.1617579,
        "tags": {
          "addr:housenumber": "96",
          "addr:street": "King's Road",
          "brand": "T2",
          "brand:wikidata": "Q48802134",
          "brand:wikipedia": "en:T2 (Australian company)",
          "name": "T2",
          "shop": "tea",
          "website": "https://www.t2tea.com/"
        }
      },
      {
        "type": "node",
        "id": 8946376493,
        "lat": 51.4985555,
        "lon": -0.143331,
        "tags": {
          "name": "Whittard",
          "shop": "tea"
        }
      },
      {
        "type": "node",
        "id": 8946509230,
        "lat": 51.3662651,
        "lon": -0.1941743,
        "tags": {
          "addr:city": "Sutton",
          "addr:housenumber": "208",
          "addr:street": "High Street",
          "name": "East & Tea Co",
          "shop": "tea"
        }
      },
      {
        "type": "way",
        "id": 82770925,
        "center": {
          "lat": 51.5052247,
          "lon": -0.0916567
        },
        "nodes": [
          963509808,
          963510141,
          963509905,
          963509571,
          963509808
        ],
        "tags": {
          "addr:housenumber": "7",
          "addr:postcode": "SE1 9AB",
          "addr:street": "Park Street",
          "building": "yes",
          "building:colour": "brown",
          "building:levels": "3",
          "building:material": "brick",
          "name": "Bird and Blend",
          "note": "Changed from a node which had Bluebird Tea Co as name",
          "old_name": "Bluebird Tea Co",
          "roof:colour": "grey",
          "shop": "tea",
          "website": "https://birdandblendtea.com"
        }
      },
      {
        "type": "way",
        "id": 161420191,
        "center": {
          "lat": 51.5132478,
          "lon": -0.1128464
        },
        "nodes": [
          1733914376,
          1733914379,
          1733914365,
          1733914364,
          1733914376
        ],
        "tags": {
          "addr:city": "London",
          "addr:housenumber": "216",
          "addr:street": "Strand",
          "building": "yes",
          "building:colour": "white",
          "building:levels": "1",
          "name": "Twinings",
          "note": "Building size is a guess, as its a small building not visible on Bing imagery",
          "opening_hours": "Mo-Fr 09:30-19:30; Sa-Su 11:00-18:00",
          "shop": "tea",
          "source": "survey;estimation",
          "wikidata": "Q7858373"
        }
      },
      {
        "type": "way",
        "id": 249211265,
        "center": {
          "lat": 51.5141706,
          "lon": -0.1459676
        },
        "nodes": [
          2558564463,
          2265321266,
          2265321271,
          2558564470,
          2558564473,
          2558564463
        ],
        "tags": {
          "addr:city": "London",
          "addr:housenumber": "9",
          "addr:postcode": "W1S 1AG",
          "addr:street": "Dering Street",
          "building": "retail",
          "building:levels": "4",
          "email": "info@postcardteas.com",
          "name": "Postcard Teas",
          "opening_hours": "Mo-Sa 10:30-18:30",
          "phone": "+44 20 7629 3654",
          "shop": "tea",
          "source": "survey",
          "website": "http://www.postcardteas.com",
          "wikidata": "Q26319776"
        }
      },
      {
        "type": "way",
        "id": 373272374,
        "center": {
          "lat": 51.5243335,
          "lon": -0.0746925
        },
        "nodes": [
          3767741360,
          3767741359,
          3767741235,
          3767741236,
          3767741251,
          3767741360
        ],
        "tags": {
          "addr:city": "London",
          "addr:housenumber": "50",
          "addr:street": "Redchurch Street",
          "level": "0",
          "name": "T2",
          "shop": "tea"
        }
      },
      {
        "type": "way",
        "id": 425222126,
        "center": {
          "lat": 51.5181117,
          "lon": -0.1322728
        },
        "nodes": [
          4245251039,
          4245251038,
          4245251037,
          1484198370,
          4245251033,
          4245251034,
          4245251035,
          4245251039
        ],
        "tags": {
          "brand": "T2",
          "brand:wikidata": "Q48802134",
          "brand:wikipedia": "en:T2 (Australian company)",
          "name": "T2",
          "shop": "tea"
        }
      },
      {
        "type": "way",
        "id": 457644925,
        "center": {
          "lat": 51.5367532,
          "lon": -0.1409788
        },
        "nodes": [
          3818071257,
          4537567826,
          4537567829,
          4537567832,
          4537567839,
          4537567844,
          3818071257
        ],
        "tags": {
          "addr:city": "London",
          "addr:housenumber": "99-105",
          "addr:postcode": "NW1 7JN",
          "addr:street": "Camden High Street",
          "fhrs:id": "425434",
          "name": "Mei Leaf Teahouse",
          "old_name": "China Life",
          "opening_hours": "Mo-Sa 09:00-20:00; Su 09:00-18:00",
          "phone": "+44 20 7388 6704",
          "shop": "tea",
          "website": "https://meileaf.com/"
        }
      },
      {
        "type": "way",
        "id": 552483798,
        "center": {
          "lat": 51.5186141,
          "lon": -0.1248279
        },
        "nodes": [
          5334164101,
          5334164225,
          5334164100,
          874823363,
          5334164102,
          5334164101
        ],
        "tags": {
          "addr:housenumber": "64",
          "addr:street": "Great Russell Street",
          "amenity": "cafe",
          "level": "0",
          "name": "Camellia's Tea House",
          "old_name": "Red Bus Shop",
          "shop": "tea",
          "wheelchair": "limited"
        }
      },
      {
        "type": "way",
        "id": 554338506,
        "center": {
          "lat": 51.5174223,
          "lon": -0.1254559
        },
        "nodes": [
          5349848784,
          5349848782,
          5349848781,
          5349848788,
          5349848787,
          5349848780,
          5349848784
        ],
        "tags": {
          "name": "Tea Life",
          "shop": "tea"
        }
      },
      {
        "type": "way",
        "id": 615279081,
        "center": {
          "lat": 51.3203781,
          "lon": -0.1396862
        },
        "nodes": [
          5818278897,
          5818278895,
          5818278894,
          5818278896,
          5818278897
        ],
        "tags": {
          "addr:city": "Coulsdon",
          "addr:housenumber": "31",
          "addr:postcode": "CR5 2RB",
          "addr:street": "Chipstead Valley Road",
          "building": "retail",
          "building:levels": "2",
          "name": "The Tea Culture",
          "roof:levels": "1",
          "shop": "tea"
        }
      }
    ]
  } as OverpassJson;

export default mockData;
