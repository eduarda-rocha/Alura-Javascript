import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
const ccVitor = new ContaCorrente();

cliente1.nome = "Vitor";
cliente1.cpf = 17622728793;
ccVitor.agencia = 1010;

ccVitor.depositar(1000);
console.log(ccVitor);

const valorSaque = ccVitor.sacar(50);
console.log(`\nValor sacado: ${valorSaque}\n`);
