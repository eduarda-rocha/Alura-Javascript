export class Funcionario{

    constructor(nome, cpf, salario){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#salario = salario;
        this.#bonificacao = 1;
        this.#senha;
    }

    autenticar(senha){
        return senha == this.#senha
    }
    
    get senha(){
        return this.#senha;
    }

    cadastroSenha(senha){
        this.#senha = senha;
    }

}