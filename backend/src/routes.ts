import { Router } from "express";
import multer from "multer";

import cadastroRouters from "./routes/cadastro";
import projetoRouters from "./routes/projeto";
import upload from "./config/upload";

const router = Router();
const uploadConfig = multer(upload);

router.use("/usuario", uploadConfig.single("image"), cadastroRouters);
router.use("/projeto", uploadConfig.single("image"), projetoRouters);

export default router;