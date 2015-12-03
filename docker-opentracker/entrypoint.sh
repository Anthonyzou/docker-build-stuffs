#!/bin/sh

if [ -n "${WORKERS+1}" ]; then
	echo "listen.udp.workers $WORKERS" >> /etc/opentracker.conf
fi
if [ -n "${TCP+1}" ]; then
	echo "listen.tcp $TCP" >> /etc/opentracker.conf
fi
if [ -n "${UDP+1}" ]; then
	echo "listen.udp $UDP" >> /etc/opentracker.conf
fi
if [ -n "${WHITELIST+1}" ]; then
	echo "access.whitelist $WHITELIST" >> /etc/opentracker.conf
fi
if [ -n "${NODE_IP+1}" ]; then
	for ip in $(echo $NODE_IP | awk -v RS=, '{print}')
	do
		echo "livesync.cluster.node_ip $ip" >> /etc/opentracker.conf
	done
fi
if [ -n "${REDIRECT_URL+1}" ]; then
	echo "tracker.redirect_url $REDIRECT_URL" >> /etc/opentracker.conf
fi
if [ -n "${STATS+1}" ]; then
  echo "access.stats_path $STATS" >> /etc/opentracker.conf
fi

exec opentracker -f /etc/opentracker.conf "$@"
