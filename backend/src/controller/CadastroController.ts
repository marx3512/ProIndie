import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CadastroController{
    async create(req: Request, res: Response){
        try {
            const {
                nome,
                email,
                senha,
                ocupacoes,
                foto
            } = req.body;

            await prisma.$connect();

            const result = await prisma.usuario.create({
                data: {
                    Nome: nome,
                    Email: email,
                    Senha: senha,
                    Ocupacao: ocupacoes,
                    Foto: foto
                }
            })

            await prisma.$disconnect();

            return res.status(200).json(result);
        } catch (e) {
            if(e instanceof Error){
                return res.status(400).json(e.message);
            }
        }
    }

    async update(req: Request, res: Response){
        try {
            const {
                nome,
                email
            } = req.body;

            const id = Number(req.params.id);
            
            await prisma.$connect();

            const usuario = await prisma.usuario.findUnique({ 
                where:{
                    Id: id
                } 
            })

            if(!usuario){
                return res.status(200).json("Elemento nao encontrado");
            }

            const result = await prisma.usuario.update({
                where:{
                    Id: id
                },
                data:{
                    Nome: nome,
                    Email: email
                }
            })

            await prisma.$disconnect();

            return res.status(200).json(result);
        } catch (e) {
            if(e instanceof Error){
                return res.status(400).json(e.message);
            }
        }
    }

    async takeAllUsers(req: Request, res: Response){
        try {
            await prisma.$connect();

            const allUsers = await prisma.usuario.findMany();

            await prisma.$disconnect();

            return res.status(200).json(allUsers);
        } catch (e) {
            if(e instanceof Error){
                return res.status(400).json(e.message);
            }
        }
    }
}

export default new CadastroController();