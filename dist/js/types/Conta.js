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
    getGruposTransacoes() {
        const gruposTransacoes = [];
        // const listaTransacoes: Transacao[] = transacoes; --> atribuindo a variavel transacoes dessa forma, estamos atribuindo a referencia dela para a variavel listaTransacoes, o que faz com que qualquer manipulação na variavel listaTransacoes afete a lista original que está em transacoes. Para evitar isso, usamos o comando structuredClone do JS. Ele é novo e copia somente a estrutura do objeto, sem dar acesso a referência do objeto original. OBS: um array também é visto como um objeto, por isso na atribuição simples ele acessa a referência da variável original
        const listaTransacoes = structuredClone(transacoes);
        // o getTime retorna um número que representa a nossa data. A ordem abaixo importa, uma vez que ao colocar o t2 na frente, significa que ele vai ordenar do maior para o menor (descrescente). Se alterar a posição para t1 - t2 ele vai uma ordenação crescente
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao = "";
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao = transacao.data.toLocaleDateString("pt-br", {
                month: "long",
                year: "numeric",
            });
            // criando um grupo de data novo caso ele não exista no array. Como a lista está ordenada, quando ele entrar no if abaixo, significa que é uma nova data
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: [],
                });
            }
            // gruposTransacoes.at(-1) --> acessando a última posição do array para adicionar a transação. Essa lógica funciona, porque todo grupo novo criado no índice atual do FOR ocupa a última posição do array, que é onde a transação pertence
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }
        return gruposTransacoes;
    },
    agruparTransacoes() {
        const resumo = {
            totalDepositos: 0,
            totalTransferencias: 0,
            totalPagamentosBoleto: 0,
        };
        this.transacoes.forEach((transacao) => {
            switch (transacao.tipoTransacao) {
                case TipoTransacao.DEPOSITO:
                    resumo.totalDepositos += transacao.valor;
                    break;
                case TipoTransacao.TRANSFERENCIA:
                    resumo.totalTransferencias += transacao.valor;
                    break;
                case TipoTransacao.PAGAMENTO_BOLETO:
                    resumo.totalPagamentosBoleto += transacao.valor;
                    break;
            }
        });
        return resumo;
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
            novaTransacao.valor *= -1; // multiplicando por -1 após o valor ser debitado, para quando ele entrar no registro ele entrar negativo
        }
        else {
            throw new Error("Tipo de transação inválida");
        }
        transacoes.push(novaTransacao); // incluindo nova transação no array de transações
        console.log("Grupos de Transações");
        console.log(this.getGruposTransacoes());
        // registrando a transação na localStorage
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    },
};
// é comum exportar como default o objeto que está representando o módulo
export default Conta;
