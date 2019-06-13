# FROM alpine as dht

# RUN apk --update add gcc make g++ zlib-dev && \
#     apk add boost boost-build boost-dev --update-cache \
#     --repository http://dl-3.alpinelinux.org/alpine/edge/community/ \
#     --repository http://dl-3.alpinelinux.org/alpine/edge/edge/

# ADD bootstrap-dht /tmp/bootstrap-dht
# WORKDIR /tmp/bootstrap-dht
# RUN b2 toolset=gcc cxxflags="-std=c++11"
# RUN chmod +x dht-bootstrap;

# FROM alpine

# COPY --from=dht /tmp/bootstrap-dht/dht-bootstrap /bin/dht-bootstrap
# RUN apk --update add libgcc libstdc++ musl boost

# EXPOSE 6881

# CMD ["dht-bootstrap", "0.0.0.0"]

FROM ubuntu:xenial

COPY bootstrap-dht /usr/src/bootstrap-dht
WORKDIR /usr/src/bootstrap-dht

RUN \
  apt-get update && \
  DEBIAN_FRONTEND=noninteractive \
    apt-get -y install \
      build-essential \
      libboost-dev \
      libboost-system-dev \
      libboost-tools-dev \
  && \
  bjam release \
  && \
  DEBIAN_FRONTEND=noninteractive \
    apt-get -y purge --auto-remove \
      build-essential \
  && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/

ENTRYPOINT [ "./dht-bootstrap" ]
