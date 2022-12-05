// Requisito 01 
// Obtenha o valor “Serviços” do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

// Requisito 02
// Procure o índice do valor “Portfólio” do array menu:
menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu[2];
console.log(indexOfPortfolio);

// Requisito 03
// Adicione o valor “Contato” no final do array menu:
menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push("Contato");

console.log(menu);

// Requisito 04 For 
// Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for ( index=0; index < groceryList.length; index += 1){
  console.log(groceryList[index]);
}