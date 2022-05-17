# Installation and development

If you would like to contribute to the development of OpenPlaceFinder, you can follow these instructions.

## Local development

We use React on the front-end and Node.js/Express on the back-end. Both are written in TypeScript, which is a strongly typed extension of JavaScript.

To start the back-end in development mode, navigate to the project's root directory (i.e. *openplacefinder*), and enter these commands

```
cd map-server
npm install
npm run dev
```

To start also the front-end in development mode, open another terminal window, navigate to the project's root directory, and enter these commands

```
cd map-client
npm install
npm start
```

After a while, this should launch a browser window at [http://localhost:3000/](http://localhost:3000/).

If everything runs smoothly, you'll be greeted with a working app, but the markers may look a little funny. This is because we haven't downloaded any icon sets, and hence you'll see blank boxes where icons are used. We'll fix this in the next section.

## Downloading the data files

This app depends on a set of files to provide a complete feature set. These include a few icon sets, and a database containing information collected from the OpenStreetMap Wiki. Obtaining these files may take a bit of time, but needs to be done only once.

* Follow the instructions at [downloading and processing the icon sets](icons.md).
* Download the file [taginfo-wiki.db.bz2](https://taginfo.openstreetmap.org/download/taginfo-wiki.db.bz2) from [Taginfo](https://taginfo.openstreetmap.org/download). Then extract the compressed file and copy the unpacked file `taginfo-wiki.db` into the directory `map-server/data`.

## Setting up a production instance

We use Docker to create a production build of the site. Assuming that you have Docker installed on your computer, navigate again to the project's root directory. It contains a Dockerfile which can be built with the command

```
docker build -t openplacefinder-server .
```

The first time you run this command, the build process may take up to 5 minutes.

After a successful build, you can run the image with this command to see that everything is working alright

```
docker run --rm -p 3001:3001 openplacefinder-server
```

While the container is running, the site should be available at the address [http://localhost:3001/](http://localhost:3001/).

In the production version, the back-end serves also the static files of the front-end. Since we connect directly to the back-end, the development and production versions use different port numbers for accessing the site.
