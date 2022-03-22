console.clear();
const prompt = require('prompt-sync')();

// Nesse momento, eu estou ensinando ao computador como é minha função
// Eu não pedi para ser executada ainda.
function tomarbanho() {
    console.log('Tirar a roupa');
    console.log('Abrir o chuveiro');
    console.log('Se lavar');
    console.log('Se enxaguar');
    console.log('Fechar o chuveiro');
    console.log('Se secar');
    console.log('Colocar uma roupa limpa.');
}

// //Nesse momento eu estou executando a função de fato.
// tomarbanho();






// Criando uma função para validação de uma entrada de números do usuário
// Essa função pode ser usada sempre que eu precisar que o usuário entre um valor numérico
// Ao invés de ter que colocar todo esse código repetidas vezes,
// Crio uma função, e a chamo quando necessário.
function validanumero(val){
    
    // A var isnum vai testar se val é um número e retornar true ou false.
    let isnum = /^\d+$/.test(val);
    console.log(isnum)

    // Uso o !isnum para inverter a lógica (se vier true, vira false, e vice versa).
    while (!isnum){
        console.log('Entrada inválida!');
        val = prompt("Insira um número: ");
        isnum = /^\d+$/.test(val);
        console.log(isnum)
    }

    // Retorno o valor final depois de validado
    return val;
}






// let atividades = ['Jogou bola', 'Andou de skate', 'Foi ao parque'];

// for (let i of atividades){
//     console.log(`O Andrei ${i}?`);

//     let resposta = prompt();
//     if (resposta == 'sim'){
//         tomarbanho();
//     }
// }





// function calculatotal (quantidade, valor, produto) {
//     let total = quantidade * valor;
//     console.log(`O valor total de ${produto} é: ${total}`);
// }


// let qtd = +prompt('Digite a quantidade: ');
// let val = +prompt('Digite o valor unitário: ');
// let prod = prompt('Digite o produto: ');

// // calculatotal(12, 2.50, 'Cerveja');
// calculatotal(qtd, val, prod);






/*
EXERCICIOS:
Aula 12 - ex. 1
1. Exercício – Treino: Crie uma função que dado dois valores 
(passados como parâmetros) mostre no console a soma, subtração, 
multiplicação e divisão desses valores.
*/

// function calculadora(num1, num2) {
//     let soma = num1 + num2;
//     console.log(`A soma é: ${soma}`);
    
//     console.log(`A subtração é: ${num1 - num2}`);
//     console.log(`A multiplicação é: ${num1 * num2}`);
//     console.log(`A divisão é: ${num1 / num2}`);
// }

// let valor1 = +prompt('Digite o 1º número: ');
// let valor2 = +prompt('Digite o 2º número: ');

// calculadora(valor1, valor2);


// // Testando a função de validação de número
// let idade = prompt('Digite a sua idade: ');
// validanumero(idade);





//          ### RETURN ###

function calculatotal (quantidade, valor) {
    let total = quantidade * valor;

    return total;
}

// let qtd = +prompt('Digite a quantidade: ');
// let val = +prompt('Digite o valor unitário: ');

// calculatotal(12, 2.50, 'Cerveja');

// Recebendo o valor do total da função e armazenando numa var
// let totalPagar = calculatotal(qtd, val);
// console.log(totalPagar);

// Usando o return apenas para um console.log
// console.log(calculatotal(qtd, val));





// // Usando o for para pegar vários itens e adicionar o resultado em uma lista
// let qtdItens = +prompt('Quantos itens você vai comprar? ');
// let listafinal = [];

// for (let i = 1; i <= qtdItens; i++) {
//     console.log(`Item ${i}:`)
//     let qtd = +prompt('Digite a quantidade: ');
//     let val = +prompt('Digite o valor unitário: ');
//     console.log();

//     let totalPagar = calculatotal(qtd, val);
//     listafinal.push(totalPagar);
// }

// console.log(listafinal);





console.log();