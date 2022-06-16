import { Posts } from "../models/posts";

export class PostService {

    async registerPost(data: any, auth: any) {
        const registeredPost = await Posts.create({
            ...data,
            user_id: auth.id
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

    async postsUser(params: any, auth: any) {
        const { userID } = params;
        if(userID != auth.id){
            return "Erro de autenticação algo assim"
        }

        const groupPosts = await Posts.findAll({
            where: {
                user_id: userID
            }
        });
        return groupPosts;
    }

    async alterPost(data: any, params: any, auth: any) {
        const { id } = params;

        const tryModifyPost = await Posts.update({
            ...data,            
        }, {
            where: {
                id,
                user_id: auth.id
            },
        });

        if(tryModifyPost != 1){
            return
        }

        const modifyPost = await Posts.findByPk(id);
        return modifyPost;
    }

    async excludePost(params: any, auth: any) {
        const { id } = params;

        const hasPost = await Posts.count({
          where: {
            id,
            user_id: auth.id
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
        return deletedPost
    }

}