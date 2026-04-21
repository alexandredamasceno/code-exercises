let getWeeksDays = document.querySelector("#dias-da-semana");
let weeksDays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

// Cria os dias da semana
for (let index = 0; index < weeksDays.length; index += 1) {
    let createLi = document.createElement("li");
    createLi.innerText = weeksDays[index];
    createLi.className = `${weeksDays[index]} dia-da-semana`;
    getWeeksDays.appendChild(createLi);
}

// Cria os dias do mês e l[ogica do Sextou]
let getMonthsDays = document.querySelector("#dias-do-mes");
let countFriday = 0;
for (let index = 1; index <= 28; index += 1) {
    let createLi = document.createElement("li");
    countFriday += 1;
    createLi.innerText = index;
    createLi.className = "dia-do-mes";
    if (countFriday === 6) {
        createLi.className = "dia-do-mes sextou";
        countFriday = -1;
    }

    getMonthsDays.appendChild(createLi);
}

//Lógica botão sextou
getButtonSextou = document.getElementById("botao-sextou");
let guardaAllBeforeSextou = [];
getButtonSextou.addEventListener("click", function () {
    let getAllSextou = document.querySelectorAll(".sextou");
    guardaAllBeforeSextou = getAllSextou;
    for (let index = 0; index < getAllSextou.length; index += 1) {
        getAllSextou[index].innerText = "SEXTOU!!!";
    }
});



