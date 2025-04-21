//Desafio 1: Crie uma função que receba dois arrays e os concatene em um único array.
function novafuncao(array1, array2) {
    const arrayUniao = array1.concat(array2);
    return arrayUniao;
}

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const resultado = novafuncao(numeros1, numeros2);
console.log(resultado);


//Desafio 2: Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(3,7);


//Desafio 3: Dado o array frutas contendo frutas que desejamos comprar na feira.
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 2, 'Kiwi', 'Pêssego');
console.log(frutas);


//Desafio 4: Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
const menuPrincipal = ['Filé com fritas', 'Lasanha', 'Risoto de cogumelos', 'Frango grelhado'];
const menuDeSobremesas = ['Pudim', 'Sorvete', 'Torta de limão', 'Brownie'];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto);


//Desafio 5: Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.
const matriz = [];
let numero = 10;

for (let i = 0; i < 3; i++) {
    const linha = [];

    for (let j = 0; j < 3; j++) {
        linha.push(numero);
        numero++;
    }

    matriz.push(linha);
}

console.log(matriz);