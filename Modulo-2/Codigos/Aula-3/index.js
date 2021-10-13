import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const ccVitor = new ContaCorrente();
const ccAline = new ContaCorrente();

ccVitor.cliente = new Cliente();
ccVitor.cliente.nome = "Vitor";
ccVitor.cliente.cpf = 17622728793;
ccVitor.agencia = 1010;

ccVitor.depositar(1000);

ccAline.cliente = new Cliente();
ccAline.cliente.nome = "Aline";
ccAline.cliente.cpf = 1871817917
ccAline.agencia = 2772;
ccAline.depositar(1200);

ccVitor.transferir(100, ccAline);

console.log(ccAline.cliente);
console.log(ccVitor.cliente);
console.log(ccVitor.saldo);