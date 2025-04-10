import express from "express";
import { config } from "dotenv";
import booksRoutes from "./routes/booksRoutes.js"; 

config();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

// Rota inicial para verificar se a API está funcionando
app.get("/", (req, res) => {
  res.json({ message: "API de Coleção de Livros funcionando!" });
});

// Registra as rotas de livros com o prefixo /books
app.use("/books", booksRoutes);

// Inicia o servidor
const server = app.listen(port, () => {
  console.log(`🟢 Servidor rodando na porta ${port} 🟢`);
});

// MENSAGENS DE ERRO PERSONALIZADAS

// Captura interrupções (Ctrl+C) ou encerramento do processo
process.on("SIGINT", () => {
  console.log("🔴 Servidor interrompido manualmente (Ctrl+C).");
  server.close(() => {
    console.log("🛑 Servidor encerrado com sucesso.");
    process.exit(0);
  });
});

// Captura erros não tratados
process.on("uncaughtException", (err) => {
  console.error("❌ Erro não tratado:", err);
  server.close(() => {
    console.log("🛑 Servidor encerrado devido a um erro.");
    process.exit(1);
  });
});