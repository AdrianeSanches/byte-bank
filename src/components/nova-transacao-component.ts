import { TipoTransacao } from "../types/TipoTransacao";
import { Transacao } from "../types/Transacao";

const elementoFormularioTS = document.querySelector(
    ".block-nova-transacao form"
) as HTMLFormElement;

elementoFormularioTS.addEventListener("submit", function (event) {
    event.preventDefault(); // toda vez que um formulário é submetido a página é carreda. Esse função evita o recarregamento da página quando o formulário é submetido, e dá acesso às informações do formulário

    // verifica se todos os itens do formulario foram preenchidos, tornando-o válido. O item required no html do formulário é o que faz essa validação
    if (!elementoFormularioTS.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação.");
        return;
    }

    const inputTipoTransacao = elementoFormularioTS.querySelector(
        "#tipoTransacao"
    ) as HTMLSelectElement;
    const inputValor = elementoFormularioTS.querySelector(
        "#valor"
    ) as HTMLInputElement;
    const inputData = elementoFormularioTS.querySelector(
        "#data"
    ) as HTMLInputElement;

    let tipoTransacao: TipoTransacao =
        inputTipoTransacao.value as TipoTransacao; // convertendo a string que vem do input em TipoTransacao
    let valor: number = inputValor.valueAsNumber; // valueAsNumber é uma propriedade existente nos Inputs
    let data: Date = new Date(inputData.value);

    if (tipoTransacao === TipoTransacao.DEPOSITO) {
        saldoTS += valor;
    } else if (
        tipoTransacao === TipoTransacao.TRANSFERENCIA ||
        tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO
    ) {
        saldoTS -= valor;
    } else {
        alert("Tipo de transação inválida");
        return;
    }

    elementoSaldo.textContent = saldoTS.toLocaleString("pt-br", {
        currency: "BRL",
        style: "currency",
    });

    const novaTransacao: Transacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };

    console.log("novaTransacao");
    console.log(novaTransacao);
    elementoFormularioTS.reset(); // limpa o formulário
});
