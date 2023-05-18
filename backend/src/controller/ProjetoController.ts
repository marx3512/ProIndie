import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProjetoController{
    async create(req: Request, res: Response){
        try {
            const {
                foto,
                nome,
                descricaoProjeto,
                descricaoVaga
            } = req.body;

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
                    Foto: foto,
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
}

export default new ProjetoController();