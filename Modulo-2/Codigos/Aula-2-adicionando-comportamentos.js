//criação das classes (primeira letra maiuscula)

class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    #saldo = 0; // atributo privado 

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) return;
        this.#saldo += valor;   
    }
}

const cliente1 = new Cliente();
const ccVitor = new ContaCorrente();

cliente1.nome = "Vitor";
cliente1.cpf = 17622728793;
ccVitor.agencia = 1010;

ccVitor.depositar(1000);
console.log(ccVitor);

const valorSaque = ccVitor.sacar(50);
console.log(`\nValor sacado: ${valorSaque}\n`);

//Antes de privar o atributo saldo: 
// ccVitor.saldo = 54131.98;

// console.log(`\nSaldo Antigo: ${ccVitor.saldo}`);

// ccVitor.sacar(131.98);
// console.log(`\nSaldo Atual: ${ccVitor.saldo}`);

// ccVitor.depositar(200);
// console.log(`\nNovo saldo com depósito: ${ccVitor.saldo}`);