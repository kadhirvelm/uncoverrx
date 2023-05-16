FROM node:lts

WORKDIR /cohortrx

RUN yarn set version stable

COPY ./User .

RUN yarn
RUN yarn build

CMD yarn start:watch
