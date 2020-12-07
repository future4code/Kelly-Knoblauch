import React from 'react'
import {
  UserCardContainer,
  BlurredBackground,
  ProfilePicture,
  InfoContainer,
  TitleContainer,
  UserName,
  UserAge,
  UserDescription
} from './styled'

const UserCard = props => {
  return (
    <UserCardContainer>
      <BlurredBackground photo={ props.user.photo } />
      <ProfilePicture src={ props.user.photo } />
      <InfoContainer>
        <TitleContainer>
          <UserName>{ props.user.name }</UserName>
          <UserAge>{ props.user.age }</UserAge>
        </TitleContainer>
        <UserDescription>{ props.user.bio }</UserDescription>
      </InfoContainer>
    </UserCardContainer>
  ) 
}

export default UserCard
