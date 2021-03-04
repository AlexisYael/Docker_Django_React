FROM node:latest as build
WORKDIR /app/frontend
COPY ./frontend/package*.json ./
RUN npm ci --silent
COPY ./frontend/ ./
RUN npm run build

FROM nginx:latest
COPY --from=build /app/frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]