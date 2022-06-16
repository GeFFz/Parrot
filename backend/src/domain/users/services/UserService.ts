import { Users } from "../models/users";
import { Posts } from "../../posts/models/posts"
import bcrypt from "bcryptjs";
const jwt = require("jsonwebtoken");
require('dotenv').config()

export class UserService {

    async loginUser(data: any) {
        const { email, password } = data;

        const user = await Users.findOne({
            where:{
                email,
            },
        });
        
        if(!user || !bcrypt.compareSync(password, user.password)){
            return
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email,
            name: user.name,
            apartment: user.apartment,
            permission: user.permission,
        },
        process.env.SECRET_KEY
        );
        return token;
    }

    async registerUser(data: any) {
        const { password } = data;
        const newPassword = bcrypt.hashSync(password, 10);

        const registeredUser = await Users.create({
            ...data,
            password: newPassword,
            permission: 1
        });
        return registeredUser;
    }

    
    async alterUser(data: any, params: any, auth: any ) {
        const { id } = params;
        const { password } = data;
        const payloadUpdate = {};


        if(auth.id != id){
            return
        }
        Object.assign(payloadUpdate, data);

        if (password) {
            const newPassword = bcrypt.hashSync(password, 10);
            Object.assign(payloadUpdate, { password: newPassword });
        }

        await Users.update({
            ...payloadUpdate,
        }, {
            where: { id },
        });

        const user = await Users.findByPk(id);
        return user;
    }

    async excludeUser(params: any, auth: any) {
        const { id } = params;

        if(auth.id != id){
            return
        }

        const userPosts = await Posts.count({
            where:{
                user_id: id
            }
        });

        if(userPosts >=1){
            await Posts.destroy({
                where: {
                    user_id: id,
                },
            });
        }
       
        await Users.destroy({
            where: {
                id,
            },
        });
        return
    }

    async allUsers() {
        const fullUsers = await Users.findAll();
        return fullUsers;
    }

    async oneUser(params: any) {
        const { id } = params;
        const unitUser = await Users.findByPk(id);
        return unitUser;
    }

}