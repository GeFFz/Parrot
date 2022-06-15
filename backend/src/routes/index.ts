const express = require("express");
const auth = require('../middlewares/auth')
const routes = express.Router();

import { PostController } from '../domain/posts/controllers/post.controller';
import { PostValidation } from '../domain/posts/validations';
import { UserController } from '../domain/users/controllers/users.controller';
import { UserValidation } from '../domain/users/validations'


routes.post("/posts", auth, PostValidation.create, PostController.create);
routes.get("/posts", auth, PostController.getAll);
routes.get("/posts/:id", auth, PostValidation.getOne, PostController.getOne);
routes.get("/posts/user/:userID", auth, PostValidation.getUserPost, PostController.getUserPost);
routes.put("/posts/:id", auth, PostValidation.update, PostController.update);
routes.delete("/posts/:id", auth, PostValidation.destroy, PostController.delete);


routes.post("/login", UserController.login);
routes.post("/users", UserController.create);
routes.get("/users", auth,  UserController.getAll);
routes.get("/users/:id", auth, UserValidation.getOne, UserController.getOne);
routes.put("/users/:id", auth, UserValidation.update, UserController.update);
routes.delete("/users/:id", auth, UserValidation.destroy, UserController.delete);


module.exports = routes;