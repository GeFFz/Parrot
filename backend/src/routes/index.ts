const express = require("express");
const routes = express.Router();

import { PostController } from '../domain/posts/controllers/post.controller';


routes.post("/posts", PostController.create);
routes.get("/posts", PostController.getAll);
routes.get("/posts/:id", PostController.getOne);
routes.get("/posts/user/:userID", PostController.getUserPost);
routes.put("/posts/:id", PostController.update);
routes.delete("/posts/:id", PostController.delete);


module.exports = routes;
