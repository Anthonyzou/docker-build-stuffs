FROM alpine:edge

ADD ./etcd /bin/etcd
ADD ./etcdctl /bin/etcdctl
ADD entrypoint.sh /
RUN apk --update add ca-certificates openssl && rm -rf var/cache/apk/* && chmod +x entrypoint.sh
VOLUME /data
EXPOSE 2379 2380

ENTRYPOINT ["./entrypoint.sh"]
