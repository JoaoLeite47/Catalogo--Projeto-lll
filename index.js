import express from "express";
import { routers } from "./src/routes/routers.js";
import path from "path";
import dotenv from "dotenv";

dotenv.config(); // carrega as variáveis de ambiente
const app = express(); // instancia do express

const __dirname = path.resolve(path.dirname("")); // pega o diretório atual

app.use(express.urlencoded({extended: true})) // permite envio de dados via formulário
app.use(express.json()) // permite envio de dados via json

app.set("view engine", "ejs"); // configuração para usar o ejs como view engine
app.use(routers); // configuração para usar o express como rotas
app.use(express.static(path.join(__dirname, "public"))); // configuração para usar o express como rotas

const port = process.env.PORT || 3000; // porta padrão

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`) // mensagem de inicialização
);
