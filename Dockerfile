FROM alpine:latest as build
RUN apk add --no-cache yarn
WORKDIR /app
COPY . .
RUN yarn install --production \
    && yarn run build \
    && yarn run next export -o /export

FROM nginx:stable-alpine
COPY --from=build /export /usr/share/nginx/html
#RUN chmod -R a-w,a-x,a+r /usr/share/nginx/html \
#  && chmod +t /usr/share/nginx/html
