#!/usr/bin/env sh
export ETCD_NAME=$HOSTNAME

#if not set then set this enviromental variable for tutum
if [ -z "${ETCD_INITIAL_ADVERTISE_PEER_URLS}" ]; then
  export ETCD_INITIAL_ADVERTISE_PEER_URLS="http://$HOSTNAME:2380"
fi

#if not set then set this enviromental variable for tutum
if [ -z "${ETCD_ADVERTISE_CLIENT_URLS}" ]; then
  export ETCD_ADVERTISE_CLIENT_URLS="http://$HOSTNAME:2379"
fi

echo $ETCD_NAME

exec etcd "$@"
