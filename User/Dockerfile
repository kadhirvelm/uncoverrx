FROM node:lts

WORKDIR /cohortrx

COPY . .

RUN yarn
RUN yarn build

CMD yarn start:watch
