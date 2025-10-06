import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";
// para que a variável elementoSaldo nao apresente erro por conta de ser possível retornar um valor vazio, há duas formas de defensiva: a primeira é incluir as HTMLElement ao final do elemento, porém é recomendado fazer somente se você tiver certeza que o elemento existe. Caso seja possível ele não existir, o recomendado é validar se o elementoSaldo é diferente de null utilizando um if (como no comentário logo abaixo)
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
// exibindo data de acesso
if (elementoDataAcesso !== null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
renderizarSaldoTela();
function renderizarSaldoTela() {
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldoTela();
    },
};
// deixando visível externamente apenas o objeto SaldoComponent, o qual só possui o método renderizarSaldoTela()
export default SaldoComponent;
