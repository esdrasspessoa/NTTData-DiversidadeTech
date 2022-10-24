// Exercicio - Calculo IMC com funçoes

function calculoIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificacaoImc(calculoIMC) {
    if (calculoIMC < 18.5 ) {
        return 'Abaixo de peso'
    } else if (calculoIMC >= 18.5 && calculoIMC <= 25) {
        return 'Peso normal'
    } else if (calculoIMC >= 25 && calculoIMC <= 30){
        return 'Acima do Peso'
    } else if (calculoIMC >= 30 && calculoIMC <= 40){
        return 'Obeso'
    } else {
        return 'Obesidade Grave'
    }
}

/*function main() {

    let peso = 85;
    let altura = 1.68;
    const imc = calculoIMC(peso, altura)

    console.log(classificacaoImc(imc), imc.toFixed(2))
}

main ()*/

/*outro modo utiliza do desenvolvimento web é fazer com essa função se auto-execute*/

(function () {

    let peso = 85;
    let altura = 1.68;
    const imc = calculoIMC(peso, altura)

    console.log(classificacaoImc(imc), imc.toFixed(2))
})()




