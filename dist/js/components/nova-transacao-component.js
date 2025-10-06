import Conta from "../types/Conta.js"; // por ser um objeto que está sendo exportado como default de um módulo, o import dele não precisa de chaves {}
import SaldoComponent from "./saldo-component.js";
const elementoFormularioTS = document.querySelector(".block-nova-transacao form");
elementoFormularioTS.addEventListener("submit", function (event) {
    event.preventDefault(); // toda vez que um formulário é submetido a página é carreda. Esse função evita o recarregamento da página quando o formulário é submetido, e dá acesso às informações do formulário
    // verifica se todos os itens do formulario foram preenchidos, tornando-o válido. O item required no html do formulário é o que faz essa validação
    if (!elementoFormularioTS.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação.");
        return;
    }
    const inputTipoTransacao = elementoFormularioTS.querySelector("#tipoTransacao");
    const inputValor = elementoFormularioTS.querySelector("#valor");
    const inputData = elementoFormularioTS.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value; // convertendo a string que vem do input em TipoTransacao
    let valor = inputValor.valueAsNumber; // valueAsNumber é uma propriedade existente nos Inputs
    let data = new Date(inputData.value);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    Conta.registrarTransacao(novaTransacao); // registra uma nova transação
    SaldoComponent.atualizar(); // atualiza o saldo visualmente
    elementoFormularioTS.reset(); // limpa o formulário
});
