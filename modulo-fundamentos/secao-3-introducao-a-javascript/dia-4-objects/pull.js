//const arrayPlayers = require("./push"); // formas de importar dados. Forma antiga
import reader from "./push.js"; // formas de importar dados
// Exercicio 1: O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.
//console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama '${reader.favoriteBooks[0]["title"]}'.`);

// 2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:
/* const newBook = {
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
};
reader.favoriteBooks.push(newBook); */
//console.log(reader);

// 3 - Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:

/* “Julia tem {quantidade} livros favoritos.”

{quantidade} corresponde à quantidade de livros favoritos, sendo um número gerado automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser:

“Julia tem 1 livro favorito.” */
if (reader.favoriteBooks.length == 1) {
    console.log(`${reader.name} tem 1 livro favorito.`);
} else {
    console.log(`${reader["name"]} tem ${reader["favoriteBooks"].length}`);
}