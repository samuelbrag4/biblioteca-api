# 📚 Sistema de Gerenciamento de Acervo Bibliográfico

![Banner do Projeto](./assets/banner.png)

Este projeto é uma API backend desenvolvida para gerenciar o acervo de livros de uma biblioteca municipal. A API permite que bibliotecários realizem operações de cadastro, consulta, atualização e remoção de livros.

## 🌟 Livros Disponíveis no Sistema

A API já possui alguns livros cadastrados para facilitar os testes e a utilização inicial do sistema. Esses livros incluem obras clássicas e populares, como:

- **1984** de George Orwell  
- **O Hobbit** de J.R.R. Tolkien  
- **Dom Quixote** de Miguel de Cervantes  

Esses registros podem ser consultados, atualizados ou removidos conforme necessário.

## 🌐 Link do Repositório

[🔗 GitHub - biblioteca-api](https://github.com/samuelbrag4/biblioteca-api.git)

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM

## 📂 Estrutura do Projeto

```
biblioteca-api
├── assets
├── prisma
│   ├── schema.prisma
│   └── migrations
├── src
│   ├── controllers
│   │   └── booksController.js
│   ├── models
│   │   └── bookModel.js
│   ├── routes
│   │   └── booksRoutes.js
│   ├── app.js
│   └── server.js
├── .env
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## 🚀 Como Instalar e Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/samuelbrag4/biblioteca-api.git
   cd biblioteca-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:

   - Renomeie o arquivo `.env.example` para `.env` e preencha com as informações necessárias.

4. Execute as migrações do Prisma:

   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

## 🧪 Testando com Postman ou Thunder Client

### Exemplo de Requisição - Listar Livros

- **Método:** GET
- **URL:** `http://localhost:PORT/books`

### Exemplo de Requisição - Listar Livros Pelo ID

- **Método:** GET
- **URL:** `http://localhost:PORT/books/:id`

### Exemplo de Requisição - Adicionar Livro

- **Método:** POST
- **URL:** `http://localhost:PORT/books`
- **Body (raw - JSON):**
  ```json
  {
    "title": "1984",
    "author": "George Orwell",
    "publisher": "Secker & Warburg",
    "isbn": "9780451524935",
    "category": "Distopia",
    "year": 1949,
    "description": "Um clássico da literatura distópica."
  }
  ```

### Exemplo de Requisição - Atualizar Livro

- **Método:** PUT
- **URL:** `http://localhost:PORT/books/:id`
- **Body (raw - JSON):**
  ```json
  {
    "title": "O Hobbit",
    "author": "J.R.R. Tolkien",
    "publisher": "HarperCollins",
    "isbn": "9780261102217",
    "category": "Fantasia",
    "year": 1937,
    "description": "A aventura que precede O Senhor dos Anéis."
  }
  ```

### Exemplo de Requisição - Remover Livro

- **Método:** DELETE
- **URL:** `http://localhost:PORT/books/:id`

## 🏗️ Explicação da Estrutura

- **Assincronismo:** A API é assíncrona para garantir que operações como acesso ao banco de dados não bloqueiem o fluxo do programa, melhorando a performance.
- **Prisma no Model:** Usamos o Prisma para interagir com o banco de dados, pois ele oferece uma interface mais segura e eficiente do que manipular os dados diretamente no código.
- **Controller:** Gerencia a lógica de negócios e processa as requisições.
- **Routes:** Define os endpoints e conecta as rotas aos métodos dos controllers.
- **Model:** Centraliza a lógica de acesso ao banco de dados, garantindo consistência e reutilização.

## 🤔 O que é uma API?

Uma API (Interface de Programação de Aplicações) é um conjunto de definições e protocolos que permite que diferentes sistemas se comuniquem. Neste projeto, a API fornece endpoints para gerenciar o acervo de livros de forma eficiente.

## 💡 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.  