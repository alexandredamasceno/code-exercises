// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

//event.preventDefault() usado para quebrar o comportamento padrão de determinado evento.
hrefLink.addEventListener("click", (event) => {
    event.preventDefault();
});

inputCheckbox.addEventListener("click", (event) => {
    event.preventDefault();
});

inputText.addEventListener("keypress", (event) => { //keypress é o evento que escuta o teclado, as teclas pressionadas
    const getTheKey = event.key //é como se busca a tecla que foi teclada
    if (getTheKey !== "a") {
        event.preventDefault();
    }
});