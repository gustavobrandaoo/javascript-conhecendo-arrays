//Desafio 1: Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const numeros = [10, 20, 30, 40, 50];

for (let numero of numeros) {
    console.log(numero);
}


//Desafio 2: Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function exibirNumero (numeros) {
    for (let i = 0; i < numeros.length; i++) {
        
        console.log(i, numeros[i]);
    }
}

const lista = [10, 20, 30, 40, 50];
exibirNumero(lista);


//Desafio 3: Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

function somaDeNumeros (valores) {
    let soma = 0;

    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    
    console.log(soma);
}

const novosValores = [5, 10, 15];
somaDeNumeros(lista);


//Desafio 4: Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
function numerosInt (valores) { 
    let maior = valores[0];
    let menor = valores[0];

    for(i = 1; i < valores.length; i++) {
        if (valores[i] > maior) {
            maior = valores[i];
        }
        if (valores[i] < menor) {
            menor = valores[i];
        }
    }

    return ` menor número é ${maior} e o maior número é ${menor}`
}

const lista = [8, 3, 15, 1, 22, 9];
console.log(numerosInt(lista));


//Desafio 5: Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
function numerosPares (valor) { 
    let pares = [];

    for(let i = 0; i < valor.length; i++) {
        if (valor[i] % 2 === 0) {
            pares.push(valor[i]);
        }
    }

    return `Os números pares são ${pares}`
}

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
console.log(numerosPares(numeros));


//Desafio 6: Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
