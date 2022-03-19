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



// // Contador usando for
// console.log('Quantas vezes você quer jogar?');
// let quantidade = +prompt();

// while (quantidade <= 0){
//     console.log('Quantidade inválida!')
//     console.log('Quantas vezes você quer jogar?');
//     quantidade = +prompt();
// }
// console.clear();

// // Ao entrar no for, a primeira coisa que ele faz é criar minha var de controle (let contador = 1);
// for (let contador = 1; contador <= quantidade; contador++){
//     // Ele vai executar esse código enquanto a condição (contador <= quantidade) for verdadeira
//     console.log('Essa é a jogada:', contador);
//     console.log('Escolha o número dessa jogada (0-10): ');
//     let numero = +prompt();

//     while (numero < 0 || numero > 10){
//         console.log('Número inválido');
//         console.log('Escolha o número dessa jogada (0-10): ');
//         numero = +prompt();
//     }

//     if (numero % 2 == 0){
//         console.log('Essa jogada foi par!');
//     } else {
//         console.log('Essa jogada foi ímpar!');
//     }
//     console.log();
//     // Apenas após a execução de todo o código aqui dentro
//     // É que vai rolar o incremente (contador++)
// }









/* FOR IN e FOR OF:
O for...in me retorna o ÍNDICE de cada elemento da lista
O for...of me retorna o VALOR de cada elemento da lista

Quando eu precisar do índice, o mais recomendado é o for in,
Quando eu precisar só do valor, posso usar o for of.

Quando eu precisar dos dois, é mais fácil usar o for in, 
porque é fácil eu achar o valor a partir do indíce (i, lista[i]),
mas é mais difícil achar o índice através do valor
*/








let nome = 'Gabriel';

let nomes = [
    'Dinailton',
    'Gabriel',
    'Andrei',
    'Dinailton',
    'Julia'
];
let novosNomes = [];
let dinailtons = 0;

console.log(nomes.length);
console.log();

// O for..of percorre uma lista (ou outro objeto iterável) e a var de controle
// Recebe o valor de cada elemento a cada repetição
// Primeiro o elemento lista[0], depois recebe lista[1], depois lista[2], etc...
// for (let elemento of nomes){
//     console.log('Nessa repetição a var de controle recebeu:');
//     console.log(elemento);

//     if (elemento == 'Dinailton'){
//         console.log('Achei o Dinailton!!');
//         dinailtons++
//     }

//     let adicionar = prompt(`Deseja adicionar ${elemento} à nova lista?`)
//     if (adicionar.toLowerCase() == 's'){
//         novosNomes.push(elemento);
//         console.log('Nome adicionado!')
//     }

//     console.log();
// }

// console.log('Quantidade de Dinailtons encontrada:', dinailtons);
// console.log(novosNomes);




// for (let elemento in nomes){
//     console.log('Nessa repetição a var de controle recebeu:');
//     console.log(elemento);
//     console.log('Esse indíce equivale à:',nomes[elemento]);

//     if (nomes[elemento] == 'Dinailton'){
//         console.log('Achei o Dinailton!!');
//         dinailtons++
//     }

//     let adicionar = prompt(`Deseja adicionar ${nomes[elemento]} à nova lista?`)
//     if (adicionar.toLowerCase() == 's'){
//         novosNomes.push(nomes[elemento]);
//         console.log('Nome adicionado!')
//     }

//     console.log();
// }

// console.log('Quantidade de Dinailtons encontrada:', dinailtons);
// console.log('Lista original:');
// console.log(nomes);
// console.log();

// console.log('Lista nova:');
// console.log(novosNomes);






// let qntd = +prompt('Digite a quantidade de números que quer guardar: ');
// let numeros = [];
// let pares = [];
// let impares = [];

// for (let i = 0; i < qntd; i++ ){
//     let novonumero = +prompt('Digite o novo número: ');
//     numeros.push(novonumero);
// }

// console.log(numeros);

// for (let i of numeros){
//     if (i % 2 == 0){
//         pares.push(i);
//     } else {
//         impares.push(i);
//     }
// }

// console.log('Números pares: ');
// console.log(pares)
// console.log('Números ímpares: ');
// console.log(impares)




// // Usando for...in para ver o índice e o valor
// for (let i in numeros){
//     console.log(`O índice ${i} corresponde à ${numeros[i]}`);
// }



// // Somando todos os elementos do array usando for of:
// let soma = 0;
// for (let i of numeros){
//     soma = soma + i;
// }



// Escolhendo quais elementos serão somados com for of:
let soma = 0;
for (let i of numeros){
    let decisao = prompt(`Deseja incluir ${i} na soma? `);
    if (decisao == 's'){
        soma = soma + i;
    }
}

console.log('A soma de todos os números é:',soma);



console.log();