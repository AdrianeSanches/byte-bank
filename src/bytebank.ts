let saldoTS = 3000;

// para que a variável elementoSaldo nao apresente erro por conta de ser possível retornar um valor vazio, há duas formas de defensiva: a primeira é incluir as HTMLElement ao final do elemento, porém é recomendado fazer somente se você tiver certeza que o elemento existe. Caso seja possível ele não existir, o recomendado é validar se o elementoSaldo é diferente de null utilizando um if (como no comentário logo abaixo)
const elementoSaldo = document.querySelector(
    ".saldo-valor .valor"
) as HTMLElement;
elementoSaldo.textContent = saldoTS.toString();

// if (elementoSaldo != null) {
//     elementoSaldo.textContent = saldoTS.toString();
// }

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

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber; // valueAsNumber é uma propriedade existente nos Inputs
    let data: Date = new Date(inputData.value);

    if (tipoTransacao === "Depósito") {
        saldoTS += valor;
    } else if (
        tipoTransacao === "Transferência" ||
        tipoTransacao === "Pagamento de Boleto"
    ) {
        saldoTS -= valor;
    } else {
        alert("Tipo de transação inválida");
        return;
    }

    elementoSaldo.textContent = saldoTS.toString();

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };

    console.log("novaTransacao");
    console.log(novaTransacao);
    elementoFormularioTS.reset(); // limpa o formulário
});
