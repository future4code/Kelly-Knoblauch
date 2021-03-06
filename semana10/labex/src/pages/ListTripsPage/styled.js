import styled from 'styled-components'

export const ListTripsContainer = styled.div`
  max-width: 560px;
  margin: 0 auto;
   
  
  
  h2 {
    text-align: center;
    background-color: blueviolet;
    margin:  0 20%;
    margin-bottom: 20%;
    
  }
  `

export const TripsListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  button {
    margin: 1.6em 0.8em;
    font-size: 1em;
    font-weight: 700;
    padding: 0.4em 0;
    cursor: pointer;
  }
`

export const TripsListItem = styled.div`
  border-bottom: 1px dashed blueviolet;
  margin-bottom: 1.2em;
  padding: 0 1.2em;
  cursor: pointer;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1em 0;
`
