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
                descricao,
                linkGithub,
                linkTwitter,
                linkInstagram
            } = req.body;
            const reqImage = req.file;
            const image = reqImage?.filename;

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
                descricao,
                linkGithub,
                linkTwitter,
                linkInstagram
            } = req.body;

            const reqImage = req.file;
            const image = reqImage?.filename;
            
            console.log(req.body);
            console.log(image);
            /*const { body } = req;
            const keys = Object.keys(body);

            let updateUsuario = atualizarCampos(keys, body);
            console.log(updateUsuario);*/

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

            if(image == undefined){
                console.log("tes");
                const result = await prisma.usuario.update({
                    where:{
                        Id: id
                    },
                    data:{
                        Nome: nome,
                        //Foto: `http://localhost:3000/uploads/${image}`,
                        Descricao: descricao,
                        linkGithub: linkGithub,
                        linkTwitter: linkTwitter,
                        linkInstagram: linkInstagram
                    }
                })

                return res.status(200).json(result);

            }
            else{
                console.log("testes");
                const result = await prisma.usuario.update({
                    where:{
                        Id: id
                    },
                    data:{
                        Nome: nome,
                        Foto: `http://localhost:3000/uploads/${image}`,
                        Descricao: descricao,
                        linkGithub: linkGithub,
                        linkTwitter: linkTwitter,
                        linkInstagram: linkInstagram
                    }
                })

                return res.status(200).json(result);
            }

            await prisma.$disconnect();

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

function atualizarCampos(keys: string[], body: any){
    let updateFinal = {};
    
    for(let i = 0; i < keys.length; i +=1) {
        const key = keys[i];

        updateFinal = { ...updateFinal, [key]: body[key] }
    }

    return updateFinal;
}

export default new CadastroController();