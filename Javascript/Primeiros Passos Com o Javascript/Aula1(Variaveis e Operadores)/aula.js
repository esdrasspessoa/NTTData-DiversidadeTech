//estou usando para executar o console.log no HTML pq não tenho instalado o node.js


const precoCombustivel = 4.69;
let kmPorLitros = 10;
let distanciaViagem = 3805;

let litros = distanciaViagem / kmPorLitros

let valorViagem = litros * precoCombustivel

console.log('Voce ira gastar:' + valorViagem.toFixed(2)) //.toFixed() ele arrendonda o valor do decimal (rebebe o parametro de quantidade de casas)