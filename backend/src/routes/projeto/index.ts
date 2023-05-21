import { Router } from "express";
import ProjetoController from "../../controller/ProjetoController";

const projetoRouters = Router();

projetoRouters.get("/", ProjetoController.takeAllProjetos);
projetoRouters.get("/:id", ProjetoController.takeProjectOneUser);
projetoRouters.post("/:id", ProjetoController.create);

export default projetoRouters;