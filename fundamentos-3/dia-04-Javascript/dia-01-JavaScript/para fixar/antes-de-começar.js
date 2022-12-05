// // // soma 
// const number = 3;
// const number2 = 6;
// const soma = number + number2;
// console.log(soma);

// // // subitração 
// const numero = 5;
// const numero2 = 3;
// const subitracao = numero - numero2;
// console.log(subitracao);

// // // multiplicação 
// const multi = 4;
// const multi2 = 10;
// const multiplicacao = multi * multi2 ;
// console.log(multiplicacao);

// // // divisão 
// const dividendo = 40;
// const divisor = 4;
// const divisao = dividendo / divisor;
// console.log(divisao)

// // // modulo 
// const dividendo2 = 30;
// const divisor2 = 2;
// const resultado = 30 % 2;
// console.log(resultado);

// // // Resultado correto (gabarito)

// const a = 15;
// const b = 5;
// console.log('Soma: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));


// // comparação 
// const primeiro = 50;
// const segundo =10;
// if (primeiro > segundo){
//   console.log("Primeiro é maior que Segundo")
// }else {
//   console.log("Segundo é maior que Primeiro")
// }

// primeiro;
// segundo;
// const terceiro = 35;
// if (primeiro > segundo && primeiro > terceiro){
//   console.log("Primeiro é maior que segundo e do que o Terceiro");
// }else if (segundo > primeiro && segundo > terceiro){
//   console·log("Segundo é maior que primeiro e do que o Terceiro");
// } else{
//   console.log("Terceiro é maior que Primeiro e do que o Segundo");
// }

// const valor = 13;
// if (valor > 0){
//   console.log("positive")
// } else if (valor < 0){
//   console.log('negative')
// }else {
//   console.log("zero")
// }

let peca = "peão";
switch (peca.toLowerCase()){

case 'rainha':
  console.log('rainha -> pode andar quantas casas quiser na horizontal, vertical ou diagonal. ');
  break;

  case 'cavalo':
  console.log('cavalo -> pode andar por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”.');
  break;

  case 'torre':
  console.log('torre -> A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.');
  break;

  case 'peão':
    console.log('peão -> O move-se sempre para frente, uma casa por vez.');
    break;

default :
console.log("Erro, peça não encontrada.")
break;
}

