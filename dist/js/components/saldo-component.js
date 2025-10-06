let saldoTS = 3000;
// para que a variável elementoSaldo nao apresente erro por conta de ser possível retornar um valor vazio, há duas formas de defensiva: a primeira é incluir as HTMLElement ao final do elemento, porém é recomendado fazer somente se você tiver certeza que o elemento existe. Caso seja possível ele não existir, o recomendado é validar se o elementoSaldo é diferente de null utilizando um if (como no comentário logo abaixo)
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatarMoeda(saldoTS);
}
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso !== null) {
    const dataAtual = new Date();
    // elementoDataAcesso.textContent = dataAtual.toLocaleDateString("pt-br") --> se passar a data dessa forma, ele vai converter a data em formato padrão do Brasil DD/MM/AAAA
    elementoDataAcesso.textContent = formatarData(dataAtual, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
