# Use a Node.js image and assign it as our build
FROM mhart/alpine-node:10 as build

# Set the working directory, copy dependency management files to the working directory,
# and install the dependencies
WORKDIR /usr/src
COPY package*.json ./
RUN npm install

# Copy all files to the working directly, build the application
# and purge the development dependencies
COPY . .

EXPOSE 3000

# Start the server with npm this will be used as a default command with docker run...
CMD ["npm", "run", "dev"]