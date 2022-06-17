import { Post } from "../../types";
import baseAPI from "./baseAPI";


export const renderPosts = (): Promise<Post[]> => {
    return baseAPI.get<Post[]>("/posts").then(response => response.data);
   }
   
   export const renderPostsById = (id:number):  Promise<Post[]> => {
       return baseAPI.get<Post[]>(`/posts/${id}`).then(response => response.data)
   }
   
   export const createPost = async (post: Omit<Post, "id">) => {
       try{
           const response = await baseAPI.post("/posts", post)
           return response.data;
       } catch(error: any) {
           alert(`Error: ${error.response.data}`)
       }
   }
   