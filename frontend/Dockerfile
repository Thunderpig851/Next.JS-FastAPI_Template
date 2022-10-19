FROM node:16
RUN mkdir -p /usr/src
COPY . /usr/src
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm  
RUN apt-get install npm -y
CMD ['npm' 'run' 'dev']
EXPOSE 3000