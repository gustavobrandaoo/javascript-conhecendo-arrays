const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telfones: ['11999999999','11999999980'],
}

estudante.endereco = {
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
}

console.log(estudante);

// Pesquisar apenas a rua.

console.log(estudante.endereco.rua);
