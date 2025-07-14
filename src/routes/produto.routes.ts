import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";
import { authJwt } from "../middlewares/auth.jwt";

const routes = Router()

routes.get("/", authJwt, ProdutoController.listar)
routes.get("/:id", authJwt,ProdutoController.buscar)
routes.post("/", authJwt,ProdutoController.criar)
routes.put("/:id", authJwt,ProdutoController.atualizar)
routes.delete("/:id", authJwt,ProdutoController.deletar)

export default routes