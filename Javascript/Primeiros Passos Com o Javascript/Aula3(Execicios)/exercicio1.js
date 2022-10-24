//EXERCICIO 1 - Calcular media 
let nota1 = 4;
let nota2 = 5.5;
let nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log('Voce esta aprovado')
} else if (media >= 5 & media < 7) {
    console.log('Voce esta em Recuperação')
} else {
    console.log('Voce reprovou')
}