import { NextFunction, Request, Response } from "express";
const jwt = require('jsonwebtoken')

    interface jwtPayload{
        sub: string,
        email: string,
        nome?: string,
        role?: string,
        [key: string] : any
    }

    //adiciona o tipo para o express request
declare module 'express-serve-static-core'{
    interface Request{
        user?: jwtPayload
    }
}

//middlewares
export async function authJwt(req: Request, resp: Response, next: NextFunction) : Promise<void>{
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer")){
        resp.status(401).json({erro: "Token inválido ou inexistente"})
    return
}

    const token = authHeader.split(" ")[1]

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET) as jwtPayload
        req.user = payload
        next()
    }catch(error){
        resp.status(401).json({erro: "Token inválido"})
    }
}