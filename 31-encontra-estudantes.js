const estudantes = require('./estudantes.json');

//Localizar alguma informação.

//function buscaInformacao(lista, chave, valor) {
//    return lista.find((estudante) => estudante[chave] === valor);  
//}

//Por ter uma array e a informação ser encontrada:

function buscaInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));  // Usamos o find para encontrar algo dentro de uma lista.
}


const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const telefoneEncontrado = buscaInformacao(estudantes, 'telefone', '1198123183');
console.log(telefoneEncontrado);