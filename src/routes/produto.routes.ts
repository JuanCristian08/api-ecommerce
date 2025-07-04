import { Router } from "express";
import { produtoController } from "../controllers/ProdutoController";

const routes = Router();

routes.get("/", produtoController.listar);

export default routes;