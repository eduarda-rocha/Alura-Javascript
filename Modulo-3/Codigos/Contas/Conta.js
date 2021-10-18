import { Cliente } from "./Cliente.js";

//classe abstrata
export class Conta {

    constructor(agencia, cliente, saldo){

        if(this.constructor == Conta){
            throw new  Error ("Voce não deve instanciar um objeto do tipo Conta diretamente, pois é uma classe abstrata");
        }
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

    //metodo abstrato
    sacar(valor){
        throw new Error ("o método sacar da conta é abstrato");
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