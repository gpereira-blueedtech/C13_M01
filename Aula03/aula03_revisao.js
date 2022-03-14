console.clear();
const prompt = require('prompt-sync')();


// console.log("Olá mundo!!");

// let aluno = 'Fernando';
// let nome = aluno;
// console.log(nome);

let cliente = prompt('Qual o seu nome? ');
let preco = +prompt('Qual o valor por quilo? ');
let quantidade = +prompt('Quantos quilos você está comprando? ');

let total = preco * quantidade;

// console.log(cliente, "o valor total é:", total);

// // Outra maneira:
console.log(`${cliente}, o valor total é: ${total}`);

console.log();