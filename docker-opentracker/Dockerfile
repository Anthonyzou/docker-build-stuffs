FROM alpine

COPY libowfat-0.30 /tmp/libowfat
COPY opentracker /tmp/opentracker
RUN apk --update add gcc make g++ zlib-dev && \
ls /tmp; make -C /tmp/libowfat && make -C /tmp/opentracker &&\
apk del gcc make g++ zlib-dev && \
mv /tmp/opentracker/opentracker /bin/  && \
rm -rf /var/cache/apk/* /tmp/* &&\
touch /etc/opentracker.conf;

COPY entrypoint.sh /

EXPOSE 6969 80

ENTRYPOINT ["sh", "entrypoint.sh"]
