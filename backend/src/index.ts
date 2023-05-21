import express from "express";
import path from "path";
import router from "./routes";
import { config } from "./config/config";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.listen(config.server.port, () => console.log(`Escutando na porta ${config.server.port}`))