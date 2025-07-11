import { AppDataSource } from "../database/data-source"
import { Usuarios } from "../entities/Usuario";
const bcrypt =  require("bcrypt")
const jwt = require('jsonwebtoken')
const repo = AppDataSource.getRepository(Usuarios);

export const AuthService = {
    async aut(email: string, senha: string) {
        const user = await repo.findOneBy({ email })

        if(user) {
            const passwordCompare = await bcrypt.compare(senha, user.password);

            if(!passwordCompare){
                throw new Error("Dados de login incorretos")
            }

            //criar um token jwt
            const token = jwt.sign(
                {
                    sub: user.id,
                    email: user.email,
                    nome: user.nome
                },
                process.env.JWT_SECRET,
                {expiresIn: process.env.JWT_EXPIRE || '1h'}
            )

            //retornar os dados do usuario com o token
            return{
                user:{
                    id: user.id,
                    nome: user.nome,
                    email: user.email
                },
                token
            }
        }
    }
}
