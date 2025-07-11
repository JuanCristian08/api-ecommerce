import express from "express";
import "reflect-metadata";
import produtosRoutes from "./routes/produto.routes";
import usuariosRoutes from "./routes/usuarios.routes";
import routeLogin from './routes/auth.routes'
import { AppDataSource } from "./database/data-source";
require("dotenv").config();


AppDataSource.initialize()
        .then(() => {

            const app = express();
            app.use(express.json()); // define transmissão de dados em JSON
            app.use("/produtos", produtosRoutes); // acessa 'produtosRoutes' quando url for => /produtos
            app.use("/usuarios", usuariosRoutes);
            app.use("/usuarios", usuariosRoutes); 
            app.use("/login", routeLogin)  
            app.listen(process.env.API_PORT, () => {
                console.log("Servidor Rodando na porta", process.env.API_PORT);
            })

            console.log("Banco de dados conectado com sucesso");    
            
        })
        .catch((error) => {
            console.error("Banco de dados não está conectado");
        });