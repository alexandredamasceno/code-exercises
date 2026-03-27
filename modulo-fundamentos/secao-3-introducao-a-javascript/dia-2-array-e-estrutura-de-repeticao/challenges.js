// Executa o fatorial de um número qualquer.
let number  = 10;
let fatorial = 1;
//Faz em ordem decrescente:
/* for (let index = 10; index >= 1; index -= 1) {
    if (index != number) {
        number *= index;
    }
}
console.log(number); */
// faz em ordem crescente
for (let index = 1; index <= number; index += 1) {
    fatorial *= index;
}
console.log(fatorial);

//Busca a quantidade de números ímpares no array
/* const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let quantidadeDeImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 > 0) { 
        quantidadeDeImpares += 1; 
    }
}
console.log(quantidadeDeImpares); */



//Busca o maior valor no array numbers. Depois de um tempo eu refatorei o código e deixei mais limpo e lógico
/* let bigger = numbers[0];
for (let index = 0; index < numbers.length; index += 1) { */
    /* if (numbers[index] > bigger) {
        bigger = numbers[index];
    } else {
        bigger = bigger;
    } */
    /* bigger = numbers[index] > bigger ? bigger = numbers[index] : bigger = bigger;
} */
/* console.log(bigger); */
/* for (let indexA = 0; indexA < numbers.length; indexA += 1) {
    for (let indexB = 1; indexB < numbers.length; indexB += 1) {
        console.log(`IndexA = ${numbers[indexA]} - IndexB = ${numbers[indexB]}`);
    }
} */

/* for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
} */
/* for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}
console.log(sum);
let media = sum / numbers.length;
console.log(media);
if (media > 20) {
    console.log("Média é maior que 20");
} else {
    console.log("Média não é maior que 20");
    
} */

