import { TipoTransacao } from "./TipoTransacao.js";
let saldo = JSON.parse(localStorage.getItem("saldo")) || 0;
// recuperando transacoes que foram guardadas na localStorage - se tem dados, ele dá o parse, se nao tiver, ele inicia a variável transacoes com um array vazio
// a arrow function que está sendo criada serve para pegar uma propriedade de dentro do objeto que está retornando da localStorage e tratá-la. No caso abaixo, vamos converter a data para o tipo DATE novamente, porque ela desce da localStorage em forma de string
const transacoes = JSON.parse(localStorage.getItem("transacoes"), (key, value) => {
    if (key === "data") {
        return new Date(value);
    }
    return value;
}) || [];
function debitar(valor) {
    if (valor <= 0) {
        throw new Error("O valor a ser debitado deve ser maior que zero!");
    }
    if (valor > saldo) {
        throw new Error("Saldo insuficiente");
    }
    saldo -= valor;
    localStorage.setItem("saldo", JSON.stringify(saldo));
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error("O valor a ser depositado deve ser maior que zero!");
    }
    saldo += valor;
    localStorage.setItem("saldo", JSON.stringify(saldo));
}
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
            // saldo += novaTransacao.valor; --> substituindo código para implementação de verificações e lançamentos de erros
            depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao === TipoTransacao.TRANSFERENCIA ||
            novaTransacao.tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
            // saldo -= novaTransacao.valor; --> substituindo código para implementação de verificações e lançamentos de erros
            debitar(novaTransacao.valor);
        }
        else {
            throw new Error("Tipo de transação inválida");
        }
        transacoes.push(novaTransacao); // incluindo nova transação no array de transações
        console.log("novaTransacao dentro do objeto Conta");
        console.log(novaTransacao);
        // registrando a transação na localStorage
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    },
};
// é comum exportar como default o objeto que está representando o módulo
export default Conta;
