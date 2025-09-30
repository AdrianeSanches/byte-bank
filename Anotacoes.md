Navegar para pasta JS e rodar o comando tsc bytebank.ts para o TS fazer a conversão do arquivo TS para JS.
Ele vai fazer a compilação do arquivo e vai gerar dentro da pasta JS o arquivo bytebank.js, porque ele fez a conversão do código em em TS para JS.
Sempre que for feita uma alteração no TS, é necessário recompilar o arquivo para que ele reflita no JS.
Esse cenário são para projetos que não possuem o arquivo de configuração do TS - tsconfig.json

Dist: distribuição. Nome mais comum dado em projetos web à pastas que de fato representam o conjunto de arquivos que vão para o ambiete final (de produção).

SRC: source/fonte/código-fonte. É o nome comum dado à pasta de desenvolvimento de um projeto.

Ts-config: atquivo de configuração do TS e ele diz como o compilador do TS deve se comportar no projeto. Você pode criar o arquivo direto na mão, mas também pode rodar o comando tsc --init na raíz do projeto.

tsc -w: o w é de watch, ele fica monitorando a pasta SRC (q foi definida no ts-config) e toda vez que um arquivo TS for modificado, ele vai compilar e gerar o arquivo JS correspondente automaticamente
