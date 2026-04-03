const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

/* let newArray = [];
for (let indexB = 0; indexB < basket.length; indexB += 1) {
    if (newArray.includes(basket[indexB])) {
        newArray = newArray;
    } else {
        newArray.push(basket[indexB]);
    }
}
let theObject = {};
for (let indexA = 0; indexA < newArray.length; indexA += 1) {
    theObject[newArray[indexA]] = 0;
    for (let indexB = 0; indexB < basket.length; indexB += 1) {
        if (basket[indexB] == newArray[indexA]) {
            theObject[newArray[indexA]] += 1;
        }
    }
}
console.log(newArray);
console.log(theObject); */

// Transformei em uma função = código replicável
function raiseTheObject(array) {
    let newArray = [];
    for (let indexB = 0; indexB < array.length; indexB += 1) {
        if (newArray.includes(array[indexB])) {
            newArray = newArray;
        } else {
            newArray.push(array[indexB]);
        }
    }
    let theObject = {};
    for (let indexA = 0; indexA < newArray.length; indexA += 1) {
        theObject[newArray[indexA]] = 0;
        for (let indexB = 0; indexB < array.length; indexB += 1) {
            if (array[indexB] == newArray[indexA]) {
                theObject[newArray[indexA]] += 1;
            }
        }
    }

    console.log(theObject);
}
raiseTheObject(basket);
