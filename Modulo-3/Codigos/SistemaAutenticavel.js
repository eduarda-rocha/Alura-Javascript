// Para ser autenticavel é preciso ter o método autenticar

export class SistemaAutenticavel{

    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}