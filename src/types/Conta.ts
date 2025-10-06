import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number = 3000;

function debitar(valor: number): void {
    if (valor <= 0) {
        throw new Error("O valor a ser debitado deve ser maior que zero!");
    }
    if (valor > saldo) {
        throw new Error("Saldo insuficiente");
    }

    saldo -= valor;
}

function depositar(valor: number): void {
    if (valor <= 0) {
        throw new Error("O valor a ser depositado deve ser maior que zero!");
    }
    saldo += valor;
}

// objeto com recursos que irá representar a minha conta
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso(): Date {
        return new Date();
    },
    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao === TipoTransacao.DEPOSITO) {
            // saldo += novaTransacao.valor; --> substituindo código para implementação de verificações e lançamentos de erros
            depositar(novaTransacao.valor);
        } else if (
            novaTransacao.tipoTransacao === TipoTransacao.TRANSFERENCIA ||
            novaTransacao.tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO
        ) {
            // saldo -= novaTransacao.valor; --> substituindo código para implementação de verificações e lançamentos de erros
            debitar(novaTransacao.valor);
        } else {
            throw new Error("Tipo de transação inválida");
        }

        console.log("novaTransacao dentro do objeto Conta");
        console.log(novaTransacao);
    },
};

// é comum exportar como default o objeto que está representando o módulo
export default Conta;
