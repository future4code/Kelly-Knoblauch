import React from 'react'
import { useHistory } from 'react-router-dom'
import { 
  goToHomePage,
  goToTripDetailsPage, 
  goToCreateTripPage,
} from '../../historyRequisition/goToPages'
import { baseUrl } from '../../constants/axiosConstants'
import { useProtectPage } from '../../hooks/useProtectedPage'
import { useGetTrips } from '../../hooks/useRequestData'
import {
  ListTripsContainer,
  TripsListContainer,
  TripsListItem,
  ButtonsContainer,
} from './styled'

const ListTripsPage = () => {
  const tripsList = useGetTrips(`${ baseUrl }/trips`, [])
  const history = useHistory()

  useProtectPage()

  const handleTripClick = (tripId) => {
    goToTripDetailsPage(history, tripId)
  }

  return (
    <ListTripsContainer>
      <h2>Lista de Viagens</h2>
      <TripsListContainer>
        {tripsList.map(item => {
          return (
            <TripsListItem 
              key={ item.id }
              onClick={ () => handleTripClick(item.id) }
            >
              <h3>{ item.name }</h3>
              <p>{ item.date } { "->" } <strong>{ item.planet }</strong></p>
            </TripsListItem>
          )
        })}
        <button onClick={ () => goToCreateTripPage(history) }>
          Criar Viagem
        </button>
      </TripsListContainer>
      <ButtonsContainer>
        <button onClick={ () => goToHomePage(history) }>
          Ir para Home
        </button>
      </ButtonsContainer>
    </ListTripsContainer>
  )
}

export default ListTripsPage