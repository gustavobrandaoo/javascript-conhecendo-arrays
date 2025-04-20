//Desafio 1
function novafuncao(array1, array2) {
    const arrayUniao = array1.concat(array2);
    return arrayUniao;
}

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const resultado = novafuncao(numeros1, numeros2);
console.log(resultado);


//Desafio 2
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(3,7);


//Desafio 3
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 2, 'Kiwi', 'Pêssego');
console.log(frutas);


//Desafio 4
const menuPrincipal = ['Filé com fritas', 'Lasanha', 'Risoto de cogumelos', 'Frango grelhado'];
const menuDeSobremesas = ['Pudim', 'Sorvete', 'Torta de limão', 'Brownie'];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto);


//Desafio 5
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