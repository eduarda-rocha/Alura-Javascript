// Criação do array:
const destinos = new Array(
    `Brasil`,
    `Chile`,
    `Japão`
);
const idadeComprador = 15;

console.log(destinos);

//condicional se tiver maior que 18 pode comprar, caso contrário não pode
if(idadeComprador >= 18){
    console.log(destinos);
}else{
    console.log("É preciso ter idade acima ou igual a 18 para comprar os pacotes de viagem");
}

//alguns comparadores
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);