#Stage 1
FROM beevelop/nodejs-python:latest as builder
WORKDIR /myPortfolio
COPY package.json .
COPY package-lock.json .
Run npm install --location=global npm@9.2.0
RUN npm install
COPY . .
RUN npm run build
RUN ls 

#Stage 2
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /myPortfolio/src /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]