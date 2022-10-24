/*O Objeto é uma coleção dinamica de chave e valor*/

const aluno = {
    nome:'Esdras',
    idade: '22'
}

/*formas de chamar um objeto*/

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.idade);

/*é possivel incrementarl uma propriedade dentro objeto*/

aluno.altura = 1.68;

console.log(aluno)

/*ou remover*/

delete aluno.idade

console.log(aluno)

/*é possivel aplicar uma função dentro um objeto, ela será chamdad de metodo:*/

const pessoa = {
    nome:'Esdras',
    idade: '22',

    descrever: function () {
        /*this - palavra reservada para chamar a propriedade na função*/
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
}
}

pessoa.descrever()

/*se por acaso eu quiser alterar*/

pessoa.nome = 'Giselle';
pessoa.idade = 19;

pessoa.descrever();