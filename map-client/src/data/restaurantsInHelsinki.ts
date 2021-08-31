import { OverpassJson } from 'overpass-ts';

const mockData =
  {
    "version": 0.6,
    "generator": "Overpass API 0.7.56.9 76e5016d",
    "osm3s": {
      "timestamp_osm_base": "2021-08-31T09:14:42Z",
      "timestamp_areas_base": "2021-08-31T08:18:28Z",
      "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL."
    },
    "elements": [
      {
        "type": "node",
        "id": 25279508,
        "lat": 60.2089683,
        "lon": 24.8668416,
        "tags": {
          "amenity": "restaurant",
          "contact:website": "http://www.pikkuranska.com/",
          "cuisine": "french",
          "name": "Pikku Ranska",
          "opening_hours": "Mo-Th 10:30-22:15; Fr 11:00-23:00; Sa 12:00-23:00"
        }
      },
      {
        "type": "node",
        "id": 27392509,
        "lat": 60.181183,
        "lon": 24.8833694,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintola Seurasaari",
          "toilets:wheelchair": "yes",
          "was:name": "Antin kaffeliiteri",
          "was:name:sv": "Anttis Kaffelider Cafe",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 50812719,
        "lat": 60.206656,
        "lon": 25.0424769,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4",
          "addr:postcode": "00800",
          "addr:street": "Siilitie",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Nepalainen Ravintola Sunkosi",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 50818866,
        "lat": 60.1953248,
        "lon": 25.0305688,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "14",
          "addr:postcode": "00810",
          "addr:street": "Hiihtomäentie",
          "amenity": "restaurant",
          "name": "Treffi Pub & Bistro",
          "phone": "+358207300370",
          "website": "https://treffipub.com/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 50820888,
        "lat": 60.1903626,
        "lon": 25.0417398,
        "tags": {
          "amenity": "restaurant",
          "email": "vanhamylly@vanhamylly.fi",
          "name": "Wanha Mylly",
          "opening_hours": "Tu-Th 11:00-20:00; Fr 11:00-22:00; Sa 12:00-22:00; Su 12:00-20:00; PH 12:00-20:00",
          "outdoor_seating": "yes",
          "phone": "+358 9 759 7520",
          "takeaway": "no",
          "website": "http://vanhamylly.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 51417894,
        "lat": 60.2011926,
        "lon": 25.0472316,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "El Fogon",
          "opening_hours": "Mo 10:00-15:00; Tu-Fr 10:00-23:00; Sa 12:00-23:00; Su 12:00-17:00",
          "website": "https://www.elfogon.fi/"
        }
      },
      {
        "type": "node",
        "id": 51419189,
        "lat": 60.2047014,
        "lon": 25.0508173,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "31",
          "addr:street": "Sahaajankatu",
          "amenity": "restaurant",
          "cuisine": "pizza;arabic",
          "name": "Papan Lounas & Pizza"
        }
      },
      {
        "type": "node",
        "id": 52351056,
        "lat": 60.2019002,
        "lon": 25.0448582,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Loimu"
        }
      },
      {
        "type": "node",
        "id": 53120985,
        "lat": 60.2013258,
        "lon": 25.0438603,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Lounasravintola Hima",
          "note": "Oli ennen Laturi",
          "phone": "+358 44 2028989",
          "website": "http://www.ravintolahima.com"
        }
      },
      {
        "type": "node",
        "id": 53121474,
        "lat": 60.1879777,
        "lon": 25.0303723,
        "tags": {
          "amenity": "restaurant",
          "name": "il Faro"
        }
      },
      {
        "type": "node",
        "id": 56418307,
        "lat": 60.1820445,
        "lon": 24.974829,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00530",
          "addr:street": "Hakaniemenranta",
          "amenity": "restaurant",
          "email": "taina@trefilm.net",
          "facebook": "https://www.facebook.com/RavintolalaivaMaria",
          "name": "Ravintolalaiva M/S Maria",
          "phone": "+358 40 722 2008",
          "seasonal:summer": "yes",
          "seasonal:winter": "no",
          "smoking": "outside",
          "website": "https://www.facebook.com/RavintolalaivaMaria"
        }
      },
      {
        "type": "node",
        "id": 57715360,
        "lat": 60.161828,
        "lon": 24.902444,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1 C, 1. krs./Floor 1",
          "addr:postcode": "00180",
          "addr:street": "Tallberginkatu",
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Ravintola Hima & Sali",
          "opening_hours": "Mo-Fr 08:30-21:00; Sa-Su 12:00-19:00",
          "opening_hours:lunch": "Mo-Fr 11:00-14:30",
          "phone": "+358 9 694 1701",
          "url": "http://www.himasali.com",
          "website": "https://himasali.com/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 59622323,
        "lat": 60.1721106,
        "lon": 24.9449953,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "18",
          "addr:postcode": "00100",
          "addr:street": "Mikonkatu",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Maya Bar & Grill",
          "opening_hours": "Mo-Th 11:00-23:00; Fr 11:00-24:00; Sa 12:00-24:00; Su 13:00-23:00",
          "opening_hours:covid19": "off",
          "website": "https://www.maya.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 59952264,
        "lat": 60.2096224,
        "lon": 25.0543806,
        "tags": {
          "amenity": "restaurant",
          "name": "Roihu"
        }
      },
      {
        "type": "node",
        "id": 59952336,
        "lat": 60.2106172,
        "lon": 25.0553453,
        "tags": {
          "amenity": "restaurant",
          "name": "Cafe Viikki"
        }
      },
      {
        "type": "node",
        "id": 59952344,
        "lat": 60.2107746,
        "lon": 25.0533204,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00880",
          "addr:street": "Pulttitie",
          "amenity": "restaurant",
          "fixme": "Tässä saattoi olla vieressä toinen ravintola myös",
          "name": "91,1"
        }
      },
      {
        "type": "node",
        "id": 59952365,
        "lat": 60.2113777,
        "lon": 25.0485352,
        "tags": {
          "amenity": "restaurant",
          "created_by": "Potlatch alpha",
          "name": "Kang Thai",
          "note": "Entinen Pultti"
        }
      },
      {
        "type": "node",
        "id": 60062502,
        "lat": 60.167247,
        "lon": 24.9242236,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "12",
          "addr:postcode": "00180",
          "addr:street": "Lapinlahdenkatu",
          "amenity": "restaurant",
          "cuisine": "japanese",
          "name": "Kabuki",
          "phone": "+358 9 694 9446",
          "website": "http://www.kabuki.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 60072062,
        "lat": 60.1835086,
        "lon": 24.9159034,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "39",
          "addr:postcode": "00250",
          "addr:street": "Mechelininkatu",
          "amenity": "restaurant",
          "name": "Ravintola Lehtovaara",
          "opening_hours": "Tu-Sa 16:00-22:00",
          "opening_hours:covid19": "off",
          "website": "https://www.lehtovaara.fi/"
        }
      },
      {
        "type": "node",
        "id": 60123834,
        "lat": 60.1856821,
        "lon": 25.033171,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "greek",
          "name": "Thalassa"
        }
      },
      {
        "type": "node",
        "id": 60123842,
        "lat": 60.1858173,
        "lon": 25.0320548,
        "tags": {
          "amenity": "restaurant",
          "created_by": "Potlatch 0.4a",
          "name": "Del Mar",
          "opening_hours": "Mo-Fr 11:00-23:00; Sa 12:00-23:00; Su 12:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 60124174,
        "lat": 60.2364474,
        "lon": 25.0843025,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00940",
          "addr:street": "Keinulaudankuja",
          "amenity": "restaurant",
          "diet:vegan": "no",
          "diet:vegetarian": "yes",
          "email": "info@ravintolailano.fi",
          "name": "Ilano",
          "opening_hours": "Mo-Th 10:30-22:00; Fr 10:30-24:00, Sa 12:00-24:00, Su 12:00-20:00",
          "phone": "+358400981202",
          "takeaway": "yes",
          "website": "https://www.ravintolailano.fi/"
        }
      },
      {
        "type": "node",
        "id": 60124552,
        "lat": 60.1781275,
        "lon": 24.9123767,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6",
          "addr:postcode": "00260",
          "addr:street": "Merikannontie",
          "amenity": "restaurant",
          "brunch": "yes",
          "opening_hours:brunch": "Su 12:00-16:00",
          "phone": "+358 40 712 0234",
          "terrace": "yes",
          "website": "https://www.restel.fi/tilat/mestaritalli/"
        }
      },
      {
        "type": "node",
        "id": 60133792,
        "lat": 60.1710523,
        "lon": 24.9285748,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "14",
          "addr:street": "Arkadiankatu",
          "amenity": "restaurant",
          "name": "Ateljé Finne"
        }
      },
      {
        "type": "node",
        "id": 60258042,
        "lat": 60.249482,
        "lon": 25.0454081,
        "tags": {
          "addr:housename": "Päärakennus",
          "addr:postcode": "00700",
          "addr:street": "Malmin lentoasema",
          "amenity": "restaurant",
          "cuisine": "international",
          "name": "Check-In/La Bamba - Malmin LA",
          "name:en": "Check-In/La Bamba - Malmin AP",
          "name:fi": "Check-In/La Bamba - Malmin LA",
          "website": "https://labambafinland.fi/"
        }
      },
      {
        "type": "node",
        "id": 60324054,
        "lat": 60.2330553,
        "lon": 25.0615719,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Pizzeria Kivikko"
        }
      },
      {
        "type": "node",
        "id": 60324317,
        "lat": 60.2397656,
        "lon": 25.0683236,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "12",
          "addr:postcode": "00940",
          "addr:street": "Kivikonkaari",
          "amenity": "restaurant",
          "contact:phone": "+358 9 342 3781",
          "contact:website": "https://www.kontulankuningas.fi/",
          "cuisine": "pizza",
          "name": "Kontulan Kuningas",
          "opening_hours": "Mo-Th 10:00-22:00; Fr,Sa 10:00-04:30",
          "opening_hours:url": "https://kontulankuningas.fi/kauppa/index.php?main_page=store_open"
        }
      },
      {
        "type": "node",
        "id": 60428096,
        "lat": 60.188055,
        "lon": 25.0374021,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00810",
          "addr:street": "Kaivolahdenkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Sushi Panda",
          "phone": "+358503521654",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 60428461,
        "lat": 60.1867618,
        "lon": 25.0304858,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Mantra",
          "opening_hours": "Mo-Th 11:00-22:00; Fr 11:00-23:00; Sa 12:00-23:00; Su 12:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 60543374,
        "lat": 60.1739071,
        "lon": 24.9201179,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00100",
          "addr:street": "Caloniuksenkatu",
          "amenity": "restaurant",
          "cuisine": "russian",
          "int_name": "Russian Restaurant Troikka",
          "name": "Venäläinen ravintola Troikka",
          "name:ru": "Ресторан Тройка",
          "opening_hours": "Tu-Sa 17:00-22:00",
          "website": "http://www.troikka.fi/"
        }
      },
      {
        "type": "node",
        "id": 60543532,
        "lat": 60.1725874,
        "lon": 24.9201499,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "17",
          "addr:postcode": "00100",
          "addr:street": "Mechelininkatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Aa Han Thai",
          "opening_hours": "Tu-Fr 11:00-22:00; Mo 11:00-20:00; Sa 12:00-22:00; Su 12:00-21:00",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 61907363,
        "lat": 60.2110081,
        "lon": 25.0806648,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "email": "info@ristorantemomento.fi",
          "floor": "1",
          "name": "Ristorante Momento",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 10:30-20:00; Su 12:00-19:00",
          "phone": "+358 50 557 0055",
          "website": "http://www.ristorantemomento.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 62965963,
        "lat": 60.1693924,
        "lon": 24.9329881,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Empire Plaza",
          "toilets:wheelchair": "yes",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 62967659,
        "lat": 60.1713362,
        "lon": 24.9376471,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1 B",
          "addr:postcode": "00100",
          "addr:street": "Mannerheiminaukio",
          "amenity": "restaurant",
          "contact:phone": "020 729 67 12",
          "email": "paaposti@foodandco.fi",
          "name": "Ravintola Pääposti",
          "opening_hours:covid19": "off",
          "website": "https://foodandco.fi/ravintolat/Ravintolat-kaupungeittain/helsinki/paaposti/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 62968941,
        "lat": 60.2233721,
        "lon": 24.8654666,
        "tags": {
          "amenity": "restaurant",
          "brand": "Amica",
          "name": "Amica",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 68734026,
        "lat": 60.1606889,
        "lon": 24.9292836,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6",
          "addr:postcode": "00120",
          "addr:street": "Hietalahdenranta",
          "amenity": "restaurant",
          "name": "Hampton Bay",
          "outdoor_seating": "yes",
          "phone": "+358 44 7530895",
          "website": "https://www.hamptonbay.fi/"
        }
      },
      {
        "type": "node",
        "id": 73093656,
        "lat": 60.2097537,
        "lon": 25.1433525,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza",
          "cuisine_1": "kebab",
          "name": "Vuo Kebab ja Pizzeria",
          "phone": "+358 9 694 0080",
          "start_date": "2011-12",
          "was:name": "R-kioski",
          "was:shop": "kiosk",
          "website": "http://www.vuokebabpizza.fi",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 73100584,
        "lat": 60.2080846,
        "lon": 25.1440887,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "45, T taso",
          "addr:postcode": "00980",
          "addr:street": "Vuotie",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "1",
          "level:ref": "Toritaso",
          "name": "Chico's Columbus",
          "opening_hours": "Mo-Sa 10:00-22:00; Su 12:00-21:00",
          "smoking": "no",
          "toilets:wheelchair": "yes",
          "website": "http://www.chicos.fi/chicos_vuosaari.html",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 73112175,
        "lat": 60.2065814,
        "lon": 25.1455115,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1, level T",
          "addr:postcode": "00980",
          "addr:street": "Valkopaadentie",
          "amenity": "restaurant",
          "name": "Ravintola Fregatti",
          "website": "http://www.fregatti.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 75398888,
        "lat": 60.2075734,
        "lon": 25.106966,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11 D",
          "addr:postcode": "00910",
          "addr:street": "Meripellontie",
          "amenity": "restaurant",
          "fixme": "Probably was",
          "name": "Meri Pizzeria Kahvila",
          "website": "https://pizza-online.fi/ravintolat/helsinki/meripizza",
          "wheelchair:description": "Tel. +358 9 42892272."
        }
      },
      {
        "type": "node",
        "id": 75415088,
        "lat": 60.2004352,
        "lon": 24.9344691,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "11",
          "addr:postcode": "00520",
          "addr:street": "Ratapihantie",
          "amenity": "restaurant",
          "name": "Ratakivi"
        }
      },
      {
        "type": "node",
        "id": 75795843,
        "lat": 60.1998398,
        "lon": 24.9360668,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00520",
          "addr:street": "Veturitori",
          "amenity": "restaurant",
          "name": "Leni's Cafe",
          "opening_hours": "Mo-Fr 06:00-13:30",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "yes",
          "payment:smartum_note": "yes",
          "phone": "+358 9 2789364",
          "website": "https://www.leninherkut.fi/"
        }
      },
      {
        "type": "node",
        "id": 76474077,
        "lat": 60.1790197,
        "lon": 24.9476688,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6",
          "addr:postcode": "00530",
          "addr:street": "Säästöpankinranta",
          "amenity": "restaurant",
          "contact:instagram": "https://www.instagram.com/graniittilinna/",
          "email": "graniittilinna@graniittiravintolat.fi",
          "facebook": "https://www.facebook.com/graniittilinna/",
          "name": "Graniittilinna",
          "phone": "+358 20 742 4250",
          "start_date": "2004-03-26",
          "website": "https://www.graniittilinna.com",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 76474078,
        "lat": 60.1789718,
        "lon": 24.9474542,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "contact:instagram": "https://www.instagram.com/juttutupa/",
          "email": "juttutupa@graniittiravintolat.fi",
          "facebook": "https://www.facebook.com/juttutupa/",
          "lunch": "yes",
          "name": "Juttutuvan ruokasali",
          "opening_hours": "Mo 10:00-24:00; Tu-Th 10:00-01:00; Fr-Sa 10:00-03:00; Su 12:00-23:00",
          "opening_hours:brunch": "Mo-Fr 10:30-14:00",
          "website": "https://www.juttutupa.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 76474225,
        "lat": 60.1785669,
        "lon": 24.9475741,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "5",
          "addr:postcode": "00530",
          "addr:street": "Paasivuorenkatu",
          "amenity": "restaurant",
          "name": "Paasiravintola",
          "website": "https://www.paasitorni.fi/tilat/paasiravintola/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 76609844,
        "lat": 60.1665646,
        "lon": 24.9518189,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "16",
          "addr:postcode": "00130",
          "addr:street": "Eteläranta",
          "amenity": "restaurant",
          "cuisine": "nordic",
          "name": "Finnjävel",
          "website": "https://www.finnjavel.fi/"
        }
      },
      {
        "type": "node",
        "id": 76615082,
        "lat": 60.168823,
        "lon": 24.9592448,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "7",
          "addr:postcode": "00160",
          "addr:street": "Kanavaranta",
          "amenity": "restaurant",
          "name": "Ravintola Sipuli",
          "opening_hours:covid19": "off",
          "url": "http://www.royalravintolat.com/sipuli/",
          "website": "http://ravintolasipuli.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 76617692,
        "lat": 60.1678064,
        "lon": 24.9291254,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Johan Ludvig"
        }
      },
      {
        "type": "node",
        "id": 76624339,
        "lat": 60.1650301,
        "lon": 24.9320499,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "38",
          "addr:postcode": "00120",
          "addr:street": "Albertinkatu",
          "amenity": "restaurant",
          "name": "Ravintola Rivoletto",
          "opening_hours": "Mo-Th 11:00-23:00; Fr 11:00-24:00; Sa 15:00-24:00; Su 17:00-23:00",
          "website": "https://www.rivolirestaurants.fi/"
        }
      },
      {
        "type": "node",
        "id": 76624351,
        "lat": 60.1652785,
        "lon": 24.9295242,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:street": "Eerikinkatu",
          "amenity": "restaurant",
          "cuisine": "mexican",
          "delivery:covid19": "only",
          "name": "Pueblo",
          "opening_hours:covid19": "Mo-Sa 11:00-21:30; Su 11:00-17:00",
          "phone": "+358 44 2444022",
          "takeaway:covid19": "only",
          "website": "https://pueblobar.fi/"
        }
      },
      {
        "type": "node",
        "id": 76627823,
        "lat": 60.1643248,
        "lon": 24.9275337,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:street": "Eerikinkatu",
          "amenity": "restaurant",
          "cuisine": "turkish",
          "name": "Atabar"
        }
      },
      {
        "type": "node",
        "id": 77642757,
        "lat": 60.1626526,
        "lon": 24.9331385,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "40",
          "addr:postcode": "00120",
          "addr:street": "Bulevardi",
          "amenity": "restaurant",
          "email": "myynti@soupster.com",
          "internet_access": "wlan",
          "internet_access:fee": "no",
          "name": "Southpark",
          "opening_hours": "Mo-Sa 11:00-15:00; Su 10:30-17:00",
          "opening_hours:brunch": "Sa-Su 10:00-15:00",
          "opening_hours:covid19": "off",
          "website": "http://www.southparkrestaurant.fi/"
        }
      },
      {
        "type": "node",
        "id": 87043267,
        "lat": 60.1892575,
        "lon": 24.9733757,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00580",
          "addr:street": "Vanha talvitie",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Lali Gurans",
          "opening_hours": "Ma - Pe: 10:00 - 16:00",
          "payment:bitcoin": "yes",
          "phone": "+358505989090",
          "website": "http://www.laligurans.fi/?page_id=52"
        }
      },
      {
        "type": "node",
        "id": 89074039,
        "lat": 60.1626811,
        "lon": 24.9353827,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "30",
          "addr:postcode": "00120",
          "addr:street": "Albertinkatu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Papa Albert",
          "opening_hours": "Mo-Th 10:00-14:00, 17:30-22:00; Fr 11:00-23:00; Sa 16:00-23:00",
          "website": "https://raflaamo.fi/fi/helsinki/ravintola-papa-albert",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 90740323,
        "lat": 60.2229983,
        "lon": 25.0193053,
        "tags": {
          "amenity": "restaurant",
          "name": "Tähkä",
          "toilets:wheelchair": "yes",
          "website": "https://www.amica.fi/en/Ravintolat/Amica-restaurants/Areas/Helsinki/University-of-Helsinki-Department-of-Basic-Veterinary-Sciences--Tahka-/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 90740585,
        "lat": 60.2290145,
        "lon": 25.0191526,
        "tags": {
          "amenity": "restaurant",
          "name": "Ladonlukko",
          "website": "https://www.sodexo.fi/ravintolaladonlukko"
        }
      },
      {
        "type": "node",
        "id": 90740867,
        "lat": 60.2264777,
        "lon": 25.0111155,
        "tags": {
          "amenity": "restaurant",
          "name": "Viikin kartano",
          "website": "https://www.sodexo.fi/viikinkartano"
        }
      },
      {
        "type": "node",
        "id": 90743296,
        "lat": 60.2270409,
        "lon": 25.014129,
        "tags": {
          "amenity": "restaurant",
          "name": "Biokeskus",
          "website": "http://www.hyyravintolat.fi/en#/Viikki/Biokeskus/6/18"
        }
      },
      {
        "type": "node",
        "id": 92758232,
        "lat": 60.1800389,
        "lon": 24.948693,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "18-20",
          "addr:postcode": "00530",
          "addr:street": "Siltasaarenkatu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Ristorante Rosso Ympyrätalo",
          "opening_hours": "Mo-Th 10:30-22:15; Fr,Sa 10:30-23:15; Su 12:00-22:00",
          "phone": "+358 10 7664120",
          "ref": "883",
          "toilets:wheelchair": "yes",
          "url": "http://www.rosso.fi/hki_ympyratalo.html",
          "website": "https://www.raflaamo.fi/fi/helsinki/rosso-ympyratalo-helsinki",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 92762548,
        "lat": 60.1806659,
        "lon": 24.9499343,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "11",
          "addr:postcode": "00530",
          "addr:street": "Siltasaarenkatu",
          "amenity": "restaurant",
          "cuisine": "kebab",
          "name": "Chilli Hakaniemi",
          "website": "http://www.chilli.fi/hakaniemi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 93455942,
        "lat": 60.172137,
        "lon": 24.9457455,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "23",
          "addr:postcode": "00100",
          "addr:street": "Mikonkatu",
          "amenity": "restaurant",
          "name": "Ravintola Kitzens",
          "note": "Radisson Blu Hotel's restaurant",
          "opening_hours:covid19": "off",
          "website": "https://www.raflaamo.fi/fi/helsinki/kitzens",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 96514512,
        "lat": 60.2091436,
        "lon": 25.0881984,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "10",
          "addr:postcode": "00930",
          "addr:street": "Kauppakartanonkatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "diet:gluten_free": "yes",
          "diet:halal": "yes",
          "diet:lactose_free": "yes",
          "diet:meat": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Ben's Way",
          "opening_hours": "Mo-Su 11:00-21:00",
          "opening_hours:covid19": "only take away",
          "phone": "+358407071591",
          "website": "https://bens-way-chinese-restaurant.webnode.com/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 96594471,
        "lat": 60.1972187,
        "lon": 24.9511653,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "45",
          "addr:postcode": "00550",
          "addr:street": "Mäkelänkatu",
          "amenity": "restaurant",
          "cuisine": "lebanese",
          "delivery": "yes",
          "description": "Myös tilaukset: Wolt, Foodora. Paljon erilaisia annoksia.\n\nAlso call and order possibility: Wolt, Foodora. Lots of different plates.",
          "name": "Lebanese food",
          "opening_hours": "Mo-Fr 10:00-22:00; Sa-Su 11:00-22:00",
          "phone": "+358 44 974 1717",
          "website": "https://www.lebanesefoodhelsinki.com/index.html"
        }
      },
      {
        "type": "node",
        "id": 96597060,
        "lat": 60.2106492,
        "lon": 24.950218,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00610",
          "addr:street": "Osmontie",
          "amenity": "restaurant",
          "email": "kapygrilli@kapygrilli.fi",
          "name": "Käpygrilli",
          "opening_hours": "Mo-Su 10:00-02:00",
          "phone": "+358 9 791 343",
          "smoking": "outside",
          "website": "http://kapygrilli.fi/"
        }
      },
      {
        "type": "node",
        "id": 96598790,
        "lat": 60.2120349,
        "lon": 24.9541838,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "54",
          "addr:postcode": "00610",
          "addr:street": "Koskelantie",
          "amenity": "restaurant",
          "name": "El Karim (Egyptian kitchen)",
          "payment:cash": "yes",
          "payment:debit_cards": "yes",
          "payment:lounasseteli": "yes",
          "payment:mastercard": "yes",
          "payment:visa": "yes",
          "website": "http://elkarim.fi/"
        }
      },
      {
        "type": "node",
        "id": 96601126,
        "lat": 60.2200334,
        "lon": 24.9404329,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "A Li Shan"
        }
      },
      {
        "type": "node",
        "id": 98693858,
        "lat": 60.241049,
        "lon": 24.995787,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00720",
          "addr:street": "Ratavallintie",
          "amenity": "restaurant",
          "name": "Shell HelmiSimpukka Helsinki Pukinmäki",
          "opening_hours": "24/7",
          "website": "https://www.shellhelmisimpukka.fi/helsinki-pukinmaki",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 119210976,
        "lat": 60.2439449,
        "lon": 24.9942483,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00720",
          "addr:street": "Eskolantie",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "delivery:covid19": "no",
          "email": "info@simrik.fi",
          "name": "Ravintola Simrik",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa-Su 12:00-22:00",
          "opening_hours:covid19": "Mo-Fr 12:00-19:00; Sa-Su 13:00-21:00",
          "phone": "+ 358 9 389 1287",
          "takeaway:covid19": "yes",
          "website": "https://simrik.fi/"
        }
      },
      {
        "type": "node",
        "id": 119218399,
        "lat": 60.1965721,
        "lon": 24.9420343,
        "tags": {
          "amenity": "restaurant",
          "contact:website": "http://www.ravintolafactory.com/index.php/ravintolat/helsinki-vallila",
          "name": "Factory - Vallila",
          "name:en": "Lunch restaurant Factory Vallila",
          "name:fi": "Factory Vallila lounasravintola",
          "opening_hours:covid19": "off",
          "outdoor_seating": "no",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "no",
          "payment:smartum_note": "yes",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 119219107,
        "lat": 60.1966039,
        "lon": 24.9442292,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00520",
          "addr:street": "Kumpulantie",
          "amenity": "restaurant",
          "email": "hasan@kolumbus.fi",
          "name": "Ravintola 91.1",
          "opening_hours": "Mo-Fr 07:00-15:00",
          "opening_hours:covid19": "same",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "no",
          "payment:smartum_note": "yes",
          "phone": "+358 9 1461427",
          "toilets:wheelchair": "yes",
          "website": "http://ravintola911.fi/",
          "wheelchair": "yes",
          "wheelchair:description": "Tel. +358 9 1461427. Esteetön sisäänkäynti sivuovesta / Wheelchair entrance from the side door!"
        }
      },
      {
        "type": "node",
        "id": 119220002,
        "lat": 60.1966274,
        "lon": 24.9512148,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "52",
          "addr:postcode": "00510",
          "addr:street": "Mäkelänkatu",
          "amenity": "restaurant",
          "cuisine": "indian",
          "email": "info@mustaharka.fi",
          "loc_name": "Härkä",
          "name": "Ravintola Musta Härkä",
          "name:en": "Restaurant & Lunch Musta Harka",
          "name:fi": "Ravintola Musta Härkä",
          "opening_hours": "Mo-Tu 09:00-02:00; We-Sa 09:00-04:00; Su 11:00-02:00",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "yes",
          "payment:smartum_note": "yes",
          "phone": "09 710430",
          "short_name": "Musta Härkä",
          "website": "https://www.mustaharka.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 119222853,
        "lat": 60.1951566,
        "lon": 24.9548625,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "38",
          "addr:postcode": "00510",
          "addr:street": "Mäkelänkatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Cheng Long",
          "website": "http://www.ravintolachenglong.fi/",
          "wheelchair": "no",
          "wheelchair:description": "3 high steps to get in.\r\n3 korkeaa porrasta."
        }
      },
      {
        "type": "node",
        "id": 119224973,
        "lat": 60.1946732,
        "lon": 24.9560741,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "30",
          "addr:postcode": "00510",
          "addr:street": "Mäkelänkatu",
          "amenity": "restaurant",
          "name": "Ravintola Kasturi",
          "phone": "+358404737266",
          "website": "http://www.ravintolakasturi.fi",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 143520127,
        "lat": 60.2272586,
        "lon": 25.00929,
        "tags": {
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Chico's",
          "opening_hours": "Mo-Fr 10:00-22:00; Sa 09:00-20:00; Su 12:00-19:00",
          "payment:cash": "yes",
          "payment:debit_cards": "yes",
          "payment:lounasseteli": "yes",
          "payment:mastercard": "yes",
          "payment:visa": "yes",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 146464359,
        "lat": 60.1626674,
        "lon": 24.9143055,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00180",
          "addr:street": "Itämerenkuja",
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Meritähti",
          "opening_hours": "Mo-Th 10:00-23:00; Fr 10:00-00:00; Sa 10:00-23:00; Su 10:00-22:00",
          "website": "http://www.meritahti.net/"
        }
      },
      {
        "type": "node",
        "id": 146467364,
        "lat": 60.1625752,
        "lon": 24.9138908,
        "tags": {
          "addr:housenumber": "1",
          "addr:postcode": "00180",
          "addr:street": "Itämerenkuja",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Dacca",
          "opening_hours": "Mo-Th 11:00-24:00; Fr-Sa 11:00-02:00; Su 11:00-24:00",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 146479523,
        "lat": 60.1625551,
        "lon": 24.9075649,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00180",
          "addr:street": "Kaapeliaukio",
          "amenity": "restaurant",
          "cuisine": "italian",
          "lunch": "yes",
          "name": "Kebab House",
          "wheelchair:description": "Formerly here was Ristorante Don Angelo."
        }
      },
      {
        "type": "node",
        "id": 146507636,
        "lat": 60.1632382,
        "lon": 24.9157111,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00180",
          "addr:street": "Selkämerenkatu",
          "amenity": "restaurant",
          "cuisine": "Nepalese",
          "name": "Yeti Nepal Ruoholahti",
          "opening_hours": "Mo-Fr 10:30-22:00; Sa 12:00-22:00; Su 12:00-21:00",
          "website": "https://www.yetinepal.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 146507716,
        "lat": 60.1632625,
        "lon": 24.9166015,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "mexican",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Chalupa Ruoholahti",
          "opening_hours": "Mo-Fr 10:30-20:30; Sa 11:00-20:30; Su 12:00-20:30",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 146517294,
        "lat": 60.2251124,
        "lon": 24.9724961,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00650",
          "addr:street": "Kirkkoherrantie",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "facebook": "https://www.facebook.com/ravintolaeverestview/",
          "name": "Everest View",
          "website": "https://ravintola-everest-view.business.site/"
        }
      },
      {
        "type": "node",
        "id": 150541351,
        "lat": 60.1723942,
        "lon": 24.9376545,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00100",
          "addr:street": "Postikuja",
          "amenity": "restaurant",
          "cuisine": "asian",
          "level": "2",
          "name": "Red Apple",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 151006260,
        "lat": 60.1672949,
        "lon": 24.9365563,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "25",
          "addr:postcode": "00100",
          "addr:street": "Annankatu",
          "amenity": "restaurant",
          "diet:vegetarian": "yes",
          "name": "Ravintola China",
          "name:fi": "Ravintola China",
          "name:zh": "中國樓酒家",
          "opening_hours": "Mo-Fr 11:00-23:00; Sa-Su 12:00-23:00; PH off",
          "short_name": "China",
          "website": "http://www.ravintolachina.fi",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 151006483,
        "lat": 60.164867,
        "lon": 24.9381002,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "7",
          "addr:postcode": "00120",
          "addr:street": "Bulevardi",
          "amenity": "restaurant",
          "name": "Tony's deli + Street Bar",
          "website": "https://www.tonysdeli.fi/"
        }
      },
      {
        "type": "node",
        "id": 151006932,
        "lat": 60.1651499,
        "lon": 24.9356242,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "30",
          "addr:postcode": "00120",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Haru Sushi",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 12:00-21:00; Su 13:00-21:00",
          "website": "https://www.facebook.com/Haru-sushi-1438609973105788/"
        }
      },
      {
        "type": "node",
        "id": 151007074,
        "lat": 60.1646178,
        "lon": 24.9338521,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "22",
          "addr:postcode": "00120",
          "addr:street": "Lönnrotinkatu",
          "amenity": "restaurant",
          "cuisine": "japanese",
          "name": "Koto"
        }
      },
      {
        "type": "node",
        "id": 161775343,
        "lat": 60.2064557,
        "lon": 25.059369,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Ravintola Kokki"
        }
      },
      {
        "type": "node",
        "id": 165006653,
        "lat": 60.2464887,
        "lon": 24.8612058,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00410",
          "addr:street": "Puustellinpolku",
          "amenity": "restaurant",
          "cuisine": "indian;international",
          "email": "hsg1313@hotmail.com",
          "internet_access": "wlan",
          "internet_access:fee": "no",
          "name": "Willihanhi",
          "opening_hours": "Mo-Su 09:00-23:00",
          "phone": "09-507 2415",
          "website": "http://www.willihanhi.fi/"
        }
      },
      {
        "type": "node",
        "id": 165008621,
        "lat": 60.2480864,
        "lon": 24.8637724,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00410",
          "addr:street": "Luutnantinaukio",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "delivery": "yes",
          "name": "InterPizza",
          "opening_hours": "Mo-Fr 10:00-22:00;Sa-Su 11:00-22:00",
          "phone": "095043813",
          "smoking": "no",
          "takeaway": "yes",
          "website": "https://interpizza2.fi/"
        }
      },
      {
        "type": "node",
        "id": 168548982,
        "lat": 60.2001939,
        "lon": 25.0466206,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Lounaskahvila",
          "note": "A-rappu, 4. krs"
        }
      },
      {
        "type": "node",
        "id": 175360168,
        "lat": 60.179749,
        "lon": 25.009376,
        "tags": {
          "amenity": "restaurant",
          "name": "Brändö seglare",
          "wikidata": "Q98410085"
        }
      },
      {
        "type": "node",
        "id": 207107581,
        "lat": 60.1803856,
        "lon": 24.9518554,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "cuisine": "regional",
          "lunch": "yes",
          "name": "Lounaskahvila Raiku",
          "opening_hours": "Mo-Fr 11:00-15:00"
        }
      },
      {
        "type": "node",
        "id": 207108089,
        "lat": 60.1807291,
        "lon": 24.9517548,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "cuisine": "lebanese",
          "name": "Metro Food",
          "opening_hours": "Mo-Th 10:30-22:00; Fr 11:00-23:30; Sa 11:00-24:00, Su 12:00-21:00"
        }
      },
      {
        "type": "node",
        "id": 207124017,
        "lat": 60.187489,
        "lon": 24.9642594,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00500",
          "addr:street": "Vilhonvuorenkatu",
          "address": "Vilhonvuorenkatu 3",
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Bangkok Center",
          "note": "Asian food store",
          "shop": "convenience",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 207126419,
        "lat": 60.1873396,
        "lon": 24.9647535,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7-9;5",
          "addr:postcode": "00500",
          "addr:street": "Vilhonvuorenkatu",
          "amenity": "restaurant",
          "name": "Thai Street Food"
        }
      },
      {
        "type": "node",
        "id": 219063034,
        "lat": 60.2086062,
        "lon": 24.965547,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Pizzeria Parmesan",
          "opening_hours": "Mo-Fr 10:00-23:00; Sa,Su 11:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 229021468,
        "lat": 60.2229535,
        "lon": 24.8549773,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7A",
          "addr:postcode": "00370",
          "addr:street": "Takkatie",
          "address": "Takkatie 7 A",
          "amenity": "restaurant",
          "name": "Thai Food / Pizza Express",
          "opening_hours": "Mo-Th 10:30-22:00; Fr 10:30-23:00; Sa 11:30-23:00; Su 11:30-22:00",
          "source": "http://www.thaifood.fi/",
          "website": "http://www.thaifood.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 229040293,
        "lat": 60.2222357,
        "lon": 24.8533482,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00370",
          "addr:street": "Arinatie",
          "amenity": "restaurant",
          "email": "taikahetki2015@gmail.com",
          "lunch": "yes",
          "name": "Taika Hetki",
          "opening_hours": "Mo-Su 06:30-15:00",
          "phone": "050 4090065",
          "source": "http://ravintolataikahetki.fi/",
          "website": "http://ravintolataikahetki.fi/"
        }
      },
      {
        "type": "node",
        "id": 229157160,
        "lat": 60.1705523,
        "lon": 24.9252845,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "8",
          "addr:postcode": "00100",
          "addr:street": "Runeberginkatu",
          "amenity": "restaurant",
          "cuisine": "pizza;kebab;falafel",
          "name": "Hanis Food",
          "opening_hours": "Mo-Su 11:00-22:00",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 247187229,
        "lat": 60.1618923,
        "lon": 24.8593869,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "chinese",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Long River",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa,Su 12:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 248154326,
        "lat": 60.1510912,
        "lon": 24.8855999,
        "tags": {
          "amenity": "restaurant",
          "name": "Limone",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-22:00; Su 12:00-21:00",
          "website": "https://limone.fi/lauttasaari/"
        }
      },
      {
        "type": "node",
        "id": 248179520,
        "lat": 60.1794287,
        "lon": 24.9238507,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "55a",
          "addr:postcode": "00260",
          "addr:street": "Runeberginkatu",
          "amenity": "restaurant",
          "name": "Mamma Rosa",
          "operator": "Kaukoravintolat Oy",
          "toilets:wheelchair": "yes",
          "website": "http://mammarosa.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 248343226,
        "lat": 60.1638967,
        "lon": 24.9310853,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "33-35",
          "addr:postcode": "00180",
          "addr:street": "Lönnrotinkatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "description": "Temporary closed till summer 2021, see Annankatu 29",
          "name": "Mei Lin",
          "name:fi": "Mei Lin",
          "name:zh": "梅林",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa,Su 12:00-22:30",
          "website": "https://www.meilin-fi.com/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 249106085,
        "lat": 60.1868363,
        "lon": 24.948225,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00510",
          "amenity": "restaurant",
          "name": "Huviretki"
        }
      },
      {
        "type": "node",
        "id": 249107276,
        "lat": 60.1843259,
        "lon": 24.9244059,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1-3",
          "addr:postcode": "00250",
          "addr:street": "Toivonkatu",
          "amenity": "restaurant",
          "cuisine": "indian",
          "name": "Gandi (Indian restaurant)",
          "opening_hours": "Mo-Fr 08:30-20:00",
          "website": "http://www.gandi.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 249344280,
        "lat": 60.1955285,
        "lon": 24.9586197,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "32-34",
          "addr:postcode": "00550",
          "addr:street": "Sturenkatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Royal Nepal",
          "name:old": "Wanha Sturen Mestari",
          "website": "http://royalnepal.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 249391337,
        "lat": 60.1566075,
        "lon": 24.8643968,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "kebab",
          "diet:vegan": "yes",
          "level": "1",
          "name": "Rixi-Baari",
          "opening_hours": "Mo-Th 10:00-23:00; Fr-Su 10:00-02:00",
          "outdoor_seating": "yes",
          "takeaway": "yes",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 249715817,
        "lat": 60.2098394,
        "lon": 25.0813263,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4-6",
          "addr:postcode": "00930",
          "addr:street": "Hansakuja",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "name": "Ravintola Nokis (Vietnamese street food)",
          "toilets:wheelchair": "no",
          "website": "http://treviet.fi/",
          "wheelchair": "yes",
          "wheelchair:description": "Opened on 7 March 2017. Former Vietnamese restaurant Tré viet."
        }
      },
      {
        "type": "node",
        "id": 249719339,
        "lat": 60.18638,
        "lon": 25.0077905,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00570",
          "addr:street": "Svinhufvudintie",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "is_in": "Kulosaari, Helsinki, Finland",
          "name": "Chengdu Ravintola",
          "phone": "+49 09 6926719",
          "website": "www.chengduravintola.fi"
        }
      },
      {
        "type": "node",
        "id": 250225498,
        "lat": 60.195393,
        "lon": 24.9035341,
        "tags": {
          "amenity": "restaurant",
          "contact:email": "ravintola@whitelady.fi",
          "contact:phone": "09 2413562",
          "name": "White Lady",
          "opening_hours": "Mo 11:00-21:00; Tu-Fr 11:00-22:00; Sa 13:00-22:00; Su 13:00-21:00",
          "opening_hours:covid19": "off",
          "website": "http://www.whitelady.fi/whitelady/"
        }
      },
      {
        "type": "node",
        "id": 250675936,
        "lat": 60.1741346,
        "lon": 24.9313765,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Manala",
          "opening_hours:covid19": "off",
          "postal_code": "00100",
          "url": "http://www.botta.fi/"
        }
      },
      {
        "type": "node",
        "id": 251754818,
        "lat": 60.208023,
        "lon": 25.173748,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "9",
          "addr:postcode": "00980",
          "addr:street": "Eteläreimarintie",
          "amenity": "restaurant",
          "email": "ravintolalinks@vuosaarigolf.fi",
          "facebook": "https://www.facebook.com/Ravintola-Links-452181984916975/",
          "lunch": "buffet",
          "lunch:buffet": "Mo-Fr 11:00-15:00",
          "name": "Ravintola Links",
          "opening_hours": "08:30-21:00",
          "phone": "+358 40 511 5867",
          "seasonal": "summer",
          "toilets:wheelchair": "no",
          "website": "https://vuosaarigolf.fi/ravintola/esittely/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 256199043,
        "lat": 60.1689067,
        "lon": 24.9414031,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "21",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "contact:website": "http://www.hardrockcafe.fi/",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Hard Rock Cafe Helsinki",
          "name:ru": "Hard Rock Cafe & Harald",
          "opening_hours": "Mo-Su 11:00-24:00; Sa-Su 00:00-02:00",
          "toilets:wheelchair": "yes",
          "website": "http://www.hardrockcafe.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 256200068,
        "lat": 60.1691803,
        "lon": 24.940796,
        "tags": {
          "addr:housenumber": "3 B",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "UniCafe",
          "opening_hours": "Mo-Fr 10:30-19:00; Sa 11:30-17:00",
          "opening_hours:covid19": "off",
          "operator": "UniCafe",
          "smoking": "no",
          "website": "https://www.unicafe.fi/",
          "wheelchair": "yes",
          "wheelchair:description": "Wheelchair entrance: Kaivopiha 10 C, elevator!"
        }
      },
      {
        "type": "node",
        "id": 256834869,
        "lat": 60.1637989,
        "lon": 24.9139541,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "15",
          "addr:postcode": "00180",
          "addr:street": "Itämerenkatu",
          "amenity": "restaurant",
          "name": "Antell-ravintola Itämerentori",
          "website": "https://www.antell.fi/ravintolat/ravintolahaku/ravintola/antell-ravintola-itamerentori-helsinki.html"
        }
      },
      {
        "type": "node",
        "id": 257115206,
        "lat": 60.2296059,
        "lon": 24.8968375,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "14",
          "addr:postcode": "00400",
          "addr:street": "Näyttelijäntie",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "delivery": "no",
          "name": "Peking House",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 12:00-21:00; Su 12:00-21:00",
          "takeaway": "yes",
          "toilets:wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 267386589,
        "lat": 60.2142242,
        "lon": 24.9439604,
        "tags": {
          "amenity": "restaurant",
          "name": "Nyyrikki"
        }
      },
      {
        "type": "node",
        "id": 267720951,
        "lat": 60.1629737,
        "lon": 24.9361875,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "33",
          "addr:street": "Uudenmaankatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Kaow Thip",
          "opening_hours": "Tu-Fr 11:00-21:00; Sa,Su 12:00-21:00",
          "phone": "+35892784249"
        }
      },
      {
        "type": "node",
        "id": 269108605,
        "lat": 60.2103751,
        "lon": 24.9763854,
        "tags": {
          "addr:housenumber": "150",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "check_date:opening_hours": "2020-12-11",
          "name": "Herkku-Haarukka",
          "opening_hours": "Mo-Su 10:00-22:30",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 269120780,
        "lat": 60.2089243,
        "lon": 24.9774312,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "135 A",
          "addr:postcode": "00560",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "name": "Ravintola Arabianranta",
          "website": "http://www.compass-group.fi/Ravintolat/Helsinki/ravintola-arabianranta/"
        }
      },
      {
        "type": "node",
        "id": 278894014,
        "lat": 60.214883,
        "lon": 24.9569068,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00610",
          "addr:street": "Käpylänkuja",
          "amenity": "restaurant",
          "name": "Ravintola Karelia",
          "toilets:wheelchair": "yes",
          "website": "http://ravintolakarelia.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 282213859,
        "lat": 60.1971341,
        "lon": 24.9282438,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00240",
          "addr:street": "Esterinportti",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "Food House",
          "website": "http://www.foodhouse.fi/"
        }
      },
      {
        "type": "node",
        "id": 282532421,
        "lat": 60.1883242,
        "lon": 24.9772675,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "10 A, 7. krs.",
          "addr:postcode": "00580",
          "addr:street": "Työpajankatu",
          "amenity": "restaurant",
          "floor": "7",
          "name": "Ravintola Kattohaikara",
          "website": "http://www.kattohaikara.fi",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 282612359,
        "lat": 60.1701475,
        "lon": 24.9417929,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6",
          "addr:postcode": "00100",
          "addr:street": "Kaivokatu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "level": "1",
          "name": "Leonardo Bar & Ristorante",
          "opening_hours": "Mo-Th 11:00-22:00; Fr-Sa 11:00-23:00; Su 12:00-21:00",
          "opening_hours:covid19": "Mo-Th 11:00-19:00; Fr,Sa 11:00-21:00",
          "takeaway": "yes",
          "takeaway:covid19": "yes",
          "website": "http://www.leonardobarristorante.fi",
          "wheelchair": "yes",
          "wheelchair:description": "In the City Center (= shopping center)."
        }
      },
      {
        "type": "node",
        "id": 283089633,
        "lat": 60.1988686,
        "lon": 24.9255666,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00240",
          "addr:street": "Maistraatinportti",
          "amenity": "restaurant",
          "name": "Ravintola Belmanni",
          "toilets:wheelchair": "yes",
          "website": "https://www.scandichotels.fi/hotellit/suomi/helsinki/scandic-pasila/ravintola-ja-baari/ravintola",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 283300371,
        "lat": 60.1873527,
        "lon": 24.9591034,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4b",
          "addr:postcode": "00500",
          "addr:street": "Helsinginkatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Ton Khaow",
          "opening_hours": "Mo-Fr 10:30-22:00; Sa-Su 11:00-22:00",
          "phone": "+358 44 2422879",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 287565699,
        "lat": 60.1882343,
        "lon": 24.9428998,
        "tags": {
          "amenity": "restaurant",
          "name": "Linnangrilli"
        }
      },
      {
        "type": "node",
        "id": 290059618,
        "lat": 60.1976764,
        "lon": 24.927976,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "West Corner"
        }
      },
      {
        "type": "node",
        "id": 290062694,
        "lat": 60.2554716,
        "lon": 24.9707791,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "18",
          "addr:postcode": "00690",
          "addr:street": "Tuomarinkyläntie",
          "amenity": "restaurant",
          "name": "Ravintola Annan Kartano Oy",
          "opening_hours": "Tu-Th 11:00-15:00; Fr-Su 11:00-18:00",
          "website": "https://www.annankartano.fi/"
        }
      },
      {
        "type": "node",
        "id": 292907625,
        "lat": 60.2445547,
        "lon": 25.0439893,
        "tags": {
          "amenity": "restaurant",
          "lunch": "yes"
        }
      },
      {
        "type": "node",
        "id": 298268916,
        "lat": 60.1796809,
        "lon": 24.9239896,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "55",
          "addr:postcode": "00260",
          "addr:street": "Runeberginkatu",
          "addr:unit": "b",
          "amenity": "restaurant",
          "cuisine": "japanese;sushi",
          "email": "myyntipalvelu@tokyo55.fi",
          "name": "Tokyo55 Sushi Academy",
          "opening_hours": "Mo 11:00-14:00,16:00-23:00; Tu-Fr 11:00-14:00,16:00-00:00; Sa 13:00-23:30",
          "operator": "Kaukoravintolat Oy",
          "phone": "+358943427640",
          "takeaway": "yes",
          "website": "http://tokyo55.fi/"
        }
      },
      {
        "type": "node",
        "id": 300284784,
        "lat": 60.2587165,
        "lon": 24.9944181,
        "tags": {
          "amenity": "restaurant",
          "name": "Kahvila-ravintola Pinetto"
        }
      },
      {
        "type": "node",
        "id": 302568885,
        "lat": 60.1704434,
        "lon": 24.934,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00100",
          "addr:street": "Salomonkatu",
          "amenity": "restaurant",
          "contact:phone": "+358 45 6793388",
          "contact:website": "http://www.fujivillage.fi",
          "cuisine": "japanese",
          "name": "Fuji Village",
          "opening_hours": "Mo-Fr 11:00-15:00; Mo-Fr 17:00-22:00; Sa-Su 12:00-22:00",
          "source": "survey"
        }
      },
      {
        "type": "node",
        "id": 307463592,
        "lat": 60.1848009,
        "lon": 24.9231214,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "21-23",
          "addr:postcode": "00250",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Bihani",
          "opening_hours": "Mo-Fr 11:00-22:30;Sa-Su 12:00-22:30"
        }
      },
      {
        "type": "node",
        "id": 309677296,
        "lat": 60.1564436,
        "lon": 24.9304253,
        "tags": {
          "addr:city": "Helsinki",
          "amenity": "restaurant",
          "name": "The Dockyard"
        }
      },
      {
        "type": "node",
        "id": 309713535,
        "lat": 60.166804,
        "lon": 24.9522041,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "18",
          "addr:postcode": "00130",
          "addr:street": "Eteläranta",
          "amenity": "restaurant",
          "email": "block@dylan.fi",
          "name": "Block by Dylan",
          "opening_hours": "Mo-Fr 08:00-10:00,10:30-15:00",
          "phone": "+358405533000",
          "website": "https://www.dylan.fi/"
        }
      },
      {
        "type": "node",
        "id": 310037983,
        "lat": 60.158084,
        "lon": 24.936268,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "19",
          "addr:postcode": "00150",
          "addr:street": "Sepänkatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Seaside Garden",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa-Su 12:00-21:00"
        }
      },
      {
        "type": "node",
        "id": 310151801,
        "lat": 60.1663657,
        "lon": 24.9373841,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "20",
          "addr:postcode": "00100",
          "addr:street": "Annankatu",
          "amenity": "restaurant",
          "cuisine": "mexican",
          "name": "El Rey",
          "opening_hours": "Tu-Sa 17:00-23:00",
          "outdoor_seating": "no",
          "website": "http://www.elrey.fi/"
        }
      },
      {
        "type": "node",
        "id": 311096937,
        "lat": 60.165898,
        "lon": 24.9518837,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Dragon Phoenix"
        }
      },
      {
        "type": "node",
        "id": 311101212,
        "lat": 60.1661896,
        "lon": 24.950987,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "20",
          "addr:street": "Unioninkatu",
          "amenity": "restaurant",
          "name": "Ravintola Bank",
          "opening_hours": "Mo-Fr 11:00-14:00",
          "opening_hours:covid19": "off",
          "outdoor_seating": "no",
          "phone": "09 612 85650",
          "website": "http://www.ravintolabank.fi/"
        }
      },
      {
        "type": "node",
        "id": 313598974,
        "lat": 60.2431032,
        "lon": 25.0294792,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00700",
          "addr:street": "Väärämäentie",
          "addr:unit": "B",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Papa's Pizza",
          "opening_hours": "Mo-We10:00-22:00; Th-Fr 10:00-24:00; Sa 10:00-23:00; Su 10:00-22:00",
          "phone": "+358 9 3474710"
        }
      },
      {
        "type": "node",
        "id": 315519186,
        "lat": 60.184836,
        "lon": 24.9532716,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "7",
          "addr:postcode": "00530",
          "addr:street": "Agricolankatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Ravintola Salpimienta",
          "website": "http://www.salpimienta.fi/"
        }
      },
      {
        "type": "node",
        "id": 316259847,
        "lat": 60.181093,
        "lon": 24.9252673,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "56",
          "addr:postcode": "00260",
          "addr:street": "Runeberginkatu",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "name": "Lie Mi"
        }
      },
      {
        "type": "node",
        "id": 316554072,
        "lat": 60.1820713,
        "lon": 24.9241141,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "8",
          "addr:postcode": "00260",
          "addr:street": "Ruusulankatu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Villetta",
          "opening_hours": "Mo-Th 15:00-22:00; Fr 15:00-23:00; Sa 12:00-23:00; Su 13:00-20:00",
          "website": "http://www.villetta.fi/"
        }
      },
      {
        "type": "node",
        "id": 319887586,
        "lat": 60.1674531,
        "lon": 24.9244236,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "29",
          "addr:postcode": "00180",
          "addr:street": "Lapinlahdenkatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Singapore",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 319887587,
        "lat": 60.167309,
        "lon": 24.9255287,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "25",
          "addr:postcode": "00180",
          "addr:street": "Lapinlahdenkatu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Zio Pepe"
        }
      },
      {
        "type": "node",
        "id": 319917196,
        "lat": 60.1814092,
        "lon": 24.9270102,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "56",
          "addr:postcode": "00260",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "name": "Ravintola Carelia",
          "opening_hours:covid19": "off",
          "url": "http://www.carelia.info/",
          "website": "https://ravintolacarelia.fi/"
        }
      },
      {
        "type": "node",
        "id": 322801579,
        "lat": 60.1683307,
        "lon": 24.9622162,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00160",
          "addr:street": "Rahapajankatu",
          "amenity": "restaurant",
          "name": "Bellevue",
          "opening_hours:covid19": "off",
          "website": "http://restaurantbellevue.com/"
        }
      },
      {
        "type": "node",
        "id": 324162328,
        "lat": 60.1587015,
        "lon": 24.934894,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Nerone"
        }
      },
      {
        "type": "node",
        "id": 324162964,
        "lat": 60.1637353,
        "lon": 24.9456106,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1a",
          "addr:postcode": "00120",
          "addr:street": "Ratakatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Himalaya",
          "opening_hours": "Mo-Fr 11:00-23:00; Sa-Su 12:00-23:00",
          "payment:bitcoin": "yes",
          "website": "www.himalaya.fi",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 324163194,
        "lat": 60.1723443,
        "lon": 24.9472155,
        "tags": {
          "access:covid19": "no",
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "cuisine": "thai",
          "delivery:covid19": "yes",
          "diet:vegetarian": "yes",
          "drive_through:covid19": "no",
          "name": "Ryan Thai",
          "opening_hours": "Mo-Su 11:00-21:00",
          "opening_hours:covid19": "Mo-Su 11:00-21:00",
          "takeaway:covid19": "yes"
        }
      },
      {
        "type": "node",
        "id": 330177842,
        "lat": 60.1578965,
        "lon": 24.8806749,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "mediterranean",
          "lunch": "yes",
          "name": "Persilja",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa 12:00-22:00; Su 12:00-21:00",
          "website": "https://www.ravintolapersilja.fi/"
        }
      },
      {
        "type": "node",
        "id": 330264523,
        "lat": 60.1606678,
        "lon": 24.8868653,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Ka-Shing"
        }
      },
      {
        "type": "node",
        "id": 331439813,
        "lat": 60.1534181,
        "lon": 24.8814357,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "asian",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Thai & China",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa-Su 12:00-21:00"
        }
      },
      {
        "type": "node",
        "id": 340927266,
        "lat": 60.1716898,
        "lon": 24.9542087,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00170",
          "amenity": "restaurant",
          "diet:vegetarian": "yes",
          "name": "Bei Fang",
          "opening_hours": "Mo-Fr 11:00-22:00, Sa 12:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 344366685,
        "lat": 60.1742447,
        "lon": 24.9528392,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "16",
          "addr:postcode": "00170",
          "addr:street": "Snellmaninkatu",
          "amenity": "restaurant",
          "cuisine": "japanese",
          "name": "Zen Sushi",
          "website": "https://zensushi.fi/"
        }
      },
      {
        "type": "node",
        "id": 344401677,
        "lat": 60.188325,
        "lon": 24.9631859,
        "tags": {
          "addr:housenumber": "58-60",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "level": "1",
          "name": "Koi Bistro Koi",
          "opening_hours": "ma-to 11.00-21.00 pe 11.00-22.00 su 12.00-20.00"
        }
      },
      {
        "type": "node",
        "id": 347379354,
        "lat": 60.1633009,
        "lon": 24.9344955,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "32",
          "addr:postcode": "00120",
          "addr:street": "Bulevardi",
          "amenity": "restaurant",
          "check_date:opening_hours": "2021-07-12",
          "diet:vegetarian": "yes",
          "name": "Pizzeria Dennis",
          "opening_hours": "Mo-Th 11:00-22:00; Fr 11:00-23:00; Sa 12:00-23:00; Su 12:00-21:00",
          "website": "https://www.dennis.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 354513857,
        "lat": 60.1802597,
        "lon": 24.9499873,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Areenan talo",
          "addr:housenumber": "11",
          "addr:postcode": "00530",
          "addr:street": "Siltasaarenkatu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Ristorante Da Vinci",
          "old_name": "Cafe Java",
          "opening_hours": "Mo-Th 10:30-22:00; Fr 10:30-23:00; Sa 11:30-23:00; Su 12:00-21:00",
          "website": "http://www.davincibarristorante.fi/"
        }
      },
      {
        "type": "node",
        "id": 355149891,
        "lat": 60.1723891,
        "lon": 24.9539811,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00170",
          "addr:street": "Vironkatu",
          "amenity": "restaurant",
          "beer": "yes",
          "cuisine": "kebab",
          "name": "Keko",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 356283889,
        "lat": 60.1913636,
        "lon": 24.945149,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00510",
          "addr:street": "Kajaaninkatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Muskan"
        }
      },
      {
        "type": "node",
        "id": 368998838,
        "lat": 60.1850796,
        "lon": 24.9420749,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "36",
          "addr:postcode": "00530",
          "addr:street": "Kolmas linja",
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Korphai"
        }
      },
      {
        "type": "node",
        "id": 370653468,
        "lat": 60.2531318,
        "lon": 25.0615511,
        "tags": {
          "amenity": "restaurant",
          "created_by": "Potlatch 0.10f",
          "name": "Tattarihovi"
        }
      },
      {
        "type": "node",
        "id": 370893405,
        "lat": 60.199617,
        "lon": 24.8776374,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "regional",
          "layer": "1",
          "name": "Ukko Munkki"
        }
      },
      {
        "type": "node",
        "id": 371554820,
        "lat": 60.1908082,
        "lon": 24.9462775,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Weeruska",
          "opening_hours": "Mo-Th 11:00-22:00; Fr 11:00-23:00; Sa 12:00-23:00; Su off",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 389078466,
        "lat": 60.1691694,
        "lon": 24.9390079,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "18",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "email": "info@classicpizza.fi",
          "level": "1",
          "name": "Classic Pizza",
          "opening_hours": "Mo-Th 10:30-22:00; Fr 10:30-24:00; Sa 11:00-24:00; Su 11:00-22:00",
          "phone": "+358 44 033 7609",
          "website": "https://classicpizza.fi/"
        }
      },
      {
        "type": "node",
        "id": 391849313,
        "lat": 60.2295647,
        "lon": 25.0214932,
        "tags": {
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Unicafe Viikuna",
          "website": "http://www.unicafe.fi/en/lunch/restaurants#viikuna"
        }
      },
      {
        "type": "node",
        "id": 391851032,
        "lat": 60.2279567,
        "lon": 25.0211655,
        "tags": {
          "amenity": "restaurant",
          "brand": "Amica",
          "name": "Amica Elviira"
        }
      },
      {
        "type": "node",
        "id": 392088998,
        "lat": 60.191201,
        "lon": 24.9448683,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "23",
          "addr:postcode": "00510",
          "addr:street": "Porvoonkatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Frutti di mare",
          "old_name": "Efes"
        }
      },
      {
        "type": "node",
        "id": 401231811,
        "lat": 60.1988665,
        "lon": 24.9358236,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "12",
          "addr:postcode": "00520",
          "addr:street": "Opastinsilta",
          "addr:unit": "B",
          "amenity": "restaurant",
          "description:covid19": "Avoinna vain virastokeskuksessa työskenteleville henkilöille",
          "email": "keltasirkku@leijonacatering.fi",
          "name": "Keltasirkku",
          "opening_hours": "Mo-Fr 07:30-15:00",
          "opening_hours:covid19": "same",
          "operator": "Leijona Catering",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "yes",
          "payment:smartum_note": "yes",
          "phone": "+358 104320710",
          "takeaway:covid19": "yes",
          "website": "http://ruokalistat.leijonacatering.fi/#/4fd75ded-e510-e511-892b-78e3b50298fc"
        }
      },
      {
        "type": "node",
        "id": 407891148,
        "lat": 60.1773389,
        "lon": 24.9504634,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00530",
          "addr:street": "Siltasaarenkatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "diet:vegetarian": "yes",
          "name": "Himshikhar (Nepalese kitchen)",
          "name:en": "Basecamp",
          "opening_hours": "Mo-Fr 12:00-23:00; Sa-Su 12:00-23:00",
          "phone": "09-5626995",
          "toilets:wheelchair": "no",
          "website": "http://www.basecampnepal.fi/hakaniemi/fi/index.php",
          "wheelchair": "limited",
          "wheelchair:description": "There are 6 tables suitable for wheelchair users downstairs; most of the restaurant is located upstairs with 20 steps. / Esteetön sisäänkäynti ja alakerta. Yläkertaan 20 rappusta."
        }
      },
      {
        "type": "node",
        "id": 408106266,
        "lat": 60.1614688,
        "lon": 24.9408081,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "16",
          "addr:postcode": "00120",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "name": "Fredan murkina",
          "note": "two conflicting sets of opening times on the window... I took the times at which it is open according to both times",
          "opening_hours": "Mo-Fr 8:00-16:00",
          "website": "https://www.facebook.com/fredanmurkina"
        }
      },
      {
        "type": "node",
        "id": 408111943,
        "lat": 60.1662457,
        "lon": 24.9340908,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "36",
          "addr:postcode": "00100",
          "addr:street": "Fredrikinkatu",
          "address": "Fredrikinkatu 36",
          "amenity": "restaurant",
          "name": "Fuku",
          "opening_hours": "Mo-Fr 11:00-15:00, 16:30-22:00; Sa 12:00-16:30, 17:00-22:00; Su 13:00-20:00",
          "website": "https://www.fukuhelsinki.com",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 408115934,
        "lat": 60.1606229,
        "lon": 24.9416739,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "10",
          "addr:postcode": "00150",
          "addr:street": "Laivurinkatu",
          "amenity": "restaurant",
          "brunch": "yes",
          "diet:vegetarian": "yes",
          "email": "viiskulma@skiffer.fi",
          "name": "The Old Skiffer",
          "opening_hours": "Mo-Tu 15:00-01:00; We-Fr 15:00-02:00; Sa 12:00-02:00; Su 12:00-00:00",
          "opening_hours:brunch": "Sa 11:00-14:00; Su 10:00-14:00",
          "phone": "+358 45 641 9955",
          "website": "https://www.skiffer.fi/ravintolat/the-old-skiffer.html"
        }
      },
      {
        "type": "node",
        "id": 410088113,
        "lat": 60.1742542,
        "lon": 24.9507776,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00170",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "diet:vegetarian": "yes",
          "name": "Family",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa-Su 12:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 411307530,
        "lat": 60.1669578,
        "lon": 24.9472796,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "14",
          "addr:postcode": "00130",
          "addr:street": "Eteläesplanadi",
          "amenity": "restaurant",
          "email": "myyntipalvelu@royalravintolat.com",
          "name": "Ravintola Savoy",
          "name:sv": "Restaurang Savoy",
          "phone": "+358961285300",
          "toilets:wheelchair": "no",
          "website": "http://www.ravintolasavoy.fi",
          "wheelchair": "yes",
          "wikidata": "Q29982245"
        }
      },
      {
        "type": "node",
        "id": 412767458,
        "lat": 60.1735377,
        "lon": 24.9295617,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Shubha Kamana",
          "website": "http://www.shubhakamana.fi/"
        }
      },
      {
        "type": "node",
        "id": 415400273,
        "lat": 60.2385493,
        "lon": 25.1100607,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00970",
          "addr:street": "Pallaksentie",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Ravintola Il Treno",
          "opening_hours": "Su-Th 09:00-02:00, Fr,Sa 09:00-04:30",
          "website": "http://www.iltreno.fi/"
        }
      },
      {
        "type": "node",
        "id": 415938560,
        "lat": 60.1803689,
        "lon": 24.9249583,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "27",
          "addr:postcode": "00260",
          "addr:street": "Töölönkatu",
          "amenity": "restaurant",
          "cuisine": "indian",
          "name": "Rumi",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa, 12:00-21:00",
          "url": "http://www.dennis.fi/index.php?id=93"
        }
      },
      {
        "type": "node",
        "id": 415938564,
        "lat": 60.1740712,
        "lon": 24.9196649,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00100",
          "addr:street": "Caloniuksenkatu",
          "amenity": "restaurant",
          "name": "Falafel ky",
          "opening_hours": "Mo-Fr 11:00-18:00; Sa 12:00-18:00",
          "website": "http://www.ravintolaopas.com/tiedot/Helsinki/Falafel_Ky/"
        }
      },
      {
        "type": "node",
        "id": 420368901,
        "lat": 60.2601512,
        "lon": 24.9554167,
        "tags": {
          "access:covid19": "yes",
          "addr:housenumber": "12",
          "addr:postcode": "00690",
          "addr:street": "Lainlukijantie",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through:covid19": "no",
          "name": "Keittiö & Baari Kulma",
          "opening_hours": "We-Fr 16:00-22:00, Sa 12:00-22:00; Su off, Su 12:00-19:00",
          "opening_hours:covid19": "open",
          "phone": "+358 50 313 0004",
          "takeaway:covid19": "yes",
          "website": "https://kulmakeittio.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 423109516,
        "lat": 60.1387898,
        "lon": 24.9892304,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "A 10",
          "addr:postcode": "00190",
          "addr:street": "Suomenlinna",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Pizzeria Nikolai",
          "source": "local_knowledge",
          "summer_terrace": "yes",
          "website": "http://www.restaurantwalhalla.com/pizzeria.php"
        }
      },
      {
        "type": "node",
        "id": 423109571,
        "lat": 60.1445013,
        "lon": 24.9863759,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "B 1",
          "addr:postcode": "00190",
          "addr:street": "Suomenlinna",
          "amenity": "restaurant",
          "cuisine": "regional;Finnish",
          "high_chair": "yes",
          "lunch": "yes",
          "name": "Susisaaren Ruokala",
          "opening_hours": "Mo-Sa 11:00-22:30; Su 11:00-18:00",
          "outdoor_seating": "yes",
          "website": "https://www.susisaarenruokala.fi/"
        }
      },
      {
        "type": "node",
        "id": 426911744,
        "lat": 60.1620091,
        "lon": 24.9405138,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "23",
          "addr:postcode": "00120",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "contact:foursquare": "https://foursquare.com/v/ravintola-annapurna/4b5439daf964a520fcb427e3",
          "contact:website": "http://www.annapurna.fi/",
          "contact:yelp": "http://yelp.com/biz/annapurna-helsinki",
          "cuisine": "nepalese",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Ravintola Annapurna",
          "opening_hours": "Mo-Th 11:00-22:00; Fr 11:00-23:00; Sa 12:00-23:00; Su 12:00-22:00",
          "phone": "+35809647847",
          "ref:vatin": "FI2426059-5",
          "smoking": "no"
        }
      },
      {
        "type": "node",
        "id": 430391387,
        "lat": 60.1882764,
        "lon": 24.9179546,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "98",
          "addr:postcode": "00250",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "established": "1938",
          "name": "Sports Bar Töölö",
          "opening_hours": "Mo-Su 09:00-02:00",
          "opening_hours:covid19": "off",
          "opening_hours:kitchen": "Mo-Su 10:30-21:00",
          "website": "http://sportbartoolo.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 440629539,
        "lat": 60.1851414,
        "lon": 24.9418367,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "noodle",
          "name": "Noodle story",
          "opening_hours": "mo-sa 11:00-20:00"
        }
      },
      {
        "type": "node",
        "id": 443688994,
        "lat": 60.2517417,
        "lon": 25.0081101,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Hua Fu Jiu Lou",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 446775111,
        "lat": 60.1819698,
        "lon": 24.9477895,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "11",
          "addr:postcode": "00530",
          "addr:street": "Toinen linja",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "China Szechuan",
          "website": "https://www.facebook.com/china.szechuan.helsinki",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 446775129,
        "lat": 60.1820329,
        "lon": 24.9508157,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4",
          "addr:postcode": "00530",
          "addr:street": "Porthaninkatu",
          "amenity": "restaurant",
          "cuisine": "thai;fusion",
          "established": "2014",
          "name": "Bangkok9",
          "opening_hours": "Mo-Th 11:00-21:30,Fr-Sa 11:00-22:00,Su 12:00-20:00",
          "opening_hours:covid19": "open",
          "phone": "+358 504014645",
          "website": "https://www.bangkok9restaurant.com/"
        }
      },
      {
        "type": "node",
        "id": 448156822,
        "lat": 60.1686704,
        "lon": 24.9522829,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00170",
          "addr:street": "Sofiankatu",
          "amenity": "restaurant",
          "cuisine": "russian",
          "name": "Samovar",
          "opening_hours": "\"for request only\"",
          "website": "http://www.asrestaurants.com/FI/ravintolat/samovar"
        }
      },
      {
        "type": "node",
        "id": 448156823,
        "lat": 60.1684753,
        "lon": 24.952034,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4",
          "addr:postcode": "00170",
          "addr:street": "Sofiankatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "email": "viatribunali@sonofapunch.com",
          "lunch": "yes",
          "name": "Via Tribunali Keskusta",
          "opening_hours": "Mo-Th 11:00-22:00; Fr 11:00-00:00; Sa 12:00-00:00; Su 12:00-20:00",
          "opening_hours:lunch": "Mo-Fr 11:30-15:00",
          "phone": "+358 50 3288 664",
          "website": "http://www.viatribunali.fi/"
        }
      },
      {
        "type": "node",
        "id": 448156834,
        "lat": 60.168329,
        "lon": 24.9472939,
        "tags": {
          "access:covid19": "no",
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00100",
          "addr:street": "Kluuvikatu",
          "amenity": "restaurant",
          "delivery:covid19": "yes",
          "drive_through:covid19": "no",
          "name": "Ravintola EMO",
          "opening_hours": "Mo-Fr 11:30-00:00; Sa 14:00-01:00",
          "opening_hours:covid19": "Mo-Fr 11:30-00:00; Sa 14:00-01:00",
          "phone": "+358105050900",
          "takeaway:covid19": "yes",
          "website": "http://www.emo-Ravintola.fi",
          "wikidata": "Q50276335"
        }
      },
      {
        "type": "node",
        "id": 448759226,
        "lat": 60.2014718,
        "lon": 25.1509612,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "10",
          "addr:postcode": "00990",
          "addr:street": "Aurinkoranta",
          "amenity": "restaurant",
          "bar": "yes",
          "cuisine": "indian",
          "name": "Ravintola Loisto",
          "outdoor_seating": "yes",
          "phone": "093214005",
          "website": "https://www.ravintolaloisto.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 456825589,
        "lat": 60.2161035,
        "lon": 24.9850075,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00560",
          "addr:street": "Katariina Saksilaisen katu",
          "amenity": "restaurant",
          "name": "Koskenranta",
          "terrace": "yes",
          "website": "http://koskenranta.net/fi/etusivu/"
        }
      },
      {
        "type": "node",
        "id": 462752378,
        "lat": 60.2026858,
        "lon": 24.967195,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Arabia",
          "addr:housenumber": "109-111",
          "addr:postcode": "00560",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "cuisine": "american",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "arabia.chicos@sok.fi",
          "level": "1",
          "name": "Chico's",
          "opening_hours": "Mo-Sa 09:00-22:00; Su 12:00-21:00",
          "opening_hours:covid19": "off",
          "payment:cash": "yes",
          "payment:debit_cards": "yes",
          "payment:mastercard": "yes",
          "payment:visa": "yes",
          "phone": "+358 10 766 3920",
          "source": "local knowledge",
          "toilets:wheelchair": "yes",
          "website": "https://www.raflaamo.fi/fi/helsinki/chicos-arabia/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 462752387,
        "lat": 60.2027476,
        "lon": 24.9685203,
        "tags": {
          "access:covid19": "yes",
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Arabia",
          "addr:housenumber": "109-111",
          "addr:postcode": "00560",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "delivery:covid19": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through:covid19": "no",
          "level": "2",
          "lunch:buffet": "Mo-Fr 10:00-15:00",
          "name": "China Flavor",
          "opening_hours": "Mo-Fr 10:00-21:00; Sa 11:00-18:00; Su 12:00-18:00",
          "opening_hours:covid19": "Mo-Fr 11:00-19:30; Sa 11:00-18:00; Su 12:00-18:00",
          "reservation": "yes",
          "source": "local knowledge",
          "takeaway:covid19": "yes",
          "website": "http://www.chinaflavor.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 464605149,
        "lat": 60.2753793,
        "lon": 24.9544653,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "17",
          "addr:postcode": "00690",
          "addr:street": "Laamannintie",
          "amenity": "restaurant",
          "name": "Wanha Pehtoori",
          "note": "Enemmän kahvila (vaikka sieltä saa olutta ja ruokaa)",
          "phone": "+358 9 794 726",
          "piste:amenity": "cafe",
          "smoking": "outside",
          "source": "survey",
          "website": "http://www.wanhapehtoori.com/"
        }
      },
      {
        "type": "node",
        "id": 464729844,
        "lat": 60.1873363,
        "lon": 24.9218792,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00250",
          "addr:street": "Urheilukatu",
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Bollis Bar & Bistro",
          "opening_hours:covid19": "off",
          "opening_hours:lunch": "Mo-Fr 11:00-14:00",
          "website": "https://www.bollis.fi/"
        }
      },
      {
        "type": "node",
        "id": 465503312,
        "lat": 60.1955004,
        "lon": 25.0529287,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Pizzeria Aromi"
        }
      },
      {
        "type": "node",
        "id": 468454402,
        "lat": 60.2022496,
        "lon": 24.9684118,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "11",
          "addr:postcode": "00560",
          "addr:street": "Toukolankatu",
          "amenity": "restaurant",
          "name": "Arcada studerandekår (ASK)",
          "office": "association",
          "website": "http://www.asken.fi/"
        }
      },
      {
        "type": "node",
        "id": 469204783,
        "lat": 60.1642009,
        "lon": 24.9404183,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "10",
          "addr:street": "Annankatu",
          "amenity": "restaurant",
          "name": "Mo Cafe",
          "website": "mocafe.fi"
        }
      },
      {
        "type": "node",
        "id": 471408578,
        "lat": 60.1743638,
        "lon": 24.9583995,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "25",
          "addr:postcode": "00170",
          "addr:street": "Meritullinkatu",
          "amenity": "restaurant",
          "cuisine": "german",
          "level": "1",
          "lunch": "yes",
          "name": "Zinnkeller",
          "opening_hours": "Mo,Tu 11:00-23:00; We-Fr 11:00-24:00, Sa 12:00-23:00",
          "website": "http://kolumbus.fi/zinnkeller/"
        }
      },
      {
        "type": "node",
        "id": 472662935,
        "lat": 60.1572825,
        "lon": 24.9334173,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "turkish",
          "name": "Ani",
          "opening_hours": "Mo-Fr 10:30-23:00; Sa-Su 11:00-23:00",
          "website": "http://ani.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 473857318,
        "lat": 60.1905634,
        "lon": 24.9782464,
        "tags": {
          "amenity": "restaurant",
          "name": "Rannikko"
        }
      },
      {
        "type": "node",
        "id": 473857326,
        "lat": 60.1983203,
        "lon": 24.9625563,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "China Inn"
        }
      },
      {
        "type": "node",
        "id": 474411775,
        "lat": 60.1856153,
        "lon": 24.9223967,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00250",
          "addr:street": "Sallinkatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Hong Kong",
          "opening_hours": "Tu-Fr 11:00-22:00; Sa,Su 12:00-22:00",
          "website": "http://ravintolahongkong.fi/"
        }
      },
      {
        "type": "node",
        "id": 475540673,
        "lat": 60.1892173,
        "lon": 24.9569438,
        "tags": {
          "CHECKME": "Putkiremontin ajan kiinni",
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Peking",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa-Su 12:00-22:00",
          "website": "https://www.ravintolapeking.fi/"
        }
      },
      {
        "type": "node",
        "id": 480415576,
        "lat": 60.1958667,
        "lon": 24.9442666,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintola Antell"
        }
      },
      {
        "type": "node",
        "id": 480755239,
        "lat": 60.2744453,
        "lon": 25.0340252,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza;kebab",
          "name": "Evin"
        }
      },
      {
        "type": "node",
        "id": 484268873,
        "lat": 60.1670915,
        "lon": 24.9325559,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "42",
          "addr:postcode": "00100",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "email": "freda@sushibar.fi",
          "name": "Sushibar + wine",
          "opening_hours": "Mo-Th 11:00-22:00; Fr 11:00-23:00; Sa 14:00-23:00; Su 14:00-21:00",
          "phone": "+358106668454",
          "website": "https://www.sushibar.fi/"
        }
      },
      {
        "type": "node",
        "id": 485479537,
        "lat": 60.1929665,
        "lon": 24.9302564,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Motorest",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 492502560,
        "lat": 60.2512609,
        "lon": 25.0257572,
        "tags": {
          "amenity": "restaurant",
          "name": "Pinkan lounas"
        }
      },
      {
        "type": "node",
        "id": 492890531,
        "lat": 60.1970763,
        "lon": 25.043685,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Lounaskahvila SorviS",
          "opening_hours": "Mo-Fr 08:30-14:30",
          "phone": "+358 9 773 5905",
          "website": "www.sport-catering.fi"
        }
      },
      {
        "type": "node",
        "id": 503650289,
        "lat": 60.1889217,
        "lon": 24.919004,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "36",
          "addr:postcode": "00250",
          "addr:street": "Urheilukatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Phad Thai",
          "opening_hours": "Mo-Su 11:00-21:00",
          "website": "http://phadthai.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 510596910,
        "lat": 60.2750469,
        "lon": 24.989496,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00740",
          "addr:street": "Jousimiehentie",
          "amenity": "restaurant",
          "name": "Ravintola Rubiini"
        }
      },
      {
        "type": "node",
        "id": 526787866,
        "lat": 60.1614099,
        "lon": 24.9143632,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00180",
          "addr:street": "Jaalaranta",
          "amenity": "restaurant",
          "cuisine": "indian",
          "name": "Ravintola Poiju",
          "opening_hours": "Mo-Th 11:00-01:00; Fr 11:00-02:00; Sa 12:00-02:00; Su 12:00-24:00",
          "website": "https://www.ravintolapoiju.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 528057805,
        "lat": 60.170973,
        "lon": 24.9333893,
        "tags": {
          "access:covid19": "no",
          "amenity": "restaurant",
          "delivery:covid19": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "drive_through:covid19": "no",
          "name": "Farang",
          "opening_hours": "Mo-Sa 12:00-20:00; Su 14:00-20:00",
          "opening_hours:covid19": "Mo-Sa 12:00-20:00; Su 14:00-20:00",
          "takeaway:covid19": "yes",
          "website": "https://www.farang.fi/"
        }
      },
      {
        "type": "node",
        "id": 528902652,
        "lat": 60.1818253,
        "lon": 24.9251891,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "5",
          "addr:postcode": "00260",
          "addr:street": "Ruusulankatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Linko"
        }
      },
      {
        "type": "node",
        "id": 535073022,
        "lat": 60.1576583,
        "lon": 24.9347707,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "38",
          "addr:street": "Tehtaankatu",
          "amenity": "restaurant",
          "email": "info@ilbucatino.fi",
          "name": "Il Bucatino",
          "opening_hours": "Tu-Fr 11:00-14:30,17:00-23:00; Sa 17:00-23:00",
          "website": "http://ilbucatino.fi/"
        }
      },
      {
        "type": "node",
        "id": 548577328,
        "lat": 60.1744676,
        "lon": 24.9527926,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "16",
          "addr:postcode": "00170",
          "addr:street": "Snellmaninkatu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "16 Boom"
        }
      },
      {
        "type": "node",
        "id": 566621978,
        "lat": 60.2061416,
        "lon": 24.8770359,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00350",
          "addr:street": "Raumantie",
          "amenity": "restaurant",
          "name": "Ravintola Kivitorppa",
          "website": "https://www.raflaamo.fi/fi/helsinki/kivitorppa",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 568360077,
        "lat": 60.1958582,
        "lon": 24.9631658,
        "tags": {
          "amenity": "restaurant",
          "guard:operator": "Securitas",
          "lunch": "yes",
          "name": "Hermannin Kukko",
          "opening_hours": "Mo-Su 09:00-02:00"
        }
      },
      {
        "type": "node",
        "id": 600082952,
        "lat": 60.1688311,
        "lon": 24.9526324,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00170",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Savotta",
          "opening_hours": "Mo-Sa 12:00-23:00; Su 17:00-22:00",
          "website": "http://www.asrestaurants.com/FI/ravintolat/savotta"
        }
      },
      {
        "type": "node",
        "id": 600082955,
        "lat": 60.171071,
        "lon": 24.9577282,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "5",
          "addr:postcode": "00170",
          "addr:street": "Kirkkokatu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "email": "palaute@ravintolarodolfo.fi",
          "lunch": "yes",
          "name": "Rodolfo",
          "opening_hours": "Mo-Th 11:00-23:00; Fr 11:00-24:00; Sa 14:00-24:00",
          "opening_hours:covid19": "off",
          "phone": "+358 9 625 024",
          "start_date": "1970",
          "website": "https://www.ravintolarodolfo.fi/"
        }
      },
      {
        "type": "node",
        "id": 600082969,
        "lat": 60.1724262,
        "lon": 24.9586072,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "13",
          "addr:postcode": "00170",
          "addr:street": "Meritullinkatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "diet:vegetarian": "yes",
          "name": "Nepali Chulo",
          "opening_hours": "Mo-Fr 10:30-22:00, Sa-Su 12:30-22:00",
          "phone": "0401785022",
          "takeaway": "yes",
          "url": "http://www.kasakka.fi/",
          "website": "http://nepalichulo.fi/"
        }
      },
      {
        "type": "node",
        "id": 600082973,
        "lat": 60.1741343,
        "lon": 24.9592887,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00170",
          "addr:street": "Liisankatu",
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Kruna Restaurang & Bar",
          "url": "http://www.kruna.fi/",
          "website": "http://kruna.fi/"
        }
      },
      {
        "type": "node",
        "id": 600082975,
        "lat": 60.1743607,
        "lon": 24.9588995,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "5",
          "addr:postcode": "00170",
          "addr:street": "Liisankatu",
          "amenity": "restaurant",
          "cuisine": "regional",
          "email": "kolmekruunua@sijo.fi",
          "high_chair": "yes",
          "level": "1",
          "name": "Ravintola Kolme kruunua",
          "opening_hours": "Su 14:00-01:00; Mo-Tu 16:00-01:00; We-Sa 16:00-03:00",
          "phone": "+358 9 135 4172",
          "website": "https://kolmekruunua.fi/"
        }
      },
      {
        "type": "node",
        "id": 600091157,
        "lat": 60.1710198,
        "lon": 24.9467253,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00100",
          "addr:street": "Kaisaniemenkatu",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "lost@lostinhelsinki.fi",
          "lunch": "yes",
          "name": "Lost In Helsinki",
          "opening_hours": "Mo-Tu 15:00-24:00; We-Th 15:00-01:00; Fr-Sa 15:00-02:00; Su 15:00-24:00",
          "outdoor_seating": "no",
          "phone": "+358 (9) 652 147",
          "website": "https://www.lostinhelsinki.fi/"
        }
      },
      {
        "type": "node",
        "id": 600096224,
        "lat": 60.1605118,
        "lon": 24.9591308,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00140",
          "addr:street": "Olympiaranta",
          "amenity": "restaurant",
          "name": "Tuuliviiri Cafe & Restaurant",
          "website": "https://www.facebook.com/ravintolatuuliviiri",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 600388161,
        "lat": 60.1632279,
        "lon": 24.9417447,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "18",
          "addr:postcode": "00120",
          "addr:street": "Iso Roobertinkatu",
          "amenity": "restaurant",
          "cuisine": "asian;sushi",
          "email": "moshimoshi2017@hotmail.com",
          "name": "Moshi Moshi",
          "opening_hours": "Mo-Th 10:30-21:00; Fr 10:30-22:00; Sa 12:00-22:00; Su 12:00-21:00",
          "phone": "+358451252468",
          "website": "https://www.moshimoshi-restaurant.com/"
        }
      },
      {
        "type": "node",
        "id": 600394447,
        "lat": 60.1680971,
        "lon": 24.9548772,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "5",
          "addr:postcode": "00170",
          "addr:street": "Pohjoisesplanadi",
          "addr:unit": "A",
          "alt_name": "Olo",
          "amenity": "restaurant",
          "cuisine": "finedining",
          "name": "Ravintola Olo",
          "url": "http://www.olo-ravintola.fi/",
          "website": "https://olo-ravintola.fi/",
          "wheelchair": "yes",
          "wheelchair:description": "Esteetön sisäänpääsy Helenankadun puolelta.",
          "wikidata": "Q82844"
        }
      },
      {
        "type": "node",
        "id": 600394449,
        "lat": 60.166354,
        "lon": 24.9479134,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:street": "Kasarmikatu",
          "amenity": "restaurant",
          "cuisine": "mexican",
          "name": "Cantina West",
          "opening_hours": "off",
          "url": "http://www.cantinawest.net",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 600394451,
        "lat": 60.1679484,
        "lon": 24.9500488,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "21",
          "addr:postcode": "00100",
          "addr:street": "Pohjoisesplanadi",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Ravintola Aino (Finnish cuisine)",
          "website": "http://ravintolaaino.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 600394453,
        "lat": 60.1679822,
        "lon": 24.9512837,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "17",
          "addr:postcode": "00170",
          "addr:street": "Pohjoisesplanadi",
          "amenity": "restaurant",
          "name": "Roster Helsinki",
          "website": "https://rosterhelsinki.com/"
        }
      },
      {
        "type": "node",
        "id": 600396821,
        "lat": 60.1729461,
        "lon": 24.956653,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00170",
          "addr:street": "Mariankatu",
          "amenity": "restaurant",
          "cuisine": "korean",
          "lunch": "yes",
          "name": "Korea house",
          "opening_hours": "Mo-Fr 11:00-23:00; Sa 12:00-23:00",
          "phone": "09-135 7158",
          "url": "http://www.koreahouse.fi/"
        }
      },
      {
        "type": "node",
        "id": 600428205,
        "lat": 60.1656635,
        "lon": 24.9443157,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "10",
          "addr:postcode": "00130",
          "addr:street": "Ludviginkatu",
          "amenity": "restaurant",
          "name": "Grotesk Restaurant & Bar",
          "opening_hours": "Tu-Sa 17:00-24:00",
          "website": "https://www.grotesk.fi/"
        }
      },
      {
        "type": "node",
        "id": 603743672,
        "lat": 60.1673544,
        "lon": 24.9439817,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00130",
          "addr:street": "Pohjoisesplanadi",
          "amenity": "restaurant",
          "name": "Ravintola Teatteri",
          "opening_hours:covid19": "off",
          "url": "http://www.royalravintolat.com/teatteri/",
          "website": "http://www.teatteri.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 603743681,
        "lat": 60.1665042,
        "lon": 24.9447157,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "addr:street": "Eteläesplanadi",
          "amenity": "restaurant",
          "cuisine": "indian",
          "name": "Samrat",
          "website": "http://www.samrat.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 603743685,
        "lat": 60.1667106,
        "lon": 24.9444947,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "addr:street": "Eteläesplanadi",
          "amenity": "restaurant",
          "name": "Manhattan steak house",
          "website": "http://www.manhattansteakhouse.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 603743691,
        "lat": 60.1670129,
        "lon": 24.9455671,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "20",
          "addr:postcode": "00130",
          "addr:street": "Eteläesplanadi",
          "amenity": "restaurant",
          "name": "Ravintola Bronda",
          "phone": "+358 10 322 9388",
          "smoking": "no",
          "website": "https://ravintolabronda.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 603743719,
        "lat": 60.1670766,
        "lon": 24.9493066,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "8",
          "addr:postcode": "00100",
          "addr:street": "Eteläesplanadi",
          "amenity": "restaurant",
          "cuisine": "regional",
          "established": "2014",
          "lunch": "yes",
          "name": "Pompier ESPA",
          "website": "https://pompier.fi/espa/"
        }
      },
      {
        "type": "node",
        "id": 603743724,
        "lat": 60.1670958,
        "lon": 24.9504043,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "addr:street": "Eteläesplanadi",
          "amenity": "restaurant",
          "cuisine": "japanese",
          "name": "Kita",
          "website": "http://www.kitaravintola.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 603743752,
        "lat": 60.1680403,
        "lon": 24.9520009,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Salutorget",
          "website": "https://www.royalravintolat.com/salutorget/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 603743765,
        "lat": 60.170133,
        "lon": 24.9584748,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00170",
          "addr:street": "Meritullinkatu",
          "amenity": "restaurant",
          "cuisine": "regional;french",
          "delivery:covid19": "no",
          "name": "Kuurna",
          "opening_hours:covid19": "Th-Sa 15:00-21:00; Su 15:00-20:00",
          "takeaway:covid19": "yes",
          "website": "https://www.kuurna.fi"
        }
      },
      {
        "type": "node",
        "id": 603767081,
        "lat": 60.166426,
        "lon": 24.934438,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "47",
          "addr:postcode": "00100",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Golden Leaf",
          "opening_hours": "Mo-Th 11:00-22:00; Fr 11:00-23:00; Sa 12:00-23:00; Su 12:00-22:00",
          "takeaway": "yes",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 603767085,
        "lat": 60.1666427,
        "lon": 24.9340638,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "49",
          "addr:postcode": "00100",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "delivery": "yes",
          "email": "info@luckiefun.com",
          "name": "Luckiefun's Restaurant",
          "opening_hours": "Mo-Th 10:30-21:00; Fr 10:30-23:00; Sa 12:00-23:00; Su 12:00-21:00",
          "phone": "+358452184480",
          "url": "https://www.luckiefun.com",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 603767090,
        "lat": 60.1661734,
        "lon": 24.942749,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2-4",
          "addr:postcode": "00120",
          "addr:street": "Bulevardi",
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Toscanini",
          "opening_hours": "Mo-Fr 11:00-14:30,17:00-00:00; Sa 12:00-00:00; Su 17:00-23:00",
          "website": "https://www.toscanini.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 603773688,
        "lat": 60.1701957,
        "lon": 24.9284759,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "21",
          "addr:postcode": "00100",
          "addr:street": "Pohjoinen Rautatiekatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Sushi'n roll",
          "website": "http://www.sushinroll.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 603811814,
        "lat": 60.1781072,
        "lon": 24.9223865,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "40",
          "addr:postcode": "00260",
          "addr:street": "Runeberginkatu",
          "amenity": "restaurant",
          "cuisine": "international",
          "name": "Töölön Sävel",
          "opening_hours": "Mo-Th 10:30-23:00; Fr 10:30-24:00, Sa 13:00-24:00, Su 11:00-22:00",
          "website": "https://toolonsavel.fi/"
        }
      },
      {
        "type": "node",
        "id": 603811825,
        "lat": 60.1830684,
        "lon": 24.9248538,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "68",
          "addr:postcode": "00260",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "american",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Chico's",
          "opening_hours:covid19": "off",
          "website": "https://www.raflaamo.fi/fi/helsinki/chicos-toolo",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 603811846,
        "lat": 60.1825402,
        "lon": 24.9256799,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "64",
          "addr:postcode": "00260",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Don Angelo",
          "website": "http://www.donangelo.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 604352051,
        "lat": 60.1966323,
        "lon": 24.9526145,
        "tags": {
          "amenity": "restaurant",
          "name": "Grili Elisabeth"
        }
      },
      {
        "type": "node",
        "id": 606944617,
        "lat": 60.1659228,
        "lon": 24.9510331,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00130",
          "amenity": "restaurant",
          "name": "Bank bar and bistro",
          "operator": "Palace Kämp",
          "website": "http://www.palacekamp.fi/ravintolat/bank_bar_bistro/"
        }
      },
      {
        "type": "node",
        "id": 606949810,
        "lat": 60.1743083,
        "lon": 24.9571661,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "9",
          "addr:postcode": "00170",
          "addr:street": "Liisankatu",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Viet Balo",
          "opening_hours": "Mo-Fr 10:00-19:00; Sa 12:00-19:00",
          "phone": "+358442103939",
          "website": "https://www.thevietbalo.com/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 606952376,
        "lat": 60.1596765,
        "lon": 24.9464837,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00140",
          "addr:street": "Korkeavuorenkatu",
          "amenity": "restaurant",
          "name": "Lungi Kortteliravintola",
          "name:en": "Lungi Block Restaurant",
          "opening_hours": "Mo-Fr 11:30-23:00; Sa 13:00-23:00; \"Closing hour approximate, no accurate time stated in storefront.\"; PH off",
          "phone": "044 0655 651",
          "website": "http://www.lungi.fi/"
        }
      },
      {
        "type": "node",
        "id": 606981019,
        "lat": 60.1602877,
        "lon": 24.9463684,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "cuisine": "international",
          "name": "Maxill",
          "opening_hours": "Mo-Tu 11:30-24:00; We-Fr 11:30-01:00; Sa 13:00-01:00",
          "opening_hours:covid19": "off",
          "website": "http://www.maxill.fi/"
        }
      },
      {
        "type": "node",
        "id": 606981020,
        "lat": 60.1605541,
        "lon": 24.9463555,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4b",
          "addr:street": "Korkeavuorenkatu",
          "amenity": "restaurant",
          "cuisine": "hawaiian;asian",
          "name": "Hoku",
          "opening_hours": "Mo-Fr 11:00-15:00; Sa 12:00-16:00; PH off",
          "website": "http://hoku.fi"
        }
      },
      {
        "type": "node",
        "id": 606996894,
        "lat": 60.1665682,
        "lon": 24.9460262,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:street": "Korkeavuorenkatu",
          "amenity": "restaurant",
          "cuisine": "filipino",
          "name": "Paisano",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 606996920,
        "lat": 60.1687807,
        "lon": 24.9472772,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "42",
          "addr:postcode": "00100",
          "addr:street": "Galleria Esplanad, Aleksanterinkatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Jungle Juice Bar",
          "shop": "beverages",
          "website": "http://www.junglejuice.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 606996925,
        "lat": 60.1699181,
        "lon": 24.9469973,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "5",
          "addr:postcode": "00100",
          "addr:street": "Yliopistonkatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Base Camp (Nepalese cuisine)",
          "opening_hours": "Mo-Th 10:30-23:00, Fr 10:30-24:00, Sa 11:00-24:00, Su 12:00-23:00",
          "opening_hours:covid19": "off",
          "website": "http://basecampnepal.fi/"
        }
      },
      {
        "type": "node",
        "id": 606996926,
        "lat": 60.1699215,
        "lon": 24.9468405,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "5",
          "addr:postcode": "00100",
          "addr:street": "Yliopistonkatu",
          "amenity": "restaurant",
          "cuisine": "japanese;noodles",
          "name": "Momotoko",
          "opening_hours": "Mo-Th 11:00-21:00, Fr 11:00-22:00, Sa 12:00-22:00, Su 12:00-20:00",
          "opening_hours:covid19": "off",
          "website": "http://momotoko.com/"
        }
      },
      {
        "type": "node",
        "id": 606996930,
        "lat": 60.169478,
        "lon": 24.9472143,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "8",
          "addr:postcode": "00100",
          "addr:street": "Kluuvikatu",
          "amenity": "restaurant",
          "cuisine": "french",
          "delivery": "no",
          "internet_access": "wlan",
          "name": "Frans & Amélie",
          "opening_hours": "Mo-Th 11:00-23:00; Fr 11:00-00:00; Sa 12:00-00:00; Su 13:00-19:00",
          "opening_hours:covid19": "off",
          "phone": "+358 10 7855 104",
          "website": "https://www.raflaamo.fi/en/helsinki/frans-amelie-helsinki",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 607014800,
        "lat": 60.1639482,
        "lon": 24.9462882,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "27",
          "addr:postcode": "00130",
          "addr:street": "Korkeavuorenkatu",
          "amenity": "restaurant",
          "cuisine": "nordic",
          "email": "info@juuri.fi",
          "lunch": "yes",
          "name": "Juuri",
          "opening_hours": "Mo-Fr 11:30-23:00; Sa 12:00-23:00; Su 16:00-23:00; PH off",
          "phone": "+358 9 635 732",
          "url": "http://www.juuri.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 610214073,
        "lat": 60.1697005,
        "lon": 24.9470476,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "brunch": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Memphis",
          "opening_hours:brunch": "Su 12:30-15:00",
          "opening_hours:covid19": "off",
          "website": "http://www.memphis.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 610392076,
        "lat": 60.1846275,
        "lon": 24.9233922,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "21-23",
          "addr:postcode": "00250",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "indian",
          "name": "Maharaja (Indian restaurant)",
          "website": "http://www.maharaja.fi/",
          "wheelchair": "limited",
          "wheelchair:description": "Tel. +358 9 444436. Three stairs at the entrance. Ramp to the wheelchair accessible toilet at the restaurant."
        }
      },
      {
        "type": "node",
        "id": 610392079,
        "lat": 60.188745,
        "lon": 24.9174315,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "100",
          "addr:postcode": "00250",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "sushi;japanese",
          "lunch": "yes",
          "name": "Yamato"
        }
      },
      {
        "type": "node",
        "id": 611204787,
        "lat": 60.2050874,
        "lon": 25.13613,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00980",
          "addr:street": "Kaivonkatsojantie",
          "amenity": "restaurant",
          "cuisine": "intialainen;suomalainen;kebab",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "New Light",
          "opening_hours": "PH,Mo-Su 10:00-22:00+",
          "website": "http://ravintolanewlight.com/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 611569191,
        "lat": 60.1685263,
        "lon": 24.9453585,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00100",
          "addr:street": "Mikonkatu",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Shanghai Cowboy",
          "website": "https://raflaamo.fi/fi/helsinki/shanghai-cowboy"
        }
      },
      {
        "type": "node",
        "id": 611766888,
        "lat": 60.1984416,
        "lon": 24.8774567,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00330",
          "amenity": "restaurant",
          "cuisine": "bistro",
          "lunch": "yes",
          "name": "Bistro Maria"
        }
      },
      {
        "type": "node",
        "id": 615217034,
        "lat": 60.1682169,
        "lon": 24.9396892,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "1",
          "addr:postcode": "00100",
          "addr:street": "Kalevankatu",
          "amenity": "restaurant",
          "brunch": "yes",
          "email": "info@ravintolakiila.fi",
          "level": "1;2",
          "lunch:menu": "Mo-Fr 10:30-15:00",
          "name": "Kiila",
          "opening_hours": "Mo-Tu 07:00-22:00; We-Th 07:00-23:00; Fr 07:00-02:00; Sa 08:30-04:00; Su 09:00-21:00",
          "phone": "+358 40 511 8952",
          "reservation": "yes",
          "room": "yes",
          "website": "https://www.ravintolakiila.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 622033235,
        "lat": 60.1665319,
        "lon": 24.9310498,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00180",
          "addr:street": "Lapinlahdenkatu",
          "amenity": "restaurant",
          "name": "Krog Madame",
          "website": "https://madame.fi/"
        }
      },
      {
        "type": "node",
        "id": 648223884,
        "lat": 60.1929991,
        "lon": 24.9365433,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:floor": "6",
          "addr:housenumber": "2 a",
          "addr:street": "Karjalankatu",
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Ilma",
          "phone": "+358 40 777 1697",
          "website": "http://www.ravintolailma.fi/"
        }
      },
      {
        "type": "node",
        "id": 648223885,
        "lat": 60.1908896,
        "lon": 24.9445171,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Golden Rice Bowl",
          "opening_hours": "Mo-Fr 10:00-22:00; Sa-Su 11:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 648237234,
        "lat": 60.165777,
        "lon": 24.9364743,
        "tags": {
          "access:covid19": "no",
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "13",
          "addr:postcode": "00120",
          "addr:street": "Lönnrotinkatu",
          "amenity": "restaurant",
          "brunch": "yes",
          "cuisine": "american",
          "delivery:covid19": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Naughty BRGR",
          "opening_hours": "Mo-Sa 11:00-22:00; Su 12:00-19:00",
          "opening_hours:brunch": "Sa-Su 09:00-14:00",
          "opening_hours:covid19": "Mo-Sa 11:00-21:30; Su 12:00-18:30",
          "outdoor_seating": "yes",
          "phone": "+358 50 556 3367",
          "source": "survey",
          "takeaway:covid19": "yes",
          "toilets": "yes",
          "website": "https://m.facebook.com/NBRGR",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 648237235,
        "lat": 60.1661266,
        "lon": 24.9373754,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "9",
          "addr:postcode": "00120",
          "addr:street": "Lönnrotinkatu",
          "amenity": "restaurant",
          "cuisine": "mexican",
          "name": "Chalupa",
          "opening_hours": "Mo-Fr 10:30-21:30; Sa,Su 11:30-21:30",
          "website": "http://chalupa.fi/"
        }
      },
      {
        "type": "node",
        "id": 648237236,
        "lat": 60.1674957,
        "lon": 24.941438,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "10",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "name": "Scandic Marski",
          "toilets:wheelchair": "yes",
          "website": "https://www.scandichotels.com/hotels/finland/helsinki/scandic-marski/restaurant-bar/restaurant",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 648249321,
        "lat": 60.1645698,
        "lon": 24.932603,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "34",
          "addr:postcode": "00120",
          "addr:street": "Albertinkatu",
          "amenity": "restaurant",
          "name": "Aleksanteri Lounge",
          "website": "https://www.raflaamo.fi/fi/helsinki/aleksanteri-lounge",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 648294900,
        "lat": 60.1641522,
        "lon": 24.9475672,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:street": "Pieni Roobertinkatu",
          "amenity": "restaurant",
          "cuisine": "french",
          "lunch": "yes",
          "name": "Ravintola Pastis",
          "opening_hours:lunch": "Mo-Fr 11:30-14:00",
          "website": "https://www.pastis.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 655135843,
        "lat": 60.2392648,
        "lon": 24.8560483,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Ravintola Loru",
          "website": "https://www.ravintolaloru.fi"
        }
      },
      {
        "type": "node",
        "id": 664153649,
        "lat": 60.1897486,
        "lon": 24.968851,
        "tags": {
          "addr:street": "Sörnäistenkatu",
          "amenity": "restaurant",
          "name": "Theron Eat & Wok",
          "name:fi": "Theron Eat & Wok",
          "opening_hours": "Mo-Fr 10:30-13:30",
          "opening_hours:covid19": "off"
        }
      },
      {
        "type": "node",
        "id": 664153670,
        "lat": 60.1892482,
        "lon": 24.9721287,
        "tags": {
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Lunch!",
          "opening_hours": "Mo-Fr 07:30-14:00"
        }
      },
      {
        "type": "node",
        "id": 664698415,
        "lat": 60.2010453,
        "lon": 24.9669992,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00560",
          "addr:street": "Jan-Magnus Janssonin aukio",
          "amenity": "restaurant",
          "name": "Restaurang Prakticum",
          "shop": "hairdresser",
          "website": "https://prakticum.fi/om-prakticum/tjanster/restaurang-prakticum.html"
        }
      },
      {
        "type": "node",
        "id": 664725954,
        "lat": 60.1956866,
        "lon": 24.9632436,
        "tags": {
          "amenity": "restaurant",
          "name": "Punaruusu",
          "opening_hours": "Mo-Sa 10:00-00:00, Su 10:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 670276215,
        "lat": 60.1853144,
        "lon": 24.9436351,
        "tags": {
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Pihvipaikka Karhunpesä",
          "opening_hours": "Mo-Fr 10:00-14:30"
        }
      },
      {
        "type": "node",
        "id": 670883747,
        "lat": 60.1941775,
        "lon": 25.0329621,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00880",
          "addr:street": "Linnanrakentajantie",
          "amenity": "restaurant",
          "bar": "yes",
          "cuisine": "pizza;international;burger;seafood",
          "name": "Ravintola Fat Lizard",
          "opening_hours": "Ma-To 10.30 – 24.00  Pe 10.30 – 24.00  La 12.00 – 24.00  Su 10.30 – 22.00",
          "phone": "020 155 1050",
          "website": "https://ravintolafatlizard.fi/herttoniemi"
        }
      },
      {
        "type": "node",
        "id": 673606087,
        "lat": 60.1592907,
        "lon": 24.9425191,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "35",
          "addr:postcode": "00150",
          "addr:street": "Vuorimiehenkatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "drive_through": "no",
          "name": "Alfons Pizza",
          "opening_hours": "Mo-Th 17:00-21:00; Fr 11:00-22:00; Sa 13:00-22:00; Su 13:00-21:00",
          "phone": "+358 9 626 707",
          "source": "local knowledge",
          "takeaway": "yes",
          "website": "http://www.alfonspizza.fi/"
        }
      },
      {
        "type": "node",
        "id": 673606089,
        "lat": 60.1591172,
        "lon": 24.9431025,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "18",
          "addr:postcode": "00150",
          "addr:street": "Vuorimiehenkatu",
          "amenity": "restaurant",
          "cuisine": "mexican",
          "delivery:covid19": "only",
          "email": "info@elrey.fi",
          "name": "Taqueria El Rey",
          "opening_hours": "Tu-Sa 17:00-23:00; PH off",
          "phone": "+358 40 672 9398",
          "takeaway:covid19": "only",
          "website": "http://www.elrey.fi/"
        }
      },
      {
        "type": "node",
        "id": 673606093,
        "lat": 60.166753,
        "lon": 24.9368036,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "22",
          "addr:postcode": "00100",
          "addr:street": "Annankatu",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Lappi ravintola",
          "opening_hours": "Mo-Sa 12:00-00:00",
          "phone": "+358 9 645 550",
          "toilets:wheelchair": "yes",
          "website": "http://www.lappires.com/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 674161697,
        "lat": 60.1797394,
        "lon": 24.9612938,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00530",
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Bali Bagus",
          "opening_hours": "Mo-Fr 11:30-22:00; Sa 12:00-22:00; Su12:00-20:00"
        }
      },
      {
        "type": "node",
        "id": 676200755,
        "lat": 60.2235882,
        "lon": 25.1703621,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintola Vuoska"
        }
      },
      {
        "type": "node",
        "id": 676200756,
        "lat": 60.2224532,
        "lon": 25.1749993,
        "tags": {
          "alt_name": "Luonas Matti",
          "amenity": "restaurant",
          "name": "Ravintola Gatehouse",
          "opening_hours": "Mo-We 06:30-18:00; Th-Fr 06:30-16:00"
        }
      },
      {
        "type": "node",
        "id": 676228279,
        "lat": 60.2240222,
        "lon": 25.1695261,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintola Port",
          "website": "http://www.ravintolaport.fi"
        }
      },
      {
        "type": "node",
        "id": 691006324,
        "lat": 60.2139721,
        "lon": 25.1825644,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant"
        }
      },
      {
        "type": "node",
        "id": 694468578,
        "lat": 60.2172532,
        "lon": 24.869075,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00380",
          "addr:street": "Purotie",
          "amenity": "restaurant",
          "bar": "yes",
          "cuisine": "chinese",
          "level": "0",
          "lunch": "Mo-Fr 10:30-15:00",
          "name": "Ravintola West Beverly",
          "opening_hours": "Mo-Th 10:30-01:00; Fr 10:30-02:00; Sa 12:00-02:00; Su 12:00-01:00",
          "opening_hours:kitchen": "Mo-Su 10:30-21:30",
          "outdoor_seating": "yes",
          "phone": "+358 50 598 6638",
          "takeaway": "yes",
          "website": "https://www.westbeverly.fi/"
        }
      },
      {
        "type": "node",
        "id": 694470768,
        "lat": 60.2141984,
        "lon": 24.873818,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:floor": "4",
          "addr:housenumber": "6",
          "addr:postcode": "00380",
          "addr:street": "Kutomotie",
          "addr:unit": "A",
          "amenity": "restaurant",
          "craft": "caterer",
          "cuisine": "nepalian",
          "diet:gluten_free": "yes",
          "diet:lactose_free": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "ravintolameronepal@gmail.com",
          "lunch": "Mo-Fr 10:00-15:00",
          "name": "Mero Nepal",
          "opening_hours": "Mo-Th 10:00-15:00; Fr 10:00-20:30; Su 14:00-20:30",
          "phone": "+358 44 9803812",
          "reservation": "yes",
          "type": "Nepalian",
          "website": "https://www.meronepal.fi/"
        }
      },
      {
        "type": "node",
        "id": 694472846,
        "lat": 60.2152907,
        "lon": 24.8813363,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Ravintola Hao Shi"
        }
      },
      {
        "type": "node",
        "id": 738226850,
        "lat": 60.1983363,
        "lon": 24.9263875,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4",
          "addr:postcode": "00240",
          "addr:street": "Maistraatinportti",
          "amenity": "restaurant",
          "description": " Karaoke pub",
          "lunch": "yes",
          "name": "Ravintola Windsor",
          "opening_hours": "Mo 10:30-24:00; Tu-Th 10:30-01:00; Fr 10:30-03:00; Sa 12:00-03:00; Su 12:00-24:00",
          "toilets:wheelchair": "yes",
          "website": "http://windsor.fi/",
          "wheelchair": "yes",
          "wheelchair:description": "Esteetön sisäänkäynti oikeanpuolisesta ovesta / Wheelchair accessible entrance on the right (ramp)!"
        }
      },
      {
        "type": "node",
        "id": 738417397,
        "lat": 60.2017432,
        "lon": 24.9368489,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00520",
          "addr:street": "Messuaukio",
          "amenity": "restaurant",
          "name": "Terra Nova Brasserie",
          "toilets:wheelchair": "yes",
          "website": "http://finland.holidayinn.com/hotellit/holiday-inn-helsinki-messukeskus/ravintola",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 740030363,
        "lat": 60.1952786,
        "lon": 24.9476381,
        "tags": {
          "amenity": "restaurant",
          "name": "Everest",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "no",
          "payment:smartum_note": "yes"
        }
      },
      {
        "type": "node",
        "id": 740030387,
        "lat": 60.1947987,
        "lon": 24.946647,
        "tags": {
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Unicafe Valdemar",
          "website": "https://www.unicafe.fi/"
        }
      },
      {
        "type": "node",
        "id": 742683164,
        "lat": 60.207482,
        "lon": 24.9792286,
        "tags": {
          "amenity": "restaurant",
          "guard:operator": "Turvatiimi",
          "opening_hours": "Mo-Su 15:00-02:00"
        }
      },
      {
        "type": "node",
        "id": 744699551,
        "lat": 60.1664142,
        "lon": 24.9456609,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "34",
          "addr:postcode": "00130",
          "addr:street": "Korkeavuorenkatu",
          "amenity": "restaurant",
          "cuisine": "steak_house",
          "name": "Stefan's Steakhouse",
          "opening_hours": "Mo-Th 17:00-23:00; Fr 17:00-24:00; Sa 14:00-24:00; Su 15:00-22:00; PH off",
          "smoking": "no",
          "website": "https://www.ravintola.fi/stefans_helsinki",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 745988874,
        "lat": 60.2006295,
        "lon": 24.9387411,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00520",
          "addr:street": "Asemamiehenkatu",
          "amenity": "restaurant",
          "email": "viherlatva@foodandco.fi",
          "name": "Viherlatva",
          "opening_hours": "Mo-Fr 10:30-13:00",
          "opening_hours:covid19": "off",
          "operator": "Food & Co",
          "phone": "+358 40 741 7425",
          "website": "https://foodandco.fi/ravintolat/Ravintolat-kaupungeittain/helsinki/viherlatva/"
        }
      },
      {
        "type": "node",
        "id": 746457581,
        "lat": 60.199217,
        "lon": 24.9420976,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00520",
          "addr:street": "Asemapäällikönkatu",
          "amenity": "restaurant",
          "cuisine": "pizza;kebab",
          "name": "Pasilan Pizzapalvelu",
          "opening_hours": "Mo-Sa 10:00-22:00; Su 11:00-21:00",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "no",
          "payment:smartum_note": "yes",
          "phone": "+358 45 8408317",
          "website": "http://www.pasilanpizzapalvelu.fi/"
        }
      },
      {
        "type": "node",
        "id": 746944279,
        "lat": 60.1570148,
        "lon": 24.9462067,
        "tags": {
          "addr:city": "Helsinki",
          "addr:postcode": "00140",
          "addr:street": "Pietarinkatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Pizzeria Sopranos",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa-Su 12:00-22:00; PH off",
          "phone": "+3589655431"
        }
      },
      {
        "type": "node",
        "id": 750013513,
        "lat": 60.1664253,
        "lon": 24.9256112,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00180",
          "addr:street": "Lastenkodinkuja",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Guangzhou garden"
        }
      },
      {
        "type": "node",
        "id": 760224495,
        "lat": 60.15919,
        "lon": 24.9453741,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Srinakhon",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa 12:00-22:00; Su 12:00-21:00; Tu off; PH off",
          "phone": "+3589670106",
          "website": "www.srinakhon.fi"
        }
      },
      {
        "type": "node",
        "id": 764568061,
        "lat": 60.2055999,
        "lon": 24.9639498,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00560",
          "addr:street": "A.I. Virtasen aukio",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "discount:students": "yes",
          "lunch": "yes",
          "name": "Unicafe Chemicum",
          "opening_hours": "Mo-Th 10:00-15:30; Fr 10:00-15:00",
          "operator": "Unicafe"
        }
      },
      {
        "type": "node",
        "id": 765961511,
        "lat": 60.1479054,
        "lon": 25.0438069,
        "tags": {
          "access": "private",
          "amenity": "restaurant",
          "name": "Varuskuntaravintola Sahara",
          "name:fi": "Varuskuntaravintola Sahara",
          "name:sv": "Garnisonsrestaurang Sahara"
        }
      },
      {
        "type": "node",
        "id": 767200605,
        "lat": 60.2191439,
        "lon": 24.9376872,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00620",
          "addr:street": "Niittyläntie",
          "amenity": "restaurant",
          "cuisine": "indian",
          "lunch": "yes",
          "name": "Tandoori Villa",
          "opening_hours": "Mo-Fr 11:30-21:00; Sa-Su 12:00-21:00",
          "phone": "+358 40 574 1990",
          "website": "https://www.tandoorivilla.fi/"
        }
      },
      {
        "type": "node",
        "id": 792729353,
        "lat": 60.2408873,
        "lon": 25.0038619,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00710",
          "addr:street": "Rapakivenkuja",
          "amenity": "restaurant",
          "cuisine": "lunch;pizza",
          "name": "Food Chef",
          "opening_hours": "Mo-Th 10:00-15:00; Fr 10:00-21:30",
          "opening_hours:covid19": "open",
          "phone": "+358 9 428 93014",
          "takeaway": "yes",
          "website": "https://www.foodchef.fi"
        }
      },
      {
        "type": "node",
        "id": 795252369,
        "lat": 60.2041114,
        "lon": 25.1172352,
        "tags": {
          "addr:housenumber": "3",
          "addr:street": "Meri-Rastilan tie",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "delivery": "no",
          "name": "Southland",
          "phone": "+35895865938",
          "takeaway": "yes",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 802811993,
        "lat": 60.2540224,
        "lon": 25.0769233,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "24",
          "addr:postcode": "00770",
          "addr:street": "Jakomäentie",
          "amenity": "restaurant",
          "cuisine": "kebab;pizza",
          "email": "info@barbumerang.fi",
          "facebook": "https://www.facebook.com/Bar-Bumerang-333498143408644/",
          "name": "Bar Bumerang",
          "opening_hours": "10:00-21:40",
          "opening_hours:url": "https://barbumerang.fi/aboutUs",
          "phone": "+358 50 331 1199",
          "website": "https://barbumerang.fi/"
        }
      },
      {
        "type": "node",
        "id": 806783203,
        "lat": 60.1704928,
        "lon": 24.9344989,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00100",
          "addr:street": "Salomonkatu",
          "amenity": "restaurant",
          "contact:phone": "+358 9 3233200",
          "contact:website": "http://www.tangdynasty.fi/",
          "cuisine": "sushi",
          "name": "Itsudemo",
          "source": "survey"
        }
      },
      {
        "type": "node",
        "id": 828455126,
        "lat": 60.1892454,
        "lon": 24.9579274,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Quick Wok",
          "opening_hours": "Mo-Fr 10:00-23:30;Sa-Su 11:00-23:30"
        }
      },
      {
        "type": "node",
        "id": 828455127,
        "lat": 60.1885158,
        "lon": 24.9607617,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "chinese",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Happy Garden",
          "opening_hours": "Sa, Su 12:00-21:00; Tu-Fr 11:00-21:00"
        }
      },
      {
        "type": "node",
        "id": 850744937,
        "lat": 60.274683,
        "lon": 25.0460489,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4",
          "addr:postcode": "00760",
          "addr:street": "Puistolantori",
          "amenity": "restaurant",
          "contact:email": "myynti@pelimanni.com",
          "contact:phone": "+358 9 345 4464",
          "name": "Pelimanni",
          "website": "http://pelimanni.com/"
        }
      },
      {
        "type": "node",
        "id": 875845806,
        "lat": 60.1928337,
        "lon": 25.0341625,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "22",
          "addr:postcode": "00810",
          "addr:street": "Hitsaajankatu",
          "amenity": "restaurant",
          "cuisine": "lunch",
          "email": "opus@delicatessen.fi",
          "name": "Ravintola Delicatessen Opus",
          "phone": "+358403513596",
          "website": "https://www.delicatessen.fi/lounaslistat/opus"
        }
      },
      {
        "type": "node",
        "id": 890585068,
        "lat": 60.2015173,
        "lon": 24.9215574,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3B",
          "addr:postcode": "00240",
          "addr:street": "Rahakamarinportti",
          "amenity": "restaurant",
          "name": "Mestarikilta",
          "opening_hours:covid19": "off"
        }
      },
      {
        "type": "node",
        "id": 894066264,
        "lat": 60.1926691,
        "lon": 24.8721977,
        "tags": {
          "amenity": "restaurant",
          "brunch": "yes",
          "name": "Meritorppa",
          "opening_hours:brunch": "Su 11:00-15:00"
        }
      },
      {
        "type": "node",
        "id": 903301977,
        "lat": 60.1646347,
        "lon": 24.9331951,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "25",
          "addr:postcode": "00180",
          "addr:street": "Lönnrotinkatu",
          "amenity": "restaurant",
          "capacity": "50",
          "cuisine": "nepalese",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Kantipur",
          "opening_hours": "Mo-Th 11:00-22:00; Fr 11:00-23:00; Sa 12:00-23:00; Su 12:00-22:00",
          "phone": "+358 9 694 0266",
          "smoking": "no",
          "takeaway": "yes",
          "website": "https://www.ravintolakantipur.fi/"
        }
      },
      {
        "type": "node",
        "id": 915408393,
        "lat": 60.2029401,
        "lon": 24.8987806,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "168B",
          "addr:postcode": "00300",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "Gurans",
          "opening_hours": "Mo-Fr 10:30-22:30; Sa-Su 12:00-22:30 || 12:00 - 22:30 \"Pyhäpäivä\" || Mo-Fr 10:30-15:00 \"Lounas Arkisin\"",
          "opening_hours:covid19": "off",
          "phone": "09 4546181",
          "source": "http://www.ravintolagurans.fi/",
          "takeaway": "yes",
          "website": "http://www.ravintolagurans.fi"
        }
      },
      {
        "type": "node",
        "id": 923940955,
        "lat": 60.2047665,
        "lon": 24.8955964,
        "tags": {
          "amenity": "restaurant",
          "name": "Sir Olavi"
        }
      },
      {
        "type": "node",
        "id": 957080720,
        "lat": 60.1811989,
        "lon": 24.959352,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00530",
          "addr:street": "Haapaniemenkatu",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "lunch": "Mo-Thu 11:00-16:00;Fr 11:00-15:00",
          "name": "Unicafe Kookos",
          "opening_hours": "Mo-Th 08:30-18:00; Fr 08:30-16:00",
          "operator": "Unicafe",
          "website": "https://www.unicafe.fi/"
        }
      },
      {
        "type": "node",
        "id": 960109074,
        "lat": 60.198417,
        "lon": 24.92727,
        "tags": {
          "amenity": "restaurant",
          "name": "Dylan Böle",
          "opening_hours:covid19": "off"
        }
      },
      {
        "type": "node",
        "id": 962999975,
        "lat": 60.1629649,
        "lon": 24.933558,
        "tags": {
          "access:dog": "yes",
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "36",
          "addr:postcode": "00120",
          "addr:street": "Bulevardi",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Kakkugalleria",
          "opening_hours": "Mo-Fr 9:00-18:00; Sa 10:00-16:00",
          "operator": "A&S Ravintolat",
          "phone": "+358974255544",
          "shop": "bakery",
          "smoking": "no",
          "website": "https://www.kakkugalleria.com/"
        }
      },
      {
        "type": "node",
        "id": 963070697,
        "lat": 60.249762,
        "lon": 24.8536862,
        "tags": {
          "access": "private",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Taitotalo Ravintola",
          "note": "Henkilöstöravintola",
          "operator": "Fazer Amica"
        }
      },
      {
        "type": "node",
        "id": 969884623,
        "lat": 60.1657125,
        "lon": 24.9664797,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3-5",
          "addr:postcode": "00160",
          "addr:street": "Pikku Satamakatu",
          "amenity": "restaurant",
          "contact:email": "myyntipalvelu@royalravintolat.com",
          "contact:phone": "+358 9 6128 6800",
          "contact:website": "http://www.royalravintolat.com/wanhasatama/brasserie.asp",
          "name": "Lounasravintola Brasserie",
          "website": "http://www.wanhasatamaravintolat.fi/",
          "wheelchair": "limited",
          "wheelchair:description": "Wheelchair entrance from inside of Wanha Satama."
        }
      },
      {
        "type": "node",
        "id": 969916749,
        "lat": 60.1662419,
        "lon": 24.964641,
        "tags": {
          "amenity": "restaurant",
          "contact:email": "ravintola@kaksikanaa.fi",
          "contact:fax": "+358 9 669 012",
          "contact:phone": "+358 9 669 260",
          "contact:website": "http://www.kaksikanaa.fi/",
          "name": "Ravintola Kaksi Kanaa"
        }
      },
      {
        "type": "node",
        "id": 1005863808,
        "lat": 60.2762653,
        "lon": 25.0347833,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00750",
          "addr:street": "Tapulikaupungintie",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Pizza Taikurit",
          "phone": "097 171 91",
          "website": "https://pizza-online.fi/ravintolat/helsinki/pizzataikurit"
        }
      },
      {
        "type": "node",
        "id": 1007190010,
        "lat": 60.2166826,
        "lon": 24.9531265,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintola Park Hotel Käpylä",
          "name:en": "Restaurant Puisto",
          "name:fi": "Ravintola Puisto",
          "name:ru": "Ресторан Пуйсто",
          "name:sv": "Restaurang Puisto"
        }
      },
      {
        "type": "node",
        "id": 1007873319,
        "lat": 60.1628893,
        "lon": 24.9290814,
        "tags": {
          "addr:city": "Helsinki",
          "amenity": "restaurant",
          "cuisine": "burger;steak_house",
          "name": "Roslund"
        }
      },
      {
        "type": "node",
        "id": 1007988735,
        "lat": 60.1729842,
        "lon": 24.9527106,
        "tags": {
          "addr:city": "Helsinki",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Soc&Kom",
          "opening_hours:covid19": "off",
          "operator": "Unicafe"
        }
      },
      {
        "type": "node",
        "id": 1007988748,
        "lat": 60.1756623,
        "lon": 24.9533779,
        "tags": {
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Olivia",
          "opening_hours:covid19": "off",
          "operator": "Unicafe"
        }
      },
      {
        "type": "node",
        "id": 1007988753,
        "lat": 60.1719459,
        "lon": 24.94935,
        "tags": {
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Topelias",
          "opening_hours:covid19": "off",
          "operator": "Unicafe"
        }
      },
      {
        "type": "node",
        "id": 1007988759,
        "lat": 60.1691551,
        "lon": 24.950021,
        "tags": {
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Päärakennus",
          "name:da": "Helsignfors unversitet Hvudbygganden",
          "name:en": "Main Building Helsinki University",
          "name:nn": "Helsingfors unversitet Huvudbyggnaden",
          "name:sv": "Huvudbyggnaden",
          "opening_hours:covid19": "off",
          "operator": "Unicafe",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1007988780,
        "lat": 60.1726583,
        "lon": 24.9492317,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "39",
          "addr:postcode": "00100",
          "addr:street": "Fabianinkatu",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Unicafe Metsätalo",
          "opening_hours:covid19": "off",
          "operator": "Unicafe"
        }
      },
      {
        "type": "node",
        "id": 1007988785,
        "lat": 60.1700753,
        "lon": 24.9489119,
        "tags": {
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "lunch": "yes",
          "name": "Porthania",
          "opening_hours:covid19": "off",
          "operator": "Unicafe",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1008002685,
        "lat": 60.2044199,
        "lon": 24.9617693,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00560",
          "addr:street": "Pietari Kalmin katu",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Unicafe Exactum",
          "operator": "Unicafe",
          "toilets:wheelchair": "yes",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1008202413,
        "lat": 60.2751383,
        "lon": 25.0317723,
        "tags": {
          "amenity": "restaurant",
          "fixme": "catering",
          "name": "Pitopalvelu Pilke",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 1011432502,
        "lat": 60.1630705,
        "lon": 24.9420071,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4",
          "addr:street": "Annankatu",
          "amenity": "restaurant",
          "cuisine": "indian",
          "email": "info@ravintolamonal.fi",
          "name": "Monal",
          "opening_hours": "Mo-Fr 10:30-23:00; Sa 12:00-23:00; Su 12:00-20:00",
          "opening_hours:lunch_buffet": "Mo-Fr 10:30-15:00",
          "phone": "+358505969316",
          "website": "https://www.ravintolamonal.fi/"
        }
      },
      {
        "type": "node",
        "id": 1016169245,
        "lat": 60.2102899,
        "lon": 24.8862726,
        "tags": {
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Frendi"
        }
      },
      {
        "type": "node",
        "id": 1019273093,
        "lat": 60.2402365,
        "lon": 24.8732156,
        "tags": {
          "amenity": "restaurant",
          "name": "Soitin"
        }
      },
      {
        "type": "node",
        "id": 1037603239,
        "lat": 60.1591629,
        "lon": 24.9375002,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00150",
          "addr:street": "Pursimiehenkatu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "Red Conception",
          "opening_hours": "Mo-Fr 11:00-15:00",
          "phone": "+358103257768",
          "tourism": "gallery",
          "website": "https://www.facebook.com/redconceptionhelsinki/"
        }
      },
      {
        "type": "node",
        "id": 1056678094,
        "lat": 60.186508,
        "lon": 24.9534752,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "15",
          "addr:postcode": "00500",
          "addr:street": "Fleminginkatu",
          "amenity": "restaurant",
          "email": "info@ravintolacella.fi",
          "name": "Cella",
          "opening_hours": "Mo-Fr 15:00-02:00; Sa-Su 12:00-02:00",
          "phone": "+358 504771057",
          "website": "https://www.kantri.fi/cella/"
        }
      },
      {
        "type": "node",
        "id": 1064516375,
        "lat": 60.1884288,
        "lon": 24.9643129,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00500",
          "addr:street": "Kulmavuorenkatu",
          "amenity": "restaurant",
          "diet:vegetarian": "only",
          "name": "Kombo Winebar & Kitchen",
          "website": "http://kombowinebar.fi/"
        }
      },
      {
        "type": "node",
        "id": 1080591415,
        "lat": 60.1636974,
        "lon": 24.9197474,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00180",
          "addr:street": "Itämerenkatu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "Ruyi",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa-Su 12:00-21:00",
          "website": "http://www.hankosushi.fi/"
        }
      },
      {
        "type": "node",
        "id": 1083933165,
        "lat": 60.1815946,
        "lon": 24.9263861,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "60",
          "addr:postcode": "00260",
          "addr:street": "Runeberginkatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Lukla"
        }
      },
      {
        "type": "node",
        "id": 1083993269,
        "lat": 60.1782369,
        "lon": 24.9223901,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "40",
          "addr:postcode": "00260",
          "addr:street": "Runeberginkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Gyosai-Sushi",
          "opening_hours": "Tu-Fr 11:00-19:00; Sa 12:00-17:00"
        }
      },
      {
        "type": "node",
        "id": 1083993275,
        "lat": 60.1795877,
        "lon": 24.9239242,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "55b",
          "addr:postcode": "00260",
          "addr:street": "Runeberginkatu",
          "amenity": "restaurant",
          "name": "Rosa izakaya bistro & cocktail",
          "opening_hours": "Tue-Thu 16:00-24:00, Fri-Sat 16:00-24:00",
          "operator": "Kaukoravintolat Oy",
          "website": "http://www.izakaya.fi/"
        }
      },
      {
        "type": "node",
        "id": 1092227151,
        "lat": 60.1863164,
        "lon": 24.9169656,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "8",
          "addr:postcode": "00250",
          "addr:street": "Nordenskiöldinkatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Ravintola Mountain",
          "opening_hours": "Mo-Fr 10:30-22:30; Sa 12:30-22:30; Su 12:30-22:00",
          "website": "http://ravintolamountain.com/"
        }
      },
      {
        "type": "node",
        "id": 1117469594,
        "lat": 60.1808648,
        "lon": 24.9247209,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "54",
          "addr:postcode": "00260",
          "addr:street": "Runeberginkatu",
          "amenity": "restaurant",
          "name": "Soup",
          "website": "https://www.soup.fi/"
        }
      },
      {
        "type": "node",
        "id": 1128773217,
        "lat": 60.1811599,
        "lon": 24.9942528,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00570",
          "addr:street": "Mustikkamaankuja",
          "amenity": "restaurant",
          "description:covid19": "Ravintola toimii toistaiseksi tilausravintolana.",
          "name": "Ravintola Alia",
          "opening_hours:covid19": "off",
          "operator": "Garafel Oy",
          "phone": "+358 9 660 066",
          "short_name": "Alia",
          "smoking": "outside",
          "url": "http://www.alia.fi/",
          "website": "https://www.alia.fi/"
        }
      },
      {
        "type": "node",
        "id": 1151191008,
        "lat": 60.1811687,
        "lon": 24.9528763,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Empire"
        }
      },
      {
        "type": "node",
        "id": 1163464352,
        "lat": 60.2487277,
        "lon": 25.0108624,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "thai",
          "diet:vegan": "yes",
          "level": "1",
          "name": "Thai Thai",
          "opening_hours": "Mo 10:30-20:00; Sa-Su 10:30-21:00; Sa-Su 12:00-21:00",
          "takeaway": "yes",
          "toilets": "yes",
          "toilets:access": "customers",
          "was:name": "Thamrabthai",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1182594593,
        "lat": 60.194643,
        "lon": 24.9480721,
        "tags": {
          "amenity": "restaurant",
          "name": "Valkka"
        }
      },
      {
        "type": "node",
        "id": 1182598626,
        "lat": 60.1949756,
        "lon": 24.9484034,
        "tags": {
          "amenity": "restaurant",
          "lunch_hours": "Mo-Fr 10:45-13:00",
          "name": "Vallgård",
          "opening_hours": "Mo-Fr 08:00-14:00",
          "operator": "Sodexo"
        }
      },
      {
        "type": "node",
        "id": 1191205885,
        "lat": 60.1881662,
        "lon": 24.9147828,
        "tags": {
          "access:covid19": "yes",
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00250",
          "addr:street": "Messeniuksenkatu",
          "amenity": "restaurant",
          "drive_through:covid19": "no",
          "name": "Ravintola Messenius",
          "opening_hours": "Mo-Fr 11:00-23:00;Sa 15:00-23:00",
          "opening_hours:covid19": "open",
          "takeaway:covid19": "yes",
          "website": "https://www.messenius.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1199170124,
        "lat": 60.1804144,
        "lon": 24.9509034,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "alt_name": "Kallion Sävel",
          "amenity": "restaurant",
          "contact:website": "http://www.kallionsavel.fi/",
          "cuisine": "burger;regional",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Ravintola Sävel",
          "opening_hours": "Mo-We 10:30-24:00; Th,Fr 00:00-02:00,10:30-24:00; Sa 00:00-02:00,12:00-24:00; Su 13:00-22:00",
          "short_name": "Sävel",
          "website": "https://kallionsavel.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1208596667,
        "lat": 60.169604,
        "lon": 24.9435664,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "addr:street": "Ateneuminkuja",
          "amenity": "restaurant",
          "cuisine": "burger",
          "description": "USA tyyppinen diner - kaupungin parhaimmat (suurimmat) burgerit.",
          "name": "Morrison's Grill & Green",
          "opening_hours:covid19": "off",
          "phone": "+358 9 625 466",
          "website": "http://www.rafla.fi/morrisons/fi/etusivu"
        }
      },
      {
        "type": "node",
        "id": 1232483490,
        "lat": 60.1902733,
        "lon": 24.9496396,
        "tags": {
          "amenity": "restaurant",
          "name": "Taz",
          "opening_hours": "Mo-Su 10:00-02:00"
        }
      },
      {
        "type": "node",
        "id": 1233410673,
        "lat": 60.2274719,
        "lon": 25.0133924,
        "tags": {
          "amenity": "restaurant",
          "name": "Korona",
          "source": "survey",
          "website": "http://www.hyyravintolat.fi/en#/Viikki/Korona/6/19",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1244073209,
        "lat": 60.2490461,
        "lon": 24.8404675,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11",
          "addr:postcode": "00390",
          "addr:street": "Hankasuontie",
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Ravintola Punainen Paronitar",
          "opening_hours": "Mo-Fr 06:30-14:00"
        }
      },
      {
        "type": "node",
        "id": 1245956610,
        "lat": 60.2008073,
        "lon": 24.9343565,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "11",
          "addr:postcode": "00520",
          "addr:street": "Ratapihantie",
          "amenity": "restaurant",
          "contact:phone": "+358 9 2789183",
          "cuisine": "chinese",
          "name": "South China",
          "operator": "Kimallus Oy",
          "ref": "1933630-5",
          "source": "survey"
        }
      },
      {
        "type": "node",
        "id": 1248932381,
        "lat": 60.237666,
        "lon": 25.0524245,
        "tags": {
          "amenity": "restaurant",
          "fixme": "Tarkenna sijainti",
          "lunch": "Mo-Su 11:00-14:00",
          "name": "Ravintola Luossa"
        }
      },
      {
        "type": "node",
        "id": 1268105935,
        "lat": 60.2161973,
        "lon": 24.898378,
        "tags": {
          "access:covid19": "no",
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00320",
          "addr:street": "Tunnelitie",
          "amenity": "restaurant",
          "cuisine": "japanese",
          "delivery:covid19": "no",
          "drive_through:covid19": "no",
          "name": "Famia Sushibar",
          "opening_hours": "Mo-Fr 10:30-22:00; Sa 12:00-22:00; Su 12:00-21:00",
          "opening_hours:covid19": "Mo-Fr 10:30-22:00; Sa 12:00-22:00; Su 12:00-21:00",
          "takeaway:covid19": "yes"
        }
      },
      {
        "type": "node",
        "id": 1280145330,
        "lat": 60.2077926,
        "lon": 24.8870765,
        "tags": {
          "amenity": "restaurant",
          "name": "Roseway",
          "opening_hours": "Mo-Fr 10:00-22:00; Sa-Su 11:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 1309640537,
        "lat": 60.1855772,
        "lon": 24.9471148,
        "tags": {
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Kirstin keidas",
          "opening_hours": "Mo-Fr 11:00-12:45"
        }
      },
      {
        "type": "node",
        "id": 1314856239,
        "lat": 60.2629912,
        "lon": 25.0266795,
        "tags": {
          "amenity": "restaurant",
          "name": "Star Pizza"
        }
      },
      {
        "type": "node",
        "id": 1314874377,
        "lat": 60.1927993,
        "lon": 25.0291375,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "12",
          "addr:postcode": "00810",
          "addr:street": "Hitsaajankatu",
          "amenity": "restaurant",
          "contact:website": "http://www.hankosushi.fi/herttoniemi",
          "name": "Hanko Sushi Herttoniemi"
        }
      },
      {
        "type": "node",
        "id": 1323450841,
        "lat": 60.138968,
        "lon": 24.9892905,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "A 10",
          "addr:postcode": "00190",
          "addr:street": "Suomenlinna",
          "amenity": "restaurant",
          "cuisine": "fine_dining",
          "name": "Ravintola Walhalla",
          "summer_terrace": "yes",
          "website": "http://www.restaurantwalhalla.com/"
        }
      },
      {
        "type": "node",
        "id": 1365119944,
        "lat": 60.1374925,
        "lon": 24.911323,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintola Pihlajasaari",
          "outdoor_seating": "yes",
          "website": "http://www.pihlajasaari.net"
        }
      },
      {
        "type": "node",
        "id": 1369465568,
        "lat": 60.1703163,
        "lon": 24.9390984,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00100",
          "addr:street": "Asemanaukio",
          "amenity": "restaurant",
          "name": "Casa Largo",
          "phone": "+358 10 766 3501",
          "website": "https://www.raflaamo.fi/fi/helsinki/casa-largo"
        }
      },
      {
        "type": "node",
        "id": 1369465591,
        "lat": 60.1695461,
        "lon": 24.9442525,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "addr:street": "Ateneuminkuja",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "floor": "2",
          "name": "Grand Shanghai",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1369465615,
        "lat": 60.1702394,
        "lon": 24.938897,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "amenity": "restaurant",
          "name": "Loiste",
          "phone": "+358 9 4337 6315",
          "website": "http://www.ravintolaloiste.fi/"
        }
      },
      {
        "type": "node",
        "id": 1369465628,
        "lat": 60.1720956,
        "lon": 24.9436122,
        "tags": {
          "amenity": "restaurant",
          "name": "Morkku",
          "opening_hours:covid19": "off"
        }
      },
      {
        "type": "node",
        "id": 1369465630,
        "lat": 60.172104,
        "lon": 24.9445626,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00100",
          "addr:street": "Vilhonkatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Mount Everest",
          "opening_hours:covid19": "off",
          "website": "http://www.everestyeti.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1369465673,
        "lat": 60.1700749,
        "lon": 24.9395098,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "12",
          "addr:postcode": "00100",
          "addr:street": "Kaivokatu",
          "amenity": "restaurant",
          "brunch": "yes",
          "is_in": "Hotel Seurahuone",
          "name": "Brasserie Le Havre",
          "website": "https://www.hotelliseurahuone.fi/brasserie-le-havre",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1369465701,
        "lat": 60.169261,
        "lon": 24.9408153,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Zetor",
          "opening_hours:covid19": "off",
          "website": "http://www.zetor.net/",
          "wheelchair": "yes",
          "wikidata": "Q18663125",
          "wikipedia": "fi:Zetor (ravintola)"
        }
      },
      {
        "type": "node",
        "id": 1371731167,
        "lat": 60.1707387,
        "lon": 24.9323723,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4",
          "addr:postcode": "00100",
          "addr:street": "Eteläinen Rautatiekatu",
          "amenity": "restaurant",
          "contact:website": "https://www.raflaamo.fi/fi/helsinki/bistro-manu",
          "name": "Bistro Manu",
          "opening_hours": "Mo-Fr 12:00-22:30; Sa 15:00-22:30",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1371747504,
        "lat": 60.1678101,
        "lon": 24.9375974,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "30",
          "addr:postcode": "00100",
          "addr:street": "Yrjönkatu",
          "alt_name": "Pho Viet Vietnamese Kitchen",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "name": "Phở Việt Vietnamese Kitchen",
          "opening_hours": "Mo-Sa 10:30-22:30; Su 12-22",
          "outdoor_seating": "yes"
        }
      },
      {
        "type": "node",
        "id": 1373165109,
        "lat": 60.1520749,
        "lon": 24.9424957,
        "tags": {
          "addr:city": "Helsinki",
          "addr:postcode": "00150",
          "addr:street": "Sirpalesaari",
          "amenity": "restaurant",
          "email": "sales@asrestaurants.fi",
          "fixme": "siirrä tiedot taloon",
          "name": "Ravintola Saari",
          "phone": "+358974255566",
          "short_name": "Saari",
          "website": "https://www.ravintolasaari.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1375925295,
        "lat": 60.1621151,
        "lon": 24.9242485,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00180",
          "addr:street": "Ruoholahdenranta",
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Bistro Gimis",
          "operator": "Radisson Blu Seaside",
          "website": "https://www.s-kanava.fi/toimipaikka/bistro-gimis/3350815",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1376320188,
        "lat": 60.1673894,
        "lon": 24.9503054,
        "tags": {
          "addr:housenumber": "1",
          "addr:postcode": "00130",
          "addr:street": "Eteläesplanadi",
          "amenity": "restaurant",
          "email": "kappeli@sok.fi",
          "name": "Kappeli",
          "name:sv": "Kapellet",
          "opening_hours": "Mo-Su 10:00-24:00",
          "opening_hours:covid19": "Su-Th 10:00-23:00, Fr-Sa 10:00-24:00",
          "phone": "0107663880",
          "website": "http://www.kappeli.fi/",
          "wheelchair": "yes",
          "wikidata": "Q29413553"
        }
      },
      {
        "type": "node",
        "id": 1376356004,
        "lat": 60.1729642,
        "lon": 24.947954,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Arthur",
          "opening_hours:covid19": "off",
          "website": "https://www.hotelarthur.fi/"
        }
      },
      {
        "type": "node",
        "id": 1376356025,
        "lat": 60.1709525,
        "lon": 24.945571,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "amenity": "restaurant",
          "brand": "Vapiano",
          "cuisine": "italian",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "helsinki1@vapiano.fi",
          "lunch": "yes",
          "name": "Vapiano",
          "opening_hours": "Mo-Th 11:00-23:00; Fr11:00-24:00; Sa 12:00-24:00; Su 12:00-21:00",
          "opening_hours:covid19": "off",
          "outdoor_seating": "yes",
          "website": "https://fi.vapiano.com/",
          "wheelchair": "no",
          "wheelchair:description": "Sisään pääsee, mutta ei paikkaan jossa pääsee tilaamaan ruokaa. You can get in but not to the place where you order you order."
        }
      },
      {
        "type": "node",
        "id": 1377222625,
        "lat": 60.1664179,
        "lon": 24.9349746,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "21",
          "addr:postcode": "00100",
          "addr:street": "Kalevankatu",
          "amenity": "restaurant",
          "cuisine": "japanese",
          "name": "Domo",
          "website": "http://www.domoravintola.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1377247132,
        "lat": 60.1636376,
        "lon": 24.9247454,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "43",
          "addr:postcode": "00180",
          "addr:street": "Eerikinkatu",
          "amenity": "restaurant",
          "contact:email": "kannas@kannas.fi",
          "contact:phone": "09-6944780",
          "contact:website": "http://www.kannas.fi/",
          "cuisine": "local",
          "established": "1939",
          "name": "Ravintola Kannas",
          "opening_hours": "Su 14:00-24:00; Mo-Th 16:00-24:00; Fr 16:00-02:00; Sa 14:00-02:00",
          "opening_hours:covid19": "off",
          "smoking": "no",
          "toilets:wheelchair": "no",
          "website": "http://www.kannas.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1377250652,
        "lat": 60.163146,
        "lon": 24.927851,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "8",
          "addr:street": "Hietalahdenkatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "description": "Nepalese",
          "diet:vegetarian": "yes",
          "name": "Aangan",
          "opening_hours": "Mo-Th 10:30-22:00; Fr 10:30-23:00; Sa 12:00-23:00; Su 12:00-22:00",
          "phone": "+35896214490",
          "website": "http://www.aangan.fi"
        }
      },
      {
        "type": "node",
        "id": 1377250655,
        "lat": 60.1620441,
        "lon": 24.9285051,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "11",
          "addr:postcode": "00180",
          "addr:street": "Hietalahdenranta",
          "amenity": "restaurant",
          "name": "Ravintola Hieta",
          "website": "http://ravintolahieta.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1378007245,
        "lat": 60.1683,
        "lon": 24.9324112,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Dragon's dream"
        }
      },
      {
        "type": "node",
        "id": 1378007257,
        "lat": 60.1667983,
        "lon": 24.9360473,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "17",
          "addr:postcode": "00100",
          "addr:street": "Kalevankatu",
          "amenity": "restaurant",
          "name": "Fig",
          "website": "http://ravintolafig.fi"
        }
      },
      {
        "type": "node",
        "id": 1378007258,
        "lat": 60.16839,
        "lon": 24.9326922,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4-6",
          "addr:postcode": "00100",
          "addr:street": "Urho Kekkosen katu",
          "amenity": "restaurant",
          "contact:website": "http://www.ravintolailves.fi/",
          "name": "Ilves",
          "opening_hours": "Mo-Th 11:00-23:15; Fr 11:00-24:00; Sa 00:00-03:00,11:00-24:00; Su 00:00-03:00"
        }
      },
      {
        "type": "node",
        "id": 1378007271,
        "lat": 60.1673257,
        "lon": 24.9360473,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "26",
          "addr:postcode": "00100",
          "addr:street": "Annankatu",
          "amenity": "restaurant",
          "diet:vegetarian": "yes",
          "name": "Long Wall",
          "opening_hours": "Mo-Fr 11:00-23:00, Sa-Su 12:00-23:00; PH off",
          "phone": "+3589676131",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1378007284,
        "lat": 60.1679839,
        "lon": 24.9355988,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "29",
          "addr:postcode": "00100",
          "addr:street": "Annankatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "New Bamboo Center",
          "opening_hours": "Mo,Tu 10:00-20:00; We,Th 11:00-20:00; Fr 11:00-21:30; PH off",
          "outdoor_seating": "no",
          "website": "https://www.newbamboocenter.com/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1378007285,
        "lat": 60.1668894,
        "lon": 24.9347347,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:street": "Eerikinkatu",
          "amenity": "restaurant",
          "name": "Pasha's Restaurant",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1378007286,
        "lat": 60.1678526,
        "lon": 24.9358008,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "29",
          "addr:postcode": "00100",
          "addr:street": "Annankatu",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Pikku Nepal",
          "opening_hours": "Mo 11:00-22:00; Tu-Fr 11:00-23:00; Sa 13:00-23:00; Su 13:00-22:00; PH off",
          "phone": "+35896931778",
          "website": "http://www.pikkunepal.fi",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1378007296,
        "lat": 60.1681539,
        "lon": 24.934164,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00100",
          "addr:street": "Kansakoulukatu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Pizzeria Dennis",
          "website": "https://www.dennis.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1378007300,
        "lat": 60.1690483,
        "lon": 24.9356581,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Simonkatu",
          "name:sv": "Simonsgatan",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1378064347,
        "lat": 60.1669962,
        "lon": 24.9276881,
        "tags": {
          "access:covid19": "no",
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "delivery:covid19": "yes",
          "drive_through:covid19": "no",
          "name": "Mount Everest",
          "opening_hours": "Mo-Fr 12:00-21:00; Sa,Su 13:00-21:00",
          "opening_hours:covid19": "Mo-Fr 12:00-21:00; Sa,Su 13:00-21:00",
          "takeaway:covid19": "yes"
        }
      },
      {
        "type": "node",
        "id": 1378620638,
        "lat": 60.1683379,
        "lon": 24.9282631,
        "tags": {
          "addr:housenumber": "19",
          "addr:postcode": "00100",
          "addr:street": "Salomonkatu",
          "amenity": "restaurant",
          "cuisine": "indian",
          "diet:vegetarian": "yes",
          "name": "Tandoor",
          "opening_hours": "Mo-Fr 11:00-22:30; Sa 12:00-22:30; Su 13:00-22:00",
          "outdoor_seating": "yes",
          "phone": "050 414 2135",
          "takeaway": "yes",
          "website": "www.tandoor.fi"
        }
      },
      {
        "type": "node",
        "id": 1378950381,
        "lat": 60.1678894,
        "lon": 24.9296354,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Grill it",
          "opening_hours": "Mo-Tu 11:00-23:00; We-Fr 11:00-24:00; Sa 14:00-24:00",
          "website": "https://www.raflaamo.fi/en/helsinki/grill-it-helsinki"
        }
      },
      {
        "type": "node",
        "id": 1378951619,
        "lat": 60.1692236,
        "lon": 24.9297216,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "48",
          "addr:postcode": "00100",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Satkar",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa-Su 12:00-23:00",
          "phone": "+3589611077",
          "url": "http://www.satkar.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1379037953,
        "lat": 60.1691258,
        "lon": 24.9368128,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "8",
          "addr:postcode": "00100",
          "addr:street": "Simonkatu",
          "amenity": "restaurant",
          "cuisine": "spanish",
          "name": "Como Vinoteca"
        }
      },
      {
        "type": "node",
        "id": 1379054404,
        "lat": 60.1679239,
        "lon": 24.9401062,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00100",
          "addr:street": "Kalevankatu",
          "amenity": "restaurant",
          "brand": "Taco Bell",
          "brand:wikidata": "Q752941",
          "brand:wikipedia": "en:Taco Bell",
          "cuisine": "tex-mex",
          "diet:vegetarian": "yes",
          "level": "1",
          "name": "Taco Bell",
          "opening_hours": "Mo-Th 11:00-21:00; Fr-Sa 11:00-24:00; Su 12:00-21:00",
          "outdoor_seating": "no",
          "takeaway": "yes",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1379539170,
        "lat": 60.1585886,
        "lon": 24.9488196,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "russian",
          "email": "sales@asrestaurants.fi",
          "name": "Saslik",
          "opening_hours": "Mo-Fr 12:00-23:00; Jun 21 - Aug 13 off; PH off",
          "opening_hours:covid19": "off",
          "phone": "+35897425550",
          "website": "https://www.asravintolat.fi/en/frontpage.html"
        }
      },
      {
        "type": "node",
        "id": 1379539173,
        "lat": 60.1583951,
        "lon": 24.9496692,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00140",
          "amenity": "restaurant",
          "cuisine": "spanish",
          "name": "amigo",
          "opening_hours": "Mo-Tu 11:00-22:00; We-Fr 11:00-23:00; Sa 15:00-23:00",
          "website": "www.rafla.fi; www.lounaat.fi"
        }
      },
      {
        "type": "node",
        "id": 1379557486,
        "lat": 60.1587642,
        "lon": 24.9465562,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "11",
          "addr:postcode": "00140",
          "addr:street": "Kapteeninkatu",
          "amenity": "restaurant",
          "cuisine": "regional",
          "diet:vegetarian": "yes",
          "email": "ravintola@seahorse.fi",
          "established": "1934",
          "lunch": "yes",
          "name": "Sea Horse",
          "opening_hours": "Mo-Th 10:30-24:00; Fr 10:30-01:00; Sa 12:00-01:00; Su 12:00-24:00; PH off",
          "phone": "+358 9 628 169",
          "website": "www.seahorse.fi",
          "wikidata": "Q7439915"
        }
      },
      {
        "type": "node",
        "id": 1380411385,
        "lat": 60.1653062,
        "lon": 24.9442054,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:street": "Erottajankatu",
          "amenity": "restaurant",
          "name": "Skiffer",
          "opening_hours": "Mo-Th 11:00-21:30, Fr 11:00-22:30, Sa 13:00-22:30, Su 13:00-20:00",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1380974068,
        "lat": 60.169902,
        "lon": 24.9456477,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "9",
          "addr:postcode": "00100",
          "addr:street": "Mikonkatu",
          "alt_name": "Ravintola Penelope",
          "amenity": "restaurant",
          "delivery:covid19": "yes",
          "lunch": "yes",
          "name": "Ravintola Penélope",
          "opening_hours:covid19": "Tu - Th 11:00-20:00; Fr 11:00-21:00; Sa 14:00-21:00",
          "opening_hours:lunch": "Mo-Fr 11:00-14:00",
          "takeaway:covid19": "yes",
          "toilets:wheelchair": "yes",
          "website": "https://ravintolapenelope.fi/",
          "wheelchair": "yes",
          "wheelchair:description": "Invavessa löytyy kokoushuoneen takaa! / The wheelchair accessible restroom is behind the meeting room! Ask help from waiter."
        }
      },
      {
        "type": "node",
        "id": 1380974070,
        "lat": 60.169361,
        "lon": 24.9476437,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "5",
          "addr:street": "Kluuvikatu",
          "amenity": "restaurant",
          "name": "Belge",
          "opening_hours:covid19": "off",
          "phone": "0107663590",
          "website": "http://www.belge.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1380974071,
        "lat": 60.1692096,
        "lon": 24.9334771,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00100",
          "addr:street": "Urho Kekkosen katu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "floor": "1",
          "name": "Ichiban Sushi",
          "opening_hours": "Mo-Fr 11:00-20:30; Sa-Su 12:00-17:30",
          "website": "https://www.ichiban.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1380976598,
        "lat": 60.1680438,
        "lon": 24.9397048,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00100",
          "addr:street": "Kalevankatu",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Ravintola Kosmos",
          "opening_hours": "Mo-Fr 11:30-01:00; Sa 16:00-01:00",
          "website": "http://www.kosmos.fi/"
        }
      },
      {
        "type": "node",
        "id": 1380991231,
        "lat": 60.1784434,
        "lon": 24.9493809,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "12",
          "addr:postcode": "00530",
          "addr:street": "Siltasaarenkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "high_chair": "yes",
          "highchair": "yes",
          "lunch": "yes",
          "name": "Sushi Bar Rice Garden",
          "website": "https://facebook.com/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1381017813,
        "lat": 60.1685632,
        "lon": 24.9283809,
        "tags": {
          "addr:housenumber": "4a",
          "addr:postcode": "00100",
          "addr:street": "Runeberginkatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Kampin pippuri",
          "opening_hours": "Mo-Tu 10:00-24:00; We-Sa 10:00-05:00; Su 12:00-24:00",
          "phone": "09 694 3447",
          "takeaway": "yes",
          "website": "http://www.kampinpippuri.fi/"
        }
      },
      {
        "type": "node",
        "id": 1381017820,
        "lat": 60.1703705,
        "lon": 24.9369528,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Lasipalatsi",
          "url": "http://ravintola.lasipalatsi.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1382297421,
        "lat": 60.1650075,
        "lon": 24.9260949,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "turkish",
          "name": "Halikarnas"
        }
      },
      {
        "type": "node",
        "id": 1382693024,
        "lat": 60.1752082,
        "lon": 24.9249853,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "KuuKuu",
          "summer_terrace": "yes",
          "website": "http://www.kuukuu.info",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1386885394,
        "lat": 60.1755332,
        "lon": 24.9211071,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "29",
          "addr:postcode": "00100",
          "addr:street": "Museokatu",
          "amenity": "restaurant",
          "name": "Ravintola Aito",
          "website": "http://ravintola-aito.fi/aito-in-english/"
        }
      },
      {
        "type": "node",
        "id": 1387035820,
        "lat": 60.1765592,
        "lon": 24.9230647,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "22",
          "addr:postcode": "00100",
          "addr:street": "Eteläinen Hesperiankatu",
          "amenity": "restaurant",
          "name": "Elite",
          "opening_hours": "Mo,Tu 11:30-22:00; We,Th 11:30-23:00; Fr 11:30-24:00, Sa 13:00-24:00, Su 13:00-22:00",
          "opening_hours:covid19": "off",
          "wikidata": "Q11857460"
        }
      },
      {
        "type": "node",
        "id": 1387113672,
        "lat": 60.1801986,
        "lon": 24.9251554,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "27",
          "addr:postcode": "00260",
          "addr:street": "Töölönkatu",
          "amenity": "restaurant",
          "name": "Kuu",
          "opening_hours": "Mo-Fr 11:30-24:00; Sa 14:00-24:00; Su 16:00-23:00",
          "url": "http://www.ravintolakuu.info/"
        }
      },
      {
        "type": "node",
        "id": 1387281666,
        "lat": 60.1774465,
        "lon": 24.9244662,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "15",
          "addr:postcode": "00260",
          "addr:street": "Pohjoinen Hesperiankatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Umeshu",
          "url": "http://www.umeshu.fi/"
        }
      },
      {
        "type": "node",
        "id": 1387650186,
        "lat": 60.1747118,
        "lon": 24.9277956,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "italian",
          "lunch": "yes",
          "name": "Coma",
          "website": "http://www.ravintolacoma.alefoschi.com/"
        }
      },
      {
        "type": "node",
        "id": 1392061081,
        "lat": 60.2517138,
        "lon": 24.8581822,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Onnenautuus"
        }
      },
      {
        "type": "node",
        "id": 1418015240,
        "lat": 60.193948,
        "lon": 24.950846,
        "tags": {
          "addr:housenumber": "9",
          "addr:street": "Elimäenkatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "description": "Lounaskahvila",
          "name": "Kokoroo - sushi",
          "opening_hours": "Mo-Fr 07:00-16:00",
          "phone": "+358458810886",
          "website": "http://www.coffeebeanhelsinki.fi",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1418023161,
        "lat": 60.193724,
        "lon": 24.9519053,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "5",
          "addr:postcode": "00510",
          "addr:street": "Elimäenkatu",
          "amenity": "restaurant",
          "description": "Lounasravintola",
          "name": "Elmstreet",
          "website": "https://www.amica.fi/mobilante",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1427330864,
        "lat": 60.1932255,
        "lon": 24.9516899,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:street": "Elimäenkatu",
          "amenity": "restaurant",
          "description": "Lounasravintola",
          "name": "Tuuren tupa",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1431878138,
        "lat": 60.2609623,
        "lon": 24.9839084,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintola & Bar Vainio Piano 1",
          "phone": "09 347 1186",
          "website": "http://www.vainiopiano1.fi"
        }
      },
      {
        "type": "node",
        "id": 1434933802,
        "lat": 60.2021969,
        "lon": 25.1426468,
        "tags": {
          "amenity": "restaurant",
          "name": "Pizzeria Maavi",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1435521510,
        "lat": 60.2040194,
        "lon": 25.11935,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza;kebab",
          "name": "Cortana express"
        }
      },
      {
        "type": "node",
        "id": 1435521556,
        "lat": 60.203979,
        "lon": 25.1186448,
        "tags": {
          "addr:housenumber": "4",
          "addr:street": "Meri-Rastilan tie",
          "amenity": "restaurant",
          "cuisine": "chicken",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Chitir Chicken",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 1437295052,
        "lat": 60.2290166,
        "lon": 25.028059,
        "tags": {
          "access:covid19": "no",
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00790",
          "addr:street": "Maakaari",
          "addr:unit": "A",
          "amenity": "restaurant",
          "cuisine": "pizza;italian",
          "delivery:covid19": "yes",
          "name": "Ristorante Bello Helsinki",
          "opening_hours": "Mo-Su 11:00-23:00",
          "opening_hours:covid19": "open",
          "smoking": "no",
          "takeaway:covid19": "yes"
        }
      },
      {
        "type": "node",
        "id": 1484101275,
        "lat": 60.229753,
        "lon": 25.0728348,
        "tags": {
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Deli Chef",
          "opening_hours": "Mo-Th 15:00-03:30, Fr 15:00-05:00, Sa 12:00-05:00, Su 12:00-04:00",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1490901361,
        "lat": 60.1688316,
        "lon": 24.9317459,
        "tags": {
          "amenity": "restaurant",
          "level": "1",
          "name": "BBQ-House",
          "opening_hours": "Mo-Th 11:00-23:00; Fr 11:00-24:00; Sa 12:00-23:00; Su 13:00-22:00",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1508767312,
        "lat": 60.1679004,
        "lon": 24.9308186,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Daruma Sushi",
          "name:en": "Kuwano"
        }
      },
      {
        "type": "node",
        "id": 1508767343,
        "lat": 60.1680054,
        "lon": 24.9308566,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "italian;pizza",
          "name": "Il Duetto"
        }
      },
      {
        "type": "node",
        "id": 1513653530,
        "lat": 60.1663086,
        "lon": 24.9347188,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00100",
          "addr:street": "Kalevankatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Happy Food Garden"
        }
      },
      {
        "type": "node",
        "id": 1513653542,
        "lat": 60.1657042,
        "lon": 24.9336838,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "28",
          "addr:postcode": "00100",
          "addr:street": "Kalevankatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Nanking",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa-Su 12:00-22:00",
          "phone": "09 6940338",
          "takeaway": "yes",
          "toilets:wheelchair": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1514631250,
        "lat": 60.1758972,
        "lon": 24.9465409,
        "tags": {
          "address": "Kaisaniemenranta 2",
          "amenity": "restaurant",
          "name": "Viinikahvila Viola",
          "opening_hours:covid19": "off",
          "phone": "09 19124468",
          "url": "www.juhlaravintolat.fi",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1516563402,
        "lat": 60.1828337,
        "lon": 24.9266641,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "17",
          "addr:postcode": "00250",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "american",
          "name": "Ravintola Hook",
          "url": "http://ravintolahook.fi/",
          "website": "http://ravintolahook.fi/"
        }
      },
      {
        "type": "node",
        "id": 1517196274,
        "lat": 60.1855055,
        "lon": 24.9158947,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "11",
          "addr:postcode": "00250",
          "addr:street": "Linnankoskenkatu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "Koyo",
          "opening_hours": "Mo-Th 10:30-22:00; Fr 10:30-23:00; Sa 12:00-23:00; Su 12:00-22:00",
          "opening_hours:covid19": "off",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1523077317,
        "lat": 60.1876662,
        "lon": 24.9631396,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "31",
          "addr:postcode": "00500",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "lunch": "yes",
          "lunch:opening_hours": "Mo-Fr 11:00-14:30",
          "name": "Madame Kurvi",
          "phone": "+358 9 753 0709",
          "smoking": "outside",
          "website": "http://www.madamekurvi.fi"
        }
      },
      {
        "type": "node",
        "id": 1524458338,
        "lat": 60.2352015,
        "lon": 25.0096126,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00710",
          "addr:street": "Rapakiventie",
          "amenity": "restaurant",
          "cuisine": "salad;sandwich",
          "name": "Salaattisiskot",
          "opening_hours": "Mo-Fr 06:00-13:00",
          "opening_hours:covid19": "open",
          "phone": "+358 40 508 1012",
          "takeaway": "yes",
          "website": "https://www.salaattisiskot.com"
        }
      },
      {
        "type": "node",
        "id": 1525453986,
        "lat": 60.1886896,
        "lon": 24.9532304,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "23",
          "addr:postcode": "00500",
          "addr:street": "Fleminginkatu",
          "amenity": "restaurant",
          "beer": "yes",
          "cuisine": "kebab",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "high_seat": "yes",
          "name": "Döner Harju",
          "name:en": "Doner Harju",
          "name:fi": "Döner Harju",
          "opening_hours": "Mo-Th 10:30-22:00; Fr 10:30-23:00; Sa 12:00-23:00; Su 13:00-21:00",
          "website": "https://donerharju.fi/"
        }
      },
      {
        "type": "node",
        "id": 1528652523,
        "lat": 60.1859999,
        "lon": 24.961531,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "19",
          "addr:postcode": "00500",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "cuisine": "asian",
          "lunch": "yes",
          "name": "Sushibar+Wine",
          "opening_hours": "Mo-Fr 11:00-21:00, Sa-Su 14:00-21:00",
          "phone": "+358106668462",
          "website": "https://sushibarwine.com/ravintolat/kallio/"
        }
      },
      {
        "type": "node",
        "id": 1529213452,
        "lat": 60.1795487,
        "lon": 24.9544737,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "8",
          "addr:street": "Sörnäisten rantatie",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "guard:operator": "Falck",
          "name": "Ho Ting",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 1529213478,
        "lat": 60.1812224,
        "lon": 24.9575767,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "5",
          "addr:postcode": "00530",
          "addr:street": "Haapaniemenkatu",
          "addr:unit": "B",
          "amenity": "restaurant",
          "cuisine": "pizza;pasta",
          "name": "Madonna Restaurant",
          "website": "https://www.madonnarestaurant.fi/"
        }
      },
      {
        "type": "node",
        "id": 1530480602,
        "lat": 60.1820621,
        "lon": 24.9553904,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "20",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "cuisine": "cantonese;chinese",
          "name": "Simply Good",
          "smoking": "no"
        }
      },
      {
        "type": "node",
        "id": 1533456538,
        "lat": 60.1788939,
        "lon": 24.9546317,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "7",
          "addr:postcode": "00530",
          "addr:street": "Hakaniemenkatu",
          "amenity": "restaurant",
          "cuisine": "burger;pizza",
          "established": "2013",
          "highchair": "no",
          "internet_access": "wlan",
          "lunch": "yes",
          "lunch:opening_hours": "Mo-Fr 11:00-14:30",
          "name": "Kuja Bar & Bistro",
          "opening_hours": "Mo-Tu 11:00-22:00; We-Th 11:00-24:00; Fr-Sa 11:00-02:00; Su 11:00-21:00",
          "phone": "+358 40 7470 734",
          "short_name": "Kuja",
          "website": "http://www.kujabarbistro.fi/"
        }
      },
      {
        "type": "node",
        "id": 1533487184,
        "lat": 60.1779373,
        "lon": 24.9515349,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6",
          "addr:postcode": "00530",
          "addr:street": "John Stenbergin ranta",
          "amenity": "restaurant",
          "email": "lamer.fms.fi@sodexo.com",
          "lunch": "yes",
          "name": "Ravintola La Mer",
          "opening_hours": "Mo-Fr 11:00-13:30",
          "phone": "+358 10 540 7035",
          "website": "https://www.sodexo.fi/ravintolat/helsinki/la-mer",
          "wikidata": "Q1475554",
          "wikipedia:fi": "Sodexo"
        }
      },
      {
        "type": "node",
        "id": 1542362094,
        "lat": 60.1886563,
        "lon": 24.9395551,
        "tags": {
          "amenity": "restaurant",
          "name": "Safari"
        }
      },
      {
        "type": "node",
        "id": 1562375061,
        "lat": 60.1905909,
        "lon": 24.9149837,
        "tags": {
          "access:covid19": "no",
          "addr:city": "Helsinki",
          "addr:housenumber": "63",
          "addr:postcode": "00250",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "italian",
          "delivery:covid19": "no",
          "drive_through:covid19": "no",
          "name": "Ravintola Il Trio",
          "opening_hours": "Tu-Fr 11:00-23:00; Sa 12:00-23:00",
          "opening_hours:covid19": "Mo-Sa 11:00-20:00",
          "short_name": "Il Trio",
          "takeaway:covid19": "yes",
          "website": "http://iltrio.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1589624942,
        "lat": 60.1805629,
        "lon": 24.9499388,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "11",
          "addr:postcode": "00530",
          "addr:street": "Siltasaarenkatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Americana Pizzeria",
          "website": "http://americanapizzeria.fi/hakaniemi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1589624953,
        "lat": 60.1684278,
        "lon": 24.9432248,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00100",
          "addr:street": "Keskuskatu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "lunch": "yes",
          "name": "La Famiglia",
          "opening_hours:covid19": "off",
          "website": "https://www.raflaamo.fi/fi/helsinki/la-famiglia-helsinki",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1590334306,
        "lat": 60.1689126,
        "lon": 24.9516576,
        "tags": {
          "amenity": "restaurant",
          "brunch": "yes",
          "cuisine": "regional",
          "floor": "2",
          "name": "Sunn",
          "opening_hours": "Mo-Tu 10:30-23:00;We-Fr 10:30-24:00; Sa 10:00-24:00; Su 10:00-22:00",
          "opening_hours:brunch": "Sa-Su 10:00-15:00",
          "opening_hours:covid19": "off",
          "phone": "+358 10 2312 800",
          "website": "http://www.ravintolasunn.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1604685371,
        "lat": 60.1658966,
        "lon": 24.9419939,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6",
          "addr:postcode": "00120",
          "addr:street": "Bulevardi",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "Gaijin",
          "opening_hours": "Mo 17:00-00:30;Tu-Fr 11:30-00:30;Sa 17:00-00:30;Su 17:00-23:00",
          "website": "https://www.gaijin.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1606898175,
        "lat": 60.2148543,
        "lon": 24.8759926,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "14",
          "addr:postcode": "00380",
          "addr:street": "Pitäjänmäentie",
          "amenity": "restaurant",
          "diet:dairy_free": "yes",
          "diet:gluten_free": "yes",
          "diet:lactose_free": "yes",
          "diet:vegan": "yes",
          "email": "ravintola.blancco@wintti.com",
          "lunch:buffet": "Mo-Fr 10:00-14:00",
          "name": "Blancco",
          "opening_hours": "Mo-Fr 10:00-14:00",
          "phone": "+358 010 4399600",
          "website": "http://www.ravintolablancco.com/blancco-ravintolat/pitajanmaki/"
        }
      },
      {
        "type": "node",
        "id": 1629005975,
        "lat": 60.1629118,
        "lon": 24.9333995,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "36",
          "addr:postcode": "00120",
          "addr:street": "Bulevardi",
          "amenity": "restaurant",
          "cuisine": "regional",
          "description:en": "Feelings from Lapland",
          "name": "Saaga Lappish restaurant",
          "opening_hours": "Mo-Sa 12:00-23:00, Su 18:00-22:00",
          "operator": "A&S Ravintolat",
          "phone": "+358 9 7425 5544",
          "website": "https://www.ravintolasaaga.fi/"
        }
      },
      {
        "type": "node",
        "id": 1645286589,
        "lat": 60.2139896,
        "lon": 24.9439086,
        "tags": {
          "amenity": "restaurant",
          "delivery:covid19": "no",
          "guard:operator": "Securitas",
          "name": "Päätön Kana",
          "opening_hours:covid19": "Mo-Fr 11:00-14:00",
          "takeaway:covid19": "yes"
        }
      },
      {
        "type": "node",
        "id": 1645286590,
        "lat": 60.2142881,
        "lon": 24.9440381,
        "tags": {
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Taverna Pohjan Akka",
          "opening_hours": "Mo-Fr 10:00-15:00"
        }
      },
      {
        "type": "node",
        "id": 1645802698,
        "lat": 60.1823128,
        "lon": 24.949135,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "12",
          "addr:postcode": "00530",
          "addr:street": "Kolmas linja",
          "amenity": "restaurant",
          "cuisine": "thai",
          "diet:vegetarian": "yes",
          "name": "Lemon Grass",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 12:00-21:00",
          "phone": "+35898763279",
          "website": "https://eat.fi/fi/helsinki/lemon-grass/menu"
        }
      },
      {
        "type": "node",
        "id": 1660789797,
        "lat": 60.1786385,
        "lon": 24.9243652,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00260",
          "addr:street": "Sandelsinkatu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "Lime Tree",
          "smoking": "no"
        }
      },
      {
        "type": "node",
        "id": 1665559316,
        "lat": 60.1999512,
        "lon": 24.9353101,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00520",
          "addr:street": "Ratapihantie",
          "amenity": "restaurant",
          "description:covid19": "Avoinna vain Ratapihantie 9 henkilökunnalle 6.4-31.5 välisenä aikana",
          "email": "asiakaspalvelu@ravintolavaunu.fi",
          "name": "Ravintola Vaunu",
          "opening_hours": "Mo-Fr 10:30-13:00",
          "opening_hours:covid19": "same",
          "operator": "JK Kitchen",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "no",
          "payment:smartum_note": "yes",
          "phone": "+358 45 889 8867",
          "website": "https://www.jk-kitchen.fi/ravintola_vaunu/"
        }
      },
      {
        "type": "node",
        "id": 1665564542,
        "lat": 60.2012918,
        "lon": 24.9384561,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00520",
          "addr:street": "Asemamiehenkatu",
          "amenity": "restaurant",
          "email": "asemamies@delicatessen.fi",
          "name": "Asemamies",
          "opening_hours": "Mo-Fr 10:30-16:00",
          "opening_hours:covid19": "off",
          "operator": "Delicatessen Ravintolapalvelut",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "no",
          "payment:smartum_note": "yes",
          "phone": "+358 40151 3396",
          "website": "https://www.delicatessen.fi/lounaslistat/asemamies"
        }
      },
      {
        "type": "node",
        "id": 1672065158,
        "lat": 60.1969238,
        "lon": 25.0390569,
        "tags": {
          "amenity": "restaurant",
          "name": "Jufu"
        }
      },
      {
        "type": "node",
        "id": 1675595173,
        "lat": 60.2447467,
        "lon": 25.0454465,
        "tags": {
          "amenity": "restaurant",
          "cafe": "yes",
          "lunch": "only",
          "name": "Julian Pitopalvelu",
          "opening_hours": "Mo-Fr 7:30-14:30; Sa 10:00-14:00"
        }
      },
      {
        "type": "node",
        "id": 1684820969,
        "lat": 60.2562508,
        "lon": 24.9333272,
        "tags": {
          "addr:housenumber": "13",
          "addr:street": "Kuusmiehentie",
          "amenity": "restaurant",
          "name": "Ravintola Paloheinä",
          "opening_hours": "Mo-Fr 09:00-19:30; Sa, Su 09:00-17:30",
          "piste:amenity": "cafe"
        }
      },
      {
        "type": "node",
        "id": 1684979370,
        "lat": 60.1657698,
        "lon": 24.91317,
        "tags": {
          "access": "private",
          "amenity": "restaurant",
          "name": "Telli",
          "source": "survey"
        }
      },
      {
        "type": "node",
        "id": 1686189015,
        "lat": 60.1931289,
        "lon": 24.9068404,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "126",
          "addr:postcode": "00270",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "bar": "yes",
          "brewery": "various;yes",
          "cuisine": "burger;wings",
          "delivery": "yes",
          "internet_access": "wlan",
          "microbrewery": "yes",
          "name": "Mullikka",
          "outdoor_seating": "yes",
          "phone": "(09) 587 9889",
          "source": "Survey",
          "website": "https://www.mullikka.fi/"
        }
      },
      {
        "type": "node",
        "id": 1691755412,
        "lat": 60.2132576,
        "lon": 24.9573761,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "56",
          "addr:postcode": "00610",
          "addr:street": "Koskelantie",
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Ravintola Thai Curry",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 1692159975,
        "lat": 60.229773,
        "lon": 24.881738,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "16",
          "addr:postcode": "00440",
          "addr:street": "Kaupintie",
          "amenity": "restaurant",
          "name": "Lassilan Pizzapalvelu (ex Mardin Express)",
          "website": "https://pizza-online.fi/ravintolat/helsinki/mardinexpress",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1734300492,
        "lat": 60.188484,
        "lon": 24.9566014,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "19",
          "addr:postcode": "00500",
          "addr:street": "Vaasankatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Tuk Tuk",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa-Su 12:00-22:00",
          "phone": "050-465 7655",
          "website": "https://www.facebook.com/Tuk-Tuk-thai-cuisine-105081149535550/"
        }
      },
      {
        "type": "node",
        "id": 1740544447,
        "lat": 60.239647,
        "lon": 25.1117241,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Anand"
        }
      },
      {
        "type": "node",
        "id": 1745815189,
        "lat": 60.1907917,
        "lon": 24.9466797,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:street": "Viipurinkatu",
          "amenity": "restaurant",
          "cuisine": "japanese",
          "name": "Mikura sushi"
        }
      },
      {
        "type": "node",
        "id": 1749881063,
        "lat": 60.1682009,
        "lon": 24.9450061,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00100",
          "addr:street": "Mikonkatu",
          "amenity": "restaurant",
          "cuisine": "spanish",
          "name": "Tapas BarCelona",
          "opening_hours:covid19": "off",
          "website": "https://raflaamo.fi/fi/helsinki/tapas-barcelona",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 1760100146,
        "lat": 60.2103257,
        "lon": 25.1426334,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintola Cecilia"
        }
      },
      {
        "type": "node",
        "id": 1772361176,
        "lat": 60.1889213,
        "lon": 24.9391667,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintolamaailma Kattila",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1807658528,
        "lat": 60.1859308,
        "lon": 24.9602402,
        "tags": {
          "addr:housenumber": "2b",
          "addr:street": "Torkkelinkatu",
          "amenity": "restaurant",
          "name": "Mäkikupla"
        }
      },
      {
        "type": "node",
        "id": 1823252765,
        "lat": 60.1874192,
        "lon": 24.9645234,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5 a",
          "addr:postcode": "00500",
          "addr:street": "Vilhonvuorenkatu",
          "amenity": "restaurant",
          "name": "Jamaican Mamas",
          "shop": "hairdresser",
          "website": "http://jamaicanmamas.com/"
        }
      },
      {
        "type": "node",
        "id": 1823286836,
        "lat": 60.1830985,
        "lon": 24.9541553,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "7",
          "addr:postcode": "00530",
          "addr:street": "Viides linja",
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Du Dii",
          "opening_hours": "Mo-Tu 11:00-20:00; Fr 11:00-19:00; Sa-Su 11:00-20:00",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 1824494277,
        "lat": 60.1771744,
        "lon": 24.9277231,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6a",
          "addr:postcode": "00100",
          "addr:street": "Eteläinen Hesperiankatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Jing Cheng",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa-Su 12:00-22:00",
          "phone": "09442189"
        }
      },
      {
        "type": "node",
        "id": 1847824623,
        "lat": 60.1806797,
        "lon": 24.9534891,
        "tags": {
          "addr:city": "Heldinki",
          "addr:housenumber": "3",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "name": "Koko Jazz Club",
          "website": "http://www.kokojazz.fi/"
        }
      },
      {
        "type": "node",
        "id": 1859059766,
        "lat": 60.1987883,
        "lon": 24.9647601,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00550",
          "addr:street": "Haukilahdenkatu",
          "amenity": "restaurant",
          "kitchen_hours": "Mo-Fr 10:30-14:00",
          "lunch": "yes",
          "name": "Lounasravintola Gusto",
          "old_name": "Lounasravintola Tyros",
          "opening_hours": "Mo-Fr 10:30-14:00",
          "phone": "+3589790089",
          "website": "http://www.lounasravintolagusto.fi/"
        }
      },
      {
        "type": "node",
        "id": 1861218120,
        "lat": 60.1671166,
        "lon": 24.9265843,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "21",
          "addr:postcode": "00180",
          "addr:street": "Lapinlahdenkatu",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "diet:vegan": "only",
          "diet:vegetarian": "only",
          "email": "emoi.ravintola@gmail.com",
          "name": "Emoi",
          "old_name": "Cale Cafe",
          "opening_hours": "Mo-Th 11:00-14:30,17:00-20:00; Fr 11:00-20:00; Sa 13:00-20:00",
          "website": "http://www.em-oi.fi/"
        }
      },
      {
        "type": "node",
        "id": 1861618253,
        "lat": 60.1634551,
        "lon": 24.910584,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "21",
          "addr:postcode": "00180",
          "addr:street": "Itämerenkatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Hua Du",
          "smoking": "no",
          "website": "https://www.kauppakeskusruoholahti.fi/en/shops/-/shops/Ravintolat/429/Hua-Du",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1873095204,
        "lat": 60.1891267,
        "lon": 24.947996,
        "tags": {
          "addr:housenumber": "12",
          "addr:postcode": "00510",
          "addr:street": "Läntinen Brahenkatu",
          "amenity": "restaurant",
          "name": "Kahvila-Ravintola Nuppu",
          "short_name": "Nuppu",
          "website": "www.nuppu.fi"
        }
      },
      {
        "type": "node",
        "id": 1874974292,
        "lat": 60.1634449,
        "lon": 24.9102449,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "21",
          "addr:postcode": "00180",
          "addr:street": "Itämerenkatu",
          "amenity": "restaurant",
          "cuisine": "kebab",
          "name": "Eerikin Pippuri",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 1879678859,
        "lat": 60.242158,
        "lon": 24.844717,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "25",
          "addr:postcode": "00390",
          "addr:street": "Ristipellontie",
          "amenity": "restaurant",
          "cuisine": "japanese;chinese",
          "name": "Raku",
          "opening_hours": "Mo-Fr 10:30-20:30;Sa-Su 12:00-19:30",
          "phone": "09 4289 2298",
          "website": "https://www.facebook.com/pages/category/Local-Business/Raku-Japanese-Cuisine-508925639647331/"
        }
      },
      {
        "type": "node",
        "id": 1883067129,
        "lat": 60.1882793,
        "lon": 24.9428423,
        "tags": {
          "amenity": "restaurant",
          "name": "Funky Kitchen"
        }
      },
      {
        "type": "node",
        "id": 1913091197,
        "lat": 60.1642983,
        "lon": 24.9217561,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1a",
          "addr:postcode": "00180",
          "addr:street": "Mechelininkatu",
          "amenity": "restaurant",
          "name": "Pihka Meclu",
          "short_name": "Pihka",
          "website": "https://meclu.pihka.fi/"
        }
      },
      {
        "type": "node",
        "id": 1913091198,
        "lat": 60.1642755,
        "lon": 24.923286,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "23",
          "addr:postcode": "00180",
          "addr:street": "Ruoholahdenkatu",
          "amenity": "restaurant",
          "name": "Ravintola Savor",
          "website": "http://www.savor.fi/"
        }
      },
      {
        "type": "node",
        "id": 1913096739,
        "lat": 60.1972191,
        "lon": 24.9483761,
        "tags": {
          "amenity": "restaurant",
          "name": "Savor",
          "opening_hours:covid19": "off",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "yes",
          "payment:smartum_note": "yes",
          "website": "http://www.savor.fi/"
        }
      },
      {
        "type": "node",
        "id": 1942472551,
        "lat": 60.2357418,
        "lon": 25.0013375,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00710",
          "addr:street": "Vuolukiventie",
          "amenity": "restaurant",
          "bar": "yes",
          "cuisine": "pizza",
          "name": "Ravintola Vuolu",
          "opening_hours": "Mo-Su 10:00-22:00",
          "opening_hours:covid19": "same",
          "phone": "+358 45 136 7222",
          "takeaway": "yes",
          "website": "https://www.ravintolavuolu.fi/"
        }
      },
      {
        "type": "node",
        "id": 1958398519,
        "lat": 60.2342328,
        "lon": 24.8432837,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00390",
          "addr:street": "Vanha Hämeenkyläntie",
          "amenity": "restaurant",
          "delivery": "yes",
          "name": "Pizza Express - Konala",
          "phone": "0449851177",
          "website": "https://www.pizzaexpresskonala.fi/"
        }
      },
      {
        "type": "node",
        "id": 1974783366,
        "lat": 60.2214759,
        "lon": 25.1387188,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "turkish",
          "name": "Vuosaaren Pizza & Kebab"
        }
      },
      {
        "type": "node",
        "id": 1975276944,
        "lat": 60.1879372,
        "lon": 24.9451876,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00510",
          "addr:street": "Sturenkatu",
          "amenity": "restaurant",
          "cuisine": "russian",
          "name": "BLINIt",
          "opening_hours": "Tu-Fr 12:00-22:00; Sa-Su 13:00-22:00",
          "smoking": "no",
          "website": "https://www.blinit.fi/"
        }
      },
      {
        "type": "node",
        "id": 1985596033,
        "lat": 60.1691795,
        "lon": 24.9442808,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "15",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "cuisine": "mexican",
          "name": "Santa Fe",
          "website": "http://santafe.fi/",
          "wheelchair": "yes",
          "wheelchair:description": "There are ramps to the restaurant when coming from Aleksanterinkatu.\nThere are 2 wheelchair accessible toilets for small(ish) wheelchairs in different sides of the restaurant: there are 3 steps between these 2 halves."
        }
      },
      {
        "type": "node",
        "id": 1985596203,
        "lat": 60.168735,
        "lon": 24.943798,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "50 B",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "name": "La Torrefazione",
          "website": "http://www.latorre.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1985596326,
        "lat": 60.1687127,
        "lon": 24.9449551,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "46",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "brand": "Amarillo",
          "name": "Amarillo",
          "opening_hours": "Mo-We 11:00-24:00; Th,Fr 00:00-02:00,11:00-24:00; Sa 00:00-03:00,11:00-24:00; Su 00:00-03:00,11:00-22:00",
          "website": "https://www.raflaamo.fi/en/helsinki/amarillo-helsinki",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 1985596846,
        "lat": 60.1692626,
        "lon": 24.945722,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00100",
          "addr:street": "Mikonkatu",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "name": "Herra Hau Pho",
          "opening_hours": "Mo-Fr 10:00-20:00,Sa-Su 12:00-20:00",
          "website": "https://www.herrahau.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2000244389,
        "lat": 60.1806844,
        "lon": 24.9252267,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "63 A 21",
          "addr:postcode": "00260",
          "addr:street": "Runeberginkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Sushi Wagocoro",
          "website": "https://facebook.com/sushiwagococo"
        }
      },
      {
        "type": "node",
        "id": 2002425881,
        "lat": 60.1943247,
        "lon": 24.9562304,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "28",
          "addr:postcode": "00550",
          "addr:street": "Sturenkatu",
          "amenity": "restaurant",
          "cuisine": "ethiopian",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Addis",
          "phone": "09 42577877",
          "smoking": "outside",
          "source": "survey",
          "website": "http://addiskitchen.fi/",
          "wheelchair": "no",
          "wheelchair:description": "5 steps to get  in. / 5 kierreporrasta."
        }
      },
      {
        "type": "node",
        "id": 2007037505,
        "lat": 60.171408,
        "lon": 24.9260637,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "21",
          "addr:postcode": "00100",
          "addr:street": "Arkadiankatu",
          "amenity": "restaurant",
          "name": "Sininen baari"
        }
      },
      {
        "type": "node",
        "id": 2017952106,
        "lat": 60.2103371,
        "lon": 24.8830782,
        "tags": {
          "addr:housenumber": "18",
          "addr:street": "Vanha viertotie",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Ren He",
          "website": "http://www.ravintolarenhe.fi/"
        }
      },
      {
        "type": "node",
        "id": 2018446353,
        "lat": 60.1581847,
        "lon": 24.94215,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "21",
          "addr:postcode": "00150",
          "addr:street": "Tehtaankatu",
          "amenity": "restaurant",
          "cuisine": "international",
          "name": "La Maision",
          "opening_hours": "Tu-Fr 17:00-01:00; Sa 15:00-01:00; Jun 20 - Aug 8 off",
          "phone": "+358 50 3212 168",
          "website": "http://lamaison.fi/"
        }
      },
      {
        "type": "node",
        "id": 2018446354,
        "lat": 60.1635285,
        "lon": 24.941378,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6",
          "addr:postcode": "00120",
          "addr:street": "Annankatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Haru",
          "website": "https://harusushi.f"
        }
      },
      {
        "type": "node",
        "id": 2018446356,
        "lat": 60.1644666,
        "lon": 24.9404945,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "15",
          "addr:postcode": "00120",
          "addr:street": "Uudenmaankatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Sushibar+wine",
          "opening_hours": "Mo-Th 11:00-22:00;Fr 11:00-23:00;Sa 14:00-23:00",
          "phone": "+358106668456",
          "website": "https://www.sushibar.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2026076554,
        "lat": 60.1684032,
        "lon": 24.9684649,
        "tags": {
          "amenity": "restaurant",
          "established": "1975",
          "lunch": "yes",
          "name": "Wellamo",
          "opening_hours:covid19": "off",
          "opening_hours:lunch": "Mo-Fr 11:00-14:00",
          "phone": "+358 9 663 139",
          "website": "https://www.wellamo.fi/"
        }
      },
      {
        "type": "node",
        "id": 2026108529,
        "lat": 60.1678809,
        "lon": 24.9666238,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "12 a",
          "addr:postcode": "00160",
          "addr:street": "Luotsikatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Everest Nokka",
          "opening_hours": "Mo-Fr 10:30-22:00; Sa-Su 12:00-22:00",
          "phone": "09-6221966",
          "toilets:wheelchair": "no",
          "website": "http://www.everestyeti.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 2045984524,
        "lat": 60.2130827,
        "lon": 24.886619,
        "tags": {
          "addr:housenumber": "21",
          "addr:postcode": "00320",
          "addr:street": "Vihdintie",
          "amenity": "restaurant",
          "name": "Shell Helmisimpukka Helsinki Etelä-Haaga",
          "opening_hours": "24/7",
          "website": "https://www.shellhelmisimpukka.fi/helsinki-etela-haaga"
        }
      },
      {
        "type": "node",
        "id": 2070223693,
        "lat": 60.2337606,
        "lon": 25.0116297,
        "tags": {
          "amenity": "restaurant",
          "drink": "yes",
          "name": "Ralli",
          "opening_hours": "Su-Th 09:00-01:30; Fr-Sa 09:00-03:00",
          "opening_hours:covid19": "off"
        }
      },
      {
        "type": "node",
        "id": 2070223705,
        "lat": 60.2129317,
        "lon": 25.0964562,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11",
          "addr:postcode": "00910",
          "addr:street": "Klaavuntie",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "name": "Ravintola Comviet",
          "old_name": "Nuudeli Ky Nam",
          "toilets:wheelchair": "no",
          "website": "http://www.ravintolacomviet.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 2077885245,
        "lat": 60.1903134,
        "lon": 24.9715334,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00580",
          "addr:street": "Työpajankatu",
          "addr:unit": "Rak 2e",
          "amenity": "restaurant",
          "name": "Kellohalli",
          "opening_hours": "Mo-Fr 10:30-14:00",
          "terrace": "yes",
          "website": "https://kellohalli.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2083492663,
        "lat": 60.1665025,
        "lon": 24.9267128,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00180",
          "addr:street": "Lapinrinne",
          "amenity": "restaurant",
          "cuisine": "diner;noodles;asian",
          "delivery": "yes",
          "diet:vegan": "yes",
          "name": "Cafe+",
          "name:en": "Mekong",
          "name:fi": "Mekong",
          "name:sv": "Mekong",
          "opening_hours": "Mo-Fr 11:00-20:00; Sa 12:00-21:00",
          "phone": "+358 45 254 3797",
          "website": "https://mekong.restaurant/"
        }
      },
      {
        "type": "node",
        "id": 2088461184,
        "lat": 60.1671577,
        "lon": 24.9371786,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "13",
          "addr:postcode": "00100",
          "addr:street": "Kalevankatu",
          "amenity": "restaurant",
          "brunch": "yes",
          "highchair": "yes",
          "name": "Passio",
          "opening_hours": "Mo-Th 17:00-24:00; Fr-Su 16:00-24:00",
          "website": "http://passiodining.fi",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2094320962,
        "lat": 60.2012777,
        "lon": 25.1497617,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00990",
          "addr:street": "Aurinkoranta",
          "amenity": "restaurant",
          "bar": "yes",
          "contact:email": "ravintolamayur@gmail.com",
          "contact:facebook": "https://www.facebook.com/ravintolamayur/",
          "cuisine": "nepalese;indian;asian",
          "diet:meat": "yes",
          "diet:vegetarian": "yes",
          "lunch": "Mo-Fr 11:00-15:00",
          "name": "Ravintola Mayur",
          "opening_hours": "Mo-Fr 11:00-22:00,Sa-Su 12:00-22:00",
          "opening_hours:kitchen": "Mo-Fr 15:00-21:30,Sa-Su 12:00-21:30",
          "outdoor_seating": "yes",
          "phone": "+358505056887",
          "smoking": "no",
          "start_date": "2017-12",
          "takeaway": "yes",
          "website": "http://www.ravintolamayur.fi/"
        }
      },
      {
        "type": "node",
        "id": 2096775082,
        "lat": 60.1902833,
        "lon": 24.964131,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "68",
          "addr:postcode": "00550",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "contact:website": "http://www.allotria.fi",
          "lunch": "yes",
          "name": "Bar Kapsäkki",
          "website": "http://barkapsakki.fi/"
        }
      },
      {
        "type": "node",
        "id": 2108942658,
        "lat": 60.1665907,
        "lon": 24.9691859,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00160",
          "addr:street": "Merikasarminkatu",
          "amenity": "restaurant",
          "name": "Ravintola Linnankellari",
          "opening_hours": "Mo-Th 11:00-23:00; Fr 11:00-00:00; Sa 15:00-00:00; Su 18:00-22:00",
          "phone": "+358 9 686 45 136",
          "was:name": "Jailbird",
          "website": "https://www.linnankellari.fi/"
        }
      },
      {
        "type": "node",
        "id": 2116645221,
        "lat": 60.224163,
        "lon": 25.0749654,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00920",
          "addr:street": "Kiviparintie",
          "amenity": "restaurant",
          "name": "Naapuriravintola Jyvänen",
          "shop": "bakery",
          "website": "https://s-kanava.fi/toimipaikka/jyvanen-myllypuro/0222354",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2122686073,
        "lat": 60.1667844,
        "lon": 24.9690612,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00160",
          "addr:street": "Merikasarminkatu",
          "amenity": "restaurant",
          "description": "Open in summertime (June - August).",
          "name": "Terassi Linnanpiha",
          "opening_hours": "Jun-Jul: Mo-Fr,Su 15:00-22:00; Jun-Jul: Sa 13:00-22:00; Aug: Mo-Fr 11:30-23:00 open \"Weather permitting\", Aug: Sa 13:00-23:00 open \"Weather permitting\"; Jan-May: closed; Sep-Dec: closed",
          "operator": "Ravintola Linnankellari",
          "phone": "+358 9 686 45 136",
          "website": "https://linnankellari.fi/jailyard/"
        }
      },
      {
        "type": "node",
        "id": 2124960474,
        "lat": 60.1934813,
        "lon": 24.9584862,
        "tags": {
          "addr:housenumber": "18",
          "addr:street": "Suvannontie",
          "amenity": "restaurant",
          "name": "Plein",
          "outdoor_seating": "yes",
          "phone": "+358503333235",
          "toilets:wheelchair": "no",
          "traffic_sign": "FI:372",
          "traffic_sign:2": "FI:855a[9-21]",
          "traffic_sign:3": "FI:871[Vyöhyke 3 Ei koske P-tunnuksella K]",
          "website": "https://www.plein.fi",
          "wheelchair": "no",
          "wheelchair:description": "Kolme porrasta. Henkilökunta avustaa mielellään sisälle. Kesällä pöytiä myös ulkona. 3 steps to get in. Staff is very helpful."
        }
      },
      {
        "type": "node",
        "id": 2132227872,
        "lat": 60.2311815,
        "lon": 24.8812645,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00440",
          "addr:street": "Leiviskäpolku",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Ravintola Xin Yuan",
          "website": "https://pizza-online.fi/ravintolat/helsinki/xinyuan"
        }
      },
      {
        "type": "node",
        "id": 2132227874,
        "lat": 60.229285,
        "lon": 24.8810178,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "18",
          "addr:postcode": "00440",
          "addr:street": "Kaupintie",
          "amenity": "restaurant",
          "cuisine": "indian",
          "lunch": "yes",
          "name": "Moksha ravintola",
          "website": "https://www.moksha.fi/"
        }
      },
      {
        "type": "node",
        "id": 2132227875,
        "lat": 60.2285648,
        "lon": 24.8800924,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00440",
          "addr:street": "Sentnerikuja",
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Lounasravintola Lounastamo",
          "website": "https://www.lounastamo.fi/"
        }
      },
      {
        "type": "node",
        "id": 2133469671,
        "lat": 60.1998115,
        "lon": 24.8837856,
        "tags": {
          "access:covid19": "yes",
          "addr:city": "Helsinki",
          "addr:housenumber": "13",
          "addr:postcode": "00330",
          "addr:street": "Huopalahdentie",
          "amenity": "restaurant",
          "cuisine": "nepalese;indian",
          "cuisine_1": "Himalayan flavour",
          "delivery:covid19": "yes",
          "diet:vegetarian": "yes",
          "drive_through:covid19": "no",
          "name": "Ravintola Lumbini",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa,Su 12:00-22:00",
          "opening_hours:covid19": "Mo-Fr 11:00-22:00; Sa,Su 12:00-22:00",
          "takeaway:covid19": "yes",
          "website": "http://ravintolalumbini.fi/Munkkiniemi/"
        }
      },
      {
        "type": "node",
        "id": 2135880745,
        "lat": 60.2167704,
        "lon": 24.8748019,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00380",
          "addr:street": "Kornetintie",
          "amenity": "restaurant",
          "brunch": "yes",
          "lunch": "yes",
          "name": "SmartEat",
          "operator": "Soupster",
          "website": "http://www.smarteat.fi/menu-pitsku",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2135880758,
        "lat": 60.2179249,
        "lon": 24.8792938,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "13",
          "addr:postcode": "00380",
          "addr:street": "Valimotie",
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Lunch Factory",
          "opening_hours": "Mo-Fr 10:30-14:00",
          "opening_hours:covid19": "off",
          "phone": "+358 9 346 3499",
          "website": "https://www.ravintolafactory.com/"
        }
      },
      {
        "type": "node",
        "id": 2135880773,
        "lat": 60.2215244,
        "lon": 24.8765852,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "27",
          "addr:postcode": "00380",
          "addr:street": "Valimotie",
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Theron Catering",
          "opening_hours": "Mo-Fr 10:30-13:30",
          "opening_hours:covid19": "off",
          "website": "https://www.theroncatering.fi/"
        }
      },
      {
        "type": "node",
        "id": 2135880778,
        "lat": 60.2176986,
        "lon": 24.8779023,
        "tags": {
          "access:covid19": "no",
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00380",
          "addr:street": "Valimotie",
          "amenity": "restaurant",
          "delivery:covid19": "no",
          "drive_through:covid19": "no",
          "lunch": "yes",
          "name": "Variantti",
          "opening_hours:covid19": "Mo-Fr 11:00-13:00",
          "takeaway:covid19": "yes",
          "website": "https://www.taitotalo.com/fi/ravintolat/variantti"
        }
      },
      {
        "type": "node",
        "id": 2135965255,
        "lat": 60.1649528,
        "lon": 24.909249,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "5",
          "addr:postcode": "00180",
          "addr:street": "Porkkalankatu",
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Lounasbistro Dylan Milk",
          "operator": "Soupster",
          "website": "https://www.dylan.fi/"
        }
      },
      {
        "type": "node",
        "id": 2151458227,
        "lat": 60.1637879,
        "lon": 24.9350075,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "19",
          "addr:postcode": "00120",
          "addr:street": "Bulevardi",
          "amenity": "restaurant",
          "cuisine": "korean",
          "lunch": "yes",
          "name": "Giwa",
          "phone": "+358 40 199 3223",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2154497220,
        "lat": 60.2386895,
        "lon": 24.8748158,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "10",
          "addr:postcode": "00420",
          "addr:street": "Klaneettitie",
          "amenity": "restaurant",
          "lunch": "yes",
          "name": "Ravintola Rumpu",
          "opening_hours": "Mo-Fr 08:00-15:00",
          "opening_hours:covid19": "Mo-Fr 08:00-15:00",
          "phone": "+358 50 443 3141",
          "takeaway:covid19": "yes",
          "website": "https://www.ravintolarumpu.fi/33411"
        }
      },
      {
        "type": "node",
        "id": 2181419115,
        "lat": 60.1572739,
        "lon": 24.946711,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "15",
          "addr:postcode": "00140",
          "addr:street": "Pietarinkatu",
          "amenity": "restaurant",
          "cuisine": "international",
          "name": "Ravintola Central",
          "opening_hours": "Mo-Fr 14:00-23:00; Sa-Su 12:00-23:00; PH off",
          "opening_hours:covid19": "off",
          "website": "http://central.fi/"
        }
      },
      {
        "type": "node",
        "id": 2192266500,
        "lat": 60.1948523,
        "lon": 25.0287951,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00810",
          "addr:street": "Hiihtäjäntie",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Gurkha",
          "website": "http://www.gurkha.fi",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 2199663527,
        "lat": 60.1796731,
        "lon": 24.9588779,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:street": "Haapaniemenkatu",
          "amenity": "restaurant",
          "highchair": "yes",
          "lunch": "yes",
          "lunch:opening_hours": "Mo-Fr 11:00-14:00",
          "name": "Tornitupa",
          "opening_hours": "Mo-Fr 08:30-14:30",
          "phone": "+358 9 8764 485",
          "takeaway": "yes",
          "website": "https://www.tornitupa.fi/"
        }
      },
      {
        "type": "node",
        "id": 2213149021,
        "lat": 60.1898954,
        "lon": 24.9713916,
        "tags": {
          "addr:housenumber": "2a",
          "addr:postcode": "00580",
          "addr:street": "Työpajankatu",
          "addr:unit": "5",
          "amenity": "restaurant",
          "delivery": "no",
          "lunch": "yes",
          "name": "Palema",
          "opening_hours:covid19": "Tu-Sa 10:00-15:00",
          "outdoor_seating": "patio",
          "takeaway": "yes",
          "website": "https://ravintolapalema.fi/",
          "wheelchair": "no",
          "wheelchair:description": "5 porrasta sisäänkäynnissä. Five steps to get in."
        }
      },
      {
        "type": "node",
        "id": 2225393048,
        "lat": 60.1657275,
        "lon": 24.949086,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Day & Nite Sushi Bar"
        }
      },
      {
        "type": "node",
        "id": 2246454424,
        "lat": 60.1571703,
        "lon": 24.9455455,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00140",
          "addr:street": "Kapteeninkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Sushi'n'Roll",
          "opening_hours": "Mo-Th 11:00-21:00; Fr 11:00-21:30; Sa 14:00-21:30; Su 14:00-21:00; PH off",
          "website": "http://sushiandroll.com/"
        }
      },
      {
        "type": "node",
        "id": 2247984027,
        "lat": 60.1636399,
        "lon": 24.9422917,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "11",
          "addr:street": "Iso Roobertinkatu",
          "amenity": "restaurant",
          "cuisine": "finedining",
          "name": "Natura Restaurant",
          "opening_hours": "We-Su 17:00-24:00",
          "website": "https://www.restaurantnatura.com/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2249127684,
        "lat": 60.1650264,
        "lon": 24.9420466,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "9-11",
          "addr:postcode": "00120",
          "addr:street": "Uudenmaankatu",
          "amenity": "restaurant",
          "email": "julia.hirvonen@restaurantsoder.fi",
          "lunch": "yes",
          "name": "Söder",
          "opening_hours": "Tu-Sa 16:00-23:00; PH off",
          "opening_hours:covid19": "off",
          "phone": "+358400818572",
          "website": "https://www.restaurantsoder.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2263065434,
        "lat": 60.1875729,
        "lon": 24.9480835,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "greek",
          "name": "Taverna Zorbas"
        }
      },
      {
        "type": "node",
        "id": 2264313699,
        "lat": 60.1667265,
        "lon": 24.9348688,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "14",
          "addr:postcode": "00100",
          "addr:street": "Eerikinkatu",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "delivery": "yes",
          "diet:vegan": "limited",
          "email": "info@vibami.fi",
          "level": "2",
          "lunch": "yes",
          "name": "Vibami Eerikinkatu",
          "opening_hours": "Mo-Th 11:00-21:00; Fr 11:00-22:00; Sa 12:00-22:00; Su off",
          "phone": "+358 45 196 4661",
          "reservation": "yes",
          "takeaway": "yes",
          "was:name": "Helmi",
          "website": "https://www.vibami.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2264313703,
        "lat": 60.163951,
        "lon": 24.9267499,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Konstan Möljä",
          "opening_hours": "Tu-Fr 17:00-22:00; Sa 16:00-23:00; Su,Mo off",
          "phone": "+358 9 6947504",
          "website": "https://www.konstanmolja.fi",
          "website:en": "https://www.konstanmolja.fi/english",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2264356399,
        "lat": 60.1697396,
        "lon": 24.9367976,
        "tags": {
          "addr:city": "Helsinki",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Haiku",
          "website": "https://www.haikusushi.fi",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 2264356403,
        "lat": 60.1677156,
        "lon": 24.9370678,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4",
          "addr:postcode": "00100",
          "addr:street": "Eerikinkatu",
          "amenity": "restaurant",
          "cuisine": "spanish",
          "name": "Parilla Espanola",
          "website": "http://parillaespanola.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2265701916,
        "lat": 60.1802265,
        "lon": 24.9515825,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1a",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "contact:website": "http://soppakeittio.fi/",
          "lunch": "yes",
          "name": "Soppakeittiö Hakaniemi",
          "opening_hours": "Mo-Fr 11:15-16:00; Sa 11:15-15:00",
          "ref": "5;7;9",
          "website": "https://www.facebook.com/soppakeittiohakaniemi",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2267584419,
        "lat": 60.1672111,
        "lon": 24.9413842,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00100",
          "addr:street": "Lönnrotinkatu",
          "amenity": "restaurant",
          "cuisine": "japanese",
          "name": "Kin Sushi Helsinki",
          "opening_hours": "Mo-Fr 11:00-15:00,17:00-22:00;Sa 12:00-22:00;Su 12:00-18:00",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 2267584426,
        "lat": 60.1680709,
        "lon": 24.9389781,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "21a",
          "addr:postcode": "00100",
          "addr:street": "Yrjönkatu",
          "amenity": "restaurant",
          "name": "KarlJohan",
          "website": "http://www.ravintolakarljohan.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2267584430,
        "lat": 60.1679089,
        "lon": 24.940823,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "12",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "name": "Iguana",
          "opening_hours": "Mo-Th 11:00-01:00;Fr-Sa 11:00-03:00;Su 11:00-01:00",
          "website": "http://iguana.fi/mansku.html",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 2268402715,
        "lat": 60.1722304,
        "lon": 24.9555756,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00170",
          "addr:street": "Vironkatu",
          "amenity": "restaurant",
          "cuisine": "finedining",
          "name": "Ask",
          "website": "http://restaurantask.com/"
        }
      },
      {
        "type": "node",
        "id": 2268402718,
        "lat": 60.1680589,
        "lon": 24.9537498,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00170",
          "addr:street": "Pohjoisesplanadi",
          "amenity": "restaurant",
          "cuisine": "italian",
          "lunch": "yes",
          "name": "Vaelsa",
          "website": "https://vaelsa.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 2268402719,
        "lat": 60.1690262,
        "lon": 24.9603914,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7 C",
          "addr:postcode": "00160",
          "addr:street": "Kanavaranta",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Ravintola Nokka",
          "opening_hours": "Mo-Fr 11:30-24:00; Sa 18:00-24:00",
          "short_name": "Nokka",
          "website": "http://ravintolanokka.fi/"
        }
      },
      {
        "type": "node",
        "id": 2269291121,
        "lat": 60.1892609,
        "lon": 24.9175602,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "49",
          "addr:postcode": "00250",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Thai O'Cha",
          "opening_hours": "Sep-May Mo-Fr 10:30-21:00; Sep-May Sa,Su 12:00-21:00; Jun-Aug Mo 11:00-21:00; Jun-Aug Tu-Fr 11:00-22:00; Jun-Aug Sa 12:00-22:00; Jun-Aug Su 12:00-21:00",
          "website": "https://www.ocharestaurant.com/"
        }
      },
      {
        "type": "node",
        "id": 2279773355,
        "lat": 60.1952075,
        "lon": 25.0418087,
        "tags": {
          "addr:housenumber": "4",
          "addr:street": "Puusepänkatu",
          "amenity": "restaurant",
          "name": "Maritori"
        }
      },
      {
        "type": "node",
        "id": 2288147668,
        "lat": 60.1755966,
        "lon": 24.9377989,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:street": "Alvar Aallon katu",
          "amenity": "restaurant",
          "cuisine": "chinese;asian",
          "lunch": "yes",
          "name": "Satkar",
          "name:en": "Chinese restaurant",
          "opening_hours:lunch": "Mo-Fr 11:00-15:00"
        }
      },
      {
        "type": "node",
        "id": 2288185043,
        "lat": 60.16011,
        "lon": 24.8771586,
        "tags": {
          "addr:city": "Helsinki",
          "addr:postcode": "00200",
          "addr:street": "Gyldénintie",
          "amenity": "restaurant",
          "bar": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "lunch": "yes",
          "name": "Casa Mare",
          "opening_hours": "Mo-Th 11:00-22:00; Fr 11:00-21:00; Sa 11:00-23:00; Su off",
          "opening_hours:lunch": "Mo-Fr 11:00-15:00",
          "toilets:wheelchair": "no",
          "website": "https://www.ravintolacasamare.com/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2295878834,
        "lat": 60.174081,
        "lon": 24.9595675,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6",
          "addr:postcode": "00170",
          "addr:street": "Maurinkatu",
          "amenity": "restaurant",
          "name": "Svenska Klubben",
          "website": "https://www.svenskaklubben-helsinki.fi/"
        }
      },
      {
        "type": "node",
        "id": 2303463905,
        "lat": 60.1938757,
        "lon": 24.9062799,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "87",
          "addr:postcode": "00270",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "name": "Wrap And Roll",
          "opening_hours": "Mo-Fr 11:00-18:00",
          "opening_hours:covid19": "off",
          "website": "http://www.wrapandroll.fi/"
        }
      },
      {
        "type": "node",
        "id": 2321883259,
        "lat": 60.1664659,
        "lon": 24.96371,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00170",
          "addr:street": "Kanavakatu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "email": "restaurant@locandascappi.fi",
          "name": "Locanda Scappi",
          "opening_hours": "Mo 07:30-21:00, Tu-Fr 07:30-22:00; Sa 08:00-22:00; Su 08:00-11:00",
          "phone": "+358400244027",
          "traffic_sign": "FI:511",
          "website": "https://www.locandascappi.fi/"
        }
      },
      {
        "type": "node",
        "id": 2322707913,
        "lat": 60.1674861,
        "lon": 24.9388372,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6",
          "addr:postcode": "00100",
          "addr:street": "Kalevankatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "diet:vegetarian": "yes",
          "name": "Putte's Bar & Pizza",
          "opening_hours": "Mo-Th 11:00-24:00, Fr 11:00-03:00, Sa 11:00-02:00, Su 12:00-24:00",
          "website": "http://www.puttes.fi/"
        }
      },
      {
        "type": "node",
        "id": 2331764850,
        "lat": 60.1970095,
        "lon": 25.0546367,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00820",
          "addr:street": "Roihuvuorentie",
          "amenity": "restaurant",
          "cuisine": "japanese",
          "name": "Zheng Sushi Bar",
          "website": "https://eat.fi/en/helsinki/zheng-sushi-bar"
        }
      },
      {
        "type": "node",
        "id": 2333014364,
        "lat": 60.1736974,
        "lon": 24.9391836,
        "tags": {
          "addr:housenumber": "3",
          "addr:street": "Töölönlahdenkatu",
          "amenity": "restaurant",
          "cuisine": "german",
          "name": "Ravintola Hausman",
          "website": "http://ravintolahausman.fi/"
        }
      },
      {
        "type": "node",
        "id": 2349334832,
        "lat": 60.1690148,
        "lon": 24.9457762,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "13 A, 5. krs./Floor 5",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Factory Aleksi",
          "opening_hours": "Mo-Fr 09:00-20:00; Sa 09:00-18:00",
          "phone": "+358 50 400 0292",
          "website": "https://www.ravintolafactory.com/aleksi/"
        }
      },
      {
        "type": "node",
        "id": 2367504827,
        "lat": 60.1725218,
        "lon": 24.8685867,
        "tags": {
          "amenity": "restaurant"
        }
      },
      {
        "type": "node",
        "id": 2371493857,
        "lat": 60.1682598,
        "lon": 24.9520069,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00170",
          "addr:street": "Sofiankatu",
          "amenity": "restaurant",
          "microbrewery": "yes",
          "name": "Bryggeri Helsinki",
          "pub": "yes",
          "short_name": "Bryggeri",
          "summer_terrace": "yes",
          "website": "http://bryggeri.fi/"
        }
      },
      {
        "type": "node",
        "id": 2399251741,
        "lat": 60.1816709,
        "lon": 24.926651,
        "tags": {
          "amenity": "restaurant",
          "name": "Runes"
        }
      },
      {
        "type": "node",
        "id": 2400380711,
        "lat": 60.2564946,
        "lon": 24.9982929,
        "tags": {
          "amenity": "restaurant",
          "name": "La Vera"
        }
      },
      {
        "type": "node",
        "id": 2403504451,
        "lat": 60.1688443,
        "lon": 24.9491166,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Il Siciliano",
          "opening_hours:covid19": "off",
          "website": "https://ilsiciliano.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2403899236,
        "lat": 60.1660454,
        "lon": 24.943352,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "Pastor",
          "opening_hours": "Tu-Th 17:00-23:00;Fr 17:00-03:00;Sa 16:00-03:00",
          "website": "http://www.pastorrestaurant.fi",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2410697256,
        "lat": 60.1602447,
        "lon": 24.9190387,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Välimerenkatu",
          "addr:housenumber": "5",
          "addr:postcode": "00180",
          "addr:street": "Välimerenkatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "ele": "1",
          "name": "Siam Thai Modern Restaurant",
          "note": "Centrum ALEJANDRA yhdistää kahvilan, kauneussalongin ja kukkakauppan.",
          "opening_hours": "Mo 11:00-16:00; Tu-Fr 11:00-22:00; Sa 12:00-22:00; Su 12:00-21:00",
          "phone": "+358 405484131",
          "website": "http://www.alejandra.fi",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2412484165,
        "lat": 60.1839311,
        "lon": 24.9202531,
        "tags": {
          "addr:housenumber": "51a",
          "addr:postcode": "00250",
          "addr:street": "Töölönkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Sushibar + Wine"
        }
      },
      {
        "type": "node",
        "id": 2463147871,
        "lat": 60.1966332,
        "lon": 24.9363253,
        "tags": {
          "access": "private",
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "5",
          "addr:postcode": "00520",
          "addr:street": "Ratavartijankatu",
          "amenity": "restaurant",
          "contact:website": "https://www.sodexo.fi/ravintolat/ravintola-juurakko",
          "cuisine": "regional",
          "level": "-2",
          "lunch": "buffet",
          "name": "Ravintola Juurakko",
          "opening_hours": "Mo-Fr 10:00-14:30",
          "operator": "Sodexo",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "no",
          "payment:smartum_note": "yes",
          "website": "https://www.sodexo.fi/ravintolat/ravintola-juurakko"
        }
      },
      {
        "type": "node",
        "id": 2510120417,
        "lat": 60.1884447,
        "lon": 24.9589993,
        "tags": {
          "addr:housenumber": "9",
          "addr:postcode": "00500",
          "addr:street": "Vaasankatu",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "only",
          "name": "Soi Soi Kasvisravintolat",
          "opening_hours": "Mo-Th 11:00-23:00; Fr-Sa 11:00-02:00; Su 13:00-20:00",
          "phone": "0451497408",
          "website": "https://www.soisoi.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 2518894913,
        "lat": 60.1823148,
        "lon": 24.922893,
        "tags": {
          "addr:housenumber": "37",
          "addr:street": "Töölönkatu",
          "amenity": "restaurant",
          "name": "Serpens",
          "opening_hours": "Mo-Fr 07:30-14:30",
          "website": "http://www.hel.fi/wps/portal/Palmia/Catering-palvelut/Artikkeli?urile=hki:path:/Palmia/fi/Catering-palvelut/Ravintolapalvelut/Ravintolat/Ravintola+Serpens&current=true"
        }
      },
      {
        "type": "node",
        "id": 2531348724,
        "lat": 60.2186714,
        "lon": 24.9070969,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "10",
          "addr:postcode": "00320",
          "addr:street": "Nuijamiestentie",
          "amenity": "restaurant",
          "cuisine": "international",
          "name": "Haaga Inn",
          "opening_hours:covid19": "off",
          "website": "https://www.hotelhaaga.fi/haaga_inn"
        }
      },
      {
        "type": "node",
        "id": 2548994916,
        "lat": 60.1670136,
        "lon": 24.9350255,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "12",
          "addr:street": "Eerikinkatu",
          "amenity": "restaurant",
          "contact:website": "http://www.lasoupe.fi/",
          "name": "La Soupe",
          "opening_hours": "Mo-Fr 10:00-18:00;Sa 11:00-17:00",
          "takeaway": "yes",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 2611793307,
        "lat": 60.2099594,
        "lon": 24.8893026,
        "tags": {
          "access:covid19": "yes",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "delivery:covid19": "no",
          "drive_through:covid19": "no",
          "name": "Mr. Lau",
          "opening_hours:covid19": "open",
          "takeaway:covid19": "yes"
        }
      },
      {
        "type": "node",
        "id": 2611919050,
        "lat": 60.1599789,
        "lon": 24.939878,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "8",
          "addr:postcode": "00150",
          "addr:street": "Pursimiehenkatu",
          "amenity": "restaurant",
          "cuisine": "mexican",
          "name": "Chalupa",
          "opening_hours": "Mo-Su 10:30-20:0",
          "takeaway": "yes",
          "website": "http://chalupa.fi"
        }
      },
      {
        "type": "node",
        "id": 2611919052,
        "lat": 60.1605651,
        "lon": 24.9408787,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:postcode": "00150",
          "addr:street": "Pursimiehenkatu",
          "amenity": "restaurant",
          "cuisine": "japanese",
          "internet_access": "wlan",
          "name": "Len's Keishoku bar",
          "opening_hours": "Mo-Th 11:00-15:00; Fr 11:00-15:00,17:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 2612293133,
        "lat": 60.1668581,
        "lon": 24.9614441,
        "tags": {
          "amenity": "restaurant",
          "brunch": "yes",
          "cuisine": "chinese",
          "lunch": "yes",
          "name": "Peninsula",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa-Su 12:00-22:00",
          "opening_hours:brunch": "su 12:00-18:00",
          "opening_hours:lunch": "Mo-Fr 11:00-14:30",
          "phone": "+358 9 6124 6595",
          "website": "http://www.peninsula1899.com/"
        }
      },
      {
        "type": "node",
        "id": 2623487082,
        "lat": 60.1656877,
        "lon": 24.9361725,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "13",
          "addr:postcode": "00120",
          "addr:street": "Lönnrotinkatu",
          "amenity": "restaurant",
          "brand": "Kotipizza",
          "cuisine": "pizza",
          "name": "Kotipizza",
          "opening_hours": "Mo-Th 11:00-22:00; Fr,Sa 11:00-05:00, Su 11:00-22:00",
          "phone": "+358 207 716 377",
          "website": "https://www.kotipizza.fi/index/20?kotipizzaID=FI00020377"
        }
      },
      {
        "type": "node",
        "id": 2624409832,
        "lat": 60.1640164,
        "lon": 24.9153288,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11-13",
          "addr:postcode": "00180",
          "addr:street": "Itämerenkatu",
          "amenity": "restaurant",
          "brand": "Sodexo",
          "name": "Sodexo",
          "name:en": "Fazer",
          "opening_hours": "Mo-Fr 11:00-14:00",
          "website": "https://www.sodexo.fi/ruoholahti"
        }
      },
      {
        "type": "node",
        "id": 2645894591,
        "lat": 60.2122545,
        "lon": 25.0825952,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "6",
          "addr:postcode": "00930",
          "addr:street": "Turunlinnantie",
          "amenity": "restaurant",
          "brand": "Rax",
          "cuisine": "pizza",
          "email": "itakeskus.rax@restel.fi",
          "level": "2",
          "name": "Rax Buffet",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa-Su 11:00-19:00",
          "phone": "+358 20 766 4921",
          "website": "https://www.rax.fi/ravintolat/helsinki-itakeskus/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2645894601,
        "lat": 60.2121306,
        "lon": 25.0826694,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-7",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "restaurant",
          "cuisine": "regional",
          "level": "2",
          "name": "Suola & Pippuri",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 10:30-19:00; Su 12:00-18:00",
          "phone": "+358 10 837 5701",
          "website": "http://www.suolajapippuri.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2645894606,
        "lat": 60.209587,
        "lon": 25.0775223,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1 B",
          "addr:postcode": "00930",
          "addr:street": "Tallinnanaukio",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Dragon Glory (Chinese kitchen)",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2645894611,
        "lat": 60.2122057,
        "lon": 25.0827907,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-7",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "level": "2",
          "name": "Royal Palace",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-19:00; Su 12:00-19:00",
          "phone": "+358 9 323 9682",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2663386111,
        "lat": 60.1662187,
        "lon": 24.9475344,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "44",
          "addr:street": "Kasarmikatu",
          "amenity": "restaurant",
          "name": "Nude",
          "opening_hours": "Tu-Fr 17:00-02:00; Sa 16:00-02:00; PH off"
        }
      },
      {
        "type": "node",
        "id": 2672185975,
        "lat": 60.1941228,
        "lon": 24.9567143,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "28 b",
          "addr:postcode": "00510",
          "addr:street": "Mäkelänkatu",
          "amenity": "restaurant",
          "cuisine": "mexican",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Chalupa",
          "smoking": "no",
          "toilets:wheelchair": "no",
          "website": "http://chalupa.fi",
          "wheelchair": "no",
          "wheelchair:description": "3 steps to get in. / 3 porrasta sisään."
        }
      },
      {
        "type": "node",
        "id": 2708990509,
        "lat": 60.2522403,
        "lon": 25.0072374,
        "tags": {
          "amenity": "restaurant",
          "name": "Ruoka-aika"
        }
      },
      {
        "type": "node",
        "id": 2757819180,
        "lat": 60.1777288,
        "lon": 24.9507731,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3-5",
          "addr:postcode": "00530",
          "addr:street": "Siltasaarenkatu",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "diet:vegan": "only",
          "diet:vegetarian": "only",
          "email": "sen_chay@yahoo.co.uk",
          "facebook": "https://www.facebook.com/Sen-Chay-169008529957447/",
          "name": "Sen Chay",
          "opening_hours": "Mo-Fr 09:00-20:00, Sa-Su 12:00-20:00",
          "phone": "+358 40 835 2253",
          "website": "https://www.facebook.com/Sen-Chay-169008529957447/"
        }
      },
      {
        "type": "node",
        "id": 2798469263,
        "lat": 60.1531875,
        "lon": 24.9527945,
        "tags": {
          "addr:city": "Helsinki",
          "addr:postcode": "00140",
          "addr:street": "Uunisaari",
          "amenity": "restaurant",
          "capacity": "120",
          "name": "Ravintola Uunisaari",
          "opening_hours": "\"by appointment\"",
          "phone": "+358 (0)9 636870",
          "smoking": "outside"
        }
      },
      {
        "type": "node",
        "id": 2826113970,
        "lat": 60.1698223,
        "lon": 24.9272796,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "23",
          "addr:postcode": "00100",
          "addr:street": "Pohjoinen Rautatiekatu",
          "amenity": "restaurant",
          "capacity": "150",
          "cuisine": "regional",
          "name": "Helkan Keittiö",
          "opening_hours": "Su-Th 17:00 - 22:00, Fr 17:00 - 23:00; Sa 12:00-22:00",
          "opening_hours:covid19": "off",
          "phone": "+358 9 6135 8672",
          "smoking": "outside",
          "website": "https://www.hotelhelka.com/eat/"
        }
      },
      {
        "type": "node",
        "id": 2916226491,
        "lat": 60.192753,
        "lon": 25.0430923,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00880",
          "addr:street": "Abraham Wetterin tie",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Yemeni Restaurant",
          "phone": "045 1181013",
          "start_date": "2021-08-20",
          "website": "https://linktr.ee/resturantyemeni"
        }
      },
      {
        "type": "node",
        "id": 2917442969,
        "lat": 60.1743278,
        "lon": 24.9390806,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:street": "Töölönlahdenkatu",
          "amenity": "restaurant",
          "cuisine": "scandinavian",
          "name": "Ravintola Lumi",
          "opening_hours:covid19": "off",
          "website": "https://www.ravintolalumi.fi/"
        }
      },
      {
        "type": "node",
        "id": 2917442971,
        "lat": 60.1735279,
        "lon": 24.9391172,
        "tags": {
          "access:dog": "yes",
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:street": "Töölönlahdenkatu",
          "amenity": "restaurant",
          "cuisine": "australian",
          "name": "Woolshed",
          "pub": "yes",
          "website": "https://www.woolshed.eu/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 2917442972,
        "lat": 60.1733612,
        "lon": 24.93907,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:street": "Töölönlahdenkatu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "lunch": "yes",
          "name": "Jufu",
          "toilets:wheelchair": "yes",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 2933856571,
        "lat": 60.22615,
        "lon": 24.928727,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00630",
          "addr:street": "Männikkötie",
          "amenity": "restaurant",
          "brand": "Kotipizza",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Kotipizza",
          "office": "company"
        }
      },
      {
        "type": "node",
        "id": 3102673921,
        "lat": 60.1997836,
        "lon": 24.937926,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00520",
          "addr:street": "Veturitori",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "email": "info@merohimal.fi",
          "name": "Mero-Himal",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 11:00-21:00; Su 12:00-21:00",
          "phone": "+358 9 141 091",
          "website": "http://merohimal.fi"
        }
      },
      {
        "type": "node",
        "id": 3145451463,
        "lat": 60.1828683,
        "lon": 24.9484029,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "17",
          "addr:postcode": "00530",
          "addr:street": "Kolmas linja",
          "amenity": "restaurant",
          "diet:vegan": "only",
          "diet:vegetarian": "only",
          "drink:club-mate": "yes",
          "drinking_water": "yes",
          "name": "Loving Hut",
          "opening_hours": "Mo-Fr 11:00-18:00; Sa-Su 12:00-18:00",
          "smoking": "no",
          "website": "https://www.lovinghut.com/fi/"
        }
      },
      {
        "type": "node",
        "id": 3223504268,
        "lat": 60.1680013,
        "lon": 24.9361285,
        "tags": {
          "addr:housenumber": "29 B",
          "addr:street": "Annankatu",
          "amenity": "restaurant",
          "diet:vegan": "only",
          "diet:vegetarian": "only",
          "name": "OmNam",
          "opening_hours": "Mo-Fr 11:00-15:00 open \"Lunch\", We-Fr 17:00-22:00 open \"Dinner\"; Sa 12:00-22:00 open \"Dinner\"",
          "website": "http://omnam.fi/"
        }
      },
      {
        "type": "node",
        "id": 3242760386,
        "lat": 60.2372873,
        "lon": 24.8910458,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Kaari",
          "addr:housenumber": "1",
          "addr:postcode": "00420",
          "addr:street": "Kantelettarentie",
          "amenity": "restaurant",
          "cuisine": "mexican",
          "level": "0",
          "name": "Chilitos",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-19:00; Su 11:00-18:00",
          "phone": "+358 10 76 63872",
          "website": "https://www.raflaamo.fi/fi/helsinki/chilitos-kaari/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 3242763110,
        "lat": 60.2374331,
        "lon": 24.8913984,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Kaari",
          "addr:housenumber": "1",
          "addr:postcode": "00420",
          "addr:street": "Kantelettarentie",
          "amenity": "restaurant",
          "branch": "Helsinki",
          "cuisine": "pasta;italian",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "1",
          "name": "Spaghetteria",
          "opening_hours": "Mo-Fr 10:30-19:00; Sa,Su 11:00-18:00",
          "opening_hours:covid19": "off",
          "phone": "+358 10 766 3871",
          "website": "https://www.raflaamo.fi/fi/helsinki/spaghetteria-kaari/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 3345295966,
        "lat": 60.1892527,
        "lon": 24.9741369,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00580",
          "addr:street": "Vanha talvitie",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Lali Gurans",
          "opening_hours": "Ma - Pe: 10:00 - 16:00",
          "payment:bitcoin": "yes",
          "phone": "+358505989090",
          "website": "http://www.laligurans.fi/?page_id=52"
        }
      },
      {
        "type": "node",
        "id": 3345320894,
        "lat": 60.1652397,
        "lon": 24.9359905,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "41",
          "addr:postcode": "00120",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "cuisine": "french",
          "email": "varaukset@murudining.fi",
          "name": "Muru",
          "opening_hours": "Tu-Sa 17:00-23:30",
          "phone": "+358300472335",
          "website": "https://www.murudining.fi/"
        }
      },
      {
        "type": "node",
        "id": 3345764429,
        "lat": 60.213779,
        "lon": 25.0562432,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintola Holkki"
        }
      },
      {
        "type": "node",
        "id": 3376395262,
        "lat": 60.1521142,
        "lon": 24.8799736,
        "tags": {
          "addr:city": "Helsinki",
          "addr:postcode": "00210",
          "amenity": "restaurant",
          "cuisine": "malaysian",
          "email": "ravintolaborneo@gmail.com",
          "name": "Borneo",
          "opening_hours": "Mo-Fr 10:30-14:30",
          "phone": "+358456006354",
          "toilets:wheelchair": "no",
          "website": "https://www.ravintolaborneo.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 3376404338,
        "lat": 60.148723,
        "lon": 24.8790092,
        "tags": {
          "amenity": "restaurant",
          "name": "Asia Palace"
        }
      },
      {
        "type": "node",
        "id": 3393565882,
        "lat": 60.2232592,
        "lon": 25.1151325,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "30",
          "addr:postcode": "00950",
          "addr:street": "Linnavuorentie",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Power Brothers Autohuolto & -vuokraamo",
          "phone": "0207435345",
          "shop": "car_repair",
          "source": "http://www.kotipizza.fi/fi/ravintolat",
          "source:geometry": "survey",
          "website": "https://www.teboilitavayla.com/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 3424548510,
        "lat": 60.1541712,
        "lon": 24.9903952,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintola Lonna",
          "website": "http://www.lonna.fi/saaren-palvelut/ravintola/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 3446471593,
        "lat": 60.1903924,
        "lon": 24.90563,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00290",
          "addr:street": "Haartmaninkatu",
          "amenity": "restaurant",
          "name": "Ravioli Biomedicum Helsinki",
          "toilets:wheelchair": "yes",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 3456358752,
        "lat": 60.1638807,
        "lon": 24.9462965,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "27",
          "addr:postcode": "00130",
          "addr:street": "Korkeavuorenkatu",
          "amenity": "restaurant",
          "diet:vegan": "only",
          "diet:vegetarian": "only",
          "name": "Magu",
          "opening_hours": "Tu-Fr 11:00-14:30, We-Th 17:00-22:00, Fr-Sa 17:00-24:00",
          "outdoor_seating": "no",
          "phone": "+358447373355",
          "smoking": "no",
          "website": "https://www.maguhelsinki.fi/",
          "wheelchair": "no",
          "wheelchair:description": "4 porrasta / 4 steps up!"
        }
      },
      {
        "type": "node",
        "id": 3456460000,
        "lat": 60.2095381,
        "lon": 25.0679582,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00900",
          "addr:street": "Varikkotie",
          "amenity": "restaurant",
          "capacity": "40",
          "cuisine": "pizza",
          "name": "Classico",
          "opening_hours": "Mo-Th 10:00-22:00, Fr10:00-23, Sa 11:00-23, Su 11:00-22",
          "phone": "+358 9 4289 3785",
          "smoking": "outside",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 3458757395,
        "lat": 60.2127952,
        "lon": 24.876408,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00380",
          "addr:street": "Kutomokuja",
          "amenity": "restaurant",
          "name": "Tennis-Bistro",
          "opening_hours:covid19": "Mo-Fr 07:00-22:00; Sa-Su 08:00-22:00",
          "website": "https://talintenniskeskus.fi/toimijat/tennis-bistro/"
        }
      },
      {
        "type": "node",
        "id": 3461953914,
        "lat": 60.228493,
        "lon": 24.9635345,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "29",
          "addr:postcode": "00640",
          "addr:street": "Kylänvanhimmantie",
          "amenity": "restaurant",
          "name": "Ravintola Vega",
          "smoking": "outside"
        }
      },
      {
        "type": "node",
        "id": 3466341180,
        "lat": 60.20554,
        "lon": 24.9285927,
        "tags": {
          "amenity": "restaurant",
          "brand": "Pizza Hut",
          "cuisine": "pizza",
          "name": "Pizza Hut - Hartwall Arena",
          "takeaway": "yes",
          "website": "https://www.pizzahut.fi/"
        }
      },
      {
        "type": "node",
        "id": 3474122099,
        "lat": 60.167001,
        "lon": 24.9581603,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00160",
          "addr:street": "Katajanokanlaituri",
          "amenity": "restaurant",
          "name": "Neighbour Bistro & Allas Cafe",
          "phone": "+358 40 558 7793",
          "toilets:wheelchair": "yes",
          "website": "https://allasseapool.fi/eng.html",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 3475506031,
        "lat": 60.183804,
        "lon": 24.9587431,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "32",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "cuisine": "sushi;japanese",
          "name": "Sushi Forest",
          "opening_hours": "Mo-Su 11:00-21:00",
          "outdoor_seating": "no",
          "phone": "+358 44 988 3299",
          "website": "https://www.facebook.com/SushiForest"
        }
      },
      {
        "type": "node",
        "id": 3514710504,
        "lat": 60.1658333,
        "lon": 24.9510381,
        "tags": {
          "addr:housenumber": "20",
          "addr:street": "Unioninkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "delivery:covid19": "Closed",
          "level": "1",
          "name": "Hanko Sushi",
          "opening_hours:covid19": "Closed",
          "takeaway:covid19": "Closed"
        }
      },
      {
        "type": "node",
        "id": 3626819793,
        "lat": 60.1822131,
        "lon": 24.9360906,
        "tags": {
          "amenity": "restaurant",
          "name": "Villa Kivi"
        }
      },
      {
        "type": "node",
        "id": 3632905510,
        "lat": 60.1643852,
        "lon": 24.9325294,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "27",
          "addr:postcode": "00180",
          "addr:street": "Lönnrotinkatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "diet:vegetarian": "yes",
          "name": "Red Koi Thai",
          "opening_hours": "Mo-Th 11:00-22:00; Fr 11:00-23:00; Sa 13:00 - 23:00; Su 13:00 - 21:00",
          "takeaway": "yes",
          "website": "http://redkoithai.com",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 3639940855,
        "lat": 60.183078,
        "lon": 24.9471859,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "18",
          "addr:postcode": "00530",
          "addr:street": "Kolmas linja",
          "amenity": "restaurant",
          "name": "Loung3",
          "phone": "+358 44 988 7457",
          "smoking": "outside",
          "website": "http://www.ravintolaloung3.com"
        }
      },
      {
        "type": "node",
        "id": 3642388337,
        "lat": 60.1904453,
        "lon": 24.972473,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00580",
          "addr:street": "Työpajankatu",
          "addr:unit": "R1 C",
          "amenity": "restaurant",
          "capacity": "50",
          "cuisine": "barbecue",
          "delivery": "no",
          "name": "B Smokery",
          "opening_hours": "Mo-Su off; Tu-We 11:00-14:00; Th-Fr 11:00-14:00,17:00-22:00; Sa 13:00-22:00",
          "opening_hours:covid19": "Fr-Sa 15:00-18:00",
          "outdoor_seating": "patio",
          "smoking": "outside",
          "takeaway": "yes",
          "website": "http://bsmokery.fi/"
        }
      },
      {
        "type": "node",
        "id": 3646405537,
        "lat": 60.2078221,
        "lon": 24.9777482,
        "tags": {
          "access:covid19": "yes",
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6c",
          "addr:postcode": "00560",
          "addr:street": "Arabiankatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "drive_through:covid19": "no",
          "name": "Parmesan Arabia",
          "opening_hours": "Mo-Fr 10:00-22:00; Sa,Su 11:00-22:00",
          "opening_hours:covid19": "Mo-Fr 10:00-22:00; Sa,Su 11:00-22:00",
          "outdoor_seating": "yes",
          "phone": "+358504112141",
          "takeaway:covid19": "yes",
          "website": "http://www.parmesanarabia.fi/"
        }
      },
      {
        "type": "node",
        "id": 3654792230,
        "lat": 60.222498,
        "lon": 24.8710287,
        "tags": {
          "amenity": "restaurant",
          "brand": "Sodexo",
          "name": "Sodexo"
        }
      },
      {
        "type": "node",
        "id": 3654805537,
        "lat": 60.222028,
        "lon": 24.8635097,
        "tags": {
          "amenity": "restaurant",
          "delivery": "no",
          "name": "Picante",
          "opening_hours": "Mo-Th 07:30-14:30; Fr 07:30-14:00",
          "smoking": "no",
          "website": "https://www.taitotalo.com/ravintolat/picante/"
        }
      },
      {
        "type": "node",
        "id": 3679339750,
        "lat": 60.1581911,
        "lon": 24.9213831,
        "tags": {
          "access:covid19": "no",
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00220",
          "addr:street": "Tyynenmerenkatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "mountkailash.nepal @gmail.com",
          "name": "Mount Kailash",
          "opening_hours": "Mo-Fr 10:30-22:00; Sa 12:00-23:00; Su 12:00-22:00",
          "opening_hours:covid19": "Mo-Fr 11:00-20:00; Sa 12:00-21:00; Su 12:00-20:00",
          "phone": "+358 44 4496050",
          "smoking": "no",
          "takeaway:covid19": "yes",
          "website": "https://www.mountkailash.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 3688552937,
        "lat": 60.1721139,
        "lon": 24.9522529,
        "tags": {
          "amenity": "restaurant"
        }
      },
      {
        "type": "node",
        "id": 3775525361,
        "lat": 60.2368495,
        "lon": 24.891294,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Kaari",
          "addr:housenumber": "1",
          "addr:postcode": "00420",
          "addr:street": "Kantelettarentie",
          "amenity": "restaurant",
          "branch": "Kannelmäki",
          "cuisine": "sushi",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "kannelmaki@hankosushi.fi",
          "level": "0",
          "name": "Hanko Sushi",
          "opening_hours": "Mo-Fr 11:00-19:00; Sa 12:00-19:00; Su 13:00-17:00",
          "phone": "+358 50 316 0818",
          "website": "http://www.hankosushi.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 3790757558,
        "lat": 60.2388806,
        "lon": 24.8497887,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Kauppakeskus Ristikko",
          "addr:housenumber": "1",
          "addr:postcode": "00390",
          "addr:street": "Ajomiehentie",
          "amenity": "restaurant",
          "cuisine": "asian",
          "level": "1",
          "name": "Kung Food Panda",
          "opening_hours": "Mo-Fr 10:30-19:00; Sa 11:00-18:00; Su 12:00-17:00",
          "smoking": "no",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 3790757559,
        "lat": 60.2389008,
        "lon": 24.8499558,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Kauppakeskus Ristikko",
          "addr:housenumber": "1",
          "addr:postcode": "00390",
          "addr:street": "Ajomiehentie",
          "amenity": "restaurant",
          "cuisine": "indian",
          "level": "1",
          "name": "Mother India",
          "opening_hours:kitchen": "Mo-Fr 10:30-14:00",
          "phone_1": "+358401472666",
          "website": "https://motherindia.fi/"
        }
      },
      {
        "type": "node",
        "id": 3823271812,
        "lat": 60.1833953,
        "lon": 24.9239561,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "70",
          "addr:postcode": "00250",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Sushi Panda",
          "smoking": "no",
          "website": "https://www.sushipanda.fi/"
        }
      },
      {
        "type": "node",
        "id": 3827360135,
        "lat": 60.1829224,
        "lon": 24.9816023,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2a",
          "addr:postcode": "00540",
          "addr:street": "Capellan puistotie",
          "amenity": "restaurant",
          "delivery": "no",
          "name": "La Bella Trattoria",
          "opening_hours": "Mo-Fri 10:30 - 22:00 // Sa 11:00 - 22:00 // Su 12:00-21:00",
          "opening_hours:covid19": "open",
          "outdoor_seating": "yes",
          "phone": "+458 50 444 777 4",
          "takeaway": "yes",
          "takeaway:covid19": "yes",
          "website": "https://www.labellatrattoria.fi/"
        }
      },
      {
        "type": "node",
        "id": 3888998933,
        "lat": 60.233812,
        "lon": 25.0114964,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00710",
          "addr:street": "Meripihkatie",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "delivery": "no",
          "name": "Namaste Nepal",
          "opening_hours": "Mo 11:00-20:00; We-Fr 11:00-22:00; Sa-Su 12:00-22:00",
          "opening_hours:covid19": "restricted",
          "outdoor_seating": "no",
          "phone": "+358 40 1397568",
          "takeaway": "no",
          "website": "http://www.namastenepal.fi/"
        }
      },
      {
        "type": "node",
        "id": 3900514148,
        "lat": 60.1643598,
        "lon": 24.9476071,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00130",
          "addr:street": "Pieni Roobertinkatu",
          "amenity": "restaurant",
          "name": "Krog Roba",
          "website": "https://www.lillaroberts.com/en/restaurant"
        }
      },
      {
        "type": "node",
        "id": 4056444563,
        "lat": 60.1978875,
        "lon": 24.9495286,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "45",
          "addr:postcode": "00550",
          "addr:street": "Mäkelänkatu",
          "addr:unit": "C",
          "amenity": "restaurant",
          "cuisine": "african",
          "description": "African Pots on vuonna 2015 perustettu afrikkalainen keittiö joka tarjoaa afrikkalaista buffet fuusioruokaa. Ruuan lisäksi tarjoamme erilaisia palveluja kuten catering ja ruokakursseja sekä kouluvierailuja. Lisätietoa palveluista löytyy kotisivun palvelut",
          "email": "info@africanpots.fi",
          "level": "0",
          "name": "African Pots",
          "name:en": "Lunch Restaurant African Pots",
          "name:fi": "Lounasravintola African Pots",
          "opening_hours": "Mo-Fr 11:00-16:00; Sa 13:00-18:00",
          "phone": "+358 46 644 6545",
          "start_date": "2015",
          "website": "http://www.africanpots.fi/"
        }
      },
      {
        "type": "node",
        "id": 4058659424,
        "lat": 60.1886796,
        "lon": 24.9634711,
        "tags": {
          "amenity": "restaurant",
          "name": "Georgian house",
          "website": "http://georgianhouse.fi/"
        }
      },
      {
        "type": "node",
        "id": 4069605897,
        "lat": 60.2009612,
        "lon": 24.9373729,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00520",
          "addr:street": "Rautatieläisenkatu",
          "amenity": "restaurant",
          "brand": "Katri Antell",
          "email": "antell.akavatalo@antell.fi",
          "name": "Antell Akavatalo",
          "opening_hours": "Mo–Th 07:45–17:00; Pe 07:.45–16:00",
          "opening_hours:covid19": "off",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "no",
          "payment:smartum_note": "yes",
          "phone": "+358 20 770 2135",
          "website": "https://www.antell.fi/akavatalo/"
        }
      },
      {
        "type": "node",
        "id": 4069605899,
        "lat": 60.1979922,
        "lon": 24.9367167,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00520",
          "addr:street": "Junailijanaukio",
          "amenity": "restaurant",
          "name": "Insinöörit ja ekonomit",
          "opening_hours": "Mo-Fr 07:30-14:30",
          "opening_hours:covid19": "off",
          "operator": "Food & Co",
          "phone": "+358 40 669 4406",
          "website": "https://foodandco.fi/ravintolat/Ravintolat-kaupungeittain/helsinki/insinoorit--ekonomit--talo/"
        }
      },
      {
        "type": "node",
        "id": 4069605900,
        "lat": 60.2013611,
        "lon": 24.9398291,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11",
          "addr:postcode": "00520",
          "addr:street": "Ratamestarinkatu",
          "amenity": "restaurant",
          "email": "ratamestari@delicatessen.fi",
          "name": "Ravintola Ratamestari",
          "old_name": "Ravintola Maku",
          "opening_hours": "Mo-Fr 07:30-14:30",
          "opening_hours:covid19": "off",
          "operator": "Delicatessen Ravintolapalvelut",
          "phone": "+358 40 351 3596",
          "short_name": "Pöytä;Maku",
          "website": "https://www.delicatessen.fi/lounaslistat/ratamestari"
        }
      },
      {
        "type": "node",
        "id": 4069605901,
        "lat": 60.1991238,
        "lon": 24.9379351,
        "tags": {
          "access:covid19": "yes",
          "addr:city": "Helsinki",
          "addr:housenumber": "10",
          "addr:postcode": "00520",
          "addr:street": "Opastinsilta",
          "amenity": "restaurant",
          "cuisine": "asian",
          "delivery:covid19": "no",
          "description:covid19": "Soita +358 45 8408836 ja tilaa",
          "name": "Mala",
          "opening_hours:covid19": "Mo-Sa 10:30-18:30",
          "outdoor_seating": "yes",
          "phone": "+358 45 8408836",
          "takeaway:covid19": "yes",
          "website": "https://mala.fi/"
        }
      },
      {
        "type": "node",
        "id": 4069605902,
        "lat": 60.198122,
        "lon": 24.9408146,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00520",
          "addr:street": "Ratamestarinkatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Thai Asia Take-Away",
          "opening_hours": "Mo-Fr 11:00-19:00",
          "phone": "+358 50 3006180"
        }
      },
      {
        "type": "node",
        "id": 4069624672,
        "lat": 60.1963815,
        "lon": 24.9505766,
        "tags": {
          "amenity": "restaurant",
          "name": "Antell Vallilan Akseli",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "no",
          "payment:smartum_note": "yes"
        }
      },
      {
        "type": "node",
        "id": 4109415495,
        "lat": 60.1841727,
        "lon": 24.9602534,
        "tags": {
          "access:covid19": "no",
          "addr:city": "Helsinki",
          "addr:housenumber": "13b",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "addr:unit": "B",
          "amenity": "restaurant",
          "brunch": "yes",
          "delivery:covid19": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Onda",
          "opening_hours": "Mo-Sa 11:00-22:00",
          "opening_hours:covid19": "Tu-Fr 11:00-12:00",
          "outdoor_seating": "terrace",
          "phone": "044-0660530",
          "takeaway:covid19": "yes",
          "website": "http://www.ondaruokala.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 4142570489,
        "lat": 60.1690106,
        "lon": 24.9366378,
        "tags": {
          "addr:city": "Helsinki",
          "addr:street": "simonskatan",
          "amenity": "restaurant",
          "name": "g-lounge",
          "wheelchair": "yes",
          "wheelchair:description": "Nice view and good tapas"
        }
      },
      {
        "type": "node",
        "id": 4150192017,
        "lat": 60.1628579,
        "lon": 24.9291521,
        "tags": {
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Fat Ramen"
        }
      },
      {
        "type": "node",
        "id": 4150192889,
        "lat": 60.1630534,
        "lon": 24.9297119,
        "tags": {
          "amenity": "restaurant",
          "name": "Corretto",
          "opening_hours": "Mo, Tu 11:00-16:00, 09:00-18:00; We-Fr 11:00-21:30; Sa 12:00-21:30"
        }
      },
      {
        "type": "node",
        "id": 4169260332,
        "lat": 60.2367302,
        "lon": 24.8586901,
        "tags": {
          "amenity": "restaurant",
          "name": "Lounas KasteTaimi"
        }
      },
      {
        "type": "node",
        "id": 4169260333,
        "lat": 60.2381526,
        "lon": 24.8573745,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Ravintola Misteli"
        }
      },
      {
        "type": "node",
        "id": 4210384605,
        "lat": 60.1966462,
        "lon": 24.9473509,
        "tags": {
          "amenity": "restaurant",
          "name": "Factory - Bistro Vallila",
          "opening_hours:covid19": "off",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "yes",
          "payment:smartum_note": "yes"
        }
      },
      {
        "type": "node",
        "id": 4226460217,
        "lat": 60.1670393,
        "lon": 24.9471059,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Presto",
          "operator": "ita",
          "website": "http://www.ravintolapresto.fi/"
        }
      },
      {
        "type": "node",
        "id": 4251242659,
        "lat": 60.1706519,
        "lon": 24.9279108,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "58",
          "addr:postcode": "00100",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "name": "Twisted Street Kitchen",
          "opening_hours": "Mo-Th 11:00-14:30; Fr 11:00-14:30",
          "website": "https://www.twistedhelsinki.fi/"
        }
      },
      {
        "type": "node",
        "id": 4254231989,
        "lat": 60.1718352,
        "lon": 24.9455576,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "19",
          "addr:postcode": "00100",
          "addr:street": "Mikonkatu",
          "amenity": "restaurant",
          "cuisine": "burger",
          "name": "Sports Bar Casino Helsinki",
          "opening_hours": "Mo-Th,Su 12:00-00:30; Fr-Sa 12:00-01:30"
        }
      },
      {
        "type": "node",
        "id": 4287097489,
        "lat": 60.2118782,
        "lon": 25.107025,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00910",
          "addr:street": "Puotilantie",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Puotilan kartano",
          "name:fi": "Puotilan kartano",
          "name:sv": "Botby gård",
          "opening_hours": "Mo-Fr 11:00-14:30; Sa,Su 11:00-14:30",
          "website": "http://www.puotilankartano.fi",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 4315999996,
        "lat": 60.2119883,
        "lon": 25.0826493,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-5",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "restaurant",
          "cuisine": "burger",
          "level": "2",
          "name": "Fonda del Sol",
          "opening_hours": "Mo-Th 10:30-21:00; Fr-Sa 10:30-22:00; Su 12:00-19:00",
          "phone": "+358 10 837 5701",
          "website": "http://www.fonda.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4324936874,
        "lat": 60.1977822,
        "lon": 24.8758884,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "22",
          "addr:postcode": "00330",
          "addr:street": "Munkkiniemen puistotie",
          "amenity": "restaurant",
          "diet:vegan": "no",
          "diet:vegetarian": "only",
          "name": "soul flow cafe",
          "opening_hours": "Mo-Su 10:00-19:00;",
          "website": "https://www.facebook.com/soulflowcafe/"
        }
      },
      {
        "type": "node",
        "id": 4339457366,
        "lat": 60.1950391,
        "lon": 24.9013462,
        "tags": {
          "addr:housenumber": "152",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "brand": "PizzaExpress",
          "brand:wikidata": "Q662845",
          "brand:wikipedia": "en:PizzaExpress",
          "check_date:opening_hours": "2021-02-10",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "PizzaExpress",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "phone": "010 281 26993",
          "website": "https://pizza-online.fi/"
        }
      },
      {
        "type": "node",
        "id": 4341761034,
        "lat": 60.1540833,
        "lon": 24.8872635,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00210",
          "addr:street": "Vattuniemenranta",
          "amenity": "restaurant",
          "cuisine": "Nepalese",
          "name": "Ravintola Lumbini",
          "opening_hours": "Mo-Th 11:00-21:00; Fr 11:00-22:00; Sa 12:00-22:00; Su 12:00-21:00",
          "smoking": "no",
          "website": "http://ravintolalumbini.fi/Lauttasaari/"
        }
      },
      {
        "type": "node",
        "id": 4351743616,
        "lat": 60.1655559,
        "lon": 24.9498892,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "17",
          "addr:postcode": "00130",
          "addr:street": "Fabianinkatu",
          "amenity": "restaurant",
          "diet:vegan": "no",
          "diet:vegetarian": "yes",
          "name": "The Cock",
          "opening_hours": "Mo-Fr 16:00-23:00, Sa 12:00-23:00",
          "website": "http://thecock.fi",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 4370935158,
        "lat": 60.177075,
        "lon": 24.9514424,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00530",
          "addr:street": "John Stenbergin ranta",
          "amenity": "restaurant",
          "name": "Pizzorante Bro",
          "opening_hours": "Mo-Fr 11:00-23:00; Sa-Su 12:00-10:00",
          "website": "https://www3.hilton.com/en/hotels/finland/hilton-helsinki-strand-HELHIHI/dining/index.html",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4377583944,
        "lat": 60.1692828,
        "lon": 24.934287,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1 A, Floor E",
          "addr:postcode": "00100",
          "addr:street": "Urho Kekkosen katu",
          "amenity": "restaurant",
          "check_date:diet:vegetarian": "2021-08-12",
          "diet:kosher": "no",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Memphis",
          "opening_hours": "Mo-Tu 11:00-23:00, We-Th 11:00-21:00; Fr 11:00-24:00; Sa 00:00-01:00; Sa 11:00-24:00; Su 00:00-02:00; Su 12:00-23:00",
          "opening_hours:covid19": "off",
          "toilets:wheelchair": "yes",
          "website": "https://www.raflaamo.fi/fi/helsinki/memphis-kamppi",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4377596789,
        "lat": 60.1692734,
        "lon": 24.9309494,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "15, 2. krs./Floor 2",
          "addr:postcode": "00100",
          "addr:street": "Salomonkatu",
          "amenity": "restaurant",
          "name": "Take Sushi",
          "website": "https://www.facebook.com/takesushi.fi",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4411091862,
        "lat": 60.1996319,
        "lon": 24.9400868,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00520",
          "addr:street": "Ratamestarinkatu",
          "amenity": "restaurant",
          "email": "limepark@delicatessen.fi",
          "name": "Ravintola Lime Park",
          "opening_hours": "Mo-Fr 07:45-14:30",
          "opening_hours:covid19": "off",
          "operator": "Delicatessen Ravintolapalvelut",
          "payment:cash": "yes",
          "payment:smartum_card": "no",
          "payment:smartum_mobile": "yes",
          "payment:smartum_note": "yes",
          "phone": "+358 40 640 3877",
          "website": "https://www.delicatessen.fi/lounaslistat/lime-park"
        }
      },
      {
        "type": "node",
        "id": 4449361053,
        "lat": 60.19455,
        "lon": 24.9574745,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "27",
          "addr:postcode": "00550",
          "addr:street": "Mäkelänkatu",
          "amenity": "restaurant",
          "cuisine": "venezuelan",
          "name": "Restaurante Coco Grill",
          "phone": "+358 41 3681084",
          "smoking": "no",
          "toilets:wheelchair": "yes",
          "website": "https://www.restaurantecocogrill.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4452518084,
        "lat": 60.238432,
        "lon": 25.1002339,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00940",
          "addr:street": "Rekipellontie",
          "amenity": "restaurant",
          "check_date:opening_hours": "2021-02-28",
          "cuisine": "pizza",
          "delivery": "yes",
          "diet:vegan": "no",
          "diet:vegetarian": "yes",
          "name": "Pizza Roosa",
          "opening_hours": "Mo-Th 10:30-22:00; Fr-Sa 10:30-23:00; Su 10:30-22:00",
          "phone": "+358 9 340 5670",
          "smoking": "outside",
          "takeaway": "yes",
          "website": "http://www.pizzaroosa.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 4457158392,
        "lat": 60.210438,
        "lon": 25.0796642,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-7",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "restaurant",
          "cuisine": "pasta",
          "email": "itis@pastabox.fi",
          "level": "1",
          "name": "Pasta Box",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 10:30-19:00; Su 12:00-18:00",
          "phone": "+358 10 574 7100",
          "website": "http://www.pastabox.fi/",
          "wheelchair": "yes",
          "wheelchair:description": "Chef Hans Välimäki's place."
        }
      },
      {
        "type": "node",
        "id": 4479286495,
        "lat": 60.1612457,
        "lon": 24.9299716,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5 C",
          "addr:postcode": "00180",
          "addr:street": "Hietalahdenranta",
          "amenity": "restaurant",
          "name": "Ravintola Salve",
          "website": "https://raflaamo.fi/fi/helsinki/salve",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4488070413,
        "lat": 60.1667434,
        "lon": 24.9294067,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00180",
          "addr:street": "Lapinlahdenkatu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "Ravintola MAD",
          "phone": "+3358 45 1698366",
          "takeaway": "yes",
          "website": "http://ravintola-mad.com/"
        }
      },
      {
        "type": "node",
        "id": 4510904189,
        "lat": 60.2338422,
        "lon": 25.0257819,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11",
          "addr:postcode": "00700",
          "addr:street": "Ketokivenkaari",
          "amenity": "restaurant",
          "name": "Malmin hautausmaan lounasravintola",
          "operator": "Gaius-säätiö",
          "website": "http://www.gaius-saatio.fi/gaius-ravintolat/"
        }
      },
      {
        "type": "node",
        "id": 4518279089,
        "lat": 60.1700358,
        "lon": 24.9437993,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00100",
          "addr:street": "Kaivokatu",
          "amenity": "restaurant",
          "name": "Ateneum Bistro",
          "opening_hours:covid19": "off",
          "toilets:wheelchair": "yes",
          "website": "https://ateneum.fi/ateneum-bistro/",
          "wheelchair": "yes",
          "wheelchair:description": "Wheelchair entrance: Ateneuminkuja, elevator."
        }
      },
      {
        "type": "node",
        "id": 4518283089,
        "lat": 60.1691997,
        "lon": 24.9447649,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "15",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "name": "MorriSon's Pizzeria & Spagetteria",
          "website": "http://pizzamorrisons.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 4523219227,
        "lat": 60.1994275,
        "lon": 24.9429518,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00520",
          "addr:street": "Asemamestarinkatu",
          "amenity": "restaurant",
          "delivery:covid19": "yes",
          "email": "herkku@harjulanherkku.fi",
          "name": "Harjulan Herkku lounasravintola",
          "name:en": "Harjulan Herkku Lunch Restaurant",
          "opening_hours": "Mo-Fr 11:00-13:00",
          "opening_hours:covid19": "same",
          "phone": "+358 50 505 5495",
          "takeaway:covid19": "yes",
          "website": "https://harjulanherkku.fi/"
        }
      },
      {
        "type": "node",
        "id": 4524298499,
        "lat": 60.1963659,
        "lon": 24.943216,
        "tags": {
          "amenity": "restaurant",
          "name": "Sodexo Pikseli",
          "payment:cash": "yes",
          "payment:smartum_card": "yes",
          "payment:smartum_mobile": "no",
          "payment:smartum_note": "yes"
        }
      },
      {
        "type": "node",
        "id": 4526426303,
        "lat": 60.165945,
        "lon": 24.9460726,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4",
          "addr:postcode": "00130",
          "addr:street": "Rikhardinkatu",
          "amenity": "restaurant",
          "cuisine": "georgian",
          "name": "Purpur",
          "opening_hours": "Tu-Th 17:00-23:00; Fr 17:00-24:00; Sa 15:00-24:00; PH off",
          "website": "http://www.purpur.fi/"
        }
      },
      {
        "type": "node",
        "id": 4539987606,
        "lat": 60.2383083,
        "lon": 24.9278122,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "56",
          "addr:postcode": "00660",
          "addr:street": "Pakilantie",
          "amenity": "restaurant",
          "diet:kosher": "no",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "House of Sandwiches",
          "opening_hours": "Mo-Fr 07:00-18:00; Sa 17:00-22:00",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4542473991,
        "lat": 60.1633693,
        "lon": 24.9381104,
        "tags": {
          "addr:housenumber": "22",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "name": "Ravintola Nolla",
          "opening_hours": "Ti-la 17-24"
        }
      },
      {
        "type": "node",
        "id": 4549508089,
        "lat": 60.1647743,
        "lon": 24.9413567,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "9-11",
          "addr:postcode": "00120",
          "addr:street": "Uudenmaankatu",
          "amenity": "restaurant",
          "cuisine": "nordic",
          "name": "Demo",
          "name:en": "Demo",
          "opening_hours": "Tu-Sa 16:00-23:00",
          "stars": "1",
          "website": "http://www.restaurantdemo.fi/",
          "wikidata": "Q18658722",
          "wikipedia": "fi:Demo (ravintola)"
        }
      },
      {
        "type": "node",
        "id": 4551961007,
        "lat": 60.2375261,
        "lon": 25.0830415,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "iraq",
          "name": "Shisha grill iraqy Resturant"
        }
      },
      {
        "type": "node",
        "id": 4558788099,
        "lat": 60.165986,
        "lon": 24.9422324,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6",
          "addr:postcode": "00120",
          "addr:street": "Bulevardi",
          "amenity": "restaurant",
          "name": "Boulevard Social Bar & Restaurant",
          "opening_hours": "Mo-Th 11:30-01:00; Sa 17:00-01:00",
          "website": "https://boulevardsocial.fi/"
        }
      },
      {
        "type": "node",
        "id": 4573796091,
        "lat": 60.1671402,
        "lon": 24.952144,
        "tags": {
          "addr:housenumber": "20",
          "addr:postcode": "00130",
          "addr:street": "Eteläranta",
          "amenity": "restaurant",
          "name": "Finlandia Caviar",
          "name:en": "Finlandia Caviar",
          "opening_hours": "Mo-Th 11:00-20:00; Fr-Sa 11:00-22:00; Su 11:00-18:00",
          "phone": "+358105817810",
          "website": "https://www.finlandiacaviar.fi/"
        }
      },
      {
        "type": "node",
        "id": 4573822789,
        "lat": 60.1658709,
        "lon": 24.9448624,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3-5",
          "addr:postcode": "00130",
          "addr:street": "Ludviginkatu",
          "amenity": "restaurant",
          "cuisine": "fine_dining",
          "name": "Ravintola Ragu (Italian kitchen)",
          "name:en": "Ragu",
          "opening_hours": "Mo-Sa 17:00-00:00",
          "phone": "+3589596659",
          "website": "https://ragu.fi/"
        }
      },
      {
        "type": "node",
        "id": 4605384998,
        "lat": 60.1868259,
        "lon": 24.9577533,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00500",
          "addr:street": "Harjutori",
          "amenity": "restaurant",
          "name": "Harju 8",
          "old_name": "Vihreä Holvi",
          "website": "http://harju8.fi"
        }
      },
      {
        "type": "node",
        "id": 4606140399,
        "lat": 60.1591804,
        "lon": 24.9220725,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00220",
          "addr:street": "Hotel Clarion, Tyynenmerenkatu",
          "amenity": "restaurant",
          "name": "Kitchen & Table by Marcus Samuelsson",
          "website": "https://www.nordicchoicehotels.com/clarion/clarion-hotel-helsinki/our-facilities/restaurant-and-bar/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4615784213,
        "lat": 60.2397323,
        "lon": 24.8429712,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1-3",
          "addr:postcode": "00390",
          "addr:street": "Konalankuja",
          "amenity": "restaurant",
          "name": "Lounasravintola Ilo",
          "website": "http://ravintolailo.fi"
        }
      },
      {
        "type": "node",
        "id": 4616401031,
        "lat": 60.1806667,
        "lon": 24.8498889,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00340",
          "addr:street": "Lehtisaarentie",
          "amenity": "restaurant",
          "contact:phone": "+358 504434391",
          "contact:website": "http://www.oldjerusalem.fi/",
          "cuisine": "middle_eastern",
          "delivery": "yes",
          "diet:gluten_free": "yes",
          "diet:lactose_free": "yes",
          "diet:vegetarian": "yes",
          "name": "Old Jerusalem",
          "opening_hours": "Mo-Fr 11:00-20:00; Sa,Su 12:00-20:00",
          "phone": "+358400283648",
          "takeaway": "yes",
          "website": "https://www.oldjerusalem.fi"
        }
      },
      {
        "type": "node",
        "id": 4620796657,
        "lat": 60.2156234,
        "lon": 24.8756007,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00380",
          "addr:street": "Valimotie",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Valimon Kebab Pizzeria",
          "opening_hours": "10:00-22:00",
          "outdoor_seating": "no",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 4622594691,
        "lat": 60.1641956,
        "lon": 24.9361548,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "15",
          "addr:postcode": "00120",
          "addr:street": "Bulevardi",
          "amenity": "restaurant",
          "cuisine": "middle eastern",
          "diet:vegetarian": "only",
          "name": "Levant",
          "opening_hours": "Mo-Th 11:00-19:00; Fr-Sa 11:00-21:00",
          "website": "http://www.levant-bulevardi.com/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 4644669090,
        "lat": 60.20834,
        "lon": 25.0828489,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7 A",
          "addr:postcode": "00930",
          "addr:street": "Kauppakartanonkatu",
          "amenity": "restaurant",
          "cuisine": "persian",
          "name": "Ravintola Naab",
          "short_name": "Naab",
          "website": "http://www.restaurantnaab.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4677582289,
        "lat": 60.1819964,
        "lon": 24.9477931,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "13",
          "addr:postcode": "00530",
          "addr:street": "Toinen linja",
          "amenity": "restaurant",
          "cuisine": "somali",
          "name": "Camel Cafe",
          "smoking": "no",
          "website": "https://www.facebook.co/cafecamel",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4687453716,
        "lat": 60.1641077,
        "lon": 24.9462728,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "8",
          "addr:street": "Pieni Roobertinkatu",
          "amenity": "restaurant",
          "cuisine": "finedining",
          "name": "Vinkkeli",
          "opening_hours": "Mo 11:30-14:00;Tu-Fr 11:30-14:00,17:00-24:00;Sa 17:00-24:00",
          "website": "http://www.ravintolavinkkeli.fi/"
        }
      },
      {
        "type": "node",
        "id": 4687581230,
        "lat": 60.1576917,
        "lon": 24.9427242,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "28",
          "addr:postcode": "00150",
          "addr:street": "Huvilakatu",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Ora",
          "stars": "1",
          "website": "http://orarestaurant.fi/",
          "wikidata": "Q88315642"
        }
      },
      {
        "type": "node",
        "id": 4689094128,
        "lat": 60.1640015,
        "lon": 24.9376764,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "37",
          "addr:postcode": "00120",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "name": "Soil Wine Room",
          "phone": "+358504630366",
          "website": "http://soilwineroom.fi"
        }
      },
      {
        "type": "node",
        "id": 4689094129,
        "lat": 60.1629831,
        "lon": 24.9391073,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "29",
          "addr:postcode": "00120",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "cuisine": "turkish",
          "name": "Istanbul Grill",
          "opening_hours": "Mo-Fr 10:00-22:00; We-Fr 10:00-23:00; Sa 12:00-23:00",
          "website": "http://www.istanbulgrilli.fi"
        }
      },
      {
        "type": "node",
        "id": 4689094133,
        "lat": 60.1616246,
        "lon": 24.9389386,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00120",
          "addr:street": "Punavuorenkatu",
          "amenity": "restaurant",
          "email": "delicafemaya@gmail.com",
          "name": "Deli Café Maya",
          "opening_hours": "Mo-We 10:30-15:30; Th,Fr 08:00-15:30; Sa 11:00-12:40, 13:00-15:00; Su 10:00-11:40, 12:00-13:40, 14:00-16:00",
          "website": "http://www.delicafemaya.com/"
        }
      },
      {
        "type": "node",
        "id": 4689250789,
        "lat": 60.1649298,
        "lon": 24.9331002,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "29, sisäpiha/inner yard",
          "addr:postcode": "00180",
          "addr:street": "Albertinkatu",
          "amenity": "restaurant",
          "description:covid19": "Pompier Albertinkatu on suljettu 23.3.2020 alkaen toistaiseksi.",
          "name": "Ravintola Pompier",
          "opening_hours:covid19": "off",
          "website": "https://pompier.fi/albertinkatu/"
        }
      },
      {
        "type": "node",
        "id": 4690868892,
        "lat": 60.1641323,
        "lon": 24.9426888,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3-5",
          "addr:postcode": "00120",
          "addr:street": "Iso Roobertinkatu",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "email": "info@vibami.fi",
          "name": "Vibami",
          "name:en": "Vibami",
          "opening_hours": "Tu-Fr 11:00-21:00; Sa-Su 11:30-21:00",
          "phone": "+358466283918",
          "website": "https://www.vibami.fi/"
        }
      },
      {
        "type": "node",
        "id": 4690953689,
        "lat": 60.1660045,
        "lon": 24.9526898,
        "tags": {
          "addr:street": "Eteläranta",
          "amenity": "restaurant",
          "name": "Soppakeittiö"
        }
      },
      {
        "type": "node",
        "id": 4691066153,
        "lat": 60.1588513,
        "lon": 24.946108,
        "tags": {
          "addr:country": "FI",
          "addr:housenumber": "26",
          "addr:street": "Kapteeninkatu",
          "amenity": "restaurant",
          "name": "Pontus",
          "opening_hours": "16:00-23:00; Fr-Sa 15:00-24:00; PH off",
          "phone": "+358407759656",
          "website": "ravintolapontus.fi"
        }
      },
      {
        "type": "node",
        "id": 4691334730,
        "lat": 60.1605055,
        "lon": 24.941714,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "10",
          "addr:postcode": "00150",
          "addr:street": "Laivurinkatu",
          "amenity": "restaurant",
          "email": "viiskulma@skiffer.fi",
          "name": "Skiffer Viiskulma",
          "opening_hours": "Mo-Th 11-22; Fr 11-23; Sa 12-23; Su 12-21",
          "phone": "+358456419955",
          "website": "https://www.skiffer.fi/ravintolat/viiskulma.html"
        }
      },
      {
        "type": "node",
        "id": 4691849226,
        "lat": 60.157848,
        "lon": 24.9326284,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "amenity": "restaurant",
          "name": "Coconut St",
          "website": "https://coconut.fi/"
        }
      },
      {
        "type": "node",
        "id": 4691849231,
        "lat": 60.1593114,
        "lon": 24.9372636,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "21",
          "addr:postcode": "00150",
          "addr:street": "Pursimiehenkatu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "Bumi Punavuori",
          "opening_hours": "Mo-Th 11:00-21:00; Fr-Sa 11:00-22:30; Su 12:00-19:00",
          "phone": "+358 45 1270568",
          "website": "https://bumicafe.com/fi/"
        }
      },
      {
        "type": "node",
        "id": 4691849232,
        "lat": 60.1595005,
        "lon": 24.9384478,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "12",
          "addr:postcode": "00150",
          "addr:street": "Pursimiehenkatu",
          "amenity": "restaurant",
          "name": "Kamone",
          "opening_hours": "Mo-Fr 9:00-17:00; Sa 11:00-17:00"
        }
      },
      {
        "type": "node",
        "id": 4691849233,
        "lat": 60.1609022,
        "lon": 24.9378501,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "12",
          "addr:postcode": "00150",
          "addr:street": "Albertinkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Sakura Sushi",
          "opening_hours": "Mo-Fr 11:00-20:00; Sa 12:00-20:00",
          "phone": "+358405188807",
          "website": "https://www.facebook.com/SakurasushiHelsinki"
        }
      },
      {
        "type": "node",
        "id": 4691897404,
        "lat": 60.1658716,
        "lon": 24.9451217,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3-5",
          "addr:postcode": "00130",
          "addr:street": "Ludviginkatu",
          "amenity": "restaurant",
          "cuisine": "korean",
          "name": "Old Boy BBQ",
          "opening_hours": "Mo-Sa 17:00-23:00+",
          "phone": "+358 10 207 3000",
          "website": "https://www.oldboy.fi/"
        }
      },
      {
        "type": "node",
        "id": 4691897408,
        "lat": 60.1649541,
        "lon": 24.9424794,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:street": "Uudenmaankatu",
          "amenity": "restaurant",
          "name": "Trocadero",
          "opening_hours": "Mo-Fr 11:00-15:00"
        }
      },
      {
        "type": "node",
        "id": 4691897410,
        "lat": 60.1647231,
        "lon": 24.9412125,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "13",
          "addr:street": "Uudenmaankatu",
          "amenity": "restaurant",
          "name": "Penny",
          "opening_hours": "We-Th 11:00-23:00; Fr 11:00-24:00; Sa 12:00-24:00; Su 12:00-18:00",
          "website": "http://www.restaurantpenny.fi"
        }
      },
      {
        "type": "node",
        "id": 4691897411,
        "lat": 60.1632395,
        "lon": 24.9369408,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "31",
          "addr:street": "Uudenmaankatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Megumi Sushi",
          "opening_hours": "Mo-Fr 11:00-19:00; Sa 12:00-20:00",
          "phone": "+358413658302"
        }
      },
      {
        "type": "node",
        "id": 4691897413,
        "lat": 60.1646512,
        "lon": 24.9408803,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "13",
          "addr:postcode": "00120",
          "addr:street": "Uudenmaankatu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "Stone Bowl N Sushi",
          "website": "https://www.facebook.com/STONEBOWLNSUSHI/"
        }
      },
      {
        "type": "node",
        "id": 4692013476,
        "lat": 60.1661379,
        "lon": 24.9494368,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4",
          "addr:street": "Fabianinkatu",
          "amenity": "restaurant",
          "check_date:opening_hours": "2020-11-23",
          "diet:vegan": "yes",
          "diet:vegetarian": "only",
          "name": "Zucchini",
          "opening_hours": "Mo-Su 11:00-16:00",
          "phone": "+358 9 622 29 07",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 4692013478,
        "lat": 60.1663672,
        "lon": 24.9522329,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "steak",
          "name": "Goodwin",
          "website": "https://www.steak.fi/fin/helsinki/index.html"
        }
      },
      {
        "type": "node",
        "id": 4692013479,
        "lat": 60.1665693,
        "lon": 24.9521763,
        "tags": {
          "amenity": "restaurant",
          "name": "Restaurant Haven"
        }
      },
      {
        "type": "node",
        "id": 4692013483,
        "lat": 60.1639271,
        "lon": 24.9362763,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "26",
          "addr:postcode": "00120",
          "addr:street": "Bulevardi",
          "amenity": "restaurant",
          "cuisine": "bistro",
          "name": "Bröd",
          "website": "http://www.brod.fi/en/brod"
        }
      },
      {
        "type": "node",
        "id": 4692013485,
        "lat": 60.1653197,
        "lon": 24.9403447,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "12",
          "addr:street": "Bulevardi",
          "amenity": "restaurant",
          "email": "pammy@pamela.fi",
          "name": "Ravintola Pamela",
          "old_name": "Werner",
          "opening_hours:covid19": "off",
          "phone": "+358 405474203",
          "website": "https://www.pamela.fi/"
        }
      },
      {
        "type": "node",
        "id": 4692013486,
        "lat": 60.1656426,
        "lon": 24.9418507,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "18",
          "addr:postcode": "00120",
          "addr:street": "Yrjönkatu",
          "amenity": "restaurant",
          "name": "Pjazza",
          "website": "http://pjazza.fi"
        }
      },
      {
        "type": "node",
        "id": 4692325016,
        "lat": 60.1630719,
        "lon": 24.9406283,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "19",
          "addr:postcode": "00120",
          "addr:street": "Iso Roobertinkatu",
          "amenity": "restaurant",
          "cuisine": "japanese",
          "name": "Kurume"
        }
      },
      {
        "type": "node",
        "id": 4693464160,
        "lat": 60.1695057,
        "lon": 24.9478542,
        "tags": {
          "amenity": "restaurant",
          "name": "Hanko Sushi",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4693464163,
        "lat": 60.1691418,
        "lon": 24.9487688,
        "tags": {
          "amenity": "restaurant",
          "brand": "Pizzarium",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Pizzarium",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4693464164,
        "lat": 60.1699095,
        "lon": 24.9466636,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00100",
          "addr:street": "Yliopistonkatu",
          "amenity": "restaurant",
          "name": "Caverna",
          "opening_hours:covid19": "off",
          "website": "http://caverna.fi/"
        }
      },
      {
        "type": "node",
        "id": 4716161993,
        "lat": 60.1600997,
        "lon": 24.9483149,
        "tags": {
          "access:dogs": "yes",
          "addr:housenumber": "4",
          "addr:postcode": "00120",
          "addr:street": "Kasarmikatu",
          "amenity": "restaurant",
          "cuisine": "tapas;spanish;buschenschank",
          "name": "Kim's Tapas",
          "name:fi": "Kim's Tapas",
          "opening_hours": "Tu-Fr 18:00-22:00",
          "website": "http://www.tapas.fi"
        }
      },
      {
        "type": "node",
        "id": 4718446527,
        "lat": 60.1690728,
        "lon": 24.9487761,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "mexican;burger",
          "name": "Pancho Villa",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4727521423,
        "lat": 60.1691983,
        "lon": 24.9414766,
        "tags": {
          "amenity": "restaurant",
          "brand": "Pizza Hut",
          "name": "Pizza Hut"
        }
      },
      {
        "type": "node",
        "id": 4727521424,
        "lat": 60.1689374,
        "lon": 24.9416418,
        "tags": {
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Harald",
          "opening_hours": "Mo-Tu 11:00-22:00; We-Fr 11:00-23:00; Sa 12:00-23:00; Su 13:00-22:00",
          "website": "https://www.ravintolaharald.fi/helsinki/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4736792284,
        "lat": 60.1659393,
        "lon": 24.9369229,
        "tags": {
          "addr:housenumber": "11",
          "addr:street": "Lönnrotinkatu",
          "amenity": "restaurant",
          "name": "Lönkka",
          "opening_hours": "Mo-Th 11:00-23:00; Fr 11:00-01:00, Sa 15:00-01:00",
          "opening_hours:covid19": "closed",
          "website": "https://lonkka.fi/"
        }
      },
      {
        "type": "node",
        "id": 4738322128,
        "lat": 60.1654792,
        "lon": 24.936281,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "14",
          "addr:street": "Lönnrotinkatu",
          "amenity": "restaurant",
          "name": "Mezame"
        }
      },
      {
        "type": "node",
        "id": 4741318823,
        "lat": 60.1604944,
        "lon": 24.9463623,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "4",
          "addr:street": "Korkeavuorenkatu",
          "amenity": "restaurant",
          "cuisine": "hawaiian",
          "name": "Hey Poke",
          "opening_hours": "Mo-Fr 11:00-20:00; Sa 12:00-20:00; PH off",
          "website": "https://www.heypoke.fi"
        }
      },
      {
        "type": "node",
        "id": 4745382422,
        "lat": 60.1884824,
        "lon": 24.9574511,
        "tags": {
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "only",
          "internet_access": "wlan",
          "name": "Just vege",
          "name:en": "Just vege",
          "name:fi": "Just vege",
          "name:sv": "Just vege",
          "opening_hours": "Mo-Th 11:00-22:00; Fr 11:00-02:00; Sa 12:00-00:00; Su 13:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 4747221556,
        "lat": 60.1691126,
        "lon": 24.9367528,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "8",
          "addr:postcode": "00100",
          "addr:street": "Simonkatu",
          "amenity": "restaurant",
          "cuisine": "indian",
          "email": "indiahouse@indiahouse.fi",
          "level": "3",
          "lunch:buffet": "Mo-Fr 10:30-16:00; Sa 12:00-17:00; Su 12:00-17:00",
          "name": "Indian House",
          "opening_hours": "Mo-Fr 10:30-22:30, Sa 12:00-22:30; Su 12:00-20:00",
          "phone": "+358 50 463 0155",
          "website": "http://www.indiahouse.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4749101640,
        "lat": 60.1682467,
        "lon": 24.9394872,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "14",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "email": "kenny@itamaesushi.fi",
          "level": "1",
          "name": "Itamae Sushi",
          "opening_hours": "Mo-Fr 11:00-21:00;Sa-Su 12:00-18:00",
          "phone": "+358 9 698 0091",
          "website": "http://www.itamaesushi.fi/"
        }
      },
      {
        "type": "node",
        "id": 4749101646,
        "lat": 60.1684098,
        "lon": 24.9397559,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "14",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "kebab",
          "level": "1",
          "name": "Eerikin Pippuri",
          "opening_hours": "Su-Tu 10:00-21:00; We-Sa 10:00-05:00",
          "phone": "+358 50 465 1222",
          "website": "http://www.eerikinpippuri.fi/mannerheimintie/"
        }
      },
      {
        "type": "node",
        "id": 4749101648,
        "lat": 60.168319,
        "lon": 24.9393817,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "14",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "thai",
          "diet:vegetarian": "yes",
          "email": "info@tamarin.fi",
          "level": "1",
          "lunch:buffet": "Mo-Fr 11:00-14:00",
          "name": "Tamarin",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa-Su 12:00-18:00",
          "phone": "+358 9 698 0026",
          "website": "http://www.tamarin.fi/ravintolat/forum/"
        }
      },
      {
        "type": "node",
        "id": 4749101655,
        "lat": 60.1685162,
        "lon": 24.9393352,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "14",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "email": "info@onam.fi",
          "level": "1",
          "name": "Ônam",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 12:00-19:00; Su 12:00-18:00",
          "phone": "+358 44 988 0738",
          "reservation": "yes",
          "website": "http://www.onam.fi/"
        }
      },
      {
        "type": "node",
        "id": 4754875474,
        "lat": 60.1698175,
        "lon": 24.940497,
        "tags": {
          "amenity": "restaurant",
          "name": "Splizzeria",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4754875498,
        "lat": 60.1692647,
        "lon": 24.9446041,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "15",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "name": "Grande Grill",
          "website": "http://grandegrill.fi/"
        }
      },
      {
        "type": "node",
        "id": 4767046626,
        "lat": 60.1666306,
        "lon": 24.9374825,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "21",
          "addr:street": "Annankatu",
          "amenity": "restaurant",
          "cuisine": "salad",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Pupu",
          "opening_hours": "Mo-Fr 11:00-15:00",
          "website": "https://pupu.fi"
        }
      },
      {
        "type": "node",
        "id": 4776225421,
        "lat": 60.1685487,
        "lon": 24.9371091,
        "tags": {
          "addr:housenumber": "29",
          "addr:postcode": "00100",
          "addr:street": "Yrjönkatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Barbarossa Pizza & Kebab",
          "opening_hours": "Mo-Th 10:30-22:00; Fr-Sa 10:30-22:00; Su 12:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 4777883422,
        "lat": 60.1817872,
        "lon": 24.9294425,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "58",
          "addr:postcode": "00260",
          "addr:street": "Helsinginkatu",
          "amenity": "restaurant",
          "name": "Oopperaravintola",
          "name:en": "Opera Restaurant",
          "name:fi": "Oopperaravintola",
          "name:sv": "Operarestaurangen",
          "opening_hours:covid19": "off",
          "toilets:wheelchair": "yes",
          "website": "https://oopperabaletti.fi/liput-palvelut/oopperaravintola/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4798675178,
        "lat": 60.1956083,
        "lon": 24.9511228,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "burger",
          "name": "Bites",
          "website": "http://www.bites.fi/"
        }
      },
      {
        "type": "node",
        "id": 4802218988,
        "lat": 60.1679,
        "lon": 24.9132,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00180",
          "addr:street": "Lapinlahdenpolku",
          "addr:unit": "D",
          "amenity": "restaurant",
          "delivery": "no",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Hävikkiruokaravintola Loop",
          "official_name": "Ravintola Loop",
          "opening_hours": "Sa, Su 11:00-15:00; Mo-Fr 11:00-15:00",
          "short_name": "Loop",
          "smoking": "outside",
          "takeaway": "no",
          "website": "http://www.ravintolaloop.fi/"
        }
      },
      {
        "type": "node",
        "id": 4806082724,
        "lat": 60.2833843,
        "lon": 25.0301888,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "30",
          "addr:postcode": "00750",
          "addr:street": "Härkävaljakontie",
          "amenity": "restaurant",
          "name": "Shell HelmiSimpukka Helsinki Ala-Tikkurila",
          "opening_hours": "24/7",
          "website": "https://www.shellhelmisimpukka.fi/helsinki-ala-tikkurila"
        }
      },
      {
        "type": "node",
        "id": 4847656542,
        "lat": 60.1669466,
        "lon": 24.9216005,
        "tags": {
          "addr:housename": "15 C",
          "addr:housenumber": "16",
          "addr:street": "Lapinlahdenkatu",
          "amenity": "restaurant",
          "email": "bookings@starterhelsinki.com",
          "name": "Starter",
          "phone": "+358400214421",
          "url": "http://www.starterhelsinki.com/"
        }
      },
      {
        "type": "node",
        "id": 4865782332,
        "lat": 60.1585197,
        "lon": 24.9458932,
        "tags": {
          "addr:housenumber": "24",
          "addr:street": "Kapteeninkatu",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Paulette",
          "opening_hours": "Mo-Fr 10:30-17:00; PH off"
        }
      },
      {
        "type": "node",
        "id": 4866097650,
        "lat": 60.1649912,
        "lon": 24.9348866,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:street": "Lönnrotinkatu",
          "amenity": "restaurant",
          "name": "Kungfu Kitchen",
          "website": "http://kungfukitchen.fi"
        }
      },
      {
        "type": "node",
        "id": 4866904257,
        "lat": 60.1605158,
        "lon": 24.9389772,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "18",
          "addr:postcode": "00150",
          "addr:street": "Merimiehenkatu",
          "amenity": "restaurant",
          "cuisine": "korean",
          "email": "mannaravintola@gmail.com",
          "name": "Manna",
          "opening_hours": "Mo-Fr 11:00-15:00,17:00-21:00; Sa 12:00-21:00",
          "phone": "+358 50 3445562",
          "website": "https://www.facebook.com/ravintolamanna"
        }
      },
      {
        "type": "node",
        "id": 4874959830,
        "lat": 60.1575272,
        "lon": 24.9133269,
        "tags": {
          "addr:housenumber": "3",
          "addr:street": "Malagankatu",
          "amenity": "restaurant",
          "email": "info@malagabar.fi",
          "name": "Malaga Bar",
          "opening_hours": "Mo-Th 10:30-00:00; Fr 10:30-02:00; Sa 12:00-02:00",
          "opening_hours:covid19": "Mo-Fr 10:30-14:00",
          "phone": "+358-40-4817720",
          "source": "survey",
          "takeaway:covid19": "yes",
          "website": "https://www.malagabar.fi"
        }
      },
      {
        "type": "node",
        "id": 4876439191,
        "lat": 60.1655729,
        "lon": 24.9317336,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "35",
          "addr:postcode": "00120;00180",
          "addr:street": "Albertinkatu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "E.K. Fast Food",
          "opening_hours": "Mo-Fr 11:00-19:00"
        }
      },
      {
        "type": "node",
        "id": 4887902323,
        "lat": 60.1703233,
        "lon": 24.9283312,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "56",
          "addr:postcode": "00100",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Konnichiwa",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa-Su 12:00-21:00"
        }
      },
      {
        "type": "node",
        "id": 4887918564,
        "lat": 60.1691027,
        "lon": 24.9298914,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "48",
          "addr:postcode": "00100",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Tamarin Thai Cuisine",
          "opening_hours": "Mo-Th 11:00-22:00; Fr 11:00-23:00; Sa 12:00-23:00; Su 12:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 4887918565,
        "lat": 60.169145,
        "lon": 24.929832,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "48",
          "addr:postcode": "00100",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Green Sushi",
          "opening_hours": "Mo-Fr 16:00-20:00; Sa-Su 12:00-20:00"
        }
      },
      {
        "type": "node",
        "id": 4893480888,
        "lat": 60.1587957,
        "lon": 24.9156777,
        "tags": {
          "addr:housenumber": "14",
          "addr:street": "Välimerenkatu",
          "amenity": "restaurant",
          "name": "Skøgul"
        }
      },
      {
        "type": "node",
        "id": 4893481059,
        "lat": 60.1579117,
        "lon": 24.9158364,
        "tags": {
          "addr:housenumber": "8",
          "addr:postcode": "00220",
          "addr:street": "Livornonkatu",
          "amenity": "restaurant",
          "name": "Restaurant La Sirena Pizza & Grill",
          "opening_hours": "Mo-Fr 10:00-21:00; Sa-Su 11:00-21:00"
        }
      },
      {
        "type": "node",
        "id": 4902349873,
        "lat": 60.161804,
        "lon": 24.9313581,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "44",
          "addr:postcode": "00120",
          "addr:street": "Bulevardi",
          "amenity": "restaurant",
          "name": "Kiltakellari",
          "name:fi": "Kiltakellari",
          "name:sv": "Gillestugan",
          "office": "company"
        }
      },
      {
        "type": "node",
        "id": 4909564238,
        "lat": 60.1593164,
        "lon": 24.9368155,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "6",
          "addr:postcode": "00150",
          "addr:street": "Kankurinkatu",
          "amenity": "restaurant",
          "name": "Levain",
          "opening_hours": "Mo-Fr 7:30-22:00; Sa 9:00-22:00",
          "opening_hours:breakfast": "Mo-Fr 8:00-11:00",
          "opening_hours:evening": "Mo-Fr 15:00-21:00",
          "opening_hours:lunch": "Mo-Fr 11:00-15:00",
          "shop": "bakery",
          "website": "https://www.levain.fi/"
        }
      },
      {
        "type": "node",
        "id": 4917463551,
        "lat": 60.1578629,
        "lon": 24.9343675,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "27-29",
          "addr:postcode": "00150",
          "addr:street": "Tehtaankatu",
          "amenity": "restaurant",
          "name": "Baskeri & Basso Bistro",
          "opening_hours": "Tu-Fr 16:00-02:00"
        }
      },
      {
        "type": "node",
        "id": 4935227421,
        "lat": 60.2322771,
        "lon": 24.9103075,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00630",
          "addr:street": "Pirkkolan metsätie",
          "amenity": "restaurant",
          "name": "Janin lounas & sport cafe Pirkkola"
        }
      },
      {
        "type": "node",
        "id": 4943117682,
        "lat": 60.2198951,
        "lon": 24.9476767,
        "tags": {
          "amenity": "restaurant",
          "name": "Theron Catering"
        }
      },
      {
        "type": "node",
        "id": 4950531550,
        "lat": 60.1496484,
        "lon": 24.9137749,
        "tags": {
          "amenity": "restaurant"
        }
      },
      {
        "type": "node",
        "id": 4968624521,
        "lat": 60.1602446,
        "lon": 24.8806998,
        "tags": {
          "amenity": "restaurant",
          "contact:phone": "+358505228208",
          "level": "0",
          "name": "Hanko Sushi",
          "name:fi": "Han Ko Sushi",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 12:00-20:00; Su 12:00-18:00",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 4975327492,
        "lat": 60.2241147,
        "lon": 24.8600997,
        "tags": {
          "addr:housenumber": "17",
          "addr:street": "Pitäjänmäentie",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "email": "info@pho17.fi",
          "name": "Pho17",
          "opening_hours": "Mo-Fr 10:00-20:00, Sa-Su 12:00-18:00",
          "outdoor_seating": "no",
          "phone": "0447721717",
          "source": "https://www.pho17.fi/",
          "takeaway": "yes",
          "website": "https://www.pho17.fi/"
        }
      },
      {
        "type": "node",
        "id": 4989964824,
        "lat": 60.1688109,
        "lon": 24.9339679,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "34",
          "addr:street": "Annankatu",
          "amenity": "restaurant",
          "name": "Kampin Huippu"
        }
      },
      {
        "type": "node",
        "id": 4994535380,
        "lat": 60.1663494,
        "lon": 24.9331452,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "20",
          "addr:postcode": "00100",
          "addr:street": "Eerikinkatu",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "name": "Lie Mi"
        }
      },
      {
        "type": "node",
        "id": 5010060723,
        "lat": 60.185005,
        "lon": 24.920648,
        "tags": {
          "addr:housenumber": "3",
          "addr:postcode": "00250",
          "addr:street": "Humalistonkatu",
          "amenity": "restaurant",
          "cuisine": "italian_pizza",
          "name": "Daddy Greens Pizzabar",
          "opening_hours": "Tu-Th 16:00-22:00; Fr 16:00-23:00; Sa 12:00-23:00; Su 12:00-23:00",
          "phone": "+358 50 468 1722",
          "website": "https://www.daddygreens.fi/"
        }
      },
      {
        "type": "node",
        "id": 5019537637,
        "lat": 60.1529683,
        "lon": 24.9463076,
        "tags": {
          "amenity": "restaurant",
          "name": "Skiffer Liuskaluoto",
          "website": "http://skiffer.fi/liuskaluoto/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 5019852101,
        "lat": 60.1630444,
        "lon": 24.9292951,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "34",
          "addr:place": "Hietalahden kauppahalli",
          "addr:postcode": "00180",
          "addr:street": "Lönnrotinkatu",
          "amenity": "restaurant",
          "cuisine": "portuguese",
          "delivery": "no",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Petiscaria",
          "opening_hours": "Mo-Th 11:00-18:00, Fr-Sa 11:00-21:30, Su 11:00-16:00",
          "outdoor_seating": "no",
          "smoking": "outside"
        }
      },
      {
        "type": "node",
        "id": 5041335223,
        "lat": 60.1654156,
        "lon": 24.9511539,
        "tags": {
          "addr:city": "Helsinki",
          "amenity": "restaurant",
          "name": "Toca"
        }
      },
      {
        "type": "node",
        "id": 5045054070,
        "lat": 60.1669248,
        "lon": 24.945027,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "Masu",
          "operator": "restamax"
        }
      },
      {
        "type": "node",
        "id": 5045054572,
        "lat": 60.1957252,
        "lon": 24.9442394,
        "tags": {
          "amenity": "restaurant",
          "name": "Loft33",
          "operator": "Palmia",
          "phone": "0408432501"
        }
      },
      {
        "type": "node",
        "id": 5091529605,
        "lat": 60.2503115,
        "lon": 25.0130591,
        "tags": {
          "addr:housenumber": "5",
          "addr:street": "Pikkalankatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Makalu",
          "opening_hours:covid19": "off",
          "phone": "+358505958400",
          "website": "http://www.ravintolamakalu.fi"
        }
      },
      {
        "type": "node",
        "id": 5101780638,
        "lat": 60.2312547,
        "lon": 24.9680285,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00640",
          "addr:street": "Siltavoudintie",
          "amenity": "restaurant",
          "cuisine": "pizza;italian",
          "email": "capperi@capperi.fi",
          "name": "Capperi",
          "opening_hours": "Ma-Tu11:00-15:00; We-Th 11:00-19:00; Fr 11:00-20:00; Sa 12:00-20:00; Su 12:00-19:00",
          "opening_hours:covid19": "same",
          "outdoor_seating": "yes",
          "phone": "+358 10 3269444",
          "source": "local_knowledge",
          "takeaway": "yes",
          "website": "https://capperi.fi/"
        }
      },
      {
        "type": "node",
        "id": 5103177157,
        "lat": 60.1688181,
        "lon": 24.9293577,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00100",
          "addr:street": "Runeberginkatu",
          "amenity": "restaurant",
          "cuisine": "regional;international;breakfast;grill;burger",
          "email": "kamppi@ravintolafactory.com",
          "internet_access": "wlan",
          "name": "Ravintola Factory Kamppi",
          "outdoor_seating": "yes",
          "phone": "+358 10 2053211",
          "smoking": "outside",
          "website": "https://www.factorykamppi.com/"
        }
      },
      {
        "type": "node",
        "id": 5105150077,
        "lat": 60.1724827,
        "lon": 24.9472247,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "20",
          "addr:postcode": "00100",
          "addr:street": "Vuorikatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Dong Bei Hu",
          "opening_hours": "Mo-Fr 11:00-23:00; Sa 12:00-23:00; Su 14:00-22:00",
          "outdoor_seating": "no"
        }
      },
      {
        "type": "node",
        "id": 5121341564,
        "lat": 60.1376002,
        "lon": 25.0094389,
        "tags": {
          "amenity": "restaurant",
          "name": "Woop factory"
        }
      },
      {
        "type": "node",
        "id": 5137760425,
        "lat": 60.2215021,
        "lon": 25.1407988,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00960",
          "addr:street": "Mustalahdentie",
          "amenity": "restaurant",
          "cuisine": "pizza;burger;kebab",
          "delivery": "yes",
          "name": "Ristorante il Parma",
          "outdoor_seating": "yes",
          "phone": "044 973 7728",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 5143452607,
        "lat": 60.16008,
        "lon": 24.8806854,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza",
          "diet:vegan": "no",
          "level": "0",
          "name": "Pizzeria Luca",
          "phone": "+358504661499",
          "website": "http://pizzerialuca.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 5148062647,
        "lat": 60.1909102,
        "lon": 24.9114505,
        "tags": {
          "amenity": "restaurant",
          "name": "Bistro",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 5170957221,
        "lat": 60.1694777,
        "lon": 24.9431815,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00100",
          "addr:street": "Keskuskatu",
          "amenity": "restaurant",
          "name": "Deliberi",
          "name:en": "Deliberi",
          "website": "http://www.deliberi.fi/toimipisteet/deliberi-k7/"
        }
      },
      {
        "type": "node",
        "id": 5178751996,
        "lat": 60.1629564,
        "lon": 24.9409053,
        "tags": {
          "addr:housenumber": "24",
          "addr:street": "Iso Roobertinkatu",
          "amenity": "restaurant",
          "changing_table:fee": "yes",
          "cuisine": "sandwich",
          "diet:vegan": "only",
          "internet_access": "wlan",
          "level": "1",
          "name": "Anima",
          "opening_hours": "Mo-Th 08:00-23:00; Fr 08:00-01:30; Sa 10:00-01:30; Su 10:00-23:00",
          "outdoor_seating": "yes",
          "toilets": "yes",
          "toilets:access": "customers",
          "toilets:wheelchair": "yes",
          "website": "https://www.animahelsinki.com/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 5212514052,
        "lat": 60.1683916,
        "lon": 24.9436093,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3 A",
          "addr:postcode": "00100",
          "addr:street": "Keskuskatu",
          "amenity": "restaurant",
          "email": "marmoripiha@dylan.fi",
          "name": "Dylan Marmoripiha",
          "website": "https://www.dylan.fi/"
        }
      },
      {
        "type": "node",
        "id": 5212533136,
        "lat": 60.1641975,
        "lon": 24.9438937,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00120",
          "addr:street": "Iso Roobertinkatu",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "only",
          "name": "Yes Yes Yes",
          "opening_hours": "Tu-Th 16:00-24:00; Fr 16:00-02:00; Sa 12:00-02:00",
          "website": "https://www.yesyesyes.fi/"
        }
      },
      {
        "type": "node",
        "id": 5239255587,
        "lat": 60.1768337,
        "lon": 24.9171242,
        "tags": {
          "access:covid19": "yes",
          "addr:city": "Helsinki",
          "addr:housenumber": "33A",
          "addr:street": "Pohjoinen Hesperiankatu",
          "amenity": "restaurant",
          "delivery:covid19": "no",
          "drive_through:covid19": "no",
          "name": "Ravintola Kaarti",
          "opening_hours:covid19": "Mo-Su,PH 11:00-12:30",
          "takeaway:covid19": "yes"
        }
      },
      {
        "type": "node",
        "id": 5264590061,
        "lat": 60.169111,
        "lon": 24.9387943,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "18",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "email": "fukuhelsinki@ravintolafuku.com",
          "lunch:buffet": "Mo-Fr 11:00-15:00",
          "name": "Fuku",
          "opening_hours": "Mo-Th 10:30-22:00; Fr 10:30-24:00; Sa 11:00-24:00; Su 11:00-22:00",
          "phone": "+358 10 501 1170",
          "reservation": "yes",
          "takeaway": "yes",
          "website": "https://www.fukuhelsinki.com/"
        }
      },
      {
        "type": "node",
        "id": 5287639023,
        "lat": 60.1647183,
        "lon": 24.9324784,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "36",
          "addr:postcode": "00180",
          "addr:street": "Albertinkatu",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "info@restaurantgron.com",
          "name": "Grön",
          "opening_hours": "Tu-Sa 17:00-24:00",
          "phone": "+358503289181",
          "stars": "1",
          "website": "https://www.restaurantgron.com/",
          "wikidata": "Q31088616"
        }
      },
      {
        "type": "node",
        "id": 5363552050,
        "lat": 60.2383135,
        "lon": 24.8913966,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00420",
          "addr:street": "Laulukuja",
          "amenity": "restaurant",
          "brand": "Amica",
          "name": "Amica Huhmare",
          "opening_hours:covid19": "off",
          "website": "https://www.amica.fi/ravintolat/ravintolat-kaupungeittain/helsinki/huhmare/"
        }
      },
      {
        "type": "node",
        "id": 5393393226,
        "lat": 60.1674248,
        "lon": 24.9340751,
        "tags": {
          "addr:city": "Helsinki",
          "addr:floor": "5",
          "addr:housenumber": "3",
          "addr:postcode": "00100",
          "addr:street": "Kansakoulukuja",
          "amenity": "restaurant",
          "name": "Helsingin Suomalainen Klubi",
          "name:fi": "Helsingin Suomalainen Klubi",
          "opening_hours": "Mo-Th 11:00-00:00; Fr 11:00-23:00",
          "phone": "050 5721531",
          "takeaway": "no",
          "website": "www.klubi.fi"
        }
      },
      {
        "type": "node",
        "id": 5401062376,
        "lat": 60.156307,
        "lon": 24.8848653,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "regional",
          "delivery": "no",
          "name": "Fond",
          "opening_hours": "Mo-Fr 10:30-13:30",
          "outdoor_seating": "no",
          "smoking": "no"
        }
      },
      {
        "type": "node",
        "id": 5403969434,
        "lat": 60.1874755,
        "lon": 24.956793,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "Thai O'Cha Sörnäinen",
          "short_name": "OCha",
          "website": "https://www.ocharestaurant.com/the-cafe"
        }
      },
      {
        "type": "node",
        "id": 5416330921,
        "lat": 60.183548,
        "lon": 24.9584184,
        "tags": {
          "addr:housenumber": "30",
          "addr:postcode": "00500",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "cuisine": "italian;international;mediterranean;deli",
          "name": "Lounasravintola Mediterraneo",
          "name:en": "Lunch Restaurant Mediterraneo",
          "opening_hours": "Mo-Sa 11:00-18:00",
          "phone": "+358456474979"
        }
      },
      {
        "type": "node",
        "id": 5489000620,
        "lat": 60.194602,
        "lon": 24.9483073,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "21",
          "addr:postcode": "00510",
          "addr:street": "Teollisuuskatu",
          "amenity": "restaurant",
          "name": "Sodexo Teollisuuskatu 21",
          "opening_hours": "Mo-Fr 08:00-14:30",
          "website": "https://www.sodexo.fi/teollisuuskatu21"
        }
      },
      {
        "type": "node",
        "id": 5510513741,
        "lat": 60.2071246,
        "lon": 24.920927,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintola Båx",
          "website": "https://www.kanresta.fi/lounas/helsinki/ravintola+bax/"
        }
      },
      {
        "type": "node",
        "id": 5514372762,
        "lat": 60.2365783,
        "lon": 24.8604435,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintola mimosa"
        }
      },
      {
        "type": "node",
        "id": 5523334479,
        "lat": 60.1630652,
        "lon": 24.9436476,
        "tags": {
          "addr:housenumber": "9",
          "addr:street": "Ratakatu",
          "amenity": "restaurant",
          "name": "Eevert",
          "opening_hours": "Tu-Sa 17:00-23:00",
          "phone": "020 741 3011"
        }
      },
      {
        "type": "node",
        "id": 5527479019,
        "lat": 60.1860112,
        "lon": 24.9534889,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11",
          "addr:postcode": "00530",
          "addr:street": "Fleminginkatu",
          "amenity": "restaurant",
          "contact:phone": "+35845 2227745",
          "cuisine": "tapas",
          "drink:wine": "yes",
          "name": "Wino",
          "opening_hours": "Mo-Th 17:00-24:00; Fr,Sa 17:00-02:00",
          "website": "http://www.wino.fi/"
        }
      },
      {
        "type": "node",
        "id": 5556228958,
        "lat": 60.1996516,
        "lon": 24.9421273,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00520",
          "addr:street": "Asemapäällikönkatu",
          "amenity": "restaurant",
          "lunch": "Mo-Fr 10:30-15:00",
          "name": "Yi Jian Yuan",
          "opening_hours": "Mo-Fr 10:30-20:00; Sa 12:00-20:00"
        }
      },
      {
        "type": "node",
        "id": 5562601884,
        "lat": 60.1583135,
        "lon": 24.944889,
        "tags": {
          "amenity": "restaurant",
          "name": "La Bottega"
        }
      },
      {
        "type": "node",
        "id": 5571907693,
        "lat": 60.2059825,
        "lon": 25.0527261,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "egyptian",
          "name": "Ravintola Alexandria",
          "website": "http://www.ravintolaalexandria.fi/"
        }
      },
      {
        "type": "node",
        "id": 5604166537,
        "lat": 60.1639345,
        "lon": 24.9070976,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "24",
          "addr:postcode": "00180",
          "addr:street": "Porkkalankatu",
          "amenity": "restaurant",
          "name": "My Lunch"
        }
      },
      {
        "type": "node",
        "id": 5604167770,
        "lat": 60.1638229,
        "lon": 25.0810472,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "54",
          "addr:postcode": "00850",
          "addr:street": "Jollaksentie",
          "amenity": "restaurant",
          "cuisine": "pizza;italian",
          "name": "Fornitaly",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 5634830623,
        "lat": 60.183912,
        "lon": 24.9830832,
        "tags": {
          "addr:housenumber": "1",
          "addr:postcode": "00540",
          "addr:street": "Capellanaukio",
          "amenity": "restaurant",
          "name": "Harbour Tap & Taste",
          "outdoor_seating": "yes",
          "phone": "+358 50 5161544",
          "self_service": "yes",
          "toilets": "yes",
          "toilets:access": "customers"
        }
      },
      {
        "type": "node",
        "id": 5667545896,
        "lat": 60.193254,
        "lon": 24.9436693,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "25",
          "addr:postcode": "00510",
          "addr:street": "Aleksis Kiven katu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "name": "THAI Orchid-Konepaja",
          "opening_hours": "Mo 11:00-15:00; Tu-Th 11:00-23:00; Fr 11:00-23:00; Sa 12:00-23:00; Su 12:00-20:00",
          "phone": "+358 50 516 2208",
          "website": "http://www.thaiorchid-konepaja.fi/"
        }
      },
      {
        "type": "node",
        "id": 5673032787,
        "lat": 60.1951192,
        "lon": 24.9616401,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "84-86",
          "addr:postcode": "00550",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "delivery": "no",
          "name": "Henkilöstöravintola, ravintola Spora",
          "operator": "Palmia Oy",
          "outdoor_seating": "no",
          "restaurant": "canteen",
          "smoking": "no",
          "website": "https://www.hel.fi/helsinki/fi/kaupunki-ja-hallinto/osallistu-ja-vaikuta/ota-yhteytta/hae-yhteystietoja/toimipistekuvaus?id=8798"
        }
      },
      {
        "type": "node",
        "id": 5673053869,
        "lat": 60.2172784,
        "lon": 24.9635722,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11",
          "addr:postcode": "00600",
          "addr:street": "Käpyläntie",
          "addr:unit": "N",
          "amenity": "restaurant",
          "name": "Ravintola Kapusta",
          "takeaway": "yes",
          "website": "https://www.hel.fi/sote/toimipisteet-fi/aakkosittain/koskela-pake/arjen-palvelut/"
        }
      },
      {
        "type": "node",
        "id": 5706110998,
        "lat": 60.1642929,
        "lon": 24.9453058,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:street": "Pieni Roobertinkatu",
          "amenity": "restaurant",
          "level": "1",
          "name": "Hills Dumplings",
          "opening_hours": "Lunch: Tu-Sa 11:00-14:00",
          "phone": "041 7037961"
        }
      },
      {
        "type": "node",
        "id": 5708577123,
        "lat": 60.1579775,
        "lon": 24.933843,
        "tags": {
          "amenity": "restaurant",
          "name": "Baskeri & Basso",
          "name:fi": "Baskeri & Basso"
        }
      },
      {
        "type": "node",
        "id": 5731009726,
        "lat": 60.1593608,
        "lon": 24.9116519,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Jätkäsaaren Sushi/Roll Sushi",
          "opening_hours": "Mo-Th 11:00-22:00, Fr 11:00-23:00; Sa 16:00-23:00; Su 16:00-22:00",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 5736315921,
        "lat": 60.1543615,
        "lon": 24.8814258,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00210",
          "addr:street": "Kiviaidankatu",
          "amenity": "restaurant",
          "name": "Ravintola Louis",
          "outdoor_seating": "no"
        }
      },
      {
        "type": "node",
        "id": 5736315922,
        "lat": 60.1543692,
        "lon": 24.8820327,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "9",
          "addr:postcode": "00210",
          "addr:street": "Kiviaidankatu",
          "amenity": "restaurant",
          "cuisine": "pizza;italian",
          "name": "Pizza Maggio",
          "outdoor_seating": "yes",
          "phone": "+358401702010",
          "takeaway": "yes",
          "website": "https://www.maggio.fi/"
        }
      },
      {
        "type": "node",
        "id": 5809034109,
        "lat": 60.2067472,
        "lon": 25.1457791,
        "tags": {
          "amenity": "restaurant",
          "level": "1",
          "level:ref": "T",
          "name": "Fafa's",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 5834886109,
        "lat": 60.1912072,
        "lon": 24.9492683,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00510",
          "addr:street": "Konepajankuja",
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Alice Italian",
          "phone": "+358 40 051 3933",
          "website": "https://www.aliceitalian.fi/"
        }
      },
      {
        "type": "node",
        "id": 5851428302,
        "lat": 60.1626468,
        "lon": 24.9359028,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "19",
          "addr:postcode": "00120",
          "addr:street": "Albertinkatu",
          "amenity": "restaurant",
          "capacity": "25",
          "cuisine": "regional",
          "name": "Inari",
          "opening_hours": "We - Fr 17:00-24:00; Sa 14:00-24:00",
          "outdoor_seating": "no",
          "phone": "+358505148155",
          "smoking": "no",
          "takeaway": "no",
          "website": "http://ravintolainari.fi/",
          "wikidata": "Q88308893",
          "wikipedia": "fi:Inari (ravintola)"
        }
      },
      {
        "type": "node",
        "id": 5901505657,
        "lat": 60.1700078,
        "lon": 24.9416848,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00100",
          "addr:street": "Kaivokatu",
          "alt_name": "Na'am City",
          "amenity": "restaurant",
          "cuisine": "african",
          "layer": "1",
          "level": "2",
          "name": "Na'am Kitchen",
          "opening_hours": "Mo-Fr 11:00-20:00; Sa 11:30-20:00",
          "outdoor_seating": "no",
          "website": "https://www.naamkitchen.com/"
        }
      },
      {
        "type": "node",
        "id": 5906657572,
        "lat": 60.1699637,
        "lon": 24.9416849,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00100",
          "addr:street": "Kaivokatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "level": "2",
          "name": "Bangkok9",
          "outdoor_seating": "no"
        }
      },
      {
        "type": "node",
        "id": 5906657573,
        "lat": 60.1700891,
        "lon": 24.9418833,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00100",
          "addr:street": "Kaivokatu",
          "amenity": "restaurant",
          "level": "2",
          "name": "No Pizza",
          "opening_hours": "Mo-Tu 11:00-20:00, We-Th 11:00-21:00; Fr-Sa 11:00-23:00; Su 12:00-19:00",
          "outdoor_seating": "no"
        }
      },
      {
        "type": "node",
        "id": 5909973797,
        "lat": 60.1627307,
        "lon": 24.9464619,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "21",
          "addr:postcode": "00130",
          "addr:street": "Korkeavuorenkatu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "email": "info@ventuno.fi",
          "name": "Ventuno",
          "opening_hours": "Mo-Sa 9:00-00:30; Su 13:00-22:00; PH off",
          "start_date": "2018-09-17",
          "website": "https://www.ventuno.fi"
        }
      },
      {
        "type": "node",
        "id": 5920088557,
        "lat": 60.1831925,
        "lon": 24.9587931,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "cuisine": "european",
          "name": "Tanner",
          "opening_hours": "Mo,Tu 08:30-24:00; We,Th 08:30-01:00, Fr 08:30-02:00, Sa 10:00-02:00",
          "smoking": "no",
          "website": "https://ravintolatanner.fi"
        }
      },
      {
        "type": "node",
        "id": 5957312857,
        "lat": 60.19363,
        "lon": 24.9492914,
        "tags": {
          "amenity": "restaurant",
          "name": "Aroma"
        }
      },
      {
        "type": "node",
        "id": 5988488289,
        "lat": 60.1734276,
        "lon": 24.9056077,
        "tags": {
          "amenity": "restaurant",
          "name": "Bistro Baden Baden",
          "outdoor_seating": "yes",
          "seasonal": "summer",
          "website": "https://theronbistro.fi/badenbaden/"
        }
      },
      {
        "type": "node",
        "id": 5999965441,
        "lat": 60.1950851,
        "lon": 25.0300718,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00800",
          "addr:street": "Hiihtomäentie",
          "amenity": "restaurant",
          "capacity": "50",
          "cuisine": "kebab;burger;turkish;pizza",
          "email": "herttoniemi.blancco@wintti.com",
          "name": "Blancco",
          "opening_hours": "Mo-Su 10:00-22:00",
          "phone": "+358 10 2315253",
          "website": "http://www.ravintolablancco.com"
        }
      },
      {
        "type": "node",
        "id": 6007131385,
        "lat": 60.1653966,
        "lon": 24.9012504,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00180",
          "addr:street": "Salmisaarenaukio",
          "amenity": "restaurant",
          "name": "Ravintola Factory Salmisaari",
          "name:en": "factory",
          "name:ru": "шведский стол",
          "website": "https://ravintolafactory.com/lounasravintolat/ravintolat/helsinki-salmisaari/"
        }
      },
      {
        "type": "node",
        "id": 6026050448,
        "lat": 60.1512272,
        "lon": 24.8861346,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "13",
          "addr:postcode": "00210",
          "addr:street": "Vattuniemenkatu",
          "amenity": "restaurant",
          "name": "Osaka Sushi"
        }
      },
      {
        "type": "node",
        "id": 6034444988,
        "lat": 60.1533141,
        "lon": 24.8802286,
        "tags": {
          "addr:housenumber": "27 A",
          "addr:postcode": "00210",
          "addr:street": "Itälahdenkatu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "info@vgwok.fi",
          "name": "VG Wok",
          "opening_hours": "Mo-Fr 10:30-18:00",
          "phone": "+358456651793",
          "website": "https://www.vgwok.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 6048288789,
        "lat": 60.1878297,
        "lon": 24.9765163,
        "tags": {
          "addr:housenumber": "13",
          "addr:street": "Työpajankatu",
          "amenity": "restaurant",
          "bar": "yes",
          "cuisine": "mediterranean",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "info@satamabar.com",
          "lunch": "yes",
          "name": "Satama Bar & Bistro",
          "opening_hours": "Mo-Tu 10:30-15:00, We-Th 10:30-21:00, Fr 10:30-24:00",
          "phone": "044 9835125",
          "short_name": "Satama",
          "source": "http://www.satamabar.com"
        }
      },
      {
        "type": "node",
        "id": 6049453007,
        "lat": 60.1685113,
        "lon": 24.9426276,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Stockmann",
          "addr:housenumber": "52",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "-1",
          "name": "Classic Pizza",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 10:30-19:00; Su 11:00-18:00",
          "phone": "+358 9 121 3838",
          "website": "https://www.classicpizza.fi/"
        }
      },
      {
        "type": "node",
        "id": 6049453016,
        "lat": 60.1679983,
        "lon": 24.9426839,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Stockmann",
          "addr:housenumber": "52",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "level": "7",
          "name": "Hanko Sushi",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-19:00; Su 11:00-18:00"
        }
      },
      {
        "type": "node",
        "id": 6049453019,
        "lat": 60.1682713,
        "lon": 24.9424221,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Stockmann",
          "addr:housenumber": "52",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "name": "Fazer À La Carte",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-19:00; Su 11:00-17:00",
          "phone": "+358 50 466 5320",
          "website": "https://www.fazer.fi/ravintolat-ja-leipomot/ravintolat/fazer-8th-floor/fazer--la-carte/"
        }
      },
      {
        "type": "node",
        "id": 6049453020,
        "lat": 60.1686399,
        "lon": 24.942577,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Stockmann",
          "addr:housenumber": "52",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "email": "f8@fazer.fi",
          "name": "Fazer Food Market",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 10:30-18:00; Su 12:00-18:00",
          "phone": "+358 20 729 6803",
          "website": "https://www.fazer.fi/ravintolat-ja-leipomot/ravintolat/fazer-8th-floor/fazer-food-market/"
        }
      },
      {
        "type": "node",
        "id": 6049453044,
        "lat": 60.1683505,
        "lon": 24.9425635,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Stockmann",
          "addr:housenumber": "52",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "cuisine": "fish",
          "email": "viviane.kallio@royalravintolat.com",
          "level": "0",
          "name": "Fishmarket",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa 09:00-19:00; Su 11:00-18:00",
          "outdoor_seating": "no",
          "phone": "+358 50 467 0972",
          "website": "https://www.royalravintolat.com/fi/ravintolat/ravintola/fishmarket/"
        }
      },
      {
        "type": "node",
        "id": 6049453045,
        "lat": 60.1681771,
        "lon": 24.9421772,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Stockmann",
          "addr:housenumber": "52",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "cuisine": "lebanese",
          "diet:vegetarian": "yes",
          "email": "info@comptoirfarouge.fi",
          "level": "0",
          "name": "Comptoir Farouge",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa 09:00-19:00; Su 11:00-18:00",
          "phone": "+358 50 336 9854",
          "website": "http://www.comptoirfarouge.fi/"
        }
      },
      {
        "type": "node",
        "id": 6049453046,
        "lat": 60.1682085,
        "lon": 24.9423544,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Stockmann",
          "addr:housenumber": "52",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "level": "0",
          "name": "Hanko Sushi",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa 09:00-19:00; Su 11:00-18:00",
          "website": "http://www.hankosushi.fi/"
        }
      },
      {
        "type": "node",
        "id": 6049453047,
        "lat": 60.1677857,
        "lon": 24.9424094,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Stockmann",
          "addr:housenumber": "41",
          "addr:postcode": "00100",
          "addr:street": "Pohjoisesplanadi",
          "amenity": "restaurant",
          "cuisine": "salad",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "0",
          "name": "Pupu",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa 09:00-19:00; Su 11:00-18:00",
          "outdoor_seating": "yes",
          "phone": "+358 50 517 0093",
          "website": "https://www.pupu.fi/"
        }
      },
      {
        "type": "node",
        "id": 6054365876,
        "lat": 60.1669654,
        "lon": 24.9459475,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "47",
          "addr:postcode": "00130",
          "addr:street": "Korkeavuorenkatu",
          "amenity": "restaurant",
          "cuisine": "japanese;okinawan",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Latitude 25",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 12:00-21:00; PH off",
          "website": "https://www.latitude25.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060937278,
        "lat": 60.1864583,
        "lon": 24.9793117,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "pasta",
          "email": "info@hangonmakaronitehdas.fi",
          "level": "1",
          "name": "Makaronitehdas",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-18:00; Su 12:00-18:00",
          "phone": "+358 44 523 3206",
          "website": "http://www.hangonmakaronitehdas.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938323,
        "lat": 60.1867053,
        "lon": 24.9793984,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "burger",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "redi@burgerjoint.fi",
          "level": "-1",
          "name": "Social Burgerjoint",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-18:00; Su 12:00-18:00",
          "phone": "+358 40 139 7675",
          "website": "https://www.burgerjoint.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938326,
        "lat": 60.1868085,
        "lon": 24.9795995,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "indian",
          "level": "-1",
          "name": "Haweli",
          "opening_hours": "Mo-Fr 10:00-21:00; Sa 12:00-21:00; Su 12:00-18:00",
          "phone": "+358 50 559 3639"
        }
      },
      {
        "type": "node",
        "id": 6060938327,
        "lat": 60.1868602,
        "lon": 24.9796764,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "chicken",
          "email": "shtariqjamil@yahoo.com",
          "level": "-1",
          "name": "Crazy Grill Chicken",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-18:00; Su 12:00-18:00",
          "phone": "+358 50 520 7049"
        }
      },
      {
        "type": "node",
        "id": 6060938330,
        "lat": 60.1869762,
        "lon": 24.9799522,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "middle_eastern",
          "email": "aso.aziz@zico.fi",
          "name": "Daya",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa-Su 11:00-18:00",
          "phone": "+358 50 438 1766"
        }
      },
      {
        "type": "node",
        "id": 6060938331,
        "lat": 60.1870393,
        "lon": 24.9800325,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "asian",
          "email": "info@wokwok.fi",
          "level": "-1",
          "name": "Wok Wok",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 11:00-20:00; Su 12:00-19:00",
          "phone": "+358 41 474 2704",
          "website": "http://www.wokwok.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938342,
        "lat": 60.1872975,
        "lon": 24.9789186,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "salad",
          "email": "redi@salaattiasema.fi",
          "level": "2",
          "name": "Salaattiasema",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-18:00; Su 12:00-18:00",
          "phone": "+358 50 526 0271",
          "website": "https://www.salaattiasema.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938344,
        "lat": 60.1873707,
        "lon": 24.9781663,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "salad",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "2",
          "name": "Pupu",
          "opening_hours": "Mo-Fr 11:00-19:00; Sa 11:00-18:00",
          "phone": "+358 50 329 9731",
          "website": "https://www.pupu.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938362,
        "lat": 60.1864935,
        "lon": 24.9790613,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "level": "2",
          "name": "Ristorante Momento",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 10:30-18:00; Su 12:00-18:00",
          "opening_hours:covid19": "off",
          "phone": "+358 50 550 5009",
          "website": "http://www.ristorantemomento.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938363,
        "lat": 60.1863338,
        "lon": 24.9792694,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "info@luckiefun.com",
          "level": "2",
          "name": "Luckiefun’s",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 11:00-21:00; Su 12:00-21:00",
          "phone": "+358 45 803 5391",
          "website": "https://www.luckiefun.com/"
        }
      },
      {
        "type": "node",
        "id": 6060938364,
        "lat": 60.1864772,
        "lon": 24.9792025,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "italian",
          "email": "aleksi@ilsiciliano.fi",
          "level": "2",
          "name": "Ristorante Il Siciliano",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa 09:00-18:00; Su 12:00-18:00",
          "opening_hours:covid19": "off",
          "phone": "+358 50 544 7694",
          "website": "https://www.ilsiciliano.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938907,
        "lat": 60.1872809,
        "lon": 24.9786542,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "italian",
          "email": "ristoranteilmondo@gmail.com",
          "level": "1",
          "name": "Il Mondo",
          "opening_hours": "Mo-Sa 09:00-21:00; Su 10:00-18:00",
          "phone": "+358 45 205 3315",
          "website": "https://www.ilmondo.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938911,
        "lat": 60.1868271,
        "lon": 24.9796753,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "salad",
          "level": "0",
          "name": "Eat Your Greens",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-18:00; Su 12:00-18:00",
          "website": "https://www.eatyourgreens.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938913,
        "lat": 60.1866767,
        "lon": 24.9791265,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "level": "1",
          "name": "Hanko Sushi",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-18:00; Su 12:00-18:00",
          "phone": "+358 50 428 6070",
          "website": "http://www.hankosushi.fi/"
        }
      },
      {
        "type": "node",
        "id": 6060938914,
        "lat": 60.1864583,
        "lon": 24.9791034,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "info@classicpizza.fi",
          "level": "1",
          "name": "Classic Pizza",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-18:00; Su 12:00-18:00",
          "phone": "+358 44 033 7604",
          "website": "https://www.classicpizza.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6060938917,
        "lat": 60.1866284,
        "lon": 24.9797569,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Redi",
          "addr:housenumber": "5",
          "addr:postcode": "00580",
          "addr:street": "Hermannin Rantatie",
          "amenity": "restaurant",
          "cuisine": "italian",
          "email": "info@pomodor.fi",
          "level": "1",
          "name": "Pomo D'or",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-20:00; Su 12:00-20:00",
          "phone": "+358 40 180 6656",
          "website": "https://www.pomodor.fi/"
        }
      },
      {
        "type": "node",
        "id": 6095066106,
        "lat": 60.1784168,
        "lon": 24.9550671,
        "tags": {
          "addr:housenumber": "6",
          "addr:street": "Hakaniemenranta",
          "amenity": "restaurant",
          "name": "Lasiranta",
          "website": "https://lasiranta.fi"
        }
      },
      {
        "type": "node",
        "id": 6095625763,
        "lat": 60.1785999,
        "lon": 24.9496223,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "coffee_shop",
          "full_name": "La Torrefazione Hakaniemi",
          "name": "La Torrefazione",
          "opening_hours": "Mo-Fr 10:00-16:00; Sa 10:00-15:00",
          "opening_hours:covid19": "restricted",
          "phone": "09-42893745",
          "short_name": "Torre",
          "takeaway:covid19": "only",
          "website": "http://www.latorre.fi/toimipiste/hakaniemi"
        }
      },
      {
        "type": "node",
        "id": 6095700743,
        "lat": 60.1571873,
        "lon": 24.9215275,
        "tags": {
          "amenity": "restaurant",
          "name": "Urbine",
          "opening_hours": "Mo-Th 08:30-21:00; Fr 08:30-23:00; Sa 10:00-23:00; Su 10:00-16:00",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6095700744,
        "lat": 60.1552321,
        "lon": 24.9155268,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "36",
          "addr:postcode": "00220",
          "addr:street": "Länsisatamankatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Chinaboss",
          "opening_hours": "Mo-Fr 10:00-20:00; Sa-Su 12:00-18:00",
          "phone": "+358 50 400 0583",
          "website": "https://jätkäsaari.chinaboss.fi",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 6095700745,
        "lat": 60.1550559,
        "lon": 24.9156451,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "36",
          "addr:postcode": "00220",
          "addr:street": "Länsisatamankatu",
          "amenity": "restaurant",
          "cuisine": "italian;italian_pizza",
          "name": "Naples Food & Wine",
          "opening_hours": "Mo-Th 11:00-21:00; Fr 11:00-22:00; Sa 12:00-22:00; Su 12:00-20:00",
          "phone": "+358413133166",
          "website": "https://www.naples.fi/jatkasaari/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6103686304,
        "lat": 60.2121758,
        "lon": 25.0825499,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-7",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "restaurant",
          "level": "2",
          "name": "Today's",
          "phone": "+358 50 346 1994‬",
          "website": "https://www.ravintolatodays.fi/"
        }
      },
      {
        "type": "node",
        "id": 6103686305,
        "lat": 60.2120009,
        "lon": 25.0834358,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-7",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "restaurant",
          "cuisine": "burger",
          "level": "2",
          "name": "The Lucky Bastard",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-19:00; Su 12:00-18:00",
          "phone": "+358 50 436 5454",
          "website": "https://www.theluckybastard.fi/itis/"
        }
      },
      {
        "type": "node",
        "id": 6103686306,
        "lat": 60.2121267,
        "lon": 25.0830008,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "diet:gluten_free": "yes",
          "diet:lactose_free": "yes",
          "diet:meat": "yes",
          "diet:vegan": "yes",
          "level": "2",
          "name": "Ahaan Tam Sang",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-20:00; Su 12:00-19:00",
          "phone": "+358 50 544 0111",
          "website": "http://www.thaiorchiditis.fi"
        }
      },
      {
        "type": "node",
        "id": 6103686309,
        "lat": 60.2122283,
        "lon": 25.0825126,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-7",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "restaurant",
          "cuisine": "mexican",
          "email": "itis@panchovilla.fi",
          "level": "2",
          "name": "Pancho Villa",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 11:00-19:00; Su 12:00-19:00",
          "phone": "+358 50 564 1811",
          "website": "https://www.panchovilla.fi/helsinki-itis/"
        }
      },
      {
        "type": "node",
        "id": 6103686312,
        "lat": 60.212183,
        "lon": 25.0832985,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-7",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "email": "itakeskus@hankosushi.fi",
          "level": "2",
          "name": "Hanko Sushi",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-19:00; Su 12:00-18:00",
          "phone": "+358 40 176 9595",
          "website": "http://www.hankosushi.fi/"
        }
      },
      {
        "type": "node",
        "id": 6103686314,
        "lat": 60.2119659,
        "lon": 25.0827281,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-7",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "level": "1",
          "name": "Classic Pizza",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-19:00; Su 12:00-18:00",
          "phone": "+358 44 033 7603",
          "website": "https://www.classicpizza.fi/"
        }
      },
      {
        "type": "node",
        "id": 6103686318,
        "lat": 60.2118867,
        "lon": 25.083553,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Itis",
          "addr:housenumber": "1-5",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "restaurant",
          "cuisine": "thai",
          "level": "2",
          "name": "BangCook",
          "opening_hours": "Mo-Th 11:00-21:00; Fr-Sa 11:00-23:00; Su 12:00-21:00"
        }
      },
      {
        "type": "node",
        "id": 6115134198,
        "lat": 60.2308605,
        "lon": 24.8814172,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00440",
          "addr:street": "Leiviskäpolku",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Tempura Sushi"
        }
      },
      {
        "type": "node",
        "id": 6123414862,
        "lat": 60.1693033,
        "lon": 24.9451626,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00100",
          "addr:street": "Mikonkatu",
          "amenity": "restaurant",
          "cuisine": "finnish;nordic",
          "name": "Wild",
          "opening_hours": "Mo-Th 10:00-19:00; Fr-Sa 10:00-23:00",
          "phone": "+358 505 246 046",
          "smoking": "no",
          "website": "https://www.worldoftre.com/pages/wild"
        }
      },
      {
        "type": "node",
        "id": 6138893749,
        "lat": 60.1738439,
        "lon": 24.9379133,
        "tags": {
          "amenity": "restaurant",
          "level": "0",
          "name": "Fazer Food & Co",
          "opening_hours:covid19": "off",
          "website": "https://www.fazerfoodco.fi/en/restaurants/Ravintolat-kaupungeittain/helsinki/oodi/"
        }
      },
      {
        "type": "node",
        "id": 6139262247,
        "lat": 60.1690399,
        "lon": 24.9382792,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "asian",
          "level": "3",
          "name": "Wok Up",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 10:30-18:00; Su 12:00-18:00",
          "phone": "+358 10 766 4413",
          "website": "https://www.raflaamo.fi/fi/helsinki/wok-up-kukontori/"
        }
      },
      {
        "type": "node",
        "id": 6139262264,
        "lat": 60.1687758,
        "lon": 24.9382793,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "14-20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "salad",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "forum@salaattiasema.fi",
          "level": "0",
          "name": "Salaattiasema",
          "phone": "+358 50 465 0777",
          "website": "https://www.salaattiasema.fi/salaattiasema-kauppakeskus-forum/"
        }
      },
      {
        "type": "node",
        "id": 6139262265,
        "lat": 60.1689704,
        "lon": 24.9383353,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "italian",
          "email": "ravintola.italo@sok.fi",
          "level": "3",
          "name": "Italo",
          "opening_hours": "Mo-Th 10:30-22:00; Fr-Sa 10:30-23:00; Su 12:00-21:00",
          "phone": "+358 10 766 4410",
          "reservation": "yes",
          "website": "https://www.raflaamo.fi/fi/helsinki/italo/"
        }
      },
      {
        "type": "node",
        "id": 6139262280,
        "lat": 60.1689137,
        "lon": 24.9384008,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "steak_house",
          "email": "palaute@manhattansteakhouse.fi",
          "level": "0",
          "name": "Manhattan Steak House",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 10:30-20:00; Su 11:00-18:00",
          "phone": "+358 9 694 4207",
          "website": "http://www.manhattansteakhouse.fi/forum/"
        }
      },
      {
        "type": "node",
        "id": 6139262593,
        "lat": 60.1694336,
        "lon": 24.9385905,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "email": "ravintola.kaarna@sok.fi",
          "level": "1",
          "lunch:buffet": "Mo-Fr 11:00-14:00",
          "name": "Kaarna",
          "opening_hours": "Mo-Th 11:00-23:00; Fr-Sa 11:00-24:00; Su 12:00-22:00",
          "phone": "+358 10 766 4550",
          "reservation": "yes",
          "website": "https://www.raflaamo.fi/fi/helsinki/kaarna-baari-keittio/"
        }
      },
      {
        "type": "node",
        "id": 6139262605,
        "lat": 60.169005,
        "lon": 24.9383594,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "20 B",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "email": "info@huacheng.fi",
          "level": "0",
          "name": "Huacheng Restaurant",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 11:00-20:00; Su 12:00-20:00",
          "phone": "+358 9 753 1631",
          "website": "http://www.huacheng.fi/"
        }
      },
      {
        "type": "node",
        "id": 6139262609,
        "lat": 60.1688838,
        "lon": 24.9381231,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housename": "Forum",
          "addr:housenumber": "20",
          "addr:postcode": "00100",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "email": "forum@hankosushi.fi",
          "level": "3",
          "lunch:menu": "Mo-Fr 11:00-15:00",
          "name": "Hanko Sushi",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-19:00; Su 12:00-18:00",
          "phone": "+358 40 654 8282",
          "website": "http://www.hankosushi.fi/"
        }
      },
      {
        "type": "node",
        "id": 6239593489,
        "lat": 60.1845629,
        "lon": 24.9604625,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "15",
          "addr:postcode": "00500",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "cuisine": "international",
          "diet:vegan": "yes",
          "diet:vegetarian": "only",
          "email": "asiakaspalvelu@pien.fi",
          "lunch": "yes",
          "microbrewery": "yes",
          "name": "Pien Brewpub",
          "old_name": "Beerger",
          "opening_hours": "Mo-Tu 11:00-00:00; We-Th 11:00-02:00, Fr 11:00-04:00; Sa 12:00-04:00, Su 12:00-02:00",
          "phone": "050 5342211",
          "short_name": "Pien",
          "website": "https://www.pien.fi/#brewpub"
        }
      },
      {
        "type": "node",
        "id": 6252399997,
        "lat": 60.1706496,
        "lon": 24.9349837,
        "tags": {
          "addr:housenumber": "1",
          "amenity": "restaurant",
          "name": "Backyard Pick"
        }
      },
      {
        "type": "node",
        "id": 6284009629,
        "lat": 60.1947521,
        "lon": 24.8998351,
        "tags": {
          "access:covid19": "yes",
          "amenity": "restaurant",
          "delivery:covid19": "no",
          "drive_through:covid19": "no",
          "name": "Meiccu",
          "opening_hours": "Mo-Fr 11:00-15:00",
          "opening_hours:covid19": "open",
          "start_date": "2019-02-18",
          "takeaway:covid19": "yes",
          "website": "https://www.facebook.com/ravintolameiccu/"
        }
      },
      {
        "type": "node",
        "id": 6286518101,
        "lat": 60.1600428,
        "lon": 24.8811731,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "salad",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "0",
          "name": "salaattiasema",
          "outdoor_seating": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6286518104,
        "lat": 60.1600319,
        "lon": 24.881068,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "juice",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "0",
          "name": "Jungle juice bar",
          "outdoor_seating": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6300949273,
        "lat": 60.1531855,
        "lon": 24.8794115,
        "tags": {
          "amenity": "restaurant",
          "name": "Loru"
        }
      },
      {
        "type": "node",
        "id": 6303070674,
        "lat": 60.184925,
        "lon": 24.9166022,
        "tags": {
          "access:covid19": "no",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "delivery:covid19": "yes",
          "drive_through:covid19": "no",
          "name": "Makuja Sushi",
          "opening_hours": "Mo-Fr 11:00-19:00; Sa,Su 12:00-19:00",
          "opening_hours:covid19": "Mo-Fr 11:00-19:00; Sa,Su 12:00-19:00",
          "phone": "044 0570015",
          "takeaway": "yes",
          "takeaway:covid19": "yes",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 6313848939,
        "lat": 60.1498151,
        "lon": 24.8875467,
        "tags": {
          "access:covid19": "no",
          "amenity": "restaurant",
          "cuisine": "mediterranean",
          "delivery:covid19": "yes",
          "description:covid19": "Nouto paikan päältä tai Wolt/Foodora",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Levant",
          "opening_hours": "Mo-Fr 10:30-14:30; Sa 11:00-16:00",
          "opening_hours:covid19": "open",
          "outdoor_seating": "no",
          "takeaway:covid19": "yes",
          "website": "https://www.levant.fi/"
        }
      },
      {
        "type": "node",
        "id": 6325027128,
        "lat": 60.1914785,
        "lon": 25.0239581,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00810",
          "addr:street": "Suolakivenkatu",
          "amenity": "restaurant",
          "contact:facebook": "https://www.facebook.com/PaisteOy",
          "cuisine": "lunch",
          "name": "Paiste",
          "website": "http://www.paiste.fi/"
        }
      },
      {
        "type": "node",
        "id": 6326864346,
        "lat": 60.1699009,
        "lon": 24.940509,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "sushi",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "luckiefun's",
          "outdoor_seating": "no"
        }
      },
      {
        "type": "node",
        "id": 6326871950,
        "lat": 60.169791,
        "lon": 24.9414611,
        "tags": {
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "2",
          "name": "Döner Harju",
          "opening_hours": "Mo-Th 10:30-21:00, Fr 10:30-22:00; Sa 11:00-22:00; Su 12:00-19:00",
          "website": "https://donerharju.fi/"
        }
      },
      {
        "type": "node",
        "id": 6326873042,
        "lat": 60.1698749,
        "lon": 24.9414753,
        "tags": {
          "amenity": "restaurant",
          "level": "2",
          "name": "lo stretto",
          "opening_hours": "Mo-Th 10:30-21:00, Fr 10:30-22:00; Sa 11:00-22:00; Su 12:00-19:00",
          "outdoor_seating": "no"
        }
      },
      {
        "type": "node",
        "id": 6326874994,
        "lat": 60.1699684,
        "lon": 24.9414579,
        "tags": {
          "amenity": "restaurant",
          "level": "2",
          "name": "Hey Poke",
          "opening_hours": "Mo-Th 11:00-20:00, Fr 11:00-21:00; Sa 12:00-21:00; Su 12:00-18:00",
          "outdoor_seating": "no"
        }
      },
      {
        "type": "node",
        "id": 6326877371,
        "lat": 60.1697889,
        "lon": 24.9418634,
        "tags": {
          "amenity": "restaurant",
          "level": "2",
          "name": "sushibar+wine"
        }
      },
      {
        "type": "node",
        "id": 6328881978,
        "lat": 60.1697,
        "lon": 24.9419634,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "sushi",
          "level": "1",
          "name": "hanko sushi",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 12:00-18:00; Su 12:00-17:00",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6362280896,
        "lat": 60.1969909,
        "lon": 24.9517405,
        "tags": {
          "addr:housenumber": "45",
          "addr:street": "Mäkelänkatu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Brokadi Noodle",
          "opening_hours": "Tu-Fr 11:00-15:00,16:30-21:30; Sa-Su 12:00-21:30",
          "outdoor_seating": "no",
          "website": "https://brokadi.com/"
        }
      },
      {
        "type": "node",
        "id": 6378543394,
        "lat": 60.18848,
        "lon": 24.9560832,
        "tags": {
          "addr:housenumber": "19",
          "addr:street": "Vaasankatu",
          "addr:unit": "a",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "King Kebab Kallio"
        }
      },
      {
        "type": "node",
        "id": 6383386371,
        "lat": 60.2101206,
        "lon": 24.8891931,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3-5",
          "addr:postcode": "00320",
          "addr:street": "Vihdintie",
          "amenity": "restaurant",
          "cuisine": "greek",
          "name": "Caffe Creeta",
          "opening_hours": "Mo-Fr 08:00-17:00",
          "opening_hours:covid19": "off",
          "outdoor_seating": "yes"
        }
      },
      {
        "type": "node",
        "id": 6387138865,
        "lat": 60.1666935,
        "lon": 24.9304752,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2-4",
          "addr:postcode": "00180",
          "addr:street": "Malminrinne",
          "amenity": "restaurant",
          "name": "Skiffer Kamppi"
        }
      },
      {
        "type": "node",
        "id": 6400793501,
        "lat": 60.2413657,
        "lon": 24.884914,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00420",
          "addr:street": "Vanhaistentie",
          "addr:unit": "a",
          "amenity": "restaurant",
          "brewery": "yes",
          "delivery:covid19": "yes",
          "drive_through:covid19": "no",
          "food": "yes",
          "name": "Britannia",
          "name:fi": "Ravintola Britannia",
          "opening_hours": "Mo-Th 11:00-24:00; Fr-Sa 11:00-04:00; Su 12:00-24:00",
          "opening_hours:covid19": "Fr,Sa 16:00-20:00; Su 13:00-20:00",
          "takeaway:covid19": "yes",
          "website": "http://britannia.fi/"
        }
      },
      {
        "type": "node",
        "id": 6421058187,
        "lat": 60.1691353,
        "lon": 24.9490103,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "chinese",
          "name": "Home Taste",
          "name:en": "Ravintola Home Taste"
        }
      },
      {
        "type": "node",
        "id": 6430367967,
        "lat": 60.1863117,
        "lon": 24.9791784,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "burger",
          "diet:vegan": "only",
          "diet:vegetarian": "only",
          "level": "1",
          "name": "Bun 2 Bun Redi",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 10:30-19:00; Su 12:00-18:00",
          "phone": "+358504750351",
          "short_name": "Bun 2 Bun",
          "smoking": "no",
          "toilets": "no",
          "website": "https://bun2bunburgers.com/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6430367968,
        "lat": 60.1863772,
        "lon": 24.9792067,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "sandwich",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "1",
          "name": "street gastro",
          "smoking": "no",
          "toilets": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6430367969,
        "lat": 60.1863952,
        "lon": 24.9790876,
        "tags": {
          "amenity": "restaurant",
          "level": "1",
          "name": "Boneless",
          "smoking": "no",
          "toilets": "no"
        }
      },
      {
        "type": "node",
        "id": 6430367970,
        "lat": 60.1863375,
        "lon": 24.9790671,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "mediterranean",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "1",
          "name": "Levant",
          "smoking": "no",
          "toilets": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6430367971,
        "lat": 60.1863624,
        "lon": 24.9792553,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "fish_and_chips",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "1",
          "name": "Fisu & Ranet",
          "smoking": "no",
          "toilets": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6430367972,
        "lat": 60.1863174,
        "lon": 24.979117,
        "tags": {
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "1",
          "name": "Bali Brunch",
          "smoking": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6430367973,
        "lat": 60.1863882,
        "lon": 24.9791542,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "chinese",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "1",
          "name": "Mad wok",
          "smoking": "no",
          "toilets": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6430392038,
        "lat": 60.1863519,
        "lon": 24.9792936,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "mexican",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "1",
          "name": "Saint tortillas",
          "smoking": "no",
          "toilets": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6434161046,
        "lat": 60.1795379,
        "lon": 24.9508783,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "sandwich;mediterranean",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "level": "-1",
          "name": "Classic & vegan",
          "opening_hours": "Mo-Th,Su 10:00-21:00; Fr-Sa 10:00-22:00",
          "smoking": "no",
          "toilets": "yes",
          "toilets:access": "customers",
          "toilets:wheelchair": "yes",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6442367730,
        "lat": 60.1832531,
        "lon": 24.9588485,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11A",
          "addr:postcode": "00530",
          "addr:street": "Hämeentie",
          "addr:unit": "3. kerros",
          "amenity": "restaurant",
          "name": "Väinö Kallio",
          "note": "Suljettu helmikuussa 2020. Avataan taas maaliskuun alkupuolella.",
          "outdoor_seating": "no",
          "website": "https://www.vainokallio.fi/"
        }
      },
      {
        "type": "node",
        "id": 6464121019,
        "lat": 60.2810091,
        "lon": 25.0122007,
        "tags": {
          "amenity": "restaurant",
          "name": "Lounasravintola Pilke",
          "url": "https://pitopalvelupilke.com/"
        }
      },
      {
        "type": "node",
        "id": 6464185982,
        "lat": 60.1840132,
        "lon": 24.9623374,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "10",
          "addr:postcode": "00500",
          "addr:street": "Lintulahdenkatu",
          "amenity": "restaurant",
          "cuisine": "regional",
          "name": "Pihka"
        }
      },
      {
        "type": "node",
        "id": 6482405753,
        "lat": 60.1630593,
        "lon": 24.9412095,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "20-22",
          "addr:postcode": "00120",
          "addr:street": "Iso Roobertinkatu",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "name": "NOM Vietnamese Kitchen",
          "website": "http://nomvietnamesekitchen.fi/"
        }
      },
      {
        "type": "node",
        "id": 6512071269,
        "lat": 60.1581094,
        "lon": 24.9132354,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "20",
          "addr:postcode": "00220",
          "addr:street": "Välimerenkatu",
          "amenity": "restaurant",
          "cuisine": "pizza;burger;salad",
          "name": "Vacco",
          "opening_hours": "Ma:  suljettu  Ti:     11.00-22.00   Ke:  11.00-22.00  To:  11.00-22.00  Pe:  11.00 - 22.00  La:  12.00 - 22.00  Su:  12.00-21.00",
          "phone": "+358449493903",
          "website": "https://vacco.webnode.fi/"
        }
      },
      {
        "type": "node",
        "id": 6567369300,
        "lat": 60.1527176,
        "lon": 24.8796576,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "22a",
          "addr:postcode": "00210",
          "addr:street": "Itälahdenkatu",
          "amenity": "restaurant",
          "email": "stonebase@alces.fi",
          "name": "Ravintola Stonebase",
          "opening_hours": "Mo-Fr 11-14",
          "operator": "Alces",
          "phone": "+358 43 8242232",
          "website": "https://alces.fi/ravintola-stonebase/"
        }
      },
      {
        "type": "node",
        "id": 6630863153,
        "lat": 60.1954769,
        "lon": 24.9287611,
        "tags": {
          "access": "private",
          "amenity": "restaurant",
          "name": "Sodexo - Huolintatalo",
          "opening_hours": "Mo-Fr 09:00-14:00",
          "operator": "Sodexo",
          "phone": "+358503599311",
          "website": "https://www.sodexo.fi/huolintatalo"
        }
      },
      {
        "type": "node",
        "id": 6634790997,
        "lat": 60.1823346,
        "lon": 24.9791229,
        "tags": {
          "amenity": "restaurant",
          "brand": "Pizza Hut",
          "brand:wikidata": "Q191615",
          "brand:wikipedia": "en:Pizza Hut",
          "cuisine": "pizza",
          "delivery:covid19": "yes",
          "disused": "restaurant",
          "name": "Pizza Hut",
          "takeaway": "yes",
          "takeaway:covid19": "yes"
        }
      },
      {
        "type": "node",
        "id": 6660555490,
        "lat": 60.1836111,
        "lon": 24.9605119,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00530",
          "addr:street": "Kaikukatu",
          "addr:unit": "B",
          "amenity": "restaurant",
          "email": "hello@bruketcafe.fi",
          "name": "Bruket",
          "note": "2. kerros",
          "opening_hours": "Mo-Sa 09:00-19:00",
          "website": "http://www.bruketcafe.fi/"
        }
      },
      {
        "type": "node",
        "id": 6680376296,
        "lat": 60.1579883,
        "lon": 24.949125,
        "tags": {
          "amenity": "restaurant",
          "delivery:covid19": "no",
          "name": "Jura",
          "opening_hours": "Tu-Sa 17:00-22:00; Jul 1 - Aug 6 off; PH off",
          "opening_hours:covid19": "Tu-Fr 11:30-13:00,16:00-18:00; Sa 13:00-18:00",
          "phone": "+358503574949",
          "takeaway:covid19": "yes",
          "website": "https://www.ravintolajura.fi/"
        }
      },
      {
        "type": "node",
        "id": 6691797488,
        "lat": 60.1659253,
        "lon": 24.9480053,
        "tags": {
          "amenity": "restaurant",
          "name": "Pihka"
        }
      },
      {
        "type": "node",
        "id": 6694352285,
        "lat": 60.1857519,
        "lon": 24.9529981,
        "tags": {
          "addr:housenumber": "10",
          "addr:street": "Fleminginkatu",
          "amenity": "restaurant",
          "cuisine": "spanish",
          "name": "Bar Cón",
          "name:fi": "Bar Cón",
          "phone": "+358 50 4432884",
          "website": "https://www.bar-con.fi"
        }
      },
      {
        "type": "node",
        "id": 6742391537,
        "lat": 60.1697822,
        "lon": 24.9336289,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00100",
          "addr:street": "Urho Kekkosen katu",
          "amenity": "restaurant",
          "email": "bookings@sandro.fi",
          "level": "5",
          "name": "Sandro Kortteli",
          "opening_hours": "Mo-Sa 11:00-21:00; Su 12:00-17:00",
          "phone": "+358 9 6128 5171",
          "website": "https://www.sandro.fi/sandro-kortteli/"
        }
      },
      {
        "type": "node",
        "id": 6742391538,
        "lat": 60.16969,
        "lon": 24.9337633,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00100",
          "addr:street": "Urho Kekkosen katu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "email": "info@hoku.fi",
          "image": "http://80.69.174.12/~hoku/wp-content/uploads/2019/07/Hoku-logo-black-small-1.png",
          "level": "5",
          "name": "Hoku",
          "opening_hours": "Mo-Th 11:00-15:00,17:00-22:00; Fr 11:00-15:00,17:00-23:00; Sa 12:00-16:00,17:00-23:00; Su 12:00-16:00",
          "phone": "+358 40 1646160",
          "website": "http://www.hoku.fi/"
        }
      },
      {
        "type": "node",
        "id": 6742490272,
        "lat": 60.169482,
        "lon": 24.9339862,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00100",
          "addr:street": "Urho Kekkosen katu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "email": "manu@malopa.fi",
          "level": "5",
          "name": "Bastardo",
          "opening_hours": "Mo,Tu 11:00-21:30; We,Th 11:00-22:00; Fr,Sa 11:00-23:00; Su 12:00-19:30",
          "phone": "+358 50 3282290",
          "website": "http://bastardo.fi/"
        }
      },
      {
        "type": "node",
        "id": 6742490273,
        "lat": 60.1697029,
        "lon": 24.9336275,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00100",
          "addr:street": "Urho Kekkosen katu",
          "amenity": "restaurant",
          "cuisine": "chinese",
          "email": "kortteli@beijing8.com",
          "level": "5",
          "name": "Beijing8",
          "opening_hours": "Mo-Sa 11:00-21:00; Su 12:00-18:00",
          "payment:mastercard": "yes",
          "payment:visa": "yes",
          "phone": "+35 912341234",
          "website": "http://www.beijing8.com/en/"
        }
      },
      {
        "type": "node",
        "id": 6743553105,
        "lat": 60.2229122,
        "lon": 24.9490627,
        "tags": {
          "addr:housenumber": "3",
          "addr:postcode": "00620",
          "addr:street": "Mäkitorpantie",
          "amenity": "restaurant",
          "name": "Dylan Kottby Oulunkylä",
          "power": "Helsinki",
          "website": "https://www.dylan.fi/kottby"
        }
      },
      {
        "type": "node",
        "id": 6745810064,
        "lat": 60.2494958,
        "lon": 25.0117289,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "16",
          "addr:postcode": "00700",
          "addr:street": "Hietakummuntie",
          "amenity": "restaurant",
          "cuisine": "afghan",
          "name": "Ariana Sish Grill",
          "opening_hours": "Mo-Fr 10:00-21:00; Sa,Su 11:00-21:00",
          "phone": "+358942891020"
        }
      },
      {
        "type": "node",
        "id": 6760304885,
        "lat": 60.187968,
        "lon": 24.9637398,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "33",
          "addr:postcode": "00500",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "cuisine": "pizza;neapolitan_pizza",
          "email": "emilia@viatribunali.fi",
          "name": "Pizzeria Via Tribunali Kallio",
          "phone": "+358 50 4622 001",
          "website": "https://viatribunali.fi/"
        }
      },
      {
        "type": "node",
        "id": 6760327696,
        "lat": 60.1877769,
        "lon": 24.9812698,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "14",
          "addr:postcode": "00580",
          "addr:street": "Työpajankatu",
          "addr:unit": "C",
          "amenity": "restaurant",
          "bar": "no",
          "name": "Ravintola Greenport",
          "name:fi": "Ravintola Greenport",
          "website": "https://ruoka.palmia.fi/fi/ravintola/ravintola/greenport/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 6787322411,
        "lat": 60.1853868,
        "lon": 24.9527252,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Skiffer"
        }
      },
      {
        "type": "node",
        "id": 6830009428,
        "lat": 60.1688859,
        "lon": 24.9522299,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:street": "Sofiankatu",
          "amenity": "restaurant",
          "cuisine": "japanese",
          "email": "info@gohan.fi",
          "name": "Gohan Wine Bar",
          "phone": "00358103379871"
        }
      },
      {
        "type": "node",
        "id": 6833186947,
        "lat": 60.1859642,
        "lon": 24.9615179,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "19",
          "addr:postcode": "00500",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "cuisine": "asian;vietnamese",
          "lunch": "yes",
          "name": "LieMi",
          "opening_hours": "Mo-Fr 11:00-22:00, Sa-Su 13:00-23:00",
          "phone": "+358 50 468 6660",
          "website": "https://www.facebook.com/kimsykallio"
        }
      },
      {
        "type": "node",
        "id": 6845359098,
        "lat": 60.1879074,
        "lon": 24.9533106,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "21",
          "addr:street": "Fleminginkatu",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "name": "Namnam",
          "website": "https://cafenamnam.com/"
        }
      },
      {
        "type": "node",
        "id": 6872639594,
        "lat": 60.1707817,
        "lon": 24.9209727,
        "tags": {
          "addr:housenumber": "7",
          "addr:street": "Mechelininkatu",
          "amenity": "restaurant",
          "name": "Ravintola Perho",
          "website": "https://www.ravintolaperho.fi/"
        }
      },
      {
        "type": "node",
        "id": 6895669142,
        "lat": 60.1578311,
        "lon": 24.9122519,
        "tags": {
          "addr:housenumber": "24",
          "addr:street": "Välimerenkatu",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "name": "Be My Guest",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa 11:00-21:00",
          "phone": "+3584578327111"
        }
      },
      {
        "type": "node",
        "id": 6899787082,
        "lat": 60.1577894,
        "lon": 24.9120669,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "24",
          "addr:postcode": "00220",
          "addr:street": "Välimerenkatu",
          "amenity": "restaurant",
          "cuisine": "pizza;kebab",
          "name": "Ismet",
          "phone": "+358 50 575 1586"
        }
      },
      {
        "type": "node",
        "id": 6918634252,
        "lat": 60.197954,
        "lon": 24.9310882,
        "tags": {
          "amenity": "restaurant",
          "email": "tripla@olearys.fi",
          "name": "O'Learys",
          "opening_hours": "Mo 09:00-22:00; Tu-Th 09:00-24:00; Fr-Sa 09:00-01:30; Su 09:00-22:00",
          "opening_hours:covid19": "off",
          "phone": "+358 400 602223",
          "start_date": "2019",
          "website": "https://olearys.fi/tripla-helsinki/"
        }
      },
      {
        "type": "node",
        "id": 6936787995,
        "lat": 60.1990737,
        "lon": 24.9339632,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "11",
          "addr:postcode": "00520",
          "addr:street": "Veturitie",
          "addr:unit": "A",
          "amenity": "restaurant",
          "cuisine": "italian",
          "email": "signor@signorsmith.fi",
          "layer": "2",
          "lunch": "buffet",
          "name": "Signor Smith",
          "opening_hours": "Mo-Tu 07:00-22:00; We-Th 07:00-23:00; Fr-Sa 07:00-24:00; Su 07:00-22:00",
          "opening_hours:covid19": "off",
          "phone": "+358400243008",
          "website": "https://www.signorsmith.fi/"
        }
      },
      {
        "type": "node",
        "id": 6942468443,
        "lat": 60.1884674,
        "lon": 24.954604,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "25",
          "addr:postcode": "00500",
          "addr:street": "Vaasankatu",
          "amenity": "restaurant",
          "cuisine": "middle_eastern",
          "name": "Levant",
          "phone": "+358 45 219 9997",
          "website": "https://www.levant.fi"
        }
      },
      {
        "type": "node",
        "id": 6977655469,
        "lat": 60.1989466,
        "lon": 24.9329152,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "chinese",
          "delivery:covid19": "yes",
          "layer": "3",
          "name": "Brokadi Tripla",
          "opening_hours:covid19": "open",
          "phone": "+358442388908",
          "website": "https://brokadi.com/"
        }
      },
      {
        "type": "node",
        "id": 6987716928,
        "lat": 60.198566,
        "lon": 24.9318743,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "thai",
          "level": "2",
          "name": "Bangkok9"
        }
      },
      {
        "type": "node",
        "id": 7019084927,
        "lat": 60.1691622,
        "lon": 24.9348544,
        "tags": {
          "amenity": "restaurant",
          "diet:kosher": "no",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "The Plaza",
          "opening_hours": "Mo-Su 11:00-02:00",
          "opening_hours:covid19": "off",
          "phone": "+358 40 1646826",
          "website": "https://theplaza.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 7060218222,
        "lat": 60.1988256,
        "lon": 24.9303147,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "East Market",
          "website": "https://www.eastmarkethelsinki.com"
        }
      },
      {
        "type": "node",
        "id": 7063273821,
        "lat": 60.1988012,
        "lon": 24.9312826,
        "tags": {
          "access:covid19": "yes",
          "addr:city": "Helsinki",
          "addr:floor": "4",
          "addr:housenumber": "1",
          "addr:postcode": "00520",
          "addr:street": "Fredikanterassi",
          "amenity": "restaurant",
          "cuisine": "indian",
          "delivery": "yes",
          "delivery:covid19": "yes",
          "diet:gluten_free": "yes",
          "diet:lactose_free": "yes",
          "diet:meat": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "tripla@delhirasoi.fi",
          "name": "Delhi Rasoi Tripla",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa-Su 12:00-21:00",
          "opening_hours:covid19": "Mo-Fr 10:30-20:00; Sa 12:00-20:00; ",
          "phone": "+358 50 4399659",
          "start_date": "2019-10-17",
          "takeaway": "yes",
          "takeaway:covid19": "yes",
          "website": "https://www.delhirasoi.fi"
        }
      },
      {
        "type": "node",
        "id": 7066086470,
        "lat": 60.1985717,
        "lon": 24.9304446,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza",
          "level": "2",
          "name": "Capperi",
          "opening_hours": "Mo-Sa 11:00-20:00; Su 11:00-19:00",
          "opening_hours:covid19": "off",
          "website": "https://capperi.fi/"
        }
      },
      {
        "type": "node",
        "id": 7074603724,
        "lat": 60.2352314,
        "lon": 25.1002674,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00940",
          "addr:street": "Humikkalanrinne",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Pizza Speed",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-23:00; Sa 11:00-23:00; Su 11:00-22:00",
          "outdoor_seating": "yes",
          "phone": "+358 9224 4455",
          "website": "https://www.pizzaspeed.fi/"
        }
      },
      {
        "type": "node",
        "id": 7078176683,
        "lat": 60.2359931,
        "lon": 25.083084,
        "tags": {
          "amenity": "restaurant",
          "name": "Döner King"
        }
      },
      {
        "type": "node",
        "id": 7078176684,
        "lat": 60.236287,
        "lon": 25.0828539,
        "tags": {
          "amenity": "restaurant",
          "check_date:opening_hours": "2021-07-25",
          "cuisine": "sushi;asian",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Yu Zi",
          "opening_hours": "Mo-Fr 10:30-21:00; Sa,Su 12:00-21:00"
        }
      },
      {
        "type": "node",
        "id": 7078186389,
        "lat": 60.2364189,
        "lon": 25.083356,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza",
          "diet:vegetarian": "yes",
          "name": "Chaviland",
          "opening_hours": "Mo-Th 10:00-23:00, Su 11:00-24:00; Fr 10:00-04:00, Sa 11:00-04:00"
        }
      },
      {
        "type": "node",
        "id": 7078186401,
        "lat": 60.2367086,
        "lon": 25.0827744,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Taormina"
        }
      },
      {
        "type": "node",
        "id": 7078247585,
        "lat": 60.2373439,
        "lon": 25.0832999,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "chinese",
          "diet:vegetarian": "yes",
          "name": "Wing Wah",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa,Su 12:00-21:00",
          "takeaway:covid19": "only",
          "website": "https://wingwah.rong.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 7078247588,
        "lat": 60.2365808,
        "lon": 25.0823576,
        "tags": {
          "amenity": "restaurant",
          "contact:facebook": "SHISHKEBAB.FI",
          "contact:phone": "+358 46 5812481",
          "cuisine": "kebab",
          "name": "Shish Kebab",
          "opening_hours": "Mo-Su 11:00-21:00"
        }
      },
      {
        "type": "node",
        "id": 7086261470,
        "lat": 60.1576178,
        "lon": 24.9118972,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "24",
          "addr:postcode": "00220",
          "addr:street": "Välimerenkatu",
          "addr:street:fi": "Länsisatamankatu",
          "amenity": "restaurant",
          "cuisine": "pakistani",
          "name": "Spice Village",
          "smoking": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 7195113183,
        "lat": 60.1807469,
        "lon": 24.8499777,
        "tags": {
          "addr:housenumber": "1",
          "addr:street": "Lehtisaarentie",
          "amenity": "restaurant",
          "name": "Min Sushi",
          "opening_hours": "Sa 12:00-20:30; Tu-Fr, Su 17:00-20:30",
          "phone": "+358401530523",
          "website": "https://minsushi.fi"
        }
      },
      {
        "type": "node",
        "id": 7196173376,
        "lat": 60.1689406,
        "lon": 24.9593376,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00160",
          "addr:street": "Kanavaranta",
          "amenity": "restaurant",
          "fixme": "exact location?",
          "name": "Shelter",
          "opening_hours": "Mo-Sa 17:00-24:00",
          "website": "http://www.shelter.fi/"
        }
      },
      {
        "type": "node",
        "id": 7202747614,
        "lat": 60.1808536,
        "lon": 24.9506684,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00530",
          "addr:street": "Toinen linja",
          "amenity": "restaurant",
          "diet:vegan": "yes",
          "diet:vegetarian": "only",
          "email": "info@silvoplee.fi",
          "name": "Silvoplee Kasvisravintola",
          "note": "Avataan 02-2020",
          "phone": "+35897260900",
          "was:opening_hours": "Mo-Fr 11:00-19:00; Sa 11:00-18:00",
          "website": "http://www.silvoplee.com/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 7213933885,
        "lat": 60.1672424,
        "lon": 24.9527668,
        "tags": {
          "addr:housenumber": "18-20",
          "addr:street": "Eteläranta",
          "amenity": "restaurant",
          "cuisine": "steak_house;scandinavian",
          "name": "Puosun Kellari",
          "seasonal": "winter"
        }
      },
      {
        "type": "node",
        "id": 7217000925,
        "lat": 60.1859436,
        "lon": 24.9671361,
        "tags": {
          "amenity": "restaurant",
          "name": "Ravintola 27"
        }
      },
      {
        "type": "node",
        "id": 7217000933,
        "lat": 60.1842509,
        "lon": 24.9636528,
        "tags": {
          "addr:housenumber": "10",
          "addr:street": "Lintulahdenkuja",
          "amenity": "restaurant",
          "name": "Ravintola BAD Lintu 10"
        }
      },
      {
        "type": "node",
        "id": 7222041366,
        "lat": 60.16973,
        "lon": 24.933614,
        "tags": {
          "amenity": "restaurant",
          "name": "Story Kortteli"
        }
      },
      {
        "type": "node",
        "id": 7222041367,
        "lat": 60.1697734,
        "lon": 24.9336183,
        "tags": {
          "amenity": "restaurant",
          "name": "Pobre",
          "opening_hours:covid19": "open",
          "takeaway:covid19": "yes"
        }
      },
      {
        "type": "node",
        "id": 7222041368,
        "lat": 60.1696464,
        "lon": 24.9337678,
        "tags": {
          "amenity": "restaurant",
          "name": "Fisken på Disken"
        }
      },
      {
        "type": "node",
        "id": 7222041369,
        "lat": 60.169681,
        "lon": 24.9337295,
        "tags": {
          "amenity": "restaurant",
          "name": "Soup + More"
        }
      },
      {
        "type": "node",
        "id": 7222041370,
        "lat": 60.1696585,
        "lon": 24.9337396,
        "tags": {
          "amenity": "restaurant",
          "name": "The Souk"
        }
      },
      {
        "type": "node",
        "id": 7265779807,
        "lat": 60.1816513,
        "lon": 24.9265552,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "60",
          "addr:postcode": "00260",
          "addr:street": "Runeberginkatu",
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Trattoria Sogno",
          "phone": "010 231 6700",
          "website": "https://www.trattoriasogno.fi/"
        }
      },
      {
        "type": "node",
        "id": 7271219100,
        "lat": 60.2068699,
        "lon": 24.917142,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00240",
          "addr:street": "Ilmalankuja",
          "addr:unit": "L",
          "amenity": "restaurant",
          "name": "Ravintola Horisontti",
          "website": "https://ruoka.palmia.fi/fi/ravintola/ravintola/horisontti/"
        }
      },
      {
        "type": "node",
        "id": 7271336165,
        "lat": 60.1786373,
        "lon": 24.9244129,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00260",
          "addr:street": "Sandelsinkatu",
          "amenity": "restaurant",
          "bar": "yes",
          "cuisine": "wine;european",
          "name": "Piglets",
          "opening_hours": "Tu-Th 17:00-22:00, Fr-Sa 17:00-23:00",
          "phone": "+358 44 730 4000",
          "website": "https://piglets.fi/"
        }
      },
      {
        "type": "node",
        "id": 7277738343,
        "lat": 60.237316,
        "lon": 25.0836486,
        "tags": {
          "addr:housenumber": "4",
          "addr:street": "Ostostie",
          "amenity": "restaurant",
          "cuisine": "uzbek",
          "description": "tila 59",
          "name": "Uzbekistan",
          "opening_hours": "Mo-Fr 10:00-21:00; Sa, Su 12:00-21:00",
          "phone": "050 3773388",
          "website": "https://www.ravintolauzbekistan.fi/"
        }
      },
      {
        "type": "node",
        "id": 7285999400,
        "lat": 60.2020066,
        "lon": 25.0447994,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00880",
          "addr:street": "Mekaanikonkatu",
          "amenity": "restaurant",
          "cuisine": "Finnish",
          "name": "Lounaskahvila Triangeli",
          "opening_hours": "Mo-Fr 10:30-14:30"
        }
      },
      {
        "type": "node",
        "id": 7285999401,
        "lat": 60.211265,
        "lon": 25.0557321,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:street": "Tulppatie",
          "amenity": "restaurant",
          "brand": "Ravintola Factory",
          "name": "Ravintola Factory"
        }
      },
      {
        "type": "node",
        "id": 7353959328,
        "lat": 60.1871107,
        "lon": 24.9523827,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "regional",
          "delivery": "yes",
          "diet:vegan": "only",
          "diet:vegetarian": "only",
          "name": "VILLD",
          "opening_hours": "Mo-Su 11:00-23:00",
          "takeaway": "yes",
          "website": "https://www.villd.fi/"
        }
      },
      {
        "type": "node",
        "id": 7437620132,
        "lat": 60.1660073,
        "lon": 24.9471702,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00130",
          "addr:street": "Rikhardinkatu",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Capperi",
          "opening_hours": "Mo-Th 10:30-14:00; Sa 12:00-21:00; Fr 10:30-21:00",
          "website": "https://capperi.fi/keskusta/"
        }
      },
      {
        "type": "node",
        "id": 7440637617,
        "lat": 60.1861938,
        "lon": 25.0072838,
        "tags": {
          "addr:housenumber": "1",
          "addr:street": "Svinhufvudintie",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "delivery:covid19": "yes",
          "facebook": "https://www.facebook.com/pages/category/Pizza-Place/Levanto-Pizza-Birra-104282897690919/",
          "name": "Levanto Pizza & Birra",
          "opening_hours:covid19": "Fr-Su 15:00-21:00",
          "phone": "040-8010900",
          "short_name": "Levanto",
          "takeaway": "yes"
        }
      },
      {
        "type": "node",
        "id": 7462747734,
        "lat": 60.1719515,
        "lon": 24.9314856,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00100",
          "addr:street": "Ainonkatu",
          "amenity": "restaurant",
          "cuisine": "suomalainen",
          "name": "Finnjävel",
          "opening_hours:covid19": "Mo 11:30-17:00; Tu-Th 11:30-19:45",
          "phone": "+358 41 730 1376",
          "website": "https://finnjavel.fi/"
        }
      },
      {
        "type": "node",
        "id": 7470241327,
        "lat": 60.1829633,
        "lon": 24.9536624,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00530",
          "addr:street": "Viides linja",
          "amenity": "restaurant",
          "cuisine": "asian",
          "delivery": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "lunch": "yes",
          "name": "Bumi Kallio",
          "opening_hours": "Mo-Th 11:00-21:00, Fr-Sa 11:00-22:30, Su 12:00-19:00",
          "phone": "+358 45 1270568",
          "short_name": "Bumi",
          "takeaway": "yes",
          "website": "https://bumicafe.com/"
        }
      },
      {
        "type": "node",
        "id": 7501834064,
        "lat": 60.2356973,
        "lon": 25.0014293,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00710",
          "addr:street": "Vuolukiventie",
          "addr:unit": "A",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Pizza Service Pihlajamäki",
          "opening_hours": "Mo-Th 10:00-22:00; Fr 10:00-22:30; Sa-Su 11:00-22:30",
          "opening_hours:covid19": "restricted",
          "phone": "+358 9 4289 3799",
          "takeaway": "yes",
          "website": "https://pizzaservice.fi/pihlajamaki/"
        }
      },
      {
        "type": "node",
        "id": 7501891614,
        "lat": 60.2345312,
        "lon": 25.0345303,
        "tags": {
          "addr:housenumber": "4",
          "addr:street": "Agronominkatu",
          "amenity": "restaurant",
          "contact:email": "info@vamospizzeria.fi",
          "contact:phone": "+358 45 1662925",
          "contact:website": "https://vamospizzeria.fi/",
          "cuisine": "pizza",
          "diet:vegetarian": "yes",
          "name": "Vamos",
          "opening_hours": "Mo-Fr 10:00-22:00; Sa-Su 11:00-22:00",
          "opening_hours:covid19": "open",
          "ref:vatin": "FI24013789"
        }
      },
      {
        "type": "node",
        "id": 7508725798,
        "lat": 60.2370041,
        "lon": 25.0845551,
        "tags": {
          "amenity": "restaurant",
          "name": "Iskan Food"
        }
      },
      {
        "type": "node",
        "id": 7625370479,
        "lat": 60.164696,
        "lon": 24.94999,
        "tags": {
          "addr:housenumber": "9",
          "addr:street": "Fabianinkatu",
          "amenity": "restaurant",
          "level": "1",
          "name": "Farouge"
        }
      },
      {
        "type": "node",
        "id": 7629116265,
        "lat": 60.163977,
        "lon": 24.9377153,
        "tags": {
          "addr:housenumber": "37",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "name": "Ravintola skörd"
        }
      },
      {
        "type": "node",
        "id": 7638678178,
        "lat": 60.2369843,
        "lon": 25.0851953,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "afghan",
          "name": "Afg Restaurant"
        }
      },
      {
        "type": "node",
        "id": 7642145245,
        "lat": 60.2837385,
        "lon": 25.0251554,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00750",
          "addr:street": "Aamuruskontie",
          "amenity": "restaurant",
          "lunch": "yes",
          "opening_hours": "Mo-Fr 10:30-14:00",
          "phone": "+358 50 599 0887",
          "website": "https://www.arvolounas.fi/"
        }
      },
      {
        "type": "node",
        "id": 7642267272,
        "lat": 60.2056872,
        "lon": 25.1199306,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00980",
          "addr:street": "Vuotie",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Helsingin Pizzapojat",
          "opening_hours": "ma-pe 10.00 - 22.30, la-su 11.00 - 23.00"
        }
      },
      {
        "type": "node",
        "id": 7643201975,
        "lat": 60.1664297,
        "lon": 24.9522275,
        "tags": {
          "addr:housenumber": "16",
          "addr:street": "Eteläranta",
          "amenity": "restaurant",
          "level": "1",
          "name": "Sue Ellen",
          "opening_hours:covid19": "Closed"
        }
      },
      {
        "type": "node",
        "id": 7643234070,
        "lat": 60.1666351,
        "lon": 24.95218,
        "tags": {
          "addr:housenumber": "16",
          "addr:street": "Eteläranta",
          "amenity": "restaurant",
          "level": "1",
          "name": "Ultima"
        }
      },
      {
        "type": "node",
        "id": 7646214407,
        "lat": 60.1685227,
        "lon": 24.9530334,
        "tags": {
          "addr:housenumber": "1",
          "addr:street": "Sofiankatu",
          "amenity": "restaurant",
          "name": "Kaupungintalon ravintola"
        }
      },
      {
        "type": "node",
        "id": 7646246528,
        "lat": 60.1669485,
        "lon": 24.9450265,
        "tags": {
          "addr:housenumber": "22",
          "addr:street": "Eteläesplanadi",
          "amenity": "restaurant",
          "name": "Bassi"
        }
      },
      {
        "type": "node",
        "id": 7648491057,
        "lat": 60.1684975,
        "lon": 24.9508294,
        "tags": {
          "addr:housenumber": "30",
          "addr:street": "Unioninkatu",
          "amenity": "restaurant",
          "name": "W30"
        }
      },
      {
        "type": "node",
        "id": 7648535938,
        "lat": 60.1685861,
        "lon": 24.9512369,
        "tags": {
          "addr:housenumber": "27",
          "addr:street": "Unioninkatu",
          "amenity": "restaurant",
          "name": "Sofia Bistro"
        }
      },
      {
        "type": "node",
        "id": 7648599746,
        "lat": 60.1643216,
        "lon": 24.9274478,
        "tags": {
          "addr:housenumber": "44",
          "addr:street": "Eerikinkatu",
          "amenity": "restaurant",
          "name": "Goose"
        }
      },
      {
        "type": "node",
        "id": 7655246570,
        "lat": 60.1533508,
        "lon": 24.9103932,
        "tags": {
          "addr:street": "Atlantinkatu",
          "amenity": "restaurant",
          "level": "1",
          "name": "Mama Mozza"
        }
      },
      {
        "type": "node",
        "id": 7655767072,
        "lat": 60.2008999,
        "lon": 24.934252,
        "tags": {
          "addr:housenumber": "11",
          "addr:street": "Ratapihantie",
          "amenity": "restaurant",
          "name": "South China"
        }
      },
      {
        "type": "node",
        "id": 7663173755,
        "lat": 60.1740125,
        "lon": 24.9227687,
        "tags": {
          "addr:housenumber": "18",
          "addr:street": "Tunturikatu",
          "amenity": "restaurant",
          "level": "1",
          "name": "Norilla",
          "opening_hours": "ma-pe 11-21 la 12-21",
          "opening_hours:covid19": "ma-pe 11-21 la 12-21",
          "phone": "045 887 8766"
        }
      },
      {
        "type": "node",
        "id": 7669516093,
        "lat": 60.1630907,
        "lon": 24.9419812,
        "tags": {
          "addr:housenumber": "4",
          "addr:street": "Annankatu",
          "amenity": "restaurant",
          "level": "1",
          "name": "Salajar"
        }
      },
      {
        "type": "node",
        "id": 7673280560,
        "lat": 60.2211032,
        "lon": 24.8685816,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00380",
          "addr:street": "Strömbergintie",
          "addr:unit": "B",
          "amenity": "restaurant",
          "name": "Pitäjänmäen osuusruokala",
          "opening_hours": "Mo-Fr 07:00-17:30",
          "opening_hours:covid19": "same",
          "website": "http://www.por.fi/"
        }
      },
      {
        "type": "node",
        "id": 7673571009,
        "lat": 60.1839135,
        "lon": 24.9831365,
        "tags": {
          "addr:housenumber": "1",
          "addr:street": "Capellanaukio",
          "amenity": "restaurant",
          "name": "Harbour Tap & Taste",
          "opening_hours": "Mo-Th 10:00-24:00; Fr,Sa 10:00-02:00, Su 12:00-24:00"
        }
      },
      {
        "type": "node",
        "id": 7673641451,
        "lat": 60.1827782,
        "lon": 24.9815314,
        "tags": {
          "addr:housenumber": "2",
          "addr:street": "Capellan puistotie",
          "amenity": "restaurant",
          "name": "The Salty Dog"
        }
      },
      {
        "type": "node",
        "id": 7676941225,
        "lat": 60.1604296,
        "lon": 24.9382142,
        "tags": {
          "addr:housenumber": "27",
          "addr:street": "Merimiehenkatu",
          "amenity": "restaurant",
          "name": "Merimies Pub",
          "opening_hours": "Su-Th 12:00-24:00; Fr,Sa 12:00-02:00"
        }
      },
      {
        "type": "node",
        "id": 7677703723,
        "lat": 60.1897844,
        "lon": 24.9713425,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2a",
          "addr:postcode": "00580",
          "addr:street": "Tynnyrintekijänkatu",
          "addr:unit": "5",
          "amenity": "restaurant",
          "email": "mokoteurastamo@moko.fi",
          "name": "Moko Market",
          "opening_hours": "Mo-Fr 09:00-15:00",
          "phone": "+358 40 1578 209",
          "website": "https://moko.fi/"
        }
      },
      {
        "type": "node",
        "id": 7679381333,
        "lat": 60.1885231,
        "lon": 24.9837397,
        "tags": {
          "addr:housenumber": "4",
          "addr:street": "Capellanranta",
          "amenity": "restaurant",
          "level": "1",
          "name": "Mama Mozza"
        }
      },
      {
        "type": "node",
        "id": 7679381342,
        "lat": 60.1882347,
        "lon": 24.9832544,
        "tags": {
          "addr:housenumber": "4",
          "addr:street": "Capellanranta",
          "amenity": "restaurant",
          "level": "1",
          "name": "Olutravintola Jano",
          "opening_hours": "Mo-Th 15:00-01:00; Fr-Sa 15:00-02:00; Su 15:00-24:00"
        }
      },
      {
        "type": "node",
        "id": 7690696533,
        "lat": 60.1648677,
        "lon": 24.9322972,
        "tags": {
          "addr:housenumber": "38",
          "addr:street": "Albertinkatu",
          "amenity": "restaurant",
          "level": "1",
          "name": "La maza"
        }
      },
      {
        "type": "node",
        "id": 7694551508,
        "lat": 60.1687934,
        "lon": 24.9371027,
        "tags": {
          "addr:housenumber": "29",
          "addr:street": "Yrjönkatu",
          "amenity": "restaurant",
          "level": "1",
          "name": "India House"
        }
      },
      {
        "type": "node",
        "id": 7701512993,
        "lat": 60.1671792,
        "lon": 24.9349235,
        "tags": {
          "addr:housenumber": "9",
          "addr:street": "Eerikinkatu",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "name": "Saigon House",
          "opening_hours": "Mo-Fr 09:00-21:00; Sa 10:00-21:00",
          "takeaway:covid19": "yes"
        }
      },
      {
        "type": "node",
        "id": 7733497652,
        "lat": 60.1696353,
        "lon": 24.9475404,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "12",
          "addr:street": "Yliopistonkatu",
          "amenity": "restaurant",
          "diet:vegan": "only",
          "level": "2",
          "name": "vegoshi",
          "toilets": "yes",
          "toilets:access": "customers",
          "toilets:wheelchair": "yes",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 7733503687,
        "lat": 60.169668,
        "lon": 24.9476625,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:street": "Yliopistonkatu",
          "amenity": "restaurant",
          "changing_table": "yes",
          "level": "2",
          "name": "eat your greens",
          "toilets:access": "customers",
          "toilets:wheelchair": "yes",
          "wheelchair": "yes"
        }
      },
      {
        "type": "node",
        "id": 7756898485,
        "lat": 60.1881162,
        "lon": 24.9837345,
        "tags": {
          "addr:housenumber": "3",
          "addr:street": "Capellanranta",
          "amenity": "restaurant",
          "name": "Muikea Muikku",
          "website": "https://kalaravintolat.fi/ravintola/muikea-muikku/"
        }
      },
      {
        "type": "node",
        "id": 7784476962,
        "lat": 60.1696158,
        "lon": 24.9475397,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2 Floor",
          "addr:postcode": "00100",
          "addr:street": "Aleksanterinkatu",
          "addr:unit": "9",
          "amenity": "restaurant",
          "bar": "yes",
          "brewery": "yes",
          "cuisine": "Indian;south_Indian",
          "ele": "2",
          "name": "The South Indian Helsinki",
          "phone": "0102008000",
          "website": "https://southindian.fi"
        }
      },
      {
        "type": "node",
        "id": 7794578821,
        "lat": 60.2389436,
        "lon": 24.8499484,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00390",
          "addr:street": "Ajomiehentie",
          "amenity": "restaurant",
          "cuisine": "greek",
          "layer": "0",
          "level": "0",
          "name": "Ravintola Laventeli",
          "website": "https://www.ravintolalaventeli.fi/"
        }
      },
      {
        "type": "node",
        "id": 7820431096,
        "lat": 60.1604658,
        "lon": 24.9388942,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7",
          "addr:postcode": "00150",
          "addr:street": "Albertinkatu",
          "amenity": "restaurant",
          "cuisine": "georgian",
          "email": "info@georgiankitchen.fi",
          "name": "Georgian Kitchen",
          "opening_hours": "Mo-Th 15:00-22:00; Fr 15:00-24:00; Sa 12:00-24:00",
          "phone": "+358 050 383 3228",
          "website": "https://georgiankitchen.fi/"
        }
      },
      {
        "type": "node",
        "id": 7820604205,
        "lat": 60.1990693,
        "lon": 24.9337543,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "sushi",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "info@ravintolamakuja.fi",
          "level": "4.5",
          "lunch": "buffet",
          "name": "Ravintola Makuja - Tripla",
          "phone": "+358456191900",
          "website": "https://ravintolamakuja.fi/"
        }
      },
      {
        "type": "node",
        "id": 7826148839,
        "lat": 60.1902388,
        "lon": 24.9728614,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Pizzala Pizza",
          "opening_hours": "TI 16-21   KE-LA 12-21   SU 12-18",
          "website": "https://www.pizzalapizza.com/"
        }
      },
      {
        "type": "node",
        "id": 7863961809,
        "lat": 60.1856224,
        "lon": 24.9218886,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "29",
          "addr:postcode": "00250",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "cuisine": "pizza",
          "name": "Pizzeria ILO",
          "opening_hours": "Mo-Th 11:00-22:00; Fr-Sa 11:00-01:00; Su 11:00-22:00",
          "phone": "+358 44 2448809"
        }
      },
      {
        "type": "node",
        "id": 7872950471,
        "lat": 60.1665251,
        "lon": 24.9310648,
        "tags": {
          "addr:housenumber": "3",
          "addr:street": "Lapinlahdenkatu",
          "amenity": "restaurant",
          "name": "Bites burgers"
        }
      },
      {
        "type": "node",
        "id": 7916514744,
        "lat": 60.1670736,
        "lon": 24.9484584,
        "tags": {
          "addr:housenumber": "10",
          "addr:street": "Eteläesplanadi",
          "amenity": "restaurant",
          "name": "Oikeusministeriön henkilöstöravintola"
        }
      },
      {
        "type": "node",
        "id": 7927237820,
        "lat": 60.1926048,
        "lon": 25.0398594,
        "tags": {
          "addr:housenumber": "2",
          "addr:street": "Kirvesmiehenkatu",
          "amenity": "restaurant",
          "name": "Hanoon Ravintola",
          "website": "https://www.hanoonravintola.fi/"
        }
      },
      {
        "type": "node",
        "id": 7947199458,
        "lat": 60.1815717,
        "lon": 24.9787636,
        "tags": {
          "amenity": "restaurant",
          "name": "Marcello"
        }
      },
      {
        "type": "node",
        "id": 8040605625,
        "lat": 60.1926599,
        "lon": 24.9452585,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "23",
          "addr:postcode": "00510",
          "addr:street": "Aleksis Kiven katu",
          "amenity": "restaurant",
          "cuisine": "european;nordic",
          "name": "Albina Restaurant & Wine Bar",
          "website": "https://restaurantalbina.fi"
        }
      },
      {
        "type": "node",
        "id": 8065134660,
        "lat": 60.1579705,
        "lon": 24.9352997,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "3",
          "addr:postcode": "00150",
          "addr:street": "Perämiehenkatu",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "SameSame"
        }
      },
      {
        "type": "node",
        "id": 8112452179,
        "lat": 60.1922092,
        "lon": 24.9529821,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "21",
          "addr:postcode": "00510",
          "addr:street": "Sturenkatu",
          "amenity": "restaurant",
          "cuisine": "burger",
          "diet:gluten_free": "yes",
          "diet:meat": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "name": "Naughty BRGR",
          "opening_hours": "Mo-Sa 11:00-22:00: Su 12:00-19:00",
          "opening_hours:covid19": "open",
          "phone": "+358406745226",
          "website": "https://naughtybrgr.com/restaurant/helsinki-sturenkatu/"
        }
      },
      {
        "type": "node",
        "id": 8184788020,
        "lat": 60.2484002,
        "lon": 25.0325367,
        "tags": {
          "addr:housenumber": "29",
          "addr:street": "Pilvenpyörteentie",
          "amenity": "restaurant",
          "name": "Ravintola La Mensa",
          "website": "https://ravintolalamensa.fi/"
        }
      },
      {
        "type": "node",
        "id": 8261974685,
        "lat": 60.191186,
        "lon": 24.9434987,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Cibo",
          "takeaway": "yes",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 8277251401,
        "lat": 60.2066768,
        "lon": 25.1457519,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "45",
          "addr:postcode": "00980",
          "addr:street": "Vuotie",
          "amenity": "restaurant",
          "cuisine": "asian",
          "name": "Kung Food Panda",
          "opening_hours": "Mo-Fr 10:30-20:00",
          "website": "https://kungfoodpanda.fi/kung-food-panda-columbus"
        }
      },
      {
        "type": "node",
        "id": 8286482522,
        "lat": 60.231679,
        "lon": 24.9345559,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00630",
          "addr:street": "Tammiontie",
          "amenity": "restaurant",
          "facebook": "https://www.facebook.com/ravintolaeltorito/?ref=py_c",
          "name": "El Torito",
          "opening_hours": "Mo-Th 10:00-21:00; Fr 10:00-22:00; Sa 11:00-22:00; Su 11:00-21:00",
          "phone": "+358 44 984 2565",
          "website": "https://www.eleltorito.fi/"
        }
      },
      {
        "type": "node",
        "id": 8287422319,
        "lat": 60.1713905,
        "lon": 24.9199941,
        "tags": {
          "addr:housenumber": "8",
          "addr:postcode": "00100",
          "addr:street": "Mechelininkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "name": "Sushi Forest",
          "opening_hours": "Mo-Fr 11:00-22:00; Sa-Su 12:00-22:00"
        }
      },
      {
        "type": "node",
        "id": 8287422321,
        "lat": 60.1789836,
        "lon": 24.9235024,
        "tags": {
          "addr:housenumber": "1",
          "addr:postcode": "00260",
          "addr:street": "Sandelsinkatu",
          "amenity": "restaurant",
          "cuisine": "burger;steak_house",
          "name": "B5 Black",
          "opening_hours": "Mo-Su 08:00-23:00"
        }
      },
      {
        "type": "node",
        "id": 8345449585,
        "lat": 60.1939648,
        "lon": 24.8941343,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "19",
          "addr:postcode": "00270",
          "addr:street": "Paciuksenkatu",
          "amenity": "restaurant",
          "email": "antell.allergiatalo@antell.fi",
          "name": "Lounasravintola Antell Allergiatalo",
          "name:en": "Lunch Restaurant Antell Allergiatalo",
          "opening_hours": "Mo-Fr 11:00-13:00",
          "phone": "020 770 2245",
          "website": "https://www.antell.fi/allergiatalo/"
        }
      },
      {
        "type": "node",
        "id": 8355681385,
        "lat": 60.1851126,
        "lon": 25.0283876,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00810",
          "addr:street": "Reginankuja",
          "amenity": "restaurant",
          "cuisine": "pizza;burger",
          "name": "Bella Marina",
          "phone": "+358 50 544 3554",
          "website": "https://bella-marina.fi/"
        }
      },
      {
        "type": "node",
        "id": 8367604198,
        "lat": 60.2597401,
        "lon": 24.8864279,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00430",
          "addr:street": "Maisemamaalauksenkatu",
          "alt_name": "Che Buono Lounge",
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Che Buono Lounge",
          "opening_hours": "Mo-Th 11:00-21:00; Fr 11:00-22:00; Sa 12:00-22:00; Su 12:00-20:00",
          "phone": "+358449865388",
          "website": "https://chebuono.fi/"
        }
      },
      {
        "type": "node",
        "id": 8377913157,
        "lat": 60.1506842,
        "lon": 24.8863892,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "kebab;pizza",
          "diet:vegan": "yes",
          "name": "Kirkuk",
          "opening_hours": "Mo-Fr 10:00-21:30; Sa 11:00-22:00; Su 11:00-21:00",
          "takeaway": "yes",
          "toilets": "yes"
        }
      },
      {
        "type": "node",
        "id": 8456714094,
        "lat": 60.2051318,
        "lon": 25.1480139,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00990",
          "addr:street": "Kahvipavunkuja",
          "amenity": "restaurant",
          "cuisine": "italian",
          "name": "Mama Mozza Aurinkolahti",
          "website": "https://mamamozza-aurinkolahti.fi/"
        }
      },
      {
        "type": "node",
        "id": 8456714095,
        "lat": 60.2051732,
        "lon": 25.1479463,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00990",
          "addr:street": "Kahvipavunkuja",
          "amenity": "restaurant",
          "brand": "Pizza Hut",
          "brand:wikidata": "Q191615",
          "brand:wikipedia": "en:Pizza Hut",
          "cuisine": "pizza",
          "name": "Pizza Hut Vuosaari",
          "website": "https://www.pizzahut.fi/"
        }
      },
      {
        "type": "node",
        "id": 8506687094,
        "lat": 60.2119959,
        "lon": 25.0830103,
        "tags": {
          "addr:city": "Helsinki",
          "addr:floor": "2",
          "addr:housenumber": "1",
          "addr:postcode": "00930",
          "addr:street": "Itäkatu",
          "amenity": "restaurant",
          "cuisine": "indian",
          "delivery": "yes",
          "delivery:covid19": "yes",
          "diet:gluten_free": "yes",
          "diet:lactose_free": "yes",
          "diet:meat": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "itis@delhirasoi.fi",
          "name": "Delhi Rasoi Itis",
          "opening_hours": "Mo-Fr 10:30-20:00; Sa 11:00-20:00; Su 12:00-20:00",
          "opening_hours:covid19": "same",
          "phone": "+358 50 4019007",
          "takeaway": "yes",
          "takeaway:covid19": "yes",
          "website": "https://www.delhirasoi.fi"
        }
      },
      {
        "type": "node",
        "id": 8598436958,
        "lat": 60.1821923,
        "lon": 24.9790775,
        "tags": {
          "addr:housenumber": "1",
          "addr:street": "Aallonhalkoja",
          "amenity": "restaurant",
          "cuisine": "asian",
          "diet:vegetarian": "yes",
          "name": "Dim Sum House",
          "website": "https://www.dimsumhouse.fi/"
        }
      },
      {
        "type": "node",
        "id": 8601392838,
        "lat": 60.1720725,
        "lon": 24.942269,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "13",
          "addr:postcode": "00100",
          "addr:street": "Vilhonkatu",
          "amenity": "restaurant",
          "name": "Brasserie Grand",
          "note": "Grand Central Hotel's restaurant",
          "website": "https://www.scandichotels.fi/hotellit/suomi/helsinki/scandic-grand-central-helsinki/ravintola-ja-baari"
        }
      },
      {
        "type": "node",
        "id": 8614174318,
        "lat": 60.2372416,
        "lon": 24.8911631,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00420",
          "addr:street": "Kantelettarentie",
          "amenity": "restaurant",
          "cuisine": "pita;falafel",
          "diet:non-vegetarian": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "kaari@fafas.fi",
          "level": "0",
          "name": "Fafa's Kaari",
          "opening_hours": "Mo-Th 10:30-20:30; Fr 10:30-21:00, Sa 11:00-20:30; Su 12:00-19:00",
          "phone": "+358413174211",
          "website": "https://www.fafas.fi"
        }
      },
      {
        "type": "node",
        "id": 8614174319,
        "lat": 60.2372361,
        "lon": 24.8909365,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00420",
          "addr:street": "Kantelettarentie",
          "amenity": "restaurant",
          "cuisine": "asian",
          "diet:non-vegetarian": "yes",
          "diet:vegetarian": "yes",
          "email": "info@firewok.fi",
          "level": "0",
          "name": "Fire Wok",
          "opening_hours": "Mo-Fr 10:30-20:00; Sa 11:00-20:00; Su 12:00-18:00",
          "phone": "+358449855076",
          "website": "https://www.firewok.fi"
        }
      },
      {
        "type": "node",
        "id": 8705135532,
        "lat": 60.2297973,
        "lon": 24.8960565,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "14b",
          "addr:postcode": "00400",
          "addr:street": "Näyttelijäntie",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "name": "Nem Foods",
          "opening_hours": "Mo-Sa 11:00-18:00",
          "website": "https://nemfoods.fi/"
        }
      },
      {
        "type": "node",
        "id": 8813067607,
        "lat": 60.2141609,
        "lon": 24.8737007,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:floor": "4",
          "addr:housenumber": "6",
          "addr:postcode": "00380",
          "addr:street": "Kutomotie",
          "addr:unit": "A",
          "amenity": "restaurant",
          "craft": "caterer",
          "cuisine": "indian;pizza;kebab",
          "diet:gluten_free": "yes",
          "diet:lactose_free": "yes",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "email": "patelkalpesh723@yahoo.com",
          "lunch": "Mo-Fr 10:00-15:00",
          "name": "Ravintola Sitrus",
          "opening_hours": "Mo-Fr 09:00-20:00; Sa-Su 12:00-20:00",
          "phone": "+358 44 980 3812",
          "website": "http://ravintolasitrus.fi/"
        }
      },
      {
        "type": "node",
        "id": 8823633240,
        "lat": 60.1713232,
        "lon": 24.9587112,
        "tags": {
          "addr:housenumber": "5",
          "addr:street": "Meritullinkatu",
          "amenity": "restaurant",
          "name": "Miss Sushi"
        }
      },
      {
        "type": "node",
        "id": 8831197751,
        "lat": 60.1732705,
        "lon": 24.9591646,
        "tags": {
          "addr:housenumber": "4a",
          "addr:street": "Maneesikatu",
          "amenity": "restaurant",
          "level": "1",
          "name": "KiKa 86"
        }
      },
      {
        "type": "node",
        "id": 8831220361,
        "lat": 60.1880826,
        "lon": 24.9653068,
        "tags": {
          "addr:housenumber": "7",
          "addr:street": "Kulmavuorenkatu",
          "amenity": "restaurant",
          "name": "Kokoro sushi",
          "opening_hours": "Mo-Th 11:00-20:00; Fr 11:00-21:00; Sa 12:00-21:00"
        }
      },
      {
        "type": "node",
        "id": 8831312108,
        "lat": 60.1883507,
        "lon": 24.9649018,
        "tags": {
          "addr:housenumber": "4",
          "addr:street": "Kulmavuorenkatu",
          "amenity": "restaurant",
          "name": "Restaurant Teranga"
        }
      },
      {
        "type": "node",
        "id": 8831344697,
        "lat": 60.1883709,
        "lon": 24.9647843,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00500",
          "addr:street": "Kulmavuorenkatu",
          "amenity": "restaurant",
          "cuisine": "nepalese",
          "name": "Nilgiri",
          "opening_hours": "Mo-Fr 11:00-22:00, Sa-Su 12:00-22:00",
          "website": "http://nilgiri.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "node",
        "id": 8831344703,
        "lat": 60.188395,
        "lon": 24.9645971,
        "tags": {
          "addr:housenumber": "4",
          "addr:street": "Kulmavuorenkatu",
          "amenity": "restaurant",
          "name": "Sörkän rinkula",
          "opening_hours": "Wed-Sat; 11:00-20:00, Su 11:00-16:00",
          "phone": "+358400176670"
        }
      },
      {
        "type": "node",
        "id": 8831344707,
        "lat": 60.1884324,
        "lon": 24.9642837,
        "tags": {
          "addr:housenumber": "2",
          "addr:street": "Kulmavuorenkatu",
          "amenity": "restaurant",
          "name": "The bull & the firm",
          "opening_hours": "Ti-To 17:00-00:00, Pe-La 17:00-02:00"
        }
      },
      {
        "type": "node",
        "id": 8831555671,
        "lat": 60.1862404,
        "lon": 24.9615587,
        "tags": {
          "addr:housenumber": "21",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "level": "1",
          "name": "PronTo"
        }
      },
      {
        "type": "node",
        "id": 8831560542,
        "lat": 60.1887391,
        "lon": 24.9641432,
        "tags": {
          "addr:housenumber": "35",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "name": "Pizza Service"
        }
      },
      {
        "type": "node",
        "id": 8831560555,
        "lat": 60.1874924,
        "lon": 24.9642763,
        "tags": {
          "addr:housenumber": "3",
          "addr:street": "Vilhonvuorenkatu",
          "amenity": "restaurant",
          "name": "Aroy-D"
        }
      },
      {
        "type": "node",
        "id": 8831560574,
        "lat": 60.1872438,
        "lon": 24.9650376,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "7-9",
          "addr:postcode": "00500",
          "addr:street": "Vilhonvuorenkatu",
          "amenity": "restaurant",
          "cuisine": "sushi",
          "lunch": "yes",
          "name": "Luckiefun's",
          "source": "local_information",
          "website": "https://www.luckiefun.com/"
        }
      },
      {
        "type": "node",
        "id": 8831560580,
        "lat": 60.1871449,
        "lon": 24.9652787,
        "tags": {
          "addr:housenumber": "7-9",
          "addr:street": "Vilhonvuorenkatu",
          "amenity": "restaurant",
          "name": "Pho"
        }
      },
      {
        "type": "node",
        "id": 8831720837,
        "lat": 60.1874545,
        "lon": 24.9605536,
        "tags": {
          "addr:housenumber": "2b",
          "addr:street": "Helsinginkatu",
          "amenity": "restaurant",
          "name": "Sörkän pippuri"
        }
      },
      {
        "type": "node",
        "id": 8831720884,
        "lat": 60.1857462,
        "lon": 24.9624163,
        "tags": {
          "addr:housenumber": "1",
          "addr:street": "Käenkuja",
          "addr:unit": "B",
          "amenity": "restaurant",
          "name": "Ravintola Käenpesä"
        }
      },
      {
        "type": "node",
        "id": 8839618018,
        "lat": 60.2055125,
        "lon": 24.9726937,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00560",
          "addr:street": "Kokkosaarenkatu",
          "amenity": "restaurant",
          "description": "Kokkosaarenkatu 1 (käynti sisäpihalta, ovinumero 30)",
          "level": "1",
          "name": "Ravintola Ahjo",
          "opening_hours": "Mo-Fr 08:00-14:00",
          "operator": "Ninan keittiö",
          "website": "https://www.ninankeittio.fi/helsinki-ahjo/"
        }
      },
      {
        "type": "node",
        "id": 8844367589,
        "lat": 60.1839047,
        "lon": 24.9406321,
        "tags": {
          "addr:housenumber": "14",
          "addr:street": "Toinen linja",
          "amenity": "restaurant",
          "level": "1",
          "name": "Dylan",
          "opening_hours": "Mo-Fr 10.30-13"
        }
      },
      {
        "type": "node",
        "id": 8852472764,
        "lat": 60.1799563,
        "lon": 24.9242212,
        "tags": {
          "addr:housenumber": "59",
          "addr:street": "Runeberginkatu",
          "amenity": "restaurant",
          "name": "Middle Eastern Streetfood",
          "opening_hours": "Mo-Fr 11:00-21:00; Sa 11:00-22:00; Su 13:00-20:00"
        }
      },
      {
        "type": "node",
        "id": 8852726824,
        "lat": 60.184284,
        "lon": 24.9593623,
        "tags": {
          "addr:housenumber": "36",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "name": "Ravintola Suha"
        }
      },
      {
        "type": "node",
        "id": 8856420311,
        "lat": 60.1838555,
        "lon": 24.9587846,
        "tags": {
          "addr:housenumber": "32",
          "addr:street": "Hämeentie",
          "amenity": "restaurant",
          "name": "Sushi Forest"
        }
      },
      {
        "type": "node",
        "id": 8856690359,
        "lat": 60.1713777,
        "lon": 24.9265791,
        "tags": {
          "addr:housenumber": "19",
          "addr:street": "Arkadiankatu",
          "amenity": "restaurant",
          "name": "Noodle master",
          "opening_hours": "Tu-Th 11:00-15:00 17:00-20:00; Fr 15:00-20:00; Sa-Su 12:00-20:00"
        }
      },
      {
        "type": "node",
        "id": 8856704582,
        "lat": 60.1667878,
        "lon": 24.9361142,
        "tags": {
          "addr:housenumber": "17",
          "addr:street": "Kalevankatu",
          "amenity": "restaurant",
          "name": "Hills Dumplings"
        }
      },
      {
        "type": "node",
        "id": 8856704605,
        "lat": 60.1668881,
        "lon": 24.9346781,
        "tags": {
          "addr:housenumber": "14",
          "addr:street": "Eerikinkatu",
          "amenity": "restaurant",
          "name": "City food & grill"
        }
      },
      {
        "type": "node",
        "id": 8856704606,
        "lat": 60.1669111,
        "lon": 24.9347436,
        "tags": {
          "addr:housenumber": "14",
          "addr:street": "Eerikinkatu",
          "amenity": "restaurant",
          "name": "Vibami Eerikinkatu"
        }
      },
      {
        "type": "node",
        "id": 8856742221,
        "lat": 60.1978177,
        "lon": 24.9497496,
        "tags": {
          "addr:housenumber": "45",
          "addr:street": "Mäkelänkatu",
          "amenity": "restaurant",
          "name": "African Pots"
        }
      },
      {
        "type": "node",
        "id": 8856802598,
        "lat": 60.1663462,
        "lon": 24.9344015,
        "tags": {
          "addr:housenumber": "47",
          "addr:street": "Fredrikinkatu",
          "amenity": "restaurant",
          "name": "Fafa's",
          "opening_hours": "Mo-Th 10:30-23; Fr 10:30-23:30; Sa 11-23:30; Su 11:30-23"
        }
      },
      {
        "type": "node",
        "id": 8856830117,
        "lat": 60.1741519,
        "lon": 24.951359,
        "tags": {
          "addr:housenumber": "29",
          "addr:street": "Liisankatu",
          "amenity": "restaurant",
          "name": "Espresso Edge"
        }
      },
      {
        "type": "node",
        "id": 8862017649,
        "lat": 60.1690929,
        "lon": 24.963436,
        "tags": {
          "addr:housenumber": "4",
          "addr:street": "Kanavaranta",
          "amenity": "restaurant",
          "name": "MarinaBay Helsinki"
        }
      },
      {
        "type": "node",
        "id": 8862153088,
        "lat": 60.1591524,
        "lon": 24.937517,
        "tags": {
          "addr:housenumber": "16",
          "addr:street": "Pursimiehenkatu",
          "amenity": "restaurant",
          "name": "Kulmakippola"
        }
      },
      {
        "type": "node",
        "id": 8867601018,
        "lat": 60.169402,
        "lon": 24.9589714,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1",
          "addr:postcode": "00170",
          "addr:street": "Pohjoisranta",
          "amenity": "restaurant",
          "email": "info@majakkalaiva.fi",
          "image": "https://majakkalaiva.fi/wp-content/uploads/sisa%CC%88salonki_salon-4.png",
          "name": "MAJAKKALAIVA RELANDERSGRUND",
          "name:de": "Feuerschiff Relandersgrund",
          "phone": "+358 40 191 1999",
          "takeaway": "yes",
          "website": "https://majakkalaiva.fi/",
          "wheelchair": "no"
        }
      },
      {
        "type": "node",
        "id": 8874984249,
        "lat": 60.1675686,
        "lon": 24.9413596,
        "tags": {
          "addr:housenumber": "10",
          "addr:street": "Mannerheimintie",
          "amenity": "restaurant",
          "level": "1",
          "name": "Kuusi palaa",
          "opening_hours": "Mo-Th 16:00-23:00 Fr-Sa 15:00-23:00"
        }
      },
      {
        "type": "node",
        "id": 8968471802,
        "lat": 60.1956073,
        "lon": 24.9587935,
        "tags": {
          "addr:housenumber": "36",
          "addr:street": "Sturenkatu",
          "amenity": "restaurant",
          "diet:vegan": "only",
          "diet:vegetarian": "only",
          "name": "Tartine",
          "takeaway": "yes",
          "website": "https://www.tartine.fi/"
        }
      },
      {
        "type": "node",
        "id": 9014661480,
        "lat": 60.2403654,
        "lon": 24.8676686,
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2 Z 78",
          "addr:postcode": "00420",
          "addr:street": "Solistintie",
          "amenity": "restaurant",
          "contact:email": "info@nokiansushi.fi",
          "cuisine": "sushi",
          "name": "Nokian sushi",
          "website": "https://www.nokiansushi.fi/"
        }
      },
      {
        "type": "node",
        "id": 9015098220,
        "lat": 60.1989599,
        "lon": 24.9307545,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "japanese",
          "level": "0",
          "name": "Tokomaru"
        }
      },
      {
        "type": "node",
        "id": 9015098221,
        "lat": 60.1989022,
        "lon": 24.9303674,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "middle_eastern",
          "level": "0",
          "name": "Falafel Box"
        }
      },
      {
        "type": "node",
        "id": 9015098222,
        "lat": 60.1989112,
        "lon": 24.9306764,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "finnish",
          "level": "0",
          "name": "Mari's Treehouse"
        }
      },
      {
        "type": "node",
        "id": 9015098223,
        "lat": 60.1988655,
        "lon": 24.930669,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "hawaijian",
          "level": "0",
          "name": "Hey Poke"
        }
      },
      {
        "type": "node",
        "id": 9015098224,
        "lat": 60.1988653,
        "lon": 24.9309494,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "etiopian",
          "level": "0",
          "name": "Addis Ethiopian Kitchen"
        }
      },
      {
        "type": "node",
        "id": 9015098225,
        "lat": 60.1988769,
        "lon": 24.9310741,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "level": "0",
          "name": "Ba Bu"
        }
      },
      {
        "type": "node",
        "id": 9015098227,
        "lat": 60.1988705,
        "lon": 24.930836,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "seafood",
          "level": "0",
          "name": "Kalaliike & Bistro S. Wallin"
        }
      },
      {
        "type": "node",
        "id": 9015171082,
        "lat": 60.1986504,
        "lon": 24.9300641,
        "tags": {
          "amenity": "restaurant",
          "cuisine": "italian",
          "level": "0",
          "name": "Dolce Italia"
        }
      },
      {
        "type": "node",
        "id": 9020310271,
        "lat": 60.2625856,
        "lon": 24.8910122,
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "8",
          "addr:postcode": "00430",
          "addr:street": "Taidemaalarinkatu",
          "addr:unit": "C 43",
          "alt_name": "Bà kokkaa Kuninkaantammi",
          "amenity": "restaurant",
          "cuisine": "vietnamese",
          "delivery": "no",
          "description": "Toiminnassa noin kahden viikon välein. Bà kokkaa kotiruokaa Kuninkaantammessa, tervetuloa syömään.",
          "diet:vegetarian": "yes",
          "name": "Bà kokkaa",
          "name:fi": "Bà kokkaa",
          "payment:mobile_pay": "yes",
          "start_date": "2021-05",
          "takeaway": "only",
          "website": "https://www.facebook.com/B%C3%A0-kokkaa-Kuninkaantammi-101456885524415"
        }
      },
      {
        "type": "way",
        "id": 15242906,
        "center": {
          "lat": 60.169264,
          "lon": 24.9651521
        },
        "nodes": [
          7809668782,
          1376001900,
          7809668783,
          7809668777,
          8862068360,
          7809668776,
          7809668778,
          7809668784,
          1010617092,
          1010617204,
          7809668779,
          7809668774,
          7809668775,
          7809668780,
          1376001899,
          1376001908,
          7809668763,
          1376001911,
          1376001912,
          1010617067,
          1010616935,
          1376001913,
          7809668781,
          7809668773,
          7809668772,
          7809668771,
          7809668770,
          7809668769,
          7809668768,
          7809668767,
          7809668766,
          7809668765,
          7809668764,
          7809668782
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "1a",
          "addr:postcode": "00160",
          "addr:street": "Laivastokatu",
          "amenity": "restaurant",
          "building": "yes",
          "building:levels": "3.5",
          "name": "Katajanokan kasino",
          "name:en": "Katajannokka Casino",
          "name:fi": "Katajanokan kasino",
          "name:sv": "Skatuddens kasino",
          "website": "https://www.royalravintolat.com/katajanokka/",
          "wikidata": "Q6375016",
          "wikipedia": "fi:Katajanokan Kasino"
        }
      },
      {
        "type": "way",
        "id": 17038654,
        "center": {
          "lat": 60.1807592,
          "lon": 25.0064158
        },
        "nodes": [
          176746092,
          176746093,
          176746094,
          176746095,
          176746096,
          2581649715,
          176746097,
          176746098,
          176746099,
          176746087,
          176746088,
          176746089,
          176746091,
          1541986124,
          176746092
        ],
        "tags": {
          "addr:city": "helsinki",
          "addr:housenumber": "1",
          "addr:street": "Hopeasalmenpolku",
          "amenity": "restaurant",
          "architect": "Armas Lindgren",
          "building": "yes",
          "name": "Kulosaaren Kasino",
          "old_name": "Brändö Pavillon",
          "start_date": "1915",
          "wikidata": "Q11873284"
        }
      },
      {
        "type": "way",
        "id": 17039604,
        "center": {
          "lat": 60.1897917,
          "lon": 24.9717973
        },
        "nodes": [
          664164869,
          176765131,
          176765132,
          176765134,
          176765130,
          664164870,
          7759333824,
          7759333825,
          7759333826,
          7759333827,
          7759333828,
          664164868,
          664164869
        ],
        "tags": {
          "addr:housenumber": "2",
          "addr:street": "Työpajankatu",
          "amenity": "restaurant",
          "building": "yes",
          "lunch": "yes",
          "name": "Teurastamon portti",
          "ref": "R6",
          "shop": "butcher"
        }
      },
      {
        "type": "way",
        "id": 23815666,
        "center": {
          "lat": 60.1825376,
          "lon": 24.9312357
        },
        "nodes": [
          6805996229,
          6873217520,
          5599687391,
          6873222870,
          6873222871,
          258077530,
          1018753007,
          1018753181,
          1018753102,
          1018752978,
          1018753135,
          258077531,
          1018753192,
          6873222872,
          258077532,
          258077533,
          258077534,
          1018753038,
          6873222873,
          258077535,
          1018753145,
          1018753212,
          258077536,
          6805996227,
          258077529,
          6805996228,
          6873222868,
          6873222869,
          6805996229
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "56",
          "addr:postcode": "00260",
          "addr:street": "Helsinginkatu",
          "amenity": "restaurant",
          "building": "public",
          "building:levels": "1",
          "name": "Ravintola Töölönranta",
          "opening_hours:brunch": "Su 12:00-17:30",
          "opening_hours:covid19": "off",
          "phone": "+358 9 6128 5700",
          "website": "http://toolonranta.fi/"
        }
      },
      {
        "type": "way",
        "id": 24428452,
        "center": {
          "lat": 60.1029655,
          "lon": 25.0494474
        },
        "nodes": [
          265490073,
          265490074,
          265490075,
          265490076,
          265490077,
          265490078,
          265490079,
          265490080,
          7022570778,
          265490073
        ],
        "tags": {
          "amenity": "restaurant",
          "building": "yes",
          "name": "Rikaman Sali",
          "toilets": "yes"
        }
      },
      {
        "type": "way",
        "id": 24904043,
        "center": {
          "lat": 60.1483045,
          "lon": 24.983399
        },
        "nodes": [
          270589024,
          270589025,
          270589026,
          270589027,
          270589024
        ],
        "tags": {
          "amenity": "restaurant",
          "building": "yes",
          "cuisine": "regional",
          "delivery": "no",
          "name": "Bastion Bistro",
          "url": "https://www.bastion.fi/"
        }
      },
      {
        "type": "way",
        "id": 26257345,
        "center": {
          "lat": 60.1888033,
          "lon": 24.940085
        },
        "nodes": [
          287570519,
          315329037,
          6026086368,
          5794107447,
          6026086369,
          6026086367,
          6026086370,
          287570520,
          6026086371,
          315329036,
          287570521,
          6026086372,
          5794107449,
          315329035,
          287570522,
          315329041,
          6026086373,
          287570523,
          315329040,
          287570524,
          6026086374,
          315329039,
          287570525,
          6026086375,
          6026086376,
          6026086377,
          6026086378,
          287570526,
          315329038,
          5794107448,
          6026086364,
          6026086365,
          6026086366,
          287570519
        ],
        "tags": {
          "amenity": "restaurant",
          "building": "yes",
          "name": "Lintsiburger",
          "wheelchair": "yes"
        }
      },
      {
        "type": "way",
        "id": 26936530,
        "center": {
          "lat": 60.1514022,
          "lon": 24.9472043
        },
        "nodes": [
          295159755,
          1373215851,
          1373215840,
          1373215834,
          1373215832,
          1373215839,
          1373215849,
          295159756,
          295159757,
          295159758,
          1373215872,
          295159759,
          295159760,
          295159761,
          295159744,
          295159746,
          1373215903,
          1373215898,
          295159748,
          295159749,
          295159750,
          295159751,
          295159752,
          295159755
        ],
        "tags": {
          "amenity": "restaurant",
          "building": "yes",
          "name": "Boat house",
          "seasonal:summer": "yes",
          "wheelchair": "no",
          "wikidata": "Q4355414"
        }
      },
      {
        "type": "way",
        "id": 27191843,
        "center": {
          "lat": 60.1616438,
          "lon": 24.9126876
        },
        "nodes": [
          1063790292,
          1005656915,
          1005656918,
          1005656870,
          298386384,
          1005657064,
          298386389,
          6557995801,
          1005657062,
          1005657025,
          1005656952,
          1005656989,
          298386386,
          6557995802,
          1005656945,
          1005657022,
          1005656960,
          1005656833,
          298386381,
          1005656889,
          1005657028,
          1005656867,
          1063790292
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00180",
          "addr:street": "Kellosaarenranta",
          "amenity": "restaurant",
          "building": "yes",
          "lunch": "yes",
          "name": "Faro Channelside Bar & Restaurant",
          "outdoor_seating": "yes",
          "payment:bitcoin": "yes",
          "website": "http://www.faroravintola.fi/",
          "wheelchair": "limited"
        }
      },
      {
        "type": "way",
        "id": 28739860,
        "center": {
          "lat": 60.1608364,
          "lon": 24.9266079
        },
        "nodes": [
          77819321,
          316006099,
          316006100,
          316006101,
          316006102,
          316006103,
          316006104,
          316006105,
          316006106,
          77819321
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "14",
          "addr:postcode": "00180",
          "addr:street": "Hietalahdenranta",
          "amenity": "restaurant",
          "building": "yes",
          "cuisine": "seafood",
          "name": "Merimakasiini",
          "website": "https://www.merimakasiini.fi/",
          "wheelchair": "yes"
        }
      },
      {
        "type": "way",
        "id": 34714712,
        "center": {
          "lat": 60.1736446,
          "lon": 24.9687157
        },
        "nodes": [
          404375573,
          404375568,
          404375564,
          404375559,
          404375573
        ],
        "tags": {
          "addr:housenumber": "3",
          "addr:postcode": "00170",
          "addr:street": "Tervasaari Island",
          "amenity": "restaurant",
          "building": "retail",
          "cuisine": "smoked_food",
          "email": "sales@asrestaurants.fi",
          "internet_access": "wlan",
          "name": "Ravintola Savu",
          "opening_hours": "Mo-Sa 12:00-23:00; Su 13:00-18:00",
          "phone": "+358 9 74255574",
          "postal_code": "00170",
          "start_date": "1805",
          "url": "http://www.ravintolasavu.fi"
        }
      },
      {
        "type": "way",
        "id": 44923563,
        "center": {
          "lat": 60.281199,
          "lon": 25.0077603
        },
        "nodes": [
          569681461,
          569681462,
          569681463,
          569681464,
          569681461
        ],
        "tags": {
          "amenity": "restaurant",
          "building": "yes",
          "name": "Valentin Pizza & Burger",
          "note": "Vanha kioski, suljettu toistaiseksi 5/2010",
          "source": "survey"
        }
      },
      {
        "type": "way",
        "id": 88732590,
        "center": {
          "lat": 60.1551467,
          "lon": 24.8865942
        },
        "nodes": [
          1029992647,
          1029992620,
          1029992636,
          1029992623,
          1029992641,
          1029992654,
          1029992644,
          1029992638,
          1029992647
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "5",
          "addr:postcode": "00210",
          "addr:street": "Vattuniemenranta",
          "amenity": "restaurant",
          "building": "retail",
          "contact:email": "bistro@bistrotelakka.fi",
          "name": "Telakka",
          "opening_hours": "Mo-Th 11:00-23:00; Fr 11:00-24:00; Sa 12:00-24:00",
          "seamark:small_craft_facility:category": "boatyard",
          "seamark:type": "small_craft_facility"
        }
      },
      {
        "type": "way",
        "id": 89347832,
        "center": {
          "lat": 60.1899674,
          "lon": 24.8849344
        },
        "nodes": [
          1036407349,
          1036407333,
          1036407329,
          1036407353,
          1036407325,
          1036407356,
          1036407331,
          1036407316,
          1036407352,
          1036407354,
          1036407313,
          1036407346,
          1036407330,
          1036407358,
          1036407351,
          1036407328,
          1036407335,
          1036407349
        ],
        "tags": {
          "amenity": "restaurant",
          "building": "yes",
          "name": "Villa Angelica"
        }
      },
      {
        "type": "way",
        "id": 93949042,
        "center": {
          "lat": 60.1776286,
          "lon": 24.9121337
        },
        "nodes": [
          1092167695,
          1092167908,
          1092167732,
          1092167931,
          1092167695
        ],
        "tags": {
          "addr:postcode": "00260",
          "addr:street": "Toivo Kuulan puisto",
          "amenity": "restaurant",
          "building": "yes",
          "fixme": "tagit rakennukseen ",
          "name": "Meritalli"
        }
      },
      {
        "type": "way",
        "id": 93949057,
        "center": {
          "lat": 60.1781322,
          "lon": 24.9123098
        },
        "nodes": [
          1092167712,
          1092167720,
          1092167784,
          1092167910,
          1092167838,
          1092167812,
          8946404176,
          1092167758,
          1092167900,
          1092167782,
          1092167740,
          1092167712
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "6",
          "addr:postcode": "00260",
          "addr:street": "Merikannontie",
          "amenity": "restaurant",
          "building": "yes",
          "fixme": "tagit rakennukseen ",
          "name": "Mestaritalli"
        }
      },
      {
        "type": "way",
        "id": 93983220,
        "center": {
          "lat": 60.1516419,
          "lon": 24.8915123
        },
        "nodes": [
          1092539709,
          7483382633,
          1092539708,
          1092539768,
          1092539729,
          7483382641,
          1092539779,
          1092539679,
          1092539754,
          1092539747,
          1092539751,
          1092539766,
          1092539709
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "1",
          "addr:postcode": "00210",
          "addr:street": "Vattuniemen puistotie",
          "amenity": "restaurant",
          "building": "commercial",
          "cuisine": "regional",
          "name": "Blue Peter",
          "toilet": "yes",
          "toilets:wheelchair": "yes"
        }
      },
      {
        "type": "way",
        "id": 115475357,
        "center": {
          "lat": 60.1612586,
          "lon": 24.9641097
        },
        "nodes": [
          1304580754,
          1379403195,
          1379403204,
          1379403206,
          1304580852,
          1379403212,
          1304580822,
          1304580845,
          1379403226,
          1379403225,
          1379403224,
          1379403217,
          1379403218,
          1379403210,
          1379403211,
          1379403194,
          1304580778,
          1379403172,
          1379403174,
          1304580732,
          1304580811,
          1304580788,
          1304580754
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:postcode": "00140",
          "amenity": "restaurant",
          "building": "yes",
          "name": "NJK",
          "opening_hours": "Mo-Sa 17:00-24:00",
          "operator": "Royal Ravintolat",
          "phone": "+358 9 6128 6500",
          "website": "https://www.royalravintolat.com/",
          "wheelchair": "no"
        }
      },
      {
        "type": "way",
        "id": 115475359,
        "center": {
          "lat": 60.1593395,
          "lon": 24.9656046
        },
        "nodes": [
          1304580755,
          1304580790,
          1379402808,
          1304580816,
          1304580762,
          1304580779,
          1304580847,
          1304580813,
          1304580843,
          1379402801,
          1304580785,
          1304580798,
          1304580735,
          1304580828,
          1379402845,
          1379402847,
          1379402864,
          1379402862,
          1379402872,
          1379402874,
          1304580750,
          1379402889,
          1304580864,
          1304580795,
          1379402870,
          1379402861,
          1304580743,
          1304580805,
          1304580766,
          1304580817,
          1304580755
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:postcode": "00140",
          "amenity": "restaurant",
          "building": "yes",
          "name": "Saaristo",
          "opening_hours": "Mo-Fr 11:30-23:00;Sa 17:00-23:00;Su 12:00-16:00;Sep 5-30 Mo-Sa 17:00-23:00; Sep 5-30 Su off",
          "operator": "A&S Ravintolat",
          "phone": "+358 9 7425 5590",
          "website": "http://www.asrestaurants.com/",
          "wheelchair": "no"
        }
      },
      {
        "type": "way",
        "id": 119175200,
        "center": {
          "lat": 60.1504184,
          "lon": 24.9665473
        },
        "nodes": [
          1339769418,
          1339769413,
          1339769456,
          1831945821,
          1339769452,
          1339769434,
          2406316903,
          1339769426,
          1339769437,
          1339769429,
          1339769406,
          1339769411,
          1339769421,
          2406316902,
          1339769423,
          1339769418
        ],
        "tags": {
          "addr:city": "HELSINKI",
          "addr:postcode": "00140",
          "addr:street": "Särkänsaari",
          "amenity": "restaurant",
          "building": "yes",
          "email": "myyntipalvelu@royalravintolat.com",
          "name": "Ravintola Särkänlinna",
          "phone": "+358 9 61285550",
          "website": "https://www.ravintolasarkanlinna.fi/"
        }
      },
      {
        "type": "way",
        "id": 122522011,
        "center": {
          "lat": 60.1746609,
          "lon": 24.9839088
        },
        "nodes": [
          1368865227,
          1368865226,
          1368865225,
          1368865233,
          1368865245,
          1368865246,
          1368865236,
          1368865235,
          1368865237,
          1368865247,
          2389029156,
          1368865251,
          1368865249,
          1368865252,
          1368865209,
          1368865199,
          1368865181,
          1368865180,
          1368865168,
          1368865158,
          1368865227
        ],
        "tags": {
          "amenity": "restaurant",
          "building": "yes",
          "name": "Restaurant Pukki",
          "name:fi": "Ravintola Pukki",
          "start_date": "1884",
          "website": "http://www.korkeasaarenravintolat.fi/"
        }
      },
      {
        "type": "way",
        "id": 122595277,
        "center": {
          "lat": 60.1714302,
          "lon": 24.9396252
        },
        "nodes": [
          1369465889,
          1369465891,
          256207449,
          335028448,
          335027653,
          335027657,
          335028456,
          335028454,
          1369465892,
          335028458,
          335028451,
          1369465890,
          1369465889
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:country": "FI",
          "addr:housenumber": "2",
          "addr:postcode": "00100",
          "addr:street": "Elielinaukio",
          "amenity": "restaurant",
          "building": "commercial",
          "building:levels": "3.5",
          "food": "yes",
          "lunch": "yes",
          "name": "Vltava",
          "opening_hours:covid19": "off",
          "website": "http://www.vltava.fi/",
          "wikidata": "Q11901817"
        }
      },
      {
        "type": "way",
        "id": 130583022,
        "center": {
          "lat": 60.2051491,
          "lon": 25.1582011
        },
        "nodes": [
          1437762217,
          1437762218,
          355866344,
          355866340,
          355866339,
          1437762217
        ],
        "tags": {
          "amenity": "restaurant",
          "cuisine": "indian",
          "name": "Hansini"
        }
      },
      {
        "type": "way",
        "id": 153777281,
        "center": {
          "lat": 60.1797075,
          "lon": 25.0232928
        },
        "nodes": [
          1664178532,
          8877998766,
          8877998763,
          1664178539,
          1664178548,
          1664178546,
          1664178551,
          8878041699,
          1664178547,
          1664178543,
          1664178542,
          1664178537,
          1664178536,
          1664178532
        ],
        "tags": {
          "addr:housenumber": "3",
          "addr:postcode": "00590",
          "addr:street": "Henrik Borgströmin polku",
          "alt_name": "Palma de Pyy",
          "amenity": "restaurant",
          "building": "yes",
          "cuisine": "barbecue;burger;fish;local;regional;steak_house",
          "name": "Ravintola Pyysaari",
          "phone": "09 698 0287",
          "start_date": "1952",
          "website": "https://htps.fi/ravintola-pyysaari/"
        }
      },
      {
        "type": "way",
        "id": 156128272,
        "center": {
          "lat": 60.1628746,
          "lon": 25.0293328
        },
        "nodes": [
          1684144258,
          1684144253,
          1684144266,
          1684144270,
          1684144271,
          1684144272,
          1684144261,
          1684144255,
          1684144258
        ],
        "tags": {
          "amenity": "restaurant",
          "building": "yes",
          "loc_name": "Ravintola",
          "name:fi": "Ravintola Stansvik",
          "note": "Avoinna kesäisin",
          "phone": "(09) 698 07 28"
        }
      },
      {
        "type": "way",
        "id": 170507937,
        "center": {
          "lat": 60.1468313,
          "lon": 24.9890317
        },
        "nodes": [
          1816672932,
          270622962,
          270622963,
          1367921009,
          270622948,
          1367921014,
          1367921013,
          1816672932
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housename": "Upseerikerho",
          "addr:housenumber": "C 53",
          "addr:postcode": "00190",
          "addr:street": "Suomenlinna",
          "amenity": "restaurant",
          "building": "yes",
          "name": "Suomenlinnan Upseerikerho",
          "website": "https://www.suomenlinnanupseerikerho.fi/"
        }
      },
      {
        "type": "way",
        "id": 177720493,
        "center": {
          "lat": 60.1734495,
          "lon": 24.9056764
        },
        "nodes": [
          1881589678,
          1881589630,
          1881589620,
          1881589598,
          1881589596,
          1881589590,
          1881589593,
          1881589601,
          1881589605,
          1881589608,
          1881589612,
          1881589614,
          1881589617,
          1881589623,
          1881589633,
          1881589637,
          1881589652,
          1881589657,
          1881589667,
          1881589672,
          1881589681,
          1881589689,
          1881589662,
          1881589678
        ],
        "tags": {
          "amenity": "restaurant",
          "building": "yes",
          "building:levels": "1"
        }
      },
      {
        "type": "way",
        "id": 183348904,
        "center": {
          "lat": 60.251487,
          "lon": 24.9927523
        },
        "nodes": [
          1937173258,
          1937173264,
          1937173271,
          1937173269,
          1937173280,
          1937173278,
          1937173282,
          1937173276,
          1937173275,
          1937173274,
          1937173266,
          1937173267,
          1937173258
        ],
        "tags": {
          "addr:housenumber": "18",
          "addr:street": "Pukinmäenkaari",
          "amenity": "restaurant",
          "building": "yes"
        }
      },
      {
        "type": "way",
        "id": 332438355,
        "center": {
          "lat": 60.1793742,
          "lon": 24.9468104
        },
        "nodes": [
          3395713228,
          6005144133,
          6005144132,
          6820620915,
          3395713227,
          6820620916,
          6005144131,
          6820620917,
          6005144130,
          6820620918,
          6005144129,
          6820620919,
          6820620920,
          6005144128,
          6820620921,
          3395713229,
          6820620922,
          6005144134,
          6005144140,
          6820620923,
          6005144135,
          6820620924,
          6005144136,
          6820620925,
          6005144137,
          6820620926,
          6005144138,
          3395713231,
          6005144139,
          6820620927,
          6820620937,
          3395713230,
          6820620928,
          3395713228
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "3",
          "addr:postcode": "00530",
          "addr:street": "Säästöpankinranta",
          "amenity": "restaurant",
          "building": "yes",
          "contact:instagram": "https://www.instagram.com/meripaviljonki/",
          "email": "meripaviljonki@graniittiravintolat.fi",
          "facebook": "https://www.facebook.com/ravintolameripaviljonki/",
          "name": "Ravintola Meripaviljonki",
          "opening_hours": "Mo-Fr 11:00-23:00; Sa 13:00-23:00; Su 12:00-18:00",
          "phone": "+358 20 742 5320",
          "smoking": "outside",
          "start_date": "2015",
          "website": "https://www.ravintolameripaviljonki.fi/",
          "wheelchair": "yes",
          "wheelchair:description": "Kelluva ja esteetön panoraamaravintola / Floating panorama restaurant with wheelchair accessible entrance!"
        }
      },
      {
        "type": "way",
        "id": 344997705,
        "center": {
          "lat": 60.1997102,
          "lon": 25.1304437
        },
        "nodes": [
          3517041023,
          8428594728,
          437556354,
          3517041024,
          3517041025,
          437556357,
          3517041022,
          3517041021,
          3517041020,
          3517041019,
          3517041023
        ],
        "tags": {
          "addr:housenumber": "44",
          "addr:street": "Lohiniemenranta",
          "amenity": "restaurant",
          "name": "Ravintola Maininki",
          "outdoor_seating": "yes",
          "toilets": "yes",
          "toilets:access": "customers",
          "wheelchair": "limited"
        }
      },
      {
        "type": "way",
        "id": 494775391,
        "center": {
          "lat": 60.1944201,
          "lon": 24.8712055
        },
        "nodes": [
          4865217071,
          4865217072,
          6822930302,
          6822930300,
          6822930303,
          6822930301,
          6822930323,
          6822930304,
          4865217073,
          4865217074,
          4865217071
        ],
        "tags": {
          "access:covid19": "no",
          "addr:city": "Helsinki",
          "addr:housenumber": "2",
          "addr:postcode": "00330",
          "addr:street": "Munkkiniemenranta",
          "amenity": "restaurant",
          "building": "yes",
          "contact:website": "http://www.torpanranta.fi/",
          "delivery:covid19": "no",
          "drive_through:covid19": "no",
          "name": "Cafe Torpanranta",
          "opening_hours": "10:00-22:00",
          "opening_hours:covid19": "Mo-Su,PH 10:00-22:00",
          "takeaway:covid19": "yes"
        }
      },
      {
        "type": "way",
        "id": 499495988,
        "center": {
          "lat": 60.1047202,
          "lon": 25.0599347
        },
        "nodes": [
          4907658266,
          4907658267,
          4907658268,
          4907658269,
          4907658270,
          4907658273,
          4907658266
        ],
        "tags": {
          "amenity": "restaurant",
          "building": "yes",
          "name": "Upseerikerho - Isosaari",
          "outdoor_seating": "yes",
          "toilets": "yes",
          "website": "https://visitisosaari.fi/upseerikerho/"
        }
      },
      {
        "type": "way",
        "id": 559139564,
        "center": {
          "lat": 60.1673554,
          "lon": 24.9339697
        },
        "nodes": [
          5393393231,
          6339908436,
          7701337657,
          7701337658,
          7701337655,
          7701337653,
          7701337652,
          5393393232,
          150983567,
          7701337650,
          7701337645,
          7701337646,
          150983568,
          5393393233,
          5393393234,
          5393393229,
          228461937,
          5393393230,
          5393393235,
          5393393236,
          5393393238,
          5393393237,
          5393393231
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:floor": "5",
          "addr:housenumber": "3",
          "addr:postcode": "00100",
          "addr:street": "Kansakoulukuja",
          "amenity": "restaurant",
          "building": "yes",
          "name": "Helsingin Suomalainen Klubi",
          "takeaway": "no",
          "website": "www.klubi.fi"
        }
      },
      {
        "type": "way",
        "id": 625576876,
        "center": {
          "lat": 60.1521542,
          "lon": 24.9304213
        },
        "nodes": [
          4609794784,
          5906487041,
          5906487028,
          4609794785,
          4845678313,
          5000492113,
          4609794784
        ],
        "tags": {
          "addr:city": "Helsinki",
          "addr:housenumber": "4",
          "addr:postcode": "00150",
          "addr:street": "Hernesaarenranta",
          "amenity": "restaurant",
          "building": "retail",
          "building:levels": "1",
          "contact:website": "http://loylyhelsinki.fi/",
          "diet:vegan": "yes",
          "diet:vegetarian": "yes",
          "leisure": "sauna",
          "name": "Löyly",
          "smoking": "no",
          "wheelchair": "yes"
        }
      },
      {
        "type": "way",
        "id": 921667320,
        "center": {
          "lat": 60.1743316,
          "lon": 24.9886185
        },
        "nodes": [
          8556817576,
          8556817579,
          736394603,
          791702502,
          791702493,
          791702492,
          8556817577,
          8556817578,
          8556817576
        ],
        "tags": {
          "amenity": "restaurant",
          "building": "yes",
          "layer": "-2",
          "name": "Restaurant Karhu",
          "name:fi": "Ravintola Karhu",
          "website": "http://www.korkeasaarenravintolat.fi/"
        }
      }
    ]
  } as OverpassJson;

export default mockData;
