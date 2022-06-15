const express = require("express");
const routes = express.Router();

import { PostController } from '../domain/posts/controllers/post.controller';
import { UserController } from '../domain/users/controllers/users.controller';
import { UserValidation } from '../domain/users/validations'

routes.post("/posts", PostController.create);
routes.get("/posts", PostController.getAll);
routes.get("/posts/:id", PostController.getOne);
routes.get("/posts/user/:userID", PostController.getUserPost);
routes.put("/posts/:id", PostController.update);
routes.delete("/posts/:id", PostController.delete);



routes.post("/users", UserController.create);
routes.get("/users",  UserController.getAll);
routes.get("/users/:id", UserValidation.getOne, UserController.getOne);
routes.put("/users/:id", UserValidation.update, UserController.update);
routes.delete("/users/:id", UserValidation.destroy, UserController.delete);




module.exports = routes;
