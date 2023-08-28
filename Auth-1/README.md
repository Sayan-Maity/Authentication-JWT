# Authentication (JWT)

## Tech Stacks Used
- NodeJS
- ExpressJS
- DB.js

## Routes Used
Auth Routes
- ```/api/auth/signup```   : Register a new user
- ```/api/auth/login```    : Login a user
- ```/api/auth/getUsers``` : Get all users

Private/Public Routes
- ```/posts/private```     : Private route (only authorized users can access)
- ```/posts/public```      : Public route (accessible to all users)