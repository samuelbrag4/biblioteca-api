# Sistema de Gerenciamento de Acervo Bibliográfico

Este projeto é uma API backend desenvolvida para gerenciar o acervo de livros de uma biblioteca municipal. A API permite que bibliotecários realizem operações de cadastro, consulta, atualização e remoção de livros.

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- TypeScript

## Estrutura do Projeto

```
biblioteca-api
├── prisma
│   ├── schema.prisma
│   └── migrations
├── src
│   ├── controllers
│   │   └── booksController.ts
│   ├── models
│   │   └── bookModel.ts
│   ├── routes
│   │   └── booksRoutes.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

## Como Instalar e Executar o Projeto

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd biblioteca-api
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Renomeie o arquivo `.env.example` para `.env` e preencha com as informações necessárias.

4. Execute as migrações do Prisma:
   ```
   npx prisma migrate dev
   ```

5. Inicie o servidor:
   ```
   npm run start
   ```

## Endpoints da API

### Listar todos os livros
- **Método:** GET
- **URL:** `/books`
- **Descrição:** Retorna uma lista de todos os livros disponíveis.

### Obter detalhes de um livro específico
- **Método:** GET
- **URL:** `/books/:id`
- **Descrição:** Retorna os detalhes de um livro específico pelo ID.

### Adicionar um novo livro
- **Método:** POST
- **URL:** `/books`
- **Descrição:** Adiciona um novo livro ao acervo. Os campos obrigatórios devem ser fornecidos.

### Atualizar informações de um livro
- **Método:** PUT
- **URL:** `/books/:id`
- **Descrição:** Atualiza as informações de um livro existente pelo ID.

### Remover um livro do acervo
- **Método:** DELETE
- **URL:** `/books/:id`
- **Descrição:** Remove um livro do acervo pelo ID.

## Decisões de Design e Arquitetura

- A arquitetura do projeto segue o padrão MVC (Model-View-Controller), onde a lógica de negócios é separada da lógica de apresentação.
- O Prisma ORM é utilizado para facilitar a interação com o banco de dados, permitindo uma modelagem de dados clara e eficiente.
- As rotas da API são organizadas de forma a facilitar a manutenção e a escalabilidade do sistema.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License.

Adições:
motivos dos assincronos
o que cada classe faz
qual é a responsabilidade de controllers, model e routes