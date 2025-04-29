const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telfones: ['11999999999','11999999980'],
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }]
}

estudante.endereco.push({
    rua: 'Saraiva Rodovia',
    numero: '1340',
    complemento: ''
})

//console.log(estudante.endereco);
//console.log(estudante.endereco[0]);


//Endereço com preenchimento, verdadeiro.
const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)


console.log(listaEnderecosComComplemento);