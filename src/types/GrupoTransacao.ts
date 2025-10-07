import { Transacao } from "./Transacao";

// Array de transações efetuadas na conta - deposito/transferencia/pagamento
export type GrupoTransacao = {
    label: string;
    transacoes: Transacao[];
};
