import BookModel from "../models/bookModel.js";

// Criação da Classe BooksController -> Ponte Entre Rotas e Modelo (Controlador)
class BooksController {
  // ROTA -> Listar todos os livros
  async getAllBooks(req, res) {
    try {
      const books = await BookModel.findAll();
      res.status(200).json(books);
    } catch (error) {
      console.error("Erro ao buscar os livros:", error);
      res.status(500).json({ error: "Erro ao buscar os livros." });
    }
  }

  // ROTA -> Listar livro por ID
  async getBookById(req, res) {
    try {
      const { id } = req.params;
      const book = await BookModel.findById(id);

      if (!book) {
        return res.status(404).json({ error: "Livro não encontrado." });
      }

      res.status(200).json(book);
    } catch (error) {
      console.error("Erro ao buscar o livro:", error);
      res.status(500).json({ error: "Erro ao buscar o livro." });
    }
  }

  // ROTA -> Criar livro
  async createBook(req, res) {
    try {
      const { title, author, publisher, isbn, category, year, description } =
        req.body;

      if (!title || !author || !publisher || !isbn || !category) {
        return res
          .status(400)
          .json({
            error: "Todos os campos obrigatórios devem ser preenchidos.",
          });
      }

      const newBook = await BookModel.create(
        title,
        author,
        publisher,
        isbn,
        category,
        year,
        description
      );
      res.status(201).json(newBook);
    } catch (error) {
      console.error("Erro ao criar o livro:", error);
      res.status(500).json({ error: "Erro ao criar o livro." });
    }
  }

  // ROTA -> Atualizar livro
  async updateBook(req, res) {
    try {
      const { id } = req.params;
      const { title, author, publisher, isbn, category, year, description } =
        req.body;

      const updatedBook = await BookModel.update(
        id,
        title,
        author,
        publisher,
        isbn,
        category,
        year,
        description
      );

      if (!updatedBook) {
        return res.status(404).json({ error: "Livro não encontrado." });
      }

      res.status(200).json(updatedBook);
    } catch (error) {
      console.error("Erro ao atualizar o livro:", error);
      res.status(500).json({ error: "Erro ao atualizar o livro." });
    }
  }

  // ROTA -> Remover livro
  async deleteBook(req, res) {
    try {
      const { id } = req.params;

      const result = await BookModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Livro não encontrado." });
      }

      res.status(204).send();
    } catch (error) {
      console.error("Erro ao remover o livro:", error);
      res.status(500).json({ error: "Erro ao remover o livro." });
    }
  }
}

export default new BooksController();
