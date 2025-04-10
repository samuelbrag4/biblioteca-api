// Array para armazenar os livros em memória
let books = [
  {
    id: 1,
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    publisher: "HarperCollins",
    isbn: "9780261102385",
    category: "Fantasia",
    year: 1954,
    description: "Uma das maiores obras de fantasia de todos os tempos.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publisher: "Secker & Warburg",
    isbn: "9780451524935",
    category: "Distopia",
    year: 1949,
    description: "Um clássico da literatura distópica.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Variável para controlar o próximo ID
let nextId = 3;

class BookModel {
  // Obter todos os livros
  findAll() {
    return books;
  }

  // Obter um livro pelo ID
  findById(id) {
    return books.find((book) => book.id === Number(id)) || null;
  }

  // Criar um novo livro
  create(title, author, publisher, isbn, category, year, description) {
    const newBook = {
      id: nextId++,
      title,
      author,
      publisher,
      isbn,
      category,
      year,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    books.push(newBook);
    return newBook;
  }

  // Atualizar um livro
  update(id, title, author, publisher, isbn, category, year, description) {
    const book = this.findById(id);

    if (!book) {
      return null;
    }

    // Atualize o livro existente com os novos dados
    book.title = title || book.title;
    book.author = author || book.author;
    book.publisher = publisher || book.publisher;
    book.isbn = isbn || book.isbn;
    book.category = category || book.category;
    book.year = year || book.year;
    book.description = description || book.description;
    book.updatedAt = new Date(); // Atualiza a data de modificação

    return book;
  }

  // Remover um livro
  delete(id) {
    const book = this.findById(id);
    if (!book) {
      return null;
    }

    // Filtra o livro a ser removido
    books = books.filter((book) => book.id !== Number(id));

    return true;
  }
}

export default new BookModel();
