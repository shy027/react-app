FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm config set registry https://registry.npmirror.com
RUN npm install
COPY ..
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /user/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]