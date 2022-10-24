//Funcoes Sao um bloco de codigo que podemos chamar a qualquer momento
//RELEBRANDO

//Funçção escrava nome

function escrevaNome(nome) {
    console.log(`Meu nome é ${nome}`);
}
escrevaNome('Esdras');

//Função maior de idade 

function verificarIdade(idade) {
    if (idade >= 18) {
        return 'Você é de maior'
    } else {
        return 'Voce é de menor'
    }
}

let idade = 18;
let maiorIdade = verificarIdade(idade)
console.log(maiorIdade)

//Função pagamento juros

/*
SELECIONE A OPÇÃO DE PAGAMENTO
1 - Debito
2 - Dinheiro 
3 - PIX
4 - 2x
5 - Outras Opções no crédito
*/

function valorDesconto(valorProduto, porcentagem) {
    return valorProduto - ((valorProduto*porcentagem) / 100)
}

function valorJuros(valorProduto, porcentagem) {
    return valorProduto + ((valorProduto*porcentagem) / 100)
}

let valorProduto = 249.90
let tipoPagamento = '5'


if (tipoPagamento === '1') {

    console.log(`Voce ira pagar ${valorDesconto(valorProduto, 10).toFixed(2)}`)

} else if (tipoPagamento === '2' || tipoPagamento === '3') {

   console.log(`Voce ira pagar ${valorDesconto(valorProduto, 15).toFixed(2)}`)

} else if (tipoPagamento === '4') {

    let pagDuasVezes = valorProduto / 2
    console.log(`Voce pagara 2x de ${pagDuasVezes.toFixed(2)} sem juros`)

} else {    
    /*pagamento 3x*/
    let parcelado = valorJuros(valorProduto, 10) / 3
    console.log(`Voce ira pagar 3x de ${parcelado.toFixed(2)}`)

    /*pagamento 4x*/
    parcelado = valorJuros(valorProduto, 10) / 4
    console.log(`Voce ira pagar 4x de ${parcelado.toFixed(2)}`)

    /*pagamento 5x*/
    parcelado = valorJuros(valorProduto, 10) / 5
    console.log(`Voce ira pagar 5x de ${parcelado.toFixed(2)}`)
    
}

