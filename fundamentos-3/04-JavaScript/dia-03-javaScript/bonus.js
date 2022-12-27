// exercicio feito com a vídeo aula do gabarito 
let numero = 5;
let simbolo = '*';
let linha = '';
for (let index = 0; index < numero; index += 1) {
  linha = linha + simbolo;
};
for (let index = 0; index < numero; index += 1) {
  console.log(linha)
};

// segundo requisito 

let number = 5;
let symbol = '*';
let line = '';

for (index = 0; index <= number; index += 1) {
  console.log(line);
  line = line + symbol;
}

// terceiro requisito

let n = 5;
let resultado = '*';
let novaLinha = '';
let position = n;

for (let index = 0; index <= n; index += 1) {
  for (let i = 0; i < n; i += 1) {
    if (i < position) {
      novaLinha = novaLinha + ' ';
    } else {
      novaLinha = novaLinha + resultado;
    }
  }
  console.log(novaLinha);
  novaLinha = '';
  position -= 1;
}

// quarto requisito 
let quantidade = 5;
let caractere = '*';
let novasLinhas = '';

let meio = (quantidade + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let index = 0; index <= meio; index += 1) {
  for (let i = 0; i <= quantidade; i += 1) {
    if (i > esquerda && i < direita) {
      novasLinhas = novasLinhas + caractere;
    } else {
      novasLinhas = novasLinhas + ' ';
    };
  };
  console.log(novasLinhas);
  novasLinhas = '';
  direita += 1;
  esquerda -= 1;
};


