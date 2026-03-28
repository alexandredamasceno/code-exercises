// Desafio da Piramide de asteriscos:
const tamanhoDaPiramide = 7;
let piramide = "";
let piramideArray = "";
for (let indexA = 0; indexA < tamanhoDaPiramide; indexA += 1) {
    piramide += "*";
    for (let indexB = 1; indexB < tamanhoDaPiramide; indexB += 1) {
        piramide += "*";
        if (piramide.split("").length == tamanhoDaPiramide) {
            piramideArray += `${piramide}\n`;
            piramide = "";
        }
    }
}
console.log(quadradoArray);


//Desafio do QUADRADO DE asteriscos:
/* const tamanhoDoQuadrado = 7;
let quadrado = "";
let quadradoArray = "";
for (let indexA = 0; indexA < tamanhoDoQuadrado; indexA += 1) {
    quadrado += "*";
    for (let indexB = 1; indexB < tamanhoDoQuadrado; indexB += 1) {
        quadrado += "*";
        if (quadrado.split("").length == tamanhoDoQuadrado) {
            quadradoArray += `${quadrado}\n`;
            quadrado = "";
        }
    }
}
console.log(quadradoArray); */
/* let nameA = "Alexandre";
console.log(nameA.split("").length); */
//Investe uma string
/* let word = "dev";
let charArray = word.split("");
console.log(charArray);
let charArrayReversed = charArray.reverse();
console.log(charArrayReversed);
let newWord = charArrayReversed.join("");
console.log(newWord); */

// Executa o fatorial de um número qualquer.
/* let number  = 10;
let fatorial = 1; */
//Faz em ordem decrescente:
/* for (let index = 10; index >= 1; index -= 1) {
    if (index != number) {
        number *= index;
    }
}
console.log(number); */
// faz em ordem crescente
/* for (let index = 1; index <= number; index += 1) {
    fatorial *= index;
}
console.log(fatorial); */

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

