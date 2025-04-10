import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class BookModel {
  // MODELO -> Obter todos os livros
  async findAll() {
    return await prisma.book.findMany();
  }

  // MODELO -> Obter livro por ID
  async findById(id) {
    return await prisma.book.findUnique({
      where: { id: parseInt(id) },
    });
  }

  // MODELO -> Criar livro
  async create(title, author, publisher, isbn, category, year, description) {
    return await prisma.book.create({
      data: { title, author, publisher, isbn, category, year, description },
    });
  }

  // MODELO -> Atualizar livro
  async update(
    id,
    title,
    author,
    publisher,
    isbn,
    category,
    year,
    description
  ) {
    return await prisma.book.update({
      where: { id: parseInt(id) },
      data: { title, author, publisher, isbn, category, year, description },
    });
  }

  // MODELO -> Deletar livro
  async delete(id) {
    return await prisma.book.delete({
      where: { id: parseInt(id) },
    });
  }
}

export default new BookModel();
