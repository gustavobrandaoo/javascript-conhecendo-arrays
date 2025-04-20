//Desafio 1
const numeros = [10, 20, 30, 40, 50];

for (let numero of numeros) {
    console.log(numero);
}


//Desafio 2
function exibirNumero (numeros) {
    for (let i = 0; i < numeros.length; i++) {
        
        console.log(i, numeros[i]);
    }
}

const lista = [10, 20, 30, 40, 50];
exibirNumero(lista);


//Desafio 3

function somaDeNumeros (valores) {
    let soma = 0;

    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    
    console.log(soma);
}

const novosValores = [5, 10, 15];
somaDeNumeros(lista);


//Desafio 4
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