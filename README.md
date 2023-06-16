# The small Amazon style API


This API is based on the famous Amazon website and uses MongoDB as a database, Node.js as a runtime and Redis as a cache. It allows you to manage products, reviews and users with the following features:
- Manage products: create, edit, delete and display products.
- Manage reviews: create, edit, delete and display reviews for products.
- Manage users: register, log in, edit and view their profile.
- Secure routes: use JWT tokens to protect routes that require authentication.
- Optimize queries: use Redis as a cache for GET queries that return frequently requested data.

## Installation

This API requires dependencies. To install the dependencies needed, run the following command at the project root:
``` bash
npm install express mongoose dotenv bcryptjs jsonwebtoken redis
```
***NOTE: You must also have MongoDB and Redis installed on your machine.***

## Configuration :

Adapt the . env file located at the root of the project :
``` bash
MONGO_URI=mongodb://localhost:27017/auth_api # or the URL of your online MongoDB database
JWT_SECRET=secret123 # or the secret of your choice for the JWT
PORT=3000 # or the port of your choice for the server
```

## Usage :
To start the server, run the following command:

```npm start```


Here is a list of available routes:
- **GET /products :** to get all the products.
- **GET /products/:id :** to get a product by its id.
- **POST /products :** to create a new product (requires a valid JWT token).
- **PUT /products/:id :** to change a product by its id (requires a valid JWT token).
- **DELETE /products/:id :** to delete a product by its id (requires a valid JWT token).
- **GET /reviews/product/:id :** to get all reviews for a product by its id.
- **POST /reviews/product/:id :** to create a new notification for a product by its id (requires a valid JWT token).
- **PUT /reviews/:id :** to change a notice by its id (requires a valid JWT token and be the owner of the notice).
- **DELETE /reviews/:id :** to delete a notice by its id (requires a valid JWT token and be the owner of the notice).
- **POST /users/register :** to register as a user.
- **POST /users/login :** to log in as a user and get a JWT token.
- **GET /users/profile :** to get the profile of a connected user (requires a valid JWT token).
- **PUT /users/profile :** to change the profile of a logged in user (requires a valid JWT token).
