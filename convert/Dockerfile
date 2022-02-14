FROM ubuntu as build

RUN apt-get update
RUN apt-get install g++ build-essential \
    make libreadline-dev libncurses5-dev libmpg123-dev -y
ADD id3ed-1.10.4.tar.gz /tmp
ADD mp3gain-1_6_2-src.tar.gz /tmp

WORKDIR /tmp/id3ed-1.10.4
RUN ./configure; make; make install;
WORKDIR /tmp/mp3gain-1_6_2-src
RUN make; make install;

FROM ubuntu
COPY --from=build /usr/local/bin/id3ed /usr/local/bin/id3ed
COPY --from=build /usr/local/bin/mp3gain /usr/local/bin/mp3gain
ADD https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp /usr/local/bin/youtube-dl
RUN chmod a+rx /usr/local/bin/youtube-dl
RUN apt-get update; apt-get install python3 ca-certificates atomicparsley ffmpeg -y
RUN mv /usr/bin/python3 /usr/bin/python

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

ADD check /tmp
WORKDIR /tmp/music
