FROM phusion/baseimage
RUN cd /usr/local/bin;\
curl -L https://github.com/kelseyhightower/confd/releases/download/v0.10.0/confd-0.10.0-linux-amd64 -o confd;\
chmod +x confd;\
mkdir -p /etc/confd/{conf.d,templates}
