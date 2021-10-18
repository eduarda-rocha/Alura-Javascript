import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario{

    constructor(nome, cpf, salario){
        super(nome, cpf, salario);
        this.#bonificacao = 2;
    }
}