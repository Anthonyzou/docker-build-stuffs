#!/usr/bin/env bash

rm dht-bootstrap

cd build

docker build -t dht .


docker run --name dht-proxy dht:latest /bin/sh
docker cp dht-proxy:/tmp/bootstrap-dht/dht-bootstrap ..
docker rm -f dht-proxy

cd ..

docker build -t anthonyzou/dht-bootstrap .
docker run -p 6881:6881 anthonyzou/dht-bootstrap
