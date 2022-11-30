const currentHour= 20;
let message = "";
if (currentHour >= 22){
  message = console.log("Não deveriamos comer nada, é hora de dormir");
} else if (currentHour >=14 && currentHour < 18){
  message = console.log("Vamos fazer um bolo pro café da tarde");
}else if (currentHour >=11 && currentHour < 14){
  message = console.log("Não deveriamos comer nada, é hora de dormir");
}