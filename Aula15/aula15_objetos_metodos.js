console.clear();
const prompt = require('prompt-sync')();

// let pessoa = {
//     nome: 'Pedra',
//     idade: 20,
//     peso: 80,
//     altura: 1.75,
//     conhecimento: 10,

//     // Quando uma propriedade recebe uma função, 
//     // ela é chamada de Método.
//     // Geralmente um método é utilizado para trabalhar com as propriedades do próprio objeto.
//     saudacao: function(){
//         console.log('Olá! Eu sou uma pessoa.');
//         console.log(`Meu nome é ${this.nome}, eu tenho ${this.idade} anos e peso ${this.peso} kg. Meu conhecimento é: ${this.conhecimento}`)
//     },

//     calculaIMC: function(){
//         let imc = this.peso / (this.altura**2);
//         console.log(`O IMC de ${this.nome} é: ${imc}`);

//         if (imc <= 18.5){
//             console.log(`${this.nome} está um pouco magro(a)`);
//         } else if (imc <= 24.9){
//             console.log(`${this.nome} está com o peso ideal`);
//         } else if (imc <= 30){
//             console.log(`${this.nome} está um pouco acima do peso`);
//         } else if (imc > 30){
//             console.log(`${this.nome} está com obesidade`);       
//         }

//         return imc;
//     },

//     envelhecer: function(){
//         this.idade++;
//     },

//     alterapeso: function(quilos){
//         this.peso += quilos;
//     },

//     alteraconhecimento: function(parametro){
//         if (parametro == true){
//             this.conhecimento++
//         } else if (parametro == false){
//             this.conhecimento--
//         }
//     }
// }

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log();

// // Para chamar um método, basta usar a sintaxe:
// // objeto.metodo()
// pessoa.saudacao();
// console.log();

// pessoa.envelhecer();
// pessoa.alterapeso(-5);
// pessoa.alteraconhecimento(false);
// pessoa.saudacao();
// console.log();


// let imcCalculado = pessoa.calculaIMC();
// console.log(imcCalculado);









let tempo = {
    dia: 1,
    hora: 7,

    // GET (pega as propriedades)
    exibeTempo: function(){
        console.log(`Agora é ${this.hora} horas do dia ${this.dia}.`)
    },

    // SET (altera as propriedades)
    passaTempo: function(tempo){
        this.hora += tempo
        if (this.hora >= 24){
            this.dia++
            this.hora -= 24;
        }
    },

    passaTempoDormir: function(tempo){
        this.hora += tempo
        
        if (this.hora >= 24){
            console.log('Você dormiu e foi para o próximo dia.')
            this.dia++
            this.hora = 7;
        }
    }
}

tempo.exibeTempo()
console.log();

console.log(`Escolha sua ação:
1 - Estudar (1 hora)
2 - Jogar video-game (8 horas)
3 - Trabalhar (3 horas)`);
let escolha = +prompt();

// if (escolha == 1){
//     tempo.passaTempo(1);
// } else if (escolha == 2){
//     tempo.passaTempo(8);
// } else if (escolha == 3){
//     tempo.passaTempo(3);
// }


if (escolha == 1){
    tempo.passaTempoDormir(1);
} else if (escolha == 2){
    tempo.passaTempoDormir(20);
} else if (escolha == 3){
    tempo.passaTempoDormir(3);
}

tempo.exibeTempo();

console.log();