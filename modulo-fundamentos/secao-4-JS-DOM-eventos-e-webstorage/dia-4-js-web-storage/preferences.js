window.onload = () => {
    let getBody = document.querySelector("body");

    function addStyleSettings(element, storageItem) {
        console.log(storageItem);
        
        let getBackgroundColor = localStorage.getItem(storageItem);
        console.log(getBackgroundColor);
        
        element.style.backgroundColor = getBackgroundColor
    }
    addStyleSettings(getBody, "background-color");
    /* addStyleSettings(getBody, "font-color");
    addStyleSettings(getBody, "font-color");
    addStyleSettings(getBody, "line-height"); */

    /* function addBackgroundColor() {
        let getBackgroundColor = localStorage.getItem("background-color");
        getBody.style.backgroundColor = getBackgroundColor
    }
    addBackgroundColor(); */

    function addFontColor() {
        let getFontColor = localStorage.getItem("font-color");
        getBody.style.color = getFontColor;
    }
    addFontColor();

    const addFontSize = () => {
        let getFontSize = localStorage.getItem("font-size");
        getBody.style.fontSize = getFontSize;
    }
    addFontSize();

    const addLineHeight =  () => {
        let getLineHeight = localStorage.getItem("line-height");
        getBody.style.lineHeight = getLineHeight;
    }
    addLineHeight();

    const addFontFamily = () => {
        let getFontFamily = localStorage.getItem("font-family");
        getBody.style.fontFamily = getFontFamily;
    }
    addFontFamily();

    
    // Adiciona addEventListener nos botões de backgroundColor
    let getAllButtonsFromBackgroundColor = document.querySelectorAll("#background-color button");
    for (let index = 0; index < getAllButtonsFromBackgroundColor.length; index += 1) {
        getAllButtonsFromBackgroundColor[index].addEventListener("click", (event) => {
            localStorage.setItem("background-color", event.target.innerText);

            addStyleSettings(getBody, "background-color");
        });
    }

    // Adiconar addEventListener nos botões de font-color
    /* let getAllButtonsFromFontColor = document.querySelectorAll("#font-color button");
    for (let index = 0; index < getAllButtonsFromFontColor.length; index += 1) {
        getAllButtonsFromFontColor[index].addEventListener("click", (event) => {
            console.log(event.target.innerText);
            localStorage.setItem("font-color", event.target.innerText);

            addFontColor();
        });
    } */

    // Adicona addEventListener nos botões de font-size
    let getAllButtonsFromFontSize = document.querySelectorAll("#font-size button");
    for (let index = 0; index < getAllButtonsFromFontSize.length; index += 1) {
        getAllButtonsFromFontSize[index].addEventListener("click", (event) => {
            console.log(event.target.innerText);
            localStorage.setItem("font-size", event.target.innerText);

            addFontSize();
        });
    }

    // Adicona addEventListener em todos os botões de line-height
    let getAllButtonFromLineHeigth = document.querySelectorAll("#line-height button");
    for (let index = 0; index < getAllButtonFromLineHeigth.length; index += 1) {
        getAllButtonFromLineHeigth[index].addEventListener("click", (event) => {
            console.log(event.target.innerText);
            localStorage.setItem("line-height", event.target.innerText);

            addLineHeight();
        });
    }

    // Adicona addEventListener em todos os botões de font-family
    let getAllButtonsFromFontFamily = document.querySelectorAll("#font-family button");
    for (let index = 0; index < getAllButtonsFromFontFamily.length; index += 1) {
        getAllButtonsFromFontFamily[index].addEventListener("click", (event) => {
            console.log(event.target.innerText);
            localStorage.setItem("font-family", event.target.innerText);

            addFontFamily();
        });
    }
}