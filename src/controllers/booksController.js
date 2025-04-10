// Não fazemos a importação de "booksModel" pois já utilizamos o prisma para interagir diretamente com o banco
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ROTA - Listar Todos os Livros
export const getAllBooks = async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os livros." });
  }
};

// ROTA - Obter Livro por ID
export const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await prisma.book.findUnique({
      where: { id: parseInt(id) },
    });
    if (!book) {
      return res.status(404).json({ error: "Livro não encontrado." });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o livro." });
  }
};

// ROTA - Criar Novo Livro
export const createBook = async (req, res) => {
  const { title, author, publisher, isbn, category, year, description } = req.body;

  // Validação de campos obrigatórios
  if (!title || !author || !publisher || !isbn || !category) {
    return res.status(400).json({ error: "Todos os campos obrigatórios devem ser preenchidos." });
  }

  try {
    const newBook = await prisma.book.create({
      data: { title, author, publisher, isbn, category, year, description },
    });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o livro." });
  }
};

// ROTA - Atualizar Livro
export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, publisher, isbn, category, year, description } = req.body;

  // Validação de campos obrigatórios
  if (!title || !author || !publisher || !isbn || !category) {
    return res.status(400).json({ error: "Todos os campos obrigatórios devem ser preenchidos." });
  }

  try {
    const updatedBook = await prisma.book.update({
      where: { id: parseInt(id) },
      data: { title, author, publisher, isbn, category, year, description },
    });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o livro." });
  }
};

// ROTA - Deletar Livro
export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.book.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar o livro." });
  }
};