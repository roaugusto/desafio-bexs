FROM node:lts-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home

WORKDIR /home/node/api

COPY package.json yarn.* ./

COPY ormconfig.docker.json ./ormconfig.json

USER node

RUN yarn

COPY --chown=node:node . . 

EXPOSE 3333

ENTRYPOINT ["sh", "./init.sh"]