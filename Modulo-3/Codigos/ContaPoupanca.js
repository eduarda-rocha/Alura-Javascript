import {Conta} from "./Conta.js"

export class ContaPoupanca extends Conta {

    constructor (agencia, cliente, saldo){
       super(agencia, cliente, saldo);
    }

    sacar(valor){
        const taxa = 1.01;
        return this.#sacar(valor,taxa);
    }
  
}