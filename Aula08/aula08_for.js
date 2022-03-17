console.clear();
const prompt = require('prompt-sync')();

// //Cotnador com while
// let cont = 0;

// while (cont < 5) {
//     console.log('Repetiu', cont);
//     cont++
// }


// // O primeiro parâmetro (let i = 0) é executado apenas uma vez (na inicialização).
// // Após isso, o segundo parâmetro (i < 5) é testado, e caso seja true, executa o código.
// // Ao final da execução, irá executar o terceiro parâmetro (i++).
// // Após a execução do terceiro, vai novamente testar a condição do segundo e fazer a repetição caso true
// // Em resumo:
// // Cria a var, testa condição, executa o código, incrementa; testa condição, executa o código, incrementa; testa condição...
// // Etapa 1, Etapa 2, código, Etapa 3; Etapa 2, código, Etapa 3; Etapa 2....

// // for (onde começa ; onde termina ; contador++) { código }

// for (let contador = 0 ; contador < 5 ; contador++ ){
//     console.log('Repetiu');
// }




// // Usando um while dentro de um for para validar uma entrada

// let filmesCadastrados = [];

// for (let i = 0; i < 5; i++){
//     novofilme = prompt('Digite o nome do filme: ');

//     // Uso o método includes para verificar se o filme já existe na lista
//     while (filmesCadastrados.includes(novofilme)){
//         console.log('Filmes já cadastrado!');
//         novofilme = prompt('Digite o nome do filme: ');
//     }

//     filmesCadastrados.push(novofilme);
// }

// console.log(filmesCadastrados);




// let filmes = ["Jurassic Park", "O Senhor dos Aneis", "Harry Potter"];



// EXERCICIO:
/*
Faça um programa que peça um número 
e imprima toda a tabuada dele do 1 ao 10.
*/

// let numero = +prompt('Digite um número: ');

// for (let i = 1 ; i <= 10; i++){
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }



// FOR... OF (voltaremos a isso sexta-feira).
let filmes = ["Jurassic Park", "O Senhor dos Aneis", "Harry Potter", "O Exorcista"];

for (let filme of filmes) {
    console.log(filme);
}





// // Recebendo um número aleatório de 1 a 10.
// let numerorandom = Math.floor(Math.random() * 10) + 1;

// console.log(numerorandom);


console.log();