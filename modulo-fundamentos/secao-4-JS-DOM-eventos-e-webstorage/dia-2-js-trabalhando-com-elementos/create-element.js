let elementoPai = document.getElementById("pai");
let criaFilhoParaPai = document.createElement("section");
criaFilhoParaPai.innerText = "Novo Filho de Pai";
elementoPai.appendChild(criaFilhoParaPai);
let elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta");
let criaFilhoParaOndeVoceEsta = document.createElement("section");
elementoOndeVoceEsta.appendChild(criaFilhoParaOndeVoceEsta);

let elementoFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");
let criaFilhoParaFilhoDoFilho = document.createElement("div");
criaFilhoParaFilhoDoFilho.innerText = "Filho do Filho do Filho";
elementoFilhoDoFilho.appendChild(criaFilhoParaFilhoDoFilho);

console.log(criaFilhoParaFilhoDoFilho.parentNode.parentNode.nextElementSibling);

//Removendo um elemento
let getAllChildrenFromPai = document.querySelector("#pai").querySelectorAll("section");
let getPai = document.querySelector("#pai");
for (let index = 0; index < getAllChildrenFromPai.length; index += 1) {
    let element = getAllChildrenFromPai[index];
    if (element.innerText.includes("Elemento que devo remover")) {
        //getPai.removeChild(element); // nessa forma precisa buscar o pai
        element.remove(); // Nessa forma de remover não precisa do pai, basta remover o filho da lista
    }
}
