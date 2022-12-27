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

numero = 5;
simbolo = '*';
linha = '';

for (index = 0; index <= numero; index += 1) {
  console.log(linha);
  linha = linha + simbolo;
}

// terceiro requisito

numero = 5;
simbolo = '*';
linha = '';
position = numero;

for (let index = 0; index <= numero; index += 1) {
  for (let i = 0; i < numero; i += 1) {
    if (i < position) {
      linha = linha + ' ';
    } else {
      linha = linha + simbolo;
    }
  }
  console.log(linha);
  linha = '';
  position -= 1;
}

// quarto requisito 
numero = 5;
simbolo = '*';
linha = '';

let meio = (numero + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let index = 0; index <= meio; index += 1) {
  for (let i = 0; i <= numero; i += 1) {
    if (i > esquerda && i < direita) {
      linha = linha + simbolo;
    } else {
      linha = linha + ' ';
    };
  };
  console.log(linha);
  linha = '';
  direita += 1;
  esquerda -= 1;
};

// quinto requisito 

n = 7;
symbol = '*';
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}


