const player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};
// Notação de pontos ou Dote notation
/* const message = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`;
console.log(message); */
// Notaão de colchetes
/* const achievements = `A jogadora ${player['name']} ${player['lastName']} foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes`;
console.log(achievements);
console.log(player);
player.middleName = "Sousa";
console.log(player); */

const addKeysAndValue = (object, newKey, value) => {
    //object[newKey] == undefined ? object[newKey] = value : console.log("Valor já existe");
    //typeof object[newKey] === undefined ? object[newKey] = value : console.log("Valor já existe");
    console.log(object[newKey]);
    console.log(typeof object[newKey]);
    console.log(typeof (typeof object[newKey]));
    
    if (typeof object[newKey] == "undefined") {
        object[newKey] = value;
    } else {
        console.log("Valor já existe");
    }
     console.log(typeof object[newKey]);
    //object[newKey] = value;
}
addKeysAndValue(player, "birthPlace", 28);
addKeysAndValue(player, "birthPlace", 30);
addKeysAndValue(player, "birthDate", "20/03/2000");
addKeysAndValue(player, "birthDate", "20/03/2020");
addKeysAndValue(player, "maritalStatus", "Casada");
addKeysAndValue(player, "Hello", "World!!!");
console.log(player);



/* const residents = [
  {
    name: 'Luíza',
    lastName: 'Guimarães',
    floor: 10,
    apartment: 1005,
  },
  {
    name: 'William',
    lastName: 'Albuquerque',
    floor: 5,
    apartment: 502,
  },
  {
    name: 'Murilo',
    lastName: 'Ferraz',
    floor: 8,
    apartment: 804,
  },
  {
    name: 'Zoey',
    lastName: 'Brooks',
    floor: 1,
    apartment: 101,
  },
];
console.log(residents[0].apartment);
console.log(`O ultimo residente é: ${residents[residents.length - 1].name}`);
for (let index = 0; index < residents.length; index += 1) {
    console.log(residents[index].name);
} */

/* const account = {
  agency: '0975',
  bank: {
    cod: '012',
    id: 4,
    name: 'TrybeBank',
  },
};
console.log(account.bank.cod); */
/* const myFunc = () => console.log("Hello, world!!!");
myFunc();
function myType() {
    console.log("Vamos ver!");
};
const myArray = ["Alexandre", 10, "Hello"];
console.log(typeof myFunc);
console.log(typeof myType);
console.log(typeof myArray); */