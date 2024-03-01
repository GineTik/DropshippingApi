###########################
# BUILD FOR LOCAL DEVELOPMENT
###########################

FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build
# CMD ["npm", "run", "dev"]


###########################
# BUILD FOR PRODUCTION
###########################

FROM node:alpine As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["npm", "run", "prod:offers"]