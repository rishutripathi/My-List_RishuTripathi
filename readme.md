My List Feature Backend
This repository contains the backend implementation for the "My List" feature of an OTT (Over-The-Top) platform. The backend is responsible for managing user lists of favorite movies and TV shows.

Table of Contents
Technologies Used
Setup Instructions
Project Structure
API Endpoints
Testing
Deployment
Contributing
License
Technologies Used
Node.js
Express.js
TypeScript
MongoDB (with Mongoose ODM)
Jest (for testing)
Setup Instructions
To run this project locally, follow these steps:

Clone the repository:
git clone <repository_url>

Install dependencies:
npm install

Set up environment variables:

Create a .env file in the project root and configure the following environment variables:


PORT=3000
MONGO_URI=<your_mongodb_connection_uri>
Run the application:


npm start
This will start the server at http://localhost:8000.

Project Structure
The project structure is organized as follows:

css
Copy code
my-list-feature-backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.ts
│   └── index.ts
├── tests/
├── .env
├── package.json
└── tsconfig.json
src/: Contains source code for controllers, models, routes, and the main application file.
tests/: Contains test files for integration testing.
.env.example: Example environment file template.
package.json: Project configuration and dependencies.
tsconfig.json: TypeScript configuration file.
API Endpoints
Add Item to My List:

POST /mylist/add
Request Body: { userId: string, itemId: string }
Remove Item from My List:

DELETE /mylist/remove/:userId/:itemId
List User's Items:

GET /mylist/:userId
Testing
The project includes integration tests using Jest and Supertest. To run tests: