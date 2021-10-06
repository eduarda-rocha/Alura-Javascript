
// Criação do array:
const destinos = new Array(
    `Brasil`,
    `Chile`,
    `Japão`
);

const idadeComprador = 18;
const estaAcompanhado = false;
let passagemComprada = false;

const destino = "Japão";
const podeComprar = (idadeComprador >= 18 || estaAcompanhado) 
let contador = 0;
let destinoExiste = false;

//laco while
while(contador<3){
    if (destinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("\nDestino Existente: ", destinoExiste, "\n");

if (podeComprar && destinoExiste){
    console.log("Boa viagem!!\n");
}else{
    console.log("Desculpe ocorreu um erro!\n");
}

//laco for 
for(let i = 0; i < 3; i++){
    if (destinos[contador] == destino){
        destinoExiste = true;
        break;
    }
}