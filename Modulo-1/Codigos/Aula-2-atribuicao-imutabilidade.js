const primeiroNome = "Barbara";
const sobrenome = "Rocha";

//concatenação:
console.log(primeiroNome + sobrenome); 

//com espaço:
console.log(primeiroNome + " " + sobrenome);
console.log(primeiroNome, sobrenome);

//usando a constante:
console.log(`Meu nome é : ${primeiroNome} ${sobrenome} `);

// nova atribuição a constantes:
//primeiroNome = primeiroNome + sobrenome;
//console.log(primeiroNome); //erro pois variaveis constantes não podem mudar de valor, como o nome diz são constantes 

//variaveis mutaveis usamos let:
let nomeCompleto = primeiroNome;
console.log(`Nome completo: ${nomeCompleto}`);

nomeCompleto = primeiroNome + sobrenome;
console.log(`Nova atribuição do nome completo: ${nomeCompleto}`);

//JS é fracamente tipada: mudando o valor para um inteiro
nomeCompleto = 2;
console.log(nomeCompleto);