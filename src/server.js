import express from "express";
import { config } from "dotenv";

config(); 
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json()); 

app.get("/", (req, res) => {
  res.json({ message: "API de Coleção de Animes funcionando!" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});