/*
SELECIONE A OPÇÃO DE PAGAMENTO
1 - Debito
2 - Dinheiro 
3 - PIX
4 - 2x
5 - Outras Opções no crédito
*/


let valorProduto = 249.90
let tipoPagamento = '4'

if (tipoPagamento === '1') {

    let desconto = (valorProduto * 10) / 100;
    let debito = valorProduto - desconto
    console.log(`Voce pagara: ${debito.toFixed(2)}`)

} else if (tipoPagamento === '2' || tipoPagamento === '3') {

    let desconto = (valorProduto * 15) / 100;
    let dinheiroPix = valorProduto - desconto
    console.log(`Voce pagara: ${dinheiroPix.toFixed(2)}`)

} else if (tipoPagamento === '4') {

    let pagDuasVezes = valorProduto / 2
    console.log(`Voce pagara 2x de ${pagDuasVezes.toFixed(2)} sem juros`)

} else {

    /*pagamento 3x*/
    let pagVezes = valorProduto / 3
    let acrescimo = (pagVezes * 10) / 100
    let pagParcelado = pagVezes + acrescimo
    console.log(`Voce pagara 3x de ${pagParcelado.toFixed(2)}`)

    /*pagamento 4x*/
    pagVezes = valorProduto / 4
    acrescimo = (pagVezes * 10) / 100
    pagParcelado = pagVezes + acrescimo
    console.log(`Voce pagara 4x de ${pagParcelado.toFixed(2)}`)

    /*pagamento 5x*/
    pagVezes = valorProduto / 5
    acrescimo = (pagVezes * 10) / 100
    pagParcelado = pagVezes + acrescimo
    console.log(`Voce pagara 5x de ${pagParcelado.toFixed(2)}`)

    /*pagamento 6x*/
    pagVezes = valorProduto / 6
    acrescimo = (pagVezes * 10) / 100
    pagParcelado = pagVezes + acrescimo
    console.log(`Voce pagara 6x de ${pagParcelado.toFixed(2)}`)
}