// Tipos Primitivos
let valor = 3000;
let nome = "Adriane";
let isPago = false;
let qualquer = "";
qualquer = 22;
// Arrays
const lista = []; // se não atribuir qual o tipo do array, ao passar o mouse em cima da variável ele vai mostrar que é do tipo any[], ou seja, um array que aceita qualquer valor
const listaNumerica = [];
listaNumerica.push(25, 32, 1001, 56, 89);
//Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.TRANSFERENCIA,
    data: new Date(),
    valor: 0,
};
