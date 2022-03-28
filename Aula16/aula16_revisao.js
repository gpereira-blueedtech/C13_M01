console.clear();
const prompt = require('prompt-sync')();


// // Receberá o valor atual da fome e um parâmetro (1, 2) para determinar a quantidade (pouca ou muita) que vai subtrair
// function subtrair(num, fome){
//     let numrandom;

//     if (fome == 1){
//         const listarandom = [5, 10, 15]
//         numrandom = listarandom[Math.floor(Math.random() * listarandom.length)];
//     } else if (fome == 2){
//         const listarandom = [30, 40, 50]
//         numrandom = listarandom[Math.floor(Math.random() * listarandom.length)];
//     }
//     let total = num - numrandom
//     return total;
// }

// let fomeatual = +prompt('Digite a fome atual: ')
// let fomeperder = +prompt('Ele vai perder pouca ou muita fome? ');

// fomeatual = subtrair(fomeatual, fomeperder);
// console.log(fomeatual);

// fomeatual = subtrair(fomeatual, fomeperder);
// console.log(fomeatual);








let personagem = {
    nome: 'Gabriel',
    cansaco: 10,
    fome: 10,

    verificastatus: function(){
        if (this.cansaco <= 2 || this.fome <= 2){
            return true;
        }
    },

    descansar: function(){
        console.log('Você descansou.')
        this.cansaco = 10;
        this.fome = 10;
    },

    exibestatus: function(){
        console.log(`Cansaço: ${this.cansaco}`);
        console.log(`Fome: ${this.fome}`);
    }
}

// Quando uso while()
while (true){
    // Antes de apresentar as possibilidade de escolha, verifico o status do meu personagem.
    if (personagem.verificastatus()){
        console.log('Você está cansado ou com fome.');
        console.log('Você foi obrigado a descansar.')
        console.log('Sua vida e cansaço foram restaurados.')
        console.log();
        personagem.descansar();
        continue;
    } else {
        personagem.exibestatus();
        let canseira = +prompt('Quanto você cansou? (0 para sair) ');
        
        // If criado apenas para poder sair do while infinito.
        if (canseira == 0){
            break;
        }

        //Reduzindo o status de acordo com o valor entrado.
        personagem.cansaco -= canseira;
    }
}