import express from "express";
require("dotenv").config()
import 'dotenv/config';
import produtosRoute from "./routes/produto.routes"

const app = express()
app.use(express.json())

app.use("/produtos", produtosRoute)

app.listen(process.env.API_PORT, () => {
    console.log("servidor rodando na porta",process.env.API_PORT)
})