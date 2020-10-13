/*Exercício de interpretação 

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

3. Não funciona, pois o contador "i" não está exercendo a funçao de encrementar o próximo valor, e nem há valores a serem lidos.
const quantidadeDeNumerosPares = prompt("Digite um número")
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}

4. let verificarTriangulo = (a, b, c) => {
        if ((a === b) && (a === c) && (b === c)) {
            return "Equilátero"
        } else if ((a !== b) && (a !== c) && (b !== c)) {
            return "Escaleno"
        } else {
            return "Isósceles"
        }
    } // para fazer o isoceles, teria que comparar "um lado === outro lado ou outro lado" até filtrar todos os lados se igualando apenas a mais um outro, e diferente ao terceiro.

5.  let diferenca
    let verificaDoisNumeros = (a, b) => {
        if (a > b) {
           console.log (`${a} é maior`)
        } else if (b > a) {
            console.log (`${b} é maior`)
        } else {
            console.log ("São iguais")
        }

        if (a % b === 0) {
            console.log (`${a} é divisível por ${b}`)
        } else {
            console.log (`${a} não é divisível por ${b}`)
        }
        
        if (b % a === 0) {
            console.log (`${b} é divisível por ${a}`) 
        } else {
            console.log (`${b} não é divisível por ${a}`)
        }
        
        if ((a - b) >= 0) {
            diferenca = a - b
        } else {
            diferenca = (a - b) * (-1)
        }
        console.log (diferenca)
    }

    verificaDoisNumeros (15,30)
*/

//Exercicios de funções

/*1.
let numeros = [1, 2, 3, 4, 5, 6, 7]
let verificaSegundoMaior = (array) => {
    let novaArray = array
    let primeiroMaior = array[0]

    for (let numero of array) {
        if (numero > primeiroMaior) {
            primeiroMaior = numero
        }
    }

    let i = array.indexOf(primeiroMaior)
    let maiorNumero = novaArray.splice(i, 1)
    let segundoMaior = 0

    for (let numero of novaArray) {
        if (numero > segundoMaior) {
            segundoMaior = numero
        }
    }
    console.log(segundoMaior)
    
    novaArray = array
    let primeiroMenor = array[0]

    for (let numero of array) {
        if (numero < primeiroMenor) {
            primeiroMenor = numero
        }
    }

    i = array.indexOf(primeiroMenor)
    novaArray.splice(i, 1)
    
    let segundoMenor = array[0]

    for (let numero of array) {
        if (numero < segundoMenor) {
            segundoMenor = numero
        }
    }
    console.log(segundoMenor)
}
verificaSegundoMaior(numeros)

2.
let criarAlert = () => {
    window.alert("Hello future (Labenu)")
    }
    criarAlert()

criarAlert()
*/

//Exercícios de Objetos

/* 1. Arrays são listas de elementos ordenados. Enquanto objetos são listas mais organizadas, contendo chaves e valor como propriedade.
Podemos usar array quando queremos utilizar de elementos "soltos". Já um objeto organiza uma lista mais categoricamente do que apenas ordem de elemento.

2.
    let criaRetangulo = (lado1, lado2) => {
        return retangulo = {
            largura: lado1, 
            altura: lado2, 
            perimetro: (2 * (lado1 + lado2)), 
            area: (lado1 * lado2)
        }
    }
    ex:
    console.log(criaRetangulo(10,15)) 

 3.
    const filmeFavorito = {
        titulo: "Barbie lago dos cisnes", 
        ano: 2003, 
        diretore: "Owen Hurley", 
        atore: ["Barbie", "Odila", "Feiticeiro Ruth", "O Príncipe"]
    }
    console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretore} e estrelado por ${filmeFavorito.atore[0]}, ${filmeFavorito.atore[1]}, ${filmeFavorito.atore[2]} e ${filmeFavorito.atore[3]}`)

4.
const pessoa = {
    nome: "Kelly Knoblauch", 
    idade: 23, 
    email: "kellyknobla@gmail.com", 
    endereco: "Curitiba - Pr"
}

let anonimizarPessoa = () => {
    const anonimato = {
        ...pessoa,
        nome: "ANÔNIMO",
        email: "anonimo@gmail.com"
    }
    return anonimato
}
    
console.log(pessoa)
console.log(anonimizarPessoa())
*/

//Exercícios de funções de array

// 1.
/*
const novoArray = []
const novoArray2 = []

const pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
//1.a)
/*
const selecionarAdultos = pessoas.filter((pessoas) => {
    if (pessoas.idade >= 20) {
        return novoArray.push(pessoas.idade)
    }else{
        return false
    }
})
console.log(novoArray)
*/

//1.b)
/*
const selecionarJovens = pessoas.filter((pessoas) => {
    if (pessoas.idade < 20) {
        return novoArray2.push(pessoas.idade)
    }else{
        return false
    }
})
console.log(novoArray2)
*/

/*
 2. 
const array = [1, 2, 3, 4, 5, 6]
*/
//2.a)
/*
let dobrarValor = (array) => {
    let arrayNova = []
    array.forEach((elemento) => {
        arrayNova.push(elemento * 2)
    })
    return arrayNova
}
console.log(dobrarValor(array))
*/

/*
2.b)
let triplicarValorString = (array) => {
    let novaArray2 = []
    array.forEach((elemento) => {
        novaArray2.push(String(elemento * 3))
    })
    return novaArray2
}
console.log(triplicarValorString(array))
*/

/*
2.c)
let verificaParOuImpar = (array) => {
    let novaArray3 = []
    array.forEach((numero) => {
        if (numero % 2 === 0) {
            novaArray3.push(`${numero} é par`)
        } else {
            novaArray3.push(`${numero} é ímpar`)
        }  
    })
    return novaArray3
}
console.log(verificaParOuImpar(array))
*/

/* 3
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
3.a)
const permitidas = pessoas.filter((pessoa) => {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
        return true
    }else{
        return false
    })
console.log(permitidas)
*/

//3.b)
/*
const naoPermitidas = pessoas.filter((pessoa) => {
    if (pessoa.altura < 1.5 && pessoa.idade <= 14 && pessoa.idade > 60) {
        return true
    }else{
        return false
    })
console.log(naoPermitidas)
*/

/* 4.
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]
let arrayEmail = []
consultas.forEach((pessoa) => {
    if (pessoa.genero === "masculino") {
        arrayEmail.push(`Olá, Sr. ${ pessoa.nome }. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${ pessoa.dataDaConsulta }. Por favor, acuse o recebimento deste e-mail.`)
    } else {
        arrayEmail.push(`Olá, Sra. ${ pessoa.nome }. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${ pessoa.dataDaConsulta }. Por favor, acuse o recebimento deste e-mail.`)
    }  
})
console.log(arrayEmail)
let arrayEmailCancelado = []
consultas.forEach((pessoa) => {
    if (pessoa.genero === "masculino") {
        arrayEmailCancelado.push(`Olá, Sr. ${ pessoa.nome }. Infelizmente, sua consulta marcada para o dia ${ pessoa.dataDaConsulta } foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)
    } else {
        arrayEmailCancelado.push(`Olá, Sra. ${ pessoa.nome }. Infelizmente, sua consulta marcada para o dia ${ pessoa.dataDaConsulta } foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)
    }  
})
console.log(arrayEmailCancelado)
*/

/* 5.
const conta = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]
let atualizarSaldoTotal = (array) => {
    array.forEach((conta) => {
        let totalCompras = 0
        for (let valor of conta.compras) {
            totalCompras = totalCompras + valor
        }
        conta.saldoTotal = conta.saldoTotal - totalCompras
    })
    return conta
}
console.log(atualizarSaldoTotal(conta))
*/