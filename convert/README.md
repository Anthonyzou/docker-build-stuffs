# About

A docker image that can download a youtube play list, insert an image of the video into the mp3 file, tag the file with metadata, and normalize the volume of each song.

# Building

Build the docker image locally by running `docker build -t anthonyzou/convert .`

# Dependencies

- mp3gain for normalizing audio
- id3ed for editing metadata
- bash for parsing out metadata from youtube titles
- youtube-dl for downloading the videos, inserting thumbnails, and extracting mp3

# Run command

2025: PLKVpu_2-084RwwpV08W_60ZyxdTPjAIkU
2026: PLKVpu_2-084SZJsdqmMYe8Fx_Lp0qaRwk

```bash
docker run -it -v "$(pwd):/tmp/music" anthonyzou/convert:latest youtube-dl --ignore-config -i -w -x --no-keep-video --no-write-thumbnail --download-archive downloaded.txt --default-search ytsearch --embed-thumbnail --audio-format opus -o "%(title)s.%(ext)s" --exec "/usr/local/bin/node ../check.js {}" --force-overwrites --js-runtimes node:/usr/local/bin/node [ID OF PLAYLIST OR VIDEO]
```


# Common extra commands

    --playlist-start NUMBER          Playlist video to start at (default is 1)
    --playlist-end NUMBER            Playlist video to end at (default is last)


