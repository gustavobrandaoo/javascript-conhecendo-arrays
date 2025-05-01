// Desafio 1: Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa.

const pessoa = {
    nome: 'Marcelo de Souza',
    idade: 27,
    solteiro: true,
    hobbies: ['Jogar Futebol', 'Ler'],
 }

 function mostrarInfoPessoa(objeto) {
    console.log(`Nome: ${objeto.nome} (tipo: ${typeof objeto.nome})`);
    console.log(`Idade: ${objeto.idade} (tipo: ${typeof objeto.idade})`);
    console.log(`Solteiro: ${objeto.solteiro} (tipo: ${typeof objeto.solteiro})`);
    console.log(`Hobbies: ${objeto.hobbies} (tipo: ${typeof objeto.hobbies})`);
 }

mostrarInfoPessoa(pessoa);


// Desafio 2: Adicione ao objeto individuo uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa. 
// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

 pessoa.endereco = {
    rua: 'Limoeiro',
    cidade: 'São Paulo',
    estado: 'SP'
 }

 function mostrarInfoPessoa(objeto) {
    console.log(`Nome: ${objeto.nome} (tipo: ${typeof objeto.nome})`);
    console.log(`Idade: ${objeto.idade} (tipo: ${typeof objeto.idade})`);
    console.log(`Solteiro: ${objeto.solteiro} (tipo: ${typeof objeto.solteiro})`);
    console.log(`Hobbies: ${objeto.hobbies} (tipo: ${typeof objeto.hobbies})`);

    if (objeto.endereco) {
        console.log(`Endereço:`);
        console.log(`  Rua: ${objeto.endereco.rua} (tipo: ${typeof objeto.endereco.rua})`);
        console.log(`  Cidade: ${objeto.endereco.cidade} (tipo: ${typeof objeto.endereco.cidade})`);
        console.log(`  Estado: ${objeto.endereco.estado} (tipo: ${typeof objeto.endereco.estado})`);
    }
 }

mostrarInfoPessoa(pessoa);


