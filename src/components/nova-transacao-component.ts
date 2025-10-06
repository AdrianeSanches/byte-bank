import Conta from "../types/Conta.js"; // por ser um objeto que está sendo exportado como default de um módulo, o import dele não precisa de chaves {}
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import SaldoComponent from "./saldo-component.js";

const elementoFormularioTS = document.querySelector(
    ".block-nova-transacao form"
) as HTMLFormElement;

elementoFormularioTS.addEventListener("submit", function (event) {
    // inclusao de try catch para capturar o lançamento de erros
    try {
        event.preventDefault(); // toda vez que um formulário é submetido a página é recarregada. Esse função evita o recarregamento da página quando o formulário é submetido, e dá acesso às informações do formulário

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

        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        };

        Conta.registrarTransacao(novaTransacao); // registra uma nova transação
        SaldoComponent.atualizar(); // atualiza o saldo visualmente
        elementoFormularioTS.reset(); // limpa o formulário
    } catch (erro) {
        alert(erro.message);
    }
});
