# base image
FROM node:latest AS COMPILE_IMAGE

# install chrome for protractor tests
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
# RUN npm install -g @angular/cli@latest

# add app
COPY . /app

# Build app
RUN ng build --prod

FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=COMPILE_IMAGE /app/dist/currency-conversion /usr/share/nginx/html