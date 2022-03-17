console.clear();
const prompt = require('prompt-sync')();

const lista = [
    'Charles',
    'Biah',
    'Gabriel',
    'Andrei', 
    ['Gabriel Pereira','C13'] 
];

// // Acessando um elemento de uma array dentro de outra array    
// console.log(lista[4][0]);

// let listaInterna = lista[4];
// console.log(listaInterna[1])


// console.log(lista);
// console.log();

// //Alterando o valor de um elemento "direto" (não é o mais recomendado)
// lista[0] = 'Max';
// console.log(lista);

// //Exibindo o tamanho da lista
// console.log(lista.length);

// // Armazenando o tamanho em uma variável
// let tamanho = lista.length;
// console.log(tamanho)

// console.log(lista);

// //Adicionando um novo elemento
// let novoAluno = prompt('Digite o nome do(a) novo(a) aluno(a): ');
// lista.push(novoAluno);

// console.log(lista);


// let i = 0;

// //Trazendo um elemento de cada vez com ujma repetição
// while (i < lista.length) {
//     console.log(lista[i]);
//     // i = i + 1
//     // i += 1
//     i++
// }

// // Adicionando novos valores à uma lista vazia
// let filmes = [];
// let quantidade = prompt('Quantos filmes quer cadastrar? ');

// while (filmes.length < quantidade){
//     let filmenovo = prompt('Digite o nome do filme: ');
//     filmes.push(filmenovo)
// }

// console.log(filmes);





// console.log(lista);
// console.log(lista.length);
// // O método pop remove o último elemento de uma lista
// // Estou removendo e jogando fora (não armazenei).
// lista.pop();
// console.log();

// console.log(lista);
// console.log(lista.length);
// console.log();





// //Removendo um item e guardando em uma variável
// //O método pop me retorna o item removido, e eu posso armazená-lo
// let removido = lista.pop();
// console.log(lista);
// console.log(lista.length);
// console.log(removido);


// //Removendo um elemento e guardando em uma lista.
// let listaRemovidos = [];

// listaRemovidos.push( lista.pop() );
// listaRemovidos.push( lista.pop() );

// console.log(lista);
// console.log(lista.length);
// console.log(listaRemovidos);




// console.log(lista);

// //Usando o método splice para remover 1 elemento a partir do indíce 2
// lista.splice(2, 1);
// console.log();

// console.log(lista);



// console.log(lista);

// //Usando o método splice para remover 1 elemento a partir do indíce 2
// //E armazenando em outra variável
// // O método splice já retorna em uma lista, mesmo que seja apenas 1 elemento.
// let listaSplice = lista.splice(1, 3);
// console.log();

// console.log(lista);
// console.log(listaSplice);




// console.log(lista);

// // Usando splice para remover 2 elementos e adicionando outros 2 (substituindo)
// // Caso eu não queira remover, apenas adicionar, é só deixar 0 no segundo parâmetro.
// let listaSplice = lista.splice(1, 2, "Julia", 'Maria');
// console.log();

// console.log(lista);
// console.log(listaSplice);




console.log(lista);
let nomeremover = prompt('Qual nome deseja remover? ');
let nomeadicionar = prompt('Qual nome deseja adicionar? ')
let indiceremover = lista.indexOf(nomeremover);

// Usando splice para remover 2 elementos e adicionando outros 2 (substituindo)
// Caso eu não queira remover, apenas adicionar, é só deixar 0 no segundo parâmetro.
let listaSplice = lista.splice(indiceremover, 1, nomeadicionar);
console.log();

console.log(lista);
console.log(listaSplice);




// let resposta = 'sim';

// while (resposta.toLowerCase() == 'sim' || resposta.toLowerCase() == 's'){
//     resposta = prompt('Quer repetir? ');
// }

console.log();