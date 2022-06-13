const express = require("express");
const routes = express.Router();

import { PostController } from '../domain/posts/controllers/post.controller';


routes.post(
  "/post",
  PostController.create
);


module.exports = routes;
