import { Users } from "../models/users";
import bcrypt from "bcryptjs";


export class UserService {

    async registerUser(data: any) {
        const { senha, cep } = data;
        const newSenha = bcrypt.hashSync(senha, 10);

        const registeredUser = await Users.create({
            ...data,
            senha: newSenha
            
        });
        return registeredUser;
    }

    
    async alterUser(data: any, params: any) {
        const { id } = params;
        const { senha} = data;
        const payloadUpdate = {};

        Object.assign(payloadUpdate, data);

        if (senha) {
            const newSenha = bcrypt.hashSync(senha, 10);
            Object.assign(payloadUpdate, { senha: newSenha });
        }

        await Users.update({
            ...payloadUpdate
        }, {
            where: { id },
        });

        const user = await Users.findByPk(id);
        return user;
    }

    async excludeUser(params: any) {
        const { id } = params;
       
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