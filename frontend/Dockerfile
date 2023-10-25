# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3001

# Define the command to run your app
CMD ["npm", "start"]
