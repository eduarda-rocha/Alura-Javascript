import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente("vitor", 17622728793);
const cliente2 = new Cliente("Aline", 1871817917);
const ccVitor = new ContaCorrente(1010, cliente1);
const ccAline = new ContaCorrente(2012, cliente2);

ccVitor.depositar(1000);
ccAline.depositar(1200);
ccVitor.transferir(100, ccAline);

console.log(ccAline);
console.log(`Saldo Aline: ${ccAline.saldo}\n`);
console.log(ccVitor.cliente);
console.log(`Saldo Vitor: ${ccVitor.saldo}\n`);
console.log(`Número total de contas: ${ContaCorrente.numeroContas} \n`);