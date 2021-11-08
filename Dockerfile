#-------------------------------------------
# Build
#-------------------------------------------
FROM node:16-alpine AS build

WORKDIR /build/map-client
COPY map-client/package*.json ./
RUN npm install

WORKDIR /build/map-server
COPY map-server/package*.json ./
RUN npm install

WORKDIR /build/map-client
COPY map-client .

WORKDIR /build/map-server
COPY map-server .
RUN npm run build

#-------------------------------------------
# Deploy
#-------------------------------------------
FROM node:16-alpine
WORKDIR /app

COPY --from=build /build/map-server/package*.json .
RUN npm ci --only=production

COPY --from=build /build/map-server/build build/
COPY --from=build /build/map-server/frontend frontend

EXPOSE 3001
CMD [ "npm", "start" ]
