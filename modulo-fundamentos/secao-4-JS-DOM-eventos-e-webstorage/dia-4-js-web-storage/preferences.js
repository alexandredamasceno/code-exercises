window.onload = () => {
    let getBody = document.querySelector("body");

    function addStyleSettings(element, styleSelector, storageItem) {
        let getItemInStorage = localStorage.getItem(storageItem);
        element.style[styleSelector] = getItemInStorage;
    }

    addStyleSettings(getBody, "background-color");
    addStyleSettings(getBody, "font-color");
    addStyleSettings(getBody, "font-size");
    addStyleSettings(getBody, "line-height");
    addStyleSettings(getBody, "font-family");


    // Adiciona addEventListener nos botões de backgroundColor
    let getAllButtonsFromBackgroundColor = document.querySelectorAll("#background-color button");
    for (let index = 0; index < getAllButtonsFromBackgroundColor.length; index += 1) {
        getAllButtonsFromBackgroundColor[index].addEventListener("click", (event) => {
            localStorage.setItem("background-color", event.target.innerText);

            addStyleSettings(getBody, "backgroundColor","background-color");
        });
    }

    // Adiconar addEventListener nos botões de font-color
    let getAllButtonsFromFontColor = document.querySelectorAll("#font-color button");
    for (let index = 0; index < getAllButtonsFromFontColor.length; index += 1) {
        getAllButtonsFromFontColor[index].addEventListener("click", (event) => {
            console.log(event.target.innerText);
            localStorage.setItem("font-color", event.target.innerText);

            addStyleSettings(getBody, "color","font-color");
        });
    }

    // Adicona addEventListener nos botões de font-size
    let getAllButtonsFromFontSize = document.querySelectorAll("#font-size button");
    for (let index = 0; index < getAllButtonsFromFontSize.length; index += 1) {
        getAllButtonsFromFontSize[index].addEventListener("click", (event) => {
            console.log(event.target.innerText);
            localStorage.setItem("font-size", event.target.innerText);

            addStyleSettings(getBody, "fontSize","font-size");
        });
    }

    // Adicona addEventListener em todos os botões de line-height
    let getAllButtonFromLineHeigth = document.querySelectorAll("#line-height button");
    for (let index = 0; index < getAllButtonFromLineHeigth.length; index += 1) {
        getAllButtonFromLineHeigth[index].addEventListener("click", (event) => {
            console.log(event.target.innerText);
            localStorage.setItem("line-height", event.target.innerText);

            addStyleSettings(getBody, "lineHeight","line-height");
        });
    }

    // Adicona addEventListener em todos os botões de font-family
    let getAllButtonsFromFontFamily = document.querySelectorAll("#font-family button");
    for (let index = 0; index < getAllButtonsFromFontFamily.length; index += 1) {
        getAllButtonsFromFontFamily[index].addEventListener("click", (event) => {
            console.log(event.target.innerText);
            localStorage.setItem("font-family", event.target.innerText);

            addStyleSettings(getBody, "fontFamily","font-family");
        });
    }
}