FROM semrekkers/caddy-node

LABEL maintainer "Lars Heesakkers <larsheesakkers@live.nl>"

WORKDIR /var/app
COPY . /var/app
RUN [ "config/build.sh" ]

ENTRYPOINT [ "config/run.sh" ]