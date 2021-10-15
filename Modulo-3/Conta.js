import { Cliente } from "./Cliente.js";

export class Conta {

    constructor(agencia, cliente, saldo){
        this.#agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
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
        let taxa = 1;
        return this.#sacar(valor, taxa);
    }

    #sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this.#saldo >= valorSacado){
            this.#saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
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