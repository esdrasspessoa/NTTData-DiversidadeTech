// Exercicio - Calculo IMC

let peso = 85;
let altura = 1.68;

let calculoIMC = peso / Math.pow(altura, 2);  //o Math.pow(x,Y) FOI USADO PARA DECLARA A ALTURA AO QUADRADO

if (calculoIMC < 18.5 ) {
    console.log('Abaixo de peso')
} else if (calculoIMC >= 18.5 && calculoIMC <= 25) {
    console.log('Peso normal')
} else if (calculoIMC >= 25 && calculoIMC <= 30){
    console.log('Acima do Peso')
} else if (calculoIMC >= 30 && calculoIMC <= 40){
    console.log('Obeso' + calculoIMC)
} else {
    console.log('Obesidade Grave')
}