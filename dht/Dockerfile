FROM alpine as dht


RUN apk --update add gcc make g++ zlib-dev && \ 
    apk add boost-build --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ --allow-untrusted

ADD bootstrap-dht /tmp/bootstrap-dht
WORKDIR /tmp/bootstrap-dht
RUN bjam release
RUN chmod +x dht-bootstrap;

FROM alpine

COPY --from=dht /tmp/bootstrap-dht/dht-bootstrap /bin/dht-bootstrap
RUN apk --update add libgcc libstdc++ musl boost

EXPOSE 6881

CMD ["dht-bootstrap", "0.0.0.0"]
