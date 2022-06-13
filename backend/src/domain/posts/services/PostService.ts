import { Posts } from "../models/posts";

export class PostService {

    async registerPost(data: any) {
        const { content } = data;

        const registeredPost = await Posts.create({
            ...data
        });
        return registeredPost;
    }

}