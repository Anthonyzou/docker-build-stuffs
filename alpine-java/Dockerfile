FROM node:10

RUN echo 'deb http://http.debian.net/debian jessie-backports main' >> /etc/apt/sources.list
RUN apt-get update; apt-get install -t jessie-backports openjdk-8-jdk -y;

