# We import our base operating image. In this case I use node:12 
# as that is the most recent stable release of NodeJS
FROM node:12


# Create a directory where your app will run, inside the docker environment
WORKDIR /usr/src/app

# Copy package.json and package-lock.json these are your depedency definitions 
COPY package*.json ./

# Install your dependencies 
RUN npm install 

# Copy your application into the container directory 
COPY . . 

# Expose whatever port your application is running on. 
# In this case it is port 3000
EXPOSE 5000

# Start our application
CMD ["npm", "run", "start"]