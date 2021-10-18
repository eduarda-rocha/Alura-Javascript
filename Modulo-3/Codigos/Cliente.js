export class Cliente {
    nome;
    #cpf;

    constructor(nome, cpf, senha){
        this.nome = nome;
        this.#cpf = cpf;
        this.#senha = senha;
    }

    get cpf(){
        return this.#cpf;
    }
}