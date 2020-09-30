/* ex 1
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/
//Se o número for par, ele não sobra resto ao dividir por 2, entao o resto é igual a zero, imprimindo a primeira mensagem

/* ex 2
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/
//a. O código serva para a pessoa escolher uma fruta e o preco ser induzido por frutas declaradas, ou um preco de 5 reais caso a fruta nao esteja na linha
//b. O preço da fruta maçã é R$ 2.25
//c. O código continua lendo as linhas e adere o último valor antes de um break. que no caso foi 5 do default.

/* ex 3 
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a. Pede ao usário para digitar um numero
//b. A mensagem para 10 será que passou no teste. Um numero negativo, como -10, não mostra nada pois nao declararam algo para <0.
//c. sim, pois nao esta com identacao correta para o ultimo console. Ele virou um main em um bloco diferente, enquanto sua variável está no escopo outro pai, no bloco acima.
*/
  /* ex 4
 let idade= Number(prompt("Digite sua idade"))
 

 if (idade>=18){
     console.log("Você pode dirigir!")
 }else{
     console.log("Você não pode dirigir :(")
 } */

 /*ex5
 let turno = prompt("Em que turno você estuda? Use 'M', 'V' ou 'N' ").toUpperCase()
 
 if (turno === "M") {
     console.log("Bom dia!")
 }else if (turno === "V") {
     console.log("Boa tarde!")
 }else if (turno === "N") {
     console.log("Boa noite!")
 }else {
     console.log("Turno inválido")
 } */

 /*ex 6 
 let turno = prompt("Em que turno você estuda? Use 'M', 'V' ou 'N' ").toUpperCase()

 switch (turno)  {
    case  "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
    default:
        console.log("Turno inválido")
        break;
 } */

 /*ex 7 
let filme = prompt("Qual gênero você quer assistir?").toLowerCase()
let preco = Number(prompt("Qual o preço do filme?"))

if ((filme === "fantasia") && (preco < 15)){
    console.log("Bom filme!")

}else{
    console.log ("Escolha outro filme :(")
}
*/