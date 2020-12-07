import React from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite'


const UserRemovalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  font-size: 5rem;
`




export const UserRemoval = () => (
  <UserRemovalContainer>
    
      <FavoriteIcon fontSize='inherit'/>
    
  </UserRemovalContainer>
)
