#!/bin/bash

for file in youngho_suh.png; do
  echo "resize $file"
    /opt/ImageMagick/bin/convert $file -resize 75% $file
    echo "finished"
  done
