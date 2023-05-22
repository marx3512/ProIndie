import { Router } from "express";
import ProjetoController from "../../controller/ProjetoController";

const projetoRouters = Router();

projetoRouters.get("/", ProjetoController.takeAllProjetos);
projetoRouters.get("/:id", ProjetoController.takeProjectOneUser);
projetoRouters.get("/pegarUmProjeto/:id", ProjetoController.takeProjetoOne);
projetoRouters.post("/:id", ProjetoController.create);

export default projetoRouters;