"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const ProdutoService_1 = require("../services/ProdutoService");
exports.ProdutoController = {
    async listar(req, res) {
        try {
            const produtos = await ProdutoService_1.ProdutoService.listar();
            res.status(200).json(produtos);
        }
        catch (error) {
            res.status(500).json({ erro: "erro ao listar", mensagem: error });
        }
    },
    criar: async (req, res) => {
        try {
            const produtos = await ProdutoService_1.ProdutoService.criar(req.body);
            res.status(201).json(produtos);
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao criar o recurso" });
        }
    },
    async buscar(req, res) {
        const id = Number(req.params.id);
        const produto = await ProdutoService_1.ProdutoService.buscarPorId(id);
        if (!produto)
            res.status(404).json({ erro: "Produto não encontrado" });
        res.status(200).json(produto);
    },
    async atualizar(req, res) {
        const id = Number(req.params.id);
        const atualizado = await ProdutoService_1.ProdutoService.atualizar(id, req.body);
        if (!atualizado)
            res.status(404).json({ erro: "Produto não encontrado" });
        res.status(200).json(atualizado);
    },
    async deletar(req, res) {
        const id = Number(req.params.id);
        const removido = await ProdutoService_1.ProdutoService.deletar(id);
        if (!removido)
            res.status(404).json({ error: "produto não encontrado" });
        res.status(200).json({ status: "produto removido com sucesso", produto: removido });
    }
};
