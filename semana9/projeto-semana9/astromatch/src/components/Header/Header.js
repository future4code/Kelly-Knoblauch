import React from 'react'
import {
  HeaderContainer,
  ActionContainer,
  Logo, Astro, Match,
} from './styled'

const Header = props => {
  return (
    <HeaderContainer>
      <ActionContainer>
        { props.leftAction }
      </ActionContainer>
      <Logo>
        <Astro>astro</Astro>
        <Match>match</Match>
      </Logo>
      <ActionContainer>
        { props.rightAction }
      </ActionContainer>
    </HeaderContainer>
  )
}

export default Header