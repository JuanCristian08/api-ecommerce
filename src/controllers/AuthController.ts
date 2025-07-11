import { Request, Response } from "express"
import { AuthService } from "../services/AuthService";
export const AuthController = {
    async login(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body

        try {
            const auth = AuthService.auth(email, password)
            res.json(auth)
        } catch (error: any) {
            res.status(401).json({erro: error.message})
            console.log(error)
        }
    }
}