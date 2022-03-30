console.clear();
const prompt = require('prompt-sync')();


// // Declarando uma função assíncrona.
// async function funcaoAsync() {
//     // Sendo essa função assíncrona, o return necessariamente é uma Promise.
//     return 'Blue';
// }

// // Preciso chamar a função dessa maneira para que ele espere
// // a função terminar a execução, para depois fazer o console.log
// funcaoAsync()
//     .then(console.log);


// // // Exemplo da mesma função, porém síncrona.
// // function funcao() {
// //     return 'Blue';
// // }
// // console.log(funcao());





async function saudacao() {
    const promise = new Promise(resolve => {
      setTimeout(() => resolve('Olá!'), 3000);
    });

    // O await faz ele esperar a execução da promise antes de prosseguir.
    const escrever = await promise;
    console.log(escrever);
}

saudacao();
// Esse console log será executado antes porque a função é assíncrona.
// Como a função tem um await na promise, ela vai esperar a execução
// (3 segundos do timeout) para depois prosseguir, escrevendo 'Olá!'
console.log('Execute isso');