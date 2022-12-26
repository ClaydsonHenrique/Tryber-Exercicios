

// Invertendo string 
// let word = 'tryber';
// let reverso = '';
// for (index = 0; index < word.length; index += 1) {
//   reverso += word[word.length - 1 - index];
// }

// console.log(reverso)

// Imprimindo Maior palavra e Menor palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];
for (index = 0; index < array.length; index += 1) {
  if (array[index].length > maior.length) {
    maior = array[index];
  }
}
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menor.length) {
    menor = array[index]
  }
}
console.log(maior);
console.log(menor);