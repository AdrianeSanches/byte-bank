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
