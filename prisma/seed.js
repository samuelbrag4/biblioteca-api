import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Populando o banco de dados com livros iniciais...");

  await prisma.book.createMany({
    data: [
      {
        title: "O Senhor dos Anéis",
        author: "J.R.R. Tolkien",
        publisher: "HarperCollins",
        isbn: "9780261102385",
        category: "Fantasia",
        year: 1954,
        description: "Uma das maiores obras de fantasia de todos os tempos.",
      },
      {
        title: "1984",
        author: "George Orwell",
        publisher: "Secker & Warburg",
        isbn: "9780451524935",
        category: "Distopia",
        year: 1949,
        description: "Um clássico da literatura distópica.",
      },
      {
        title: "Dom Quixote",
        author: "Miguel de Cervantes",
        publisher: "Francisco de Robles",
        isbn: "9780060934347",
        category: "Clássico",
        year: 1605,
        description: "Uma das obras mais influentes da literatura ocidental.",
      },
      {
        title: "Olhos D'Água",
        author: "Conceição Evaristo",
        publisher: "Pallas",
        isbn: "9788534705257",
        category: "Contos",
        year: 2014,
        description:
          "Coletânea de contos que abordam a experiência afro-brasileira, explorando temas como pobreza e violência urbana.",
      },
      {
        title: "Casa Velha",
        author: "Machado de Assis",
        publisher: "",
        isbn: "",
        category: "Romance",
        year: 1885,
        description:
          "História de um amor proibido narrada pelas memórias de um padre, explorando as complexidades das relações humanas.",
      },
      {
        title: "A Vida Não É Útil",
        author: "Ailton Krenak",
        publisher: "Companhia das Letras",
        isbn: "9788535933697",
        category: "Ensaios",
        year: 2020,
        description:
          "Reflexões do líder indígena Ailton Krenak sobre a humanidade e a relação com a natureza.",
      },
      {
        title: "Vidas Secas",
        author: "Graciliano Ramos",
        publisher: "Editora Record",
        isbn: "9788501005584",
        category: "Romance",
        year: 1938,
        description:
          "Retrato da vida árdua de uma família sertaneja no Nordeste brasileiro.",
      },
      {
        title: "Os Sertões",
        author: "Euclides da Cunha",
        publisher: "",
        isbn: "",
        category: "Não-ficção",
        year: 1902,
        description:
          "Relato histórico e sociológico sobre a Guerra de Canudos no sertão da Bahia.",
      },
      {
        title: "Angústia",
        author: "Graciliano Ramos",
        publisher: "Penguin-Companhia",
        isbn: "9788582851838",
        category: "Romance",
        year: 1936,
        description:
          "Narrativa introspectiva que explora a mente perturbada de um funcionário público.",
      },
      {
        title: "São Bernardo",
        author: "Graciliano Ramos",
        publisher: "New York Review Books",
        isbn: "9781681373850",
        category: "Romance",
        year: 1934,
        description:
          "História de Paulo Honório, que ascende de trabalhador rural a proprietário, explorando temas de ambição e moralidade.",
      },
      {
        title: "A Terra dos Meninos Pelados",
        author: "Graciliano Ramos",
        publisher: "",
        isbn: "",
        category: "Literatura Infantil",
        year: 1939,
        description:
          "Aventuras de um menino diferente que busca um lugar onde seja aceito.",
      },
      {
        title: "O Capital",
        author: "Karl Marx",
        publisher: "",
        isbn: "",
        category: "Economia",
        year: 1867,
        description:
          "Análise crítica do capitalismo e suas implicações socioeconômicas.",
      },
      {
        title: "O Retrato de Dorian Gray",
        author: "Oscar Wilde",
        publisher: "",
        isbn: "",
        category: "Romance",
        year: 1890,
        description:
          "Um jovem troca sua alma por eterna juventude e beleza, explorando temas de moralidade e estética.",
      },
      {
        title:
          "Como Ser um Educador Antirracista: Para Familiares e Professores",
        author: "Bárbara Carine Soares Pinheiro",
        publisher: "",
        isbn: "",
        category: "Educação",
        year: 2023,
        description:
          "Guia para educadores e familiares sobre práticas antirracistas na educação.",
      },
      {
        title: "Niketche: Uma História de Poligamia",
        author: "Paulina Chiziane",
        publisher: "",
        isbn: "",
        category: "Romance",
        year: 2002,
        description:
          "Exploração das dinâmicas de poligamia em Moçambique através da história de Rami e Tony.",
      },
      {
        title: "O Manifesto Comunista",
        author: "Karl Marx e Friedrich Engels",
        publisher: "",
        isbn: "",
        category: "Política",
        year: 1848,
        description:
          "Documento fundamental que apresenta os princípios do comunismo.",
      },
      {
        title: "ABC do Socialismo",
        author: "Catarina Príncipe e João Mineiro",
        publisher: "",
        isbn: "",
        category: "Política",
        year: 2022,
        description:
          "Introdução didática e acessível aos conceitos do socialismo.",
      },
      {
        title: "Canção para Ninar Menino Grande",
        author: "Conceição Evaristo",
        publisher: "",
        isbn: "",
        category: "Romance",
        year: 2018,
        description:
          "Mosaico de experiências negras, discutindo masculinidade e relações de gênero.",
      },
      {
        title: "Copo Vazio",
        author: "Natalia Timerman",
        publisher: "",
        isbn: "",
        category: "Romance",
        year: 2021,
        description:
          "Narrativa que explora as complexidades dos relacionamentos contemporâneos.",
      },
      {
        title:
          "A Ciranda das Mulheres Sábias: Ser Jovem Enquanto Velha, Velha Enquanto Jovem",
        author: "Conceição Evaristo",
        publisher: "",
        isbn: "",
        category: "Ensaios",
        year: 2020,
        description:
          "Reflexões sobre a sabedoria feminina e as diferentes fases da vida.",
      },
      {
        title: "Quarto de Despejo - Diário de uma Favelada",
        author: "Carolina Maria de Jesus",
        publisher: "",
        isbn: "",
        category: "Biografia",
        year: 1960,
        description:
          "Diário que retrata a vida em uma favela de São Paulo nos anos 1950.",
      },
      {
        title: "Como Ser Anticapitalista no Século XXI?",
        author: "Erik Olin Wright",
        publisher: "",
        isbn: "",
        category: "Política",
        year: 2019,
        description:
          "Discussão sobre alternativas ao capitalismo no mundo contemporâneo.",
      },
      {
        title: "Prosas Seguidas de Odes Mínimas",
        author: "Hilda Hilst",
        publisher: "",
        isbn: "",
        category: "Poesia",
        year: 1986,
        description:
          "Obra poética marcada pela introspecção, espiritualidade e intensidade emocional.",
      },
      {
        title: "O Ateneu",
        author: "Raul Pompeia",
        publisher: "",
        isbn: "",
        category: "Romance",
        year: 1888,
        description:
          "Narrativa de formação de um jovem em um internato, marcada por críticas à hipocrisia social.",
      },
      {
        title: "Outros Jeitos de Usar a Boca",
        author: "Rupi Kaur",
        publisher: "",
        isbn: "",
        category: "Poesia",
        year: 2014,
        description:
          "Coletânea de poemas sobre amor, perda, trauma e empoderamento feminino.",
      },
      {
        title: "Lugar de Fala",
        author: "Djamila Ribeiro",
        publisher: "",
        isbn: "",
        category: "Ensaios",
        year: 2017,
        description:
          "Exploração do conceito de lugar de fala e sua importância no debate sobre desigualdade.",
      },
      {
        title: "O Avesso da Pele",
        author: "Jeferson Tenório",
        publisher: "",
        isbn: "",
        category: "Romance",
        year: 2020,
        description:
          "Um filho reconstrói a trajetória do pai assassinado, enfrentando o racismo estrutural no Brasil.",
      },
      {
        title: "Úrsula",
        author: "Maria Firmina dos Reis",
        publisher: "",
        isbn: "",
        category: "Romance",
        year: 1859,
        description:
          "Primeiro romance abolicionista da literatura brasileira, escrito por uma mulher negra.",
      },
      {
        title: "Heroínas Negras Brasileiras em 15 Cordéis",
        author: "Jarid Arraes",
        publisher: "",
        isbn: "",
        category: "Literatura de Cordel",
        year: 2017,
        description:
          "Cordéis que resgatam e celebram histórias de mulheres negras esquecidas pela história oficial.",
      },
      {
        title: "Amora",
        author: "Natália Borges Polesso",
        publisher: "",
        isbn: "",
        category: "Contos",
        year: 2015,
        description:
          "Coletânea de contos sobre mulheres que amam mulheres, com forte lirismo e naturalidade.",
      },
      {
        title: "Tudo Nela Brilha e Queima",
        author: "Ryane Leão",
        publisher: "",
        isbn: "",
        category: "Poesia",
        year: 2017,
        description:
          "Poemas sobre empoderamento, resistência e as dores e belezas da vivência feminina.",
      },
      {
        title: "A Vida Invisível de Eurídice Gusmão",
        author: "Martha Batalha",
        publisher: "",
        isbn: "",
        category: "Romance",
        year: 2016,
        description:
          "Romance que retrata duas irmãs em um Brasil conservador, e suas batalhas por liberdade.",
      },
      {
        title: "Harry Potter e a Pedra Filosofal",
        author: "J.K. Rowling",
        publisher: "Rocco",
        isbn: "9788532511010",
        category: "Fantasia",
        year: 1997,
        description: "O início da jornada de Harry Potter no mundo da magia.",
      },
      {
        title: "Jogos Vorazes",
        author: "Suzanne Collins",
        publisher: "Rocco",
        isbn: "9788532522313",
        category: "Distopia",
        year: 2008,
        description:
          "Katniss Everdeen desafia um sistema opressor em uma arena mortal.",
      },
      {
        title: "A Menina que Roubava Livros",
        author: "Markus Zusak",
        publisher: "Intrínseca",
        isbn: "9788576082675",
        category: "Drama",
        year: 2005,
        description: "Uma história comovente ambientada na Alemanha nazista.",
      },
      {
        title: "O Código Da Vinci",
        author: "Dan Brown",
        publisher: "Sextante",
        isbn: "9788575421130",
        category: "Suspense",
        year: 2003,
        description: "Mistério e simbologia em uma corrida contra o tempo.",
      },
      {
        title: "O Pequeno Príncipe",
        author: "Antoine de Saint-Exupéry",
        publisher: "Agir",
        isbn: "9788522005233",
        category: "Fábula",
        year: 1943,
        description: "Reflexão sobre amor, amizade e o sentido da vida.",
      },
      {
        title: "Orgulho e Preconceito",
        author: "Jane Austen",
        publisher: "Penguin-Companhia",
        isbn: "9788577991969",
        category: "Romance",
        year: 1813,
        description: "Um retrato irônico da sociedade inglesa do século XIX.",
      },
      {
        title: "O Apanhador no Campo de Centeio",
        author: "J.D. Salinger",
        publisher: "Editora do Autor",
        isbn: "9788595081512",
        category: "Romance",
        year: 1951,
        description: "A jornada introspectiva de um adolescente em Nova York.",
      },
      {
        title: "A Revolução dos Bichos",
        author: "George Orwell",
        publisher: "Companhia das Letras",
        isbn: "9788535909555",
        category: "Sátira",
        year: 1945,
        description:
          "Uma crítica ao totalitarismo por meio de uma fábula política.",
      },
      {
        title: "O Alquimista",
        author: "Paulo Coelho",
        publisher: "Paralela",
        isbn: "9788532520784",
        category: "Ficção espiritual",
        year: 1988,
        description: "A jornada de autodescoberta de um jovem pastor.",
      },
      {
        title: "Cem Anos de Solidão",
        author: "Gabriel García Márquez",
        publisher: "Record",
        isbn: "9788501038018",
        category: "Realismo mágico",
        year: 1967,
        description: "A saga da família Buendía na fictícia cidade de Macondo.",
      },
      {
        title: "Livro Popular 11",
        author: "Autor Famoso 11",
        publisher: "Editora 11",
        isbn: "9780000000011",
        category: "Biografia",
        year: 1945,
        description:
          "Descrição do Livro Popular 11, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 12",
        author: "Autor Famoso 12",
        publisher: "Editora 12",
        isbn: "9780000000012",
        category: "Biografia",
        year: 1915,
        description:
          "Descrição do Livro Popular 12, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 13",
        author: "Autor Famoso 13",
        publisher: "Editora 13",
        isbn: "9780000000013",
        category: "Ensaios",
        year: 1902,
        description:
          "Descrição do Livro Popular 13, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 14",
        author: "Autor Famoso 14",
        publisher: "Editora 14",
        isbn: "9780000000014",
        category: "Fantasia",
        year: 1910,
        description:
          "Descrição do Livro Popular 14, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 15",
        author: "Autor Famoso 15",
        publisher: "Editora 15",
        isbn: "9780000000015",
        category: "Biografia",
        year: 1990,
        description:
          "Descrição do Livro Popular 15, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 16",
        author: "Autor Famoso 16",
        publisher: "Editora 16",
        isbn: "9780000000016",
        category: "Ficção Científica",
        year: 2018,
        description:
          "Descrição do Livro Popular 16, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 17",
        author: "Autor Famoso 17",
        publisher: "Editora 17",
        isbn: "9780000000017",
        category: "Poesia",
        year: 1989,
        description:
          "Descrição do Livro Popular 17, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 18",
        author: "Autor Famoso 18",
        publisher: "Editora 18",
        isbn: "9780000000018",
        category: "Biografia",
        year: 2012,
        description:
          "Descrição do Livro Popular 18, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 19",
        author: "Autor Famoso 19",
        publisher: "Editora 19",
        isbn: "9780000000019",
        category: "Drama",
        year: 1907,
        description:
          "Descrição do Livro Popular 19, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 20",
        author: "Autor Famoso 20",
        publisher: "Editora 20",
        isbn: "9780000000020",
        category: "Drama",
        year: 1983,
        description:
          "Descrição do Livro Popular 20, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 21",
        author: "Autor Famoso 21",
        publisher: "Editora 21",
        isbn: "9780000000021",
        category: "Biografia",
        year: 2007,
        description:
          "Descrição do Livro Popular 21, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 22",
        author: "Autor Famoso 22",
        publisher: "Editora 22",
        isbn: "9780000000022",
        category: "Drama",
        year: 1903,
        description:
          "Descrição do Livro Popular 22, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 23",
        author: "Autor Famoso 23",
        publisher: "Editora 23",
        isbn: "9780000000023",
        category: "Ensaios",
        year: 1940,
        description:
          "Descrição do Livro Popular 23, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 24",
        author: "Autor Famoso 24",
        publisher: "Editora 24",
        isbn: "9780000000024",
        category: "Suspense",
        year: 1925,
        description:
          "Descrição do Livro Popular 24, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 25",
        author: "Autor Famoso 25",
        publisher: "Editora 25",
        isbn: "9780000000025",
        category: "Distopia",
        year: 1956,
        description:
          "Descrição do Livro Popular 25, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 26",
        author: "Autor Famoso 26",
        publisher: "Editora 26",
        isbn: "9780000000026",
        category: "Romance",
        year: 1996,
        description:
          "Descrição do Livro Popular 26, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 27",
        author: "Autor Famoso 27",
        publisher: "Editora 27",
        isbn: "9780000000027",
        category: "Distopia",
        year: 1975,
        description:
          "Descrição do Livro Popular 27, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 28",
        author: "Autor Famoso 28",
        publisher: "Editora 28",
        isbn: "9780000000028",
        category: "História",
        year: 1943,
        description:
          "Descrição do Livro Popular 28, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 29",
        author: "Autor Famoso 29",
        publisher: "Editora 29",
        isbn: "9780000000029",
        category: "Suspense",
        year: 1946,
        description:
          "Descrição do Livro Popular 29, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 30",
        author: "Autor Famoso 30",
        publisher: "Editora 30",
        isbn: "9780000000030",
        category: "Suspense",
        year: 1982,
        description:
          "Descrição do Livro Popular 30, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 31",
        author: "Autor Famoso 31",
        publisher: "Editora 31",
        isbn: "9780000000031",
        category: "Biografia",
        year: 1959,
        description:
          "Descrição do Livro Popular 31, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 32",
        author: "Autor Famoso 32",
        publisher: "Editora 32",
        isbn: "9780000000032",
        category: "Ensaios",
        year: 1934,
        description:
          "Descrição do Livro Popular 32, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 33",
        author: "Autor Famoso 33",
        publisher: "Editora 33",
        isbn: "9780000000033",
        category: "História",
        year: 1911,
        description:
          "Descrição do Livro Popular 33, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 34",
        author: "Autor Famoso 34",
        publisher: "Editora 34",
        isbn: "9780000000034",
        category: "Ficção Científica",
        year: 1999,
        description:
          "Descrição do Livro Popular 34, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 35",
        author: "Autor Famoso 35",
        publisher: "Editora 35",
        isbn: "9780000000035",
        category: "Fantasia",
        year: 1925,
        description:
          "Descrição do Livro Popular 35, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 36",
        author: "Autor Famoso 36",
        publisher: "Editora 36",
        isbn: "9780000000036",
        category: "Ficção Científica",
        year: 1962,
        description:
          "Descrição do Livro Popular 36, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 37",
        author: "Autor Famoso 37",
        publisher: "Editora 37",
        isbn: "9780000000037",
        category: "Ficção Científica",
        year: 1906,
        description:
          "Descrição do Livro Popular 37, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 38",
        author: "Autor Famoso 38",
        publisher: "Editora 38",
        isbn: "9780000000038",
        category: "Fantasia",
        year: 1982,
        description:
          "Descrição do Livro Popular 38, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 39",
        author: "Autor Famoso 39",
        publisher: "Editora 39",
        isbn: "9780000000039",
        category: "História",
        year: 1975,
        description:
          "Descrição do Livro Popular 39, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 40",
        author: "Autor Famoso 40",
        publisher: "Editora 40",
        isbn: "9780000000040",
        category: "Ficção Científica",
        year: 1994,
        description:
          "Descrição do Livro Popular 40, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 41",
        author: "Autor Famoso 41",
        publisher: "Editora 41",
        isbn: "9780000000041",
        category: "Suspense",
        year: 1964,
        description:
          "Descrição do Livro Popular 41, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 42",
        author: "Autor Famoso 42",
        publisher: "Editora 42",
        isbn: "9780000000042",
        category: "Biografia",
        year: 1929,
        description:
          "Descrição do Livro Popular 42, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 43",
        author: "Autor Famoso 43",
        publisher: "Editora 43",
        isbn: "9780000000043",
        category: "Distopia",
        year: 1955,
        description:
          "Descrição do Livro Popular 43, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 44",
        author: "Autor Famoso 44",
        publisher: "Editora 44",
        isbn: "9780000000044",
        category: "Biografia",
        year: 1941,
        description:
          "Descrição do Livro Popular 44, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 45",
        author: "Autor Famoso 45",
        publisher: "Editora 45",
        isbn: "9780000000045",
        category: "Fantasia",
        year: 1957,
        description:
          "Descrição do Livro Popular 45, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 46",
        author: "Autor Famoso 46",
        publisher: "Editora 46",
        isbn: "9780000000046",
        category: "Fantasia",
        year: 1923,
        description:
          "Descrição do Livro Popular 46, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 47",
        author: "Autor Famoso 47",
        publisher: "Editora 47",
        isbn: "9780000000047",
        category: "História",
        year: 1913,
        description:
          "Descrição do Livro Popular 47, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 48",
        author: "Autor Famoso 48",
        publisher: "Editora 48",
        isbn: "9780000000048",
        category: "Ficção Científica",
        year: 1939,
        description:
          "Descrição do Livro Popular 48, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 49",
        author: "Autor Famoso 49",
        publisher: "Editora 49",
        isbn: "9780000000049",
        category: "Ficção Científica",
        year: 1944,
        description:
          "Descrição do Livro Popular 49, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 50",
        author: "Autor Famoso 50",
        publisher: "Editora 50",
        isbn: "9780000000050",
        category: "Poesia",
        year: 1952,
        description:
          "Descrição do Livro Popular 50, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 51",
        author: "Autor Famoso 51",
        publisher: "Editora 51",
        isbn: "9780000000051",
        category: "Ficção Científica",
        year: 1988,
        description:
          "Descrição do Livro Popular 51, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 52",
        author: "Autor Famoso 52",
        publisher: "Editora 52",
        isbn: "9780000000052",
        category: "Ensaios",
        year: 1968,
        description:
          "Descrição do Livro Popular 52, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 53",
        author: "Autor Famoso 53",
        publisher: "Editora 53",
        isbn: "9780000000053",
        category: "Romance",
        year: 1988,
        description:
          "Descrição do Livro Popular 53, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 54",
        author: "Autor Famoso 54",
        publisher: "Editora 54",
        isbn: "9780000000054",
        category: "Drama",
        year: 1991,
        description:
          "Descrição do Livro Popular 54, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 55",
        author: "Autor Famoso 55",
        publisher: "Editora 55",
        isbn: "9780000000055",
        category: "Romance",
        year: 2009,
        description:
          "Descrição do Livro Popular 55, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 56",
        author: "Autor Famoso 56",
        publisher: "Editora 56",
        isbn: "9780000000056",
        category: "Romance",
        year: 2003,
        description:
          "Descrição do Livro Popular 56, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 57",
        author: "Autor Famoso 57",
        publisher: "Editora 57",
        isbn: "9780000000057",
        category: "Fantasia",
        year: 1988,
        description:
          "Descrição do Livro Popular 57, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 58",
        author: "Autor Famoso 58",
        publisher: "Editora 58",
        isbn: "9780000000058",
        category: "Fantasia",
        year: 1922,
        description:
          "Descrição do Livro Popular 58, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 59",
        author: "Autor Famoso 59",
        publisher: "Editora 59",
        isbn: "9780000000059",
        category: "Drama",
        year: 1954,
        description:
          "Descrição do Livro Popular 59, uma obra marcante de sua categoria.",
      },
      {
        title: "Livro Popular 60",
        author: "Autor Famoso 60",
        publisher: "Editora 60",
        isbn: "9780000000060",
        category: "Poesia",
        year: 1915,
        description:
          "Descrição do Livro Popular 60, uma obra marcante de sua categoria.",
      },
    ],
  });

  console.log("Livros adicionados com sucesso!");
}

main()
  .catch((e) => {
    console.error("Erro ao popular o banco de dados:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
