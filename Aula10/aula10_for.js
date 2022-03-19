console.clear();
const prompt = require('prompt-sync')();

// // Exemplo de contador usando while
// console.log('Quantas vezes você quer jogar?');
// let quantidade = +prompt();
// let contador = 0;

// while(contador < quantidade){
//     console.log('Repetiu!');
//     contador++
// }



console.log('Quantas vezes você quer jogar?');
let quantidade = +prompt();

while (quantidade <= 0){
    console.log('Quantidade inválida!')
    console.log('Quantas vezes você quer jogar?');
    quantidade = +prompt();
}
console.clear();

// Ao entrar no for, a primeira coisa que ele faz é criar minha var de controle (let contador = 1);
for (let contador = 1; contador <= quantidade; contador++){
    // Ele vai executar esse código enquanto a condição (contador <= quantidade) for verdadeira
    console.log('Essa é a jogada:', contador);
    console.log('Escolha o número dessa jogada (0-10): ');
    let numero = +prompt();

    while (numero < 0 || numero > 10){
        console.log('Número inválido');
        console.log('Escolha o número dessa jogada (0-10): ');
        numero = +prompt();
    }

    if (numero % 2 == 0){
        console.log('Essa jogada foi par!');
    } else {
        console.log('Essa jogada foi ímpar!');
    }
    console.log();
    // Apenas após a execução de todo o código aqui dentro
    // É que vai rolar o incremente (contador++)
}

console.log();