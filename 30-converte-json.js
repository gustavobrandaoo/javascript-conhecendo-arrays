const estudante = require('./estudante.json');


//Transformando em String
const stringEstudante = JSON.stringify(estudante);

console.log(stringEstudante);
console.log(typeof stringEstudante);



//Transformando em objetos novamente.
const objEstudante = JSON.parse(stringEstudante);

console.log(objEstudante);
console.log(objEstudante.nome);
console.log(typeof objEstudante);