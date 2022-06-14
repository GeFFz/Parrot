import { Posts } from "../models/posts";

export class PostService {

    async registerPost(data: any) {
        const { content } = data;

        const registeredPost = await Posts.create({
            ...data
        });
        return registeredPost;
    }

    async allPosts() {
        const fullPosts = await Posts.findAll();
        return fullPosts;
    }

    async onePost(params: any) {
        const { id } = params;

        const uniquePost = await Posts.findByPk(id);
        return uniquePost;
    }

    async postsUser(params: any) {
        const { userID } = params;

        const groupPosts = await Posts.findAll({
            where: {
                user_id: userID
            }
        });
        return groupPosts;
    }

    async alterPost(data: any, params: any) {
        const { id } = params;
        const { user_id } = data;

        const tryModifyPost = await Posts.update({
            ...data,
            
        }, {
            where: {
                id,
                user_id
            },
        });

        if(tryModifyPost != 1){
            return
        }

        const modifyPost = await Posts.findByPk(id);
        return modifyPost;
    }

    async excludePost(data: any, params: any) {
        const { id } = params;
        const { user_id } = data;

        const hasPost = await Posts.count({
          where: {
            id,
            user_id
          },
        });

        if (hasPost != 1) {
        return "ID do usuário diferente do esperado!"
        }

        const deletedPost = await Posts.destroy({
            where: {
                id,
            },
        });
        console.log(deletedPost);
        return deletedPost
    }

}