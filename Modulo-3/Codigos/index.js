import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Alfredinho", 1762872872);
const ccAlfredinho = new ContaCorrente(1010, cliente1);
const cpAlfredinho = new ContaPoupanca(1010, cliente1, 2000);

ccAlfredinho.depositar(500);
ccAlfredinho.sacar(20);

console.log(cpAlfredinho);
console.log(ccAlfredinho);
