Opentracker docker container
========

This is a docker container containing the opentracker bit torrent tracker.

The tracker is mapped to the hosts port 6969.

Feel free to do your own make just build by running `./build.sh`

[Check out the repository here](https://github.com/Anthonyzou/docker-build-stuffs)


opentracker output

    Usage: opentracker [-i ip] [-p port] [-P port] [-r redirect] [-d dir] [-u user] [-A ip] [-f config] [-s livesyncport]
    -f config include and execute the config file
    -i ip     specify ip to bind to (default: *, you may specify more than one)
    -p port   specify tcp port to bind to (default: 6969, you may specify more than one)
    -P port   specify udp port to bind to (default: 6969, you may specify more than one)
    -r redirecturlspecify url where / should be redirected to (default none)
    -d dir    specify directory to try to chroot to (default: ".")
    -u user   specify user under whose priviliges opentracker should run (default: "nobody")
    -A ip     bless an ip address as admin address (e.g. to allow syncs from this address)

    Example:   ./opentracker -i 127.0.0.1 -p 6969 -P 6969 -f ./opentracker.conf -i 10.1.1.23 -p 2710 -p 80
