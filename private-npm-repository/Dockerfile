FROM node:16.13

RUN npm i -g verdaccio

COPY ./verdaccio/config.yaml /verdaccio/config.yaml 

EXPOSE 4873

CMD ["verdaccio"]