let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for ( let index=0; index < numbers.length; index += 1){
  // console.log(numbers[index])
}

// Some todos os valores contidos no array e imprima o resultado;
let soma= 0;
for ( let index=0; index < numbers.length; index += 1){
  soma += numbers[index];
}
// console.log(soma)

// Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let aritimetica = soma / numbers.length;
console.log(aritimetica);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (aritimetica > 20 ){
  console.log("valor maior que 20.");
} else{
  console.log("valor menor que 20.");
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorValor = numbers[0];
 for (index = 0; index < numbers.length ;  index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index]
  }
 }
//  console.log(maiorValor)

//  Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
for (let index = 0; index < numbers.length; index += 1){
  if (numbers[index] % 2 === 1){
    // console.log(numbers[index]);
  } else if (numbers[index] = 0){
    // console.log('nenhum valor ímpar encontrado');
  }
 }

//  Utilizando for, descubra qual o menor valor contido no array e imprima-o;
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];

for (let index = 1; index < numbers.length; index += 1 ) {
  if (numbers[index] < menorValor ) {
    menorValor = numbers[index];
  }
}
// console.log(menorValor);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let num =[];
for (let index = 0; index < 26; index += 1 ){
  num.push (index)
}
console.log(num)

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let index = 0; index < num.length; index += 1){
console.log(num[index] / 2)
  }