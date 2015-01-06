#!/bin/bash

for file in *.jpg; do
  echo "resize $file"
    /opt/ImageMagick/bin/convert $file -resize 1280x800^ -crop 1280x800+0+0 $file
    echo "finished"
  done
