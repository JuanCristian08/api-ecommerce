import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { authJwt } from "../middlewares/auth.jwt";

const routes = Router();

routes.get("/",authJwt, UsuarioController.getAll);
routes.get("/:id", UsuarioController.getOne)
routes.post("/", UsuarioController.create);
routes.put("/:id", UsuarioController.update);
routes.delete("/:id", UsuarioController.delete);

export default routes;