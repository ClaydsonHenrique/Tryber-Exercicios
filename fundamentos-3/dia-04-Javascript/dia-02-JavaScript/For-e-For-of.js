// Requisito 01 For 
// Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for ( index=0; index < groceryList.length; index += 1){
  console.log(groceryList[index]);
}

// Requisitos 02 For of 
// Utilize o for/of para imprimir os elementos da lista names com o console.log():
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (index of names){
  index +=1;
  console.log(index)
}