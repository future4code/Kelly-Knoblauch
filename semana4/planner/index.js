function adicionarTarefa(params) {
    
    document.getElementById("tarefa").value
    let item = document.getElementById("tarefa").value // tive de criar uma const, pois nao reescrevia usando o comando acima no ${} 
    document.getElementById("dias-semana").value
    document.getElementById("tarefa").value = ""

        if (item === "") {
            alert ("Insira uma tarefa") //desafio1
        }

    switch (document.getElementById("dias-semana").value){
        case "domingo":
            document.getElementById("domingo").innerHTML += `<ul> <li> ${item}  </li> <ul>`
        break;
        case "segunda": 
            document.getElementById("segunda").innerHTML += `<ul> <li> ${item}  </li> <ul>`
        break; 
        case "terca": 
            document.getElementById("terca").innerHTML += `<ul> <li> ${item}  </li> <ul>`
        break; 
        case "quarta": 
            document.getElementById("quarta").innerHTML += `<ul> <li> ${item}  </li> <ul>`
        break; 
        case "quinta": 
            document.getElementById("quinta").innerHTML += `<ul> <li> ${item}  </li> <ul>`
        break; 
        case "sexta": 
            document.getElementById("sexta").innerHTML += `<ul> <li> ${item}  </li> <ul>`
        break; 
        case "domingo": 
            document.getElementById("domingo").innerHTML += `<ul> <li> ${item}  </li> <ul>`
        break; 
        default:
        break;
    }

}


