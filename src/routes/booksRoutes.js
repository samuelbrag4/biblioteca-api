import express from "express";
import booksController from "../controllers/booksController.js";

const router = express.Router();

// Rotas para a API de livros
// GET /books - Listar todos os livros
router.get("/", booksController.getAllBooks);

// GET /books/:id - Obter um livro pelo ID
router.get("/:id", booksController.getBookById);

// POST /books - Criar um novo livro
router.post("/", booksController.createBook);

// PUT /books/:id - Atualizar um livro
router.put("/:id", booksController.updateBook);

// DELETE /books/:id - Remover um livro
router.delete("/:id", booksController.deleteBook);

export default router;