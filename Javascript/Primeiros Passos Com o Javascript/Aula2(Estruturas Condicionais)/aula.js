//estou usando para executar o console.log no HTML pq não tenho instalado o node.js

//CONDICIONAIS -- Implemantan o exercicio da aula 1

const precoGasolina = 4.69;
const precoEtanol= 3.79;
let combustivel = 'Gasolina';
let kmPorLitros = 10;
let distanciaViagem = 200;

let litros = distanciaViagem / kmPorLitros

if (combustivel === 'Gasolina') {

    let valorViagem = litros * precoGasolina
    console.log(`Voce ira gastar: ${valorViagem.toFixed(2)}`)

} else if (combustivel == 'Etanol') {
    
    let valorViagem = litros * precoEtanol
    console.log(`Voce ira gastar: ${valorViagem.toFixed(2)}`)
}

