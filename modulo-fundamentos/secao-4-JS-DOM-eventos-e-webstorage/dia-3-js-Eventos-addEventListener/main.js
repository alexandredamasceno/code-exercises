const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Por causa de uma propriedade CSS que estava fazendo o elemento subir 20px

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.
function addTechClassName (event) {
    let getAllLi = document.querySelectorAll("ul li");
    for (let index = 0; index < getAllLi.length; index += 1) {
        if (getAllLi[index].className === "tech") {
            getAllLi[index].classList.remove("tech");
        }
    }
    let elementTarget = event.target;
    elementTarget.className = "tech";
}
firstLi.addEventListener("click", addTechClassName)
secondLi.addEventListener("click", addTechClassName)
thirdLi.addEventListener("click", addTechClassName)
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.
const changetext = (event) => {
    let getElementWhoIllBeChanged = document.querySelector(".tech");
    let getValue = event.target.value;
    
    getElementWhoIllBeChanged.innerText = getValue;
}

input.addEventListener("change", changetext)

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace = vai para outra pagina e apaga no historico a pagina que estava antes, ou seja, sem retorno` e `window.open =  abre o link em uma nova aba sem apagar a pagina anterior do historico de navegação`.
myWebpage.addEventListener("dblclick", () => {
    window.open("https://github.com/alexandredamasceno");
});


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.
let arrayColors = ["Blue", "green", "red", "black"];
let count = 0;
myWebpage.addEventListener("mouseover", () => {
    if (count >= arrayColors.length) {
        count = 0;
    }
    myWebpage.style.backgroundColor = arrayColors[count];
    count += 1;
});

// Segue abaixo um exemplo de uso do event.target.

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.