function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
}

const pessoa1 = {
    nome: 'Raphael',
    idade: 30,
};

const pessoa2 = {
    nome: 'Bruna',
    idade: 33,
};

const pessoa3 = {
    nome: 'Monica',
    idade: 57,
};

console.log(calculaIdade.call(pessoa3, 30));
console.log(calculaIdade.apply(pessoa2, [19]));