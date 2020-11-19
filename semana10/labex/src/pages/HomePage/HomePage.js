import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  goToApplicationFormPage,
  goToLoginPage,
  goToSignupPage,
  goToListTripsPage,
} from '../../historyRequisition/goToPages'
import { 
  HomePageWrapper, 
  NavButtonsWrapper, 
} from './styled'

const HomePage = () => {
  const history = useHistory()

  const token = window.localStorage.getItem("token")

  return (

    //a lógica do token é para não aparecer os botões de sign up e login ao voltar para a home quando já estiver logado
    
    <HomePageWrapper>
      <h2>Home</h2>
      <NavButtonsWrapper>
        <button onClick={ () => goToApplicationFormPage(history) }>
          Ir para Formulário de Inscrição
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
        
      </NavButtonsWrapper>
    </HomePageWrapper>
  )
}

export default HomePage
