import { Router } from "express";
import { UsuariosController } from "../controllers/UsuariosController";
import { authJwt } from "../middlewares/auth.jwt";

const routes = Router();

routes.get("/",authJwt, UsuariosController.listar);
routes.get("/:id", authJwt,UsuariosController.buscar)
routes.post("/", authJwt,UsuariosController.adicionar);
routes.put("/:id", authJwt,UsuariosController.editar);
routes.delete("/:id", authJwt,UsuariosController.deletar);

export default routes;