FROM alpine AS build

COPY opentracker /tmp/opentracker
COPY libowfat /tmp/libowfat
RUN apk --update add gcc make g++ zlib-dev
RUN make -C /tmp/libowfat 
RUN make -C /tmp/opentracker
RUN chmod +x /tmp/opentracker/opentracker 

FROM alpine

RUN touch /etc/opentracker.conf;
COPY --from=build /tmp/opentracker/opentracker /bin/opentracker
COPY entrypoint.sh /

EXPOSE 6969 80

ENTRYPOINT ["sh", "entrypoint.sh"]
