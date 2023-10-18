# Criação do container a partir da imagem linux alpine
FROM node:gallium as builder
ENV VERSION=v16.14.0 NPM_VERSION=latest YARN_VERSION=latest


# Definição de variáveis de ambiente na imagem
ENV PROJECT_NAME $PROJECT_NAME
ENV VERSION $VERSION
ENV REVISION $REVISION
ENV ENVIRONMENT $ENVIRONMENT


ENV NODE_ENV 'production'

WORKDIR /app

# Copiando nosso código no container
COPY . .

FROM alpine:3.15.0
RUN apk add --no-cache nginx-mod-http-lua

RUN rm -r /etc/nginx/http.d && rm /etc/nginx/nginx.conf
ADD /devops/nginx/default.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html


# Modificar para a porta definida no proxy
EXPOSE 3041
CMD ["nginx"]
