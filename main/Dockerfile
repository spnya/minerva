FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm --loglevel=error install
ENV NODE_PATH=/app/node_modules
ENV PATH="${NODE_PATH}/.bin:${PATH}"
COPY . .

ENTRYPOINT npm run dev