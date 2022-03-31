# Downloading and processing the icon sets

Disclaimer: these instructions have been written on macOS. I presume they work in Linux, but I cannot make any guarantees about Windows compatibility.

First, create a set of directories under `map-client/public`

```
cd map-client/public
mkdir -p icons/original/maki
mkdir -p icons/original/temaki
mkdir -p icons/original/fontawesome
```

Second, download the respective icon sets. Since we use the set of *presets* created for the iD editor, we refer to their documentation. As described [here](https://github.com/ideditor/schema-builder#icon), you'll need to download the following icon sets:

- [Maki](https://labs.mapbox.com/maki-icons/). Download and copy all the files in the `icons` directory.
- [Temaki](https://ideditor.github.io/temaki). Download the latest [release](https://github.com/ideditor/temaki/releases) from GitHub and copy all the files in the `icon` directory.
- [Font Awesome](). Download [version 5](https://fontawesome.com/v5/download) (or newer) and copy everything from the `svgs` directory (regular, solid and brands).

You should end up with a directory structure that looks like this

```
$ tree -I "*.svg" icons
icons
└── original
    ├── fontawesome
    │   ├── brands
    │   ├── regular
    │   └── solid
    ├── maki
    └── temaki

7 directories, 0 files
```

with several svg-files under each leaf.

The next step is to process these files to create a few color variations. Luckily, we have a script for that, so just enter this command on the terminal:

```
../scripts/process-icons.sh
```

This should take around one minute. The script creates `blue` and `white` color options under `icons`.

That's it, you should now have a full set of icons!
