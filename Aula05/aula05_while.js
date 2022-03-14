console.clear();
const prompt = require('prompt-sync')();

// let senha = prompt('Crie uma senha: ');
// let entrada = prompt('Digite sua senha: ');
// let tentativas = 0;

// while (entrada != senha) {
//     tentativas = tentativas + 1;
//     console.log('Senha incorreta!');
//     console.log('Tentativas restantes:', 3 - tentativas);
// 
//     if (tentativas == 3){
//         console.log('Tentativas esgotadas!');
//         break; // o break encerra a execução atual do loop indepente da condição
//     }

//     entrada = prompt('Digite sua senha: ');
// }



// // Do...whie: Faz a mesma coisa, porém faz o teste lógico (condição) DEPOIS da execução
// // Na prática, quer dizer que vai executar pelo menos UMA vez, independente do resultado da condição.

// let nome;

// do {
//     nome = prompt('Digite um nome válido: ');
// } while (nome.length < 3);


// Continue: Encerra a execução atual (como se fosse o break),
// Mas ao invés de sair do loop, retorna para o início, recomeçando.

let nome;
let novo = 'sim'

while (novo == 'sim'){
    nome = prompt ('Digite o nome do cliente: ');
    
    if (nome.length < 3){
        console.log('Nome inválido');
        continue;
    }

    console.log('Cliente cadastrado(a)!') ;
    novo = prompt('Deseja cadastrar outro cliente? ');
}



// // Testes lógicos
// let teste = 1 == 1; // true
// let teste2 = 1 != 1; // false

// console.log(teste);
// console.log(teste2);
// console.log();

// //&& = E lógico, se TODAS as condições forem true, retorna true
// //|| = OU lógico, se UMA das condições for true, retorna true
// let boolteste = teste && teste2;
// let boolteste2 = teste || teste2;

// console.log(boolteste);
// console.log(boolteste2);

// EXEMPLO:

// LÓGICA OU
// JOGO DO BRASIL OU SOLZAO NO DOMINGO = CHURRASCO
// TRUE  OU TRUE   = TRUE
// TRUE  OU FALSE  = TRUE
// FALSE OU TRUE   = TRUE
// FALSE OU FALSE  = FALSE

// LÓGICA E
// TEM QUE ACERTAR O USUÁRIO E A SENHA
// TRUE  && TRUE   = TRUE
// TRUE  && FALSE  = FALSE
// FALSE && TRUE   = FALSE
// FALSE && FALSE  = FALSE


console.log();