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
