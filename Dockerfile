# Use a lightweight, pinned slim Bullseye image
FROM node:23.6.0-bullseye-slim

# Set up Node.js environment
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Default to port 19006 for node and debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE 19006 19001 19002

# Add your local IP (replace with your actual IP if necessary)
ENV REACT_NATIVE_PACKAGER_HOSTNAME="10.195.241.222"

# Install dependencies and required tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    qemu-user-static curl git build-essential python3 \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install global npm packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

# Install ngrok for tunneling
RUN yarn add @expo/ngrok

# Set up application directory
WORKDIR /opt/my-app
COPY package.json package-lock.json ./
RUN yarn install

# Copy source code
COPY . /opt/my-app/

# Default command to start the app
CMD ["npx", "expo", "start"]
