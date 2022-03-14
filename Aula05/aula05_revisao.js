console.clear();
const prompt = require('prompt-sync')();

// let nome = prompt('Qual o seu nome?')

// if (nome == 'Gabriel') {
//     console.log('Seja bem-vindo Gabriel!!!');
// } else if (nome == 'Eduardo') {
//     console.log('Seja bem-vindo Eduardo!!!');
// } else {
//     console.log('Você não é o Gabriel nem o Eduardo!!!');
// }



// let numero = prompt('Digite um número: ');

// // Else if só será testado caso a condição anterior seja FALSA
// if (numero > 50){
//     console.log('O número é maior que 50!');
// } else if (numero > 30) {
//     console.log('O número é maior que 30!');
// } else if (numero > 10) {
//     console.log('O número é maior que 10!');
// } 

// Usando if "independentes", ele vai testar todas as condições, independente do resultado da anterior
// if (numero > 50) {
//     console.log('O número é maior que 50!');
// } 

// if (numero > 30) {
//     console.log('O número é maior que 30!');
// } 

// if (numero > 10) {
//     console.log('O número é maior que 10!');
// }


let viagem = prompt ('Você costuma viajar? ');

// // Armazenando o valor em minúsculo em outra variável
// let viagemmin = viagem.toLowerCase();

// console.log(viagem);
// console.log(viagemmin);

// //Transformando a string ao receber o prompt.
// let viagem = prompt ('Você costuma viajar? ').toLowerCase();
// console.log(viagem);


if (viagem.toLowerCase() == 'sim') {
    console.log('Que bom! Temos ótimas ofertas!');

    // Essa variável só existe aqui dentro porque ela é let (local).
    dinheiro = prompt('Quanto você costuma gastar? ');

    if (dinheiro > 10000) {
        let frio = prompt('Você gosta de passar frio? ');
        if (frio == 'sim'){
            console.log('Oba!! Bora pra Canadá!')
        } else {
            console.log('Vamos pra algum lugar quente')
        }
    } else if (dinheiro > 5000){
        console.log('Bora pra uma praia bem dahora!')
    } else if (dinheiro > 1000){
        console.log('Bora pra SC!');
    } else if (dinheiro > 100) {
        console.log('Da pra ver alguma coisa aqui do lado..');
    } else {
        console.log('Aí fica difícil né patrão...');
    }
} else {
    console.log('Azar seu.');
}

console.log();