// ARROW FUNCTIONS = Possibilidade de funções mais simplificadas. Sintaxe = () => {} ou const = () => "EXPRESSÃO". "EXPRESSÃO" = qualquer ação. Ex: num1 + num2. NÃO PRECISA DA STATEMENT/COMANDO/INSTRUÇÃO = "return"; depois do => ele já retorna algo implicitamente.
/* const sum = (number1, number2) => number1 + number2;
console.log(sum(2,2)); */

/* const numbers = [2, 5, 8, 4];

const sumAll = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) { 
    sum += array[index];
  };
  return sum;
};
console.log(sumAll(numbers)); */
const text = "Hello, world!!!";
const countWords = (phrase) => phrase.split(" ").length;
console.log(countWords(text));
// OUTRAS SINTAXES:
// quando não tem necessidade de parâmetro:
//const example = () => {} // ou const example = _ => {};

const customerArray = ['Oliva', 'Nat', 'Gus'];
/* function saudacaoClientes(customers) {
    for (let index = 0; index < customers.length; index += 1) {
        let message = `Seja bem vindo(a), ${customers[index]}!`;
        return message;
    };
};
console.log(saudacaoClientes(customerArray));
let number = "2";
console.log(typeof number == "string"); */
/* const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
function addCustomer(customer) {
  if (typeof customer == 'string') {
    trybeBankCustomers.push(customer);
  } else {
    return 'O parâmetro passado deve ser do tipo string';
  }
  return trybeBankCustomers;
}
console.log(addCustomer("Alexandre")); */
/* const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
const newClients = ['Alexandre', 'Marcilene', 2, "Carlene"]; */

/* function addCustomers(currentCustomers, newCustomers) {
  for (let index = 0; index < newCustomers.length; index += 1) {
    if (typeof newCustomers[index] != "string") {
      return 'Todos os valores precisam ser strings';
    }
  }
  for (let index = 0; index < newCustomers.length; index += 1) {
    currentCustomers.push(newCustomers[index]);
  }
} */
/* function addCustomers(currentCustomers, newCustomers) {
  for (let index = 0; index < newCustomers.length; index += 1) {
    typeof newCustomers[index] == "string" && currentCustomers.push(newCustomers[index]);
  }
}
console.log(addCustomers(trybeBankCustomers, newClients));
console.log(trybeBankCustomers); */