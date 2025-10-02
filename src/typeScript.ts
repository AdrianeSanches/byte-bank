// Tipos Primitivos
let valor: number = 3000;
let nome: string = "Adriane";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// Arrays
const lista = []; // se não atribuir qual o tipo do array, ao passar o mouse em cima da variável ele vai mostrar que é do tipo any[], ou seja, um array que aceita qualquer valor
const listaNumerica: number[] = [];
listaNumerica.push(25, 32, 1001, 56, 89);

//Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto",
}

// Tipos Personalizados (Type Alias)
type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number;
};

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.TRANSFERENCIA,
    data: new Date(),
    valor: 0,
};
