#!/bin/bash

# This script sets the fill property on all SVG icons.
#
# By default, we have only dark icons on a white background, and
# in order to add variation to this color scheme, we need to modify
# the files one-by-one. This script lists all the icon files, and
# uses sed to insert the fill attribute on the svg element.
set -e
cd ../public/icons

echo "Creating copies of the original icon files..."
rm -rf blue
rm -rf white
cp -r original blue
cp -r original white

echo "Will modify each file one-by-one..."

for file in $(find ./blue -type f -name "*.svg"); do
  echo $file
  sed -i "" -e "s/<svg /<svg fill=\"rgb(51, 136, 255)\" /" "$file"
done

for file in $(find ./white -type f -name "*.svg"); do
  echo $file
  sed -i "" -e "s/<svg /<svg fill=\"white\" /" "$file"
done

echo "Done!"
