import styled from 'styled-components'

export const CreateTripContainer = styled.div`
	max-width: 560px;
  margin: 0 auto;
   
  
  
  h2 {
    text-align: center;
    background-color: blueviolet;
    margin:  0 20%;
    margin-bottom: 20%;
    
  }
  `

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 1em;
  label {
  }
  input[type=text], 
  input[type=text],  
  input[type=number], 
  select {
    width: 100%;
    padding: 0.8em 0.4em;
  }
  input[type=date] {
    width: 100%;
    padding: 0.4em;
    text-align: center;
  }
  textarea {
    width: 100%;
    height: 4em;
    padding: 0.8em;
  }
  button {
    width: 50%;
    align-self: center;
    display: inline-block;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.8em 0;
    margin: 1em 0;
    cursor: pointer;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`