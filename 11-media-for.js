const notas = [10, 8.5, 5, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++ ) {
    somaDasNotas += notas[i];
}

console.log(`A soma das notas é ${somaDasNotas}`);

const media = somaDasNotas/notas.length;
console.log(`A média das notas é ${media}`);