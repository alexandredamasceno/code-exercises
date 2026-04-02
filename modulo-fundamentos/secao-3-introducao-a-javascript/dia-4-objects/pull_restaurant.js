import order from "./push_restaurant.js";
console.log(order);
//1 Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.
const customerInfo = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  return `Olá, Ana Silveira, entrega para: ${order["name"]}, Telefone: ${order["phoneNumber"]}, ${order["address"]["street"]}, Número: ${order["address"]["number"]}, AP: ${order["address"]["apartment"]}.`;
}

console.log(customerInfo(order));

/*2 Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
Modifique o nome da pessoa compradora para Luiz Silva;
Modifique o valor total da compra para R$ 50,00. */
console.log(order.order.drinks);
const orderModifier = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  return `Olá, Luiz Silva, o valor total de seu pedido de ${Object.keys(order.order.pizza)[0]}, pepperoni e Coca-Cola Zero é de R$ ${(order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price) - 5}`;
}

console.log(orderModifier(order));