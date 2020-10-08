const armazenarFormulario = () => {
    //transformando elemento html em const para ficar mais acessivel
    const oTitulo = document.getElementById("titulo-post")
    const oAutor = document.getElementById("autor-post")
    const oConteudo = document.getElementById("conteudo-post")

    //fazendo um objeto com esses campos
    const formulario = {
        titulo: oTitulo.value, //aprendi com Lais de por ".value" na const e nao no document
        autor: oAutor.value,
        conteudo: oConteudo.value
    }

    //fazendo uma array e inserindo nela
    let arrayDeDados = []
    
    arrayDeDados = [... arrayDeDados, formulario]
    /* tambem serviria
     arrayDeDados.push(formulario)
     console.log(arrayDeDados)*/

    // esvazia campos depois de enviados, nunca consigo usar as consts :(
    document.getElementById('titulo-post').value = "";
    document.getElementById('autor-post').value = "";
    document.getElementById('conteudo-post').value = "";

    //printando conteudo, usei container do html, mesmo dizendo para criar outra, pois parecia servir pra isso mesmo
    const containerPosts = document.getElementById('container-de-posts');
    containerPosts.innerHTML += "<h1>" + formulario.titulo + "</h1>" + "Autor: " + formulario.autor + "<br><br>" + formulario.conteudo
    
}

