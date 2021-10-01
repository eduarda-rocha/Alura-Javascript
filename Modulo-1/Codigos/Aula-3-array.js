// Criação do array:
const destinos = new Array(
    `Brasil`,
    `Chile`,
    `Japão`
);
console.log(destinos);

// Adicionar um elemento no array:
destinos.push(`Coreia`);
console.log(destinos);

// Remover um elemento do array:
destinos.splice(2,1); // o array começa no posicao 0, ou seja, é zero-based
console.log(destinos);

// Imprimir um elemento especifico do array:
console.log(destinos[0]);
console.log(destinos[2]);
