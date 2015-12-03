Basically a fork of [docker-logentries](https://github.com/logentries/docker-logentries).


I didn't realize how simple using pure TLS TCP would be with logging platforms.
The only thing I added was using the host and port from environmental variables.

Now you can use most logging providers by setting the `HOST` and `PORT` variable.

e.g
  - HOST=data.logentries.com (original)
  - HOST=logs3.papertrailapp.com
  - PORT=1234


You can pass the --no-stats flag if you do not want stats. **recommended**
You can pass the --no-logs flag if you do not want logs.
You can pass the --no-dockerEvents flag if you do not want events. **recommended**


## Example docker-compose.yaml

```yaml
logging:
  image: anthonyzou/logger
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock:ro
  command:  -t someToken --secure --no-stats --no-dockerEvents
  environment:
    - HOST=logs3.papertrailapp.com
    - PORT=1234
```


###### tar command because I can never remember how

    tar -zcvf node_modules.tar.gz node_modules
