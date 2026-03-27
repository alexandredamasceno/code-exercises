/* Exercicio 7: Dedução de impostos do salário */
let salario = 1500.10;
let salarioDeduzidoINSS;
let salarioDeduzidoIR;
/* Calculo da dedução do  INSS */
if (salario > 5189.82) {
    salarioDeduzidoINSS = salario - 570.88;
} else if (salario >= 2594.93 && salario <= 5189.82) {
    let aliquota11;
    aliquota11 = (salario * 11) / 100;
    salarioDeduzidoINSS = salario - aliquota11;
} else if (salario >= 1556.95 && salario <= 2594.92) {
    let aliquota9 = (salario * 9) / 100;
    salarioDeduzidoINSS = salario - aliquota9;
} else {
    let aliquota8 = (salario * 8) / 100;
    salarioDeduzidoINSS = salario - aliquota8;
}
/* Calculo do IR */
if (salarioDeduzidoINSS > 4664.68) {
    let aliquota27 = ((salarioDeduzidoINSS * 27.5) / 100) - 869.36;
    salarioDeduzidoIR = salarioDeduzidoINSS - aliquota27;
} else if (salarioDeduzidoINSS >= 3751.06 && salarioDeduzidoINSS <= 4664.68) {
    let aliquota22 = ((salarioDeduzidoINSS * 22.5) / 100) - 636.13;
    salarioDeduzidoIR = salarioDeduzidoINSS - aliquota22;
} else if (salarioDeduzidoINSS >= 2826.66 && salarioDeduzidoINSS <= 3751.05) {
    let aliquota15 = ((salarioDeduzidoINSS * 15) / 100) - 354.80;
    salarioDeduzidoIR = salarioDeduzidoINSS - aliquota15;
} else if (salarioDeduzidoINSS >= 1903.99 && salarioDeduzidoINSS <= 2826.65) {
    let aliquota7 = ((salarioDeduzidoINSS * 7.5) / 100) - 142.80;
    salarioDeduzidoIR = salarioDeduzidoINSS - aliquota7;
} else {
    salarioDeduzidoIR = salarioDeduzidoINSS;
}

//console.log(`Seu salário líquido é:
//R$ ${salarioDeduzidoIR.toFixed(2)}`);
console.log(`Seu salário líquido é:\nR$ ${salarioDeduzidoIR.toFixed(2)}`);
// o .toFixed() delimita a quantidade de casas decimais após a vírgula
//console.log("O seu salário líquido é:" + " " + "R$" + " " + salarioDeduzidoIR);

/* Exercicio 6: retorne true ou false */
/* let number01 = 11;
let number02 = 25;
let number03 = 47;

let isEven = number01 % 2 == 0 || number02 % 2 == 0 || number03 % 2 == 0 && true;

console.log(isEven);
 */
/* let reiInfo = "Move-se uma casa para qualquer direção (horizontal, vertical ou diagonal).";
let damaInfo = "Move-se quantas casas quiser em qualquer direção (horizontal, vertical ou diagonal).";
let peaoInfo = "Move-se uma casa à frente (duas no primeiro lance) e captura apenas na diagonal.";
let bispoInfo = "Move-se quantas casas quiser apenas nas diagonais";
let torreInfo = "Move-se quantas casas quiser em linhas retas (horizontal ou vertical)";
let cavaloInfo = "Move-se em forma de 'L' (duas casas numa direção e uma para o lado) e pula peças.";

let expressao = "macaco";

switch (expressao.toLowerCase()) {
    case "cavalo":
        console.log(cavaloInfo);
    break;
    case "peao":
        console.log(peaoInfo);
    break;
    case "rei":
        console.log(reiInfo);
    break;
    case "dama":
        console.log(damaInfo);
    break;
    case "bispo":
        console.log(bispoInfo);
    break;
    case "torre":
        console.log(torreInfo);
    break;
    default:
        console.log("Informação inválida! Tente novamente.");
} */



/* Exercicio 4: mostre quando a soma dos três lados for um triângulo */
/* let angulo1 = 90;
let angulo2 = 30;
let angulo3 = -50;

let somaDosAngulos = angulo1 + angulo2 + angulo3;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0 && somaDosAngulos === 180) {
    console.log(`${angulo1 + angulo2 + angulo3}; Parabéns, é um triângulo!`);
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("Algum dos ângulos é inválido!!!");
} else {
    console.log("Não é um triângulo.");
} */

/* let number1 = 300;
let number2 = 500;
let number3 = 2500; */

/* Exercicio 3: retorne o maior dentre três números */
/* if (number1 > number2 && number1 > number3) {
    console.log(`O número maior é: ${number1}`);
} else if (number2 > number1 && number2 > number3) {
    console.log(`O número maior é: ${number2}`);
} else {
    console.log(`O número maior é: ${number3}`);
} */

/* Exercicio 2: Retorna o número maior */
/* if (number1 > number2) {
    console.log(`O número maior é: ${number1}`);
} else {
    console.log(`O número maior é: ${number2}`);
} */
/* Exercicio 1 */
/* console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 / number2);
console.log(number1 % number2); */