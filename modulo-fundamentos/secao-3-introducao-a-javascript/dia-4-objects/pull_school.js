import school from "./push_school.js";

const arraySchool = school["lessons"];

//1 Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.
//console.log(arraySchool);
function valueKey(object, keyPosition) {
    const values = Object.values(object);
    return values[keyPosition];
}
//console.log(valueKey(arraySchool[1], 0))


//2 Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
const sumStudents = _ => {
    let totalStudens = 0;
    for (let index = 0; index < arraySchool.length; index += 1) {
        totalStudens += arraySchool[index]["students"];
    }
    return totalStudens;
};
//console.log(sumStudents());

//3 Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o array de objetos e o nome da chave.
function isThere(array, keyName) {
    let keysArray = [];

    for (let index = 0; index < array.length; index += 1) {
        let keys = Object.keys(array[index]);
        keysArray.push(keys);
    };
    let isInAll = false;
    for (let index = 0; index < keysArray.length; index += 1) {
        keysArray[index].includes(keyName) ? isInAll = true : isInAll = false;
    };

    return isInAll;
};
//console.log(isThere(arraySchool, "professor"));

//4 Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.

const changeShift = (array, courseName, newValue) => {
    console.log(array);
    for (let index = 0; index < array.length; index += 1) {
        if (array[index]["course"] === courseName) {
            array[index].shift = newValue;
        }
    }
    console.log(array);
}
changeShift(arraySchool, "Python", "Noite");