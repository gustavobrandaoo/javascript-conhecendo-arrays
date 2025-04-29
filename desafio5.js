// Desafio 1: Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. 

const livro = {
    titulo: 'O Pequeno Príncipe',
    autor: ' Antoine Saint',
    anoPublicacao: 1943,
    genero: 'Fantasia'
}

console.log(livro);


// Desafio 2: Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

const anoAtual = new Date().getFullYear();

const novoLivro = {
    titulo: 'O Pequeno Príncipe',
    autor: ' Antoine Saint',
    anoPublicacao: 1943,
    genero: 'Fantasia',
};

// Calcular a idade.
const idadePublicacao = anoAtual - novoLivro.anoPublicacao;

// Detalhes.
 const mostrarDetalhes = `O Pequeno Príncipe é uma obra clássica escrita por Antoine de Saint-Exupéry, publicada originalmente em 1943. A história conta a jornada de um pequeno príncipe que viaja por diferentes planetas, refletindo sobre temas como amizade, amor e a essência da vida de forma delicada e poética. Apesar de ser considerado um livro infantil, suas mensagens profundas conquistam leitores de todas as idades, encantando gerações há mais de ${idadePublicacao} anos.`

console.log(mostrarDetalhes);