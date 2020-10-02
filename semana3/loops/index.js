//1
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
 
// }
// console.log(valor)
// valor será ele mais o próximo i, então a cada i ele adota o valor da soma anterior, mais o i atual.
// Como o console está fora do laço, ele printa apenas o ultimo valor na soma de i < 5. Que é 10

//2
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
//Todos os numeros maiores que 18 serao impressos
//Nao pois este apenas acessa elementos/ itens desse array. 

//2
// let array = [1 ,2 ,3 ,5, 8, 13, 21, 34]
// for (numero of array){
//     console.log(numero)
// }

// for (numero of array){
//     console.log(numero/10)
// }
//c.
// let pares = []

// for (let num of array){
//     if (num%2 ===0) {
//         pares.push(num);

//     }
// }
// console.log(pares)
//d.
// for (let i=0; i<array.length; i++){
//     console.log(`O elemento do índex ${i} é ${array[i]}`)
// }

// maior=array[0]
// for(num of array){
//     if (num>maior){
//         maior=num
//     }
// }
// console.log(`O maior número é ${maior}` )

//desafio 1
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
//ele escreve 0 em 4 linhas, adicionando um zeros a mais em cada linha