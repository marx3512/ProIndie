import express from "express";
import router from "./routes";
import { config } from "./config/config";

const app = express();

app.use(express.json());
app.use(router);

app.listen(config.server.port, () => console.log(`Escutando na porta ${config.server.port}`))