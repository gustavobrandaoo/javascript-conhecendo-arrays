const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

console.log(estudante.nome);
console.log(`O nome de estudante é ${estudante.nome}`);
console.log(`Os três primeiros digitos doestudante ${estudante.nome} é ${estudante.cpf.substring(0, 3)}`);