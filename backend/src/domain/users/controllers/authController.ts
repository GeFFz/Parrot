const Users = require('../models/users');
const jwt = require('jsonwebtoken');
var secret = require('../config/secret')
const bcrypt = require('bcryptjs');



const authController = {
    async login(req: Request, res: Response) {
       const { email, senha }=req.body

        const User = await Users.findOne({
            where: {
                email,
                senha
            },
        });

        if (!Users) {
            return res.status(401).json('E-mail ou senha inválido, verifique e tente novamente')
        }

        if (bcrypt.compareSync(senha, Users.senha)) {
            return res.status(401).json('Senha invalída');
        }


        const token = jwt.sign({
            id: Users.id,
            email: Users.email,
            nome: Users.nome,
        },
            secret.key
        );

        return res.json(token);
    }
}
module.exports = authController

