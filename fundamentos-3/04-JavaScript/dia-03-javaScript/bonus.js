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

numero = 7;
simbolo = '*';
meio = (numero + 1) / 2;
esquerda = meio;
direita = meio;

for (let index = 0; index <= meio; index += 1) {
  let espaco = '';
  for (let i = 0; i <= numero; i += 1) {
    if (i == esquerda || i == direita || index == meio) {
      espaco += simbolo;
    } else {
      espaco += ' ';
    };
  };

  direita += 1;
  esquerda -= 1;
  console.log(espaco);
};