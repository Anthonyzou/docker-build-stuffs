

# Run command

```bash
docker run -it -v (pwd):/tmp/music anthonyzou/convert \
youtube-dl -i -w -k -x --default-search ytsearch \
--embed-thumbnail --audio-format mp3 -o "%(title)s.%(ext)s" \
PLKVpu_2-084Qw9BZEayrBXIgKdf8NyTNH  --exec '../check {}'
```

# Common extra commands

    --playlist-start NUMBER          Playlist video to start at (default is 1)
    --playlist-end NUMBER            Playlist video to end at (default is last)
