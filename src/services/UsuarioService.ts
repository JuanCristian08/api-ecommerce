import { AppDataSource } from "../database/data-source";
import { Usuarios } from "../entities/Usuario";
const bcrypt = require('bcrypt')
const saltRounds = 10

const repo = AppDataSource.getRepository(Usuarios)

type UsuarioRetorno = {
    id: number,
    nome: String,
    email: String
}

export const UsuarioService    = {

    async getAll() : Promise<Usuarios[]>{
        return await repo.find({
            select: ["id", "nome", "email"]
    })
    },

    async getOne(id: number) : Promise<Usuarios | null>{
        return await repo.findOneBy({ id })
    },

    async create(data: Partial<Usuarios>) : Promise<UsuarioRetorno>{
        data.password = await bcrypt.hash(data.password, saltRounds)
        const user = repo.create(data)
        await repo.save(user)
        return {
            id: user.id,
            nome: user.nome,
            email: user.email,
        };
    },

    async update(id : number, data: Partial<Usuarios>): Promise<UsuarioRetorno | null>{
        const user = await repo.findOneBy({ id })
        if(!user)
            return null

        repo.merge(user, data)
        await repo.save(user)
          return {
            id: user.id,
            nome: user.nome,
            email: user.email,
        };
    },

    async delete(id: number) : Promise<Usuarios | null>{
        const user = await repo.findOneBy({ id })
        if(!user)
            return null

        await repo.remove(user)
        return user
    }
}

///