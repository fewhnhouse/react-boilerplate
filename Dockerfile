# Dockerfile
FROM node:carbon

# Create app directory
WORKDIR /

# Copy package(-lock).json
COPY package*.json .

# Install dependencies
RUN npm install

# Bundle app source
 COPY . .

EXPOSE 5000

CMD ["npm", "run", "remote"]