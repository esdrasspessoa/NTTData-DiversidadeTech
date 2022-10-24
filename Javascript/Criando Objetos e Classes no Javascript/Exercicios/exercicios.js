let distancia = 320;
let precoCombustivel = 5.79;

class carros {

    marca;
    cor;
    kmL;

    constructor(marca, cor, kmL) {
        this.marca = marca;
        this.cor = cor;
        this.kmL = kmL;
    }

    consumoMedio() {
        return (distancia / this.kmL) * precoCombustivel;
    }
}

const volks = new carros('Polo', 'Preto', 10)
const fiat = new carros ('Argo', 'Branco', 12)


console.log(`O primeiro carro da lista é o ${volks.marca}, da cor ${volks.cor}, e ele faz ${volks.kmL}Km/L. Numa distancia aplicada a ele de ${distancia}Km/h, e com a media do combustivel custando R$${precoCombustivel} ira custar R$${volks.consumoMedio()}`)

console.log(`O primeiro carro da lista é o ${fiat.marca}, da cor ${fiat.cor}, e ele faz ${fiat.kmL}Km/L. Numa distancia aplicada a ele de ${distancia}Km/h, e com a media do combustivel custando R$${precoCombustivel} ira custar R$${fiat.consumoMedio()}`)

/*===========================================================================================================*/

class pessoas {
    nome;
    peso;
    altura;


    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoIMC(){
        return this.peso / (this.altura * this.altura)
    }

    classificarIMC() {/*SEMPRE ENVOCAR A FUNÇÃO ()*/

        if (this.calculoIMC() < 18.5 ) {
            return 'Abaixo de peso'
        } else if (this.calculoIMC() >= 18.5 && this.calculoIMC() <= 25) {
            return 'Peso normal'
        } else if (this.calculoIMC() >= 25 && this.calculoIMC() <= 30){
            return 'Acima do Peso'
        } else if (this.calculoIMC() >= 30 && this.calculoIMC() <= 40){
            return 'Obeso' 
        } else {
            return 'Obesidade Grave'
        }
    }

}

const jose = new pessoas('José', 85, 1.69)
console.log(`O IMC de ${jose.nome} é ${jose.calculoIMC().toFixed(2)}. E classificação dele é: ${jose.classificarIMC()}`)


const giselle = new pessoas('Giselle', 54, 1.58)
console.log(`O IMC de ${giselle.nome} é ${giselle.calculoIMC().toFixed(2)}. E classificação dele é: ${giselle.classificarIMC()}`)
