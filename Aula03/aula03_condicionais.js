console.clear();
const prompt = require('prompt-sync')();


// Se fizer sol Maycon vai levar os filhos à praça.
// Senão, Se estiver chovendo, eles vão tomar banho de chuva,
// Senão, se estiver nevando, vai esquiar,
// Senão, ele vai jogar video-game.


// // Quando uso '=', estou atribuindo um valor
// let tempo = prompt('Como está o tempo? ');

// // Quando uso '==', estou COMPARANDO os valores
// if (tempo == 'sol') {
//     console.log('Maycon vai levar os filhos à praça'); 
//     console.log('Maycon vai comprar um sorvete');
//     console.log('Esse passeio vai ficar caro');
// } else if (tempo == 'chuva') {
//     console.log('Eles vão tomar banho de chuva.');
// } else if (tempo == 'neve') {
//     console.log('Eles vão esquiar no quintal.');
// } else { // o else só é executado se TODAS as condições anteriores forem falsas. Nesse caso ele é OBRIGATORIAMENTE executado.
//     console.log('Maycon vai ficar jogando video-game.')
// }

// console.log();
// let dinheiro = prompt('Quanto dinheiro o Maycon tem? ');

// if (dinheiro >= 20){
//     console.log('Maycon vai comprar sorvete');
// }

// console.log();
// console.log('Isso está depois do if');
// console.log('Maycon chegou em casa.');




// let numero = prompt('Digite um número: ');

// if (numero > 50){
//     console.log('O número é maior que 50');
// } else if (numero > 30){
//     console.log('O número é maior que 30');
// } else if (numero >= 10){
//     console.log('O número é maior que 10');
// } else {
//     console.log('O número é menor ou igual a 10');
// }

// console.log('Vamos continuar a execução...');


// EXERCICIOS:

/*
Faça um Programa que peça dois números e imprima o maior deles, 
e informe caso eles sejam iguais.
*/

let numero1 = +prompt('Digite um número: ');
let numero2 = +prompt('Digite outro número: ');

if (numero1 > numero2){
    console.log(`O número ${numero1} é maior!`);
} else if (numero2 > numero1) {
    console.log(`O número ${numero2} é maior!`);
} else {
    console.log('Os dois são iguais');
}

console.log();


