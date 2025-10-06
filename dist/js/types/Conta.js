import { TipoTransacao } from "./TipoTransacao.js";
let saldo = 3000;
// objeto com recursos que irá representar a minha conta
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao === TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        }
        else if (novaTransacao.tipoTransacao === TipoTransacao.TRANSFERENCIA ||
            novaTransacao.tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;
        }
        else {
            alert("Tipo de transação inválida");
            return;
        }
        console.log("novaTransacao dentro do objeto Conta");
        console.log(novaTransacao);
    },
};
// é comum exportar como default o objeto que está representando o módulo
export default Conta;
