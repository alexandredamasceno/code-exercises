// JSON em formato object. Mas em JSON chave não pode receber funções e as chaves tem de serem representadas por strings e só aceita aspas duplas. Arquivos padronizados com a extensão .json
const jsonList = {
    "listProducts": {
        "city": "Goiânia",
        "temperature": 28,
        "humidity": 70,
        "conditions": "Ensolarado"
    },
    "listPro": {
        "city": "Goiânia",
        "temperature": 28,
        "humidity": 70,
        "conditions": "Ensolarado"
    }
};
// JSON formatado de array:
const jsonArray = [
  {
    "product": "Arroz",
    "brand": "Tio João",
    "price": 10.50
  },
  {
    "product": "Feijão",
    "brand": "Camil",
    "price": 8.99
  }
];
console.log(Object.entries(jsonList));