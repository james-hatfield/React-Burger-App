# Build new image: docker build -t jameshatfield/burger-api:<new-version-number> .
# Run image: docker run -p 8080:4200 -d jameshatfield/burger-api:<version-number>
# Followed Docker guide [docker guide](https://blog.logrocket.com/containerized-development-nestjs-docker/)

# Stage 1
FROM node:latest as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

COPY . .
CMD yarn start

#Stage 2
FROM node:latest as production
WORKDIR /usr/src/app
COPY package*.json ./
# Prevent dev dependencies from being built
RUN npm install --production

# Copy build /dist folder in builder and move to production
COPY --from=builder /user/src/app/dist ./dist

COPY ormconfig.docker.json ./ormconfig.json

EXPOSE 8080
CMD node dist/main.js