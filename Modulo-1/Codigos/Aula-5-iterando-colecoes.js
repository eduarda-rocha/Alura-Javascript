
// Criação do array:
const destinos = new Array(
    `Brasil`,
    `Chile`,
    `Japão`
);

const idadeComprador = 18;
const estaAcompanhado = true;
let passagemComprada = false;

const destino = "Japão";
const podeComprar = (idadeComprador >= 18 || estaAcompanhado) 
let contador = 0;
let destinoExiste = false;

while(contador<3){
    if (destinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("\nDestino Existente: ", destinoExiste, "\n");