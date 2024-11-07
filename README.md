# Task-Manager
 
# Task Management API

This project provides a simple Task Management API built with Node.js, Express, and MongoDB. It allows users to perform CRUD operations on tasks.

## Features
- Create new tasks
- Retrieve all tasks
- Update existing tasks
- Delete tasks

## Setup Instructions

### Prerequisites:
1. Node.js (v14 or higher)
2. MongoDB instance running locally or via a cloud provider (MongoDB Atlas)

### Steps to Setup:
1. Clone the repository:
   git clone https://github.com/your-username/task-management-api.git
   cd task-management-api

### Install dependencies:
npm install

### Set up your environment variables:

Create a .env file in the root directory and add your MongoDB connection string.
Example:
env
MONGO_URI=mongodb://localhost:27017/taskDB

### Run the application:

npm start
The server will run on http://localhost:5000.

### API Documentation
For detailed API endpoints, see the API Documentation.

Folder Structure

task-management-api/
├── backend/

│   ├── config/   ## Configuration files like DB connection
│   ├── models/     ## MongoDB models (e.g., Task model)
│   ├── routes/  ## Express route handlers (e.g., taskRoutes.js)
│   ├── server.js  ## Main server file
│   └── .env     ## Environment variables
└── package.json ## NPM package file

### Approach

Backend Framework: Express.js is used for building the RESTful API. It is easy to use and provides powerful routing capabilities.
Database: MongoDB is used as the database to store task information. The Mongoose ODM is used to interact with the database.
CRUD Operations: The API supports basic CRUD (Create, Read, Update, Delete) operations on tasks.
Environment Variables: Sensitive data like the MongoDB connection string is stored in the .env file.
CORS: Cross-origin resource sharing (CORS) is enabled to allow requests from any origin.
