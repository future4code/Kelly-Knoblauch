import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from './constants/constants'
import styled, { createGlobalStyle } from 'styled-components'
import Screens from './pages/Screens'
import ClearMatches from './components/ClearMatches/ClearMatches'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #D0D0D0;
    font-family: Roboto, sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`

const MainContainer = styled.div`
  width: 400px;
  height: 600px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;
`
const App = () => {
  const [profile, setProfile] = useState({})
  const [matches, setMatches] = useState([])

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = () => {
    axios
      .get(`${ baseUrl }/person`)
      .then(response => {
        setProfile(response.data.profile)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getMatches = () => {
    axios
      .get(`${ baseUrl }/matches`)
      .then(response => {
        setMatches(response.data.matches)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <GlobalStyle />
      <MainContainer>
        <Screens
          profile={ profile }
          getProfile={ getProfile } 
          matches={ matches }
          getMatches={ getMatches }
        />
      </MainContainer>
      <ClearMatches 
        profile={profile}
        getProfile={ getProfile }
        getMatches={ getMatches }
      />
    </div>  
  )
}

export default App

