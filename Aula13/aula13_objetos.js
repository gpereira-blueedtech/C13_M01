console.clear();
const prompt = require('prompt-sync')();

// let listaNomes = ['Gabriel','Jorge','Julia'];
// let listaTelefones = ['222-555','333-444','555-999'];

// // De quem é esse telefone????
// console.log(listaTelefones[0]);


//      ### OBJETOS ###

// // Cada elemento do objeto é formado por 2 partes: uma CHAVE e um VALOR
// // Essas duas partes juntas formam uma PROPRIEDADE do objeto.
// // A chave é sempre um nome, o valor pode ser qualquer coisa (string, numero, bool, var, etc...)
// let objetoTelefones = {gabriel: '888-555', jorge: '333-444', julia: '555-999'};

// // Sintaxe:
// // let nomeDoObjeto = {chave: valor, chave: valor}

// console.log(objetoTelefones);
// console.log();

// // Para acessar um valor dentro de um objeto, uso: objeto.chave
// console.log(objetoTelefones.julia);

// console.log();







// // let professores = {c13: 'Gabriel', c12: 'Ale', c10: 'Duda'};

// let c13 = {alunos: ['Darlan','Bianca','Julia'], quantidade: 64, ativa: true, professor: 'Gabriel Pereira'};


// console.log(c13.alunos);
// console.log(c13.alunos[0]);
// console.log();

// let novoAluno = prompt('Qual o nome do(a) novo(a) aluno(a)? ');
// // Quando chamo a propriedade c13.alunos ele traz a lista
// // E a partir disso posso trabalhar como qualquer outra lista.
// c13.alunos.push(novoAluno);
// console.log();

// console.log(c13.alunos);








// let heroi = {
//     forca: 10,
//     inteligencia: 8,
//     destreza: 15,
//     saude: 20
// }

// let tempo = {
//     dia: 1,
//     horas: 7,
//     minutos: 30
// }

// console.log(`Saúde do herói: ${heroi.saude}`);
// console.log(`Agora são: ${tempo.horas}:${tempo.minutos} do dia ${tempo.dia}`)
// console.log();

// // Para criar uma nova propriedade, passo objeto.novaPropriedade = valor.
// let mp = +prompt('Quanto o seu herói tem de MP? ');
// heroi.mp = mp;
// console.log();

// console.log(heroi);
// console.log();

// // Após atribuída a nova propriedade, posso acessá-la como quiser.
// console.log(`A MP do herói é: ${heroi.mp}`);
// console.log();

// console.log('Seu herói foi atacado!!');
// let dano = +prompt('Quando ele sofreu de dano? ');

// // Quando atribuo um valor à uma chave que já existe
// // Ele não criará uma nova, mas alterará o valor da existente.
// // heroi.saude = heroi.saude - dano;
// heroi.saude -= dano; // Mesma coisa, mais fácil de escrever
// console.log(`A vida do heroi agora é: ${heroi.saude}`);






//          ### EXERCICIOS ###

/*
2 - Adaptado
Crie um sistema de cadastro de funcionários que deve criar um objeto novo 
para cada funcionário cadastrado com as informações: nome, cargo e salário. 
Ele deve armazenar todos esses objetos em uma lista.

Antes de começar o cadastro, ele deve perguntar quantos funcionários serão cadastrados.
*/

let quantidade = +prompt('Quantos funcionários serão cadastrados? ');
let listaFuncionarios = [];

for(let i = 0; i < quantidade; i++){
    let funcionario = {}; // Posso criar um objeto vazio se quiser

    // Ou posso criar o objeto já com as chaves
    // let funcionario = {
    //     nome: '',
    //     cargo: '',
    //     salario: ''
    // }

    // Quando passo o valor de uma propriedade, 
    // Caso ela não exista, a chave e valores são adicionados ao objeto
    // Caso essa chave já exista, o novo valor é atribuído à ela
    console.log();
    funcionario.nome = prompt('Qual o nome do(a) funcionário(a)? ');
    funcionario.cargo = prompt('Qual o cargo? ');
    funcionario.salario = prompt('Qual o salario? ');

    listaFuncionarios.push(funcionario)

    console.log(funcionario);
    console.log();
}

console.log(listaFuncionarios);

// Retornando uma propriedade específica de um objeto específico na lista
console.log(listaFuncionarios[0].salario);