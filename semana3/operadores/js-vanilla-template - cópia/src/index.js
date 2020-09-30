/*
//1.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

//a. false
resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
//b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//c. true

console.log("e. ", typeof resultado)
//e. boolean
*/
/*
//2
let array 
console.log("a. ", array)
//undefined

array = null
console.log('b. ', array)
//b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//c. 11

let i = 0
console.log('d. ', array[i])
//d. 3 --(fica array[0])

array[i+1] = 19
console.log('e. ', array)
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] --(fica array[1]=19)

const valor = array [i+6]
console.log('f. ',valor )
//f. 9
*/

//1
/*
let idade= prompt("Qual a sua idade?")
let idadeAmigo= prompt("Qual a idade do seu amigo?")
resposta= Number(idade)>Number(idadeAmigo)
console.log('Sua idade é maior do que a do seu amigo?', resposta)
*/
//2
/*
let nPar= prompt("Por favor, insira um número par")
console.log(Number(nPar)%2)
*/
// todo numero par é divisível por 2, então nao sobra nada. Já numeros impares sobram 1 numero.
//3
/*
array = []
let ListaDeTarefas = array 
let atv1= prompt("Diga 1 atividade que tem de realizar hoje")
let atv2= prompt("Diga outra atividade que tem de realizar hoje")
let atv3= prompt("Diga uma última atividade que tem de realizar hoje")

ListaDeTarefas.push(atv1)
ListaDeTarefas.push(atv2)
ListaDeTarefas.push(atv3)

console.log(ListaDeTarefas)

let indiceRealizado = prompt("Digite um indice de 0 a 2 das tarefas que realizou")
ListaDeTarefas.splice(indiceRealizado,1)
console.log(ListaDeTarefas)
*/

//4
/*
let nome= prompt("Qual é o seu nome?")
let email= prompt("Qual é o seu e-mail?")

console.log("O e-mail ", email, " foi cadastrado com sucesso. Seja bem-vinde ", nome, "!" )
*/

//Desafio
//1
/*
let kelvin = (77-32) *5/9+273.15
console.log(kelvin,"K")
//b
let fah = 80*9/5+32
console.log(fah,"F") 

//c
let fah2 = 30*9/5+32
let kelvin2 = (fah2 - 32) *5/9+273.15
console.log(fah2,"F", kelvin2,"K")

let C = prompt("Escolha uma temperatura em C")
let F = C*9/5+32
let K = (F - 32) *5/9+273.15
console.log(F,"F", K,"K")
*/
/*
let kW= prompt("quantos kilowatts você consumiu?")
let valor = kW *0.05
console.log(valor, "reais")

let desconto = prompt("Valor de desconto em porcentagem")
let ValorComDesconto = valor * desconto /100
console.log(ValorComDesconto, "reais")
*/

//3
/*
let kg = 20* 0.45
console.log("20lb equivalem a", kg, "kg")

let kilo = 10.5 * 0.03
console.log("10.5 oz equivalem a", kilo, "kg")

let milhas = 100 * 1609.34
console.log("100 milhas equivalem a", milhas, "milhas")

let m = 50* 0.3
console.log("50ft equivalem a", m, "m")

let l = 103.56 * 3.79
console.log("103.56gal equivalem a", l, "L")

let litro = 450* 0.25
console.log("450 xicaras equivalem a", litro, "litros")


let pes = prompt("Dê um valor em pés")
let metros = pes * 0.30
console.log(pes, " pés equivalem a", metros, "metros")
*/