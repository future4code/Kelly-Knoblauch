//**Exercícios de interpretação de código**
/*
1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    ```jsx
    a = 10
    b = 10

    console.log(b)

    b = 5
    console.log(a, b)
    ```

    resposta: 10/  10,5  

    2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    ```jsx
    a = 10
    b = 20
    c = a  
    b = c  
    a = b  

    console.log(a, b, c)
    ```
    Resposta: 10, 10, 10 

    //Exercícios de escrita de código

    //1. a, b, c, d
    
    const nome =
    let idade =
    console.log(typeof nome)
    console.log(typeof idade)

    // não foram declarados texto nem números, então nao pôde identificar
    //d) 
    
    const nome = prompt ("Qual é o seu nome?")
    let idade = prompt("Qual é sua idade?")
    console.log(nome, idade)

    console.log(typeof nome)
    console.log(typeof idade)

    //e) ambos retornaram como string, pois ambos receberam uma variavel que nao 'number'

    //f)
    //console.log(`Olá, ${nome}. Você tem ${idade} anos`)
    */

    //2-1.
    
    let cidade = prompt ("Qual a sua cidade?")
    console.log("1. Qual a sua cidade?")
    console.log("Resposta:", cidade)

    let altura =  prompt ("Qual a sua altura?")
    console.log("2. Qual a sua altura?")
    console.log("Resposta:", altura)

    let cor = prompt ("Qual a cor da sua camisa?")
    console.log("3. Qual a cor da sua camisa?")
    console.log("Resposta:", cor)

    let idade= prompt ("Qual a sua idade?")
    console.log("4. Qual a sua idade?")
    console.log("Resposta:", idade)

    let mes= prompt ("Que mês estamos?")
    console.log("5. Que mês estamos?")
    console.log("Resposta:", mes)

    //3. a
    
    let array = ["arroz", "feijao", "batata", "chocolate", "frango"]
    console.log(array) 
    //b
    
    console.log("Essas são minhas comidas preferidas:")
    console.log(array[0])
    console.log(array[1])
    console.log(array[2])
    console.log(array[3])
    console.log(array[4])
    //c
    let comida = prompt("Qual a sua comida preferida?")

    array[1]= comida

    console.log("Essas são minhas comidas preferidas:")
    console.log(array[0])
    console.log(array[1])
    console.log(array[2])
    console.log(array[3])
    console.log(array[4]) 

    //4. a

    let array = ["sua idade é maior que 30?", "você é do gênero feminino?", "tem mais de 1.70?"]
    let arrayR= [false, true, false ]
    //b
    console.log(array[0],arrayR[0])
    console.log(array[1],arrayR[1])
    console.log(array[2],arrayR[2])  

    
    
