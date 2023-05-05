FROM node:lts

COPY . .
RUN yarn
RUN yarn build

WORKDIR ./packages/backend
CMD yarn start:watch
