import { Router } from "express";
import CadastroController from "../../controller/CadastroController";

const cadastroRouters = Router();

cadastroRouters.get("/", CadastroController.takeAllUsers);
cadastroRouters.get("/pegarUmUsuario/:id", CadastroController.takeOneUser);
cadastroRouters.post("/logar", CadastroController.login);
cadastroRouters.post("/", CadastroController.create);
cadastroRouters.put("/:id", CadastroController.update);

export default cadastroRouters;