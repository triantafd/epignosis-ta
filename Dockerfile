FROM node:16-alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm install -g server
RUN npm run build
COPY build/ .

CMD ["npm", "run", "buildVersion"]
