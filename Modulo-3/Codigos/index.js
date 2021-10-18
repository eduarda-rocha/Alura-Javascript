import { Cliente } from "./Conta/Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticavel } from "./SistemaAutenticavel.js";

const diretor = new Diretor("Fernando", 8171871917, 50000);
const gerente = new Gerente("Jucelino", 8279282089, 20000);

diretor.cadastroSenha("123456");
gerente.cadastroSenha("98765");

const gerenteEstaLogado = SistemaAutenticavel.login(gerente, "123456");
const diretorEstaLogado = SistemaAutenticavel.login(diretor, "123456");

console.log(gerenteEstaLogado, diretorEstaLogado);


