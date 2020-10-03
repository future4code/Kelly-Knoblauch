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

console.log("Bem vinde ao Blackjack!")

let cartaUser = []
let userCompile = []
let cartaPC = []

let i = 0
while (i === 0){
   if (confirm("DESEJA INICIAR UMA NOVA RODADA?")){
      cartaUser = []
      cartaUser.push(comprarCarta(),comprarCarta())
      let valorUser = cartaUser[0].valor + cartaUser[1].valor
      while (valorUser===22){  // unica possibilidade de dar 22 é dais A
         cartaUser = [comprarCarta(), comprarCarta()] 
      }
      userCompile = [cartaUser[0].texto, cartaUser[1].texto]
      
      cartaPC = []
      cartaPC.push(comprarCarta(),comprarCarta())
      let valorPC = cartaPC[0].valor + cartaPC[1].valor
      while (valorPC===22){
         cartaPC = [comprarCarta(), comprarCarta()]
      }

      if (confirm(`Suas cartas são ${userCompile}. A carta revelada do computador é ${cartaPC[0].texto}. Comprar mais cartas?`)){
         let buleano = true //criar valor boolen para direcionar acoes
         for (let i=2; (buleano && (valorUser < 22)); i++){
            cartaUser.push(comprarCarta())
            userCompile.push(cartaUser[i].texto)
            valorUser = 0
            for (let n=0; n < cartaUser.length; n++){
               valorUser += cartaUser[n].valor
            }
            console.log(`Você agora tem ${userCompile}, valendo ${valorUser} pontos.`)
            if (valorUser < 22){
               buleano = confirm(`Você agora tem ${userCompile}, valendo ${valorUser} pontos. Continuar comprando?`)
            } else {
               console.log(`Tente outra vez`)
               buleano = false
            }
         }

      }
      console.log(`As suas cartas eram ${userCompile}.\nAs cartas do computador eram ${cartaPC[0].texto} e ${cartaPC[1].texto}`)

      if ((valorUser > valorPC) && (valorUser < 22)){
         console.log("Você ganhou!")
      } else if (valorUser < valorPC){
         console.log("O computador ganhou!")
      } else if (valorUser === valorPC){
         console.log("Empate!")
      }

      if (!confirm("Continuar jogando?")){
         i = 1
      }
   } else {
      i = 1
   }
}
