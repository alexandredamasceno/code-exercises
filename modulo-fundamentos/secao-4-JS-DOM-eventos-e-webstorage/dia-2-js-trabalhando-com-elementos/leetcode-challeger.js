const words = ["a", "b", "leetcode"];
const wordsTwo = ["hsdqinnoha","mqhskgeqzr","zemkwvqrww","zemkwvqrww","daljcrktje","fghofclnwp","djwdworyka","cxfpybanhd","fghofclnwp","fghofclnwp"];

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

    // Tenta nova lógica
    // inicia a logica do circular do startIndex até final do array
    let countFromTheTopToTheStartIndex = 0;
    let countFromTheBottomToTheTarget = 0;

    let distanceFromTop = startIndex - (words.length - 1);
    let distanceFromBottom =  startIndex - 0;
    
    if (Math.abs(distanceFromTop) < Math.abs(distanceFromBottom)) {
        
        let wordsIndex = words.length - 1;
        for (let index = wordsIndex; index > startIndex; index -= 1) {
            countFromTheTopToTheStartIndex += 1; 
        }
        //Agora pega do bottom até o target
        for (let index = 0; index < words.length; index += 1) {
            if (words[index] === target) {
                countFromTheBottomToTheTarget += 1;
                break;
            }
            countFromTheBottomToTheTarget += 1;
        }
        let sum = countFromTheTopToTheStartIndex + countFromTheBottomToTheTarget;
        arrayResults.push(Math.abs(sum));
    }

    if (Math.abs(distanceFromTop) > Math.abs(distanceFromBottom)) {
        let countFromStartIndexToTheBottom = 0;
        let countFromTopToTheTarget = 0;
        if (distanceFromBottom === 0) {
            countFromStartIndexToTheBottom = 0;
        }
        for (let index  = startIndex - 1; index >= 0; index -= 1) {
            countFromStartIndexToTheBottom += 1;
        }
        for (let index = words.length - 1; index >= 0; index -= 1) {
            if (words[index] === target) {
                countFromTopToTheTarget += 1;
                break;
            }
            countFromTopToTheTarget += 1;
        }
        let sum = countFromStartIndexToTheBottom + countFromTopToTheTarget;
        arrayResults.push(sum);
    }

    let theBigger = arrayResults[0];
    for (let index = 0; index < arrayResults.length; index += 1) {
        if (theBigger > arrayResults[index]) {
            theBigger = arrayResults[index];
        }
    }
    return theBigger;
};
console.log(closestTarget(wordsTwo, "zemkwvqrww", 8));