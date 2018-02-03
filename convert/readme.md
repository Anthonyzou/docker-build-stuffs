docker run -it anthonyzou/mp3convert -v (pwd)/music:/tmp/music -i -w -k -x --default-search "ytsearch" --embed-thumbnail --audio-format mp3 -o "%(title)s.%(ext)s" PLKVpu_2-084Qw9BZEayrBXIgKdf8NyTNH --exec 'bash ../check.sh {}' --audio-quality 3


--playlist-start NUMBER          Playlist video to start at (default is 1)
--playlist-end NUMBER            Playlist video to end at (default is last)