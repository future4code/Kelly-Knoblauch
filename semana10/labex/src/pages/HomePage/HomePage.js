import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  goToApplicationFormPage,
  goToLoginPage,
  goToSignupPage,
  goToListTripsPage,
} from '../../historyRequisition/goToPages'
import { 
  HomeContainer, 
  ButtonsContainer, 
} from './styled'

const HomePage = () => {
  const history = useHistory()

  const token = window.localStorage.getItem("token")

  return (

    //a lógica do token é para não aparecer os botões de sign up e login ao voltar para a home quando já estiver logado
    
    <HomeContainer>
      <h2>Bem vinda(o) ao Labex!</h2>
      <ButtonsContainer>
        <button onClick={ () => goToApplicationFormPage(history) }>
          Formulário de inscrição de viagens
        </button>
        { token ? (
          <button onClick={ () => goToListTripsPage(history) }>
            Ir para Área do Usuário
          </button>
        ) : (
          <div>
            <button onClick={ () => goToSignupPage(history) }>
              Criar novo usuário
            </button>
            <button onClick={ () => goToLoginPage(history) }>
              Fazer Login
            </button>
          </div>
        ) }
        
      </ButtonsContainer>
    </HomeContainer>
  )
}

export default HomePage
