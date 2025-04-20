//1.0 Array esparso.
const arrayEsparso = [];

arrayEsparso[1] = 'A';
arrayEsparso[3] = 'B';
arrayEsparso[7] = 'C';

console.log(arrayEsparso);

console.log(arrayEsparso.length);


//2.0 Novo valor.
const elementos = [10, 20, 30, 40, 50];

elementos[0] = 5;

console.log(elementos);


//3.0 adicionar valor e dobrar o indice 0.
const meuArray = [];

meuArray.push(1, 2, 3);

console.log(meuArray);

meuArray[0] = meuArray[0]*2;

console.log(meuArray);


//4.0 adicionar valor.
const numeros = [];

numeros.push(5, 10, 15);

console.log(numeros);


//5.0 clínica veterinária.
const clinica  = [];

clinica.push('cachorro', 'gato', 'rato');

console.log(clinica);

clinica.pop();
clinica.pop();
clinica.pop();

console.log(clinica);