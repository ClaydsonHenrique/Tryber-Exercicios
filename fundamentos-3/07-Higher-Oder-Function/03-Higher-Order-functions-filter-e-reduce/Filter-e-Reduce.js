const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//  Filtre todos os objetos do gênero ficção científica ou fantasia.
const fantasyOrScienceFiction = () => {
  const livros = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
  return livros
}

//  Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.
const idade = () => {
  const ano = 2023;
  const livros = books.filter((book) => (ano - book.releaseYear) >= 60);
  return livros
}

//  Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.
const booksByAuthorBirthYear = (anoAniversario) => {
  const livros = books.filter((book) => book.author.birthYear === anoAniversario)
    .map((book) => book.name);
  return livros
}

// Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.
const fantasyOrScienceFictionAuthors = () => {
  const genero = ['Fantasia', 'Ficção Científica']
  const nomes = books.filter((book) => genero.includes(book.genre));
  nomes.map((book) => book.author.name).sort()
  return nomes
};

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const livrosVelhos = () => {
  const ano = 2023;
  const livros = books.filter((book) => (ano - book.releaseYear) >= 60).map((book) => book.name);
  return livros
}

// Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.(Não resolvido!)
const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
}

