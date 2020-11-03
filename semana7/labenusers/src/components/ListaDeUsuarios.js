import React from 'react'
import axios from 'axios'

const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headersAPI = {
    headers: {
        Authorization: "kelly-knoblauch-dumont"
    }
}

class ListaDeUsuarios extends React.Component {
    state = {
        listaDeRegistrados: [],
    }

    componentDidMount = () => {
        this.pegarRegistros()
    }

    pegarRegistros = () => {
        axios.get(baseURL, headersAPI
        ).then((register) => {
            this.setState({listaDeRegistrados: register.data})
        }).catch((error) => {
            alert("Lista não carregou!")
        })
    }

    apagarRegistro = (id) => {
        axios.delete(`${baseURL}/${id}`, headersAPI
        ).then((register) => {
            this.pegarRegistros()
            alert("Registro removido!")
        }).catch((error) => {
            alert("Registro não pode ser removido")
        })
    }

    deletarRegistro = (id) => {
        const confirmado = window.confirm("Tem certeza de que deseja deletar?");
        if (confirmado) {
            axios.delete(`${baseURL}/${id}`, headersAPI
            ).then((register) => {
            this.pegarRegistros()
            alert("Registro foi apagado")
            }).catch((error) => {
            alert("Registro NÃO pode ser apagado")
            })
        } else {
            alert("Operação cancelada")
        }
    }

    render() {
        const listaRenderizada = this.state.listaDeRegistrados.map((registro) => {
            return(
                <ul key={registro.id} className="listaDeRegistros">
                    {registro.name}
                    <button onClick={() => this.deletarRegistro(registro.id)}>Deletar</button>
                </ul>
            )
        })
        
        return(
            <div>
                <button onClick={this.props.botaoMudarPagina}>Voltar para página de Registro</button>
                {listaRenderizada}
            </div>
        )
    }
}

export default ListaDeUsuarios
