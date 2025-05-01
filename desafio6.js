// Desafio 1: Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa.

const pessoa = {
    nome: 'Marcelo de Souza',
    idade: 27,
    solteiro: true,
    hobbies: ['Jogar Futebol', 'Ler'],
 }

 function mostrarInfoPessoa(objeto) {
    console.log(`Nome: ${objeto.nome} (tipo: ${typeof objeto.nome})`);
    console.log(`Idade: ${objeto.idade} (tipo: ${typeof objeto.idade})`);
    console.log(`Solteiro: ${objeto.solteiro} (tipo: ${typeof objeto.solteiro})`);
    console.log(`Hobbies: ${objeto.hobbies} (tipo: ${typeof objeto.hobbies})`);
 }

mostrarInfoPessoa(pessoa);


// Desafio 2: Adicione ao objeto individuo uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa. 
// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

 pessoa.endereco = {
    rua: 'Limoeiro',
    cidade: 'São Paulo',
    estado: 'SP'
 }

 function mostrarInfoPessoa(objeto) {
    console.log(`Nome: ${objeto.nome} (tipo: ${typeof objeto.nome})`);
    console.log(`Idade: ${objeto.idade} (tipo: ${typeof objeto.idade})`);
    console.log(`Solteiro: ${objeto.solteiro} (tipo: ${typeof objeto.solteiro})`);
    console.log(`Hobbies: ${objeto.hobbies} (tipo: ${typeof objeto.hobbies})`);

    if (objeto.endereco) {
        console.log(`Endereço:`);
        console.log(`  Rua: ${objeto.endereco.rua} (tipo: ${typeof objeto.endereco.rua})`);
        console.log(`  Cidade: ${objeto.endereco.cidade} (tipo: ${typeof objeto.endereco.cidade})`);
        console.log(`  Estado: ${objeto.endereco.estado} (tipo: ${typeof objeto.endereco.estado})`);
    }
 }

mostrarInfoPessoa(pessoa);


// Desafio 3: Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa.

let pessoas = [
    {
        nome: "Ana Silva",
        idade: 28,
        cidade: "São Paulo"
    },
    {
        nome: "Carlos Souza",
        idade: 35,
        cidade: "Rio de Janeiro"
    },
    {
        nome: "Mariana Costa",
        idade: 22,
        cidade: "Belo Horizonte"
    }
];

function mostrarListaPessoas(lista) {
    lista.forEach(pessoa => {           //passar por cada linha.
        console.log(`${pessoa.nome}, ${pessoa.idade} anos, mora em ${pessoa.cidade}`);
    });
}

pessoas.push({
    nome: "José Silva",
    idade: 25,
    cidade: "Porto Alegre"
})

mostrarListaPessoas(pessoas);

function filtrarPorCidade(lista, cidade) {
    return lista.filter(pessoa => pessoa.cidade === cidade);
}

let moradoresDeSaoPaulo = filtrarPorCidade(pessoas, "São Paulo");

mostrarListaPessoas(moradoresDeSaoPaulo);


// Desafio 4: Crie um objeto chamado calculadora.

let calculadora = {

    soma: function(a, b) {
        return a + b;
    },

    subtracao: function(a, b) {
        return a - b;
    },

    multiplicacao: function(a, b) {
        a * b;
    },

    divisao: function(a,b) {
        if (b === 0) {
            return 'Erro: divisão por zero!';
        } else {
            return a / b;
        }
    },

    calcularMedia: function(numeros) {
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length;
    }
};

console.log("Soma: " + calculadora.soma(5, 3));
console.log("Subtração: " + calculadora.subtracao(8, 4));
console.log("Multiplicação: " + calculadora.multiplicacao(6, 2));
console.log("Divisão: " + calculadora.divisao(10, 2));
console.log("Divisão por zero: " + calculadora.divisao(8, 0));

const numerosParaMedia = [10, 8, 6, 9, 7];
console.log("Média: " + calculadora.calcularMedia(numerosParaMedia));