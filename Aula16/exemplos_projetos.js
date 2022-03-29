console.clear();
const prompt = require('prompt-sync')();

let personagem = {
    nome: 'Kleiton',
    vida: 10,
    vivo: true,

    diminuiVida: function(dano){
        console.log(`Você tomou ${dano} de dano.`);
        this.vida -= dano;
        if (this.vida <= 0){
            this.fimdejogo();
        }
    },

    exibirstatus: function(){
        console.log('Vida:', this.vida);
    },

    fimdejogo: function(){
        console.log('Seu personagem morreu.');
        this.vivo = false;
    }
}


// Uma das maneiras de acabar o jogo quando o personagem morrer.
while (personagem.vivo){
    personagem.exibirstatus();

    console.log(`Faça sua escolha:
    1 - Correr (0 dano)
    2 - Atacar o monstro pelado (5 dano)
    3 - Atacar com um tijolo (2 de dano)
    4 - Falar que o monstro tem cara de melão (10 dano)`);
    let escolha = +prompt();

    if (escolha == 1){
        break;
    } else if (escolha == 2){
        personagem.diminuiVida(5);
    } else if (escolha == 3){
        personagem.diminuiVida(2);
    } else if (escolha == 4){
        personagem.diminuiVida(10);
    }
}