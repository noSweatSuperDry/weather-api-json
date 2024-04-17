# Node js
FROM node:16.16.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

#installing dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs in
EXPOSE 3000


# Start the app
CMD [ "node", "index.js" ]