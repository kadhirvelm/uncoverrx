FROM node:lts

WORKDIR /cohortrx

COPY . .

RUN yarn set version stable

RUN yarn
# RUN yarn build

CMD yarn start:watch
