/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//  console.log("Bem vindo ao jogo de BlackJack!")

//  if(confirm("Deseja começar uma nova rodada?")){
//    const carta = comprarCarta()
//    const carta1 = carta.texto
//    const carta1valor = carta.valor

//    const segundaCarta = comprarCarta()
//    const carta2 = segundaCarta.texto
//    const carta2valor = segundaCarta.valor 

//    const somaCartas = carta1valor + carta2valor
//    console.log(`Usuário - cartas: ${carta1} ${carta2} - pontuação ${somaCartas}`)

//    //cartas computador
//    const cartaPC = comprarCarta()
//    const carta3 = cartaPC.texto
//    const carta3valor = cartaPC.valor

//    const segundaCartaPC = comprarCarta()
//    const carta4 = segundaCartaPC.texto
//    const carta4valor = segundaCartaPC.valor 

//    const somaCartasPC = carta3valor + carta4valor
//    console.log(`Usuário - cartas: ${carta3} ${carta4} - pontuação ${somaCartasPC}`)
//    //comparando resultados
//    if (somaCartas>somaCartasPC && somaCartas<=21){
//       console.log("O usuário ganhou!")

//    }else if (somaCartas === somaCartasPC){
//       console.log ("Empatou!")
//    }else {
//       console.log("O computador ganhou!")
//    }
//  }else{
//     console.log("O jogo acabou")
//  }

