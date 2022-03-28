# OpenPlaceFinder User Guide

## Introduction

In this guide you'll learn how to use OpenPlaceFinder. Hopefully, you'll find most of the functionality pretty intuitive, based on previous knowledge from similar systems. However, we'll start with the basics, while trying to present a bit of context and a few useful hints along the way.

OpenPlaceFinder is a web application, which can be used to locate places based on their type and geographical location. For instance, we could look for restaurants in the vicinity of our homes. If there are many such restaurants, we can narrow down the search using, for instance, the type of food they serve. This type of search is known as a *place search*, also known in mapping lingo as a point of interest (POI) search.

With this tool it is, then, possible to answer questions like

1. What pizza restaurants are there in this area?
2. What is the closest supermarket relative to my location?

These particular examples might be important, for instance, when travelling or comparing new apartments.

OpenPlaceFinder is based on [OpenStreetMap](https://www.openstreetmap.org), which is an open geographic database powered by volunteers. In order to make queries to this data, we use the [Overpass API](https://overpass-api.de), which provides powerful filters for the OpenStreetMap dataset. You don't have to be familiar with these services, but it's nice to know that, while you use this site, it communicates with OpenStreetMap servers to download map tiles and query points of interest.

One feature inherited from OpenStreetMap is that we don't present reviews. For instance, in the case of restaurants, you can't search or sort based on a restaurant's average customer rating. This is based on OpenStreetMap's policy of not including subjective experiences into the database. Since this application is open source, we made the choice of not using data from separate review platforms which are mostly proprietary.

## Supported browsers and limitations

This is a desktop app, so you should use a desktop browser. You might be able to use a tablet, but the layout doesn't scale well to smaller mobile screens.

If you want to be safe, we recommend using Chrome. The site has been developed using Chrome, so you might see slight differences with other browsers. The primary concern is that other browsers haven't received much testing (if any), but that's something we hope to address in the near future.

We should warn you that, at this time, the app is Finn-centric. **Some of the data is presented in Finnish, and you are mostly limited to searching Finnish locations.** The former can be addressed, buth the latter is a consequence of the size of full planet builds. That simply makes it more expensive to host a service with a global coverage.

## Getting started

Once you open the site [openplacefinder.org](https://openplacefinder.org) in your browser, you'll be greeted with a view similar to what you can see below. You should see a map display with some controls, and another set of controls above the map. We'll discuss the specifics of these in the following sections.

![A screenshot of the site](img/getting-started.png)

## Area selection

First, you should select your search area. This could be, for instance, an area surrounding your home or workplace, or it could be an area where you are headed. You start by typing a place name, such as a street address or the name of a municipality, into the box which says *Current map view*. As you type, the box presents suggestions, and once you see the one that fits you should select it. This will center the map to that location.

If you are typing the name of a municipality, you should try to enter it's name twice, for instance *Kuopio, Kuopio*. This helps to disambiguate your search from other places containing the word Kuopio, such as "Kuopiontie" or "Ikea Kuopio". In the image below, we can see that if we enter the name twice, the city of Kuopio is second from the top.

<img width="313" src="img/kuopio-kuopio.png" />

As you may have guessed, the search area is defined by the boundaries of the current viewport. In other words, the search is limited to the area you see on the screen (at the time of initiating the search). If you wish to repeat a search using the current viewport, you may click the *Search in this area* button, which is located on the top-right corner of the map. This initiates a new search using the current settings.

<img width="70" src="img/search-in-this-area.png" />

In addition to the search area, we need to know your location, at least in general terms. If you enter a street address, we assume that's your location. On the other hand, if you enter the name of a wider area, such as a municipality, you may wish to update your location by right-clicking on the map and selecting *Set location*. Your location is indicated by a big blue marker.

If you are concerned about the privacy implications of sharing your location, we would like to reassure you that your location will only be used locally, within your browser, to compute distances to points of interest. The author of this app has no way of knowing your precise location. However, the queries you make, including the boundaries of the search area, will appear in the server logs. These logs are not actively monitored, but they exist in case of abuse. Also, the autocomplete element (*Current map view*) is connected to an external API and they might log the street addresses you provide as input.

<img width="85" src="img/location-marker.png" />

## Feature type selection

Map features represent physical objects on the ground. OpenPlaceFinder supports a wide variety of feature types, but it works best with point-like features, such as buildings and smaller natural features.

Each feature type is known by one unique name. Admittedly, in some cases, guessing the name used by the system to describe a given feature type can be challenging. Usually there are good reasons for a choice but, to a degree, it is a matter of convention agreed upon by the OpenStreetMap community.

A few examples of convention include

- Small shops that sell mainly food items are tagged [convenience stores](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) while large shops are tagged as [supermarkets](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket). In Finnish these are called "lähikauppa" and "supermarketti".
- Places selling [fast food](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfast_food) are tagged as such, while [restaurants](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) are more formal establishments. In Finnish these are called "pikaruokaravintola" and "ravintola".

The page [Map features](http://wiki.openstreetmap.org/wiki/Map_features) in the OpenStreetMap wiki details these and many other conventions. However, be warned, that given the wide scope of OpenStreetMap, the list of map features is extensive.

In order to search for features of a given type, we simply type the name into the search box labeled *What are you looking for?* For instance, if we are looking for museums, we type "museo" into the search box. While we type the systems displays suggestions which provide clues into the available options, as seen in the screenshot below.

<img width="316" src="img/feature-museum.png" />

## Sorting and filtering

// Todo: My location (blue marker)

...


