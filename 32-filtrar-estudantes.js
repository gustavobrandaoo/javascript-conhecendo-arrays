const estudantes = require('./estudante.json');

function filtraPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.has0wnProperty(propriedade);
    })
}

const listaEnderecosIncompletos = filtraPorPropriedade(estudantes, 'cep');
console.log(listaEnderecosIncompletos);