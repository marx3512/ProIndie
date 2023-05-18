import { Router } from "express";
import CadastroController from "../../controller/CadastroController";

const cadastroRouters = Router();

cadastroRouters.get("/", CadastroController.takeAllUsers);
cadastroRouters.post("/", CadastroController.create);
cadastroRouters.put("/:id", CadastroController.update);

export default cadastroRouters;