import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroContas = 0;

    constructor (agencia, cliente){
        super(agencia, cliente, 0);
        ContaCorrente.numeroContas ++;
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return this.#sacar(valor, taxa);
    }

}