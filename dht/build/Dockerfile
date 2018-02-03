FROM anthonyzou/alpine-build-essentials

# ENV BOOST_ROOT=/tmp/boost_1_59_0
# ADD boost_1_59_0.tar.gz /tmp
ADD bootstrap-dht /tmp/bootstrap-dht

RUN apk --update add linux-headers boost-dev cmake
# && cd /tmp/bootstrap-dht && cmake
