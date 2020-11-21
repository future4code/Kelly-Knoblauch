import styled from 'styled-components'

export const HomeContainer = styled.div`
	max-width: 560px;
  margin: 0 auto;
   
  
  
  h2 {
    text-align: center;
    background-color: blueviolet;
    margin:  0 20%;
    margin-bottom: 20%;
    
  }
`

export const ButtonsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  
  align-items: center;
  padding: 1em 0;
  div {
    display: inline-block;
    width: 320px;
  }
  button {
    display: inline-block;
    margin-top: 10%; 
    width: 320px;
    font-size: 1rem;
    font-weight: 700;
    padding: 1em 1em;
    cursor: pointer;
    
  }
`
