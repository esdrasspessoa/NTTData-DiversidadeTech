/*suponha que teremos essa mesma estrutura de codigo para colocar mais pessoas, ate então eu teria que ficar repetindo o cogido. Isso não é certo, para fazer um codigo mais simples, vamos usar as classes*/

/*classe é definição do objeto*/
class pessoa {
    nome;
    idade;

    descrever(){ /*nao precisar colocar function*/
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

/*instancia é a ocorrencia do objeto*/
const esdras = new pessoa();
esdras.nome = 'Esdras';
esdras.idade = 22;

console.log(esdras)
esdras.descrever()

const giselle = new pessoa();
giselle.nome = 'Giselle';
giselle.idade = 19;

console.log(giselle)
giselle.descrever()

/*uma forma mais pro de fazer é usando o constructor*/

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

const beta = new pessoas('Betania', 49)
console.log(beta)
beta.descrever()

const edson = new pessoas('Edson', 50)
console.log(edson)
edson.descrever()
