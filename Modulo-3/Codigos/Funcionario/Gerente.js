import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{

    constructor(nome, cpf, salario){
        super(nome, cpf, salario);
        this.#bonificacao = 1.1;
    }
}