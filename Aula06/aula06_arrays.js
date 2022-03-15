console.clear();
const prompt = require('prompt-sync')();

/*

let professor = 'Gabriel Pereira'
let professora = ['Duda', 'Londrina']

// Uma lista é capaz de armazenar vários elementos, cada um separado por vírgula.
// Eu posso armazenar qualquer elemento, uma string, número, outra variável e até outra array
let alunos = ['Gabriel' , 'Fernando' , 'Tiago' , 20 , 13 , 30 , professor, ['C13','Blue'], professora];

console.log(alunos);

*/


// let filmes = ["Jurassic Park","O Senhor dos Aneis","Harry Potter"];

// Mesma coisa que a de cima, mas com uma visualização melhor
let filmes = [
    "Jurassic Park", 
    "O Senhor dos Aneis", 
    "Harry Potter",
    [1993, 2002, 2001] // Uma array conta como apenas um elemento.
];

// // Verificando o número de elementos de uma array
// console.log(filmes.length);
// console.log();

// // Verificando o número de elementos de um elemento dentro da array
// console.log(filmes[3].length);
// console.log();

// // Retornando um elemento específico
// // Lembrando que o primeiro indíce é sempre o 0!!
// console.log(filmes[3]);

// // Retornando o indíce 0 da array no índice 3 da principal.
// console.log(filmes[3][0]);

// console.log(filmes);

// let novofilme = prompt('Digite o nome do filme: ')
// filmes.push(novofilme);
// console.log();

// let novoano = +prompt('Digite o ano do filme: ');
// filmes[3].push(novoano) // Adicionando uma array à array de dentro (elemento 3)

// console.log(filmes);


// let filmes2 = [];

// while (filmes2.length < 5){
//     let filme2novo = prompt('Digite o filme: ');
//     filmes2.push(filme2novo)
// }

// console.log(filmes2);

// EXERCICIOS:

/*
Faça um Programa que leia 20 números inteiros e armazene-os num array. 
Armazene os números pares no array PAR e os números IMPARES no array IMPAR. 
Imprima os três vetores.
*/

let lista = [];
let pares = [];
let impares = [];
let numero = 0;

while (lista.length < 20){
    numero = +prompt('Digite um número: ');
    // if (lista.includes(numero)) {
    //     console.log('Repetido!!');
    //     continue;
    // }

    lista.push(numero);

    if (numero % 2 == 0){
        pares.push(numero);
    } else {
        impares.push(numero);
    }
}

console.log(lista);
console.log('Pares: ');
console.log(pares);
console.log('Impares: ');
console.log(impares);

console.log();