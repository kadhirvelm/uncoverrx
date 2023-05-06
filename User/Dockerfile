FROM node:lts

WORKDIR /cohortrx

COPY ./User .

RUN yarn
RUN yarn build

CMD yarn start:watch
