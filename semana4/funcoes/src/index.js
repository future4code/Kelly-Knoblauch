//exercicio 1

    // function minhaFuncao(variavel) {
    // 	return variavel * 5
    // }

    // console.log(minhaFuncao(2))
    // console.log(minhaFuncao(10))

    //a. imprimira "10" e "20" respectivamente
    //b. nao funcionaria igual, pois o return apenas manda realizar o resultado como saida, ao inves de aparecer na tela

//exercico 2
    
    // let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];


    // const outraFuncao = function(array) {
    // 	for (let i = 0; i < 2; i++) {
    // 		console.log(array[i])
    // 	}
    // }

    // outraFuncao(arrayDeNomes)


    //a. Darvas 
    //   Caio


    //b. Amanda
    //   Caio

// exerciocio 3

    // const metodo = (array) => {
    //     let arrayFinal = [];
    
    //     for (let x of array) {
    //           if (x % 2 === 0) {
    //           arrayFinal.push(x * x)
    //           }
    //     }
    
    //     return arrayFinal;
    // }

//Ela lê uma array, e para cada item dela que for par (divisivel por 2), o fará vezes ele mesmo, adicionando esse número a uma nova array (arrayFinal). 
//Nome: transformandoParesAoQuadrado

//exercício 4
//a.
    // function sobreMim() {
    //     console.log("Eu sou Kelly, tenho 23 anos, moro em Curitiba e sou estudante.")
        
    // }

    // sobreMim()
//b. 
    // function sobreMimParam(nome, idade, cidade, estudante){
    //     let = souEstudante
    //     if (estudante){
    //         souEstudante = "sou estudante"
    //     }else{
    //         souEstudante = "não sou estudante"
    //     }

        //ou
        //if (estudante){
        //  estudante = "sou estudante"
        //}else{
        //  estudante = "não sou estudante"
        //}

    //console.log("Eu sou ", nome, ", tenho ", idade,  "anos, sou de ", cidade, "e", souEstudante)



    // sobreMimParam("Kelly", 23, "Curitiba", false) 

//exercico 5

//a.
    // let  somaDoisNumeros=(a,b) => {
    //     return a + b 
    // }

    // let soma = somaDoisNumeros(1,2)
    // console.log(soma)
//b.
    // let compareDoisNumeros=(a,b) => {
    //    let maior = a >= b
    //    return maior
    // }
    // let comparacao = compareDoisNumeros(4,4)
    // console.log(comparacao)
//c.
    // let imprimirDezVezes = (estringue) => {
    //     for (let i = 0; i<10; i++){
    //         console.log(estringue)
    //     }
    // }
        
    // imprimirDezVezes("ola")


//exercicio 6
//const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//a.
    // let tamanhoArray = (matriz) => {
    //     return matriz.length
    // }
    // let size = tamanhoArray(array)
    // console.log(size)
    // ou apenas console.log(tamanhoArray(array))
 
//b.
    // let verifiqueParidade = (numero) => {
    //     let par = numero%2 === 0
    //     return par
    // }
    // console.log(verifiqueParidade(7))

//c.
    // let verifiqueNpares = (arraia) =>{
    //     let i = 0
    //     for (dubero of arraia){
    //         if (dubero%2 === 0){
    //             i++     
    //         }
        
    //     }
    //     return i
    // }
    // console.log(verifiqueNpares(array))

//d.
    // let verifiqueNpares2 = (arraya) =>{
    //     let i = 0
        
    //     for (n of arraya){
    //         if (verifiqueParidade(n)){
    //             i++
    //         }
    //     }
    //     return i 
    // }
    // console.log(verifiqueNpares2(array))

//desafio


// exerccio 1
//a.
// let erouF = (param) =>{
//     console.log(param)
// }
//b.
// let somaDoisNumeros = (a, b) =>{
//     soma = a + b
    
// }
// somaDoisNumeros(1,2)



// exercicio 2:
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// console.log(numeros)

// a.
// let matrizPar = []
// let dobrarPares = (array) =>{
//     for (elemento of array){
//         if (elemento %2 === 0){
//             matrizPar.push(elemento*2)
//         }
//     }
//     return matrizPar
// }
// console.log(dobrarPares(numeros))

//b.
// let verifiqueOmaior = (arraia) =>{
//     let maior = 0    // ou arraia[0]
//     for (n of arraia){
//         if (maior < n){
//             maior = n
//         }
//     }
//     return maior
// }
// console.log(verifiqueOmaior(numeros))

//c.
// let verPosicaoDoMaior = (array) =>{
//     let maiorI = 0
//     for (i=0; i < array.length; i++){
//         if (verifiqueOmaior(array) === array[i]){
//             maiorI = i
//         }
//     }
//     return maiorI
// }
// console.log(verPosicaoDoMaior(numeros))

// d.
let inverterArray = (array) =>{
    let aoContrario = []
    for (i = array.length; i > array.length; i--){
        aoContrario.push(array[i])
    }
    return aoContrario
}
console.log(inverterArray(numeros))


    