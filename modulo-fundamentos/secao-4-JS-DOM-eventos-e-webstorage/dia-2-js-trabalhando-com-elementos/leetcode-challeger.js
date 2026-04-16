const words = ["hsdqinnoha","mqhskgeqzr","zemkwvqrww","zemkwvqrww","daljcrktje","fghofclnwp","djwdworyka","cxfpybanhd","fghofclnwp","fghofclnwp"];

const closestTarget = function(words, target, startIndex) {
    let arrayResults = [];

    if (words.includes(target) == false) {
        return -1;
    }
    // calculo distancia padrão por indice
    for (let index = 0; index < words.length; index += 1) {
        if (target === words[index]) {
            let valueIndexTarget = startIndex - index;
            arrayResults.push(Math.abs(valueIndexTarget));
        }
    }


    // inicia a logica do circular do startIndex até final do array
    let countFromTheTop = 0;
    let countFromTheTarget = 0;
    // Ordem descrescente pegando do topo do array até o target
    let wordsIndex = words.length - 1;
    for (let index = wordsIndex; index >= 0 ; index -= 1) {
        if (target === words[index]) {
            countFromTheTop += 1;            
            console.log(countFromTheTop);
            break;
        }
        countFromTheTop += 1;
    };

    // conta do indice a partir do target
    for (let index = startIndex; index >= 0; index -= 1) {
        if (index === 0) {
            break;
        }
        countFromTheTarget += 1;
    }
    // valor da distancia da circular
    let countTotalLogicaCircular = countFromTheTop + countFromTheTarget;
    arrayResults.push(countTotalLogicaCircular);
    let theBigger = arrayResults[0];
    for (let index = 0; index < arrayResults.length; index += 1) {
        if (theBigger > arrayResults[index]) {
            theBigger = arrayResults[index];
        }
    }
    console.log(arrayResults);
    return theBigger;
};
console.log(closestTarget(words, "zemkwvqrww", 8));