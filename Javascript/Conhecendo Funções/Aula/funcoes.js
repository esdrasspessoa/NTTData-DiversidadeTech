//Funcoes Sao um bloco de codigo que podemos chamar a qualquer momento

function teste(/*parametro*/) {
    console.log('teste')
}

/*para chama-la*/
teste();


//ex2:
function sayMyName(name) {
    console.log(`You name is ${name}`)
}

sayMyName('Esdras')

//ex3:
function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(`O quadrado é ${quadradoDeDez}`)

//ex4:
function incrementarJuros(valor, percentualJuros) {
    const valorAcrescimo = (valor * percentualJuros) / 100;
    return valor + valorAcrescimo
}

console.log(incrementarJuros(329, 10))