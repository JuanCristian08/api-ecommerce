import { Request, Response } from 'express';
export const produtoController = {

    async listar(req: Request, res: Response) {
        res.status(200).json({ message: 'Sucesso!' });
    },

    async criar(req: Request, res: Response) {
        res.status(200).json({ message: 'Sucesso!' });
    },

    async buscar(req: Request, res: Response) {
        res.status(200).json({ message: 'Sucesso!' });
    },

    async atualizar(req: Request, res: Response) {
        res.status(200).json({ message: 'Sucesso!' });
    },

    async deletar(req: Request, res: Response) {
        res.status(200).json({ message: 'Sucesso!' });
    }
}
