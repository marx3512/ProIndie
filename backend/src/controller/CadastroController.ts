import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function conectar(){
    await prisma.$connect();

    await prisma.$disconnect();
}

class CadastroController{
    async create(req: Request, res: Response){
        try {
            conectar();

            const {
                foto,
                nome,
                email,
                senha,
                ocupacoes,
                descricao,
                linkGithub,
                linkTwitter,
                linkInstagram
            } = req.body;
            const reqImage = req.file;
            const image = reqImage?.filename;

            await prisma.$connect();

            const result = await prisma.usuario.create({
                data: {
                    Nome: nome,
                    Email: email,
                    Senha: senha,
                    Ocupacao: ocupacoes,
                    Foto: `http://localhost:3000/uploads/${image}`,
                    Descricao: descricao,
                    linkGithub: linkGithub,
                    linkTwitter: linkTwitter,
                    linkInstagram: linkInstagram
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

    async login(req: Request, res: Response){
        const {
            email,
            senha
        } = req.body;

        console.log(senha);

        await prisma.$connect();

        const result = await prisma.usuario.findUnique({
            where:{
                Email: email
            },
            select:{
                Id: true,
                Email: true,
                Senha: true
            }
        })

        console.log(result);

        await prisma.$disconnect();

        if(result == null){
            return res.status(200).json("Usuario nao encontrado");
        }

        else if(result.Senha != String(senha)){
            return res.status(200).json("Senha incorreta");
        }

        return res.status(200).json(result);
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

    async takeOneUser(req: Request, res: Response){
        try {
            const id = Number(req.params.id);

            await prisma.$connect();
            const result = await prisma.usuario.findUnique({
                where:{
                    Id: id
                }
            })

            if(result == null){
                return res.status(200).json("Elemento nao encontrado");
            }

            await prisma.$disconnect();

            return res.status(200).json(result);

        } catch (e) {
            if(e instanceof Error){
                return res.status(400).json(e.message);
            }
        }
    }
}

export default new CadastroController();