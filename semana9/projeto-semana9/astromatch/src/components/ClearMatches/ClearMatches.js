import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl } from '../../constants/constants'

const ClearMatchesContainer = styled.button`
	position: fixed;
	bottom: 5px;
	right: 5px;
`

const ClearMatches = props => {

	const clear = () => {
		axios
			.put(`${ baseUrl }/clear`)
			.then(response => {
				console.log(response.data)
				!props.profile && props.getProfile()
			})
			.catch(err => {
				console.log(err)
			})
	}

	return (
			<ClearMatchesContainer onClick={ clear }>
				Limpar swipes e matches
			</ClearMatchesContainer>
	)
}

export default ClearMatches