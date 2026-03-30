// FOR(ITERAÇÃO) - LAÇO DE REPETIÇÃO, LOOP DE REPETIÇÃO, LOOP:
/* const menu = ['Home', 'Serviços', 'Portfólio', 'Links', 'Contato'];
for (let index = 0; index < menu.length; index += 1) {
    console.log(index);
    console.log(menu[index]);
} */
/* const numbers = [2, 19, 23, 4, 8, 10];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log(soma);
 */
const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];
for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}


// Cria array, exclui e adicina itens ao array
const myBuyList = ["Arroz", "Feijão", "Carne de porco", "Salada"];
//console.log(myBuyList[myBuyList.length - 1]);// BUSCO O ULTIMO ELEMENTO DO ARRAY
//console.log(myBuyList);
//console.log(myBuyList.length);
//console.log(myBuyList[0]);
myBuyList.push("Suco de Laranja")// ADCIONAR ELEMENTO NO FINAL DO ARRAY
//console.log(myBuyList);
//console.log(myBuyList.length);
myBuyList.unshift("Verduras")// ADICIONA UM ELEMENTO NO INICIO DO ARRAY
//console.log(myBuyList);
//console.log(myBuyList.length);
myBuyList.pop() //REMOVE O ULTIMO ELEMENTO DO ARRAY
//console.log(myBuyList);
//console.log(myBuyList.length);
myBuyList.shift()// REMOVE O PRIMEIRO ELEMENTO DO ARRAY
//console.log(myBuyList);
//console.log(myBuyList.length);