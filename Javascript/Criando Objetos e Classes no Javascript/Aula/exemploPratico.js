class pessoas {
    nome;
    idade;
    anoDeNasc;

    /*ele meio que obriga os valores que tem que passar pras propriedade*/
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNasc = 2022 - idade
    }

    descrever(){ /*nao precisar colocar function*/
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos e eu nasci no ano de ${this.anoDeNasc}.`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    } else if (p1.idade > p2.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`)
    }
}

const esdras = new pessoas('Esdras', 22)
const giselle = new pessoas('Giselle', 19)

compararPessoas(esdras, giselle)