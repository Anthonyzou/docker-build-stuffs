#!/usr/bin/env bash

IFS=$'\n';
# remove trailing and leading spaces
# remove [Future base], 【Future base】, 「Future base」
# remove (Orginal mix)
# remove | Future base
term="[\s\-]*([\[【「].*?[\]」】]|\(Original.*?\)|\|.*)[\s\-]*"

[ -s $1 ] || exit 0

# run regex through perl shell and redirect first argument
copy=$(perl -pe "s/$term//ig" <<< $1)

echo "$(tput setaf 1)${copy}$(tput sgr 0)"

if [ "$copy" != "$1" ] && [ -s $1 ]; then
  mv $1 $copy
fi

artist=${copy% -*}
tempTitle=${copy#* - }
title=${tempTitle%*.*}
echo "$(tput setaf 6)ARTIST ${artist}$(tput sgr 0)"
echo "$(tput setaf 6)TITLE ${title}$(tput sgr 0)"

id3ed -q -n $artist -s $title $copy
# node ../check.js $copy
mp3gain -r -k $copy

# delete jpgs
find * -regextype awk -regex ".*?\.f.*?\..*?|.*?\.jpg" -exec rm {} \;
# make files not mp3 empty files
find * ! -name "*.mp3" -exec cp /dev/null {} \;
