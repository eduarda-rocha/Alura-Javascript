import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    #cliente;
    #saldo = 0; // atributo privado 
    static numeroContas = 0;

    constructor (agencia, cliente){
        this.agencia = agencia;
        this.#cliente = cliente;
        ContaCorrente.numeroContas ++;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.#cliente = novoValor;
        }
    }

    get cliente(){
        return this.#cliente;
    }

    get saldo(){
        return this.#saldo;
    }

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

    transferir(valor, conta){
        const valorTransferido = this.sacar(valor);
        conta.depositar(valorTransferido);
    }
}