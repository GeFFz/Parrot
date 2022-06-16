import { Request, Response } from "express";
import { postService } from "../services";

interface AuthRequest extends Request{
  auth: any
}

export const PostController = {
  async create(req: AuthRequest, res: Response) {
    try {
      const newPost = await postService.registerPost(req.body, req.auth);
      console.log(req.auth);
      return res.status(201).json(newPost);
    } catch (error) {

      return res.status(500).json(error);
    }
  },  

  async getAll(req: AuthRequest, res: Response) {
    try {
      const Posts = await postService.allPosts();
      return res.status(200).json(Posts);
    } catch (error) {

      return res.status(500).json(error);
    }
  },

  async getOne(req: AuthRequest, res: Response) {
    try {
      const Post = await postService.onePost(req.params);
      return res.status(200).json(Post);
    } catch (error) {

      return res.status(500).json(error);
    }
  },

  async getUserPost(req: AuthRequest, res: Response) {
    try {
      const userPosts = await postService.postsUser(req.params, req.auth);      
      return res.status(200).json(userPosts);
    } catch (error) {

      return res.status(500).json(error);
    }
  },

  async update(req: AuthRequest, res: Response) {
    try {
      const alteredPost = await postService.alterPost(req.body, req.params, req.auth);
      if(!alteredPost){
        return res.status(400).json("ID do usuário diferente do esperado!");
      }
      return res.status(200).json(alteredPost);
    } catch (error) {

      return res.status(500).json(error);
    }
  },

  async delete(req: AuthRequest, res: Response) {
    try {
      const responseDelete = await postService.excludePost(req.params, req.auth);   
      if(responseDelete != 1){
        return res.status(400).json(responseDelete);
      }   
      return res.sendStatus(204);
    } catch (error) {

      return res.status(500).json(error);
    }
  },
};