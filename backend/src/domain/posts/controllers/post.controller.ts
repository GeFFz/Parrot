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

  async getAll(req: Request, res: Response) {
    try {
      const Posts = await postService.allPosts();
      return res.status(200).json(Posts);
    } catch (error) {

      return res.status(500).json(error);
    }
  },

  async getOne(req: Request, res: Response) {
    try {
      const Post = await postService.onePost(req.params);
      return res.status(200).json(Post);
    } catch (error) {

      return res.status(500).json(error);
    }
  },

  async getUserPost(req: Request, res: Response) {
    try {
      const userPosts = await postService.postsUser(req.params);      
      return res.status(200).json(userPosts);
    } catch (error) {

      return res.status(500).json(error);
    }
  },

  async update(req: Request, res: Response) {
    try {
      const alteredPost = await postService.alterPost(req.body, req.params);
      if(!alteredPost){
        return res.status(400).json("ID do usuário diferente do esperado!");
      }
      return res.status(200).json(alteredPost);
    } catch (error) {

      return res.status(500).json(error);
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const responseDelete = await postService.excludePost(req.body, req.params);   
      if(responseDelete != 1){
        return res.status(400).json(responseDelete);
      }   
      return res.status(204);
    } catch (error) {

      return res.status(500).json(error);
    }
  },
};