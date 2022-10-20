FROM node:alpine
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
ENV APP_PORT 3000
ENV DB_HOST data
ENV DB_PORT 27017
CMD npm run start
EXPOSE 3000