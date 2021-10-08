import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
const ccVitor = new ContaCorrente();
const cliente2 = new Cliente();
const ccAline = new ContaCorrente();


cliente1.nome = "Vitor";
cliente1.cpf = 17622728793;
ccVitor.agencia = 1010;
ccVitor.depositar(1000);

cliente2.nome = "Alice";
cliente2.cpf = 13298294893;
ccAline.agencia = 2772;
ccAline.depositar(1200);

ccVitor.cliente = cliente1;
ccAline.cliente = cliente2;

ccVitor.transferir(100, ccAline);

console.log(ccAline);
console.log(ccVitor);