import axios from "axios";
import { Post } from "../../types";
import baseAPI from "./baseAPI";
import { loginUsuario } from "./user";

// const token = loginUsuario;
// console.log(token);

const baseAPIPost = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "content-type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImVtYWlsIjoidmluaWNpdXNAZW1haWwuY29tIiwibmFtZSI6InZpbmljaXVzIiwiYXBhcnRtZW50Ijo2LCJwZXJtaXNzaW9uIjoxLCJpYXQiOjE2NTU0MzY1MTZ9.sNb4U4o6FSc-oQCKVTojx1Hqf1dkNa9SAMKvMbs71R4"
    },
});

export const renderPosts = (): Promise<Post[]> => {
    return baseAPIPost.get<Post[]>("/posts").then(response => response.data);
   }
   
   export const renderPostsById = (id:number):  Promise<Post[]> => {
       return baseAPIPost.get<Post[]>(`/posts/${id}`).then(response => response.data)
   }
   
   export const createPost = async (post: Omit<Post, "id">) => {
       try{
           const response = await baseAPIPost.post("/posts", post)
           console.log(`Erro vinicius: ${response.data}  /////` + Request);
           return response.data;
       } catch(error: any) {
           alert(`Error: ${error.response.data}`)
       }
   }
   