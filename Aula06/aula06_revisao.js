console.clear();
const prompt = require('prompt-sync')();

let entrada = prompt('Digite sua senha: ');
let senha = 'Blue2022';
let tentativas = 0;

while (entrada != senha) {
    console.log('Senha incorreta!!!');
    console.log('Digite sua senha novamente');
    entrada = prompt();
    if (tentativas == 3){
        break; // Encerra a execuçã do While e sai do loop.
    }

    if (entrada == 0) {
        continue; // Encerra a execução do While e inicia o loop novamente.
    }

    // tentativas = tentativas + 1;
    // tentativas += 1; // Outro jeito de somar 1 à variável
    tentativas++ // Outro jeito, mais fácil
    console.log(`Tentativas restantes: ${4 - tentativas}`)

}

console.log();