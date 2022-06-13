import { Request, Response } from "express";
import { postService } from "../services";

export const PostController = {
  async create(req: Request, res: Response) {
    try {
      const newPost = await postService.registerPost(req.body);
      return res.status(201).json(newPost);
    } catch (error) {

      return res.status(500).json(error);
    }
  },  
};