import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";

const notFound = "Recusro não encontrado"
const serverError = "Erro ao realizar a operação"

export const UsuarioController = {

    async getAll(req: Request, res: Response) : Promise<void>{
        try{
            const user = await UsuarioService.getAll()
            res.json(user)

        }catch(error){
        res.status(500).json({error: serverError, desc: error})
        }
    },

    async getOne(req: Request, res: Response) : Promise<void>{
        try{
            const user = UsuarioService.getOne(Number(req.params.id))
            if(!user)
                res.status(404).json({error: notFound})

            res.json(user)
        }catch(error){
             res.status(500).json({error: serverError, desc : error})
        }
    },

    async create(req: Request, res: Response) : Promise<void>{
        try{
            const user = await UsuarioService.create(req.body)
            res.status(201).json(user)
        }catch(error){
            res.status(500).json({error: serverError, desc: error})
        }

    },

    async update(req: Request, res: Response) : Promise<void>{
        try{
            const updateData = await UsuarioService
            .update(Number(req.params.id), req.body)

            if(!updateData)
                res.status(404).json({error: notFound})
            
            res.json("Recurso editado com sucesso")
        }catch(error){
           res.status(500).json({error: serverError, desc: error})
        }
    },

    async delete(req: Request, res: Response) : Promise<void>{
        try{
            const delUser = await UsuarioService
            .delete(Number(req.params.id))

            if(!delUser)
                res.status(404).json({error: notFound})

            res.json("Recurso deletado com Sucesso")
        }catch(error){
              res.status(500).json({error: serverError, desc : error})
        }
    },
}