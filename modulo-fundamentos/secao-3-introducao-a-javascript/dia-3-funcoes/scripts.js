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
const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
const newClients = ['Alexandre', 'Marcilene', 2, "Carlene"];

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
function addCustomers(currentCustomers, newCustomers) {
  for (let index = 0; index < newCustomers.length; index += 1) {
    typeof newCustomers[index] == "string" && currentCustomers.push(newCustomers[index]);
  }
}
console.log(addCustomers(trybeBankCustomers, newClients));
console.log(trybeBankCustomers);