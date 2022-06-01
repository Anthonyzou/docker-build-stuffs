FROM node:18

ADD https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp /usr/local/bin/youtube-dl
RUN chmod a+rx /usr/local/bin/youtube-dl
RUN apt-get update; apt-get install python3 python3-pip ffmpeg -y
WORKDIR /tmp
ADD check.js package-lock.json package.json ./
RUN npm install; pip3 install ffmpeg-normalize mutagen


ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

WORKDIR /tmp/music
