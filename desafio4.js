//Desafio 1: Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const notas = [10, 20, 30, 40];

notas.forEach(function(nota) {
    console.log(`Indice ${indice} e a nota ${nota}`)
});


//Desafio 2: Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray (array, operacao) {
    for (let i = 0; i < array.length; i++) {
        const resultado = operacao(array[i]);
        console.log(`Resultado da operação no elemento ${array[i]}: ${resultado}`);
    }
}

function multiplicarPorDois(numero) {
    return numero * 2;
}

const numeros = [1, 2, 3, 4, 5];

executaOperacaoEmArray(numeros, multiplicarPorDois);



//Desafio 3: Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const valor = [10, 20, 30, 40, 50];

function verificador(numero) {
    const indice = valor.indexOf(numero);

    if (indice !== -1) {
        console.log(`O número ${numero} está no índice ${indice}.`);
    } else {
        console.log("-1");
    }
}

verificador(30);
verificador(100);



//Desafio 4:Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

const alunoProcurado = 'Ana Souza';

const alunoEncontrado = todasAsTurmas.find(function(nome) {
    return nome === alunoProcurado;
});

if (alunoEncontrado) {
    console.log(`Aluno encontrado: ${alunoEncontrado}`);
  } else {
    console.log('Aluno não encontrado');
  }