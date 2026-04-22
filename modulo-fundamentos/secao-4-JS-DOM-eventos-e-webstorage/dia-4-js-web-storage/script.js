document.cookie = "user=alexandredamasceno"; // Adciona um cookie de chave=user, e valor=alexandredamaasceno
document.cookie = "firstname=Alexandre";
console.log(document.cookie.includes("user"));

// localStorage = dados ficam salvas sem data de expiração. Só serão sumirão quando explicitação removidos
console.log(`tamanho do localStorage antes de tudo: ${localStorage.length}`);
localStorage.setItem('username', 'alexandredamasceno');
localStorage.setItem("firstname", "Alexandre");
localStorage.setItem("lastname", "Damasceno");
console.log(`tamanho do localStorage depois das inserções: ${localStorage.length}`);
console.log(localStorage);
console.log(`Buscando a chave username: ${localStorage.getItem("username")}`)
localStorage.removeItem("lastname");;
console.log(`tamanho do localStorage depois da remoção: ${localStorage.length}`);
console.log(localStorage);

//localStorage.clear(); // Limpa todo os objeto de armazenamento LocalStorage
console.log(`tamanho do localStorage depois do clear(): ${localStorage.length}`);

// sessionStorage =  os dados ficam salva até que o usuário fecha a aba ou a janela do navegador. Chave e valor em string
// possui os mesmos atributos do localStorage para inserir, busca e excluir um item, por exemplo.

// Armazenando outros tipos de dados além de string
localStorage.setItem("age", 28);
// recuperando esse dado no tipo de origem dele(number) utilizando o método JSON.parse(), pois o setItem guarda tudo no localStorage em String.
let getMyAge = JSON.parse(localStorage.getItem("age"));
console.log(typeof getMyAge);

// Guardando object no localStorage/sessionStorage com o método JSON.stringify()
let meyObject = {
    name: "alexandre damasceno",
    age: 28,
    country: "Brasil",
}
localStorage.setItem('object', JSON.stringify(meyObject));

let getMyObject = JSON.parse(localStorage.getItem("object")); // LEMBRA DE USAR O JSON.PARSE SENÃO VAI VIR TUDO NO TIPO STRING
console.log(getMyObject);

let getMyObjectTwo = localStorage.getItem("object");// Formato de string sem o JSON.parse()
console.log(typeof getMyObjectTwo);


