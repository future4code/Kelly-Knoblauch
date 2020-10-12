/*EXERCÍCIO DE INTERPRETAÇÃO 

1. O QUE FAZ: transforma valor de dólar em reais, uma vez que multiplica pela cotação em reais.
COMO FAZ: A funçao é invocada com um valor de parâmetro de escolha (valor que quero transformar de dolar para real), perguntando, com um prompt, ao usuário o 
valor da cotação para fazer esta reversão. A funcao faz o valor de dolar vezes a cotacao em reais, sem retornar a resposta (precisa de um console.log).
RESPOSTA ESPERADA: no exemplo dado, invoca a função com um parametro de 100. Essa funcao é guardada em uma variável
para imprimir o valor chamando a variável em um console.log. Supondo que o usuário escolha cotacao como R$5,53, o valor será impresso como 55,30 (100 * 5,53). 
Lembrando que essa variável guarda o parametro de 100. Para converter outros valores de dolar para real, precisa invocar a funcao com outro valor, e imprimir.

2. O QUE FAZ: lê um investimento de escolha e um valor de interesse a investir. De acordo com investimento, o valor investido retornará proporcional
ao investimento escolhido. Caso o ivstmt informado não se adeque a uma opcao do sistema, virá um alerta informando estar incorreto. A funcao nao retorna 
nenhuma valor, entao é necessario invoca-la num console.log, ou guardar em uma variavel e imprimir esta.
COMO FAZ: voce invoca a funcao informando primeiramente o parametro de tipo de investimento, e depois o valor em numero de quanto deseja saber quanto este vai
render a voce. A funcao faz isso com um padrao de condicional switch case. Cada invest fara uma multiplicacao com o valor de parametro, se for o poupanca, o 
valor renderá 1.03 vezes. Se for renda fixa, o valor renderá 1.05 vezes. Assim por diante. E como os tipos ja sao previstos pelo codigo, caso digite errado ou 
digite um nao informado, a ultima condicao envia lhe alerta a estar incorreto numa janelinha de alert. 
RESPOSTA ESPERADA: a primeira variavel invoca a funcao com "Acoes" e um  valor de 150. Sera impressa como 154,50 (150 * 1.03)
A segunda variavel impressa, guarda uma acao nao citada nas condicionais. Recebera um Alert de investimento incorreto.

3. O QUE FAZ: Le a primeira array de numeros, adicionando os pares a segunda array (array1), e os ímpares a terceira array (array2). Em seguida, imprime quantos 
numeros (ou o tamanho) que cada array tem.
COMO FAZ: com um laço de repeticao de for of percorrendo a array numeros, o codigo condiciona com if/else que cada numero dela que seja par 
(resto da divisao por 2 = 0 __ %2 === 0), seja adicionado na array1 com o .push. E os outros (consequnetmente impares) sejam adicionados array2,tmbm por um .push.
Por último, imprime o tamanho de cada array com .length em cada uma.
RESPOSTA ESPERADA: 
                    14
                    6
                    8

4. O QUE FAZ: Usa o laço for of para verificar maior e menor numero, da primeira array.
COMO FAZ: Declara valores para duas variaveis: infinity e 0. Lendo entao infinity como o maior numero, e 0 como o menor no universo de numeros, justamente para
direcionar o objetivo, junto com as condicionais. Se o primeiro numero for menor ( e com certeza sera) menor que infinity, ele faz a variavel que recebia 
infinity, receber este numero. Agora o laco esta condicionado a ler o proximo numero em relacao ao numero anterior. Cada vez que for menor, a variavel receberá
este numero, até receber entao, o menor numero da lista. O segundo if faz o inverso, condicionando os numeros maiores tomarem o lugar de 0. (Recomendável usar
-infinity para listas negativas). Podemos ver quais sao os numeros, pois o codigo da um console.log com cada variavel que teve seus valores alterados.
RESULTADO ESPERADO:
                    1590
                    -10

*/

/*Exercícios de lógica de programação 

1. forEach, map e filter

2.a) False
b) False
c) True
d) True
e) True
*/
