FROM node:alpine
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
ENV APP_PORT 3000
CMD npm run start
EXPOSE 3000