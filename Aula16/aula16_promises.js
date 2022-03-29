console.clear();
const prompt = require('prompt-sync')();

// function pizzaPronta() {
//     console.log(`Sua pizza está pronta.`);
// }
  
// // Exemplo de callback sem argumentos
// function pedirPizza(callback) {
//     // Essa var sabor nbão está sendo usada pra nada nesse exemplo (callback sem argumentos).
//     const sabor = prompt('Escolha o sabor da sua pizza: ');
    
//     // Nesse momento estou chamando a função (pizzaPronta) que veio como argumento dessa primeira
//     callback();
// }
  
// pedirPizza(pizzaPronta);








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





//          ## PROMISES ##


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








//          ## CATCH

// Para tratar de erros durante a execução de funções com Promises, usamos .catch

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

// Essa função deve retornar erro porque estou passando um número como argumento
// Então ele não consegue aplicar o método .toUpeerCase()
alteraNome(15)
    .then(escreveNome)
    .catch((err) => console.log('Alguma coisa deu errada no caminho...'));
    // // No caso abaixo, ele apresentará a mensagem de erro também, 
    // //pois ela foi passada também no console.log.
    // .catch((err) => console.log('Alguma coisa deu errada no caminho...', err));




console.log();