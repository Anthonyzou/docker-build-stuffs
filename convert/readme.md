

# Running this thing
```bash
docker run -it -v (pwd)/music:/tmp/music anthonyzou/mp3convert youtube-dl -i -w -k -x --default-search ytsearch --embed-thumbnail --audio-format mp3 -o "%(title)s.%(ext)s" PLKVpu_2-084Qw9BZEayrBXIgKdf8NyTNH --restrict-filenames --exec '../check {}'


```


--playlist-start NUMBER          Playlist video to start at (default is 1)
--playlist-end NUMBER            Playlist video to end at (default is last)