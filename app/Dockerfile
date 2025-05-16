# ✅ Use Node.js 18 for Object.hasOwn support
FROM public.ecr.aws/lambda/nodejs:18

# Set the working directory
WORKDIR /var/task

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy service files
COPY appointment-service.js patient-service.js index.js ./

# Command to run the Lambda handler
CMD ["index.handler"]

