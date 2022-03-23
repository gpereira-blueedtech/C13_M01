console.clear();
const prompt = require('prompt-sync')();

function avancahora(horaatual, tempopassado){
    console.log(`Se passaram ${tempopassado} horas`);
    horaatual = horaatual + tempopassado;

    // console.log(`Agora são ${horaatual} horas`);
    return horaatual;
}

let horas = 7;
let dia = 1;



for (let i = 0; i < 3; i++){
    while (horas <= 24){ 
        console.log(`Agora são ${horas} horas, dia ${dia}. Escolha uma opção:
        1 - Tomar café (1 hora)
        2 - Estudar (3 horas)
        3 - Ir trabalhar (5 horas)`);

        let escolha = +prompt()
        console.log();

        if (escolha == 1){
            horas = avancahora(horas, 1);
        } else if (escolha == 2){
            horas = avancahora(horas, 3);
        } else if (escolha == 3){
            horas = avancahora(horas, 5);
        } else {
            console.log('Opção inválida');
        }
        console.log();

        // console.log(`Agora são ${horas} horas`);
    }
    dia++
    horas = horas - 24;
}