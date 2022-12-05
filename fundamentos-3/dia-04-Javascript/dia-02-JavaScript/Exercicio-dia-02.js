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
console.log(aritimetica)