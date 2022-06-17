import { useEffect, useState } from "react";
import { renderPosts, renderPostsById } from "../services/API/posts";
import { Post } from "../types";

export const usePost = () => {
    const [postList, setPostList] = useState<Post[]>([] as Post[]);

    useEffect(() => {
        renderPosts().then(posts => setPostList(posts));
    })

    return postList
}




export const usePostId = () => {
    const [postListById, setPostListByID] = useState<Post[]>([] as Post[]);

    useEffect(() => {
        let userposts = async (id: number) => {
            renderPostsById(id).then(posts => setPostListByID(posts))
        }
    })

    return postListById
}