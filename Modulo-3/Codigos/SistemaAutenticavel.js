// Para ser autenticavel é preciso ter o método autenticar
// duck type

export class SistemaAutenticavel{

    static login(autenticavel, senha){
        if(SistemaAutenticavel.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;  
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
         autenticavel.autenticar instanceof Function
    }
}