FROM node:lts

WORKDIR /uncoverrx

RUN yarn set version stable

COPY ./User .

RUN yarn
RUN yarn build

CMD yarn start:watch
