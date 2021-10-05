// Criação do array:
const destinos = new Array(
    `Brasil`,
    `Chile`,
    `Japão`
);
const idadeComprador = 18;
const estaAcompanhado = true;
const passagemComprada = true;

console.log(destinos);

//condicional se tiver maior que 18 pode comprar, caso contrário não pode
if(idadeComprador >= 18 || estaAcompanhado){ // or 
    console.log(destinos);
} else{
    console.log("É preciso ter idade acima ou igual a 18 para comprar os pacotes de viagem");
}

//operadores lógicos encadeados 

console.log("Embarque :  \n");
if(idadeComprador >= 18 && passagemComprada ){ // and
    console.log("Liberado. Boa viagem! \n");
}else{
    console.log("Não liberado para embarque \n");
}


//alguns comparadores
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);