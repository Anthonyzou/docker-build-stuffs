FROM anthonyzou/alpine-build-essentials

ENV BOOST_ROOT=/tmp/boost_1_59_0
ADD boost_1_59_0.tar.gz /tmp
COPY bootstrap-dht /tmp/bootstrap-dht

RUN apk --update add linux-headers &&\
 cd /tmp/boost_1_59_0 && \
./bootstrap.sh && \
./bootstrap.sh link=static --prefix=/usr && \
./b2 link=static threading=multi install --with-system && \
cp b2 /tmp/bootstrap-dht && \
cd /tmp/bootstrap-dht && \
./b2 link=static  threading=multi toolset=gcc cxxflags="-std=c++11" 
