
# About

A docker image that can download a youtube play list, insert an image of the video into the mp3 file, tag the file with metadata, and normalize the volume of each song.

# Dependencies

- mp3gain for normalizing audio
- id3ed for editing metadata
- bash for parsing out metadata from youtube titles
- youtube-dl for downloading the videos, inserting thumbnails, and extracting mp3

# Run command

```bash
docker run -it -v (pwd):/tmp/music anthonyzou/convert \
youtube-dl -i -w -k -x --default-search ytsearch \
--embed-thumbnail --audio-format mp3 -o "%(title)s.%(ext)s" \
[ID OF PLAYLIST OR VIDEO]  --exec '../check {}'
```

# Common extra commands

    --playlist-start NUMBER          Playlist video to start at (default is 1)
    --playlist-end NUMBER            Playlist video to end at (default is last)
