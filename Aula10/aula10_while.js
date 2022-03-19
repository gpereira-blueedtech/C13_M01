console.clear();
const prompt = require('prompt-sync')();



// // Verificando mais de uma condição
// let numero = +prompt('Digite um número: ');

// console.log('Maior que zero: ');
// console.log(numero > 0);
// console.log('É par: ');
// console.log(numero % 2 == 0);
// console.log();

// console.log('Maior que 0    OU    É par')
// console.log(numero > 0 || numero % 2 == 0);
// console.log('Maior que 0    E    É par')
// console.log(numero > 0 && numero % 2 == 0);






// let filmes = ['Jurassic Park','O Exorcista','Tubarão']

// console.log('Digite o nome do filme para adicionar à lista: ');
// let filmeNovo = prompt();

// filmes.push(filmeNovo);
// console.log();


// let continua = 's';

// while (continua.toLowerCase() == 's' && continua.toLowerCase() == 'sim'){
//     console.log('Digite o filme para verificar se existe: ');
//     let verificaFilme = prompt();

//     if (filmes.includes(verificaFilme)){
//         console.log(`O filme ${verificaFilme} está na lista!!`);
//     } else {
//         console.log(`O filme ${verificaFilme} não está na lista!!`);
//         let incluir = prompt('Deseja incluir? ');
//         if (incluir == 's'){
//             filmes.push(verificaFilme)
//         }
//     }
    
//     console.log();
//     continua = prompt('Deseja verificar outro filme?');
// }

// console.log(filmes);






// let listaClientes = ['Darlan', 'Gabriel', 'Alexandre'];
// let continua = 's';

// // Revisão de Break, Continue, Validação de dados
// while (continua == 's'){
//     let verificaCliente = prompt('Digite o nome do cliente: ');
//     if (listaClientes.includes(verificaCliente)){
//         console.log('Cliente já cadastrado');
//         continue; // Encerra a execução atual do ciclo e inicia novamente
//     } 

//     let senha = prompt('Digite a senha de supervisor: ');
//     if (senha != '123456'){
//         console.log('Senha incorreta!!! Encerrando.');
//         break; // Encerra a execução atual do ciclo e sai dele.
//     }

//     console.log('Digite o telefone do cliente para adicionar: ');
//     let telefone = prompt();

//     // Enquanto o tamanho da string telefone for diferente de 9, vai pedir novamente.
//     while (telefone.length != 9){
//         console.log('Telefone inválido!!!');
//         console.log('Digite o telefone do cliente para adicionar: ');
//         telefone = prompt();
//     }

//     // Depois de passar por taodas as validações, adiciona o cliente à lista.
//     listaClientes.push(verificaCliente);

//     // Atribui um novo valor à variavel continua, para testar o while inicial novamente e ver se vai rodar tudo de novo
//     continua = prompt('Deseja cadastrar outro cliente? ')
// }

console.log();