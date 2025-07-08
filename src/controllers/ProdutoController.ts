import { Request, Response } from "express"
import { ProdutoService } from "../services/ProdutoService"

export const ProdutoController = {
    
    async listar(req: Request, res: Response): Promise<void>{
        try{
            const produtos = await ProdutoService.listar()
            res.status(200).json(produtos)
        }catch (error){
            res.status(500).json({erro: "erro ao listar", mensagem:error})
        }
    },

    criar: async(req: Request, res: Response): Promise<void> =>{
       try{
          const produtos = await ProdutoService.criar(req.body)
          res.status(201).json(produtos)
       }catch (error) {
          res.status(500).json({error: "Erro ao criar o recurso"})
       }
    },

    async buscar(req: Request, res: Response): Promise<void>{
      const id = Number(req.params.id)
      const produto = await ProdutoService.buscarPorId(id)
      if(!produto) res.status(404).json({erro: "Produto não encontrado"})
        res.status(200).json(produto)

    },
    
    async atualizar(req: Request, res: Response): Promise<void>{
        const id = Number(req.params.id)
        const atualizado = await ProdutoService.atualizar(id, req.body)
        if(!atualizado) res.status(404).json({erro: "Produto não encontrado"})
          
          res.status(200).json(atualizado)
    },

    async deletar(req: Request, res: Response): Promise<void>{
      const id = Number(req.params.id)
      const removido = await ProdutoService.deletar(id)
      if(!removido) res.status(404).json({error: "produto não encontrado"})

        res.status(200).json({status: "produto removido com sucesso", produto: removido})
    }

}