import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProjetoController{
    async create(req: Request, res: Response){
        try {
            const {
                nome,
                descricaoProjeto,
                descricaoVaga
            } = req.body;
            const reqImage = req.file;
            const image = reqImage?.filename;
            const id = Number(req.params.id);

            await prisma.$connect();
            const resultUsuario = await prisma.usuario.findUnique({
                where:{
                    Id: id
                }
            })

            if(resultUsuario == null){
                return res.status(200).json("Elemento nao encontrado");
            }

            const result = await prisma.projetos.create({
                data:{
                    Id_usuario: id,
                    Foto: `http://localhost:3000/uploads/${image}`,
                    Nome: nome,
                    Descricao_projeto: descricaoProjeto,
                    Descricao_vaga: descricaoVaga
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

    async takeAllProjetos(req: Request, res: Response){
        try {
            await prisma.$connect();

            const allProjetos = await prisma.projetos.findMany();

            await prisma.$disconnect();

            return res.status(200).json(allProjetos);
        } catch (e) {
            if(e instanceof Error){
                return res.status(400).json(e.message);
            }
        }
    }

    async takeAllProjetosUser(req: Request, res: Response){
        const id = Number(req.params.id);

        await prisma.$connect();
        const result = await prisma.projetos.findMany({
            where:{
                Id_usuario: id
            }
        })

        if(result == null){
            return res.status(200).json("Elemento nao encontrado")
        }
        await prisma.$disconnect();

        return res.status(200).json(result);
    }   

    async takeProjetoOne(req: Request, res: Response){
        try {

            const id = Number(req.params.id);

            await prisma.$connect();

            const allProjetos = await prisma.projetos.findMany({
                where:{
                    Id: id
                },
                select:{
                    Id: true,
                    Id_usuario: true,
                    Nome: true,
                    Foto: true,
                    Descricao_projeto: true,
                    Descricao_vaga: true,
                    Usuario:{
                        select:{
                            Foto: true,
                            Nome: true
                        }
                    }
                }
            });

            await prisma.$disconnect();

            return res.status(200).json(allProjetos);
        } catch (e) {
            if(e instanceof Error){
                return res.status(400).json(e.message);
            }
        }
    }

    async takeProjectOneUser(req: Request, res: Response){
        try {
            const id = Number(req.params.id);

            await prisma.$connect();
            const resultUsuario = await prisma.usuario.findUnique({
                where:{
                    Id: id
                }
            })

            if(resultUsuario == null){
                return res.status(200).json("Elemento nao encontrado");
            }

            const result = await prisma.projetos.findMany({
                where:{
                    Id_usuario: id
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
}

export default new ProjetoController();