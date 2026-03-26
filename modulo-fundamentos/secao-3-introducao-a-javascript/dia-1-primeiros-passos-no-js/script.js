/* let = funciona  apenas no escopo que foi criada
    const = funciona apenas no escopo que foi criada
    var = funciona no escopo geral, ou seja, no escopo de todos. (não recomendado utilizar)

 */
/* Estrutura do If...else */
/* if (condição) {
  // resultado
} else if (condição) {
    resultado;
} else {
    resultado;    
} */

/* exemplo: */
/* let grade = 90;
let message;
if (grade >= 80) {
  message = 'Parabéns, você faz parte do grupo de pessoas aprovadas!';
} else if (grade < 80 && grade >= 60) {
  message = 'Vocẽ está na nossa lista de espera.';
} else {
  message = 'Infelizmente, você reprovou.';
}
console.log(message); */

/* console.log(userAge); // 20 */

/* let userName = 'Isabella';
console.log(userName); // Isabella

userName = 'Lucas';
console.log(userName); // Lucas */

/* let patientId = 50;
let isEnrolled = true;
let patientEmail = 'ana@email.com';
patientId ++;
console.log(patientId); */

/* Operador Ternário: */
/* let idade = 14;
const canVote = idade >= 16 ? "Pode votar!" : "Não pode votar!";
console.log(canVote); */
/* Operador ternário quando se quer apenas o TRUE(operador lígico &&(AND)), e se não for true, retornar FALSE */
/* let number = 10;
let isTen = number == 10 && "É 10!";
console.log(isTen); */
/* OPERADORES LÓGICOS: */
/* AND: retorna true somente quando as duas ou todas condições forem verdadeiras ou atendidas */
/* const food = 'pão';
const drink = 'suco';

if (drink === 'café' && food === 'pão') {
  console.log('Obrigado!');
} else {
  console.log('Erraram meu pedido.');
}

let carrot = true;
let milk = true;
let rice = true;
let bean = true;

let listaDeCompras = carrot && milk && rice && bean;
console.log(listaDeCompras);

let currentHour = 22;
let message;
if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço!!!';
} else {
  message = 'Hmmm, cheiro de café recém-passado';
}

console.log(message); */

/* OPERADOR LÓGICO OU || = Basta apenas uma das condições ser verdadeira ou ambas verdadeiras para a lógica ser verdade ou TRUE(truthy = 1, true). Falsy = False, 0, "". undefined, Null, NaN*/
/* const principalDrink = 'café';
const alternativeDrink = 'suco de laranja';

if (principalDrink === 'café' || alternativeDrink === 'suco de laranja') {
  console.log("Agradeço por me atender :D");
} else {
  console.log("Ei, não foi isso que eu pedi!");
} */

//const goToSP = true;
//const goToGO = true;
//Quero simbolizar aqui nesse primeiro if abaixo a expressão: Ou isso ou aquilo. No caso, ou vou para sp ou vou para go. Ou seja, ou um ou outro, não os dois. Alternando os valores das constantes podemos ver as alternativas//
/* if ((goToSP === true && goToGO === false) || (goToSP === false && goToGO === true)) {
    console.log("Eu fui para apenas um dos lugares");
} else {
    console.log("Eu fui para os dois, ou para nenhum");
}; */

/* OPERADOR LÓGICO NOT(!) = ELE INVERTE OS VALORES JÁ PRE ESTABELECIDOS. TODOS OS VALORES FALSY VIRAM TRUE E OS TRUTHY VIRAM FALSE. ELE SÓ RETORNA VALOR BOLEANO(TRUE OU FALSE)*/
/* let number = 10;
console.log(!number); */

/* Switch - case = É uma alternativa ao IF, ELSE. Você dá uma expressão(variável, por exemplo) e e cria vários casos para essa expressão(é mais para comparação, se a expressão é igual tal caso, por exemplo). No final coloca um Default quando a expressão não respeitar/atender nenhum dos cases*/
/* Sintaxe:
    switch () {
        case(condição):
        // logica
        break;
        case:
        //lógica;
        break;
        .
        .
        .
        default:
        // lógica;
    }
*/
/* const expr = "oranges";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
} */

/* A configuração `Alguma coisa ${variável ou outra coisa}` é chamada Template Literals*/

