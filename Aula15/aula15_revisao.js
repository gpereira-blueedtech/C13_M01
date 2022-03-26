console.clear();
const prompt = require('prompt-sync')();

// let forcapikachu = 15;
// let vidasquirtle = 60;

// function meuAtaque(vidaOponente, forcaMeuPokemon){
//     vidaOponente = vidaOponente - forcaMeuPokemon;
//     console.log(`Você causou ${forcaMeuPokemon} de dano`);
//     console.log(`O oponente ficou com ${vidaOponente} de vida.`);
//     return vidaOponente; // Única maneira de tirar uma informação de uma função
//     // Após a função ser executada ela vai me entregar o que estiver em return
//     // E eu posso armazenar esse valor fora da função e fazer o que quiser com ele.
// }


// for (let i = 0; i < 3; i++){
//     console.log('Escolha sua ação:');
//     console.log('1 - Atacar');
//     console.log('2 - Fugir');
//     let escolha = +prompt();
//     if (escolha == 1){
//         // Quando uma var chama uma função, o que será armazenado nela é o return dessa função.
//         vidasquirtle = meuAtaque(vidasquirtle, forcapikachu);
//     } else if (escolha == 2) {
//         console.log('Você afinou.')
//         break;
//     }
// }




let pokemon = [15, 80, 'Elétrico', 5];

let pikachu = {
    forca: 15, 
    vida: 80, 
    ataques: {choquedotrovao: [12, 5, 'Elétrico'], ataqueagil: [8, 10, 'Normal']}, 
    tipo: 'Elétrico', 
    lvl: 5
};

let squirtle = {
    forca: 12, 
    vida: 60, 
    ataques: ["Jato d'agua",'Bolhas'], 
    tipo: 'Água', 
    lvl: 2
};

// console.log(pikachu.ataques);
// console.log();

// console.log(pikachu.ataques.choquedotrovao[0]);

for (let i of pokemon){
    console.log(i);
}

// Um objeto não é iteravel, então não posso usar for of diretamente sobre ele
for (let i of pikachu.ataques.choquedotrovao){
    console.log(i);
}

console.log();