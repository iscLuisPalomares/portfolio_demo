# Stage 1
FROM node:14.21 as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app
RUN npm run build --prod

# Stage 2
FROM nginx:1.22.1
COPY --from=build-step /app/dist/portfolio_demo /usr/share/nginx/html