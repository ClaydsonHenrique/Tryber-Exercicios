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

// // // Resultado  (gabarito)

// // const a = 15;
// // const b = 5;
// // console.log('Soma: ' + (a + b));
// // console.log('Subtração: ' + (a - b));
// // console.log('Multiplicação: ' + (a * b));
// // console.log('Divisão: ' + (a / b));
// // console.log('Módulo: ' + (a % b));


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

// // switch 

// let peca = "peão";
// switch (peca.toLowerCase()){

// case 'rainha':
//   console.log('rainha -> pode andar quantas casas quiser na horizontal, vertical ou diagonal. ');
//   break;

//   case 'cavalo':
//   console.log('cavalo -> pode andar por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”.');
//   break;

//   case 'torre':
//   console.log('torre -> A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.');
//   break;

//   case 'peão':
//     console.log('peão -> O move-se sempre para frente, uma casa por vez.');
//     break;

// default :
// console.log("Erro, peça não encontrada.")
// break;
// }


// // 🚀 Há um par entre nós 

// bonus 1 

// const num1 = 3;
// const num2 = 7;
// const num3 = 9;
//  if ( num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 == 0){
//   console.log(true);
//  }else{
//   console.log(false);
//  }

//  bonuns 2

//  const num4 = 4;
//  const num5 = 3;
//  const num6 = 6;
//   if ( num4 % 2 === 1 || num5 % 2 === 1 || num6 % 2 == 1){
//    console.log(true);
//   }else{
//    console.log(false);
//   }

// bonus 3 

  // const valorDoProduto = 30;
  // const valorDeVenda = -3;

  // if (valorDoProduto >= 0 && valorDeVenda >= 0) {
  //   const valorDoImposto = valorDoProduto * 0.2;
  //   const lucro = valorDeVenda - valorDoProduto - valorDoImposto;
  //   const vendas = lucro * 1000;
  //   console.log(vendas);
  // } else{
  //   console.log("Erro, valor abaixo de 0");
  // }

  // bonus 4
  let inss;
  let impostoDeRenda;

  const salarioLiquido = 3300.00;

  if (salarioLiquido <= 1556.94){
    inss =salarioLiquido * 0.08;
    // console.log(inss);
  } else  if (salarioLiquido >=1556.95 && salarioLiquido <= 2594.92){
    inss = salarioLiquido * 0.09;
    // console.log(inss);
  }else  if (salarioLiquido >= 2594.93 && salarioLiquido <= 5189.82){
    inss = salarioLiquido * 0.11;
    // console.log(inss);
  } else {
    inss = 570.88;
    // console.log(inss);
  }

  let salarioBase = salarioLiquido-inss;
  
  

  if (salarioBase <= 1903.98){
    console.log('Insento de imposto de renda');
  } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    impostoDeRenda = (salarioBase *0.075 ) -142.80;
  }else if (salarioBase >=  2826.66 && salarioBase <= 3751.05){
    impostoDeRenda = (salarioBase * 0.15) -354.8;
  }else if (salarioBase >=  3751.06 && salarioBase <= 4664.68){
    impostoDeRenda = (salarioBase * 0.225) -636.16;
  }else if (salarioBase >= 4664.68){
    impostoDeRenda = (salarioBase * 0.275) -8669.36;
  }
  // console.log(salarioBase)
  // console.log(impostoDeRenda)

  const resultadoFinal = salarioBase-impostoDeRenda;
  console.log(resultadoFinal);


