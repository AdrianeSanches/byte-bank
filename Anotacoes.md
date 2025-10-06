Navegar para pasta JS e rodar o comando tsc bytebank.ts para o TS fazer a conversão do arquivo TS para JS.
Ele vai fazer a compilação do arquivo e vai gerar dentro da pasta JS o arquivo bytebank.js, porque ele fez a conversão do código em em TS para JS.
Sempre que for feita uma alteração no TS, é necessário recompilar o arquivo para que ele reflita no JS.
Esse cenário são para projetos que não possuem o arquivo de configuração do TS - tsconfig.json

Dist: distribuição. Nome mais comum dado em projetos web à pastas que de fato representam o conjunto de arquivos que vão para o ambiete final (de produção).

SRC: source/fonte/código-fonte. É o nome comum dado à pasta de desenvolvimento de um projeto.

Ts-config: atquivo de configuração do TS e ele diz como o compilador do TS deve se comportar no projeto. Você pode criar o arquivo direto na mão, mas também pode rodar o comando tsc --init na raíz do projeto.

tsc -w: o w é de watch, ele fica monitorando a pasta SRC (q foi definida no ts-config) e toda vez que um arquivo TS for modificado, ele vai compilar e gerar o arquivo JS correspondente automaticamente

O JS atribui uma tipagem dinâmica, de forma que a mesma variável possa ter atribuída valores de diferentes tipos (string, number, etc). Já o TS atribui uma tipagem estática, de forma que você precisa declarar e seguir os tipos associados às variáveis correspondentes. Então se o tipo é number, você não pode inserir valores de outros tipos como string ou objeto.
Importante: inserir na tipagem do TS que determinada variável é do tipo any faz com que essa variável tenha a flexibilidade de aceitar qualquer valor, retomando o comportamento que as variáveis têm no JS.

Boa prática: ao criar uma variável no TS e atribuir um valor a ela, o prórpio TS reconhece qual o tipo dela. Exemplo: let valor = 3000 --> aqui o TS entende que a variável valor é do tipo number. Porém, uma boa prática é colocar a tipagem da variável mesmo que ele reconheca por si só. Exemplo: let valor: number = 3000.

Tipos Personalizados (Type Alias): é a montagem de tipos personalizados de acordo com o seu projeto
Enums: é um conjunto de valores fixos que definimos dentro do nosso código, que faz com que seja mais prática a identificação desse valores e também precise alterar em apenas um lugar caso eles sejam consumidos em vários pontos (muito utilizado nesse cenário)

A ordem de importação de arquivos JS no HTML importa. Então caso seja colocado arquivo por arquivo no HTML, deve ter maior atenção na ordem uma vez que um arquivo possa dependender do outro para sua execução. Uma solução para esse problema é a implementação de Modularização do projeto - a Modularização está disponível a partir do ES6

Pasta Components: para arquivos de componentes, que são aqueles que interagem com a interface. Importante ressaltar que esses arquivos devem apenas interagir com a interface e gerenciar as informações, mas não deve ter implementação de regra de negócio. Nesse caso, a regra de negócio é feita em outro arquivo e consultada pelo componente.
Pasta utils: para arquivos TS que representam funções livres e úteis que são utilizadas de forma livre dentro da aplicação
Pasta types: para arquivos que representam os tipos utilizados na aplicação

Trabalhando com Modularização do ES6: é necessário apenas 1 arquivo instanciando no HTML da aplicação, no qual vai centralizar as chamadas e importações necessárias. Cada arquivo, que também será um módulo, poderá importar aquilo que precisa internamente no módulo, deixando mais descritivo no código o que aquele código precisa e o que ele está importando para uso. Esse arquivo centralizador tem como padrão ser chamado de main ou de app.

Para iniciar o módulo, é necessário importar da forma correta no HTML para que o navegador trate o script main.js não como um JS padrão, mas sim como um módulo, fazendo com que todos os recursos de cada um dos arquivos importados ali dentro, seja tratado de forma isolada, fazendo com que não tenha mais o problema de variáveis com mesmo nome em mais de um arquivo. Para implementar, na importação do script no HTML, incluímos a propriedade type, atribuindo a ela o valor module. Cada arquivo TS passa a ser um módulo isolado, tornando necessário a importação correta dos arquivos. O arquivo main.js centraliza a inicialização dos componentes visuais da aplicação.

É comum exportar como default o objeto que está representando o módulo, assim como foi feito no Conta.ts . Importante ressaltar que só pode ter 1 item exportado como default de um módulo. Então geralmente exporta como default quando se tem apenas 1 item exportado de dentro do módulo. Não é obrigatório, mas é o comum.

## Tipos Primitivos

let valor: number = 3000;
let nome: string = "Adriane";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

## Arrays

const lista = []; // se não atribuir qual o tipo do array, ao passar o mouse em cima da variável ele vai mostrar que é do tipo any[], ou seja, um array que aceita qualquer valor
const listaNumerica: number[] = [];
listaNumerica.push(25, 32, 1001, 56, 89);

## Enum

enum TipoTransacao {
DEPOSITO = "Depósito",
TRANSFERENCIA = "Transferência",
PAGAMENTO_BOLETO = "Pagamento de Boleto",
}

## Tipos Personalizados (Type Alias)

type Transacao = {
tipoTransacao: TipoTransacao;
data: Date;
valor: number;
};

É uma boa prática criar um arquivo específico de tipo para cada tipo que for definido
O arquivo que criamos nesse projeto foi o Transacao. Ao ser compilado, o arquivo JS dele dentro da dist retorna vazio, isso porque o JS não tem um correspondente para tipagem.
