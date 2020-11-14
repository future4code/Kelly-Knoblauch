import React, { useEffect } from 'react'
import {
  MatchIcon, List, ListItem, Avatar, ListText
} from './styled'
import { mdiAccountSwitch } from '@mdi/js'
import Header from '../../../components/Header/Header'

const MatchesScreen = props => {

  useEffect(() => {
    props.getMatches() // eslint-disable-next-line
  }, [props.matches])
  
  return (
    <div>
      <Header 
        leftAction={ <MatchIcon
          path={ mdiAccountSwitch }
          size={ 1 }
          onClick={ props.goToSwipeScreen }
        /> }
      />
      <List>
        { props.matches && props.matches.map(user => (
          <ListItem key={ user.id }>
            <Avatar src={ user.photo }/>
            <ListText>{ user.name }</ListText>
          </ListItem>
        )) }
      </List>
    </div>
  )
}

export default MatchesScreen
