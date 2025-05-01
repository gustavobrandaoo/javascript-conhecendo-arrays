//Desafio 1: Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

const pessoa = {
    nome: 'Ronaldo Santos',
    notas: [9.5, 7.0, 8.5],
    calcularMediaNotas: function() {
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    },

    classificarDesempenho: function() {
        const media = this.calcularMediaNotas();

        if (media >= 9) {
            return "Desempenho excelente";
        } else if (media >= 7.6 && media < 9) {
            return "Bom desempenho";
        } else if (media >= 6 && media < 7.6) {
            return "Desempenho regular";
        } else {
            return "Desempenho insuficiente";
        }
    }
};

console.log("Média:", pessoa.calcularMediaNotas());
console.log("Classificação:", pessoa.classificarDesempenho());


//Desafio 2: Crie um objeto chamado carro que represente as informações de um veículo.

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata"
};

for (let chave in carro) {
    const texto = `A chave ${chave} tem o valor ${carro[chave]}`
    console.log(texto);
}

// Adicionando novas propriedades por fora
carro.combustivel = "Flex";
carro.automatico = true;
carro.quilometragem = 35000;

for (let chave in carro) {
    const texto = `A chave ${chave} tem o valor ${carro[chave]}`
    console.log(texto);
}