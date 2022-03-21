console.clear();
const prompt = require('prompt-sync')();

// // Usando uma RegEx para validar a entrada de um número
// let val = prompt("Insira um número: ");
// let isnum = /^\d+$/.test(val);
// console.log(isnum)

// // Uso o !isnum para inverter a lógica (se vier true, vira false, e vice versa).
// while (!isnum){
//     console.log('Entrada inválida!');
//     val = prompt("Insira um número: ");
//     isnum = /^\d+$/.test(val);
//     console.log(isnum)
// }





// //Valindado entrada de dados para só aceitar as entradas definidas
// while (true) {
//     perguntajogo = prompt(`Escolha? PEDRA, PAPEL, ou TESOURA ? `).toLowerCase();
//     console.log("\n");
//     if (perguntajogo === "pedra" || perguntajogo === "papel" || perguntajogo === "tesoura") {
//         break;
//     } else if (perguntajogo != "pedra") {
//         console.log(`Você não digitou corretamente o nome do elemento, tente novamente.`);
//         console.log("\n");
//     }else if (perguntajogo != "papel") {
//         console.log(`Você não digitou corretamente o nome do elemento, tente novamente.`);
//         console.log("\n");
//     }else if (perguntajogo != "tesoura") {
//         console.log(`Você não digitou corretamente o nome do elemento, tente novamente.`);
//         console.log("\n");
//     };
// };




// let continuar;

// do {
//     let jogador = prompt('Escolha seu elemento: ');

//     if(jogador.toLowerCase() == 'pedra'){
//         console.log('Ganhou!');
//     } else {
//         console.log('Perdeu!');
//     }
//     console.log();
//     continuar = prompt('Deseja jogar de novo??? ');
//     console.clear();
// } while (continuar == 'sim');






// let conhece;

// while (conhece != `sim` && conhece != `s` && conhece != `nao` && conhece != `n`) {
//   conhece = prompt(console.log(`Antes de continuar, preciso saber se você conhece o jogo Jokenpô?`)).toLowerCase();
//   console.clear();
// }


console.log();