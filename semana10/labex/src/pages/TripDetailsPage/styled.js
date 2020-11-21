import styled from 'styled-components'

export const TripDetailsScreenWrapper = styled.div`
	max-width: 560px;
  margin: 0 auto;
   
  
  
  h2 {
    text-align: center;
    background-color: blueviolet;
    margin:  0 20%;
    margin-bottom: 20%;
    
  }
  `

export const TripDetailsWrapper = styled.div`
  
  
  h3 {
    border-bottom: 1px solid blueviolet;
    margin: 1em 15%;
    text-align: center;
  }
`

export const TripDescriptionLabel = styled.h4`
  margin-bottom: 0.2em;
`

export const TripDescription = styled.p`
  margin-top: 0.2em;
`

export const CandidatesTitle = styled.h4`
  border-top: 3px double blueviolet;
  text-align: center;
  padding-top: 0.6em;
  margin-bottom: 0.8em;
`

export const CandidateListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
`

export const DetailsSpan = styled.span`
  font-weight: normal;
`

export const NavButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`