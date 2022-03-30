console.clear();
const prompt = require('prompt-sync')();

// function pizzaPronta() {
//     console.log(`Sua pizza está pronta.`);
// }

// function pizzaDelivery() {
//     console.log(`Sua pizza saiu para entrega.`);
// }
  
// // Exemplo de callback sem argumentos
// // Essa função vai ser executada e ao final vai chamar a função que foi passada como argumento da primeira
// function pedirPizza(callback) {
//     // Essa var sabor não está sendo usada pra nada nesse exemplo (callback sem argumentos).
//     const sabor = prompt('Escolha o sabor da sua pizza: ');
    
//     // Nesse momento estou chamando a função (pizzaPronta) que veio como argumento dessa primeira
//     callback();
// }
  
// let escolha = +prompt('Você deseja retirada(1) ou delivery(2)? ');

// if (escolha == 1){
//     // Nesse caso vai executar a função pedir pizza, e ao final ela vai chamar a pizzaPronta
//     pedirPizza(pizzaPronta);
// } else if (escolha == 2){
//     // Nesse caso vai executar a função pedir pizza, e ao final ela vai chamar a pizzaDelivery
//     pedirPizza(pizzaDelivery);
// }









// function pizzaPronta(sabor, fatias) {
//     console.log(`Sua pizza de ${fatias} fatias sabor ${sabor} está pronta.`);
// }

// // Chamando o callback passando argumentos.
// function pedirPizza(callback) {
//     const sabor = prompt('Escolha o sabor da sua pizza: ');
//     const fatias = +prompt('De quantas fatias? ');
    
//     // Nesse momento estou chamando a função (pizzaPronta) que veio como argumento dessa primeira
//     callback(sabor, fatias);
// }
  
// pedirPizza(pizzaPronta);




/*
          ## PROMISES ##

Uma função com promise, é uma função assíncrona, ou seja, ela não pode te devolver
um resultado de imediato - Ela começa a execução mas não termina em tempo real,
O meu programa vai continuar, e ela vai entregar o resultado depois.
Por isso ela retorna uma PROMESSA, ou seja, ela "promete" que vai me entregar um resultado futuramente.

*/

// // Exemplo de uma função que apenas escreve e retorna o parâmetro passado.
// function teste(parametro){
//     console.log(parametro);
//     return parametro;
// }


// // Podemos pensar a Promise como um return que não vai retornar 
// // na hora da execução, e sim ao final dela.
// function primeiraFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         console.log(`Essa é a primeira função, ela escreve: ${parametro}`);

//         resolve(parametro);
//     });
// }

// function segundaFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoParametro = parametro + 10;

//         console.log(`Essa vai adicionar 10, totalizando: ${novoParametro}`);
 
//         resolve(novoParametro);
//     });
// }

// function terceiraFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoParametro = parametro * 2;

//         console.log(`Essa é a terceira função, ela dobra o valor: ${novoParametro}`);      

//         resolve(novoParametro);
//     });
// }

// function quartaFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoParametro = parametro - 15;
 
//         console.log(`Essa é a quarta função, subtraindo 15: ${novoParametro}`);
    
//         resolve(novoParametro);
//     });
// }

// // Dessa forma estou encadeando a execução das funções de forma que
// // a próxima só será chamada quando a Promise da anterior for resolvida.
// primeiraFuncao(20)
//     .then(segundaFuncao)
//     .then(terceiraFuncao)
//     .then(quartaFuncao);








// //        ## CATCH

// //Para tratar de erros durante a execução de funções com Promises, usamos .catch

function alteraNome(parametro) {
    return new Promise((resolve, reject) => {
        parametro = parametro.toUpperCase();

        resolve(parametro);
    });
}

function escreveNome(parametro) {
    return new Promise((resolve, reject) => {
        console.log(`Aqui está o nome em MAIÚSCULAS: ${parametro}`);

        resolve(parametro);
    });
}

// // Como a execução do console.log é em tempo real, ao
// // chamar a função ele ainda não tem o retorno, e sim a promise
// // por isso ele irá exibir: Promise { 'GABRIEL' }.
// console.log(alteraNome('gabriel'));


// Essa função deve retornar erro porque estou passando um número como argumento
// Então ele não consegue aplicar o método .toUpeerCase()
alteraNome('julia')
    .then(escreveNome)
    .catch((err) => console.log('Alguma coisa deu errada no caminho...'));
    
    // // No caso abaixo, ele apresentará a mensagem de erro também, 
    // //pois ela foi passada também no console.log.
    // .catch((err) => console.log('Alguma coisa deu errada no caminho...', err));


console.log('Executa isso aqui');
console.log();