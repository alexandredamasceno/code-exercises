let elementWhereAreYou = document.getElementById("where-are-you");
console.log(elementWhereAreYou);
elementWhereAreYou.parentNode.style.backgroundColor = "red";
elementWhereAreYou.firstElementChild.innerHTML = "Hello"

let parentElement = document.querySelector("#parent").firstElementChild;
console.log(parentElement);

let getThePreviousSibling = elementWhereAreYou.previousElementSibling;
console.log(getThePreviousSibling);

let getFirstSiblingNode = elementWhereAreYou.nextSibling;
console.log(getFirstSiblingNode);

let getTheThirdChild = elementWhereAreYou.nextElementSibling;
console.log(getTheThirdChild);

let getTheThirdByParent = document.querySelector("#parent").lastElementChild.previousElementSibling;
console.log(getTheThirdByParent);




