import { Router } from "express";

import cadastroRouters from "./routes/cadastro";
import projetoRouters from "./routes/projeto";

const router = Router();

router.use("/usuario", cadastroRouters);
router.use("/projeto", projetoRouters);

export default router;