const express = require("express");
const routes = express.Router();
const authLoginValidation = require('../validations/auth/login');
const auth = require('../middlewares/auth');

import { PostController } from '../domain/posts/controllers/post.controller';
import { PostValidation } from '../domain/posts/validations';
import { UserController } from '../domain/users/controllers/users.controller';
import { UserValidation } from '../domain/users/validations'

routes.post("/posts", PostValidation.create, PostController.create);
routes.get("/posts", PostController.getAll);
routes.get("/posts/:id", PostValidation.getOne, PostController.getOne);
routes.get("/posts/user/:userID", PostValidation.getUserPost, PostController.getUserPost);
routes.put("/posts/:id", PostValidation.update, PostController.update);
routes.delete("/posts/:id", PostValidation.destroy, PostController.delete);



routes.post("/users", auth.UserController.create);
routes.get("/users",  auth.UserController.getAll);
routes.get("/users/:id", auth.UserValidation.getOne, UserController.getOne);
routes.put("/users/:id", auth.UserValidation.update, UserController.update);
routes.delete("/users/:id", auth.UserValidation.destroy, UserController.delete);


routes.post('/login', authLoginValidation, authController.login);

module.exports = routes;
