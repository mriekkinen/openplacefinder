#!/bin/bash

# This script sets the property fill="white" on all SVG icons.
#
# By default, we have only dark icons on a white background, and
# in order to add variation to this color scheme, we need to modify
# the files one-by-one. This script lists all the icon files, and
# uses sed to insert the fill attribute on the svg element.
set -e
cd ../public/icons

echo "Creating copies of the original icon files..."
rm -rf modified
cp -r originals modified

echo "Will modify each file one-by-one..."
for file in $(find ./modified -type f -name "*.svg"); do
  echo $file
  sed -i "" -e "s/<svg /<svg fill=\"white\" /" "$file"
done

echo "Done!"
