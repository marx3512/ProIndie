import { Router } from "express";
import ProjetoController from "../../controller/ProjetoController";

const projetoRouters = Router();

projetoRouters.post("/:id", ProjetoController.create);

export default projetoRouters;