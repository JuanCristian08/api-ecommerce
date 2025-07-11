import { AppDataSource } from "../database/data-source";
import { Usuarios } from "../entities/Usuario";
const bcrypt = require('bcrypt');
import { Repository } from 'typeorm';

const saltRounds = 10;
const repo: Repository<Usuarios> = AppDataSource.getRepository(Usuarios);

// Tipo para o retorno seguro do usuário (sem password)
type SafeUsuario = Pick<Usuarios, 'id' | 'nome' | 'email'>;

export const UsuarioService = {
    async listar(): Promise<Usuarios[]> {
        return await repo.find({
            select: ['id', 'nome', 'email'] // Seleciona apenas os campos seguros
        });
    },

    async buscar(id: number): Promise<SafeUsuario | null> {
        const usuario = await repo.findOne({ 
            where: { id },
            select: ['id', 'nome', 'email']
        });
        return usuario;
    },

    async adicionar(data: Partial<Usuarios>): Promise<SafeUsuario> {
        if (!data.password) {
            throw new Error('Senha é obrigatória');
        }

        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        const usuarioData = {
            ...data,
            password: hashedPassword
        };

        const usuario = repo.create(usuarioData);
        await repo.save(usuario);

        // Retorna apenas os dados seguros
        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        };
    },

    async editar(id: number, data: Partial<Usuarios>): Promise<SafeUsuario | null> {
        const usuario = await repo.findOneBy({ id });
        if (!usuario) return null;

        if (data.password) {
            data.password = await bcrypt.hash(data.password, saltRounds);
        }

        repo.merge(usuario, data);
        await repo.save(usuario);

        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        };
    },

    async deletar(id: number): Promise<SafeUsuario | null> {
        const usuario = await repo.findOne({ 
            where: { id },
            select: ['id', 'nome', 'email']
        });
        
        if (!usuario) return null;

        await repo.remove(usuario);
        return usuario;
    }
};