v

// O parâmetro tempoassado tem o valor padrão de 1.
// Isso quer dizer que caso não seja passado esse argumento, ele assumirá o valor de 1
// Caso o argumento seja passado, ele assumirá o valor passado normalmente.
function avancahora(horaatual, tempopassado = 1){
    console.log(`Se passaram ${tempopassado} horas`);
    horaatual = horaatual + tempopassado;

    // console.log(`Agora são ${horaatual} horas`);
    return horaatual; // Retornando a hora que recebeu como argumento depois de feita a soma
}

let horas = 7;
let dia = 1;


// Rodarei esse loop 3 vezes (3 dias, porque o while se encerra ao final de 24 horas).
for (let i = 0; i < 3; i++){
    // Enquanto não se passar 24 horas, repetirá a pergunta
    while (horas <= 24){ 
        console.log(`Agora são ${horas} horas, dia ${dia}. Escolha uma opção:
        1 - Tomar café (1 hora)
        2 - Estudar (3 horas)
        3 - Ir trabalhar (5 horas)`);

        let escolha = +prompt()
        console.log();

        if (escolha == 1){
            // Chamando a função com um só argumento, o segundo receberá o valor definido como padrão (1).
            horas = avancahora(horas);
        } else if (escolha == 2){
            // Chamando a função passando os dois argumentos.
            horas = avancahora(horas, 3);
        } else if (escolha == 3){
            horas = avancahora(horas, 5);
        } else {
            console.log('Opção inválida');
        }
        console.log();

        // console.log(`Agora são ${horas} horas`);
    }
    // Após passadas 24 horas, aumenta 1 dia
    dia++
    // Após isso, a var horas diminui em 24, para começar o outro dia com as horas que sobraram.
    horas = horas - 24;
}



// let tempo = 10;
// let vida = 100;

// function passatempo(tempoAtual){
//     let tempopassado = +prompt('Quanto tempo passou? ');
//     tempoAtual = tempoAtual + tempopassado;
//     return tempoAtual;
// }

// function mudavida(vidaAtual){
//     let vidaAlterada = +prompt('Quanto alterou a vida? ');
//     vidaAtual = vidaAtual + vidaAlterada;
//     return vidaAtual;
// }

// tempo = passatempo(tempo);
// vida = mudavida(vida);

// console.log(tempo);
// console.log(vida);