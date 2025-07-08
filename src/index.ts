import express from "express";
import "dotenv/config";
import produtosRoute from "./routes/produto.routes";
import { AppDataSource } from "./database/data-source";


AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/produtos", produtosRoute);
    app.listen(process.env.API_PORT, () => {
      console.log("Servidor rodando na porta", process.env.API_PORT);
    });
  })
  .catch((error) => {
    console.log("Banco de dados não conectado", error);
  });