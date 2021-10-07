export class ContaCorrente {
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