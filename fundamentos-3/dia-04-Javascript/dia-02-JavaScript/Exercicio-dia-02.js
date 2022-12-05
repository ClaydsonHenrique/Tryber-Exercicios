let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for ( index=0; index < numbers.length; index += 1){
  // console.log(numbers[index])
}

// Some todos os valores contidos no array e imprima o resultado;
let soma= 0;
for ( index=0; index < numbers.length; index += 1){
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
 console.log(maiorValor)

//  Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
for (index = 0; index < numbers.length ;  index += 1){
  if (numbers[index] % 2 === 1){
    console.log(numbers[index]);
  }else {
    console.log('Nenhum valor ímpar encontrado');
   }
 }

