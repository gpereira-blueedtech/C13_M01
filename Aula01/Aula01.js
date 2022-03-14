// Isso serve para limpar a tela antes de executar meu programa
console.clear();


// IMPORTANTE!!! Ele deve ser instalado através do terminal com o comando:
// npm install prompt-sync

// declarando o prompt para ser usado
const prompt = require('prompt-sync')();

/*
IMPORTANTE!!
Esse sinal acima significa que tudo a partir daqui até o sinal da linha 50 está COMENTADO
Ou seja, o programa vai ignorar. Para usar esses códigos, retire esses sinais, tanto o do começo quanto do fim.

// console.log() é o comando usado para apresentar alguma coisa na tela.
// Como eu quero apresentar um texto (string), ele precisar 'estar entre aspas'.
console.log('Olá mundo!');
console.log('Esse é o meu primeiro programa');
console.log();

// Declarando (criando) uma variável
let nome = 'Gabriel';
let aluno = 'Wilson';
let num = 35;
let num2 = '35'; // Embora seja um número, o programa vai tratar como string

// Aqui estou mostrando o conteúdo de cada variável
console.log(nome);
console.log(aluno);
console.log(num);
console.log(num2);
console.log();

// Typeof é um comnando para saber o tipo de uma variável
// Para que seja exibido, preciso colocar dentro de um console.log
console.log(typeof(nome));
console.log(typeof(aluno));
console.log(typeof(num));
console.log(typeof(num2));
console.log();

// Usando prompt para receber uma informação do usuário
let classe = +prompt('Digite sua classe: '); // Quando uso +prompt, ele salva como número.
let nomeAluno = prompt('Digite seu nome: ');

console.log(nomeAluno, ', a sua classe é:', classe,'.');
console.log();

*/

let numero1 = +prompt('Digite um número: ');
let numero2 = +prompt('Digite outro número: ');

// // Fazendo os cálculos direto no console.log
// console.log('A soma dos dois é:', numero1 + numero2);
// console.log('A subtração dos dois é:', numero1 - numero2);
// console.log('A multiplicação dos dois é:', numero1 * numero2);
// console.log('A divisão dos dois é:', numero1 / numero2);

// Outra forma:
// Fazendo os cálculos e guardando em novas variáveis para apresentar no console.log
let soma = numero1 + numero2;
let sub =  numero1 - numero2;
let mult =  numero1 * numero2;
let div =  numero1 / numero2;

// Aqui eu não preciso fazer o cálculo novamente, ele já foi feito e armazenado nas variáveis usadas
console.log('A soma dos dois é:', soma);
console.log('A subtração dos dois é:', sub);
console.log('A multiplicação dos dois é:', mult);
console.log('A divisão dos dois é:', div);

console.log();