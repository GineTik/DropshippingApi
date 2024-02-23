###########################
# BUILD FOR LOCAL DEVELOPMENT
###########################

FROM node:alpine As development

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . .

# RUN npm run build
CMD ["npm", "run", "dev", "offers-unloader"]


###########################
# BUILD FOR PRODUCTION
###########################


FROM node:alpine As production

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --production

COPY --from=development /usr/src/app/dist ./dist

CMD ["npm", "run", "prod:goods"]